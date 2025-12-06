'use client'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowUpRight01Icon } from 'hugeicons-react'
import { useEffect, useEffectEvent, useRef } from 'react'
import { Image } from '~/components/image'
import { Link } from '~/components/link'
import type { Room } from '~/lib/data'

gsap.registerPlugin(ScrollTrigger)

interface RoomsSectionProps {
  rooms: Room[]
}

export function RoomsSection({ rooms }: RoomsSectionProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const descRef = useRef<HTMLParagraphElement>(null)
  const cardsContainerRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<(HTMLAnchorElement | null)[]>([])

  // Animate section header
  const animateHeader = useEffectEvent(() => {
    gsap.fromTo(
      [subtitleRef.current, titleRef.current, descRef.current],
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom-=100',
          toggleActions: 'play none none reverse',
        },
      }
    )
  })

  // Animate cards with stagger
  const animateCards = useEffectEvent(() => {
    const cards = cardRefs.current.filter(Boolean)
    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 80, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top bottom-=80',
            toggleActions: 'play none none reverse',
          },
          delay: index * 0.08,
        }
      )
    })
  })

  // Card tilt hover effect
  const setupCardHovers = useEffectEvent(() => {
    const cards = cardRefs.current.filter(Boolean)

    cards.forEach((card) => {
      if (!card) return

      const handleMouseMove = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        const centerX = rect.width / 2
        const centerY = rect.height / 2
        const rotateX = (y - centerY) / 20
        const rotateY = (centerX - x) / 20

        gsap.to(card, {
          rotateX: rotateX,
          rotateY: rotateY,
          transformPerspective: 1000,
          duration: 0.3,
          ease: 'power2.out',
        })

        // Move image slightly for parallax effect
        const img = card.querySelector('img')
        if (img) {
          gsap.to(img, {
            x: (centerX - x) / 10,
            y: (centerY - y) / 10,
            duration: 0.3,
          })
        }
      }

      const handleMouseLeave = () => {
        gsap.to(card, {
          rotateX: 0,
          rotateY: 0,
          duration: 0.5,
          ease: 'power2.out',
        })

        const img = card.querySelector('img')
        if (img) {
          gsap.to(img, { x: 0, y: 0, duration: 0.5 })
        }
      }

      card.addEventListener('mousemove', handleMouseMove)
      card.addEventListener('mouseleave', handleMouseLeave)
    })
  })

  useEffect(() => {
    animateHeader()
    animateCards()
    setupCardHovers()

    return () => {
      for (const trigger of ScrollTrigger.getAll()) {
        trigger.kill()
      }
    }
  }, [])

  return (
    <section
      id="rooms"
      ref={sectionRef}
      className="bg-background py-20 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
          <div>
            <p
              ref={subtitleRef}
              className="text-[10px] tracking-[0.3em] text-accent uppercase mb-4 opacity-0"
            >
              Accommodations
            </p>
            <h2
              ref={titleRef}
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-foreground opacity-0"
            >
              Our Bungalows
            </h2>
          </div>
          <p
            ref={descRef}
            className="text-muted-foreground text-base leading-relaxed max-w-sm opacity-0"
          >
            Cozy bungalows with Makuti roofs, garden views, and all essential
            comforts.
          </p>
        </div>

        <div
          ref={cardsContainerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {rooms.slice(0, 6).map((room, index) => (
            <Link
              key={room.id}
              href={`/rooms/${room.slug}`}
              ref={(el) => {
                cardRefs.current[index] = el
              }}
              className="group relative aspect-4/3 overflow-hidden will-change-transform"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <Image
                src={room.image}
                alt={room.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110 will-change-transform"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent transition-opacity group-hover:from-black/80" />
              <div className="absolute inset-0 p-5 flex flex-col justify-between">
                <div className="self-end">
                  <span className="bg-white/15 backdrop-blur-sm px-3 py-1.5 text-white text-xs border border-white/20 transition-all group-hover:bg-white/25">
                    {room.guests} guests
                  </span>
                </div>
                <div className="flex items-end justify-between">
                  <div>
                    <h3 className="font-serif text-xl text-white mb-1 transition-transform duration-300 group-hover:translate-x-2">
                      {room.name}
                    </h3>
                    <p className="text-white/70 text-xs transition-all group-hover:text-white/90">
                      From ${room.price}/night
                    </p>
                  </div>
                  <div className="w-9 h-9 border border-white/30 flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 group-hover:border-white/60">
                    <ArrowUpRight01Icon size={16} className="text-white" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/rooms"
            className="group relative flex items-center gap-4 px-8 py-4 border border-border overflow-hidden transition-all duration-300 hover:border-foreground"
          >
            <span className="absolute inset-0 bg-foreground translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <span className="relative text-xs tracking-[0.15em] uppercase text-foreground group-hover:text-background transition-colors duration-300">
              View All Rooms
            </span>
            <ArrowUpRight01Icon
              size={14}
              className="relative text-foreground group-hover:text-background transition-colors duration-300"
            />
          </Link>
        </div>
      </div>
    </section>
  )
}
