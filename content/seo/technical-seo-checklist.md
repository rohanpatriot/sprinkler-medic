# Technical SEO Checklist — Sprinkler Medic

**Status:** Pre-launch checklist — verify each item before go-live
**Stack:** Next.js 15 App Router, Tailwind CSS, Vercel

---

## 1. Semantic HTML & Heading Hierarchy

- [ ] Each page has exactly **one `<h1>`** matching the target keyword (see keyword-map.md)
- [ ] Subheadings use `<h2>`, `<h3>` in logical hierarchy — no skipping levels
- [ ] Navigation uses `<nav>` with `aria-label`
- [ ] Header uses `<header>`, footer uses `<footer>`, main content uses `<main>`
- [ ] Service cards/sections use `<article>` or `<section>` with descriptive headings
- [ ] Lists use `<ul>` / `<ol>`, not `<div>` styled to look like lists
- [ ] Phone numbers wrapped in `<a href="tel:+12566792934">` so mobile users can tap to call
- [ ] Address wrapped in `<address>` element on Contact page

**H1 per page:**
| Page | H1 |
|------|----|
| Home | "Sprinkler Repair & Irrigation Services in Huntsville, AL" |
| Services | "Irrigation & Sprinkler Services in Northern Alabama" |
| Irrigation Repair | "Sprinkler & Irrigation Repair in Huntsville, AL" |
| Irrigation Installation | "Irrigation System Installation in Huntsville, AL" |
| Leak Detection | "Irrigation Leak Detection & Repair in Huntsville, AL" |
| Winterization | "Sprinkler Winterization & Spring Start-Up — Huntsville, AL" |
| Outdoor Lighting | "Outdoor & Landscape Lighting Installation in Huntsville, AL" |
| Drainage | "Yard Drainage Solutions in Huntsville, AL" |
| About | "About Sprinkler Medic — Locally Owned, Northern Alabama" |
| FAQ | "Frequently Asked Questions — Sprinkler Medic" |
| Contact | "Contact Sprinkler Medic — Huntsville, AL" |

---

## 2. Meta Tags (via Next.js Metadata API)

### Required for every page:

```tsx
// app/page.tsx or each page file
export const metadata: Metadata = {
  title: 'PAGE TITLE | Sprinkler Medic',
  description: 'PAGE DESCRIPTION — max 160 chars',
  alternates: {
    canonical: 'https://sprinklermedic.com/PAGE_PATH',
  },
}
```

- [ ] **Title tags:** Unique per page, 50–60 chars, includes primary keyword + brand name
- [ ] **Meta descriptions:** Unique per page, 140–160 chars, includes primary keyword + CTA
- [ ] **Canonical URLs:** Set on every page — no trailing slash inconsistency
- [ ] **No duplicate titles** across pages
- [ ] **No duplicate meta descriptions** across pages

### Title tag targets:

| Page | Title Tag (check char count ≤60) |
|------|---------------------------------|
| Home | Sprinkler Repair Huntsville AL \| Sprinkler Medic |
| Services | Irrigation Services Huntsville AL \| Sprinkler Medic |
| Irrigation Repair | Sprinkler Repair Huntsville \| Same-Day \| Sprinkler Medic |
| Installation | Sprinkler Installation Huntsville AL \| Sprinkler Medic |
| Leak Detection | Irrigation Leak Detection Huntsville \| Sprinkler Medic |
| Winterization | Sprinkler Winterization Huntsville AL \| Sprinkler Medic |
| Outdoor Lighting | Outdoor Lighting Huntsville AL \| Sprinkler Medic |
| Drainage | Drainage Solutions Huntsville AL \| Sprinkler Medic |
| About | About Sprinkler Medic \| Irrigation Huntsville AL |
| FAQ | Irrigation FAQ \| Sprinkler Medic Huntsville AL |
| Contact | Contact Us \| Sprinkler Medic (256) 679-2934 |

---

## 3. Open Graph & Twitter/X Meta Tags

Add to root `layout.tsx` `metadata` export + per-page overrides:

