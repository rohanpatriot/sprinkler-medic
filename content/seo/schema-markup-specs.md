# Schema Markup Specs — Sprinkler Medic

**Format:** JSON-LD (inject via Next.js `<Script>` in `<head>` or via `generateMetadata`)
**Placement:** Each schema type belongs on specific pages as noted.

---

## 1. LocalBusiness Schema

**Page:** Homepage (and all pages via `_layout.tsx` or root layout)
**Purpose:** Establishes business identity, NAP, hours, service area for Google

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://sprinklermedic.com/#business",
  "name": "Sprinkler Medic",
  "description": "Locally owned irrigation and sprinkler system company serving north Alabama. Specializing in repair, installation, leak detection, winterization, outdoor lighting, and drainage.",
  "url": "https://sprinklermedic.com",
  "telephone": "+12566792934",
  "email": "sprinklermedichsv@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "2939 Winchester Rd",
    "addressLocality": "New Market",
    "addressRegion": "AL",
    "postalCode": "35761",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 34.9115,
    "longitude": -86.5802
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Huntsville",
      "addressRegion": "AL"
    },
    {
      "@type": "City",
      "name": "New Market",
      "addressRegion": "AL"
    },
    {
      "@type": "City",
      "name": "Madison",
      "addressRegion": "AL"
    },
    {
      "@type": "City",
      "name": "Gurley",
      "addressRegion": "AL"
    },
    {
      "@type": "City",
      "name": "Decatur",
      "addressRegion": "AL"
    },
    {
      "@type": "City",
      "name": "Athens",
      "addressRegion": "AL"
    },
    {
      "@type": "City",
      "name": "Toney",
      "addressRegion": "AL"
    },
    {
      "@type": "City",
      "name": "Hazel Green",
      "addressRegion": "AL"
    },
    {
      "@type": "City",
      "name": "Owens Cross Roads",
      "addressRegion": "AL"
    }
  ],
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    }
  ],
  "priceRange": "$$",
  "currenciesAccepted": "USD",
  "paymentAccepted": "Cash, Credit Card, Check",
  "hasMap": "https://maps.app.goo.gl/PEiZRcnM2vucotjh8",
  "image": "https://sprinklermedic.com/images/sprinkler-medic-logo.jpg",
  "logo": {
    "@type": "ImageObject",
    "url": "https://sprinklermedic.com/images/sprinkler-medic-logo.jpg",
    "width": 400,
    "height": 120
  },
  "sameAs": [
    "https://www.facebook.com/share/1CVLsjxcN7/",
    "https://nextdoor.com/page/sprinkler-medic-new-market-al",
    "https://m.yelp.com/biz/sprinkler-medic-new-market",
    "https://www.bbb.org/us/al/huntsville/profile/irrigation-repair/sprinkler-medic-0513-900234512"
  ],
  "foundingDate": "2015",
  "numberOfEmployees": {
    "@type": "QuantitativeValue",
    "minValue": 1,
    "maxValue": 10
  }
}
```

**Implementation note:** Place in root `layout.tsx` using Next.js Script component with `strategy="beforeInteractive"`. Update `postalCode` and `geo` coordinates once confirmed.

---

## 2. Service Schema

**Page:** Each individual service page
**Purpose:** Explicitly marks pages as service offerings, improves rich results

### Template (replace `SERVICE_NAME`, `SERVICE_DESCRIPTION`, `PAGE_URL`)

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://sprinklermedic.com/services/SERVICE_SLUG/#service",
  "name": "SERVICE_NAME",
  "description": "SERVICE_DESCRIPTION",
  "provider": {
    "@type": "LocalBusiness",
    "@id": "https://sprinklermedic.com/#business"
  },
  "areaServed": {
    "@type": "State",
    "name": "Alabama",
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "AL",
      "addressCountry": "US"
    }
  },
  "url": "https://sprinklermedic.com/services/SERVICE_SLUG",
  "serviceType": "SERVICE_TYPE",
  "availableChannel": {
    "@type": "ServiceChannel",
    "servicePhone": {
      "@type": "ContactPoint",
      "telephone": "+12566792934",
      "contactType": "customer service",
      "availableLanguage": "English"
    }
  }
}
```

