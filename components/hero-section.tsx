'use client'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  ArrowDown01Icon,
  ArrowRight01Icon,
  Calendar01Icon,
  MinusSignIcon,
  PlusSignIcon,
  UserGroupIcon,
} from 'hugeicons-react'
import { useEffect, useEffectEvent, useRef, useState } from 'react'
import { Image } from './image'
import { Link } from './link'

gsap.registerPlugin(ScrollTrigger)

const BOOKING_URL = 'https://www.booking.com/hotel/tz/sagando-hostel.en-gb.html'
const HERO_IMAGE = '/images/hero.jpg'

function formatDate(date: Date): string {
  return date.toISOString().split('T')[0]
}

function getTomorrow(): string {
  const tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)
  return formatDate(tomorrow)
}

function getDayAfterTomorrow(): string {
  const dayAfter = new Date()
  dayAfter.setDate(dayAfter.getDate() + 2)
  return formatDate(dayAfter)
}

export function HeroSection() {
  const [checkIn, setCheckIn] = useState(getTomorrow)
  const [checkOut, setCheckOut] = useState(getDayAfterTomorrow)
  const [adults, setAdults] = useState(2)
  const [children, setChildren] = useState(0)
  const [showGuestPicker, setShowGuestPicker] = useState(false)

  // Ensure checkout is always after checkin
  const handleCheckInChange = (value: string) => {
    setCheckIn(value)
    // If checkout is before or equal to new checkin, set checkout to day after checkin
    if (value >= checkOut) {
      const nextDay = new Date(value)
      nextDay.setDate(nextDay.getDate() + 1)
      setCheckOut(formatDate(nextDay))
    }
  }

  // Get minimum checkout date (day after checkin)
  const minCheckOut = (() => {
    if (!checkIn) return getTomorrow()
    const nextDay = new Date(checkIn)
    nextDay.setDate(nextDay.getDate() + 1)
    return formatDate(nextDay)
  })()

  const heroRef = useRef<HTMLElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const taglineRef = useRef<HTMLParagraphElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const descRef = useRef<HTMLParagraphElement>(null)
  const bookingRef = useRef<HTMLDivElement>(null)
  const scrollIndicatorRef = useRef<HTMLDivElement>(null)
  const bookButtonRef = useRef<HTMLAnchorElement>(null)

  // Main entrance animation
  const animateEntrance = useEffectEvent(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    tl.fromTo(
      imageRef.current,
      { scale: 1.2, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.5 }
    )
      .fromTo(
        taglineRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 },
        '-=0.8'
      )
      .fromTo(
        titleRef.current,
        { y: 50, opacity: 0, clipPath: 'inset(100% 0% 0% 0%)' },
        { y: 0, opacity: 1, clipPath: 'inset(0% 0% 0% 0%)', duration: 1.2 },
        '-=0.7'
      )
      .fromTo(
        descRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 },
        '-=0.7'
      )
      .fromTo(
        bookingRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 },
        '-=0.5'
      )
      .fromTo(
        scrollIndicatorRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.8 },
        '-=0.3'
      )

    return tl
  })

  // Parallax effect on scroll
  const setupParallax = useEffectEvent(() => {
    if (!imageRef.current) return

    gsap.to(imageRef.current, {
      yPercent: 30,
      ease: 'none',
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    })
  })

  // Scroll indicator animation
  const animateScrollIndicator = useEffectEvent(() => {
    if (!scrollIndicatorRef.current) return

    gsap.to(scrollIndicatorRef.current.querySelector('.scroll-line'), {
      scaleY: 0,
      transformOrigin: 'top',
      repeat: -1,
      yoyo: true,
      duration: 1.5,
      ease: 'power2.inOut',
    })
  })

  // Magnetic hover effect on book button
  const handleBookButtonMove = useEffectEvent((e: MouseEvent) => {
    if (!bookButtonRef.current) return
    const rect = bookButtonRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2

    gsap.to(bookButtonRef.current, {
      x: x * 0.2,
      y: y * 0.2,
      duration: 0.3,
      ease: 'power2.out',
    })
  })

  const handleBookButtonLeave = useEffectEvent(() => {
    if (!bookButtonRef.current) return
    gsap.to(bookButtonRef.current, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: 'elastic.out(1, 0.5)',
    })
  })

  useEffect(() => {
    const tl = animateEntrance()
    setupParallax()
    animateScrollIndicator()

    const bookBtn = bookButtonRef.current
    if (bookBtn) {
      bookBtn.addEventListener('mousemove', handleBookButtonMove)
      bookBtn.addEventListener('mouseleave', handleBookButtonLeave)
    }

    return () => {
      tl?.kill()
      for (const trigger of ScrollTrigger.getAll()) {
        trigger.kill()
      }
      if (bookBtn) {
        bookBtn.removeEventListener('mousemove', handleBookButtonMove)
        bookBtn.removeEventListener('mouseleave', handleBookButtonLeave)
      }
    }
  }, [])

  const guestSummary = `${adults} Adult${adults > 1 ? 's' : ''}${children > 0 ? `, ${children} Child${children > 1 ? 'ren' : ''}` : ''}`

  const getBookingUrl = () => {
    const url = new URL(BOOKING_URL)
    if (checkIn) url.searchParams.set('checkin', checkIn)
    if (checkOut) url.searchParams.set('checkout', checkOut)
    url.searchParams.set('group_adults', adults.toString())
    url.searchParams.set('group_children', children.toString())
    url.searchParams.set('no_rooms', '1')
    return url.toString()
  }

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div ref={imageRef} className="absolute inset-0 will-change-transform">
        <Image
          src={HERO_IMAGE}
          alt="Sagando Bungalows - Zanzibar Beach Resort"
          fill
          className="object-cover"
          priority
          loading="eager"
          quality={90}
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/50 via-black/30 to-black/60" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 text-center pt-24">
        <p
          ref={taglineRef}
          className="text-white/80 text-xs tracking-[0.3em] uppercase mb-6 opacity-0"
        >
          Zanzibar&apos;s Hidden Paradise
        </p>

        <h1
          ref={titleRef}
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium text-white mb-6 tracking-tight opacity-0"
        >
          Sagando Bungalows
          <br />
          <span className="italic font-light">Zanzibar</span>
        </h1>

        <p
          ref={descRef}
          className="text-white/80 text-base md:text-lg max-w-xl mx-auto mb-12 leading-relaxed opacity-0"
        >
          Nestled in the village of Michamvi Kae, surrounded by tropical
          gardens, just steps from pristine beaches.
        </p>

        <div
          ref={bookingRef}
          className="bg-white/10 backdrop-blur-md border border-white/20 p-1 max-w-3xl mx-auto opacity-0"
        >
          <div className="flex flex-col md:flex-row">
            <div className="flex-1 p-3 border-b md:border-b-0 md:border-r border-white/10 hover:bg-white/5 transition-colors">
              <label
                htmlFor="check-in"
                className="block text-white/60 text-[10px] tracking-[0.2em] uppercase mb-1"
              >
                Check In
              </label>
              <div className="flex items-center gap-2">
                <Calendar01Icon className="text-white/50" size={14} />
                <input
                  id="check-in"
                  type="date"
                  value={checkIn}
                  min={getTomorrow()}
                  onChange={(e) => handleCheckInChange(e.target.value)}
                  className="bg-transparent text-white text-sm w-full focus:outline-none scheme-dark cursor-pointer"
                />
              </div>
            </div>

            <div className="flex-1 p-3 border-b md:border-b-0 md:border-r border-white/10 hover:bg-white/5 transition-colors">
              <label
                htmlFor="check-out"
                className="block text-white/60 text-[10px] tracking-[0.2em] uppercase mb-1"
              >
                Check Out
              </label>
              <div className="flex items-center gap-2">
                <Calendar01Icon className="text-white/50" size={14} />
                <input
                  id="check-out"
                  type="date"
                  value={checkOut}
                  min={minCheckOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="bg-transparent text-white text-sm w-full focus:outline-none scheme-dark cursor-pointer"
                />
              </div>
            </div>

            <div className="flex-1 p-3 border-b md:border-b-0 md:border-r border-white/10 relative">
              <label
                htmlFor="guests-trigger"
                className="block text-white/60 text-[10px] tracking-[0.2em] uppercase mb-1"
              >
                Guests
              </label>
              <button
                id="guests-trigger"
                type="button"
                onClick={() => setShowGuestPicker(!showGuestPicker)}
                className="flex items-center gap-2 w-full text-left hover:bg-white/5 transition-colors"
              >
                <UserGroupIcon className="text-white/50" size={14} />
                <span className="text-white text-sm flex-1">
                  {guestSummary}
                </span>
                <ArrowDown01Icon
                  className={`text-white/50 transition-transform duration-300 ${showGuestPicker ? 'rotate-180' : ''}`}
                  size={12}
                />
              </button>

              {showGuestPicker && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-card border border-border p-4 z-50 shadow-xl rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm">Adults</span>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setAdults(Math.max(1, adults - 1))}
                        className="w-7 h-7 border border-border flex items-center justify-center hover:bg-secondary transition-colors rounded-sm"
                      >
                        <MinusSignIcon size={12} />
                      </button>
                      <span className="w-5 text-center text-sm">{adults}</span>
                      <button
                        type="button"
                        onClick={() => setAdults(Math.min(6, adults + 1))}
                        className="w-7 h-7 border border-border flex items-center justify-center hover:bg-secondary transition-colors rounded-sm"
                      >
                        <PlusSignIcon size={12} />
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Children</span>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setChildren(Math.max(0, children - 1))}
                        className="w-7 h-7 border border-border flex items-center justify-center hover:bg-secondary transition-colors rounded-sm"
                      >
                        <MinusSignIcon size={12} />
                      </button>
                      <span className="w-5 text-center text-sm">
                        {children}
                      </span>
                      <button
                        type="button"
                        onClick={() => setChildren(Math.min(4, children + 1))}
                        className="w-7 h-7 border border-border flex items-center justify-center hover:bg-secondary transition-colors rounded-sm"
                      >
                        <PlusSignIcon size={12} />
                      </button>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowGuestPicker(false)}
                    className="w-full mt-3 bg-accent text-accent-foreground py-2 text-xs uppercase tracking-wider hover:opacity-90 transition-opacity rounded-sm"
                  >
                    Done
                  </button>
                </div>
              )}
            </div>

            <Link
              ref={bookButtonRef}
              href={getBookingUrl()}
              target="_blank"
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-3 text-xs tracking-widest uppercase font-medium transition-all flex items-center justify-center gap-2 will-change-transform"
            >
              Book Now
              <ArrowRight01Icon size={12} />
            </Link>
          </div>
        </div>

        <p className="mt-3 text-white/50 text-xs">
          Secure booking via Booking.com
        </p>
      </div>

      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-0"
      >
        <span className="text-white/40 text-[9px] tracking-[0.3em] uppercase">
          Scroll
        </span>
        <div className="scroll-line w-px h-8 bg-linear-to-b from-white/40 to-transparent origin-top" />
      </div>
    </section>
  )
}
