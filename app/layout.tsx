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
  title: 'Kisiwa Bungalows | Luxury Island Resort Tanzania',
  description:
    'Experience unparalleled luxury at our exclusive island bungalow resort in Tanzania. Private beachfront villas, world-class dining, and authentic African experiences await.',
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
