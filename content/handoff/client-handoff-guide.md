# Sprinkler Medic Website — Client Handoff Guide

**Prepared for:** Josh Gamble / Sprinkler Medic
**Website:** https://sprinklermedic.com
**Prepared by:** SEO Specialist
**Date:** March 2026

---

## What You Own

You now have a fully custom website built on **Next.js** and hosted on **Vercel**. Here's a plain-language breakdown of what that means for you:

| Component | What It Is | Who Controls It |
|-----------|-----------|-----------------|
| **Website code** | The actual site files, stored on GitHub | Your dev team |
| **Hosting** | Vercel — auto-deploys every time code is pushed to `main` | Auto (no action needed) |
| **Domain** | sprinklermedic.com | You (registered separately) |
| **Analytics** | Google Analytics 4 + Vercel Analytics | You (via GA4 dashboard) |
| **Search Console** | Google Search Console | You (see below) |

---

## Accessing Your Tools

### Google Analytics 4
- **URL:** https://analytics.google.com
- **Property name:** Sprinkler Medic
- **Login:** Use your Google account (sprinklermedichsv@gmail.com)
- **What to check monthly:** Sessions, top pages, traffic sources, device breakdown

### Google Search Console
- **URL:** https://search.google.com/search-console
- **Login:** Use same Google account
- **What to check monthly:** Total clicks, impressions, average position, coverage errors

### Vercel Dashboard
- **URL:** https://vercel.com/dashboard
- **What it does:** Shows deployments, performance, and site status
- **Check if:** Site goes down or you need to see recent changes

### Google Business Profile
- **URL:** https://business.google.com
- **Login:** Your Google account
- **Check weekly:** New reviews, questions, calls, clicks

---

## Making Changes to Your Site

### Who to Contact

For any change to the website content or design, contact your developer. Do NOT attempt to edit files directly unless you know what you're doing — even a small mistake can break the build.

**Common updates your developer can make quickly:**
- Adding new photos to the Gallery
- Updating pricing or service descriptions
- Adding/removing FAQ questions
- Updating your phone number, address, or hours
- Adding a new testimonial

### What You Can Update Yourself

**Google Business Profile** (update this yourself — no dev needed):
- Post weekly updates, photos, offers
- Respond to reviews
- Update seasonal hours
- Add new photos

---

## Adding Gallery Photos

When you have new job site photos, before/after comparisons, or team photos:

