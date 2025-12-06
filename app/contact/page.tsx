import { ContactPageContent } from '~/components/contact-page-content'
import { Footer } from '~/components/footer'
import { Header } from '~/components/header'

export const metadata = {
  title: 'Contact | Kisiwa Resort',
  description:
    'Get in touch with Kisiwa Resort. Plan your perfect island escape in Tanzania.',
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ContactPageContent />
      <Footer />
    </main>
  )
}
