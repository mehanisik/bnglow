import { Suspense } from 'react'
import { AmenitiesSection } from '~/components/amenities-section'
import { ContactSection } from '~/components/contact-section'
import { ExperiencesSection } from '~/components/experiences-section'
import { Footer } from '~/components/footer'
import { Header } from '~/components/header'
import { HeroSection } from '~/components/hero-section'
import { RoomsSection } from '~/components/rooms-section'
import { SignatureSection } from '~/components/signature-section'
import { rooms } from '~/lib/data'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Suspense fallback={<div className="min-h-screen" />}>
        <HeroSection />
      </Suspense>
      <RoomsSection rooms={rooms} />
      <ExperiencesSection />
      <SignatureSection />
      <AmenitiesSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
