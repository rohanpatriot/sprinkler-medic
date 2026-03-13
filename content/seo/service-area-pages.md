# Service Area Pages Strategy — Sprinkler Medic

**Question:** Should we build individual city pages or one combined service area page for the 9 service cities?

---

## Recommendation: Hybrid Approach

**Short answer:** Start with a combined service area section on the homepage + one `/service-areas` overview page. Add individual city pages for the top 3 markets in Phase 2 if organic traction warrants it.

**Rationale:** Individual city pages deliver the highest SEO value, but only when they have genuinely unique content. Thin, template-stuffed city pages can trigger a Panda-style quality penalty. Given the project timeline (1 month), we prioritize quality over quantity.

---

## Phase 1: Launch (Now)

### 1. Homepage — Service Area Section

Add a dedicated section on the homepage that explicitly lists all 9 cities:

```
Serving Northern Alabama Since 2015
We proudly serve homeowners and businesses across the Huntsville metro area, including:
• Huntsville     • Decatur        • Toney
• Madison        • Athens         • Hazel Green
• New Market     • Gurley         • Owens Cross Road
```

**SEO benefit:**
- Signals service area to Google without diluting the homepage
- Supports local pack inclusion for secondary cities
- Easy to implement — no additional pages needed

### 2. `/service-areas` Overview Page

Create one overview page that:
- Lists all 9 cities with 1–2 sentences of genuine differentiation per city
- Links to individual city pages (when they exist) or to service pages
- Targets broad terms: "irrigation services north Alabama", "sprinkler company near me"

**URL:** `/service-areas`
**H1:** "Irrigation & Sprinkler Services Across Northern Alabama"

**Sample city entries:**
```
Huntsville, AL
Huntsville is our largest service area — we're on-site within hours for most sprinkler
repairs. From the historic Five Points neighborhood to Providence, we cover it all.

Madison, AL
Fast-growing Madison is one of our busiest markets. We service new construction irrigation
systems frequently — Madison's rapid development means lots of new installs.

Decatur, AL
We service residential and commercial irrigation in Decatur and the surrounding Lawrence
County area. Emergency service available same day.
```

---

## Phase 2: Individual City Pages (Top 3 Markets First)

Launch these only after the initial site is live and once we have the content to make each page genuinely unique:

### Priority Order

| Rank | City | Why |
|------|------|-----|
| 1 | **Huntsville** | Highest search volume — "sprinkler repair Huntsville AL" |
| 2 | **Madison** | High-growth suburb, strong homeowner base |
| 3 | **Decatur** | Second-largest metro in service area |
| 4 | Athens | Smaller but significant search volume |
| 5 | Gurley, Toney, Hazel Green, New Market, Owens Cross Road | Long-tail only — combine or skip |

### Individual City Page Template

**URL structure:** `/service-areas/[city-al]`
- `/service-areas/huntsville-al`
- `/service-areas/madison-al`
- `/service-areas/decatur-al`

**Page structure (300–500 words minimum per page):**
1. **H1:** "Sprinkler Repair & Irrigation Services in [City], AL"
2. **Intro paragraph** — 2–3 sentences about serving [City] specifically
3. **Services offered in [City]** — list with brief descriptions (not copy-pasted from service pages)
4. **Why Sprinkler Medic in [City]** — any local-specific details (response time, neighborhoods served, common issues in that area)
5. **Service Area Map** — Google Maps embed centered on that city
6. **CTA** — Phone + booking link
7. **Schema:** LocalBusiness with `areaServed` for that specific city

**What makes content unique per page:**
- Local neighborhood/subdivision references (e.g., "We service Heritage Pointe and Old Town" in Huntsville)
- City-specific irrigation challenges (clay soil in Decatur, newer construction in Madison)
- Local landmarks as geographic context
- Any testimonials from that city specifically

### What to AVOID on City Pages

- ❌ Copy-paste content with only the city name swapped out (thin content, potential penalty)
- ❌ Pages under 300 words (too thin to rank)
- ❌ Exact same content as service pages
- ❌ Creating pages for every city immediately — only build when you have unique content

---

## Phase 3: Smaller Cities (Optional, Long-Term)

For Gurley, Toney, Hazel Green, New Market, and Owens Cross Road:

**Option A:** Create individual pages with genuinely local content (neighborhoods, common issues, specific job examples)
**Option B:** Combine into a "Greater Northern Alabama" page that covers the smaller surrounding communities
**Option C:** Mention in the `/service-areas` overview page only

**Recommendation:** Option B or C unless we have specific keyword evidence of demand in those smaller markets.

---

## Implementation in Next.js

### Static Routes (Recommended for Phase 1–2)

```
app/
  service-areas/
    page.tsx           → /service-areas (overview)
    huntsville-al/
      page.tsx         → /service-areas/huntsville-al
    madison-al/
      page.tsx         → /service-areas/madison-al
    decatur-al/
      page.tsx         → /service-areas/decatur-al
```

### Dynamic Routes (Phase 3 if needed)

```
app/
  service-areas/
    [city]/
      page.tsx         → /service-areas/[city]
```

With static params generation from a city data file.

---

## Internal Linking Plan

- **Homepage** → links to `/service-areas` overview ("See all service areas")
- **Service pages** → include line at bottom: "We provide [service] in Huntsville, Madison, Decatur, and all surrounding areas. [See all service areas →]"
- **Service area overview** → links to individual city pages
- **Individual city pages** → link back to relevant service pages
- **Footer** → list 5 top cities with links to individual pages once available

---

## Expected SEO Timeline

| Month | Action | Expected Outcome |
|-------|--------|-----------------|
| 1 | Launch with service area section + /service-areas overview | GBP local pack + branded searches |
| 2–3 | Build Huntsville city page | Begin ranking "sprinkler repair Huntsville AL" |
| 3–4 | Build Madison + Decatur city pages | Expanded local coverage |
| 6+ | Add smaller city pages as needed | Long-tail dominance |

---

## Decision Summary

| Approach | Pros | Cons |
|----------|------|------|
| One combined page | Fast, simple, no thin content risk | Limited ranking potential for city-specific terms |
| Individual pages for all 9 now | Maximum SEO coverage | Risk of thin content, time-intensive, dilutes quality |
| **Hybrid (recommended)** | **Balances speed with quality, scales naturally** | **Requires Phase 2 discipline to execute city pages properly** |
