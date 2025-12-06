'use client'

import gsap from 'gsap'
import { Cancel01Icon, Menu01Icon } from 'hugeicons-react'
import { usePathname } from 'next/navigation'
import { useEffect, useEffectEvent, useRef, useState } from 'react'
import { Link } from '~/components/link'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'

  const headerRef = useRef<HTMLElement>(null)
  const navLinksRef = useRef<(HTMLAnchorElement | null)[]>([])
  const logoRef = useRef<HTMLAnchorElement>(null)
  const bookButtonRef = useRef<HTMLAnchorElement>(null)
  const mobileMenuRef = useRef<HTMLDivElement>(null)

  const handleScroll = useEffectEvent(() => {
    setIsScrolled(window.scrollY > 50)
  })

  // Magnetic effect on nav links
  const setupMagneticLinks = useEffectEvent(() => {
    navLinksRef.current.forEach((link) => {
      if (!link) return

      const handleMove = (e: MouseEvent) => {
        const rect = link.getBoundingClientRect()
        const x = e.clientX - rect.left - rect.width / 2
        const y = e.clientY - rect.top - rect.height / 2

        gsap.to(link, {
          x: x * 0.2,
          y: y * 0.2,
          duration: 0.3,
          ease: 'power2.out',
        })
      }

      const handleLeave = () => {
        gsap.to(link, {
          x: 0,
          y: 0,
          duration: 0.5,
          ease: 'elastic.out(1, 0.5)',
        })
      }

      link.addEventListener('mousemove', handleMove)
      link.addEventListener('mouseleave', handleLeave)
    })
  })

  // Magnetic effect on book button
  const setupBookButton = useEffectEvent(() => {
    const btn = bookButtonRef.current
    if (!btn) return

    const handleMove = (e: MouseEvent) => {
      const rect = btn.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2

      gsap.to(btn, {
        x: x * 0.15,
        y: y * 0.15,
        duration: 0.3,
        ease: 'power2.out',
      })
    }

    const handleLeave = () => {
      gsap.to(btn, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: 'elastic.out(1, 0.5)',
      })
    }

    btn.addEventListener('mousemove', handleMove)
    btn.addEventListener('mouseleave', handleLeave)
  })

  // Mobile menu animation
  const animateMobileMenu = useEffectEvent((open: boolean) => {
    if (!mobileMenuRef.current) return

    if (open) {
      gsap.fromTo(
        mobileMenuRef.current,
        { height: 0, opacity: 0 },
        { height: 'auto', opacity: 1, duration: 0.4, ease: 'power3.out' }
      )
      const links = mobileMenuRef.current.querySelectorAll('a')
      gsap.fromTo(
        links,
        { x: -20, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.3,
          stagger: 0.05,
          delay: 0.1,
          ease: 'power2.out',
        }
      )
    } else {
      gsap.to(mobileMenuRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: 'power3.in',
      })
    }
  })

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    setupMagneticLinks()
    setupBookButton()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    animateMobileMenu(isMenuOpen)
  }, [isMenuOpen])

  const navItems = [
    { label: 'Bungalows', href: '/rooms' },
    { label: 'Experiences', href: '/experiences' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ]

  const showTransparent = isHome && !isScrolled

  return (
    <header
      ref={headerRef}
      className={`fixed left-0 right-0 z-30 transition-all duration-500 ${
        isScrolled
          ? 'top-0 bg-background/95 backdrop-blur-xl py-4 border-b border-border/50'
          : 'top-[40px] bg-transparent py-6'
      } ${!(isScrolled || isHome) ? 'bg-background/95 backdrop-blur-xl py-4 border-b border-border/50' : ''}`}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between">
          <Link
            ref={logoRef}
            href="/"
            className={`font-serif text-2xl font-medium tracking-widest transition-all duration-300 hover:opacity-80 ${
              showTransparent ? 'text-white' : 'text-foreground'
            }`}
          >
            Sagando
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item, i) => {
              const isActive = pathname === item.href
              const getLinkClass = () => {
                if (showTransparent) {
                  return isActive
                    ? 'text-white'
                    : 'text-white/70 hover:text-white'
                }
                return isActive
                  ? 'text-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              }
              return (
                <Link
                  key={item.label}
                  ref={(el) => {
                    navLinksRef.current[i] = el
                  }}
                  href={item.href}
                  className={`relative px-4 py-2 text-sm tracking-wider uppercase transition-all duration-300 group will-change-transform ${getLinkClass()}`}
                >
                  {item.label}
                  <span
                    className={`absolute bottom-0.5 left-1/2 -translate-x-1/2 h-px transition-all duration-300 ${
                      showTransparent ? 'bg-white' : 'bg-foreground'
                    } ${isActive ? 'w-4' : 'w-0 group-hover:w-4'}`}
                  />
                </Link>
              )
            })}
          </nav>

          <div className="hidden md:flex items-center">
            <Link
              ref={bookButtonRef}
              href="https://www.booking.com/hotel/tz/sagando-hostel.en-gb.html"
              target="_blank"
              className={`relative px-6 py-2.5 text-sm tracking-wider uppercase font-medium transition-all duration-300 overflow-hidden group will-change-transform ${
                showTransparent
                  ? 'text-white border border-white/30 hover:border-white/50'
                  : 'text-primary-foreground bg-primary hover:bg-primary/90'
              }`}
            >
              {showTransparent && (
                <span className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300" />
              )}
              <span className="relative">Book Now</span>
            </Link>
          </div>

          <button
            type="button"
            className={`md:hidden p-2 rounded-lg transition-all duration-300 ${
              showTransparent
                ? 'text-white hover:bg-white/10'
                : 'text-foreground hover:bg-secondary'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <Cancel01Icon size={24} />
            ) : (
              <Menu01Icon size={24} />
            )}
          </button>
        </div>

        <div
          ref={mobileMenuRef}
          className="md:hidden overflow-hidden"
          style={{ height: 0, opacity: 0 }}
        >
          <nav
            className={`mt-4 pb-4 flex flex-col gap-1 border-t pt-4 ${
              showTransparent ? 'border-white/20' : 'border-border'
            }`}
          >
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`px-4 py-3 rounded-lg text-sm tracking-wider uppercase transition-all duration-300 ${
                  showTransparent
                    ? 'text-white/80 hover:text-white hover:bg-white/10'
                    : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="https://www.booking.com/hotel/tz/sagando-hostel.en-gb.html"
              target="_blank"
              className={`mt-2 px-4 py-3 text-sm tracking-wider uppercase text-center font-medium transition-all duration-300 ${
                showTransparent
                  ? 'bg-white/10 text-white border border-white/30 hover:bg-white/20'
                  : 'bg-primary text-primary-foreground hover:bg-primary/90'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Book Now
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
