import { Footer } from '~/components/footer'
import { Header } from '~/components/header'
import { RoomsPageContent } from '~/components/rooms-page-content'
import { rooms } from '~/lib/data'

export const metadata = {
  title: 'Rooms & Villas | Kisiwa Resort',
  description:
    "Discover our luxury bungalows and villas on Tanzania's pristine island shores.",
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
