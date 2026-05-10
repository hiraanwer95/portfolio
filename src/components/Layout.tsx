import type { PropsWithChildren } from 'react'
import { NavLink } from 'react-router-dom'
import { BrandMark } from './BrandMark'

export function Layout({ children }: PropsWithChildren) {
  return (
    <div className="min-h-dvh">
      <main className="container-shell pb-20 pt-10">{children}</main>
      <footer className="mt-10 text-sm">
        <div className="container-shell">
          <div className="flex flex-col gap-4 border-t border-black/10 py-6 sm:flex-row sm:items-center sm:justify-between">
            <BrandMark size="sm" />

            <div className="flex items-center justify-center gap-6">
              <NavLink to="/works" className="nav-link px-2 py-1 text-xs font-semibold tracking-[0.18em]">
                WORKS
              </NavLink>
            </div>

            <div className="text-center text-xs text-kjColorGray sm:text-right">
              © {new Date().getFullYear()} BILAL. ALL RIGHTS RESERVED
            </div>
          </div>
        </div>

        <div className="footer-strip" aria-hidden="true" />
      </footer>
    </div>
  )
}

