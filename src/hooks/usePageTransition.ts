import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'

export function usePageTransition(key: string) {
  const containerRef = useRef<HTMLDivElement | null>(null)

  useLayoutEffect(() => {
    const el = containerRef.current
    if (!el) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0, x: 25 },
        {
          opacity: 1,
          x: 0,
          duration: 0.3,
          ease: 'power1.out',
        },
      )
    }, el)

    return () => ctx.revert()
  }, [key])

  return { containerRef }
}