1. **Prepare the photos:**
   - Resize to max 2MB per image (use https://squoosh.app for free compression)
   - Name files descriptively: `sprinkler-repair-huntsville-before.jpg` (not `IMG_4521.jpg`)

2. **Send to your developer:**
   - Email or share via Google Drive
   - Include a caption for each photo (what service, what city if relevant)

3. **Developer will:**
   - Add to `/public/` directory in the correct folder
   - Update the gallery page with the new photos

---

## Monthly SEO Tasks (Do These Yourself)

### Week 1
- [ ] Check Google Search Console for crawl errors or manual actions
- [ ] Respond to any unanswered Google reviews

### Week 2
- [ ] Post a Google Business Profile update (tip, offer, or completed job)

### Week 3
- [ ] Check analytics: any unusual drops in traffic?
- [ ] Respond to any new Yelp or Facebook reviews

### Week 4
- [ ] Post another GBP update
- [ ] Send review request link to recent customers

---

## Responding to Google Reviews

**Every review deserves a response within 48 hours.**

**Positive review template:**
> "Thanks so much, [Name]! Really glad we could help with your [service type] in [city]. We appreciate your business and look forward to serving you again! — Josh, Sprinkler Medic"

**Negative review template:**
> "We're sorry to hear this, [Name]. This doesn't reflect our standards and we'd love to make it right. Please call us at (256) 679-2934 so we can resolve this directly. — Josh, Sprinkler Medic"

**Rules:**
- Always use the customer's first name
- Mention the service and/or city when you know it (good for local SEO)
- Never argue or get defensive
- End every response with your name and business name

---

## Getting More Reviews (Google-Compliant)

Reviews are the #1 local ranking factor. Here's how to get more:

1. **Ask verbally** at job completion: "Would you mind leaving us a quick Google review? It really helps small businesses like ours."

2. **Text/email follow-up** within 24 hours of job completion:
   > "Hi [Name], thanks for choosing Sprinkler Medic! If you have a moment, a Google review would mean a lot to us: [YOUR_GOOGLE_REVIEW_LINK]"

3. **Get your review link:** In Google Business Profile → Get more reviews → Copy link

4. **Add to invoice emails:** Include the review link at the bottom of every invoice

**Never:** offer discounts or incentives for reviews — Google will remove them.

---

## Seasonal SEO Calendar

Use this to stay ahead of seasonal demand:

| Month | Action |
|-------|--------|
| **February** | Post GBP: "Spring start-up season is coming — book early!" |
| **March** | Post GBP: "Spring start-up available now — call (256) 679-2934" |
| **April–May** | Post weekly: spring start-up completions, irrigation tips |
| **June–August** | Post about leak detection deals, summer irrigation tips |
| **September** | Post GBP: "Don't forget to winterize before the first freeze" |
| **October** | Heavy posting: winterization urgency, freeze-warning alerts |
| **November** | Post: "Last chance for winterization blowouts" |
| **December–January** | Post: emergency repair availability, spring booking opens |

---

## NAP Consistency (Critical)

Your business information must be **identical** on every website, directory, and profile. Even small differences (like "Rd" vs "Road") hurt local search rankings.

**Your canonical NAP — use this everywhere, exactly as written:**

```
Business Name: Sprinkler Medic
Address:       2939 Winchester Rd, New Market, AL 35761
Phone:         (256) 679-2934
Website:       https://sprinklermedic.com
Email:         sprinklermedichsv@gmail.com
```

**If you update your phone number or address:**
1. Tell your developer (to update the website and schema markup)
2. Update Google Business Profile
3. Update Facebook, Yelp, Nextdoor, BBB, Apple Maps, Bing Places
4. Update your email signature and invoices

---

## Directory Profiles to Maintain

These are your most important business listings. Claim and verify each one:

| Platform | Your Profile | Priority |
|----------|-------------|----------|
| Google Business | https://maps.app.goo.gl/PEiZRcnM2vucotjh8 | Critical |
| Facebook | https://www.facebook.com/share/1CVLsjxcN7/ | Critical |
| Yelp | https://m.yelp.com/biz/sprinkler-medic-new-market | Critical |
| BBB | https://www.bbb.org/us/al/huntsville/profile/irrigation-repair/sprinkler-medic-0513-900234512 | Critical |
| Nextdoor | https://nextdoor.com/page/sprinkler-medic-new-market-al | High |
| Apple Maps | https://mapsconnect.apple.com (claim if not claimed) | High |
| Bing Places | https://www.bingplaces.com (claim if not claimed) | High |
| Angi | https://www.angi.com (create listing) | Medium |

---

## Understanding Your Traffic Reports

When you look at Google Analytics, here's what the numbers mean:

| Metric | What It Means | Good Sign |
|--------|--------------|-----------|
| **Sessions** | Total visits to your site | Trending up month-over-month |
| **Organic Search** | Visitors from Google (not ads) | Should be 60%+ of total |
| **Direct** | Typed your URL or bookmarked | Growing as brand awareness increases |
| **Referral** | Came from another website | GBP, Yelp, etc. |
| **Avg. Session Duration** | How long visitors stay | 1:30+ is solid |
| **Bounce Rate** | Left after viewing one page | Under 60% is good |

**Top pages to monitor:**
- Homepage (`/`) — your highest traffic page
- Services (`/services`) — key for leads
- Contact (`/contact`) — where leads convert
- Individual service pages — track which services get most interest

---

## When to Call Your Developer

Contact your developer when:

- [ ] You want to add or remove a service
- [ ] You're running a promotion and want it featured on the site
- [ ] Phone number, address, or email changes
- [ ] You want to add a new team member or photo
- [ ] A form stops sending emails
- [ ] The site looks broken on any device
- [ ] You want to add a new page

---

## Emergency Contacts

| Issue | Who to Contact |
|-------|---------------|
| Website down or broken | Your developer |
| Google Business Profile hacked | Google Business Support (1-844-491-9665) |
| Fake/spam reviews | Report via Google Business Profile → Reviews → Flag |
| Domain issue (site not loading) | Your domain registrar support |

---

## Year-One SEO Success Roadmap

Based on your current setup, here's what to expect and focus on:

**Months 1–2: Foundation**
- Google indexes your pages (expect 2–4 weeks)
- Start appearing for branded searches ("Sprinkler Medic")
- Local pack impressions begin appearing in Search Console

**Months 2–4: Growth**
- Non-branded searches begin ranking (e.g., "sprinkler repair Huntsville")
- Citation building pushes local pack ranking higher
- Reviews accumulate — each one lifts rankings

**Months 4–6: Momentum**
- Top 3 local pack for primary keywords in Huntsville
- Organic traffic growing month-over-month
- Individual service pages ranking for city-specific queries

**Months 6–12: Optimization**
- Review analytics: which pages drive the most calls?
- Add city-specific service pages if ranking improvement stalls
- Consider blog posts ("How to winterize your sprinkler system in Huntsville")

---

*Prepared by the SEO Specialist — Dudes Agency*
*For questions about this guide, contact your project manager.*
