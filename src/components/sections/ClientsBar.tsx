const PARTNERS = [
  'Pune Institute of Tech',
  'Sinhgad Polytechnic',
  'Indus Coding Hub',
  'Aether Labs',
  'NebulaWorks',
  'Briteline Schools',
  'Northpoint HR',
  'Vyom Robotics',
]

export function ClientsBar() {
  return (
    <section className="relative border-b border-line bg-canvas">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-7 md:flex-row md:items-center md:gap-10 md:px-8">
        <p className="shrink-0 text-[12px] font-semibold uppercase tracking-[0.12em] text-fg-4">
          Working with teams across
        </p>
        <div className="relative flex-1 overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-canvas to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-canvas to-transparent" />
          <div className="animate-marquee flex w-max items-center gap-x-12 whitespace-nowrap will-change-transform">
            {[...PARTNERS, ...PARTNERS].map((p, i) => (
              <span
                key={`${p}-${i}`}
                className="inline-flex items-center gap-x-12 font-display text-[15px] font-medium tracking-tight text-fg-3"
              >
                {p}
                <span aria-hidden className="h-1 w-1 rounded-full bg-line-2" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
