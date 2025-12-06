'use client'

import {
  ArrowRight01Icon,
  Location01Icon,
  Mail01Icon,
  SmartPhone01Icon,
  Tick01Icon,
} from 'hugeicons-react'
import type React from 'react'
import { useState } from 'react'

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        interest: '',
        message: '',
      })
    }, 3000)
  }

  return (
    <section id="contact" className="py-24 md:py-32 bg-secondary">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <p className="inline-block px-3 py-1 text-[10px] tracking-[0.25em] text-accent uppercase mb-5 border border-accent/30 rounded-full">
              Get In Touch
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-foreground mb-8">
              Plan Your <span className="italic text-accent">Visit</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-12 max-w-md text-base md:text-lg">
              Our friendly team at Sagando Bungalows is here to help you book
              your stay, arrange activities, or answer any questions about your
              visit to Zanzibar.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 bg-background rounded-xl border border-border/50">
                <div className="p-3 bg-accent/10 rounded-xl">
                  <SmartPhone01Icon className="text-accent" size={20} />
                </div>
                <div>
                  <p className="text-xs tracking-wide uppercase text-muted-foreground mb-1">
                    Phone
                  </p>
                  <p className="text-foreground font-medium">Via Booking.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-background rounded-xl border border-border/50">
                <div className="p-3 bg-accent/10 rounded-xl">
                  <Mail01Icon className="text-accent" size={20} />
                </div>
                <div>
                  <p className="text-xs tracking-wide uppercase text-muted-foreground mb-1">
                    Website
                  </p>
                  <p className="text-foreground font-medium">
                    www.sagandobungalows.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-background rounded-xl border border-border/50">
                <div className="p-3 bg-accent/10 rounded-xl">
                  <Location01Icon className="text-accent" size={20} />
                </div>
                <div>
                  <p className="text-xs tracking-wide uppercase text-muted-foreground mb-1">
                    Location
                  </p>
                  <p className="text-foreground font-medium">
                    Sunset Beach, Michamvi Kae, Zanzibar
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-background border border-border/50 rounded-2xl p-8 md:p-10">
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                  <Tick01Icon className="text-accent" size={28} />
                </div>
                <h3 className="font-serif text-2xl text-foreground mb-3">
                  Message Sent
                </h3>
                <p className="text-muted-foreground text-sm">
                  We&apos;ll get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-sm text-muted-foreground mb-2"
                    >
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full bg-secondary border border-border/50 rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/20 transition-all"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-sm text-muted-foreground mb-2"
                    >
                      Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full bg-secondary border border-border/50 rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/20 transition-all"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="block text-sm text-muted-foreground mb-2"
                    >
                      Phone
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full bg-secondary border border-border/50 rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/20 transition-all"
                      placeholder="+1 234 567 890"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-interest"
                      className="block text-sm text-muted-foreground mb-2"
                    >
                      Interest
                    </label>
                    <select
                      id="contact-interest"
                      value={formData.interest}
                      onChange={(e) =>
                        setFormData({ ...formData, interest: e.target.value })
                      }
                      className="w-full bg-secondary border border-border/50 rounded-lg px-4 py-3 text-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/20 transition-all appearance-none cursor-pointer"
                    >
                      <option value="">Select an option</option>
                      <option value="booking">Room Booking</option>
                      <option value="experiences">Experiences</option>
                      <option value="events">Private Events</option>
                      <option value="other">Other Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-sm text-muted-foreground mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full bg-secondary border border-border/50 rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/20 transition-all resize-none"
                    placeholder="Tell us about your ideal stay..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-accent text-accent-foreground rounded-lg px-8 py-4 text-sm tracking-wider uppercase font-medium hover:bg-accent/90 transition-all flex items-center justify-center gap-3 mt-4"
                >
                  Send Message
                  <ArrowRight01Icon size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
