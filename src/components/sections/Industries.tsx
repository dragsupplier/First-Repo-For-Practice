import { ArrowUpRight } from 'lucide-react'

const INDUSTRIES = [
  'Higher Education',
  'K-12 Schools',
  'IT & Software Services',
  'SaaS & Startups',
  'BFSI',
  'Healthcare',
  'Manufacturing & MSME',
  'Retail & E-commerce',
  'Government & PSU',
  'Recruitment Agencies',
  'GCC / GIC',
  'Pharmaceuticals',
]

export function Industries() {
  return (
    <section id="industries" className="relative overflow-hidden bg-ink-950 text-white">
      {/* Subtle brand mesh wash for color depth (no drawn shapes) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            'radial-gradient(at 12% 8%, hsla(225, 95%, 55%, 0.35) 0px, transparent 55%), radial-gradient(at 90% 92%, hsla(265, 80%, 50%, 0.25) 0px, transparent 55%)',
        }}
      />
      <div className="relative mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid grid-cols-12 items-end gap-6">
          <div className="col-span-12 lg:col-span-7">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/55">
              04 / Industries
            </p>
            <h2 className="mt-4 font-display text-[28px] font-semibold leading-[1.08] tracking-[-0.02em] text-white md:text-[36px] lg:text-[44px]">
              Built for India's institutions and growing companies.
            </h2>
          </div>
          <p className="col-span-12 text-[15px] leading-[1.6] text-white/70 lg:col-span-5">
            From engineering colleges scaling placements to founders shipping
            their first product — our delivery teams are familiar with the
            sectors below.
          </p>
        </div>

        <ul className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-5 border-t border-white/10 pt-10">
          {INDUSTRIES.map((it, i) => (
            <li key={it} className="flex items-center gap-x-8">
              <a
                href="#audiences"
                className="group inline-flex items-center gap-1.5 font-display text-[18px] font-medium tracking-tight text-white transition-colors hover:text-brand-200 md:text-[20px]"
              >
                {it}
                <ArrowUpRight
                  className="h-3.5 w-3.5 text-white/55 transition-all duration-200 group-hover:text-brand-200"
                  strokeWidth={2.25}
                />
              </a>
              {i % 3 === 2 && i !== INDUSTRIES.length - 1 && (
                <span aria-hidden className="hidden h-5 w-px bg-white/15 lg:inline-block" />
              )}
            </li>
          ))}
        </ul>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6">
          <p className="text-[12.5px] text-white/55">
            Don't see your sector? We work across most regulated and
            unregulated industries — talk to us.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-white hover:text-brand-200"
          >
            Discuss your sector
            <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.5} />
          </a>
        </div>
      </div>
    </section>
  )
}
