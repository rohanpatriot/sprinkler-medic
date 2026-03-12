#!/usr/bin/env node
/**
 * Google Reviews & Photos Scraper for Sprinkler Medic
 *
 * Usage:
 *   node scripts/scrape-reviews.mjs [google-maps-url]
 *
 * If no URL is provided, it searches for "Sprinkler Medic Huntsville AL" on Google Maps.
 *
 * Output:
 *   - content/reviews.json         — scraped reviews
 *   - public/reviews/photos/       — downloaded review/business photos
 *   - content/scraped-gallery.json — photo metadata for the gallery page
 */

import puppeteer from 'puppeteer'
import fs from 'node:fs'
import path from 'node:path'
import https from 'node:https'
import http from 'node:http'

const ROOT = path.resolve(import.meta.dirname, '..')
const REVIEWS_JSON = path.join(ROOT, 'content', 'reviews.json')
const GALLERY_JSON = path.join(ROOT, 'content', 'scraped-gallery.json')
const PHOTOS_DIR = path.join(ROOT, 'public', 'reviews', 'photos')

const DEFAULT_SEARCH = 'Sprinkler Medic Huntsville AL'
const MAX_REVIEWS = 50
const SCROLL_PAUSE = 2000

const USER_AGENT =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36'

// Ensure output directories exist
fs.mkdirSync(path.join(ROOT, 'content'), { recursive: true })
fs.mkdirSync(PHOTOS_DIR, { recursive: true })

function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http
    const req = client.get(url, { headers: { 'User-Agent': USER_AGENT } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return downloadImage(res.headers.location, filepath).then(resolve).catch(reject)
      }
      if (res.statusCode !== 200) {
        res.resume()
        reject(new Error(`HTTP ${res.statusCode}`))
        return
      }
      const stream = fs.createWriteStream(filepath)
      res.pipe(stream)
      stream.on('finish', () => {
        stream.close()
        resolve(filepath)
      })
      stream.on('error', reject)
    })
    req.on('error', reject)
    req.setTimeout(15000, () => {
      req.destroy()
      reject(new Error('timeout'))
    })
  })
}

async function scrollPanel(page, maxScrolls = 30) {
  let scrolls = 0
  let lastHeight = 0

  while (scrolls < maxScrolls) {
    const newHeight = await page.evaluate(() => {
      // Find the scrollable panel — it's the main side panel
      const panels = document.querySelectorAll('div.m6QErb.DxyBCb.kA9KIf.dS8AEf')
      if (panels.length > 0) {
        const panel = panels[panels.length - 1]
        panel.scrollTop = panel.scrollHeight
        return panel.scrollHeight
      }
      // Fallback: scroll the entire side panel
      const sidePanel = document.querySelector('div.m6QErb')
      if (sidePanel) {
        sidePanel.scrollTop = sidePanel.scrollHeight
        return sidePanel.scrollHeight
      }
      return 0
    })

    if (newHeight === lastHeight) break
    lastHeight = newHeight
    scrolls++
    await new Promise((r) => setTimeout(r, SCROLL_PAUSE))
  }

  return scrolls
}

async function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms))
}

