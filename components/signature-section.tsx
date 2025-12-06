'use client'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowUpRight01Icon } from 'hugeicons-react'
import { useEffect, useRef } from 'react'
import { Image } from '~/components/image'
import { Link } from '~/components/link'

gsap.registerPlugin(ScrollTrigger)

export function SignatureSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        { x: -60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom-=100',
            toggleActions: 'play none none reverse',
          },
        }
      )

      gsap.fromTo(
        contentRef.current,
        { x: 60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          delay: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom-=100',
            toggleActions: 'play none none reverse',
          },
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-32 bg-background text-foreground"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div
            ref={imageRef}
            className="relative aspect-4/5 overflow-hidden group"
          >
            <Image
              src="https://images.unsplash.com/photo-1628531895969-df353541bafe?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Zanzibar beach sunset"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent" />
          </div>

          <div ref={contentRef} className="space-y-6">
            <p className="inline-block px-3 py-1 text-[10px] tracking-[0.25em] uppercase text-foreground/60 border border-foreground/20 rounded-full">
              Signature Experience
            </p>
            <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground leading-tight">
              Authentic Zanzibari{' '}
              <span className="italic text-accent">Hospitality</span>
            </h3>
            <p className="text-foreground/60 leading-relaxed text-base md:text-lg max-w-lg">
              Experience traditional Swahili hospitality at our family-run
              bungalows. Explore pristine beaches and discover why guests love
              our friendly staff and exceptional value.
            </p>
            <Link
              href="/experiences"
              className="inline-flex items-center gap-3 px-6 py-3 border border-foreground/30 text-sm tracking-[0.15em] uppercase hover:bg-foreground hover:text-background transition-all duration-300 group"
            >
              Learn More
              <ArrowUpRight01Icon
                size={14}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
