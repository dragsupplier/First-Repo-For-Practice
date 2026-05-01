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
  const repeated = [...PARTNERS, ...PARTNERS]
  return (
    <section className="relative overflow-hidden border-b border-line bg-canvas py-7">
      <div className="mx-auto mb-4 max-w-7xl px-5 md:px-8">
        <p className="text-center text-[12px] font-semibold uppercase tracking-[0.18em] text-fg-4">
          Trusted by institutions and growing companies across India
        </p>
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-canvas to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-canvas to-transparent" />
      <div className="overflow-hidden">
        <div className="animate-marquee flex w-max items-center gap-12 whitespace-nowrap will-change-transform">
          {repeated.map((p, idx) => (
            <span
              key={`${p}-${idx}`}
              className="font-display text-[15px] font-semibold tracking-tight text-fg-4 transition-colors hover:text-fg"
            >
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
