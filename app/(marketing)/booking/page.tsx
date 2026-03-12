import type { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Book a Service | Sprinkler Medic (256) 679-2934',
  description:
    'Schedule irrigation repair, installation, or maintenance with Sprinkler Medic. Serving Huntsville and north Alabama. Book online or call (256) 679-2934.',
  alternates: {
    canonical: 'https://sprinklermedic.com/booking',
  },
  openGraph: {
    title: 'Book a Service | Sprinkler Medic (256) 679-2934',
    description:
      'Schedule irrigation repair, installation, or maintenance with Sprinkler Medic. Serving Huntsville and north Alabama. Book online or call (256) 679-2934.',
    url: 'https://sprinklermedic.com/booking',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sprinklermedic.com' },
    { '@type': 'ListItem', position: 2, name: 'Book a Service', item: 'https://sprinklermedic.com/booking' },
  ],
}

import { ContactForm } from '@/components/forms/ContactForm'

const PHONE_HREF = 'tel:+12566792934'
const PHONE_NUMBER = '(256) 679-2934'

export default function BookingPage() {
  return (
    <>
      <Script
        id="schema-breadcrumb-booking"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main id="main-content">
        {/* Hero */}
        <section className="bg-gradient-to-br from-green-700 to-green-900 py-20 text-white md:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <div className="max-w-2xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-green-300">Booking</p>
              <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
                Schedule Your Service
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-green-100">
                Pick a time that works for you — we&apos;ll confirm and show up on time.
              </p>
            </div>
          </div>
        </section>

        {/* Booking Options */}
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-16 lg:grid-cols-2">
              {/* Left: Options */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900">How to Book</h2>

                {/* Call option */}
                <div className="mt-8 rounded-xl border border-green-200 bg-green-50 p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-green-600 text-white">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">Call Us Directly</h3>
                      <p className="mt-1 text-slate-600">Fastest way to schedule. We answer during business hours and respond 24/7 for emergencies.</p>
                      <a
                        href={PHONE_HREF}
                        className="mt-3 inline-flex items-center gap-2 text-lg font-bold text-green-700 hover:underline"
                      >
                        {PHONE_NUMBER}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Online booking placeholder */}
                <div className="mt-6 rounded-xl border border-slate-200 bg-white p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-700">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">Online Scheduling</h3>
                      <p className="mt-1 text-slate-600">
                        We use HouseCall Pro for online bookings. Click below to schedule your appointment directly.
                      </p>
                      <a
                        href="https://app.housecallpro.com/book/sprinkler-medic"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-flex items-center gap-2 rounded-lg bg-amber-600 px-5 py-2.5 font-bold text-white transition-colors hover:bg-amber-700"
                      >
                        Book on HouseCall Pro
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-8 rounded-lg bg-slate-50 p-5">
                  <h3 className="font-semibold text-slate-900">Business Hours</h3>
                  <dl className="mt-3 space-y-1 text-sm text-slate-600">
                    <div className="flex justify-between">
                      <dt>Monday – Friday</dt>
                      <dd>7:00 AM – 6:00 PM</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt>Saturday</dt>
                      <dd>8:00 AM – 4:00 PM</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt>Sunday</dt>
                      <dd>Emergency calls only</dd>
                    </div>
                  </dl>
                  <p className="mt-3 text-xs text-slate-500">24/7 emergency response available for urgent system failures.</p>
                </div>
              </div>

              {/* Right: Contact form as alternative */}
              <div>
                <h2 className="mb-4 text-xl font-bold text-slate-900">Or Send Us Your Info</h2>
                <p className="mb-6 text-slate-600">
                  Fill out the form and we&apos;ll reach out to schedule your appointment.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
