import type { Metadata } from 'next'
import Script from 'next/script'
import { ContactForm } from '@/components/forms/ContactForm'
import { ServiceAreaBadge } from '@/components/ui/ServiceAreaBadge'

export const metadata: Metadata = {
  title: 'Contact Us | Sprinkler Medic (256) 679-2934',
  description:
    'Call, email, or book online. Serving Huntsville, New Market, Madison & north Alabama. 24/7 emergency service available. (256) 679-2934.',
  alternates: {
    canonical: 'https://sprinklermedic.com/contact',
  },
  openGraph: {
    title: 'Contact Us | Sprinkler Medic (256) 679-2934',
    description:
      'Call, email, or book online. Serving Huntsville, New Market, Madison & north Alabama. 24/7 emergency service available. (256) 679-2934.',
    url: 'https://sprinklermedic.com/contact',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sprinklermedic.com' },
    { '@type': 'ListItem', position: 2, name: 'Contact', item: 'https://sprinklermedic.com/contact' },
  ],
}

const PHONE_HREF = 'tel:+12566792934'
const PHONE_NUMBER = '(256) 679-2934'
const EMAIL = 'sprinklermedichsv@gmail.com'

export default function ContactPage() {
  return (
    <>
      <Script
        id="schema-breadcrumb-contact"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main id="main-content">
        {/* Hero */}
        <section className="bg-gradient-to-br from-green-700 to-green-900 py-20 text-white md:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <div className="max-w-2xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-green-300">Contact</p>
              <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
                Get in Touch
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-green-100">
                Call, email, or book online — we&apos;ll get back to you fast.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info + Form */}
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-16 lg:grid-cols-2">
              {/* Left: Info */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900">Contact Information</h2>
                <p className="mt-2 text-slate-600">
                  For fastest response, call us directly. We answer during business hours and respond to emergency calls 24/7.
                </p>

                <ul className="mt-8 space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">Phone</p>
                      <a href={PHONE_HREF} className="text-lg font-bold text-green-600 hover:underline">
                        {PHONE_NUMBER}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">Email</p>
                      <a href={`mailto:${EMAIL}`} className="text-green-600 hover:underline">
                        {EMAIL}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">Address</p>
                      <address className="not-italic text-slate-600">
                        2939 Winchester Rd<br />
                        New Market, AL 35761
                      </address>
                    </div>
                  </li>
                </ul>

                {/* Hours */}
                <div className="mt-10">
                  <h3 className="text-lg font-bold text-slate-900">Service Hours</h3>
                  <dl className="mt-3 space-y-2 text-sm">
                    {[
                      { day: 'Monday – Friday', hours: '7:00 AM – 6:00 PM' },
                      { day: 'Saturday', hours: '8:00 AM – 4:00 PM' },
                      { day: 'Sunday', hours: 'Emergency calls only' },
                    ].map((row) => (
                      <div key={row.day} className="flex justify-between gap-4 text-slate-600">
                        <dt className="font-medium text-slate-700">{row.day}</dt>
                        <dd>{row.hours}</dd>
                      </div>
                    ))}
                  </dl>
                  <p className="mt-3 text-sm text-slate-500">
                    24/7 emergency service available. If your system has an urgent failure outside of regular hours, call us — we&apos;ll respond.
                  </p>
                </div>

                {/* Service Area */}
                <div className="mt-10">
                  <h3 className="text-lg font-bold text-slate-900">Our Service Area</h3>
                  <p className="mt-2 text-slate-600">
                    We&apos;re based in New Market and serve homeowners and businesses throughout north Alabama.
                  </p>
                  <div className="mt-4">
                    <ServiceAreaBadge showTitle={false} />
                  </div>
                </div>
              </div>

              {/* Right: Form */}
              <div>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* Map placeholder */}
        <section className="border-t border-slate-200">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="mb-4 text-lg font-bold text-slate-900">Find Us</h2>
            <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-100">
              <iframe
                title="Sprinkler Medic location map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3285.2939!2d-86.5802!3d34.9115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDU0JzQxLjQiTiA4NsKwMzQnNDguNyJX!5e0!3m2!1sen!2sus!4v1"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
