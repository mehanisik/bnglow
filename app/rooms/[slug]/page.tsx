import { notFound } from 'next/navigation'
import { rooms } from '~/lib/data'
import { RoomPageClient } from './room-page-client'

export async function generateStaticParams() {
  return rooms.map((room) => ({ slug: room.slug }))
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>
}) {
  const params = await props.params
  const room = rooms.find((r) => r.slug === params.slug)

  if (!room) {
    return { title: 'Room Not Found' }
  }

  return {
    title: `${room.name} | Sagando Bungalows Zanzibar`,
    description: room.description,
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
