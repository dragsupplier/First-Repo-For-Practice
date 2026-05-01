import {
  Cpu,
  Cloud,
  Workflow,
  Smartphone,
  Globe,
  Bot,
  GraduationCap,
  Wrench,
  Briefcase,
  LineChart,
  Boxes,
  ShieldCheck,
  Code2,
  Lightbulb,
  ScrollText,
  HardDrive,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

type Item = { i: LucideIcon; t: string }

const ROW_A: Item[] = [
  { i: Globe, t: 'Web Development' },
  { i: Smartphone, t: 'Mobile Apps' },
  { i: Bot, t: 'AI Solutions' },
  { i: Workflow, t: 'Automation' },
  { i: Cloud, t: 'Cloud Infrastructure' },
  { i: LineChart, t: 'Digital Marketing' },
  { i: Briefcase, t: 'Tech Consulting' },
  { i: Cpu, t: 'AI / IoT Labs' },
]

const ROW_B: Item[] = [
  { i: GraduationCap, t: 'Industrial Training' },
  { i: Code2, t: 'Coding Bootcamps' },
  { i: Boxes, t: 'STEM / ATL Labs' },
  { i: ShieldCheck, t: 'NAAC / NBA Support' },
  { i: ScrollText, t: 'Faculty Development' },
  { i: Briefcase, t: 'Permanent Recruitment' },
  { i: Wrench, t: 'Bulk Hiring' },
  { i: HardDrive, t: 'Hardware Kits' },
  { i: Lightbulb, t: 'Curriculum Consulting' },
]

export function CapabilityMarquee() {
  return (
    <section
      id="capabilities"
      className="relative overflow-hidden border-y border-white/[0.06] bg-bg py-14"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-bg to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-bg to-transparent" />

      <div className="mx-auto mb-9 grid max-w-7xl grid-cols-1 items-end gap-5 px-5 md:grid-cols-12 md:px-8">
        <div className="md:col-span-7">
          <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-fg-3">
            <span className="mr-2 inline-block h-px w-6 align-middle bg-fg-4" />
            What we deliver
          </p>
          <h2 className="mt-4 font-display text-[28px] font-bold leading-[1.05] tracking-[-0.02em] text-fg md:text-[36px]">
            One team, end-to-end. Engineered to plug into each other.
          </h2>
        </div>
        <p className="text-[14px] text-fg-3 md:col-span-5 md:text-right md:text-[14.5px]">
          From a college's NAAC support to a startup's AI chatbot — same
          delivery DNA, same accountability.
        </p>
      </div>

      <Track items={ROW_A} label="Business Tech" />
      <div className="mt-3" />
      <Track items={ROW_B} label="Education · Hiring" reverse />
    </section>
  )
}

function Track({
  items,
  label,
  reverse = false,
}: {
  items: Item[]
  label: string
  reverse?: boolean
}) {
  const repeated = [...items, ...items]
  return (
    <div className="relative" aria-hidden>
      <span className="absolute left-3 top-1/2 z-20 hidden -translate-y-1/2 rounded-md bg-white/[0.06] px-2.5 py-1 font-mono text-[10.5px] font-semibold uppercase tracking-[0.18em] text-fg-2 ring-1 ring-white/10 md:left-8 md:inline-block">
        {label}
      </span>
      <div className="overflow-hidden">
        <div
          className="animate-marquee flex w-max gap-3 will-change-transform"
          style={reverse ? { animationDirection: 'reverse' } : undefined}
        >
          {repeated.map(({ i: Icon, t }, idx) => (
            <span
              key={`${t}-${idx}`}
              className="group inline-flex shrink-0 items-center gap-2.5 rounded-full bg-white/[0.04] px-4 py-2.5 text-[13.5px] font-medium text-fg-2 ring-1 ring-white/10 transition-colors hover:bg-brand-500/15 hover:text-fg hover:ring-brand-500/40"
            >
              <Icon className="h-[16px] w-[16px] text-brand-300 group-hover:text-brand-200" strokeWidth={2} />
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
