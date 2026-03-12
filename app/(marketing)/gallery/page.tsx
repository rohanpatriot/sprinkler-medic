import type { Metadata } from 'next'
import Script from 'next/script'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Irrigation & Landscaping Project Gallery | Sprinkler Medic',
  description:
    'Browse before/after photos, team shots, and completed irrigation jobs across north Alabama. Sprinkler Medic — licensed & insured since 2015.',
  alternates: {
    canonical: 'https://sprinklermedic.com/gallery',
  },
  openGraph: {
    title: 'Irrigation & Landscaping Project Gallery | Sprinkler Medic',
    description:
      'Browse before/after photos, team shots, and completed irrigation jobs across north Alabama. Sprinkler Medic — licensed & insured since 2015.',
    url: 'https://sprinklermedic.com/gallery',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sprinklermedic.com' },
    { '@type': 'ListItem', position: 2, name: 'Gallery', item: 'https://sprinklermedic.com/gallery' },
  ],
}

const PHONE_HREF = 'tel:+12566792934'
const PHONE_NUMBER = '(256) 679-2934'

const GALLERY_CATEGORIES = [
  {
    label: 'Before & After',
    items: [
      { caption: 'Broken rotor replaced — full coverage restored', category: 'Before & After' },
      { caption: 'Underground line break repaired and yard restored', category: 'Before & After' },
      { caption: 'Waterlogged lawn after French drain installation', category: 'Before & After' },
      { caption: 'Valve box access cleared and valves rebuilt', category: 'Before & After' },
    ],
  },
  {
    label: 'Installations',
    items: [
      { caption: 'New 6-zone system — Huntsville residential', category: 'Installations' },
      { caption: 'Full backyard retrofit — New Market property', category: 'Installations' },
      { caption: 'Drip system for raised bed garden', category: 'Installations' },
      { caption: 'Commercial zone install — parking lot landscaping', category: 'Installations' },
    ],
  },
  {
    label: 'Outdoor Lighting',
    items: [
      { caption: 'Low-voltage path lighting — front walkway', category: 'Outdoor Lighting' },
      { caption: 'Tree uplighting — mature oak feature', category: 'Outdoor Lighting' },
      { caption: 'Deck and patio perimeter lighting', category: 'Outdoor Lighting' },
      { caption: 'Security floodlight installation', category: 'Outdoor Lighting' },
    ],
  },
]

export default function GalleryPage() {
  return (
    <>
      <Script
        id="schema-breadcrumb-gallery"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main id="main-content">
        {/* Hero */}
        <section className="bg-gradient-to-br from-green-700 to-green-900 py-20 text-white md:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <div className="max-w-2xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-green-300">Gallery</p>
              <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
                Our Work
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-green-100">
                Real projects, real results. Browse our completed irrigation installations, repairs, and outdoor lighting work across North Alabama.
              </p>
            </div>
          </div>
        </section>

        {/* Gallery Sections */}
        {GALLERY_CATEGORIES.map((category) => (
          <section key={category.label} className="py-16 odd:bg-white even:bg-slate-50">
            <div className="mx-auto max-w-6xl px-6">
              <SectionHeader
                eyebrow="Gallery"
                heading={category.label}
                align="left"
              />
              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {category.items.map((item, i) => (
                  <div
                    key={i}
                    className="group overflow-hidden rounded-xl border border-slate-200 bg-slate-100 shadow-sm"
                  >
                    {/* Placeholder image area */}
                    <div className="flex h-48 items-center justify-center bg-gradient-to-br from-green-100 to-green-200">
                      <svg
                        className="h-12 w-12 text-green-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1}
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                      </svg>
                    </div>
                    <div className="p-3">
                      <p className="text-sm text-slate-600">{item.caption}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* CTA */}
        <section className="bg-green-700 py-20 text-white">
          <div className="mx-auto max-w-6xl px-6 text-center">
            <h2 className="text-3xl font-bold">Ready to see what we can do for your yard?</h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-green-100">
              Call for a free estimate. We&apos;ll walk your property and show you exactly what&apos;s possible.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href={PHONE_HREF}
                className="inline-flex items-center gap-2 rounded-lg bg-amber-500 px-8 py-4 text-lg font-bold text-white transition-colors hover:bg-amber-600 active:scale-95"
              >
                Call {PHONE_NUMBER}
              </a>
              <Button href="/booking" variant="secondary" size="lg" className="border-white text-white hover:bg-white/10">
                Book Online
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
