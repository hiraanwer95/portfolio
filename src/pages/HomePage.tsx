import { useLayoutEffect, useMemo, useRef } from 'react'
import gsap from 'gsap'
import { Back, Elastic, Expo } from 'gsap/all'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Building2, Gamepad2, Sparkles, TrendingUp, Users } from 'lucide-react'
import { FaLinkedinIn, FaMedium, FaWhatsapp } from 'react-icons/fa6'
import { Navbar } from '../components/Navbar'
import { PortfolioCard } from '../components/PortfolioCard'
import { portfolioWorks } from '../data/portfolios'

const SKILLS_GIF_URL =
  'https://cdn.dribbble.com/userupload/27937652/file/original-44fb1d41e97e94615107a0b9cfdde1bb.gif'

function Letters({ text }: { text: string }) {
  return (
    <>
      {text.split('').map((ch, idx) => (
        <span key={`${ch}-${idx}`} className="letter inline-block">
          {ch === ' ' ? '\u00A0' : ch}
        </span>
      ))}
    </>
  )
}

export function HomePage() {
  const rootRef = useRef<HTMLDivElement | null>(null)
  const talkRef = useRef<HTMLAnchorElement | null>(null)
  const talkPulseRef = useRef<HTMLDivElement | null>(null)
  const skillsPinRef = useRef<HTMLDivElement | null>(null)
  const featuredWorks = useMemo(() => portfolioWorks, [])

  useLayoutEffect(() => {
    const root = rootRef.current
    if (!root) return

    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger)
      const tl = gsap.timeline()
      tl.to(
        '.callout',
        {
          scale: 1,
          duration: 1,
          ease: 'elastic.out(1, 0.3)',
        },
        0.5,
      )
        .to('.letter', { fontSize: '3rem', duration: 0.05, stagger: 0.1 })
        .to('.des', { opacity: 1, y: 0, duration: 0.7 }, 4)
        .to(
          '.message',
          { opacity: 1, y: 0, duration: 1, ease: Back.easeOut.config(1.7) },
          '-=.5',
        )
        .to('.talk-wrapper', { opacity: 1 })
        .to(
          talkRef.current,
          {
            duration: 0.4,
            scale: 0.8,
            rotation: 16,
            ease: Back.easeOut.config(1.7),
          },
          5,
        )
        .to(
          talkPulseRef.current,
          {
            duration: 0.5,
            scale: 0.9,
            opacity: 1,
          },
          '-=0.6',
        )
        .to(talkRef.current, {
          duration: 1.2,
          scale: 1,
          rotation: '-=16',
          ease: Elastic.easeOut.config(2.5, 0.5),
        })
        .to(
          talkPulseRef.current,
          {
            duration: 1.1,
            scale: 3,
            opacity: 0,
            ease: Expo.easeOut,
          },
          '-=1.2',
        )
    }, root)

    return () => ctx.revert()
  }, [])

  useLayoutEffect(() => {
    const root = rootRef.current
    const pinEl = skillsPinRef.current
    if (!root || !pinEl) return

    const prefersReduced =
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger)

      if (prefersReduced) {
        gsap.set('.skills-data-1', { autoAlpha: 1, y: 0 })
        gsap.set('.skills-data-2', { autoAlpha: 1, y: 0 })
        gsap.set('.skills-cta', { autoAlpha: 1, y: 0 })
        return
      }

      gsap.set('.skills-data-1', { autoAlpha: 0, y: 28 })
      gsap.set('.skills-data-2', { autoAlpha: 0, y: 28 })
      gsap.set('.skills-cta', { autoAlpha: 0, y: 20 })

      /**
       * Pin the block: scroll scrubs a short timeline (backend → frontend → CTA).
       * Keep `end` modest so ~1–2 wheel gestures reveals content instead of a long empty dwell.
       */
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: pinEl,
          start: 'top top',
          end: '+=560',
          pin: true,
          pinReparent: true,
          pinSpacing: true,
          scrub: 0.55,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      })

      tl.fromTo(
        '.skills-data-1',
        { autoAlpha: 0, y: 28 },
        { autoAlpha: 1, y: 0, duration: 0.42, ease: 'none' },
        0,
      )
        .fromTo(
          '.skills-data-2',
          { autoAlpha: 0, y: 28 },
          { autoAlpha: 1, y: 0, duration: 0.42, ease: 'none' },
          0.34,
        )
        .fromTo(
          '.skills-cta',
          { autoAlpha: 0, y: 20 },
          { autoAlpha: 1, y: 0, duration: 0.42, ease: 'none' },
          0.68,
        )
    }, root)

    requestAnimationFrame(() => ScrollTrigger.refresh())

    return () => ctx.revert()
  }, [])

  return (
    <div ref={rootRef} className="font-sans">
      <section className="card px-8 py-10 md:px-12 md:py-14">
        <div className="-mx-8 -mt-10 mb-10 px-8 pb-8 pt-2 md:-mx-12 md:-mt-14 md:px-12 md:pb-10 md:pt-3">
          <Navbar />
        </div>

        <div className="grid items-center gap-10 md:grid-cols-[44px_1.05fr_0.9fr]">
          <div className="hidden flex-col gap-3 pt-28 md:flex">
            <a
              href="https://www.linkedin.com/in/mohammed-bilal-shaikh-76a921236/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 w-9 items-center justify-center border border-black/10 bg-white text-kjColorDark shadow-sm transition hover:shadow"
              aria-label="LinkedIn — Mohammed Bilal Shaikh"
            >
              <FaLinkedinIn className="h-4 w-4" />
            </a>
            <a
              href="https://wa.me/923108886685"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 w-9 items-center justify-center border border-black/10 bg-white text-kjColorDark shadow-sm transition hover:shadow"
              aria-label="WhatsApp +92 310 8886685"
            >
              <FaWhatsapp className="h-4 w-4" />
            </a>
            <a
              href="https://medium.com/@bilalshaikh.engineer"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 w-9 items-center justify-center border border-black/10 bg-white text-kjColorDark shadow-sm transition hover:shadow"
              aria-label="Medium blog"
            >
              <FaMedium className="h-4 w-4" />
            </a>
          </div>

          <div className="relative">
            <div className="callout top-right inline-flex items-center gap-2 rounded bg-kjColorDark px-3 py-2 text-xs text-white">
              It&apos;s me
            </div>

            <h1
              className="mt-6 text-5xl font-bold leading-[0.95] tracking-tight text-kjColorDark md:text-6xl"
            >
              <Letters text="Muhammad" />
              <br />
              <Letters text="Bilal" />
            </h1>

            <div className="mt-5 text-xs font-medium tracking-[0.22em] text-kjColorGray">
              SOFTWARE ENGINEER
            </div>

            <p className="des mt-5 max-w-sm text-sm leading-6 text-kjColorGray">
            Mobile & Web Application Developer with 8+ years of experience building scalable, user-focused, and business-driven digital solutions. I specialize in transforming ideas into high-quality web and mobile applications using technologies like React, Flutter, Java Spring Boot, Laravel, and .NET.
            </p>

            <div className="talk-wrapper mt-10">
              <div
                ref={talkPulseRef}
                className="talk-pulse pointer-events-none"
              />
              <a
                ref={talkRef}
                href="https://wa.me/923108886685"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className="talk inline-flex items-center justify-center text-[13px] font-semibold leading-tight text-white shadow-md transition hover:brightness-110"
              >
                let&apos;s
                <br />
                talk
              </a>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <img
              className="h-72 w-72 rounded-full bg-white object-cover object-top md:h-80 md:w-80"
              src="/profile.png"
              alt="Muhammad Bilal"
            />
          </div>
        </div>

        <div ref={skillsPinRef} className="mt-16">
          <div className="services">
            <div className="mb-8 text-left">
              <h2 className="text-3xl font-bold tracking-tight text-kjColorDark md:text-[2rem]">
                My Top Skills
              </h2>
              <p className="mt-2 text-sm font-medium text-kjColorGray">
                What I Do
              </p>
              <div className="mt-4 h-1 w-20 bg-kjColorPrime" />
            </div>

            <div className="rounded-2xl bg-[#f5f5f5] px-6 py-8 md:px-10 md:py-10">
              <div className="grid gap-6 md:grid-cols-[1fr_1.05fr] md:items-stretch md:gap-8 lg:gap-10">
                <div className="mx-auto flex w-full max-w-lg flex-col justify-center text-center md:h-full md:text-left">
                  <div className="skills-data-1">
                    <div className="text-[10px] font-bold uppercase tracking-[0.14em] text-kjColorDark md:text-xs">
                      BACKEND
                    </div>
                    <p className="mt-2 text-[11px] font-normal leading-[1.55] text-kjColorDark/90 md:text-xs md:leading-relaxed">
                      I build secure, scalable, and high-performance backend systems that power modern web and mobile applications. From APIs to complex business logic, I focus on reliability, maintainability, and clean architecture.
                      Technologies & Tools I Use:
                      Java Spring Boot,
                      Node.js,
                      PHP Laravel,
                      Firebase,
                      MySQL, MongoDB, and PostgreSQL.
                    </p>
                  </div>

                  <div className="skills-data-2 mt-6 md:mt-7">
                    <div className="text-[10px] font-bold uppercase tracking-[0.14em] text-kjColorDark md:text-xs">
                      FRONTEND
                    </div>
                    <p className="mt-2 text-[11px] font-normal leading-[1.55] text-kjColorDark/90 md:text-xs md:leading-relaxed">
                      I create modern, responsive, and user-friendly interfaces that deliver seamless experiences across web and mobile platforms. My focus is on performance, usability, clean design implementation, and scalable frontend architecture.
                      Technologies & Tools I Use:
                      React.js,
                      JavaScript / TypeScript,
                      Flutter (Cross-Platform Mobile Apps),
                      HTML5 / CSS3,
                      Bootstrap / Tailwind CSS,
                      REST API Integration,
                      Responsive UI/UX Development
                    </p>
                  </div>

                  <div className="skills-cta mt-6 flex justify-center md:justify-start">
                    <a
                      href="/works"
                      className="relative inline-block px-1 py-2 text-xs font-bold uppercase tracking-[0.14em] text-kjColorDark transition hover:opacity-80"
                    >
                      <span
                        className="pointer-events-none absolute left-0 top-1/2 z-0 h-24 w-24 -translate-x-2 -translate-y-1/2 rounded-full bg-[#fce8ec]"
                        aria-hidden
                      />
                      <span className="relative z-10">SEE MY WORKS</span>
                    </a>
                  </div>
                </div>

                <div className="relative mx-auto flex min-h-[260px] w-full max-w-none flex-col justify-center overflow-hidden rounded-2xl bg-[#B2EBF2] sm:min-h-[300px] md:h-full md:min-h-[340px]">
                  <p className="sr-only">Animated illustration: developer at a laptop</p>
                  <img
                    src={SKILLS_GIF_URL}
                    alt=""
                    className="w-full flex-1 object-contain object-center select-none md:min-h-[300px]"
                    width={520}
                    height={390}
                    loading="lazy"
                    decoding="async"
                    onLoad={() =>
                      requestAnimationFrame(() => ScrollTrigger.refresh())
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-16 w-full max-w-[640px] md:max-w-[680px]">
          <div className="rounded-xl bg-[#f5f5f5] p-6 shadow-[0_8px_30px_rgba(0,0,0,0.08)] md:p-8 md:py-9 lg:px-10 lg:py-10">
            <div className="grid gap-8 md:grid-cols-[minmax(0,260px)_1fr] md:items-start md:gap-10 lg:gap-12">
              <div className="mx-auto w-full max-w-[260px] md:mx-0">
                <img
                  className="aspect-[3/4] w-full rounded-lg bg-white object-cover object-center shadow-sm"
                  src="/readme-portrait.png"
                  alt="Muhammad Bilal"
                  width={260}
                  height={347}
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <ul className="space-y-3.5 text-left text-sm leading-snug text-kjColorGray">
                <li className="flex gap-3">
                  <Building2
                    className="mt-0.5 h-[18px] w-[18px] shrink-0 text-kjColorGray"
                    aria-hidden
                  />
                  <span>
                    <span className="font-semibold text-kjColorDark">Building</span>{' '}
                    impactful mobile & backend products with Flutter, native stacks,
                    and solid APIs.
                  </span>
                </li>
                <li className="flex gap-3">
                  <TrendingUp
                    className="mt-0.5 h-[18px] w-[18px] shrink-0 text-kjColorGray"
                    aria-hidden
                  />
                  <span>
                    <span className="font-semibold text-kjColorDark">Scaling</span>{' '}
                    reliable delivery with disciplined engineering and clean architecture.
                  </span>
                </li>
                <li className="flex gap-3">
                  <Sparkles
                    className="mt-0.5 h-[18px] w-[18px] shrink-0 text-kjColorGray"
                    aria-hidden
                  />
                  <span>
                    <span className="font-semibold text-kjColorDark">Craft</span>{' '}
                    polished UX and reliable engineering across the full stack.
                  </span>
                </li>
                <li className="flex gap-3">
                  <Gamepad2
                    className="mt-0.5 h-[18px] w-[18px] shrink-0 text-kjColorGray"
                    aria-hidden
                  />
                  <span>
                    <span className="font-semibold text-kjColorDark">
                      Play &amp; unwind
                    </span>{' '}
                    — chess, football, and exploring new tools when off the clock.
                  </span>
                </li>
                <li className="flex gap-3">
                  <Users
                    className="mt-0.5 h-[18px] w-[18px] shrink-0 text-kjColorGray"
                    aria-hidden
                  />
                  <span>
                    <span className="font-semibold text-kjColorDark">Fun fact:</span>{' '}
                    I’m always up for a good conversation about product &amp; code 🧐
                  </span>
                </li>
              </ul>
            </div>

            <div className="mt-10 md:mt-14">
              <h2 className="text-left text-xl font-bold uppercase tracking-wide text-kjColorDark md:text-2xl">
                README
              </h2>
              <div className="mt-3 h-1 w-20 bg-kjColorPrime md:w-24" aria-hidden />
              <div className="mt-6 space-y-4 text-left text-sm leading-[1.65] text-kjColorGray md:text-[15px] md:leading-7">
                <p>
                  I&apos;m a Mobile &amp; Web Application Developer with 8+ years of
                  experience building scalable and business-focused software solutions.
                  I&apos;ve worked with technologies like Java (Spring Boot), React, Laravel,
                  Flutter, and .NET across both web and mobile platforms.
                </p>
                <p>
                  I help businesses turn ideas into real products &mdash; whether it&apos;s
                  a business website, mobile app, or eCommerce platform. My focus is on clean
                  development, problem-solving, and delivering reliable solutions that support
                  business growth.
                </p>
                <p>
                  I value clear communication, quality code, and smooth project delivery from
                  development to deployment.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-kjColorDark">
              My Works
            </h2>
            <p className="mt-2 text-sm text-kjColorGray">
              few of my past and present projects
            </p>
            <div className="mx-auto mt-4 h-1 w-24 bg-kjColorPrime" />
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {featuredWorks.map((w) => (
              <PortfolioCard key={w.name} item={w} />
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <a href="/works" className="btn-primary">
              View all works
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

