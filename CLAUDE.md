# Sprinkler Medic — Project Conventions

## Client
- **Client:** Josh Gamble / Sprinkler Medic
- **Business:** Professional irrigation installation, repair, and maintenance services

## Tech Stack
- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript (strict)
- **Styling:** Tailwind CSS v4
- **Deployment:** Vercel (auto-deploy on push to `main`, preview deploys on PRs)
- **Repo:** https://github.com/rohanpatriot/sprinkler-medic

## Brand Colors
- **Green:** `#16a34a` (green-700) — primary brand color
- **Blue:** `#2563eb` (blue-600) — secondary/links
- **White/Slate:** backgrounds and body text
- **Amber:** `#d97706` (amber-600) — CTAs and accents

## Project Structure
```
app/
  (marketing)/        # All public-facing marketing pages
    about/
    services/
    gallery/
    testimonials/
    contact/
    faq/
    booking/
  layout.tsx          # Root layout (fonts, metadata)
  page.tsx            # Home page
components/           # Shared UI components
lib/                  # Utilities, helpers
content/              # Static content (MDX, JSON data)
public/               # Static assets
```

## Coding Conventions
- **Imports:** Use `@/` alias for all internal imports
- **Components:** React Server Components by default; add `'use client'` only when needed
- **Styling:** Tailwind utility classes only — no custom CSS unless unavoidable
- **Types:** Explicit TypeScript types; avoid `any`
- **Formatting:** Prettier with `prettier-plugin-tailwindcss` (run `npm run format`)
- **Linting:** ESLint via `eslint-config-next` (run `npm run lint`)

## Scripts
```bash
npm run dev       # Start dev server
npm run build     # Production build
npm run lint      # ESLint
npm run format    # Prettier
npm run typecheck # tsc --noEmit
```

## Git Workflow
- `main` → production (Vercel auto-deploy, branch protected)
- All changes via PRs; CI must pass before merge
- Commit messages: imperative mood, short (50 chars max)

## Pages (Marketing Route Group)
| Route | Description |
|-------|-------------|
| `/` | Home — hero, services overview, CTA |
| `/about` | About Josh / company story |
| `/services` | Full service list with details |
| `/gallery` | Before/after project photos |
| `/testimonials` | Customer reviews |
| `/contact` | Contact form + phone/email |
| `/faq` | Frequently asked questions |
| `/booking` | Service booking form |
