'use client'

import {
  Cancel01Icon,
  Discount01Icon,
  Location01Icon,
  StarIcon,
  SunCloud01Icon,
} from 'hugeicons-react'
import { useEffect, useState } from 'react'

import { Link } from '~/components/link'

type BannerItem = {
  id: string
  icon: 'discount' | 'star' | 'weather' | 'location'
  label: string
  message: string
  cta?: {
    text: string
    href: string
  }
}

// Configure your rotating announcements here
const BANNER_ITEMS: BannerItem[] = [
  {
    id: 'offer',
    icon: 'discount',
    label: 'Special Offer',
    message: '15% off for stays in June 2025',
    cta: { text: 'Book Now', href: '/rooms' },
  },
  {
    id: 'rating',
    icon: 'star',
    label: 'Highly Rated',
    message: 'Rated 8.9/10 on Booking.com',
    cta: { text: 'See Reviews', href: '#reviews' },
  },
  {
    id: 'weather',
    icon: 'weather',
    label: 'Perfect Weather',
    message: 'Sunny skies expected this week in Zanzibar',
  },
  {
    id: 'location',
    icon: 'location',
    label: 'Prime Location',
    message: 'Beachfront in Michamvi Kae village',
    cta: { text: 'View Map', href: '#location' },
  },
]

// How long each banner shows (in ms)
const ROTATION_INTERVAL = 5000

const iconMap = {
  discount: Discount01Icon,
  star: StarIcon,
  weather: SunCloud01Icon,
  location: Location01Icon,
}

export function TopBanner() {
  const [isVisible, setIsVisible] = useState(true)
  const [isAnimating, setIsAnimating] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  // Entrance animation
  useEffect(() => {
    setIsAnimating(true)
  }, [])

  // Rotate through banners
  useEffect(() => {
    if (BANNER_ITEMS.length <= 1) return

    const interval = setInterval(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % BANNER_ITEMS.length)
        setIsTransitioning(false)
      }, 300)
    }, ROTATION_INTERVAL)

    return () => clearInterval(interval)
  }, [])

  const handleClose = () => {
    setIsAnimating(false)
    setTimeout(() => setIsVisible(false), 300)
  }

  if (!isVisible) return null

  const currentItem = BANNER_ITEMS[currentIndex]
  const IconComponent = iconMap[currentItem.icon]

  return (
    <div
      className={`relative z-50 overflow-hidden transition-all duration-300 ${
        isAnimating
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 -translate-y-full'
      }`}
      style={{ '--banner-height': '40px' } as React.CSSProperties}
    >
      <div className="absolute inset-0 bg-linear-to-r from-[#1a1a1a] via-[#2a2520] to-[#1a1a1a]" />
      <div className="absolute inset-0 backdrop-blur-sm" />

      <div
        className="absolute inset-0 bg-linear-to-r from-transparent via-white/5 to-transparent animate-shimmer"
        style={{ backgroundSize: '200% 100%' }}
      />

      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-accent/50 to-transparent" />

      <div className="relative max-w-7xl mx-auto py-2.5 px-4 md:px-6">
        <div className="flex items-center justify-center gap-3 text-xs md:text-sm">
          <div className="hidden sm:flex items-center justify-center w-6 h-6 rounded-full bg-accent/20 text-accent">
            <IconComponent size={14} />
          </div>

          <div
            className={`transition-all duration-300 ${
              isTransitioning
                ? 'opacity-0 translate-y-2'
                : 'opacity-100 translate-y-0'
            }`}
          >
            <p className="text-white/90 tracking-wide">
              <span className="text-white/60">{currentItem.label}:</span>{' '}
              <span className="font-medium text-white">
                {currentItem.message}
              </span>
            </p>
          </div>

          {currentItem.cta && (
            <>
              <span className="hidden md:block w-px h-4 bg-white/20" />

              <Link
                href={currentItem.cta.href}
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-medium tracking-wide border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] ${
                  isTransitioning ? 'opacity-0' : 'opacity-100'
                }`}
              >
                {currentItem.cta.text}
              </Link>
            </>
          )}

          {/* Progress indicators */}
          {BANNER_ITEMS.length > 1 && (
            <div className="hidden md:flex items-center gap-1 ml-2">
              {BANNER_ITEMS.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    setIsTransitioning(true)
                    setTimeout(() => {
                      setCurrentIndex(index)
                      setIsTransitioning(false)
                    }, 300)
                  }}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-accent w-4'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Go to announcement ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        <button
          type="button"
          onClick={handleClose}
          className="absolute right-3 md:right-4 top-1/2 -translate-y-1/2 p-1 rounded-full text-white/40 hover:text-white hover:bg-white/10 transition-all duration-200"
          aria-label="Close banner"
        >
          <Cancel01Icon size={14} />
        </button>
      </div>
    </div>
  )
}
