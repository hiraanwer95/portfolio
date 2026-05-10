import { Navbar } from '../components/Navbar'
import { BrandRow } from '../components/BrandRow'
import { PortfolioCard } from '../components/PortfolioCard'
import { portfolioWorks } from '../data/portfolios'
import { backStack, frontStack, othersStack } from '../data/brands'

export function WorksPage() {
  return (
    <div className="space-y-10 font-sans">
      <section className="card p-8 md:p-10">
        <div className="-mx-8 -mt-8 mb-8 px-8 pb-6 pt-2 md:-mx-10 md:-mt-10 md:px-10 md:pb-8 md:pt-3">
          <Navbar />
        </div>

        <h1 className="text-2xl font-bold tracking-tight text-kjColorDark">
          My Works
        </h1>
        <p className="mt-2 text-sm text-kjColorGray">
          Mobile apps, web platforms, and CRM dashboards — links open in a new tab.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {portfolioWorks.map((w) => (
            <PortfolioCard key={w.name} item={w} />
          ))}
        </div>
      </section>

      <section className="card p-8 md:p-10">
        <h2 className="text-2xl font-bold tracking-tight text-kjColorDark">
          Tech stack
        </h2>
        <div className="mt-4 h-1 w-20 bg-kjColorPrime" />
        <p className="mt-4 text-sm text-kjColorGray">
          Frameworks and tools I use for apps, APIs, and shipping production work.
        </p>

        <div className="mt-8 space-y-6">
          <div className="rounded-xl bg-[#f2f2f2] px-6 py-6 md:px-8 md:py-7">
            <h3 className="text-sm font-semibold text-kjColorDark">
              Frontend &amp; mobile
            </h3>
            <p className="mt-2 text-sm italic leading-relaxed text-kjColorGray">
              Technologies for building client-side and cross-platform experiences.
            </p>
            <div className="mt-4">
              <BrandRow items={frontStack} />
            </div>
          </div>

          <div className="rounded-xl bg-[#f2f2f2] px-6 py-6 md:px-8 md:py-7">
            <h3 className="text-sm font-semibold text-kjColorDark">
              Backend &amp; data
            </h3>
            <p className="mt-2 text-sm italic leading-relaxed text-kjColorGray">
              APIs, services, databases, and typing on the server.
            </p>
            <div className="mt-4">
              <BrandRow items={backStack} />
            </div>
          </div>

          <div className="rounded-xl bg-[#f2f2f2] px-6 py-6 md:px-8 md:py-7">
            <h3 className="text-sm font-semibold text-kjColorDark">
              DevOps, tooling &amp; cloud
            </h3>
            <p className="mt-2 text-sm italic leading-relaxed text-kjColorGray">
              Delivery pipelines, hosting, and collaboration tooling.
            </p>
            <div className="mt-4">
              <BrandRow items={othersStack} />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
