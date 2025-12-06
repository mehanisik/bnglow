import type { Metadata } from 'next'
import { AboutPageContent } from '~/components/about-page-content'
import { Footer } from '~/components/footer'
import { Header } from '~/components/header'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Sagando Hostel in Zanzibar, Tanzania. Discover our story, our commitment to authentic hospitality, and why travelers choose us for their island getaway.',
  keywords: [
    'about Sagando Hostel',
    'Zanzibar hostel story',
    'Tanzania travel',
    'Zanzibar accommodation',
    'island hospitality',
  ],
  openGraph: {
    title: 'About Us | Sagando Hostel',
    description:
      'Discover the story behind Sagando Hostel. Your home away from home in beautiful Zanzibar, Tanzania.',
    url: 'https://sagandohostel.com/about',
    images: ['/images/hero.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us | Sagando Hostel',
    description:
      'Discover the story behind Sagando Hostel. Your home away from home in beautiful Zanzibar.',
  },
  alternates: {
    canonical: 'https://sagandohostel.com/about',
  },
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <AboutPageContent />
      <Footer />
    </main>
  )
}
