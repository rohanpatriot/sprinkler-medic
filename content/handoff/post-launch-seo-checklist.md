# Post-Launch SEO Checklist — Sprinkler Medic

**Execute immediately after site goes live at https://sprinklermedic.com**

---

## Day 0: Launch Day

### Verify Site is Live

- [ ] Visit https://sprinklermedic.com — confirms loads correctly
- [ ] Check all pages load without errors: /services, /about, /contact, /gallery, /faq, /booking
- [ ] Verify https:// is working (SSL active, no browser certificate warnings)
- [ ] Check https://sprinklermedic.com/sitemap.xml loads correctly (should show all 13 URLs)
- [ ] Check https://sprinklermedic.com/robots.txt loads correctly

### Google Search Console — Sitemap Submission

1. Go to https://search.google.com/search-console
2. Select the Sprinkler Medic property (or add it if not set up)
3. Navigate to **Sitemaps** in the left sidebar
4. Enter `sitemap.xml` in the "Add a new sitemap" field
5. Click **Submit**
6. Confirm status shows "Success"

### Request Indexing for Key Pages

In Search Console → URL Inspection tool:
- [ ] Submit https://sprinklermedic.com (homepage)
- [ ] Submit https://sprinklermedic.com/services
- [ ] Submit https://sprinklermedic.com/contact
- [ ] Click "Request Indexing" for each

---

## Day 0–1: Update All Business Profiles

### Google Business Profile

URL: https://business.google.com

- [ ] Update website URL to `https://sprinklermedic.com`
  - Use UTM: `https://sprinklermedic.com?utm_source=google&utm_medium=gmb`
- [ ] Verify primary category is **Irrigation Service**
- [ ] Confirm NAP: `2939 Winchester Rd, New Market, AL 35761 | (256) 679-2934`
- [ ] Update business description (use copy from `/content/seo/gbp-optimization.md`)
- [ ] Add all services with descriptions
- [ ] Upload 10+ photos: logo, cover, team, job site, before/after
- [ ] Enable attributes: Licensed, Insured, Emergency Services, Free Estimates
- [ ] Set service area cities: Huntsville, Madison, Decatur, Athens, Gurley, Toney, Hazel Green, New Market, Owens Cross Roads
- [ ] Seed Q&A section with 3 pre-answered questions

### Yelp

URL: https://m.yelp.com/biz/sprinkler-medic-new-market

- [ ] Log in and claim business if not yet claimed
- [ ] Update website URL to `https://sprinklermedic.com`
- [ ] Verify name: `Sprinkler Medic` (no extra words)
- [ ] Verify address: `2939 Winchester Rd, New Market, AL 35761`
- [ ] Verify phone: `(256) 679-2934`
- [ ] Update business description
- [ ] Upload photos (same set as GBP)
- [ ] Verify business categories match

### Facebook Business Page

URL: https://www.facebook.com/share/1CVLsjxcN7/

- [ ] Update website field to `https://sprinklermedic.com`
- [ ] Verify NAP fields match canonical NAP
- [ ] Update about/description section
- [ ] Upload new cover photo and profile photo (logo)

### Nextdoor Business Page

URL: https://nextdoor.com/page/sprinkler-medic-new-market-al

- [ ] Claim page if not yet claimed
- [ ] Update website URL
- [ ] Verify NAP matches
- [ ] Update description

### BBB Profile

URL: https://www.bbb.org/us/al/huntsville/profile/irrigation-repair/sprinkler-medic-0513-900234512

- [ ] Log into BBB account
- [ ] Update website URL
- [ ] Verify NAP matches
- [ ] Update service description

---

## Week 1: New Listings to Create

### Apple Maps Connect

URL: https://mapsconnect.apple.com

- [ ] Create or claim listing
- [ ] Enter all NAP data exactly
- [ ] Submit for verification (may take 5–7 business days)

### Bing Places for Business

URL: https://www.bingplaces.com

- [ ] Create or claim listing
- [ ] Enter all NAP data exactly
- [ ] Verify via phone or email

---

## Week 1: Monitor Indexing