### Per-Page Instances

**Irrigation Repair:**
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://sprinklermedic.com/services/irrigation-repair/#service",
  "name": "Irrigation Repair",
  "description": "Professional irrigation and sprinkler system repair in Huntsville, AL and surrounding areas. Broken heads, valve issues, controller problems, and emergency repairs.",
  "provider": { "@type": "LocalBusiness", "@id": "https://sprinklermedic.com/#business" },
  "serviceType": "Irrigation Repair",
  "url": "https://sprinklermedic.com/services/irrigation-repair"
}
```

**Irrigation Installation:**
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://sprinklermedic.com/services/irrigation-installation/#service",
  "name": "Irrigation System Installation",
  "description": "New irrigation and sprinkler system installation for residential and commercial properties in north Alabama. Custom zone design, professional installation.",
  "provider": { "@type": "LocalBusiness", "@id": "https://sprinklermedic.com/#business" },
  "serviceType": "Irrigation Installation",
  "url": "https://sprinklermedic.com/services/irrigation-installation"
}
```

**Leak Detection:**
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://sprinklermedic.com/services/leak-detection/#service",
  "name": "Irrigation Leak Detection",
  "description": "Professional leak detection for irrigation and sprinkler systems in Huntsville, AL. Identify underground leaks, pressure issues, and water waste.",
  "provider": { "@type": "LocalBusiness", "@id": "https://sprinklermedic.com/#business" },
  "serviceType": "Irrigation Leak Detection",
  "url": "https://sprinklermedic.com/services/leak-detection"
}
```

**Spring Start-Up & Winterization:**
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://sprinklermedic.com/services/winterization/#service",
  "name": "Sprinkler Winterization & Spring Start-Up",
  "description": "Protect your irrigation investment with professional winterization blowouts and spring start-up inspections in Huntsville and north Alabama.",
  "provider": { "@type": "LocalBusiness", "@id": "https://sprinklermedic.com/#business" },
  "serviceType": "Irrigation Winterization",
  "url": "https://sprinklermedic.com/services/winterization"
}
```

**Outdoor Lighting:**
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://sprinklermedic.com/services/outdoor-lighting/#service",
  "name": "Outdoor & Landscape Lighting",
  "description": "Professional outdoor and landscape lighting installation in Huntsville, AL. Pathway lights, uplighting, security lighting, and custom designs.",
  "provider": { "@type": "LocalBusiness", "@id": "https://sprinklermedic.com/#business" },
  "serviceType": "Landscape Lighting Installation",
  "url": "https://sprinklermedic.com/services/outdoor-lighting"
}
```

**Drainage:**
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://sprinklermedic.com/services/drainage/#service",
  "name": "Yard Drainage Solutions",
  "description": "French drains, yard grading, and custom drainage solutions to solve water problems in Huntsville and north Alabama.",
  "provider": { "@type": "LocalBusiness", "@id": "https://sprinklermedic.com/#business" },
  "serviceType": "Drainage Installation",
  "url": "https://sprinklermedic.com/services/drainage"
}
```

---

## 3. FAQPage Schema

