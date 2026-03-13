# Sprinkler Medic — Design System

**Client:** Josh Gamble / Sprinkler Medic
**Version:** 1.0
**Last Updated:** 2026-03-12

---

## 1. Brand Identity

### Positioning
Sprinkler Medic is a trusted local irrigation company with 11 years of experience in Northern Alabama. The brand communicates expertise, reliability, and local community ties. Every design decision should reinforce: **"These are professionals you can trust to protect your lawn investment."**

### Tone
- Professional but approachable
- Direct and confident (no waffling)
- Local and personal — real name (Josh Gamble), real phone, real service area
- Urgency when warranted (emergency service, seasonal demand)

### Logo Direction
**Concept:** Simplified mark + wordmark

**Mark:** A water droplet incorporating a subtle medical cross or wrench — communicating both "water/irrigation" and "medic/repair". Clean geometric construction. Works at 16px favicon size.

**Wordmark:** "Sprinkler Medic" in Inter 700 or 800 weight. "Sprinkler" in brand-neutral dark (slate-900), "Medic" in brand green (#16a34a). Tight letter-spacing (-0.025em).

**Usage rules:**
- Minimum size: 120px wide
- Clear space: equal to the height of the "M" in "Medic" on all sides
- Dark backgrounds: use white wordmark with green accent only
- Never stretch, rotate, or recolor the mark

---

## 2. Color Palette

### Brand Colors

| Name | Hex | Tailwind | Usage |
|------|-----|----------|-------|
| **Primary Green** | `#16a34a` | `brand-600` | Primary buttons, headings accent, nav active |
| **Primary Green Dark** | `#15803d` | `brand-700` | Button hover, dark accents |
| **Primary Green Light** | `#f0fdf4` | `brand-50` | Section backgrounds, badges |
| **Secondary Blue** | `#2563eb` | `blue-600` | Links, secondary buttons, trust icons |
| **CTA Amber** | `#d97706` | `amber-600` | Call-to-action buttons (phone, book) |
| **CTA Amber Dark** | `#b45309` | `amber-700` | CTA button hover |

### Neutral Colors

| Name | Hex | Tailwind | Usage |
|------|-----|----------|-------|
| **White** | `#ffffff` | `white` | Page background, card backgrounds |
| **Surface** | `#f8fafc` | `neutral-50` | Alternating section backgrounds |
| **Border** | `#e2e8f0` | `neutral-200` | Card borders, dividers, form fields |
| **Text Muted** | `#94a3b8` | `neutral-400` | Placeholder text, captions |
| **Text Secondary** | `#475569` | `neutral-600` | Body text, descriptions |
| **Text Primary** | `#0f172a` | `neutral-900` | Headlines, primary text |

### Color Usage Rules
- **Never** use green on amber or amber on green (low contrast)
- Green = trust, nature, health → use for brand, services, certifications
- Amber = urgency, action → use exclusively for primary CTAs ("Call Now", "Book Service")
- Blue = information, links → use for secondary actions and trust icons
- Section alternation: white → neutral-50 → white (never two colored sections adjacent)

---

## 3. Typography

### Font Family
**Inter** — Selected for:
- Excellent legibility at all sizes on screens
- Wide weight range (100–900) for visual hierarchy
- Google Fonts — free, fast CDN delivery
- Professional appearance without being corporate-cold
- Excellent numbers for phone numbers and metrics

Load via `next/font/google` for automatic optimization.

```tsx
// app/layout.tsx
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
```

### Type Scale

| Role | Size | Weight | Line Height | Letter Spacing | Usage |
|------|------|--------|-------------|----------------|-------|
| **Display** | 48px / 3rem | 800 | 1.1 | -0.025em | Hero headlines only |
| **H1** | 36px / 2.25rem | 700 | 1.2 | -0.025em | Page titles |
| **H2** | 30px / 1.875rem | 700 | 1.25 | -0.015em | Section headings |
| **H3** | 24px / 1.5rem | 600 | 1.3 | -0.01em | Card titles, subsections |
| **H4** | 20px / 1.25rem | 600 | 1.4 | 0 | Minor headings |
| **Body Large** | 18px / 1.125rem | 400 | 1.7 | 0 | Hero subtext, intros |
| **Body** | 16px / 1rem | 400 | 1.6 | 0 | General text |
| **Small** | 14px / 0.875rem | 400 | 1.5 | 0 | Captions, metadata |
| **CTA Label** | 16px / 1rem | 700 | 1 | 0.025em | Button text |
| **Eyebrow** | 12px / 0.75rem | 600 | 1 | 0.1em | Section labels (uppercase) |

### Mobile Type Scale
On mobile (< 768px), reduce display and heading sizes:
- Display: 36px
- H1: 28px
- H2: 24px
- H3: 20px

---

## 4. Spacing System

All spacing follows Tailwind's default 4px base scale. Key layout values:

| Token | Value | Usage |
|-------|-------|-------|
| `py-section` | 80px (desktop) / 48px (mobile) | Vertical section padding |
| `px-container` | 24px (mobile) / 32px (desktop) | Horizontal page padding |
| `max-w-content` | 1280px | Max content width |
| `gap-card` | 24px | Grid gap between cards |
| `space-stack-sm` | 8px | Tight vertical stacking |
| `space-stack-md` | 16px | Default stacking |
| `space-stack-lg` | 32px | Section sub-spacing |

---

## 5. Component Specifications

### 5.1 Button

**Variants:**

```
Primary (Green) — default action
- bg-brand-600, hover:bg-brand-700
- text-white, font-bold, text-base
- px-6 py-3 (desktop) / px-5 py-2.5 (mobile)
- rounded-lg
- transition: 200ms ease
- Active: scale-95

CTA (Amber) — phone call, booking
- bg-amber-600, hover:bg-amber-700
- text-white, font-bold
- Same sizing as Primary
- Include phone icon for call CTAs

Secondary (Outlined) — secondary actions
- border-2 border-brand-600, text-brand-600
- hover: bg-brand-50
- Same sizing as Primary

Ghost — tertiary / nav actions
- text-brand-600, underline on hover
- No background or border
```

**Sizes:**
- `sm`: px-4 py-2, text-sm
- `md`: px-6 py-3, text-base (default)
- `lg`: px-8 py-4, text-lg — hero CTAs only

**States:** default / hover / active (scale-95) / disabled (opacity-50, cursor-not-allowed) / loading (spinner)

**Accessibility:** Always include aria-label when icon-only. Min touch target: 44×44px.

---

### 5.2 ServiceCard

```
Layout: vertical stack in a grid (3-col desktop, 2-col tablet, 1-col mobile)
Border: 1px neutral-200, rounded-xl
Shadow: shadow-card (custom)
Hover: shadow-lg, translate-y-1

Structure:
  [Icon — 40px, brand-600 color, in brand-50 circle bg]
  [Title — H3, slate-900]
  [Description — 2-3 lines, body, slate-600]
  [CTA Link — "Learn More →", brand-600]

Padding: p-6 (desktop) / p-5 (mobile)
Min height: 220px
```

---

### 5.3 TestimonialCard

```
Layout: horizontal on desktop, vertical on mobile
Background: white, border neutral-200, rounded-xl, shadow-card

Structure:
  [Star rating — 5 gold stars, amber-400]
  [Quote — italic, body-large, slate-700, line-clamp-4]
  [Reviewer — flex row]
    [Avatar — 40px circle, bg-brand-100, initials in brand-700]
    [Name — font-semibold, slate-900]
    [Date/Location — small, slate-500]

Padding: p-6
Quote max-width: for readability keep under 280 chars
```

---

### 5.4 TrustBar

```
Purpose: Key metrics that build trust — shown below hero
Background: brand-600 (green) or white with green accents
Layout: flex row, 4 items, centered, gap-8 (desktop) / 2-col grid (mobile)

Items:
  1. "11+ Years Experience"
  2. "500+ Projects Completed"
  3. "24/7 Emergency Service"
  4. "Licensed & Insured"

Each item:
  [Icon — 32px, white (on green bg) or brand-600]
  [Number/Headline — text-2xl, font-extrabold]
  [Label — text-sm, opacity-80]

Height: 96px desktop / auto mobile
```

---

### 5.5 SectionHeader

```
Purpose: Consistent section intro across all pages
Layout: text-center, max-w-2xl mx-auto

Structure:
  [Eyebrow — text-xs uppercase tracking-widest, brand-600, mb-2]
  [Heading — H2, slate-900]
  [Subtext — body-large, slate-600, max-w-xl, optional]

Spacing: mb-12 (desktop) / mb-8 (mobile) after section header
```

---

### 5.6 ContactForm

```
Layout: max-w-xl on standalone page; 2-col on contact page (form + info panel)
Background: white, rounded-2xl, shadow-xl, p-8

Fields:
  - Name (required)
  - Phone (required, tel input, US format hint)
  - Email (required)
  - Service Type (select: Installation / Repair / Maintenance / Emergency / Other)
  - Message (textarea, 4 rows)
  - [CTA Button: "Request Service" — amber-600]

Labels: text-sm font-semibold slate-700, mb-1
Inputs: border neutral-200, rounded-lg, px-4 py-2.5, focus:ring-2 focus:ring-brand-600
Error state: border-red-500, text-red-600 helper text below
Success state: green check confirmation message
```

---

### 5.7 FAQ Accordion

```
Layout: stacked list, max-w-3xl, mx-auto
Each item: bordered bottom (neutral-200), no card shadow

Structure per item:
  [Question row — flex justify-between, cursor-pointer, py-5]
    [Q text — font-semibold, slate-900]
    [Chevron icon — rotates 180° when open, brand-600]
  [Answer panel — animate height 0→auto on open]
    [A text — body, slate-600, pb-5]

Open state: question text turns brand-600
Animation: 200ms ease-out height transition
```

---

### 5.8 ServiceAreaBadge

```
Purpose: Show service cities/counties — builds local SEO and trust
Layout: flex-wrap, gap-2

Each badge:
  - bg-brand-50, text-brand-700
  - border border-brand-200
  - rounded-full
  - px-3 py-1, text-sm font-medium
  - Optional: map pin icon prefix (12px)

Section title above: "Serving Northern Alabama"
```

---

### 5.9 Sticky Mobile CTA Bar

```
Purpose: Always-visible CTAs on mobile (most local searches convert via call)
Position: fixed bottom-0, left-0, right-0, z-40
Display: hidden on md+ (desktop shows header CTA instead)
Height: 64px
Background: white, shadow (0 -4px 12px rgba(0,0,0,0.1))
Border-top: 1px neutral-200

Layout: flex row, 2 equal buttons

Left button (Call):
  - bg-brand-600, text-white
  - Icon: phone (20px) + "Call Now"
  - font-bold
  - href: tel:+12566792934

Right button (Book):
  - bg-amber-600, text-white
  - Icon: calendar (20px) + "Book Service"
  - font-bold
  - href: /booking

Tap target: full 50% width, full 64px height
```

---

## 6. Layout Patterns

### Header

```
Position: sticky top-0, z-50
Height: 64px desktop / 56px mobile
Background: white, border-bottom neutral-200
Shadow: appears on scroll (shadow-md)

Left: Logo (mark + wordmark)
Center (desktop): Nav links — Services, About, Gallery, Testimonials, FAQ
Right:
  - Phone number with phone icon — brand-600, font-bold, hidden sm:flex
  - "Book Now" CTA button — amber-600

Mobile: hamburger menu → full-screen drawer
Mobile header shows: Logo left, phone icon right (direct call), hamburger
```

### Footer

```
Background: neutral-900
Text: neutral-300 (body), white (headings)
Layout: 4-column grid (desktop) / 2-column (tablet) / stacked (mobile)

Columns:
  1. Brand — logo (white), tagline, social icons
  2. Services — links to each service page
  3. Company — About, Gallery, Testimonials, FAQ, Contact
  4. Contact — phone, email, service area, hours

Bottom bar: copyright, license number, privacy policy link
```

### Page Layout

```
Each page:
  <Header> — sticky
  <main>
    [Page-specific sections]
  </main>
  <Footer>
  <MobileCTABar> — fixed, mobile only
```

---

## 7. Grid System

| Breakpoint | Columns | Container Max-W | Gutter |
|------------|---------|-----------------|--------|
| Mobile (< 640px) | 4 | 100% - 48px | 16px |
| Tablet (640–1023px) | 8 | 100% - 64px | 24px |
| Desktop (1024px+) | 12 | 1280px | 32px |

Common grid patterns:
- Service cards: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`
- Trust metrics: `grid-cols-2 md:grid-cols-4`
- Testimonials: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- Contact (2-up): `grid-cols-1 lg:grid-cols-2`

---

## 8. Accessibility Standards (WCAG 2.1 AA)

- **Color contrast:** All text meets 4.5:1 minimum. Brand green (#16a34a) on white = 4.6:1 ✓
- **Touch targets:** Minimum 44×44px for all interactive elements
- **Focus indicators:** Visible 2px brand-600 outline on all focusable elements
- **Alt text:** All images require descriptive alt text. Decorative images: `alt=""`
- **Heading hierarchy:** One H1 per page; H2 for sections; H3 for cards
- **Form labels:** All inputs have explicit `<label>` elements
- **ARIA:** Use `aria-expanded` on accordions; `aria-label` on icon-only buttons
- **Skip nav:** `<a href="#main-content">Skip to main content</a>` as first element

---

## 9. Photography & Image Guidelines

- **Hero images:** Prefer real job photos (sprinkler heads, turf, Northern Alabama landscapes)
- **About page:** Josh Gamble professional headshot required
- **Gallery:** Before/after pairs — consistent sizing (4:3 ratio)
- **Image dimensions:**
  - Hero: 1440×810px (16:9)
  - Service cards: 400×300px (4:3)
  - Gallery: 800×600px (4:3)
- **Format:** WebP primary, JPEG fallback
- **Alt text:** Describe the work shown ("Residential irrigation system installation in Huntsville AL")

---

## 10. SEO Design Considerations

- Each page has exactly one `<h1>` matching the page's primary keyword
- Service pages use structured data (LocalBusiness, Service schema)
- Phone number formatted consistently: `(256) 679-2934` (visible) + `tel:+12566792934` (href)
- Service area cities listed on every page in footer
- Open Graph images: 1200×630px per page (auto-generate from page hero if possible)
