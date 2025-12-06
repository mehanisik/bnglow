import type { Metadata } from 'next'
import { ContactPageContent } from '~/components/contact-page-content'
import { Footer } from '~/components/footer'
import { Header } from '~/components/header'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Sagando Hostel in Zanzibar, Tanzania. Contact us for reservations, inquiries, or to plan your perfect island escape. We are here to help!',
  keywords: [
    'contact Sagando Hostel',
    'Zanzibar hostel contact',
    'book Zanzibar accommodation',
    'Tanzania hostel inquiry',
    'Zanzibar travel help',
  ],
  openGraph: {
    title: 'Contact Us | Sagando Hostel',
    description:
      'Reach out to Sagando Hostel for reservations and inquiries. Plan your perfect Zanzibar getaway with us.',
    url: 'https://sagandohostel.com/contact',
    images: ['/images/hero.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us | Sagando Hostel',
    description:
      'Reach out to Sagando Hostel for reservations and inquiries. Plan your perfect Zanzibar getaway.',
  },
  alternates: {
    canonical: 'https://sagandohostel.com/contact',
  },
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
