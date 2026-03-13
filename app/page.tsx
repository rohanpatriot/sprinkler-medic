import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { MobileCTABar } from '@/components/ui/MobileCTABar'
import { TrustBar } from '@/components/ui/TrustBar'
import { ServiceCard } from '@/components/ui/ServiceCard'
import { TestimonialCard } from '@/components/ui/TestimonialCard'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { ServiceAreaBadge } from '@/components/ui/ServiceAreaBadge'
import { Button } from '@/components/ui/Button'
import { loadReviews } from '@/lib/reviews'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sprinkler Repair Huntsville AL | Sprinkler Medic',
  description:
    'Locally owned irrigation company serving north Alabama for 11+ years. Sprinkler repair, installation, leak detection & more. Licensed, insured. Call (256) 679-2934.',
  alternates: {
    canonical: 'https://sprinklermedic.com',
  },
  openGraph: {
    title: 'Sprinkler Repair Huntsville AL | Sprinkler Medic',
    description:
      'Locally owned irrigation company serving north Alabama for 11+ years. Sprinkler repair, installation, leak detection & more. Licensed, insured. Call (256) 679-2934.',
    url: 'https://sprinklermedic.com',
  },
}

const PHONE_NUMBER = '(256) 679-2934'
const PHONE_HREF = 'tel:+12566792934'

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
      'Planning a new system or expanding existing coverage? We design and install efficient irrigation systems built for your lawn.',
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
      'Extend the beauty of your landscape into the evening. We design and install landscape lighting that highlights your property.',
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
      'Standing water ruins lawns and damages foundations. We install French drains, catch basins, and grading solutions.',
    href: '/services/drainage',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.338-2.32 5.75 5.75 0 011.344 11.095H6.75z" />
      </svg>
    ),
  },
]

function getHomeTestimonials() {
  const { reviews } = loadReviews()
  // Pick the first 3 5-star reviews with substantial text
  return reviews
    .filter((r) => r.rating === 5 && r.text.length > 50)
    .slice(0, 3)
    .map((r) => ({
      quote: r.text,
      name: r.name,
      date: r.date || undefined,
      rating: r.rating,
    }))
}

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main-content">
        {/* Hero */}
        <section className="relative bg-gradient-to-br from-green-700 to-green-900 pb-20 pt-16 text-white md:pb-28 md:pt-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="max-w-2xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-green-300">
                Huntsville &amp; North Alabama
              </p>
              <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                North Alabama&apos;s Trusted Irrigation Experts
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-green-100 sm:text-xl">
                Sprinkler systems installed, repaired, and maintained the right way — by a locally owned team that&apos;s been doing this for over a decade.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={PHONE_HREF}
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-8 py-4 text-lg font-bold text-green-700 transition-colors hover:bg-green-50 active:scale-95"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  Call {PHONE_NUMBER}
                </a>
                <Link
                  href="/booking"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white px-8 py-4 text-lg font-bold text-white transition-colors hover:bg-white/10 active:scale-95"
                >
                  Book a Service
                </Link>
              </div>
            </div>
          </div>
          {/* Decorative wave */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
              <path d="M0 60L48 52.5C96 45 192 30 288 27.5C384 25 480 35 576 40C672 45 768 45 864 40C960 35 1056 25 1152 22.5C1248 20 1344 25 1392 27.5L1440 30V60H1392C1344 60 1248 60 1152 60C1056 60 960 60 864 60C768 60 672 60 576 60C480 60 384 60 288 60C192 60 96 60 48 60H0Z" fill="white" />
            </svg>
          </div>
        </section>

        {/* Trust Bar */}
        <TrustBar variant="light" />

        {/* Services */}
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <SectionHeader
              eyebrow="What We Do"
              heading="Full-Service Irrigation & Outdoor Systems"
              subtext="From emergency repairs to full system installations, Sprinkler Medic handles every aspect of your irrigation and outdoor systems."
            />
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {SERVICES.map((service) => (
                <ServiceCard key={service.href} {...service} />
              ))}
            </div>
          </div>
        </section>

        {/* About Preview */}
        <section className="bg-slate-50 py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-green-600">About Us</p>
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                  Local. Experienced. Dependable.
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-slate-600">
                  Sprinkler Medic has been serving homeowners and businesses across north Alabama for 11 years. Owner Josh Gamble built this company on a simple idea: show up when you say you will, do the job right, and treat people the way you&apos;d want to be treated.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-slate-600">
                  We&apos;re licensed, insured, and backed by over a decade of hands-on experience in the Huntsville area. When you call us, you&apos;re not getting a call center — you&apos;re getting Josh and his team.
                </p>
                <div className="mt-8">
                  <Button href="/about" variant="primary" size="lg">
                    Meet the Team
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '11+', label: 'Years in Business' },
                  { value: '500+', label: 'Projects Completed' },
                  { value: '24/7', label: 'Emergency Service' },
                  { value: '100%', label: 'Licensed & Insured' },
                ].map((stat) => (
                  <div key={stat.label} className="flex flex-col items-center justify-center rounded-2xl bg-white p-6 shadow-sm">
                    <p className="text-4xl font-extrabold text-green-600">{stat.value}</p>
                    <p className="mt-1 text-center text-sm font-medium text-slate-600">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <SectionHeader
              eyebrow="Reviews"
              heading="What Our Customers Say"
              subtext="North Alabama homeowners trust Sprinkler Medic. Here's why."
            />
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {getHomeTestimonials().map((t, i) => (
                <TestimonialCard key={`${t.name}-${i}`} {...t} />
              ))}
            </div>
            <div className="mt-10 text-center">
              <Button href="/testimonials" variant="secondary" size="md">
                Read More Reviews
              </Button>
            </div>
          </div>
        </section>

        {/* Service Area */}
        <section className="bg-green-50 py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <div className="text-center">
              <SectionHeader
                eyebrow="Service Area"
                heading="Serving North Alabama"
                subtext="We're based in New Market and serve communities throughout the region. If you're in the Huntsville metro or surrounding areas, we've got you covered."
              />
              <div className="mt-10 flex justify-center">
                <ServiceAreaBadge />
              </div>
              <p className="mt-8 text-lg text-slate-600">
                Not sure if we serve your area?{' '}
                <a href={PHONE_HREF} className="font-semibold text-green-600 hover:underline">
                  Call to check: {PHONE_NUMBER}
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-green-700 py-20 text-white md:py-28">
          <div className="mx-auto max-w-6xl px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to get your system back in shape?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-green-100">
              Call us today or book online. Same-day service available, 24/7 emergency response.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href={PHONE_HREF}
                className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 text-lg font-bold text-green-700 transition-colors hover:bg-green-50 active:scale-95"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                Call {PHONE_NUMBER}
              </a>
              <Link
                href="/booking"
                className="inline-flex items-center gap-2 rounded-lg border-2 border-white px-8 py-4 text-lg font-bold text-white transition-colors hover:bg-white/10 active:scale-95"
              >
                Book Online
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MobileCTABar />
    </>
  )
}
