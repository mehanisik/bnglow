import type { Metadata } from 'next'
import { ExperiencesPageContent } from '~/components/experiences-page-content'
import { Footer } from '~/components/footer'
import { Header } from '~/components/header'

export const metadata: Metadata = {
  title: 'Experiences & Activities',
  description:
    'Explore unforgettable experiences in Zanzibar. From spice tours and Stone Town walks to snorkeling and sunset cruises. Discover the best of Tanzania with Sagando Hostel.',
  keywords: [
    'Zanzibar experiences',
    'Zanzibar activities',
    'spice tour Zanzibar',
    'Stone Town tour',
    'snorkeling Zanzibar',
    'sunset cruise Tanzania',
    'Jozani Forest tour',
    'Tanzania adventure',
  ],
  openGraph: {
    title: 'Experiences & Activities | Sagando Hostel',
    description:
      'Discover extraordinary experiences in Zanzibar - from spice tours to underwater adventures and cultural immersions.',
    url: 'https://sagandohostel.com/experiences',
    images: ['/images/hero.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Experiences & Activities | Sagando Hostel',
    description:
      'Discover extraordinary experiences in Zanzibar - from spice tours to underwater adventures.',
  },
  alternates: {
    canonical: 'https://sagandohostel.com/experiences',
  },
}

export default function ExperiencesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ExperiencesPageContent />
      <Footer />
    </main>
  )
}
