import type { Metadata } from 'next'
import Script from 'next/script'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { TrustBar } from '@/components/ui/TrustBar'
import { Button } from '@/components/ui/Button'

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sprinklermedic.com' },
    { '@type': 'ListItem', position: 2, name: 'About', item: 'https://sprinklermedic.com/about' },
  ],
}

export const metadata: Metadata = {
  title: 'About Sprinkler Medic | Irrigation Huntsville AL',
  description:
    'Meet Josh Gamble and the Sprinkler Medic team. 11 years serving north Alabama. Licensed & insured irrigation professionals based in New Market, AL.',
  alternates: {
    canonical: 'https://sprinklermedic.com/about',
  },
  openGraph: {
    title: 'About Sprinkler Medic | Irrigation Huntsville AL',
    description:
      'Meet Josh Gamble and the Sprinkler Medic team. 11 years serving north Alabama. Licensed & insured irrigation professionals based in New Market, AL.',
    url: 'https://sprinklermedic.com/about',
  },
}

const PHONE_HREF = 'tel:+12566792934'
const PHONE_NUMBER = '(256) 679-2934'

const CREDENTIALS = [
  {
    title: 'Licensed & Insured',
    body: "We carry full licensing and insurance on every job. You're protected, and so is your property.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: '11 Years of Experience',
    body: "Over a decade of hands-on irrigation work in north Alabama's specific climate conditions and soil types.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      </svg>
    ),
  },
  {
    title: '24/7 Emergency Service',
    body: "Burst pipe? System failure before a big event? We're available around the clock when things can't wait until Monday.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Honest Assessments',
    body: "We'll tell you what your system actually needs — not what generates the biggest invoice. If a repair will do, we'll say so.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
      </svg>
    ),
  },
]

export default function AboutPage() {
  return (
    <>
      <Script
        id="schema-breadcrumb-about"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main id="main-content">
      {/* Hero */}
      <section className="bg-gradient-to-br from-green-700 to-green-900 py-20 text-white md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-green-300">About Us</p>
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
              We&apos;ve Been Taking Care of North Alabama&apos;s Irrigation Systems Since 2015
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-green-100">
              Locally owned, fully licensed, and built on trust — this is Sprinkler Medic.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <TrustBar variant="light" />

      {/* Company Story */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <SectionHeader
                eyebrow="Our Story"
                heading="Built on a Simple Idea"
                align="left"
              />
              <div className="mt-6 space-y-4 text-lg leading-relaxed text-slate-600">
                <p>
                  Sprinkler Medic started with a straightforward premise: north Alabama homeowners deserved a reliable, knowledgeable irrigation company that treated them like neighbors — not customers on a ticket queue.
                </p>
                <p>
                  Owner Josh Gamble has spent over a decade mastering the craft of irrigation. He started Sprinkler Medic because he saw a gap in the market: too many contractors cutting corners, too few who actually cared about the long-term health of a client&apos;s system and yard.
                </p>
                <p>
                  Eleven years later, that commitment hasn&apos;t changed. Josh and his team have installed and serviced hundreds of systems across the Huntsville metro area, from simple backyard repairs to full commercial-grade installations. Every job gets the same attention — whether it&apos;s a single broken sprinkler head or a complete new system from the ground up.
                </p>
                <p>
                  We&apos;re based in New Market, and we work across Huntsville, Madison, Gurley, Decatur, Athens, Toney, Hazel Green, Owens Cross Road, and surrounding communities. This is our home. We plan to be here for the next decade too.
                </p>
              </div>
            </div>
            {/* Stats card */}
            <div className="rounded-2xl bg-green-50 p-10">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: '2015', label: 'Founded' },
                  { value: '11+', label: 'Years Experience' },
                  { value: '500+', label: 'Projects Completed' },
                  { value: '9', label: 'Cities Served' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="text-5xl font-extrabold text-green-600">{stat.value}</p>
                    <p className="mt-1 text-sm font-medium text-slate-600">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="bg-slate-50 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeader
            eyebrow="Why Homeowners Trust Us"
            heading="What Sets Us Apart"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {CREDENTIALS.map((item) => (
              <div key={item.title} className="flex gap-5 rounded-xl bg-white p-6 shadow-sm">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-1 text-slate-600">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeader
              eyebrow="How We Work"
              heading="No Surprises. No Upsells."
            />
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              We show up when we say we will. We explain what we found and what we&apos;re doing to fix it. We leave your property cleaner than we found it. And when the job is done, we make sure you understand how to get the most out of your system.
            </p>
            <p className="mt-4 text-lg font-medium text-slate-800">
              That&apos;s not a guarantee or a mission statement. It&apos;s just how we operate.
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-slate-50 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeader
            eyebrow="The Team"
            heading="The Team Behind Sprinkler Medic"
          />
          <div className="mt-12">
            <div className="mx-auto max-w-md rounded-2xl bg-white p-8 shadow-sm">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-2xl font-bold text-green-700">
                JG
              </div>
              <h3 className="mt-4 text-xl font-bold text-slate-900">Josh Gamble</h3>
              <p className="text-sm font-medium text-green-600">Owner &amp; Lead Technician</p>
              <p className="mt-3 leading-relaxed text-slate-600">
                Josh founded Sprinkler Medic after years in the irrigation industry and has been the hands-on operator since day one. He&apos;s the person who shows up to your job, knows your system&apos;s history, and takes personal accountability for every repair and installation. When you call Sprinkler Medic, you&apos;re likely to get Josh.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-green-700 py-20 text-white">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Let&apos;s talk about your irrigation system.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-green-100">
            Whether you have a problem that needs fixing or you&apos;re thinking about a new installation, we&apos;re happy to take a look. No pressure, no upsell.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 rounded-lg bg-amber-500 px-8 py-4 text-lg font-bold text-white transition-colors hover:bg-amber-600 active:scale-95"
            >
              Call {PHONE_NUMBER}
            </a>
            <Button href="/contact" variant="secondary" size="lg" className="border-white text-white hover:bg-white/10">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </main>
    </>
  )
}