Check Search Console → Coverage report:
- [ ] How many URLs indexed? (expect homepage first, then other pages over 1–2 weeks)
- [ ] Any "Crawl anomaly" or "Not found (404)" errors? Fix immediately.
- [ ] Any "Excluded" pages that should be indexed? Investigate.

### Indexing Timeline to Expect

| Timeframe | Expected |
|-----------|----------|
| Day 1–3 | Homepage indexed |
| Day 3–7 | Services pages indexed |
| Week 2 | Most pages indexed |
| Week 2–4 | Branded searches appear |
| Week 4–8 | Local pack impressions begin |

---

## Week 1: Verify Analytics is Tracking

### Google Analytics 4

1. Go to https://analytics.google.com
2. Check **Realtime** report — open a browser tab on the live site, confirm you see "1 active user" in GA4
3. Confirm traffic sources show up correctly
4. Verify Goal/Conversion events are firing (contact form submit, phone click)

### Vercel Analytics

1. Go to Vercel dashboard → your project → Analytics
2. Confirm it shows page views
3. Check Core Web Vitals scores

---

## Week 2: First Performance Snapshot

Record these metrics as your Week 1 baseline:

| Metric | Week 1 Actual | Target (Month 3) |
|--------|--------------|-----------------|
| Organic sessions | | 150+/month |
| Top organic keyword | | "sprinkler repair Huntsville" |
| Average position | | < 20 for primary keywords |
| GBP views (search + maps) | | 200+/month |
| GBP phone calls | | 10+/month |
| Core Web Vitals LCP | | < 2.5s |
| Core Web Vitals CLS | | < 0.1 |
| Core Web Vitals INP | | < 200ms |

---

## Week 2–4: Tier 2 Citation Building

Create listings on these high-impact directories:

| Directory | URL | Priority |
|-----------|-----|----------|
| Angi (Angie's List) | https://www.angi.com/local/add-business | High |
| HomeAdvisor | https://pro.homeadvisor.com | High |
| Thumbtack | https://www.thumbtack.com/sign-up/pro | High |
| Yellowpages | https://www.yellowpages.com/add-listing | Medium |
| Foursquare | https://business.foursquare.com | Medium |
| Houzz | https://www.houzz.com/pro | Medium |

**Use submission template from `/content/seo/citations-strategy.md`**

---

## Month 1: GBP Posting Schedule

Post to Google Business Profile at least twice per month:

**March posts:**
1. "Spring start-up season is here — is your irrigation system ready? Call (256) 679-2934 to schedule."
2. "We serve Huntsville, Madison, and across north Alabama. Book your spring start-up today!"

**Ongoing (rotate these):**
- Job completion posts ("Just finished an irrigation install in Madison, AL!")
- Seasonal tips ("3 signs your sprinkler system needs repair before summer")
- Offers ("Free system inspection when you book any repair this month")

---

## Month 1: Review Generation Push

After launch, send review requests to past customers:

**Text message template:**
> "Hi [Name], it's Josh from Sprinkler Medic! We just launched our new website. If you've worked with us before and had a great experience, a Google review would mean the world to us: [REVIEW_LINK]. Thank you!"

**Goal:** 10+ new Google reviews in the first 30 days

---

## Ongoing Monthly SEO Audit

Run this every month:

- [ ] Search Console: crawl errors, new ranking keywords, impressions trend
- [ ] Analytics: month-over-month traffic trend, top pages, bounce rate
- [ ] GBP: views, clicks, calls trend; check for flagged content or suspensions
- [ ] Review count: track total reviews + average rating on Google and Yelp
- [ ] Check for new duplicate GBP listings: search "Sprinkler Medic Huntsville" in Google Maps
- [ ] Lighthouse audit on homepage: confirm scores stay > 90

---

## Success Criteria (3-Month Goals)

- [ ] All 13 sitemap pages indexed in Google
- [ ] Ranking in top 3 local pack for "sprinkler repair Huntsville AL"
- [ ] Ranking in top 5 for "irrigation repair Huntsville"
- [ ] 20+ Google reviews with 4.5+ average rating
- [ ] GBP receiving 300+ views/month
- [ ] Organic traffic: 150+ sessions/month
- [ ] Contact form receiving regular leads

---

*Prepared by the SEO Specialist — Dudes Agency*
