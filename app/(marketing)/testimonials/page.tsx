import type { Metadata } from 'next'
import Script from 'next/script'
import { TestimonialCard } from '@/components/ui/TestimonialCard'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Button } from '@/components/ui/Button'
import { loadReviews } from '@/lib/reviews'

export const metadata: Metadata = {
  title: 'Customer Reviews | Sprinkler Medic Huntsville AL',
  description:
    'Read real customer reviews for Sprinkler Medic. Northern Alabama\'s trusted irrigation company with a 4.9-star rating. Serving Huntsville, Madison & the region.',
  alternates: {
    canonical: 'https://sprinklermedic.com/testimonials',
  },
  openGraph: {
    title: 'Customer Reviews | Sprinkler Medic Huntsville AL',
    description:
      'Read real customer reviews for Sprinkler Medic. Northern Alabama\'s trusted irrigation company with a 4.9-star rating. Serving Huntsville, Madison & the region.',
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

export default function TestimonialsPage() {
  const { reviews, rating, count } = loadReviews()

  const testimonials = reviews.map((r) => ({
    quote: r.text,
    name: r.name,
    date: r.date || undefined,
    rating: r.rating,
  }))

  const reviewSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Sprinkler Medic',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: rating,
      reviewCount: count,
    },
    review: testimonials.slice(0, 10).map((t) => ({
      '@type': 'Review',
      author: { '@type': 'Person', name: t.name },
      reviewRating: { '@type': 'Rating', ratingValue: t.rating },
      reviewBody: t.quote,
    })),
  }

  return (
    <>
      <Script
        id="schema-breadcrumb-testimonials"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="schema-reviews"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
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
                {rating} stars across {count} customer reviews. Northern Alabama homeowners trust Sprinkler Medic.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((t, i) => (
                <TestimonialCard key={`${t.name}-${i}`} {...t} />
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
                className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 text-lg font-bold text-green-700 transition-colors hover:bg-green-50 active:scale-95"
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
