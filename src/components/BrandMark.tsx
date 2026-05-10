import { NavLink } from 'react-router-dom'
import { cx } from '../utils/cx'

type Props = {
  className?: string
  size?: 'sm' | 'md'
}

export function BrandMark({ className, size = 'md' }: Props) {
  const text =
    size === 'sm'
      ? 'text-sm leading-none'
      : 'text-lg leading-none md:text-xl'
  const barW = size === 'sm' ? 'w-3.5' : 'w-[1.15rem]'

  return (
    <NavLink
      to="/"
      className={cx('inline-flex shrink-0 items-center outline-none', className)}
      aria-label="Home"
    >
      <span
        className={cx(
          'flex items-center font-bold tracking-tight text-[color:var(--fg)]',
          text,
        )}
      >
        <span>B</span>
        <span
          className="mx-0.5 flex flex-col justify-center gap-[3px]"
          aria-hidden="true"
        >
          <span
            className={cx('h-0.5 rounded-[1px] bg-[var(--accent)]', barW)}
          />
          <span
            className={cx('h-0.5 rounded-[1px] bg-[color:var(--fg)]', barW)}
          />
          <span
            className={cx('h-0.5 rounded-[1px] bg-[var(--accent)]', barW)}
          />
        </span>
        <span>LAL</span>
      </span>
    </NavLink>
  )
}
