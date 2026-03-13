import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import Script from 'next/script'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Button } from '@/components/ui/Button'
import { ServiceAreaBadge } from '@/components/ui/ServiceAreaBadge'

const PHONE_HREF = 'tel:+12566792934'
const PHONE_NUMBER = '(256) 679-2934'

interface ServiceData {
  title: string
  metaTitle: string
  metaDescription: string
  hero: {
    headline: string
    subheadline: string
    cta: string
  }
  intro: string
  sections: Array<{
    heading: string
    body: string
    bullets?: string[]
  }>
  ctaHeadline: string
  ctaBody: string
}

const SERVICES: Record<string, ServiceData> = {
  'irrigation-service-repair': {
    title: 'Irrigation Service & Repair',
    metaTitle: 'Sprinkler Repair Huntsville AL | Same-Day Service',
    metaDescription:
      'Fast, reliable sprinkler repair in Huntsville and Northern Alabama. Broken heads, faulty valves, controller issues. Same-day service available. Call (256) 679-2934.',
    hero: {
      headline: 'Fast, Reliable Sprinkler Repair in Huntsville & Northern Alabama',
      subheadline: 'Broken heads, leaky valves, controller issues — we diagnose and fix it right the first time.',
      cta: 'Call (256) 679-2934',
    },
    intro:
      "A malfunctioning sprinkler system isn't just an inconvenience — it's costing you money and potentially damaging your lawn. Whether you've got a broken head that's soaking one spot while leaving another dry, a valve that won't shut off, or a controller that's gone haywire, Sprinkler Medic is the team north Alabama homeowners call. With 11 years of irrigation experience, we've seen every kind of system failure. Most repairs are diagnosed and completed in a single visit.",
    sections: [
      {
        heading: 'Common Issues We Fix',
        body: '',
        bullets: [
          'Broken or clogged sprinkler heads — impact, rotor, and pop-up styles',
          'Leaking or stuck valves — manual and solenoid',
          'Controller and timer malfunctions — programming errors, failed units, wiring issues',
          'Low water pressure — backflow preventer issues, line pressure problems',
          'Uneven coverage — heads adjusted or repositioned for full coverage',
          'System won\'t turn on or off — electrical and mechanical diagnosis',
          'Damaged lines — pipe breaks, root intrusion, poor connections',
        ],
      },
      {
        heading: 'Our Repair Process',
        body: "When we arrive, we run a full system diagnostic before we touch anything. You'll know exactly what's wrong, what it takes to fix it, and what it will cost — before any work starts. We carry the most common parts on our trucks so the majority of repairs are completed same day. No unnecessary trips back, no waiting around.",
      },
      {
        heading: 'Why Hire a Professional?',
        body: "DIY sprinkler fixes often make things worse — or create new leaks and coverage gaps. Irrigation systems are more complex than they look. Proper head selection, pressure calibration, and controller programming make the difference between a system that babysits itself and one that needs constant attention. When Sprinkler Medic repairs your system, we leave it better than we found it.",
      },
    ],
    ctaHeadline: 'System on the fritz? We can help.',
    ctaBody: 'Same-day service available. 24/7 emergency response for urgent failures.',
  },
  'irrigation-installation': {
    title: 'Irrigation Installation',
    metaTitle: 'Sprinkler System Installation Northern Alabama | Sprinkler Medic',
    metaDescription:
      'Professional irrigation system design and installation in Huntsville and Northern Alabama. New construction and retrofit. Free estimates. Call (256) 679-2934.',
    hero: {
      headline: 'Professional Irrigation Installation for Northern Alabama Homes & Businesses',
      subheadline: 'A properly designed system waters your lawn efficiently — without the guesswork, the overwatering, or the dead zones.',
      cta: 'Get a Free Estimate: (256) 679-2934',
    },
    intro:
      "An irrigation system is one of the best investments you can make in your property. But a poorly designed or hastily installed system will cost you in wasted water, uneven coverage, and repairs down the road. Sprinkler Medic has been designing and installing irrigation systems across north Alabama for 11 years. We take the time to understand your yard, your water pressure, your soil, and your goals — and we build a system that actually works.",
    sections: [
      {
        heading: 'What Goes Into a Quality Installation',
        body: "Every installation starts with a site assessment. We map your yard's zones, measure your water pressure, note any obstacles, and identify the best head types and placement for complete, even coverage. From there, we handle everything:",
        bullets: [
          'System design — zone layouts, head selection, pipe routing',
          'Trenching and pipe installation — efficient routing to minimize disruption',
          'Head installation — properly spaced and pressure-matched for your zones',
          'Valve manifold setup — quality valves for reliable on/off control',
          'Controller programming — set to your yard\'s actual needs',
          'Backflow preventer installation — required and properly permitted',
          'Final walkthrough — we walk every zone with you',
        ],
      },
      {
        heading: 'Built for Northern Alabama',
        body: "Northern Alabama's clay-heavy soil, summer heat, and seasonal rain patterns require a thoughtful approach to irrigation design. We've installed systems in yards all across this region and know what works here — and what doesn't.",
      },
      {
        heading: 'New Construction or Retrofit',
        body: "Installing a new system during construction is the most cost-effective time. But we also retrofit existing yards all the time. Whether you're starting from scratch or adding to an existing setup, we'll design a solution that fits.",
      },
    ],
    ctaHeadline: "Let's build you a system that runs itself.",
    ctaBody: 'Call for a free on-site estimate. No obligation, no sales pitch.',
  },
  'leak-detection': {
    title: 'Leak Detection',
    metaTitle: 'Irrigation Leak Detection Huntsville AL | Sprinkler Medic',
    metaDescription:
      'Professional irrigation leak detection in Huntsville and Northern Alabama. Soggy spots, high water bills — we find and fix it fast. Call (256) 679-2934.',
    hero: {
      headline: 'Irrigation Leak Detection in Huntsville & Northern Alabama',
      subheadline: 'Soggy spots. Spiking water bills. Green patches where nothing should be green. We find the source and fix it.',
      cta: 'Call (256) 679-2934',
    },
    intro:
      "An irrigation leak that goes undetected doesn't stay small. A slow drip underground can become a major line break. A weeping valve can saturate your lawn's root zone for weeks before you notice. Meanwhile, your water bill is climbing and your yard is taking damage. The tricky part: irrigation leaks are often invisible. They happen underground, inside valve boxes, or inside walls. You won't see water running — you'll just notice something's off.",
    sections: [
      {
        heading: 'Signs You Might Have a Leak',
        body: '',
        bullets: [
          'Unexplained increase in your water bill',
          'Soggy or unusually green patches in your lawn',
          'System pressure that\'s noticeably lower than usual',
          'A zone that won\'t stop running even when the controller is off',
          'Muddy spots around valve boxes or near the main line',
          'Water running down the street when the system shouldn\'t be on',
        ],
      },
      {
        heading: 'How We Find It',
        body: "We use a systematic approach to isolate irrigation leaks. We run each zone, check pressure readings, inspect all visible components, and use professional leak detection techniques to identify underground breaks without unnecessary digging. Once we've pinpointed the problem, we give you a clear explanation of what we found and a straightforward repair plan.",
      },
      {
        heading: 'We Repair It Too',
        body: "Leak detection isn't just about finding the problem — it's about fixing it. Our team handles the repair on the same visit whenever possible, so you're not coordinating multiple appointments. We patch lines, replace valves, fix connections, and confirm the system is holding pressure before we leave.",
      },
    ],
    ctaHeadline: "Don't ignore a high water bill — it's telling you something.",
    ctaBody: 'Call us and we\'ll track down the source. Most leaks are found and fixed in a single visit.',
  },
  'spring-startup-winterization': {
    title: 'Spring Start-Up & Winterization',
    metaTitle: 'Sprinkler Winterization & Spring Start-Up | Northern Alabama',
    metaDescription:
      'Irrigation winterization and spring start-up service in Huntsville, Madison, and Northern Alabama. Protect your system before freezes. Call (256) 679-2934.',
    hero: {
      headline: 'Seasonal Irrigation Service for Northern Alabama Homeowners',
      subheadline: 'Get your system ready for summer. Protect it before winter. We handle both, so you don\'t have to think about it.',
      cta: 'Schedule Service: (256) 679-2934',
    },
    intro:
      "An irrigation system that's properly prepared for the seasons performs better, lasts longer, and costs less to maintain. Skipping spring start-up or winterization might seem like a way to save time, but it's a common reason systems fail prematurely. Sprinkler Medic provides seasonal irrigation services throughout north Alabama.",
    sections: [
      {
        heading: 'Spring Start-Up',
        body: "When it's time to bring your system back online, we don't just flip a switch and call it done. Our spring start-up includes:",
        bullets: [
          'Turning on the water supply and pressurizing the system',
          'Checking each zone for coverage, broken heads, and proper operation',
          'Adjusting head heights and spray patterns as needed',
          'Inspecting and testing valves for proper open/close function',
          'Reviewing controller settings and updating the schedule',
          'Checking the backflow preventer',
          'Documenting any repairs needed',
        ],
      },
      {
        heading: 'Winterization (Blowout Service)',
        body: 'Water left in irrigation lines can freeze, expand, and crack pipes, heads, and valves. Our winterization service includes:',
        bullets: [
          'Controller shutoff and deactivation',
          'Main water supply shutoff',
          'Compressed air blowout of all zones — clearing water from every line and head',
          'Valve inspection and winterization',
          'Backflow preventer draining and protection',
          'Final system walkthrough',
        ],
      },
      {
        heading: 'Why It Matters in Northern Alabama',
        body: "While north Alabama doesn't see the extreme winters of further north states, hard freezes still happen — and they happen quickly. One overnight freeze with water still in your lines is all it takes. It's a small service that prevents a large repair bill.",
      },
    ],
    ctaHeadline: "Don't wait until it's too late.",
    ctaBody: 'We book up fast in spring and fall. Call ahead to get on the schedule.',
  },
  'outdoor-lighting': {
    title: 'Outdoor Lighting',
    metaTitle: 'Landscape Lighting Installation Huntsville AL | Sprinkler Medic',
    metaDescription:
      'Professional landscape lighting installation in Huntsville and Northern Alabama. Low-voltage LED systems designed for your property. Call (256) 679-2934.',
    hero: {
      headline: 'Landscape Lighting Installation in Northern Alabama',
      subheadline: 'Show off your property after dark. Add security, ambiance, and curb appeal with professionally designed outdoor lighting.',
      cta: 'Call (256) 679-2934',
    },
    intro:
      "A well-lit landscape transforms how your property looks and feels at night. It highlights the features you've invested in — trees, pathways, architectural details — and creates a welcoming environment for guests while adding a meaningful layer of security. Sprinkler Medic installs low-voltage landscape lighting systems designed to complement your property.",
    sections: [
      {
        heading: 'What We Install',
        body: 'We design and install outdoor lighting for a range of applications:',
        bullets: [
          'Path and walkway lighting — safe, attractive guidance from driveway to door',
          'Uplighting for trees and landscaping — dramatic effect that brings your yard to life',
          'Architectural lighting — highlighting your home\'s exterior features',
          'Spotlight and floodlight systems — security and visibility where you need it',
          'Deck and patio lighting — extend your outdoor living into the evening',
          'Step and riser lighting — safety without sacrificing style',
        ],
      },
      {
        heading: 'Low-Voltage Systems: Safe, Efficient, Long-Lasting',
        body: "We install professional-grade low-voltage LED lighting systems. LED fixtures use a fraction of the energy of older halogen systems, last significantly longer, and produce less heat — making them safer and cheaper to run. Low-voltage installation is also less invasive. Wiring runs shallow, and the transformer plugs into a standard exterior outlet.",
      },
      {
        heading: 'Designed for Your Property',
        body: "We don't sell packages — we design systems for how your specific yard is laid out. During our site visit, we walk the property with you, talk about what you want to highlight, and plan fixture placement and aiming before any installation begins.",
      },
    ],
    ctaHeadline: 'Ready to see your yard in a new light?',
    ctaBody: 'Call to schedule a free estimate. We\'ll walk the property and show you what\'s possible.',
  },
  drainage: {
    title: 'Drainage',
    metaTitle: 'Yard Drainage Solutions Huntsville AL | Sprinkler Medic',
    metaDescription:
      'French drains, catch basins, and yard drainage solutions in Huntsville and Northern Alabama. Fix standing water and foundation drainage issues. Call (256) 679-2934.',
    hero: {
      headline: 'Yard Drainage Solutions in Huntsville & Northern Alabama',
      subheadline: 'Standing water kills grass, damages foundations, and breeds mosquitoes. We fix it at the source.',
      cta: 'Call (256) 679-2934',
    },
    intro:
      "When it rains hard in north Alabama, some yards just don't drain the way they should. Low spots fill with water. Downspouts dump runoff against the foundation. Water pools near driveways and walkways for days after a storm. This isn't just a nuisance — it's a problem that compounds over time. Standing water damages grass and plant roots, accelerates foundation issues, creates breeding grounds for mosquitoes, and can eventually cause structural damage to your home.",
    sections: [
      {
        heading: 'Drainage Issues We Solve',
        body: '',
        bullets: [
          'Yard ponding and standing water — low spots that collect water after rain',
          'Foundation drainage problems — water pooling against your home',
          'Soggy or waterlogged lawn areas — areas that never seem to dry out',
          'Driveway and walkway runoff — water sheeting across hardscapes',
          'Downspout drainage — improper discharge that saturates soil near the house',
          'Slope and grading issues — terrain that directs water toward structures',
        ],
      },
      {
        heading: 'Solutions We Install',
        body: '',
        bullets: [
          'French Drains — perforated pipe in gravel trench, carries water underground',
          'Catch Basins — surface drains that capture water from low spots',
          'Channel Drains — linear surface drains across driveways or patios',
          'Downspout Extensions and Buried Discharge Lines — route water away from foundation',
          'Regrading — reshape terrain to direct water flow away from structures',
        ],
      },
      {
        heading: 'Our Process',
        body: "We start with a site assessment — walking the property during or after rain conditions when possible, or reviewing how water moves based on your description and the terrain. We identify the primary problem areas and design a solution sized to your yard's actual drainage load. You'll get a clear explanation of what we propose and why before any work starts.",
      },
    ],
    ctaHeadline: 'Tired of the same spots flooding every time it rains?',
    ctaBody: "Let's fix it properly. Call for a free drainage assessment.",
  },
}