async function scrapeReviews() {
  const mapsUrl = process.argv[2] || null

  console.log('Launching browser...')
  const browser = await puppeteer.launch({
    headless: 'new',
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--lang=en-US',
      '--window-size=1280,900',
    ],
  })

  const page = await browser.newPage()
  await page.setViewport({ width: 1280, height: 900 })
  await page.setUserAgent(USER_AGENT)
  await page.setExtraHTTPHeaders({ 'Accept-Language': 'en-US,en;q=0.9' })

  try {
    // Step 1: Navigate to the business
    if (mapsUrl) {
      console.log(`Navigating to: ${mapsUrl}`)
      await page.goto(mapsUrl, { waitUntil: 'networkidle2', timeout: 30000 })
      await sleep(4000)
    } else {
      console.log(`Searching Google Maps for: "${DEFAULT_SEARCH}"`)
      const searchUrl = `https://www.google.com/maps/search/${encodeURIComponent(DEFAULT_SEARCH)}`
      await page.goto(searchUrl, { waitUntil: 'networkidle2', timeout: 30000 })
      await sleep(4000)

      // Click the first search result
      console.log('Clicking first search result...')
      const clicked = await page.evaluate(() => {
        const links = document.querySelectorAll('a.hfpxzc')
        if (links.length > 0) {
          links[0].click()
          return true
        }
        return false
      })

      if (!clicked) {
        throw new Error('Could not find any search results to click')
      }
      await sleep(6000)
    }

    // Accept cookies if prompted
    try {
      const acceptButton = await page.$('button[aria-label*="Accept"]')
      if (acceptButton) await acceptButton.click()
    } catch {
      // No cookie dialog
    }

    // Verify we're on a business page
    const businessInfo = await page.evaluate(() => {
      const rating = document.querySelector('.F7nice')?.textContent || ''
      const name =
        document.querySelector('h1.DUwDvf')?.textContent ||
        document.querySelector('h1')?.textContent ||
        ''
      return { name: name.trim(), rating: rating.trim() }
    })
    console.log(`Business: ${businessInfo.name} (${businessInfo.rating})`)

    // Step 2: Click the Reviews tab
    console.log('Clicking Reviews tab...')
    const reviewsTabClicked = await page.evaluate(() => {
      const tabs = Array.from(document.querySelectorAll('button[role="tab"]'))
      const reviewTab = tabs.find((b) => /review/i.test(b.textContent || ''))
      if (reviewTab) {
        reviewTab.click()
        return true
      }
      // Fallback: click the review count
      const btns = Array.from(document.querySelectorAll('button'))
      const reviewCountBtn = btns.find(
        (b) => /^\d+\s*reviews?$/i.test(b.textContent?.trim() || ''),
      )
      if (reviewCountBtn) {
        reviewCountBtn.click()
        return true
      }
      return false
    })

    if (reviewsTabClicked) {
      console.log('Clicked Reviews tab')
      await sleep(3000)
    } else {
      console.log(
        'Warning: Could not find Reviews tab — scraping from current view',
      )
    }

    // Step 3: Sort by newest
    try {
      const sortClicked = await page.evaluate(() => {
        const btns = Array.from(document.querySelectorAll('button'))
        const sortBtn = btns.find(
          (b) =>
            b.getAttribute('aria-label')?.includes('Sort') ||
            b.textContent?.trim() === 'Sort',
        )
        if (sortBtn) {
          sortBtn.click()
          return true
        }
        return false
      })
      if (sortClicked) {
        await sleep(1500)
        await page.evaluate(() => {
          const items = Array.from(
            document.querySelectorAll('[role="menuitemradio"]'),
          )
          const newest = items.find((el) => /newest/i.test(el.textContent || ''))
          if (newest) newest.click()
        })
        await sleep(2000)
        console.log('Sorted by newest')
      }
    } catch {
      console.log('Could not change sort order')
    }

    // Step 4: Scroll to load reviews
    console.log('Scrolling to load reviews...')
    const scrollCount = await scrollPanel(page, 25)
    console.log(`Scrolled ${scrollCount} times`)

    // Expand all truncated reviews ("More" buttons)
    await page.evaluate(() => {
      const moreButtons = document.querySelectorAll(
        'button.w8nwRe.kyuRq, button.M77dve',
      )
      moreButtons.forEach((btn) => btn.click())
    })
    await sleep(1500)

    // Step 5: Extract reviews
    console.log('Extracting reviews...')
    const reviews = await page.evaluate((maxReviews) => {
      const reviewEls = document.querySelectorAll('div.jftiEf.fontBodyMedium')
      const results = []

      for (let i = 0; i < Math.min(reviewEls.length, maxReviews); i++) {
        const el = reviewEls[i]
        try {
          // Author name
          const nameEl = el.querySelector('.d4r55')
          const name = nameEl?.textContent?.trim() || 'Anonymous'

          // Rating (from aria-label like "5 stars")
          const ratingEl = el.querySelector('.kvMYJc')
          const ratingAttr = ratingEl?.getAttribute('aria-label') || ''
          const ratingMatch = ratingAttr.match(/(\d)/)
          const rating = ratingMatch ? parseInt(ratingMatch[1]) : 5

          // Review text (expanded)
          const textEl = el.querySelector('.wiI7pd')
          const text = textEl?.textContent?.trim() || ''

          // Date
          const dateEl = el.querySelector('.rsqaWe')
          const date = dateEl?.textContent?.trim() || ''

          // Photos attached to the review
          const photoEls = el.querySelectorAll('button.Tya61d')
          const photos = []
          photoEls.forEach((photoBtn) => {
            const style = photoBtn.getAttribute('style') || ''
            const urlMatch = style.match(/url\("?([^")\s]+)"?\)/)
            if (urlMatch) {
              let photoUrl = urlMatch[1]
              photoUrl = photoUrl.replace(/=w\d+-h\d+/, '=w800-h600')
              photoUrl = photoUrl.replace(/=s\d+/, '=s800')
              photos.push(photoUrl)
            }
          })

          if (text || photos.length > 0) {
            results.push({ name, rating, text, date, photos })
          }
        } catch {
          // skip
        }
      }

      return results
    }, MAX_REVIEWS)

    console.log(`Extracted ${reviews.length} reviews`)

    // Step 6: Extract business photos
    console.log('Looking for business photos...')
    let businessPhotos = []

    // Go back to Overview to find photo section
    await page.evaluate(() => {
      const tabs = Array.from(document.querySelectorAll('button[role="tab"]'))
      const overviewTab = tabs.find((b) => /overview/i.test(b.textContent || ''))
      if (overviewTab) overviewTab.click()
    })
    await sleep(2000)

    // Try to find "See photos" or similar
    const photoSectionClicked = await page.evaluate(() => {
      // Look for "Photos & videos" section images
      const imgs = document.querySelectorAll(
        'button.U39Pmb img, div.p-IBsc img, button.YKoRaf img',
      )
      const urls = []
      imgs.forEach((img) => {
        let src = img.getAttribute('src') || ''
        if (src && !src.includes('data:')) {
          src = src.replace(/=w\d+-h\d+/, '=w800-h600')
          src = src.replace(/=s\d+/, '=s800')
          urls.push(src)
        }
      })
      return urls
    })
    businessPhotos = photoSectionClicked || []
    console.log(`Found ${businessPhotos.length} business photos from overview`)

    // Also try Photos tab if available
    const photosTabExists = await page.evaluate(() => {
      const tabs = Array.from(document.querySelectorAll('button[role="tab"]'))
      const photoTab = tabs.find((b) => /photo/i.test(b.textContent || ''))
      if (photoTab) {
        photoTab.click()
        return true
      }
      return false
    })

    if (photosTabExists) {
      await sleep(3000)
      await scrollPanel(page, 5)

      const morePhotos = await page.evaluate(() => {
        const imgs = document.querySelectorAll(
          'button.U39Pmb img, div.p-IBsc img, a[data-photo-index] img',
        )
        const urls = []
        imgs.forEach((img) => {
          let src = img.getAttribute('src') || ''
          if (src && !src.includes('data:')) {
            src = src.replace(/=w\d+-h\d+/, '=w800-h600')
            src = src.replace(/=s\d+/, '=s800')
            urls.push(src)
          }
        })
        return urls
      })

      // Merge unique photos
      const existingSet = new Set(businessPhotos)
      for (const p of morePhotos) {
        if (!existingSet.has(p)) {
          businessPhotos.push(p)
          existingSet.add(p)
        }
      }
      console.log(`Total business photos after Photos tab: ${businessPhotos.length}`)
    }

    await browser.close()

    // Step 7: Download photos
    console.log('\nDownloading review photos...')
    let photoIndex = 0
    for (const review of reviews) {
      const downloadedPhotos = []
      for (const photoUrl of review.photos) {
        const filename = `review-${photoIndex}.jpg`
        const filepath = path.join(PHOTOS_DIR, filename)
        try {
          await downloadImage(photoUrl, filepath)
          downloadedPhotos.push(`/reviews/photos/${filename}`)
          console.log(`  Downloaded: ${filename}`)
          photoIndex++
        } catch (err) {
          console.warn(`  Failed: ${filename} — ${err.message}`)
        }
      }
      review.localPhotos = downloadedPhotos
    }

    console.log('Downloading business photos...')
    const galleryItems = []
    for (let i = 0; i < businessPhotos.length; i++) {
      const filename = `business-${i}.jpg`
      const filepath = path.join(PHOTOS_DIR, filename)
      try {
        await downloadImage(businessPhotos[i], filepath)
        galleryItems.push({
          src: `/reviews/photos/${filename}`,
          caption: `Sprinkler Medic project photo ${i + 1}`,
          category: 'Projects',
        })
        console.log(`  Downloaded: ${filename}`)
      } catch (err) {
        console.warn(`  Failed: ${filename} — ${err.message}`)
      }
    }

    // Step 8: Write output files
    const reviewsOutput = {
      scrapedAt: new Date().toISOString(),
      source: 'Google Maps',
      businessName: businessInfo.name || 'Sprinkler Medic',
      rating: businessInfo.rating,
      totalReviews: reviews.length,
      reviews: reviews.map((r) => ({
        name: r.name,
        rating: r.rating,
        text: r.text,
        date: r.date,
        photos: r.localPhotos || [],
      })),
    }

    fs.writeFileSync(REVIEWS_JSON, JSON.stringify(reviewsOutput, null, 2))
    console.log(`\nWrote ${reviews.length} reviews to content/reviews.json`)

    const galleryOutput = {
      scrapedAt: new Date().toISOString(),
      source: 'Google Maps',
      photos: galleryItems,
    }

    fs.writeFileSync(GALLERY_JSON, JSON.stringify(galleryOutput, null, 2))
    console.log(`Wrote ${galleryItems.length} gallery photos to content/scraped-gallery.json`)

    console.log('\nDone! Run `npm run dev` to see the results.')
  } catch (err) {
    console.error('Scraping failed:', err.message)
    await browser.close()
    process.exit(1)
  }
}

scrapeReviews()
