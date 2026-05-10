import type { Brand } from '../data/brands'

export function BrandRow({ items }: { items: Brand[] }) {
  return (
    <div className="flex flex-wrap items-center">
      {items.map((b) => (
        <a
          key={b.name}
          href={b.website}
          target="_blank"
          rel="noreferrer"
          className="brand inline-flex items-center"
          aria-label={b.name}
          title={b.name}
        >
          <img
            className="brand__img h-9 w-9"
            src={b.url}
            alt={b.name}
            loading="lazy"
          />
        </a>
      ))}
    </div>
  )
}