const OTHER_SERVICES = [
  { slug: 'irrigation-service-repair', label: 'Irrigation Repair' },
  { slug: 'irrigation-installation', label: 'Installation' },
  { slug: 'leak-detection', label: 'Leak Detection' },
  { slug: 'spring-startup-winterization', label: 'Spring Start-Up & Winterization' },
  { slug: 'outdoor-lighting', label: 'Outdoor Lighting' },
  { slug: 'drainage', label: 'Drainage' },
]

export async function generateStaticParams() {
  return Object.keys(SERVICES).map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const service = SERVICES[slug]
  if (!service) return {}
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: `https://sprinklermedic.com/services/${slug}` },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `https://sprinklermedic.com/services/${slug}`,
    },
  }
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const service = SERVICES[slug]
  if (!service) notFound()

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sprinklermedic.com' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://sprinklermedic.com/services' },
      { '@type': 'ListItem', position: 3, name: service.title, item: `https://sprinklermedic.com/services/${slug}` },
    ],
  }

  const relatedServices = OTHER_SERVICES.filter((s) => s.slug !== slug)

  return (
    <>
      <Script
        id="schema-breadcrumb-service"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main id="main-content">
        {/* Hero */}
        <section className="bg-gradient-to-br from-green-700 to-green-900 py-20 text-white md:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <nav className="mb-6 flex items-center gap-2 text-sm text-green-300" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-white">Home</Link>
              <span>/</span>
              <Link href="/services" className="hover:text-white">Services</Link>
              <span>/</span>
              <span className="text-white">{service.title}</span>
            </nav>
            <div className="max-w-2xl">
              <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
                {service.hero.headline}
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-green-100">
                {service.hero.subheadline}
              </p>
              <div className="mt-8">
                <a
                  href={PHONE_HREF}
                  className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 text-lg font-bold text-green-700 transition-colors hover:bg-green-50 active:scale-95"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  {PHONE_NUMBER}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Body */}
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-16 lg:grid-cols-3">
              {/* Main content */}
              <div className="lg:col-span-2">
                <p className="text-lg leading-relaxed text-slate-600">{service.intro}</p>

                {service.sections.map((section) => (
                  <div key={section.heading} className="mt-12">
                    <h2 className="text-2xl font-bold text-slate-900">{section.heading}</h2>
                    {section.body && (
                      <p className="mt-4 text-lg leading-relaxed text-slate-600">{section.body}</p>
                    )}
                    {section.bullets && (
                      <ul className="mt-4 space-y-3">
                        {section.bullets.map((bullet) => (
                          <li key={bullet} className="flex items-start gap-3">
                            <svg className="mt-0.5 h-5 w-5 shrink-0 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                            <span className="text-slate-700">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}

                {/* Service Area */}
                <div className="mt-12">
                  <h2 className="text-2xl font-bold text-slate-900">Serving All of Northern Alabama</h2>
                  <p className="mt-3 text-slate-600">
                    We provide {service.title.toLowerCase()} services throughout the following communities:
                  </p>
                  <div className="mt-4">
                    <ServiceAreaBadge showTitle={false} />
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <aside className="space-y-6">
                {/* CTA Box */}
                <div className="rounded-2xl bg-green-600 p-6 text-white">
                  <h3 className="text-xl font-bold">{service.ctaHeadline}</h3>
                  <p className="mt-2 text-green-100">{service.ctaBody}</p>
                  <a
                    href={PHONE_HREF}
                    className="mt-4 flex items-center gap-2 rounded-lg bg-white px-5 py-3 font-bold text-green-700 transition-colors hover:bg-green-50"
                  >
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                    {PHONE_NUMBER}
                  </a>
                  <Button href="/booking" variant="secondary" size="md" className="mt-3 w-full justify-center border-white text-white hover:bg-white/10">
                    Book Online
                  </Button>
                </div>

                {/* Trust signals */}
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                  <h3 className="font-semibold text-slate-900">Why Sprinkler Medic</h3>
                  <ul className="mt-3 space-y-2 text-sm text-slate-600">
                    {[
                      '11+ years experience',
                      'Licensed & insured',
                      'Same-day service available',
                      'Transparent pricing',
                      '24/7 emergency response',
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <svg className="h-4 w-4 shrink-0 text-green-500" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Related services */}
                <div className="rounded-xl border border-slate-200 p-5">
                  <h3 className="font-semibold text-slate-900">Other Services</h3>
                  <ul className="mt-3 space-y-2">
                    {relatedServices.map((s) => (
                      <li key={s.slug}>
                        <Link
                          href={`/services/${s.slug}`}
                          className="text-sm text-green-600 hover:underline"
                        >
                          {s.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-green-700 py-20 text-white">
          <div className="mx-auto max-w-6xl px-6 text-center">
            <SectionHeader
              eyebrow="Get Started"
              heading={service.ctaHeadline}
              subtext={service.ctaBody}
            />
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href={PHONE_HREF}
                className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 text-lg font-bold text-green-700 transition-colors hover:bg-green-50 active:scale-95"
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
