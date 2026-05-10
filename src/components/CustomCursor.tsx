import { useEffect } from 'react'
import gsap from 'gsap'

export function CustomCursor() {
  useEffect(() => {
    const big = document.getElementById('cursor-big')
    const small = document.getElementById('cursor-small')
    if (!big || !small) return

    const links = Array.from(document.getElementsByTagName('a'))
    const withHover = links

    const onMove = (e: MouseEvent) => {
      ;(small as HTMLElement).style.opacity = '1'
      gsap.to(big, { duration: 0.4, x: e.clientX - 18, y: e.clientY - 18 })
      gsap.to(small, { duration: 0.1, x: e.clientX - 4, y: e.clientY - 4 })
    }

    const onHover = () => gsap.to(big, { duration: 0.3, scale: 3 })
    const onOut = () => gsap.to(big, { duration: 0.3, scale: 1 })

    const onEnter = () => {
      ;(big as HTMLElement).style.opacity = '1'
      ;(small as HTMLElement).style.opacity = '1'
    }
    const onLeave = () => {
      ;(big as HTMLElement).style.opacity = '0'
      ;(small as HTMLElement).style.opacity = '0'
    }

    document.addEventListener('mousemove', onMove)
    document.addEventListener('mousedown', onHover)
    document.addEventListener('mouseup', onOut)
    document.addEventListener('mouseenter', onEnter)
    document.addEventListener('mouseleave', onLeave)
    withHover.forEach((el) => {
      el.addEventListener('mouseover', onHover)
      el.addEventListener('mouseout', onOut)
    })

    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mousedown', onHover)
      document.removeEventListener('mouseup', onOut)
      document.removeEventListener('mouseenter', onEnter)
      document.removeEventListener('mouseleave', onLeave)
      withHover.forEach((el) => {
        el.removeEventListener('mouseover', onHover)
        el.removeEventListener('mouseout', onOut)
      })
    }
  }, [])

  return (
    <>
      <div
        id="cursor-big"
        className="custom-cursor__ball custom-cursor__ball--big"
      />
      <div
        id="cursor-small"
        className="custom-cursor__ball custom-cursor__ball--small"
      />
    </>
  )
}

