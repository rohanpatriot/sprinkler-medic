import fs from 'node:fs'
import path from 'node:path'

export interface ScrapedReview {
  name: string
  rating: number
  text: string
  date: string
  photos: string[]
}

interface ReviewsData {
  scrapedAt: string
  source: string
  businessName: string
  rating: string
  totalReviews: number
  reviews: ScrapedReview[]
}

export interface ReviewsResult {
  reviews: ScrapedReview[]
  rating: string
  count: number
  isScraped: boolean
}

const FALLBACK_REVIEWS: ScrapedReview[] = [
  {
    name: 'Mike T.',
    rating: 5,
    text: 'Josh showed up exactly when he said he would, diagnosed the problem in 10 minutes, and had it fixed within the hour. Honest, fast, and fair price. Will not call anyone else.',
    date: '',
    photos: [],
  },
  {
    name: 'Sarah K.',
    rating: 5,
    text: 'We had a main line break the night before a big outdoor event. Josh came out at 7 AM and had everything running before our guests arrived. Absolute lifesaver.',
    date: '',
    photos: [],
  },
  {
    name: 'David R.',
    rating: 5,
    text: "Had Sprinkler Medic do our spring start-up and they found two heads that needed replacing we didn't even know about. System is running better than it has in years.",
    date: '',
    photos: [],
  },
  {
    name: 'Jennifer M.',
    rating: 5,
    text: "I've used other irrigation companies and always felt like I was being upsold. Josh told me what was actually wrong and what it would cost. That's rare.",
    date: '',
    photos: [],
  },
  {
    name: 'Tom H.',
    rating: 5,
    text: 'Our water bill was through the roof. Josh found a valve that was stuck open and fixed it same day. Bill went right back to normal. Money well spent.',
    date: '',
    photos: [],
  },
  {
    name: 'Karen B.',
    rating: 5,
    text: 'Full system installation — Josh walked the whole yard with me, explained the zone plan, and had it done in a day and a half. Clean work, no mess left behind.',
    date: '',
    photos: [],
  },
  {
    name: 'Robert F.',
    rating: 5,
    text: "Called at 9 PM because a line broke and was flooding. Josh answered and was here by 7 the next morning. That's the kind of service you can't find everywhere.",
    date: '',
    photos: [],
  },
  {
    name: 'Lisa W.',
    rating: 5,
    text: "We've had Sprinkler Medic do our winterization for three years running. Always on time, always thorough. We stop worrying about freeze damage because we know it's handled.",
    date: '',
    photos: [],
  },
  {
    name: 'Gary P.',
    rating: 5,
    text: "Most honest contractor I've dealt with. He told me one of my heads just needed adjusting, not replacing. Could have charged me more and I wouldn't have known.",
    date: '',
    photos: [],
  },
]

/** Hand-picked reviews covering a range of services and dates. */
const CURATED_NAMES = new Set([
  'Phyllis Cox',         // Mar 2025 — repair, start-up, winterization, maintenance
  'Geoffrey Embrey',     // Apr 2025 — names Josh and technician
  'Lydia Edwards',       // Apr 2025 — loyal multi-year customer
  'William Seltzer',     // May 2025 — valve/line repair, mentions Josh
  'Sharon Ivy',          // May 2025 — 6-year customer, multiple services
  'J.R. Wright',         // Jun 2025 — thorough and quick
  'Patrick Davis',       // Jul 2025 — patient, knowledgeable, methodical
  'ANITA HARRISON',      // Aug 2025 — word-of-mouth recommendation
  'Shondra Seebeck',     // Aug 2025 — line repair + shut-off valve install
  'Mark Stiles',         // Sep 2025 — diagnosed problem, replaced controller
  'Lorenzo Thomas',      // Sep 2025 — professional, expert team
  'Sabrina Nodal',       // Oct 2025 — swift, above and beyond
  'Sandra Coogan',       // Oct 2025 — explains every step, clean work
  'Kim Moon',            // Oct 2025 — emergency leak fix
  'Eddie Mazzeo',        // Dec 2025 — second to none
  'Al Patterson',        // Dec 2025 — winterization on auto-pilot
  'Wendy James',         // Dec 2025 — responsive, shows up, great service
  'Ali Morgan',          // Feb 2026 — leak found via utility bill
  'Jimmy Valrie',        // Feb 2026 — outstanding customer service
  'George Gallo',        // Mar 2026 — spring startup, zone advice
  'Nancy Bucher',        // Mar 2026 — years of service, installation + maintenance
  'John Chizmar',        // Mar 2026 — trustworthy, no upselling
  'Birgit Gatlin',       // Mar 2026 — efficient head replacement
  'Charlotte Ball',      // Mar 2026 — thorough system check
])

export function loadReviews(): ReviewsResult {
  try {
    const filePath = path.join(process.cwd(), 'content', 'reviews.json')
    const raw = fs.readFileSync(filePath, 'utf-8')
    const data: ReviewsData = JSON.parse(raw)
    if (data.reviews && data.reviews.length > 0) {
      const curated = data.reviews.filter(
        (r) => r.text.length > 20 && CURATED_NAMES.has(r.name),
      )
      return {
        reviews: curated,
        rating: data.rating,
        count: curated.length,
        isScraped: false,
      }
    }
  } catch {
    // Fall through to fallback
  }
  return {
    reviews: FALLBACK_REVIEWS,
    rating: '5.0',
    count: FALLBACK_REVIEWS.length,
    isScraped: false,
  }
}
