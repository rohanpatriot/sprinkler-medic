# Sprinkler Medic — Page Wireframes

**Mobile-first. All layouts described mobile → desktop.**
**Primary CTA:** Call (256) 679-2934 | Secondary CTA: /booking

---

## Global Elements (All Pages)

### Header (sticky, z-50)
```
Mobile:
  [Logo]                    [📞 icon]  [☰ Hamburger]

Desktop:
  [Logo]   [Services] [About] [Gallery] [Testimonials] [FAQ]   [(256) 679-2934]  [Book Now ▶]
```

### Mobile CTA Bar (fixed bottom, z-40, md:hidden)
```
  [📞 Call Now — green]    [📅 Book Service — amber]
       50%                         50%
```

### Footer (4-col desktop / 2-col tablet / stacked mobile)
```
[Brand + tagline + social]   [Services links]   [Company links]   [Contact info]
─────────────────────────────────────────────────────────────────────────────────
© 2025 Sprinkler Medic  ·  License #AL-XXXXXX  ·  Privacy Policy
```

---

## Page 1: Home (`/`)

**Goal:** Convert visitor to call or form submit within 10 seconds.

### Hero Section
```
Mobile:
  ┌─────────────────────────────────────┐
  │  [Background: turf/sprinkler photo] │
  │                                     │
  │  North Alabama's Most Trusted        │
  │  Irrigation Specialists             │
  │                                     │
  │  11 years. 500+ properties.         │
  │  Licensed & insured.                │
  │                                     │
  │  [📞 Call Now — amber btn]          │
  │  [Get a Free Quote — green outline] │
  └─────────────────────────────────────┘

Desktop:
  ┌──────────────────────────────────────────────────────────────┐
  │ [Background: hero photo, 16:9 overlay 60% dark]             │
  │                                                              │
  │                                                              │
  │    North Alabama's Most Trusted         [                ]   │
  │    Irrigation Specialists               [  Form sidebar  ]   │
  │                                         [                ]   │
  │    11 years · 500+ properties           [                ]   │
  │    Licensed & insured                   [                ]   │
  │                                                              │
  │    [📞 Call Now]  [Get a Free Quote]                         │
  │                                                              │
  └──────────────────────────────────────────────────────────────┘
```

### Trust Bar (below hero)
```
  [11+ Years] [500+ Projects] [24/7 Emergency] [Licensed & Insured]
  ─── green background, white text ───
```

### Services Overview
```
Eyebrow: "What We Do"
Heading: "Complete Irrigation Services"
Subtext: "From new installations to emergency repairs — we handle everything."

Grid (mobile: 1-col, tablet: 2-col, desktop: 3-col):
  [🌱 Installation]  [🔧 Repair]  [⚙️ Maintenance]
  [❄️ Winterization] [💧 Drip]    [📱 Smart Systems]

[View All Services →]
```

### Why Choose Us
```
Eyebrow: "Why Sprinkler Medic"
Heading: "Local Experts Who Show Up On Time"

3 columns (desktop) / stacked (mobile):
  [✓ On-time guarantee]
  [✓ Upfront pricing — no surprises]
  [✓ Work backed by a 1-year warranty]

[Photo of Josh on the job — right half desktop]
```

### Testimonials Preview
```
Eyebrow: "What Customers Say"
Heading: "Trusted by 500+ North Alabama Homeowners"

3 TestimonialCards side by side (desktop) / stacked (mobile)

[See All Reviews →]
```

### Service Area
```
Eyebrow: "Our Coverage"
Heading: "Serving North Alabama"

[ServiceAreaBadge grid — 16 cities/counties]
[Map image: North Alabama counties highlighted]
```

### Final CTA Banner
```
Background: green-600
"Ready to Get Started?"
"Call today for a free estimate — same-day service available."
[📞 (256) 679-2934 — white btn]  [Book Online — amber btn]
```

---

## Page 2: About (`/about`)

**Goal:** Build personal trust. Put a human face on the business.

### Hero
```
Eyebrow: "11 Years & Counting"
H1: "Meet Josh Gamble"
Subtext: "Huntsville native, irrigation specialist, your neighbor."

[Josh headshot — right (desktop) / top (mobile)]
```

### Story Section
```
Heading: "Started in 2013 With One Truck"

3-paragraph narrative:
  - Why Josh started Sprinkler Medic
  - His approach to the work (quality over volume)
  - Community ties to North Alabama

[Inline stats: 11 Years / 500+ Projects / 100% Local]
```

### Values
```
Heading: "How We Work"
3 cards: Honest Pricing | Quality Parts | Your Lawn, Our Reputation
```

### Certifications & Affiliations
```
Logo strip: Licensed · Bonded · Insured · [Any industry certs]
```

### CTA
```
"Ready to work with a local pro?"
[📞 Call Josh] [Book Online]
```

---

## Page 3: Services (`/services`)

**Goal:** Present all services, funnel to individual service pages.

### Hero
```
H1: "Irrigation Services in North Alabama"
Subtext: "From new system design to emergency repairs — we do it all."
```

### Services Grid
```
6 ServiceCards (2-col tablet / 3-col desktop):
  1. New Installation    2. Repair & Troubleshooting
  3. Seasonal Maintenance  4. Winterization
  5. Drip Irrigation     6. Smart Controllers

Each card: icon, title, 2-sentence description, "Learn More →"
```

### Process Strip
```
Heading: "How It Works"

4 steps (horizontal desktop / vertical mobile):
  1. Call or Book → 2. Free Estimate → 3. We Do the Work → 4. You Love It
```

