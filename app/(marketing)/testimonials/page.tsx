import type { Metadata } from 'next'
import Script from 'next/script'
import { TestimonialCard } from '@/components/ui/TestimonialCard'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Customer Reviews | Sprinkler Medic Huntsville AL',
  description:
    'See what north Alabama homeowners say about Sprinkler Medic. 5-star irrigation repair and installation reviews from Huntsville, Madison, and surrounding areas.',
  alternates: {
    canonical: 'https://sprinklermedic.com/testimonials',
  },
  openGraph: {
    title: 'Customer Reviews | Sprinkler Medic Huntsville AL',
    description:
      'See what north Alabama homeowners say about Sprinkler Medic. 5-star irrigation repair and installation reviews from Huntsville, Madison, and surrounding areas.',
    url: 'https://sprinklermedic.com/testimonials',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sprinklermedic.com' },
    { '@type': 'ListItem', position: 2, name: 'Testimonials', item: 'https://sprinklermedic.com/testimonials' },
  ],
}

const PHONE_HREF = 'tel:+12566792934'
const PHONE_NUMBER = '(256) 679-2934'

const TESTIMONIALS = [
  {
    quote: 'Josh showed up exactly when he said he would, diagnosed the problem in 10 minutes, and had it fixed within the hour. Honest, fast, and fair price. Will not call anyone else.',
    name: 'Mike T.',
    location: 'Huntsville, AL',
    rating: 5 as const,
  },
  {
    quote: 'We had a main line break the night before a big outdoor event. Josh came out at 7 AM and had everything running before our guests arrived. Absolute lifesaver.',
    name: 'Sarah K.',
    location: 'Madison, AL',
    rating: 5 as const,
  },
  {
    quote: "Had Sprinkler Medic do our spring start-up and they found two heads that needed replacing we didn't even know about. System is running better than it has in years.",
    name: 'David R.',
    location: 'New Market, AL',
    rating: 5 as const,
  },
  {
    quote: "I've used other irrigation companies and always felt like I was being upsold. Josh told me what was actually wrong and what it would cost. That's rare.",
    name: 'Jennifer M.',
    location: 'Madison, AL',
    rating: 5 as const,
  },
  {
    quote: 'Our water bill was through the roof. Josh found a valve that was stuck open and fixed it same day. Bill went right back to normal. Money well spent.',
    name: 'Tom H.',
    location: 'Huntsville, AL',
    rating: 5 as const,
  },
  {
    quote: 'Full system installation — Josh walked the whole yard with me, explained the zone plan, and had it done in a day and a half. Clean work, no mess left behind.',
    name: 'Karen B.',
    location: 'Athens, AL',
    rating: 5 as const,
  },
  {
    quote: "Called at 9 PM because a line broke and was flooding. Josh answered and was here by 7 the next morning. That's the kind of service you can't find everywhere.",
    name: 'Robert F.',
    location: 'Gurley, AL',
    rating: 5 as const,
  },
  {
    quote: "We've had Sprinkler Medic do our winterization for three years running. Always on time, always thorough. We stop worrying about freeze damage because we know it's handled.",
    name: 'Lisa W.',
    location: 'Hazel Green, AL',
    rating: 5 as const,
  },
  {
    quote: "Most honest contractor I've dealt with. He told me one of my heads just needed adjusting, not replacing. Could have charged me more and I wouldn't have known.",
    name: 'Gary P.',
    location: 'Decatur, AL',
    rating: 5 as const,
  },
]

export default function TestimonialsPage() {
  return (
    <>
      <Script
        id="schema-breadcrumb-testimonials"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main id="main-content">
        {/* Hero */}
        <section className="bg-gradient-to-br from-green-700 to-green-900 py-20 text-white md:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <div className="max-w-2xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-green-300">Reviews</p>
              <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
                What Our Customers Say
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-green-100">
                North Alabama homeowners trust Sprinkler Medic. Here&apos;s why.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {TESTIMONIALS.map((t) => (
                <TestimonialCard key={t.name} {...t} />
              ))}
            </div>
          </div>
        </section>

        {/* Review CTA */}
        <section className="bg-green-50 py-20">
          <div className="mx-auto max-w-6xl px-6 text-center">
            <SectionHeader
              eyebrow="Leave a Review"
              heading="Had a Great Experience?"
              subtext="We'd love to hear from you. Reviews help other homeowners find us and trust that we'll show up and do the job right."
            />
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href="https://g.page/r/sprinklermedic/review"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-green-600 px-8 py-4 font-bold text-white transition-colors hover:bg-green-700 active:scale-95"
              >
                Review on Google
              </a>
              <Button href="/contact" variant="secondary" size="md">
                Contact Us
              </Button>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-green-700 py-20 text-white">
          <div className="mx-auto max-w-6xl px-6 text-center">
            <h2 className="text-3xl font-bold">Ready to experience it yourself?</h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-green-100">
              Same-day service available for most repairs. 24/7 emergency response.
            </p>
            <div className="mt-8">
              <a
                href={PHONE_HREF}
                className="inline-flex items-center gap-2 rounded-lg bg-amber-500 px-8 py-4 text-lg font-bold text-white transition-colors hover:bg-amber-600 active:scale-95"
              >
                Call {PHONE_NUMBER}
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
