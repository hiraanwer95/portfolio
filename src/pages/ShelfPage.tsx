const articles = [
  { title: 'Placeholder article title', date: '2026-01-01' },
  { title: 'Another placeholder article', date: '2025-10-12' },
  { title: 'Yet another article', date: '2025-08-02' },
]

export function ShelfPage() {
  return (
    <div className="space-y-10 font-sans">
      <section className="card p-8 md:p-10">
        <h1 className="text-2xl font-bold tracking-tight text-kjColorDark">
          My articles
        </h1>
      </section>

      <section className="card p-8 md:p-10">
        <div className="grid gap-4 md:grid-cols-2">
          {articles.map((a) => (
            <a
              key={a.title}
              href="#"
              className="pf-card block rounded-lg border border-black/10 bg-white/80 p-6 text-kjColorDark"
            >
              <div className="text-xs text-kjColorGray">{a.date}</div>
              <div className="mt-2 text-base font-semibold">{a.title}</div>
              <div className="mt-3 h-20 rounded bg-kjColorLight" />
            </a>
          ))}
        </div>
      </section>
    </div>
  )
}

