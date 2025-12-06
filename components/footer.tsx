'use client'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  ArrowRight01Icon,
  Facebook02Icon,
  InstagramIcon,
  Mail01Icon,
} from 'hugeicons-react'
import { useEffect, useEffectEvent, useRef } from 'react'
import { Link } from '~/components/link'

gsap.registerPlugin(ScrollTrigger)

export function Footer() {
  const footerRef = useRef<HTMLElement>(null)
  const logoRef = useRef<HTMLAnchorElement>(null)
  const descRef = useRef<HTMLParagraphElement>(null)
  const socialsRef = useRef<HTMLDivElement>(null)
  const columnsRef = useRef<HTMLDivElement>(null)
  const bottomRef = useRef<HTMLDivElement>(null)

  const animateFooter = useEffectEvent(() => {
    // Logo and description
    gsap.fromTo(
      [logoRef.current, descRef.current, socialsRef.current],
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.1,
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top bottom-=100',
          toggleActions: 'play none none reverse',
        },
      }
    )

    // Columns
    const columns = columnsRef.current?.children
    if (columns) {
      gsap.fromTo(
        columns,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: 'power3.out',
          stagger: 0.15,
          scrollTrigger: {
            trigger: columnsRef.current,
            start: 'top bottom-=50',
            toggleActions: 'play none none reverse',
          },
        }
      )
    }

    // Bottom bar
    gsap.fromTo(
      bottomRef.current,
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: bottomRef.current,
          start: 'top bottom',
          toggleActions: 'play none none reverse',
        },
      }
    )
  })

  useEffect(() => {
    animateFooter()
    return () => {
      for (const trigger of ScrollTrigger.getAll()) {
        trigger.kill()
      }
    }
  }, [])

  return (
    <footer
      ref={footerRef}
      className="py-16 md:py-20 bg-foreground text-background"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <Link
              ref={logoRef}
              href="/"
              className="font-serif text-3xl font-medium tracking-widest mb-6 block text-background opacity-0"
            >
              SAGANDO
            </Link>
            <p
              ref={descRef}
              className="text-background/60 leading-relaxed max-w-md mb-8 opacity-0"
            >
              Family-run bungalows in Michamvi Kae. Traditional Makuti-roofed
              accommodations nestled in a tropical garden, just 200m from the
              beach.
            </p>
            <div ref={socialsRef} className="flex gap-3 opacity-0">
              <Link
                href="#"
                className="group p-3 bg-background/10 hover:bg-background/20 rounded-lg transition-all duration-300"
                aria-label="Instagram"
              >
                <InstagramIcon
                  size={18}
                  className="text-background transition-transform group-hover:scale-110"
                />
              </Link>
              <Link
                href="#"
                className="group p-3 bg-background/10 hover:bg-background/20 rounded-lg transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook02Icon
                  size={18}
                  className="text-background transition-transform group-hover:scale-110"
                />
              </Link>
              <Link
                href="mailto:reservations@sagando.com"
                className="group p-3 bg-background/10 hover:bg-background/20 rounded-lg transition-all duration-300"
                aria-label="Email"
              >
                <Mail01Icon
                  size={18}
                  className="text-background transition-transform group-hover:scale-110"
                />
              </Link>
            </div>
          </div>

          <div ref={columnsRef} className="contents">
            <div className="opacity-0">
              <p className="text-xs tracking-[0.2em] text-background/40 uppercase mb-5">
                Explore
              </p>
              <nav className="flex flex-col gap-3">
                <Link
                  href="/rooms"
                  className="text-background/70 hover:text-background transition-colors duration-200 flex items-center gap-2 group"
                >
                  Accommodations
                  <ArrowRight01Icon
                    size={14}
                    className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
                  />
                </Link>
                <Link
                  href="/experiences"
                  className="text-background/70 hover:text-background transition-colors duration-200 flex items-center gap-2 group"
                >
                  Experiences
                  <ArrowRight01Icon
                    size={14}
                    className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
                  />
                </Link>
                <Link
                  href="/about"
                  className="text-background/70 hover:text-background transition-colors duration-200 flex items-center gap-2 group"
                >
                  About
                  <ArrowRight01Icon
                    size={14}
                    className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
                  />
                </Link>
                <Link
                  href="/contact"
                  className="text-background/70 hover:text-background transition-colors duration-200 flex items-center gap-2 group"
                >
                  Contact
                  <ArrowRight01Icon
                    size={14}
                    className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
                  />
                </Link>
              </nav>
            </div>

            <div className="opacity-0">
              <p className="text-xs tracking-[0.2em] text-background/40 uppercase mb-5">
                Contact
              </p>
              <div className="space-y-3 text-background/70">
                <p>Visit sagandobungalows.com</p>
                <p>Book via Booking.com</p>
                <p className="pt-2">
                  Sagando Bungalows
                  <br />
                  Michamvi Kae
                  <br />
                  Zanzibar, Tanzania
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          ref={bottomRef}
          className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-background/10 opacity-0"
        >
          <p className="text-sm text-background/40">
            © 2025 Sagando Bungalows. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link
              href="#"
              className="text-sm text-background/40 hover:text-background/70 transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-sm text-background/40 hover:text-background/70 transition-colors duration-200"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
