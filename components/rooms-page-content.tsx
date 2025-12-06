'use client'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight01Icon, RulerIcon, UserGroupIcon } from 'hugeicons-react'
import { useEffect, useEffectEvent, useRef } from 'react'
import { Image } from '~/components/image'
import { Link } from '~/components/link'
import type { Room } from '~/lib/data'

gsap.registerPlugin(ScrollTrigger)

interface RoomsPageContentProps {
  rooms: Room[]
}

export function RoomsPageContent({ rooms }: RoomsPageContentProps) {
  const headerRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

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

  const animateGrid = useEffectEvent(() => {
    const items = gridRef.current?.querySelectorAll('.room-card')
    if (!items) return

    gsap.fromTo(
      items,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: 'power3.out',
        stagger: 0.12,
        scrollTrigger: {
          trigger: gridRef.current,
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
    animateGrid()
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
        className="mx-auto max-w-6xl px-4 sm:px-6 mb-12 md:mb-16"
      >
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-foreground mb-4 opacity-0">
          Our Rooms
        </h1>
        <p className="text-muted-foreground max-w-xl text-base leading-relaxed opacity-0">
          Each room blends traditional Swahili architecture with modern comfort.
          Choose your perfect retreat in Zanzibar.
        </p>
      </div>

      {/* Room Grid */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div ref={gridRef} className="grid md:grid-cols-2 gap-6 md:gap-8">
          {rooms.map((room) => (
            <Link
              key={room.id}
              href={`/rooms/${room.slug}`}
              className="room-card group block opacity-0"
            >
              <div className="relative aspect-4/3 rounded-lg overflow-hidden mb-4 shadow-lg shadow-black/5 group-hover:shadow-xl group-hover:shadow-black/10 transition-shadow duration-500">
                <Image
                  src={room.image}
                  alt={room.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="font-serif text-xl md:text-2xl text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
                    {room.name}
                  </h2>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <UserGroupIcon size={14} /> {room.guests}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <RulerIcon size={14} /> {room.size}m²
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="font-serif text-lg text-foreground">
                    ${room.price}
                  </span>
                  <span className="text-muted-foreground text-sm block">
                    /night
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div
        ref={ctaRef}
        className="mx-auto max-w-6xl px-4 sm:px-6 mt-16 opacity-0"
      >
        <div className="border border-border p-8 md:p-12 rounded-xl text-center hover:border-accent/30 transition-colors duration-300">
          <h3 className="font-serif text-xl md:text-2xl text-foreground mb-3">
            Need help choosing?
          </h3>
          <p className="text-muted-foreground mb-6 text-sm">
            Our team can recommend the perfect room for your stay.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 text-sm text-foreground hover:text-accent transition-colors"
          >
            <span>Contact Us</span>
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
