import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { rooms } from '~/lib/data'
import { RoomPageClient } from './room-page-client'

export async function generateStaticParams() {
  return rooms.map((room) => ({ slug: room.slug }))
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const params = await props.params
  const room = rooms.find((r) => r.slug === params.slug)

  if (!room) {
    return {
      title: 'Room Not Found',
      description: 'The requested room could not be found.',
    }
  }

  return {
    title: room.name,
    description: `${room.description} Book your stay at Sagando Hostel in Zanzibar starting from $${room.price}/night.`,
    keywords: [
      room.name,
      'Sagando Hostel room',
      'Zanzibar accommodation',
      `${room.guests} guests room Zanzibar`,
      ...room.features.slice(0, 5),
    ],
    openGraph: {
      title: `${room.name} | Sagando Hostel`,
      description: room.description,
      url: `https://sagandohostel.com/rooms/${room.slug}`,
      images: [
        {
          url: room.image,
          width: 1024,
          height: 768,
          alt: room.name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${room.name} | Sagando Hostel`,
      description: room.description,
      images: [room.image],
    },
    alternates: {
      canonical: `https://sagandohostel.com/rooms/${room.slug}`,
    },
  }
}

export default async function RoomPage(props: {
  params: Promise<{ slug: string }>
}) {
  const params = await props.params
  const room = rooms.find((r) => r.slug === params.slug)

  if (!room) notFound()

  return <RoomPageClient slug={params.slug} />
}
