'use client'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Airplane01Icon, Location01Icon, Tick01Icon } from 'hugeicons-react'
import { useEffect, useEffectEvent, useRef } from 'react'
import { Link } from '~/components/link'

gsap.registerPlugin(ScrollTrigger)

const amenities = [
  'Free WiFi',
  'Free Parking',
  'Restaurant & Bar',
  'Room Service',
  'Airport Shuttle',
  'Air Conditioning',
  'Private Bathroom',
  'Garden View',
  'Terrace',
  'Fireplace',
  'Daily Housekeeping',
  '24-Hour Front Desk',
]

const highlights = [
  { label: 'Beach', value: '100m', suffix: 'away' },
  { label: 'Airport', value: '30', suffix: 'km' },
  { label: 'Stone Town', value: '45', suffix: 'min' },
  { label: 'The Rock', value: '3.2', suffix: 'km' },
]

export function AboutPageContent() {
  const headerRef = useRef<HTMLDivElement>(null)
  const descriptionRef = useRef<HTMLDivElement>(null)
  const highlightsRef = useRef<HTMLDivElement>(null)
  const amenitiesRef = useRef<HTMLDivElement>(null)
  const locationRef = useRef<HTMLDivElement>(null)
  const counterRefs = useRef<(HTMLParagraphElement | null)[]>([])

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
        stagger: 0.15,
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top bottom-=100',
          toggleActions: 'play none none reverse',
        },
      }
    )
  })

  const animateDescription = useEffectEvent(() => {
    const paragraphs = descriptionRef.current?.querySelectorAll('p')
    if (!paragraphs) return

    gsap.fromTo(
      paragraphs,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: 'power3.out',
        stagger: 0.1,
        scrollTrigger: {
          trigger: descriptionRef.current,
          start: 'top bottom-=80',
          toggleActions: 'play none none reverse',
        },
      }
    )
  })

  const animateHighlights = useEffectEvent(() => {
    const items = highlightsRef.current?.children
    if (!items) return

    gsap.fromTo(
      items,
      { y: 30, opacity: 0, scale: 0.9 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: 'power2.out',
        stagger: 0.08,
        scrollTrigger: {
          trigger: highlightsRef.current,
          start: 'top bottom-=50',
          toggleActions: 'play none none reverse',
          onEnter: () => animateCounters(),
        },
      }
    )
  })

  const animateCounters = useEffectEvent(() => {
    counterRefs.current.forEach((el, i) => {
      if (!el) return
      const target = highlights[i]
      const value = Number.parseFloat(target.value)

      gsap.fromTo(
        { val: 0 },
        { val: value },
        {
          val: value,
          duration: 1.5,
          ease: 'power2.out',
          onUpdate: function () {
            const current = this.targets()[0].val
            if (Number.isInteger(value)) {
              el.textContent = `${Math.round(current)}${target.suffix}`
            } else {
              el.textContent = `${current.toFixed(1)}${target.suffix}`
            }
          },
        }
      )
    })
  })

  const animateAmenities = useEffectEvent(() => {
    const items = amenitiesRef.current?.querySelectorAll('.amenity-item')
    if (!items) return

    gsap.fromTo(
      items,
      { x: -20, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.4,
        ease: 'power2.out',
        stagger: 0.04,
        scrollTrigger: {
          trigger: amenitiesRef.current,
          start: 'top bottom-=50',
          toggleActions: 'play none none reverse',
        },
      }
    )
  })

  const animateLocation = useEffectEvent(() => {
    gsap.fromTo(
      locationRef.current,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: locationRef.current,
          start: 'top bottom-=50',
          toggleActions: 'play none none reverse',
        },
      }
    )
  })

  useEffect(() => {
    animateHeader()
    animateDescription()
    animateHighlights()
    animateAmenities()
    animateLocation()

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
        className="mx-auto max-w-3xl px-4 sm:px-6 mb-16 md:mb-24 text-center"
      >
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-foreground mb-6 opacity-0">
          About Sagando
        </h1>
        <p className="text-muted-foreground text-base md:text-lg leading-relaxed opacity-0">
          A family-run retreat in the quiet village of Michamvi Kae, offering
          authentic Zanzibari hospitality just 200 metres from the beach.
        </p>
      </div>

      {/* Description */}
      <div
        ref={descriptionRef}
        className="mx-auto max-w-3xl px-4 sm:px-6 mb-16 md:mb-24"
      >
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p className="opacity-0">
            Sagando Bungalows features a tropical garden setting with indigenous
            plants and outdoor seating areas. Located on the southeast coast of
            Zanzibar, away from the tourist crowds, we offer a relaxed and
            authentic experience.
          </p>
          <p className="opacity-0">
            All bungalows have private balconies or terraces with garden views.
            Rooms are equipped with mosquito nets, ceiling fans, and private
            bathrooms with hot showers. Enjoy the warmth of a fireplace and the
            tranquility of our gardens.
          </p>
          <p className="opacity-0">
            Guests can enjoy buffet breakfast at our on-site restaurant and
            refreshing drinks at the bar. We arrange activities including
            fishing, diving, snorkeling, and cultural tours.
          </p>
        </div>
      </div>

      {/* Quick Info with Counter Animation */}
      <div className="mx-auto max-w-3xl px-4 sm:px-6 mb-16 md:mb-24">
        <div
          ref={highlightsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {highlights.map((item, i) => (
            <div key={item.label} className="text-center opacity-0">
              <p
                ref={(el) => {
                  counterRefs.current[i] = el
                }}
                className="text-2xl font-serif text-foreground mb-1"
              >
                0{item.suffix}
              </p>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Amenities */}
      <div className="mx-auto max-w-3xl px-4 sm:px-6 mb-16 md:mb-24">
        <h2 className="text-sm uppercase tracking-widest text-muted-foreground mb-8 text-center">
          Amenities & Services
        </h2>
        <div
          ref={amenitiesRef}
          className="grid grid-cols-2 md:grid-cols-3 gap-4"
        >
          {amenities.map((amenity) => (
            <div
              key={amenity}
              className="amenity-item flex items-center gap-3 text-muted-foreground opacity-0"
            >
              <Tick01Icon size={14} className="text-accent shrink-0" />
              <span className="text-sm">{amenity}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Location */}
      <div
        ref={locationRef}
        className="mx-auto max-w-3xl px-4 sm:px-6 opacity-0"
      >
        <div className="border border-border p-8 md:p-12 rounded-xl hover:border-accent/30 transition-colors duration-300">
          <div className="flex items-start gap-4 mb-6">
            <Location01Icon size={20} className="text-accent mt-1" />
            <div>
              <h3 className="font-serif text-lg text-foreground mb-1">
                Getting Here
              </h3>
              <p className="text-sm text-muted-foreground">
                Michamvi Kae, Zanzibar Island, Tanzania
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 mb-8">
            <Airplane01Icon size={20} className="text-accent mt-1" />
            <div>
              <h3 className="font-serif text-lg text-foreground mb-1">
                From Airport
              </h3>
              <p className="text-sm text-muted-foreground">
                30 km from Abeid Amani Karume International Airport (approx. 1
                hour by car). Airport shuttle available.
              </p>
            </div>
          </div>
          <Link
            href="/contact"
            className="group inline-flex items-center text-sm text-foreground hover:text-accent transition-colors"
          >
            <span>Arrange your transfer</span>
            <span className="ml-2 transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}