**Page:** FAQ page (`/faq`)
**Purpose:** Eligible for FAQ rich results in Google Search (accordion display)

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does sprinkler repair cost in Huntsville, AL?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sprinkler repair costs in Huntsville typically range from $75–$350 depending on the issue. Common repairs like broken heads cost $75–$150, while valve replacements run $150–$250. Call Sprinkler Medic at (256) 679-2934 for a free estimate."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer 24/7 emergency sprinkler repair?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Sprinkler Medic offers 24/7 emergency irrigation repair services in Huntsville, Madison, Decatur, and surrounding north Alabama communities. Call (256) 679-2934 any time."
      }
    },
    {
      "@type": "Question",
      "name": "What areas do you serve?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sprinkler Medic serves Huntsville, New Market, Madison, Gurley, Decatur, Athens, Toney, Hazel Green, and Owens Cross Road in north Alabama."
      }
    },
    {
      "@type": "Question",
      "name": "When should I winterize my sprinkler system in Alabama?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In north Alabama, we recommend winterizing your irrigation system in late October or early November, before the first hard freeze. Call Sprinkler Medic at (256) 679-2934 to schedule."
      }
    },
    {
      "@type": "Question",
      "name": "How do I know if my irrigation system has a leak?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Signs of an irrigation leak include unexpectedly high water bills, wet spots or soggy areas in your yard between watering cycles, low water pressure in certain zones, or unusually green patches. Contact Sprinkler Medic for professional leak detection."
      }
    },
    {
      "@type": "Question",
      "name": "Are you licensed and insured?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Sprinkler Medic is licensed and insured in Alabama. We carry full liability coverage for all irrigation, outdoor lighting, and drainage work."
      }
    },
    {
      "@type": "Question",
      "name": "How long does a sprinkler system installation take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A typical residential sprinkler system installation takes 1–2 days depending on property size and zone complexity. Sprinkler Medic provides a full project estimate before work begins."
      }
    },
    {
      "@type": "Question",
      "name": "Can you repair any brand of irrigation system?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Sprinkler Medic repairs all major brands including Rain Bird, Hunter, Toro, Orbit, Rainmaster, and others. We service both residential and light commercial irrigation systems."
      }
    }
  ]
}
```

---

## 4. AggregateRating Schema

**Page:** Homepage, potentially individual service pages
**Purpose:** Displays star ratings in search results (rich results)
**Note:** Must reflect real, verifiable reviews. Pull from Google/Yelp. Update these numbers regularly.

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://sprinklermedic.com/#business",
  "name": "Sprinkler Medic",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "47",
    "bestRating": "5",
    "worstRating": "1"
  }
}
```

**Implementation note:** Fetch actual rating and count from Google Business Profile API or manually update quarterly. Embed alongside LocalBusiness schema on homepage. Do NOT fabricate ratings — use real data only.

### Individual Review Schema (optional, homepage testimonials section)

```json
{
  "@context": "https://schema.org",
  "@type": "Review",
  "itemReviewed": {
    "@type": "LocalBusiness",
    "@id": "https://sprinklermedic.com/#business"
  },
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": "5",
    "bestRating": "5"
  },
  "author": {
    "@type": "Person",
    "name": "REVIEWER_NAME"
  },
  "reviewBody": "REVIEW_TEXT",
  "datePublished": "REVIEW_DATE"
}
```

---

## 5. BreadcrumbList Schema

**Page:** All pages except Homepage
**Purpose:** Shows breadcrumb navigation in Google SERPs

### Template

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://sprinklermedic.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "PARENT_PAGE_NAME",
      "item": "https://sprinklermedic.com/PARENT_SLUG"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "CURRENT_PAGE_NAME",
      "item": "https://sprinklermedic.com/PARENT_SLUG/CURRENT_SLUG"
    }
  ]
}
```

### Per-Page Instances

**Services page:**
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://sprinklermedic.com" },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://sprinklermedic.com/services" }
  ]
}
```

**Individual service page (e.g., Irrigation Repair):**
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://sprinklermedic.com" },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://sprinklermedic.com/services" },
    { "@type": "ListItem", "position": 3, "name": "Irrigation Repair", "item": "https://sprinklermedic.com/services/irrigation-repair" }
  ]
}
```

**FAQ page:**
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://sprinklermedic.com" },
    { "@type": "ListItem", "position": 2, "name": "FAQ", "item": "https://sprinklermedic.com/faq" }
  ]
}
```

---

## Implementation Guide (Next.js)

### Recommended approach: Inline JSON-LD via Script

In each page component or layout:

```tsx
// app/layout.tsx (for LocalBusiness — global)
import Script from 'next/script'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          id="schema-local-business"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema)
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
```

```tsx
// app/services/irrigation-repair/page.tsx (for Service + Breadcrumb)
export default function IrrigationRepairPage() {
  return (
    <>
      <Script
        id="schema-service"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id="schema-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* page content */}
    </>
  )
}
```

### Validation

- Use [Google Rich Results Test](https://search.google.com/test/rich-results) after deployment
- Use [Schema.org Validator](https://validator.schema.org/) during development
- Confirm all types pass with no errors before launch
