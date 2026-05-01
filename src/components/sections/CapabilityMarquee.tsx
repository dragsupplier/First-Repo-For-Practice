import {
  Globe,
  Smartphone,
  Bot,
  Workflow,
  Cloud,
  LineChart,
  Briefcase,
  Cpu,
  GraduationCap,
  Code2,
  Boxes,
  ShieldCheck,
  ScrollText,
  Wrench,
  HardDrive,
  Lightbulb,
  Users2,
  ClipboardList,
  Building,
  Database,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

type Capability = { icon: LucideIcon; label: string }

const GROUPS: { title: string; tag: string; items: Capability[] }[] = [
  {
    tag: 'Education',
    title: 'Training & academic operations',
    items: [
      { icon: GraduationCap, label: 'Industrial training' },
      { icon: Code2,         label: 'Coding bootcamps' },
      { icon: ScrollText,    label: 'Faculty development' },
      { icon: ShieldCheck,   label: 'NAAC / NBA support' },
      { icon: Building,      label: 'Campus drives' },
    ],
  },
  {
    tag: 'Schools',
    title: 'Future-ready labs',
    items: [
      { icon: Boxes,         label: 'STEM / ATL labs' },
      { icon: Cpu,           label: 'AI · IoT labs' },
      { icon: Lightbulb,     label: 'Curriculum design' },
      { icon: HardDrive,     label: 'Hardware kits' },
      { icon: Users2,        label: 'Teacher training' },
    ],
  },
  {
    tag: 'Technology',
    title: 'Software & infrastructure',
    items: [
      { icon: Globe,         label: 'Web development' },
      { icon: Smartphone,    label: 'Mobile apps' },
      { icon: Bot,           label: 'AI solutions' },
      { icon: Workflow,      label: 'Automation' },
      { icon: Cloud,         label: 'Cloud infrastructure' },
      { icon: Database,      label: 'Data platforms' },
      { icon: LineChart,     label: 'Digital marketing' },
      { icon: Briefcase,     label: 'Tech consulting' },
    ],
  },
  {
    tag: 'Hiring',
    title: 'Recruitment services',
    items: [
      { icon: Briefcase,     label: 'Permanent recruitment' },
      { icon: Wrench,        label: 'Contract staffing' },
      { icon: ClipboardList, label: 'Technical assessments' },
      { icon: Users2,        label: 'Pre-trained interns' },
      { icon: Building,      label: 'Bulk hiring drives' },
    ],
  },
]

export function CapabilityMarquee() {
  return (
    <section id="capabilities" className="relative bg-canvas py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid grid-cols-1 items-end gap-5 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-brand-700">
              Capabilities
            </p>
            <h2 className="mt-3 font-display text-[28px] font-bold leading-[1.15] tracking-[-0.02em] text-fg md:text-[40px] lg:text-[44px]">
              Forty-plus services across four delivery groups.
            </h2>
          </div>
          <p className="text-[15px] leading-[1.6] text-fg-3 md:col-span-5 md:text-[15.5px]">
            Each delivery group operates as an in-house team — same hiring
            standard, shared engagement model, single point of contact for
            multi-track engagements.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 md:mt-12 md:grid-cols-2">
          {GROUPS.map((g) => (
            <div key={g.title} className="rounded-lg border border-line bg-white p-6">
              <div className="flex items-center justify-between">
                <span className="rounded-sm bg-brand-50 px-2 py-0.5 font-mono text-[10.5px] font-semibold uppercase tracking-[0.16em] text-brand-700">
                  {g.tag}
                </span>
                <span className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-fg-4">
                  {g.items.length} services
                </span>
              </div>
              <h3 className="mt-4 font-display text-[18px] font-bold tracking-tight text-fg">
                {g.title}
              </h3>
              <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5">
                {g.items.map((it) => (
                  <li
                    key={it.label}
                    className="inline-flex items-center gap-2 text-[13.5px] text-fg-2"
                  >
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-sm bg-canvas text-brand-700">
                      <it.icon className="h-[14px] w-[14px]" strokeWidth={2} />
                    </span>
                    {it.label}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
