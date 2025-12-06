'use client'

import {
  ArrowLeft01Icon,
  ArrowRight01Icon,
  Bathtub01Icon,
  BedDoubleIcon,
  RulerIcon,
  Tick01Icon,
  UserGroupIcon,
} from 'hugeicons-react'
import { notFound } from 'next/navigation'
import { Footer } from '~/components/footer'
import { Header } from '~/components/header'
import { Image } from '~/components/image'
import { ImageLightbox, useLightbox } from '~/components/image-lightbox'
import { Link } from '~/components/link'
import { rooms } from '~/lib/data'

interface RoomPageClientProps {
  slug: string
}

export function RoomPageClient({ slug }: RoomPageClientProps) {
  const room = rooms.find((r) => r.slug === slug)
  const { isOpen, currentIndex, openLightbox, closeLightbox } = useLightbox()

  if (!room) notFound()

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="pt-32 sm:pt-36 md:pt-40 pb-16 md:pb-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          {/* Breadcrumb */}
          <Link
            href="/rooms"
            className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft01Icon size={14} /> Back to Rooms
          </Link>

          {/* Header */}
          <div className="mb-12">
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-4">
              {room.name}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <UserGroupIcon size={16} /> {room.guests} Guests
              </span>
              <span className="flex items-center gap-2">
                <RulerIcon size={16} /> {room.size} m²
              </span>
              <span className="flex items-center gap-2">
                <BedDoubleIcon size={16} /> {room.beds}
              </span>
              <span className="flex items-center gap-2">
                <Bathtub01Icon size={16} /> {room.baths} Bath
              </span>
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-4 gap-2 mb-16">
            <button
              type="button"
              onClick={() => openLightbox(0)}
              className="col-span-2 row-span-2 relative aspect-square rounded-lg overflow-hidden group cursor-pointer"
            >
              <Image
                src={room.gallery[0]}
                alt={room.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                priority
              />
            </button>
            {room.gallery.slice(1, 5).map((photo, index) => (
              <button
                type="button"
                key={photo}
                onClick={() => openLightbox(index + 1)}
                className="relative aspect-square rounded-lg overflow-hidden group cursor-pointer"
              >
                <Image
                  src={photo}
                  alt={`${room.name} ${index + 2}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {index === 3 && room.gallery.length > 5 && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <span className="text-white text-sm font-medium">
                      +{room.gallery.length - 5} more
                    </span>
                  </div>
                )}
              </button>
            ))}
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Left - Description */}
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="text-lg font-medium text-foreground mb-4">
                  About this room
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {room.longDescription}
                </p>
              </div>

              <div>
                <h2 className="text-lg font-medium text-foreground mb-6">
                  Amenities
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  {room.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3 text-muted-foreground"
                    >
                      <Tick01Icon size={14} className="text-accent" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right - Booking Card */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 border border-border p-6 rounded-xl">
                <div className="mb-6">
                  <span className="text-3xl font-serif text-foreground">
                    ${room.price}
                  </span>
                  <span className="text-muted-foreground text-sm">
                    {' '}
                    / night
                  </span>
                </div>

                <div className="space-y-4 mb-6 text-sm border-t border-border pt-6">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Guests</span>
                    <span>{room.guests}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Size</span>
                    <span>{room.size} m²</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Bed</span>
                    <span className="text-right text-xs">{room.beds}</span>
                  </div>
                </div>

                <Link
                  href="https://www.booking.com/hotel/tz/sagando-hostel.en-gb.html"
                  target="_blank"
                  className="flex items-center justify-center w-full bg-foreground text-background py-3 text-sm hover:bg-foreground/90 transition-colors rounded-lg"
                >
                  Book on Booking.com
                  <ArrowRight01Icon className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ImageLightbox
        images={room.gallery}
        initialIndex={currentIndex}
        isOpen={isOpen}
        onClose={closeLightbox}
        alt={room.name}
      />

      <Footer />
    </main>
  )
}
