'use client'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight01Icon } from 'hugeicons-react'
import { useEffect, useEffectEvent, useRef } from 'react'
import { Image } from '~/components/image'
import { Link } from '~/components/link'
import { EXPERIENCE_IMAGES } from '~/lib/data'

gsap.registerPlugin(ScrollTrigger)

export function ExperiencesPageContent() {
  const headerRef = useRef<HTMLDivElement>(null)
  const activitiesRef = useRef<HTMLDivElement>(null)
  const excursionsRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  const activities = [
    { name: 'Snorkeling', available: true },
    { name: 'Diving', available: true },
    { name: 'Canoeing', available: true },
    { name: 'Bike Tours', available: true },
    { name: 'Fishing Trips', available: true },
    { name: 'Massage', available: true },
    { name: 'Live Music', available: true },
    { name: 'Cultural Tours', available: true },
  ]

  const excursions = [
    {
      id: 'spice-tour',
      title: 'Spice Tour',
      location: 'Kizimbani',
      image: EXPERIENCE_IMAGES.spiceTour,
    },
    {
      id: 'stone-town',
      title: 'Stone Town',
      location: 'UNESCO Heritage',
      image: EXPERIENCE_IMAGES.stoneTown,
    },
    {
      id: 'jozani-forest',
      title: 'Jozani Forest',
      location: 'National Park',
      image: EXPERIENCE_IMAGES.jozaniForest,
    },
    {
      id: 'sunset-cruise',
      title: 'Dhow Cruise',
      location: 'Michamvi Bay',
      image: EXPERIENCE_IMAGES.sunsetCruise,
    },
    {
      id: 'snorkeling',
      title: 'Blue Lagoon',
      location: 'Snorkeling',
      image: EXPERIENCE_IMAGES.snorkeling,
    },
    {
      id: 'the-rock',
      title: 'The Rock',
      location: 'Restaurant',
      image: EXPERIENCE_IMAGES.theRock,
    },
  ]

  const animateHeader = useEffectEvent(() => {
    const els = headerRef.current?.children
    if (!els) return

    gsap.fromTo(
      els,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.1,
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top bottom-=100',
          toggleActions: 'play none none reverse',
        },
      }
    )
  })

  const animateActivities = useEffectEvent(() => {
    const items = activitiesRef.current?.querySelectorAll('.activity-item')
    if (!items) return

    gsap.fromTo(
      items,
      { y: 30, opacity: 0, scale: 0.9 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.5,
        ease: 'power2.out',
        stagger: 0.05,
        scrollTrigger: {
          trigger: activitiesRef.current,
          start: 'top bottom-=50',
          toggleActions: 'play none none reverse',
        },
      }
    )
  })

  const animateExcursions = useEffectEvent(() => {
    const items = excursionsRef.current?.querySelectorAll('.excursion-item')
    if (!items) return

    gsap.fromTo(
      items,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: 'power3.out',
        stagger: 0.1,
        scrollTrigger: {
          trigger: excursionsRef.current,
          start: 'top bottom-=80',
          toggleActions: 'play none none reverse',
        },
      }
    )
  })

  const animateCta = useEffectEvent(() => {
    gsap.fromTo(
      ctaRef.current,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: ctaRef.current,
          start: 'top bottom-=50',
          toggleActions: 'play none none reverse',
        },
      }
    )
  })

  useEffect(() => {
    animateHeader()
    animateActivities()
    animateExcursions()
    animateCta()

    return () => {
      for (const trigger of ScrollTrigger.getAll()) {
        trigger.kill()
      }
    }
  }, [])

  return (
    <section className="pt-32 sm:pt-36 md:pt-40 pb-16 md:pb-24">
      {/* Header */}
      <div
        ref={headerRef}
        className="mx-auto max-w-6xl px-4 sm:px-6 mb-16 md:mb-24"
      >
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-foreground mb-4 opacity-0">
          Experiences
        </h1>
        <p className="text-muted-foreground max-w-xl text-base leading-relaxed opacity-0">
          From on-site water sports to cultural excursions, discover the best of
          Zanzibar with our curated experiences.
        </p>
      </div>

      {/* On-Site Activities */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 mb-20 md:mb-28">
        <h2 className="text-sm uppercase tracking-widest text-muted-foreground mb-8">
          On-Site Activities
        </h2>
        <div
          ref={activitiesRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {activities.map((activity) => (
            <div
              key={activity.name}
              className="activity-item py-4 px-5 border border-border rounded-lg text-center hover:border-accent/50 hover:bg-accent/5 transition-all duration-300 cursor-default opacity-0"
            >
              <span className="text-sm text-foreground">{activity.name}</span>
            </div>
          ))}
        </div>
        <p className="text-xs text-muted-foreground mt-4">
          Some activities may have additional charges. Ask our concierge for
          details.
        </p>
      </div>

      {/* Excursions Grid */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 mb-20">
        <h2 className="text-sm uppercase tracking-widest text-muted-foreground mb-8">
          Excursions We Arrange
        </h2>
        <div
          ref={excursionsRef}
          className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6"
        >
          {excursions.map((item) => (
            <Link
              key={item.id}
              href={`/contact?inquiry=${encodeURIComponent(item.title)}`}
              className="excursion-item group block opacity-0"
            >
              <div className="relative aspect-square rounded-lg overflow-hidden mb-3">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="bg-white/90 text-foreground text-xs px-4 py-2 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    Inquire
                  </span>
                </div>
              </div>
              <h3 className="font-serif text-lg text-foreground group-hover:text-accent transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground">{item.location}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div ref={ctaRef} className="mx-auto max-w-6xl px-4 sm:px-6 opacity-0">
        <div className="border border-border p-8 md:p-12 rounded-xl text-center hover:border-accent/30 transition-colors duration-300">
          <h3 className="font-serif text-xl md:text-2xl text-foreground mb-3">
            Custom experiences
          </h3>
          <p className="text-muted-foreground mb-6 text-sm max-w-md mx-auto">
            Looking for something unique? Our concierge can arrange private
            charters, dolphin watching, and more.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 text-sm hover:bg-foreground/90 transition-colors rounded-lg overflow-hidden"
          >
            <span>Get in Touch</span>
            <ArrowRight01Icon
              size={14}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  )
}