### Service Area + CTA
```
[ServiceAreaBadge]
[ContactForm or "Call to Schedule" banner]
```

---

## Page 4: Individual Service (`/services/[service]`)

*(Template used for all 6 service pages)*

### Hero
```
H1: "[Service Name] in [City], AL"
Subtext: 1-2 sentence USP for this service
[Breadcrumb: Home › Services › [Service]]
```

### What's Included
```
Heading: "What We Do"
Bullet list: 5–8 specific deliverables
[Photo right / full-width mobile]
```

### When You Need It
```
Signs you might need this service (3 cards)
```

### Pricing Note
```
"Every project is different. We provide free, no-obligation estimates."
[Get a Free Quote]
```

### FAQ (service-specific)
```
FAQAccordion: 4–6 questions specific to this service
```

### Local CTA
```
"Serving Huntsville, Madison, Athens & Surrounding Areas"
[ServiceAreaBadge]
[ContactForm]
```

---

## Page 5: Gallery (`/gallery`)

**Goal:** Show proof of work. Before/after pairs convert skeptics.

### Hero
```
H1: "Our Work Speaks for Itself"
Subtext: "500+ irrigation projects across North Alabama."
```

### Filter Bar
```
[All] [Installation] [Repair] [Residential] [Commercial]
— pill buttons, green active state
```

### Photo Grid
```
Masonry or uniform grid (mobile: 2-col, desktop: 3-col)
Each photo: hover overlay "View Project"
Click → lightbox with before/after slider
```

### Project Highlights
```
3 featured projects with:
  - Project title + location
  - Challenge / Solution
  - Before + After photos
```

### CTA
```
"Have a project in mind?"
[Get a Free Estimate]
```

---

## Page 6: Testimonials (`/testimonials`)

**Goal:** Social proof page. Overcome objections with real reviews.

### Hero
```
H1: "What Our Customers Say"
5-star rating display: "4.9/5 — 100+ verified reviews"
```

### Featured Testimonials
```
3 large TestimonialCards — hero customers
```

### Review Grid
```
Masonry grid — all reviews
Each: TestimonialCard (smaller)
[Load More] button if > 9 reviews
```

### Leave a Review CTA
```
"Happy with our work? We'd love to hear from you."
[Google Review link]  [Facebook Review link]
```

### Bottom CTA
```
"Ready to become our next success story?"
[📞 Call Now]  [Book Service]
```

---

## Page 7: Contact (`/contact`)

**Goal:** Make it effortless to reach us. Multiple contact channels.

### Hero
```
H1: "Get In Touch"
Subtext: "We respond to all inquiries within 24 hours."
```

### 2-Column Layout (desktop)
```
Left (ContactForm):
  [Name] [Phone] [Email]
  [Service dropdown]
  [Message]
  [Request Service — amber btn]

Right (Contact Info):
  📞 (256) 679-2934
  📧 info@sprinklermedic.com
  📍 Huntsville, AL area
  ⏰ Mon–Sat 7am–6pm | Emergency: 24/7

  "Prefer to text? Send us a message."
  [Text Us]
```

### Service Area Map
```
[Embedded Google Maps iframe — North Alabama service area]
[ServiceAreaBadge below map]
```

---

## Page 8: FAQ (`/faq`)

**Goal:** Answer objections, reduce friction, build confidence.

### Hero
```
H1: "Frequently Asked Questions"
Subtext: "Everything you need to know before calling."
```

### FAQ Categories
```
[General] [Installation] [Repair] [Maintenance] [Pricing] [Warranty]
— filter tabs

FAQAccordion: 6–8 questions per category
```

### Sample Questions by Category

**General:**
- How long does a typical project take?
- Do you offer free estimates?
- Are you licensed and insured?
- What areas do you serve?

**Installation:**
- How many sprinkler zones do I need?
- Can you work around my existing landscaping?
- Will irrigation increase my water bill?

**Repair:**
- How do I know if my system needs repair?
- Do you fix other brands of sprinkler systems?
- What's the most common irrigation problem?

**Pricing:**
- How much does a new system cost?
- Do you require a deposit?
- What payment methods do you accept?

### Still Have Questions?
```
"Can't find your answer?"
[📞 Call Us] [Send a Message →]
```

---

## Page 9: Booking (`/booking`)

**Goal:** Capture booking intent. Low friction, mobile-optimized.

### Hero
```
H1: "Book a Service"
Subtext: "Fill out the form and we'll confirm your appointment within 2 hours."
```

### Booking Form
```
[ContactForm — same component, extended]
Additional fields:
  - Preferred date (date picker)
  - Preferred time window (Morning / Afternoon / Evening)
  - Address

[Book My Appointment — amber btn]
```

### Reassurance Strip
```
✓ No payment required to book
✓ Free estimate included
✓ Easy rescheduling
```

### Alternative Contact
```
"Prefer to call?"
📞 (256) 679-2934
"We'll get you scheduled in under 5 minutes."
```

---

## Design Notes for Implementation

### Section Pattern
Every content section follows this vertical rhythm:
```
[SectionHeader (eyebrow + h2 + subtext)]
  mt: 0
  mb: 48px desktop / 32px mobile

[Section Content]

[Optional CTA — centered, mt-12]
```

### Alternating Section Backgrounds
```
Section 1: white
Section 2: neutral-50 (slate-50, #f8fafc)
Section 3: white
Section 4: neutral-50
...repeat
Special: green-600 for bold CTA banners
```

### Conversion Priority on Every Page
Every page must have, in order:
1. Phone number visible in header
2. At least one amber CTA button above the fold
3. Trust signals within 2 scrolls
4. Contact form or clear path to contact before footer
