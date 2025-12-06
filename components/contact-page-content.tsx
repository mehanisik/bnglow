'use client'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  ArrowRight01Icon,
  Location01Icon,
  Mail01Icon,
  SmartPhone01Icon,
  Tick01Icon,
} from 'hugeicons-react'
import type React from 'react'
import { useEffect, useEffectEvent, useRef, useState } from 'react'

gsap.registerPlugin(ScrollTrigger)

export function ContactPageContent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const headerRef = useRef<HTMLDivElement>(null)
  const contactInfoRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

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

  const animateContactInfo = useEffectEvent(() => {
    const items = contactInfoRef.current?.children
    if (!items) return

    gsap.fromTo(
      items,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: 'power2.out',
        stagger: 0.08,
        scrollTrigger: {
          trigger: contactInfoRef.current,
          start: 'top bottom-=50',
          toggleActions: 'play none none reverse',
        },
      }
    )
  })

  const animateForm = useEffectEvent(() => {
    gsap.fromTo(
      formRef.current,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: formRef.current,
          start: 'top bottom-=50',
          toggleActions: 'play none none reverse',
        },
      }
    )
  })

  // Magnetic hover on submit button
  const handleButtonMove = useEffectEvent((e: MouseEvent) => {
    if (!buttonRef.current) return
    const rect = buttonRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2

    gsap.to(buttonRef.current, {
      x: x * 0.15,
      y: y * 0.15,
      duration: 0.3,
      ease: 'power2.out',
    })
  })

  const handleButtonLeave = useEffectEvent(() => {
    if (!buttonRef.current) return
    gsap.to(buttonRef.current, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: 'elastic.out(1, 0.5)',
    })
  })

  useEffect(() => {
    animateHeader()
    animateContactInfo()
    animateForm()

    const btn = buttonRef.current
    if (btn) {
      btn.addEventListener('mousemove', handleButtonMove)
      btn.addEventListener('mouseleave', handleButtonLeave)
    }

    return () => {
      for (const trigger of ScrollTrigger.getAll()) {
        trigger.kill()
      }
      if (btn) {
        btn.removeEventListener('mousemove', handleButtonMove)
        btn.removeEventListener('mouseleave', handleButtonLeave)
      }
    }
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Animate success state
    gsap.to(formRef.current, {
      scale: 0.98,
      opacity: 0.5,
      duration: 0.2,
      yoyo: true,
      repeat: 1,
      ease: 'power2.inOut',
      onComplete: () => {
        setSubmitted(true)
      },
    })

    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', message: '' })
    }, 3000)
  }

  return (
    <section className="pt-32 sm:pt-36 md:pt-40 pb-16 md:pb-24">
      {/* Header */}
      <div
        ref={headerRef}
        className="mx-auto max-w-3xl px-4 sm:px-6 mb-16 text-center"
      >
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-foreground mb-4 opacity-0">
          Contact
        </h1>
        <p className="text-muted-foreground text-base leading-relaxed opacity-0">
          Questions about your stay? We're here to help.
        </p>
      </div>

      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        {/* Contact Info */}
        <div ref={contactInfoRef} className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="text-center py-6 opacity-0 hover:bg-secondary/50 transition-colors rounded-lg cursor-default">
            <Mail01Icon
              size={20}
              className="mx-auto mb-3 text-muted-foreground"
            />
            <p className="text-sm text-muted-foreground mb-1">Email</p>
            <p className="text-foreground text-sm">info@sagando.com</p>
          </div>
          <div className="text-center py-6 opacity-0 hover:bg-secondary/50 transition-colors rounded-lg cursor-default">
            <SmartPhone01Icon
              size={20}
              className="mx-auto mb-3 text-muted-foreground"
            />
            <p className="text-sm text-muted-foreground mb-1">Phone</p>
            <p className="text-foreground text-sm">+255 777 123 456</p>
          </div>
          <div className="text-center py-6 opacity-0 hover:bg-secondary/50 transition-colors rounded-lg cursor-default">
            <Location01Icon
              size={20}
              className="mx-auto mb-3 text-muted-foreground"
            />
            <p className="text-sm text-muted-foreground mb-1">Location</p>
            <p className="text-foreground text-sm">Michamvi Kae, Zanzibar</p>
          </div>
        </div>

        {/* Form */}
        <div
          ref={formRef}
          className="border border-border p-6 md:p-10 rounded-xl opacity-0 hover:border-accent/30 transition-colors duration-300"
        >
          {submitted ? (
            <div className="text-center py-12">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Tick01Icon className="text-accent" size={20} />
              </div>
              <h3 className="font-serif text-xl text-foreground mb-2">
                Message sent
              </h3>
              <p className="text-sm text-muted-foreground">
                We'll respond within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <label
                  htmlFor="name"
                  className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                    focusedField === 'name' || formData.name
                      ? 'top-2 text-xs text-accent'
                      : 'top-1/2 -translate-y-1/2 text-sm text-muted-foreground'
                  }`}
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full bg-secondary/50 border-0 px-4 pt-6 pb-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 rounded-lg transition-all"
                  value={formData.name}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>
              <div className="relative">
                <label
                  htmlFor="email"
                  className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                    focusedField === 'email' || formData.email
                      ? 'top-2 text-xs text-accent'
                      : 'top-1/2 -translate-y-1/2 text-sm text-muted-foreground'
                  }`}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full bg-secondary/50 border-0 px-4 pt-6 pb-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 rounded-lg transition-all"
                  value={formData.email}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
              <div className="relative">
                <label
                  htmlFor="message"
                  className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                    focusedField === 'message' || formData.message
                      ? 'top-2 text-xs text-accent'
                      : 'top-6 text-sm text-muted-foreground'
                  }`}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  className="w-full bg-secondary/50 border-0 px-4 pt-6 pb-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 resize-none rounded-lg transition-all"
                  value={formData.message}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
              </div>
              <button
                ref={buttonRef}
                type="submit"
                className="group w-full bg-foreground text-background py-3 text-sm hover:bg-foreground/90 transition-colors flex items-center justify-center gap-2 rounded-lg will-change-transform"
              >
                <span>Send Message</span>
                <ArrowRight01Icon
                  size={14}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
