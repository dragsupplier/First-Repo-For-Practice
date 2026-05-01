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
} from 'lucide-react'

const ROW_A = [
  { i: Globe, t: 'Web Development' },
  { i: Smartphone, t: 'Mobile Apps' },
  { i: Bot, t: 'AI Solutions' },
  { i: Workflow, t: 'Automation' },
  { i: Cloud, t: 'Cloud Infrastructure' },
  { i: LineChart, t: 'Digital Marketing' },
  { i: Briefcase, t: 'Tech Consulting' },
  { i: Cpu, t: 'AI / IoT Labs' },
]

const ROW_B = [
  { i: GraduationCap, t: 'Industrial Training' },
  { i: Wrench, t: 'Coding Programs' },
  { i: Boxes, t: 'STEM / ATL Labs' },
  { i: ShieldCheck, t: 'NAAC / NBA Support' },
  { i: GraduationCap, t: 'Faculty Development' },
  { i: Briefcase, t: 'Permanent Recruitment' },
  { i: Wrench, t: 'Bulk Hiring' },
  { i: Boxes, t: 'Hardware Kits' },
]

export function CapabilityMarquee() {
  return (
    <section id="capabilities" className="relative overflow-hidden border-y border-ink-200 bg-white py-12">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent" />

      <div className="mx-auto mb-7 flex max-w-7xl items-center justify-between gap-4 px-5 md:px-8">
        <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-ink-500">
          What we deliver
        </p>
        <p className="hidden max-w-md text-right text-[13px] text-ink-500 md:block">
          Five service categories — engineered to plug into each other.
        </p>
      </div>

      <Track items={ROW_A} />
      <div className="mt-3" />
      <Track items={ROW_B} reverse />
    </section>
  )
}

function Track({
  items,
  reverse = false,
}: {
  items: { i: React.ComponentType<{ className?: string; strokeWidth?: number }>; t: string }[]
  reverse?: boolean
}) {
  const repeated = [...items, ...items]
  return (
    <div className="overflow-hidden" aria-hidden>
      <div
        className="animate-marquee flex w-max gap-4 will-change-transform"
        style={reverse ? { animationDirection: 'reverse' } : undefined}
      >
        {repeated.map(({ i: Icon, t }, idx) => (
          <span
            key={`${t}-${idx}`}
            className="inline-flex shrink-0 items-center gap-2.5 rounded-full bg-ink-100 px-4 py-2.5 text-[14px] font-medium text-ink-800 ring-1 ring-ink-200"
          >
            <Icon className="h-[16px] w-[16px] text-brand-700" strokeWidth={2} />
            {t}
          </span>
        ))}
      </div>
    </div>
  )
}
