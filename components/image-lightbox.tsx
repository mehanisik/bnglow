'use client'

import gsap from 'gsap'
import {
  ArrowLeft02Icon,
  ArrowRight02Icon,
  Cancel01Icon,
} from 'hugeicons-react'
import { Activity, useEffect, useEffectEvent, useRef, useState } from 'react'
import { Image } from '~/components/image'

interface ImageLightboxProps {
  images: string[]
  initialIndex?: number
  isOpen: boolean
  onClose: () => void
  alt?: string
}

export function ImageLightbox({
  images,
  initialIndex = 0,
  isOpen,
  onClose,
  alt = 'Gallery image',
}: ImageLightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)
  const [isAnimating, setIsAnimating] = useState(false)

  const overlayRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setCurrentIndex(initialIndex)
  }, [initialIndex])

  // Animate entrance/exit
  const animateIn = useEffectEvent(() => {
    if (!(overlayRef.current && contentRef.current)) return

    const tl = gsap.timeline()
    tl.fromTo(
      overlayRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.3, ease: 'power2.out' }
    ).fromTo(
      contentRef.current,
      { scale: 0.9, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.4, ease: 'power3.out' },
      '-=0.1'
    )
  })

  const animateOut = useEffectEvent((callback: () => void) => {
    if (!(overlayRef.current && contentRef.current)) {
      callback()
      return
    }

    gsap.to(contentRef.current, {
      scale: 0.9,
      opacity: 0,
      duration: 0.2,
      ease: 'power2.in',
    })
    gsap.to(overlayRef.current, {
      opacity: 0,
      duration: 0.3,
      ease: 'power2.in',
      onComplete: callback,
    })
  })

  // Image transition animation
  const animateImageChange = useEffectEvent((direction: 'left' | 'right') => {
    if (!imageRef.current || isAnimating) return

    setIsAnimating(true)
    const xOffset = direction === 'right' ? -50 : 50

    gsap.to(imageRef.current, {
      x: xOffset,
      opacity: 0,
      duration: 0.2,
      ease: 'power2.in',
      onComplete: () => {
        setCurrentIndex((prev) => {
          if (direction === 'right') {
            return prev === images.length - 1 ? 0 : prev + 1
          }
          return prev === 0 ? images.length - 1 : prev - 1
        })

        gsap.fromTo(
          imageRef.current,
          { x: -xOffset, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.3,
            ease: 'power2.out',
            onComplete: () => setIsAnimating(false),
          }
        )
      },
    })
  })

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      animateIn()
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const handleClose = () => {
    animateOut(onClose)
  }

  const goToPrevious = () => {
    if (!isAnimating) animateImageChange('left')
  }

  const goToNext = () => {
    if (!isAnimating) animateImageChange('right')
  }

  const handleKeyDown = useEffectEvent((e: KeyboardEvent) => {
    if (!isOpen) return
    if (e.key === 'Escape') handleClose()
    if (e.key === 'ArrowLeft') goToPrevious()
    if (e.key === 'ArrowRight') goToNext()
  })

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <Activity mode={isOpen ? 'visible' : 'hidden'}>
      {isOpen && (
        <div
          ref={overlayRef}
          className="fixed inset-0 z-50 flex items-center justify-center opacity-0"
        >
          <button
            type="button"
            className="absolute inset-0 bg-black/95 backdrop-blur-sm cursor-default"
            onClick={handleClose}
            aria-label="Close lightbox"
          />

          <div
            ref={contentRef}
            className="relative w-full h-full flex items-center justify-center opacity-0"
          >
            <button
              type="button"
              onClick={handleClose}
              className="absolute top-4 right-4 z-10 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
              aria-label="Close"
            >
              <Cancel01Icon size={24} className="text-white" />
            </button>

            <div className="absolute top-4 left-4 z-10 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
              <span className="text-white text-sm font-medium">
                {currentIndex + 1} / {images.length}
              </span>
            </div>

            <button
              type="button"
              onClick={goToPrevious}
              disabled={isAnimating}
              className="absolute left-4 z-10 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors md:left-8 disabled:opacity-50"
              aria-label="Previous image"
            >
              <ArrowLeft02Icon size={24} className="text-white" />
            </button>

            <button
              type="button"
              onClick={goToNext}
              disabled={isAnimating}
              className="absolute right-4 z-10 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors md:right-8 disabled:opacity-50"
              aria-label="Next image"
            >
              <ArrowRight02Icon size={24} className="text-white" />
            </button>

            <div
              ref={imageRef}
              className="relative w-full h-full max-w-6xl max-h-[85vh] mx-4"
            >
              <Image
                src={images[currentIndex]}
                alt={`${alt} ${currentIndex + 1}`}
                fill
                className="object-contain"
                priority
              />
            </div>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2 max-w-[90vw] overflow-x-auto px-4 py-2 bg-black/50 backdrop-blur-sm rounded-full">
              {images.map((image, index) => (
                <button
                  type="button"
                  key={image}
                  onClick={() => {
                    if (index !== currentIndex && !isAnimating) {
                      setIsAnimating(true)
                      gsap.to(imageRef.current, {
                        opacity: 0,
                        duration: 0.2,
                        onComplete: () => {
                          setCurrentIndex(index)
                          gsap.to(imageRef.current, {
                            opacity: 1,
                            duration: 0.3,
                            onComplete: () => setIsAnimating(false),
                          })
                        },
                      })
                    }
                  }}
                  className={`relative w-12 h-12 shrink-0 rounded-lg overflow-hidden transition-all ${
                    index === currentIndex
                      ? 'ring-2 ring-white ring-offset-2 ring-offset-black'
                      : 'opacity-50 hover:opacity-100'
                  }`}
                >
                  <Image
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </Activity>
  )
}

export function useLightbox() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const openLightbox = (index = 0) => {
    setCurrentIndex(index)
    setIsOpen(true)
  }

  const closeLightbox = () => {
    setIsOpen(false)
  }

  return {
    isOpen,
    currentIndex,
    openLightbox,
    closeLightbox,
  }
}
