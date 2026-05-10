import { FileText, Mail, Moon, Sun } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { BrandMark } from './BrandMark'
import { cx } from '../utils/cx'
import { useTheme } from '../hooks/useTheme'

const navLinkBase =
  'nav-link inline-flex items-center gap-2 px-3 py-1.5 text-[15px] text-[color:var(--fg)]/85 transition'

/**
 * Site navigation meant to sit inside the white `.card` shell (same container as hero),
 * matching https://kenjimmy.xyz/ — not a full-viewport sticky bar.
 */
export function Navbar({ className }: { className?: string }) {
  const { theme, toggle } = useTheme()

  return (
    <header className={cx('w-full bg-transparent', className)}>
      <div className="flex items-center justify-between gap-3 md:gap-6">
        <div className="flex min-w-0 flex-1 items-center gap-3 sm:gap-6 md:gap-8">
          <BrandMark />

          <a
            href="mailto:bilalshaikh.engineer@gmail.com"
            title="bilalshaikh.engineer@gmail.com"
            className="nav-email inline-flex min-w-0 max-w-[42vw] items-center gap-2 truncate rounded px-2 py-1.5 text-[15px] text-[color:var(--muted)] transition sm:max-w-[min(340px,48vw)] md:max-w-none"
          >
            <Mail className="h-4 w-4 shrink-0 opacity-75" aria-hidden />
            <span className="hidden truncate sm:inline">
              bilalshaikh.engineer@gmail.com
            </span>
          </a>

          <button
            type="button"
            onClick={toggle}
            className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-black/10 bg-white/70 text-[color:var(--fg)]/75 transition hover:bg-white"
            aria-label={
              theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'
            }
            title={theme === 'dark' ? 'Day mode' : 'Night mode'}
          >
            {theme === 'dark' ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </button>
        </div>

        <nav className="flex shrink-0 items-center gap-3 md:gap-8">
          <NavLink
            to="/works"
            className={({ isActive }) =>
              cx(navLinkBase, isActive && 'text-[color:var(--fg)]')
            }
          >
            <FileText className="h-4 w-4 opacity-70" aria-hidden />
            Works
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
