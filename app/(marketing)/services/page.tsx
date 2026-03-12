import type { Metadata } from 'next'
import Script from 'next/script'
import { ServiceCard } from '@/components/ui/ServiceCard'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { TrustBar } from '@/components/ui/TrustBar'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Irrigation Services Huntsville AL | Sprinkler Medic',
  description:
    'Full-service irrigation company in north Alabama. Repair, installation, leak detection, winterization, outdoor lighting & drainage. Call for same-day service.',
  alternates: {
    canonical: 'https://sprinklermedic.com/services',
  },
  openGraph: {
    title: 'Irrigation Services Huntsville AL | Sprinkler Medic',
    description:
      'Full-service irrigation company in north Alabama. Repair, installation, leak detection, winterization, outdoor lighting & drainage. Call for same-day service.',
    url: 'https://sprinklermedic.com/services',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sprinklermedic.com' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://sprinklermedic.com/services' },
  ],
}

const PHONE_HREF = 'tel:+12566792934'
const PHONE_NUMBER = '(256) 679-2934'

const SERVICES = [
  {
    title: 'Irrigation Service & Repair',
    description:
      'Broken heads, faulty valves, controller issues — we diagnose and fix it right the first time. Most repairs completed same day.',
    href: '/services/irrigation-service-repair',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
    ),
  },
  {
    title: 'Irrigation Installation',
    description:
      'Planning a new system or expanding existing coverage? We design and install efficient irrigation systems built for your specific yard and goals.',
    href: '/services/irrigation-installation',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
  },
  {
    title: 'Leak Detection',
    description:
      'Unexplained water bills? Soggy spots in the yard? We track down hidden leaks quickly and fix them before they get expensive.',
    href: '/services/leak-detection',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" />
      </svg>
    ),
  },
  {
    title: 'Spring Start-Up & Winterization',
    description:
      'Protect your investment. We get your system ready for the season in spring and properly shut it down before the first freeze.',
    href: '/services/spring-startup-winterization',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      </svg>
    ),
  },
  {
    title: 'Outdoor Lighting',
    description:
      'Extend the beauty of your landscape into the evening. We design and install landscape lighting systems that highlight your property.',
    href: '/services/outdoor-lighting',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
  },
  {
    title: 'Drainage',
    description:
      'Standing water ruins lawns and damages foundations. We install French drains, catch basins, and grading solutions to direct water where it belongs.',
    href: '/services/drainage',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.338-2.32 5.75 5.75 0 011.344 11.095H6.75z" />
      </svg>
    ),
  },
]

export default function ServicesPage() {
  return (
    <>
      <Script
        id="schema-breadcrumb-services"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main id="main-content">
        {/* Hero */}
        <section className="bg-gradient-to-br from-green-700 to-green-900 py-20 text-white md:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <div className="max-w-2xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-green-300">Services</p>
              <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
                Everything Your Irrigation System Needs
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-green-100">
                From emergency repairs to full system installations, Sprinkler Medic handles every aspect of your irrigation and outdoor systems.
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
          </div>
        </section>

        <TrustBar variant="light" />

        {/* Services Grid */}
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <SectionHeader
              eyebrow="What We Do"
              heading="Our Services"
              subtext="Professional irrigation and outdoor systems services for homeowners and businesses across North Alabama."
            />
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {SERVICES.map((service) => (
                <ServiceCard key={service.href} {...service} />
              ))}
            </div>
          </div>
        </section>

        {/* Why Us */}
        <section className="bg-green-50 py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <SectionHeader
                  eyebrow="Why Sprinkler Medic"
                  heading="We Do It Right the First Time"
                  align="left"
                />
                <ul className="mt-8 space-y-4">
                  {[
                    'Same-day service available for most repairs',
                    '11+ years of irrigation experience in North Alabama',
                    'We carry common parts on the truck — no return visits',
                    'Transparent pricing — you approve before we start',
                    '24/7 emergency response for urgent failures',
                    'Licensed and insured on every job',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <svg className="mt-0.5 h-5 w-5 shrink-0 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button href="/about" variant="primary" size="lg">
                    Learn About Us
                  </Button>
                </div>
              </div>
              <div className="rounded-2xl bg-white p-8 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900">Ready to schedule?</h3>
                <p className="mt-2 text-slate-600">
                  Call us directly or book online. We&apos;ll confirm your appointment and show up on time.
                </p>
                <div className="mt-6 flex flex-col gap-3">
                  <a
                    href={PHONE_HREF}
                    className="flex items-center gap-3 rounded-lg bg-green-600 px-6 py-4 font-bold text-white transition-colors hover:bg-green-700"
                  >
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                    Call {PHONE_NUMBER}
                  </a>
                  <Button href="/booking" variant="cta" size="lg" className="justify-center">
                    Book Online
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
