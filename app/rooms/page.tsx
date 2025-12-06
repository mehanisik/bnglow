import type { Metadata } from 'next'
import { Footer } from '~/components/footer'
import { Header } from '~/components/header'
import { RoomsPageContent } from '~/components/rooms-page-content'
import { rooms } from '~/lib/data'

export const metadata: Metadata = {
  title: 'Rooms & Bungalows',
  description:
    'Browse our comfortable rooms and bungalows at Sagando Hostel in Zanzibar. Choose from double rooms, twin rooms, triple rooms, and private chalets with garden views.',
  keywords: [
    'Zanzibar rooms',
    'Sagando Hostel rooms',
    'Zanzibar bungalows',
    'beachfront accommodation',
    'double room Zanzibar',
    'twin room Tanzania',
    'chalet Zanzibar',
    'budget rooms Zanzibar',
  ],
  openGraph: {
    title: 'Rooms & Bungalows | Sagando Hostel',
    description:
      'Discover our comfortable rooms and bungalows in Zanzibar. From cozy chalets to spacious triple rooms with garden views.',
    url: 'https://sagandohostel.com/rooms',
    images: ['/images/hero.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rooms & Bungalows | Sagando Hostel',
    description:
      'Discover our comfortable rooms and bungalows in Zanzibar. From cozy chalets to spacious triple rooms.',
  },
  alternates: {
    canonical: 'https://sagandohostel.com/rooms',
  },
}

export default function RoomsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <RoomsPageContent rooms={rooms} />
      <Footer />
    </main>
  )
}
