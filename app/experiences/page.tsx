import { ExperiencesPageContent } from '~/components/experiences-page-content'
import { Footer } from '~/components/footer'
import { Header } from '~/components/header'

export const metadata = {
  title: 'Experiences | Kisiwa Resort',
  description:
    'Discover extraordinary experiences from underwater adventures to cultural immersions in Tanzania.',
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
