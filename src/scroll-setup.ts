/**
 * GSAP ScrollTrigger only — native document scrolling.
 * Lenis + ScrollTrigger pin/scrub together caused blank screens and progress jumps.
 */
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

window.addEventListener('resize', () => {
  ScrollTrigger.refresh()
})
