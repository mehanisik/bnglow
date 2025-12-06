'use client'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowUpRight01Icon } from 'hugeicons-react'
import { useEffect, useRef, useState } from 'react'
import { Image } from '~/components/image'
import { Link } from '~/components/link'

gsap.registerPlugin(ScrollTrigger)

const experiences = [
  {
    id: 1,
    title: 'Snorkeling & Diving',
    subtitle: 'Explore vibrant coral reefs',
    category: 'Water Sports',
    image:
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80',
  },
  {
    id: 2,
    title: 'Fishing Trips',
    subtitle: 'Traditional dhow sailing',
    category: 'Adventure',
    image:
      'https://images.unsplash.com/photo-1545450660-3378a7f3a364?w=800&q=80',
  },
  {
    id: 3,
    title: 'Local Culture',
    subtitle: 'Spice farms & villages',
    category: 'Heritage',
    image:
      'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=800&q=80',
  },
  {
    id: 4,
    title: 'Beach Bonfire',
    subtitle: 'Evening music & vibes',
    category: 'Nightlife',
    image:
      'https://images.unsplash.com/photo-1596326270763-87f26e0f9225?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
]

export function ExperiencesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top bottom-=80',
            toggleActions: 'play none none reverse',
          },
        }
      )

      const cards = cardsRef.current?.querySelectorAll('.experience-card')
      if (cards) {
        gsap.fromTo(
          cards,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: 'power3.out',
            stagger: 0.12,
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top bottom-=60',
              toggleActions: 'play none none reverse',
            },
          }
        )
      }
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      id="experiences"
      ref={sectionRef}
      className="py-20 md:py-32 bg-foreground text-background"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div ref={headerRef} className="mb-12 md:mb-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <p className="inline-block px-3 py-1 text-[10px] tracking-[0.3em] text-background/70 uppercase mb-4 border border-background/20 rounded-full">
                Discover
              </p>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight">
                Unforgettable{' '}
                <span className="italic text-accent">Experiences</span>
              </h2>
            </div>
            <Link
              href="/experiences"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs tracking-[0.15em] uppercase text-background/80 hover:text-background border border-background/30 hover:border-background/50 rounded-full transition-all duration-300 group"
            >
              View All
              <ArrowUpRight01Icon
                size={14}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
              />
            </Link>
          </div>
        </div>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5"
        >
          {experiences.map((exp, index) => (
            <button
              type="button"
              key={exp.id}
              className="experience-card group relative overflow-hidden aspect-3/4 cursor-pointer text-left"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => {
                setHoveredIndex(hoveredIndex === index ? null : index)
              }}
            >
              <Image
                src={exp.image}
                alt={exp.title}
                fill
                className={`object-cover transition-transform duration-700 ${
                  hoveredIndex === index ? 'scale-110' : 'scale-100'
                }`}
              />

              <div
                className={`absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500 ${
                  hoveredIndex === index ? 'opacity-100' : 'opacity-70'
                }`}
              />

              <div className="absolute top-4 left-4">
                <span className="px-3 py-1.5 text-[10px] tracking-wider uppercase text-white/90 bg-white/10 backdrop-blur-md border border-white/20 rounded-full">
                  {exp.category}
                </span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p
                  className={`text-white/60 text-xs tracking-wide mb-2 transition-all duration-300 ${
                    hoveredIndex === index
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-2'
                  }`}
                >
                  {exp.subtitle}
                </p>
                <h3 className="font-serif text-xl md:text-2xl font-medium text-white">
                  {exp.title}
                </h3>

                <div
                  className={`mt-4 flex items-center gap-2 text-xs text-white/70 tracking-wide transition-all duration-300 ${
                    hoveredIndex === index
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-3'
                  }`}
                >
                  <span>Explore</span>
                  <ArrowUpRight01Icon size={12} />
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
