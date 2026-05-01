import {
  GraduationCap,
  School,
  Cpu,
  Building,
  Banknote,
  HeartPulse,
  Factory,
  ShoppingBag,
  Briefcase,
  Users,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

type Industry = { icon: LucideIcon; label: string; sub: string }

const INDUSTRIES: Industry[] = [
  { icon: GraduationCap, label: 'Higher Education',       sub: 'Engineering · Polytechnic · MCA' },
  { icon: School,        label: 'K-12 Schools',           sub: 'CBSE · ICSE · State boards' },
  { icon: Cpu,           label: 'IT & Software Services', sub: 'Product · Services · GCCs' },
  { icon: Briefcase,     label: 'SaaS & Startups',        sub: 'Seed to Series B' },
  { icon: Banknote,      label: 'BFSI',                   sub: 'Banks · NBFCs · Insurance' },
  { icon: HeartPulse,    label: 'Healthcare',             sub: 'Hospitals · Diagnostics' },
  { icon: Factory,       label: 'Manufacturing',          sub: 'Auto · Industrial · MSME' },
  { icon: ShoppingBag,   label: 'Retail & E-commerce',    sub: 'D2C · Marketplaces' },
  { icon: Building,      label: 'Government & PSU',       sub: 'Skill missions · Tenders' },
  { icon: Users,         label: 'Recruitment Agencies',   sub: 'RPO partners' },
]

export function Industries() {
  return (
    <section id="industries" className="relative bg-canvas py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid grid-cols-1 items-end gap-5 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-brand-700">
              Industries we serve
            </p>
            <h2 className="mt-3 font-display text-[28px] font-bold leading-[1.15] tracking-[-0.02em] text-fg md:text-[40px] lg:text-[44px]">
              Built for India's institutions and growing businesses.
            </h2>
          </div>
          <p className="text-[15px] leading-[1.6] text-fg-3 md:col-span-5 md:text-[15.5px]">
            From engineering colleges scaling placements to SaaS founders
            shipping their first product — our work spans the sectors below,
            with delivery teams familiar with each.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 md:mt-12 md:grid-cols-3 lg:grid-cols-5">
          {INDUSTRIES.map((it) => (
            <a
              key={it.label}
              href="#audiences"
              className="group flex items-start gap-3 rounded-md border border-line bg-white p-4 transition-colors hover:border-brand-200 hover:bg-brand-50/40"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-brand-50 text-brand-700 ring-1 ring-brand-100">
                <it.icon className="h-[18px] w-[18px]" strokeWidth={2} />
              </span>
              <span className="flex flex-col">
                <span className="text-[13.5px] font-semibold text-fg">{it.label}</span>
                <span className="mt-0.5 text-[12px] text-fg-3">{it.sub}</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
