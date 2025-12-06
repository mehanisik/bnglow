import { AboutPageContent } from '~/components/about-page-content'
import { Footer } from '~/components/footer'
import { Header } from '~/components/header'

export const metadata = {
  title: 'About Tanzania | Kisiwa Resort',
  description:
    'Discover the magic of Tanzania - from pristine beaches to rich culture and incredible wildlife.',
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
