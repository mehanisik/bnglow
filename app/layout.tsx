import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Geist, Geist_Mono } from 'next/font/google'
import type React from 'react'

import '~/app/styles/globals.css'
import { ReactTempus } from 'tempus/react'
import { GSAPRuntime } from '~/components/gsap/runtime'
import { Lenis } from '~/components/lenis'
import { TopBanner } from '~/components/top-banner'
import { fontsVariable } from '~/lib/fonts'

const _geist = Geist({ subsets: ['latin'] })
const _geistMono = Geist_Mono({ subsets: ['latin'] })
const _cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://sagandohostel.com'),
  title: {
    default: 'Sagando Hostel | Affordable Beachfront Stay in Zanzibar',
    template: '%s | Sagando Hostel',
  },
  description:
    'Welcome to Sagando Hostel, your affordable beachfront accommodation in Zanzibar, Tanzania. Enjoy stunning ocean views, comfortable bungalows, warm hospitality, and authentic island experiences.',
  keywords: [
    'Zanzibar hostel',
    'Sagando Hostel',
    'Tanzania accommodation',
    'beachfront hostel',
    'Zanzibar beach stay',
    'budget accommodation Zanzibar',
    'Tanzania travel',
    'Zanzibar bungalows',
    'island getaway Tanzania',
    'African beach vacation',
  ],
  authors: [{ name: 'Sagando Hostel' }],
  creator: 'Sagando Hostel',
  publisher: 'Sagando Hostel',
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
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://sagandohostel.com',
    siteName: 'Sagando Hostel',
    title: 'Sagando Hostel | Affordable Beachfront Stay in Zanzibar',
    description:
      'Welcome to Sagando Hostel, your affordable beachfront accommodation in Zanzibar, Tanzania. Enjoy stunning ocean views, comfortable bungalows, and authentic island experiences.',
    images: [
      {
        url: '/images/hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Sagando Hostel - Beachfront accommodation in Zanzibar',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sagando Hostel | Affordable Beachfront Stay in Zanzibar',
    description:
      'Welcome to Sagando Hostel, your affordable beachfront accommodation in Zanzibar, Tanzania. Enjoy stunning ocean views and authentic island experiences.',
    images: ['/images/hero.jpg'],
  },
  alternates: {
    canonical: 'https://sagandohostel.com',
  },
  category: 'Travel',
}

export const viewport: Viewport = {
  themeColor: '#1a3a3a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={fontsVariable}
      suppressHydrationWarning
    >
      <body className={`font-sans antialiased`}>
        <script
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD structured data for SEO
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LodgingBusiness',
              name: 'Sagando Hostel',
              description:
                'Affordable beachfront accommodation in Zanzibar, Tanzania. Comfortable bungalows with garden views, warm hospitality, and authentic island experiences.',
              url: 'https://sagandohostel.com',
              telephone: '+255 776 543 210',
              email: 'info@sagandohostel.com',
              image: 'https://sagandohostel.com/images/hero.jpg',
              priceRange: '$60 - $120',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Zanzibar',
                addressRegion: 'Zanzibar',
                addressCountry: 'TZ',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: -6.1659,
                longitude: 39.1989,
              },
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '8.9',
                bestRating: '10',
                worstRating: '1',
                ratingCount: '150',
              },
              amenityFeature: [
                { '@type': 'LocationFeatureSpecification', name: 'Free WiFi' },
                { '@type': 'LocationFeatureSpecification', name: 'Air Conditioning' },
                { '@type': 'LocationFeatureSpecification', name: 'Garden View' },
                { '@type': 'LocationFeatureSpecification', name: 'Private Bathroom' },
                { '@type': 'LocationFeatureSpecification', name: 'Terrace' },
              ],
              sameAs: [
                'https://www.booking.com/hotel/tz/sagando-hostel.en-gb.html',
              ],
            }),
          }}
        />
        <GSAPRuntime />
        <ReactTempus />
        <ReactTempus />
        <Lenis root options={{}} />
        <TopBanner />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