```tsx
export const metadata: Metadata = {
  openGraph: {
    title: 'PAGE TITLE',
    description: 'PAGE DESCRIPTION',
    url: 'https://sprinklermedic.com/PAGE_PATH',
    siteName: 'Sprinkler Medic',
    images: [
      {
        url: 'https://sprinklermedic.com/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Sprinkler Medic — Irrigation Services in Huntsville, AL',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PAGE TITLE',
    description: 'PAGE DESCRIPTION',
    images: ['https://sprinklermedic.com/images/og-image.jpg'],
  },
}
```

- [ ] OG image created at 1200×630px — shows logo + "Sprinkler Repair Huntsville AL" tagline
- [ ] OG image < 200KB (compress with squoosh or similar)
- [ ] Twitter card uses `summary_large_image`
- [ ] OG title and description set globally, overridden per page
- [ ] Validate with [opengraph.xyz](https://www.opengraph.xyz/) after deployment

---

## 4. Canonical Tags

- [ ] Root layout sets default canonical via `alternates.canonical`
- [ ] Each page overrides canonical with its own absolute URL
- [ ] Canonical matches the preferred URL format (www vs non-www, trailing slash policy)
- [ ] No page has multiple canonical tags
- [ ] Service area pages (if created) have unique canonicals, NOT pointing to parent

**Canonical policy:** Use `https://sprinklermedic.com` (no www, no trailing slash) consistently across all pages and internal links.

---

## 5. Robots.txt

Create at `/public/robots.txt`:

```txt
User-agent: *
Allow: /

# Block admin/API paths (if applicable)
Disallow: /api/

Sitemap: https://sprinklermedic.com/sitemap.xml
```

- [ ] `robots.txt` accessible at `https://sprinklermedic.com/robots.txt`
- [ ] No important pages accidentally disallowed
- [ ] Sitemap URL included
- [ ] Verify with Google Search Console after submission

---

## 6. XML Sitemap

Next.js 15 App Router auto-generates via `app/sitemap.ts`:

```ts
// app/sitemap.ts
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://sprinklermedic.com',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://sprinklermedic.com/services',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://sprinklermedic.com/services/irrigation-repair',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://sprinklermedic.com/services/irrigation-installation',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://sprinklermedic.com/services/leak-detection',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://sprinklermedic.com/services/winterization',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://sprinklermedic.com/services/outdoor-lighting',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://sprinklermedic.com/services/drainage',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://sprinklermedic.com/about',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    {
      url: 'https://sprinklermedic.com/gallery',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: 'https://sprinklermedic.com/testimonials',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: 'https://sprinklermedic.com/faq',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://sprinklermedic.com/contact',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8,
    },
  ]
}
```

- [ ] Sitemap includes all public pages
- [ ] Sitemap excludes `/api/`, `/booking/` (if third-party embed), noindex pages
- [ ] Submitted to Google Search Console after launch
- [ ] Submitted to Bing Webmaster Tools after launch
- [ ] Verify sitemap is auto-generated at `https://sprinklermedic.com/sitemap.xml`

---

## 7. Image Optimization

- [ ] All images use Next.js `<Image>` component (automatic WebP + lazy load)
- [ ] Every `<Image>` has descriptive `alt` text (not generic "image" or filename)
- [ ] Hero image included in `priority` prop (LCP optimization)
- [ ] Image filenames are descriptive: `sprinkler-repair-huntsville-al.jpg` not `IMG_1234.jpg`
- [ ] No images served over 100KB after optimization
- [ ] Use `sizes` prop for responsive images

**Alt text examples:**
- Hero: "Sprinkler Medic technician repairing irrigation system in Huntsville AL"
- Service card: "Irrigation system repair service — Sprinkler Medic"
- Team: "Josh Gamble, owner of Sprinkler Medic, New Market AL"

---

## 8. Core Web Vitals Targets

**Target scores (Lighthouse, mobile):**
| Metric | Target | Critical Threshold |
|--------|--------|-------------------|
| LCP (Largest Contentful Paint) | < 2.5s | < 4s |
| FID / INP (Interaction to Next Paint) | < 200ms | < 500ms |
| CLS (Cumulative Layout Shift) | < 0.1 | < 0.25 |
| Performance Score | > 90 | > 75 |
| SEO Score | > 95 | > 90 |
| Accessibility Score | > 90 | — |

**Implementation checklist:**
- [ ] Hero image uses `priority` prop (prevents LCP delay)
- [ ] Fonts use `next/font` (zero layout shift, no FOUT)
- [ ] No layout shift from images — always specify `width` and `height`
- [ ] No layout shift from ads or embeds (HouseCall Pro iframe — set fixed height container)
- [ ] Run Lighthouse on mobile in Chrome DevTools before launch
- [ ] Run PageSpeed Insights after Vercel deployment
- [ ] Core Web Vitals passing in Google Search Console within 4 weeks post-launch

---

## 9. Internal Linking

- [ ] Homepage links to all 6 service pages
- [ ] Services landing page links to all 6 individual service pages
- [ ] Each service page links to 2–3 related services ("You may also need...")
- [ ] Footer includes links to all primary pages + phone number
- [ ] About page links to Services and Contact
- [ ] FAQ page links to relevant service pages where appropriate
- [ ] Contact page links to Services
- [ ] Anchor text is descriptive (not "click here" or "read more")

**Anchor text examples:**
- ✅ "sprinkler repair in Huntsville"
- ✅ "learn about our irrigation installation services"
- ❌ "click here"
- ❌ "read more"

---

## 10. URL Structure

**Convention:** lowercase, hyphenated, no trailing slashes

| Page | URL |
|------|----|
| Home | `/` |
| Services | `/services` |
| Irrigation Repair | `/services/irrigation-repair` |
| Installation | `/services/irrigation-installation` |
| Leak Detection | `/services/leak-detection` |
| Winterization | `/services/winterization` |
| Outdoor Lighting | `/services/outdoor-lighting` |
| Drainage | `/services/drainage` |
| About | `/about` |
| Gallery | `/gallery` |
| Testimonials | `/testimonials` |
| FAQ | `/faq` |
| Contact | `/contact` |
| Booking | `/booking` |

- [ ] All URLs are lowercase and hyphenated
- [ ] No underscores in URLs
- [ ] No URL parameters on static pages
- [ ] Consistent trailing slash policy (Vercel default: no trailing slash — confirm)

---

## 11. Mobile Optimization

- [ ] Viewport meta tag set: `<meta name="viewport" content="width=device-width, initial-scale=1">`
  (Next.js sets this automatically)
- [ ] Touch targets ≥ 44px (buttons, links)
- [ ] No horizontal scroll at 320px width
- [ ] Sticky CTA bar on mobile (phone + book now)
- [ ] Forms usable on mobile keyboard
- [ ] Phone number tapable from every page
- [ ] Test on real device (iPhone + Android) before launch

---

## 12. Security & Technical

- [ ] HTTPS enforced (Vercel provides SSL automatically)
- [ ] HTTP → HTTPS redirect active
- [ ] No mixed content warnings
- [ ] `X-Robots-Tag` header not accidentally blocking indexing
- [ ] Google Analytics 4 installed and collecting data
- [ ] Google Search Console property verified (HTML file or DNS method)
- [ ] Google Tag Manager installed (for future ad tracking)

---

## Launch Validation Checklist

Run these tools before and after launch:

1. **[Google Rich Results Test](https://search.google.com/test/rich-results)** — validate all schema types
2. **[PageSpeed Insights](https://pagespeed.web.dev/)** — mobile + desktop scores
3. **[Screaming Frog](https://www.screamingfrog.co.uk/seo-spider/)** (free up to 500 URLs) — crawl audit
4. **[Google Search Console](https://search.google.com/search-console/)** — submit sitemap, check coverage
5. **[opengraph.xyz](https://www.opengraph.xyz/)** — OG tag preview
6. **Lighthouse** in Chrome DevTools — all 4 categories
7. **[validator.schema.org](https://validator.schema.org/)** — schema validation
