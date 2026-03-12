import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
})

const BASE_URL = 'https://sprinklermedic.com'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Sprinkler Repair Huntsville AL | Sprinkler Medic',
    template: '%s | Sprinkler Medic',
  },
  description:
    'Locally owned irrigation company serving north Alabama for 11+ years. Sprinkler repair, installation, leak detection & more. Licensed, insured. Call (256) 679-2934.',
  keywords: [
    'sprinkler repair Huntsville AL',
    'irrigation repair Huntsville',
    'sprinkler system installation Alabama',
    'irrigation company north Alabama',
  ],
  authors: [{ name: 'Sprinkler Medic' }],
  creator: 'Sprinkler Medic',
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: BASE_URL,
    siteName: 'Sprinkler Medic',
    title: 'Sprinkler Repair Huntsville AL | Sprinkler Medic',
    description:
      'Locally owned irrigation company serving north Alabama for 11+ years. Sprinkler repair, installation, leak detection & more. Licensed, insured. Call (256) 679-2934.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Sprinkler Medic — Irrigation Services in Huntsville, AL',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sprinkler Repair Huntsville AL | Sprinkler Medic',
    description:
      'Locally owned irrigation company serving north Alabama for 11+ years. Licensed, insured. Call (256) 679-2934.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${BASE_URL}/#business`,
  name: 'Sprinkler Medic',
  description:
    'Locally owned irrigation and sprinkler system company serving north Alabama. Specializing in repair, installation, leak detection, winterization, outdoor lighting, and drainage.',
  url: BASE_URL,
  telephone: '+12566792934',
  email: 'sprinklermedichsv@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '2939 Winchester Rd',
    addressLocality: 'New Market',
    addressRegion: 'AL',
    postalCode: '35761',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 34.9115,
    longitude: -86.5802,
  },
  areaServed: [
    { '@type': 'City', name: 'Huntsville', addressRegion: 'AL' },
    { '@type': 'City', name: 'New Market', addressRegion: 'AL' },
    { '@type': 'City', name: 'Madison', addressRegion: 'AL' },
    { '@type': 'City', name: 'Gurley', addressRegion: 'AL' },
    { '@type': 'City', name: 'Decatur', addressRegion: 'AL' },
    { '@type': 'City', name: 'Athens', addressRegion: 'AL' },
    { '@type': 'City', name: 'Toney', addressRegion: 'AL' },
    { '@type': 'City', name: 'Hazel Green', addressRegion: 'AL' },
    { '@type': 'City', name: 'Owens Cross Roads', addressRegion: 'AL' },
  ],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
  ],
  priceRange: '$$',
  currenciesAccepted: 'USD',
  paymentAccepted: 'Cash, Credit Card, Check',
  hasMap: 'https://maps.app.goo.gl/PEiZRcnM2vucotjh8',
  image: `${BASE_URL}/images/sprinkler-medic-logo.jpg`,
  logo: {
    '@type': 'ImageObject',
    url: `${BASE_URL}/images/sprinkler-medic-logo.jpg`,
    width: 400,
    height: 120,
  },
  sameAs: [
    'https://www.facebook.com/share/1CVLsjxcN7/',
    'https://nextdoor.com/page/sprinkler-medic-new-market-al',
    'https://m.yelp.com/biz/sprinkler-medic-new-market',
    'https://www.bbb.org/us/al/huntsville/profile/irrigation-repair/sprinkler-medic-0513-900234512',
  ],
  foundingDate: '2015',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '47',
    bestRating: '5',
    worstRating: '1',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-white text-slate-900 antialiased">
        {children}
        <Script
          id="schema-local-business"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </body>
    </html>
  )
}
