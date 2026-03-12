import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
const GTM_ID = process.env.NEXT_PUBLIC_GTM_CONTAINER_ID
const GSC_VERIFICATION = process.env.NEXT_PUBLIC_GSC_VERIFICATION

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
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sprinkler Repair Huntsville AL | Sprinkler Medic',
    description:
      'Locally owned irrigation company serving north Alabama for 11+ years. Licensed, insured. Call (256) 679-2934.',
  },
  manifest: '/manifest.webmanifest',
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
  ...(GSC_VERIFICATION && {
    verification: {
      google: GSC_VERIFICATION,
    },
  }),
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
        {/* Google Tag Manager — noscript fallback */}
        {GTM_ID && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        )}

        {children}

        {/* Structured data */}
        <Script
          id="schema-local-business"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />

        {/* Google Tag Manager */}
        {GTM_ID && (
          <Script
            id="gtm"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`,
            }}
          />
        )}

        {/* Google Analytics 4 */}
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script
              id="ga4"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${GA_ID}',{page_path:window.location.pathname});`,
              }}
            />
          </>
        )}
      </body>
    </html>
  )
}
