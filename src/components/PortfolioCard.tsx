import type { PortfolioItem } from '../data/portfolios'

export function PortfolioCard({ item }: { item: PortfolioItem }) {
  return (
    <div className="pf-card rounded-lg border border-black/10 bg-white/80 text-kjColorDark transition hover:shadow-md">
      <a
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block p-6 pb-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-kjColorPrime"
      >
        <div className="text-base font-semibold leading-snug">{item.name}</div>
        {item.techUsed ? (
          <div className="mt-1 text-xs leading-relaxed text-kjColorGray">{item.techUsed}</div>
        ) : null}
        <div className="mt-4 overflow-hidden rounded-md bg-kjColorLight">
          <img
            src={item.imgUrl}
            alt=""
            className="h-44 w-full object-cover object-center"
            loading="lazy"
            decoding="async"
          />
        </div>
      </a>
      {item.extraLinks && item.extraLinks.length > 0 ? (
        <div className="flex flex-wrap gap-x-4 gap-y-1 border-t border-black/[0.06] px-6 py-3 text-xs">
          {item.extraLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-kjColorSecondary underline decoration-black/20 underline-offset-[3px] transition hover:text-kjColorDark"
            >
              {l.label}
            </a>
          ))}
        </div>
      ) : null}
    </div>
  )
}
