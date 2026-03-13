import type { Metadata } from 'next'
import Script from 'next/script'
import { FAQAccordion } from '@/components/ui/FAQAccordion'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Irrigation FAQ | Sprinkler Medic Huntsville AL',
  description:
    'Common questions about sprinkler repair, installation, and winterization in north Alabama. Expert answers from Sprinkler Medic, serving Huntsville since 2015.',
  alternates: {
    canonical: 'https://sprinklermedic.com/faq',
  },
  openGraph: {
    title: 'Irrigation FAQ | Sprinkler Medic Huntsville AL',
    description:
      'Common questions about sprinkler repair, installation, and winterization in north Alabama. Expert answers from Sprinkler Medic, serving Huntsville since 2015.',
    url: 'https://sprinklermedic.com/faq',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does sprinkler repair cost in Huntsville, AL?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sprinkler repair costs in Huntsville typically range from $75–$350 depending on the issue. Common repairs like broken heads cost $75–$150, while valve replacements run $150–$250. Call Sprinkler Medic at (256) 679-2934 for a free estimate.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer 24/7 emergency sprinkler repair?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Sprinkler Medic offers 24/7 emergency irrigation repair services in Huntsville, Madison, Decatur, and surrounding north Alabama communities. Call (256) 679-2934 any time.',
      },
    },
    {
      '@type': 'Question',
      name: 'What areas do you serve?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sprinkler Medic serves Huntsville, New Market, Madison, Gurley, Decatur, Athens, Toney, Hazel Green, and Owens Cross Road in north Alabama.',
      },
    },
    {
      '@type': 'Question',
      name: 'When should I winterize my sprinkler system in Alabama?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In north Alabama, we recommend winterizing your irrigation system in late October or early November, before the first hard freeze. Call Sprinkler Medic at (256) 679-2934 to schedule.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I know if my irrigation system has a leak?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Signs of an irrigation leak include unexpectedly high water bills, wet spots or soggy areas in your yard between watering cycles, low water pressure in certain zones, or unusually green patches. Contact Sprinkler Medic for professional leak detection.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are you licensed and insured?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Sprinkler Medic is licensed and insured in Alabama. We carry full liability coverage for all irrigation, outdoor lighting, and drainage work.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does a sprinkler system installation take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A typical residential sprinkler system installation takes 1–2 days depending on property size and zone complexity. Sprinkler Medic provides a full project estimate before work begins.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you repair any brand of irrigation system?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Sprinkler Medic repairs all major brands including Rain Bird, Hunter, Toro, Orbit, Rainmaster, and others. We service both residential and light commercial irrigation systems.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sprinklermedic.com' },
    { '@type': 'ListItem', position: 2, name: 'FAQ', item: 'https://sprinklermedic.com/faq' },
  ],
}

const PHONE_HREF = 'tel:+12566792934'
const PHONE_NUMBER = '(256) 679-2934'

const FAQ_ITEMS = [
  {
    question: 'How do I know if my sprinkler system has a leak?',
    answer:
      "The most common signs are an unexplained increase in your water bill, soggy or unusually green patches in your lawn, muddy spots near valve boxes, or a zone that runs longer than it should. If your system seems to be running even when the controller is off, that's a strong indicator of a stuck or failed valve. Call us — most leaks are tracked down and fixed in a single visit.",
  },
  {
    question: 'How often should I have my irrigation system serviced?',
    answer:
      'At minimum, we recommend a professional inspection once a year — ideally at the start of the irrigation season in spring. During a service visit we check all heads, valves, and controller settings, make adjustments, and flag anything that needs repair. Regular maintenance catches small issues before they become expensive ones.',
  },
  {
    question: 'Do you offer 24/7 emergency service?',
    answer:
      "Yes. We know irrigation emergencies don't wait for business hours. A broken main line, a valve that won't shut off, or a system failure before an event can't always be scheduled. Call us at (256) 679-2934 any time — we'll get to you.",
  },
  {
    question: 'How much does it cost to repair a sprinkler system?',
    answer:
      "Repair costs depend on the issue. We diagnose the problem before we quote you anything, so you'll know the cost before any work starts. There are no surprise charges. For most common repairs, we carry parts on the truck and can complete the job same day.",
  },
  {
    question: "What's included in a spring start-up?",
    answer:
      "Our spring start-up includes turning on the water supply, running each zone to check for proper operation, inspecting and adjusting all heads, testing valves, reviewing and updating the controller schedule, and checking the backflow preventer. It's a full system check, not just a power-on.",
  },
  {
    question: 'Why do I need to winterize my irrigation system?',
    answer:
      "Water left in underground pipes, heads, and valves can freeze when temperatures drop below 32°F. A proper winterization removes all the water from your system using compressed air before freezes arrive. Northern Alabama does get hard freezes — skipping winterization is a gamble that often doesn't pay off.",
  },
  {
    question: 'Can you install an irrigation system in an existing yard?',
    answer:
      'Absolutely. Retrofit installations are common — we do them all the time. We design around your existing landscaping, minimize disruption during trenching, and repair any lawn disturbed during installation.',
  },
  {
    question: 'What areas do you serve?',
    answer:
      'We serve Huntsville, New Market, Madison, Gurley, Decatur, Athens, Toney, Hazel Green, Owens Cross Road, and surrounding north Alabama communities. Call us at (256) 679-2934 to confirm service in your area.',
  },
  {
    question: 'Do I need a permit for a new irrigation system installation?',
    answer:
      "In most jurisdictions, installing a backflow preventer requires a permit and inspection. We're familiar with local requirements in the areas we serve and handle permitting as part of the installation process.",
  },
  {
    question: 'How can I book a service appointment?',
    answer:
      "You can call us directly at (256) 679-2934, email us at sprinklermedichsv@gmail.com, or book online through our booking page. We'll confirm your appointment and show up when we say we will.",
  },
  {
    question: 'My water pressure seems low. Is that an irrigation problem?',
    answer:
      'It could be. Low pressure has several possible causes — a partially closed backflow preventer, a failing pressure regulator, a main line issue, or too many zones running simultaneously. We diagnose low pressure as part of any service call and can usually identify the cause quickly.',
  },
  {
    question: 'How long does a new irrigation system installation take?',
    answer:
      "Most residential installations are completed in one to two days depending on yard size and system complexity. We'll give you a realistic timeline before we start.",
  },
]

export default function FAQPage() {
  return (
    <>
      <Script
        id="schema-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="schema-breadcrumb-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main id="main-content">
        {/* Hero */}
        <section className="bg-gradient-to-br from-green-700 to-green-900 py-20 text-white md:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <div className="max-w-2xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-green-300">FAQ</p>
              <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
                Frequently Asked Questions
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-green-100">
                Got questions about your irrigation system? Here are the ones we hear most often.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mx-auto max-w-3xl">
              <FAQAccordion items={FAQ_ITEMS} />
            </div>
          </div>
        </section>

        {/* Still have questions */}
        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-6xl px-6 text-center">
            <SectionHeader
              eyebrow="Still Have Questions?"
              heading="Just Give Us a Call"
              subtext="We're happy to answer any questions about your irrigation system before you commit to anything. No pressure."
            />
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href={PHONE_HREF}
                className="inline-flex items-center gap-2 rounded-lg bg-green-600 px-8 py-4 text-lg font-bold text-white transition-colors hover:bg-green-700 active:scale-95"
              >
                Call {PHONE_NUMBER}
              </a>
              <Button href="/contact" variant="secondary" size="lg">
                Send a Message
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
