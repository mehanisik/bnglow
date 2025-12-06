'use client'

import dynamic from 'next/dynamic'

const GSAP = dynamic(() => import('./index').then((m) => m.GSAP), {
  ssr: false,
})

const ScrollTrigger = dynamic(
  () => import('../gsap/scroll-trigger').then((m) => m.ScrollTrigger),
  { ssr: false }
)

export function GSAPRuntime() {
  return (
    <>
      <GSAP />
      <ScrollTrigger />
    </>
  )
}
