import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
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
  ArrowRight,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

type Capability = { icon: LucideIcon; label: string; sub: string }
type Group = {
  key: string
  tag: string
  title: string
  intro: string
  items: Capability[]
}

const GROUPS: Group[] = [
  {
    key: 'tech',
    tag: 'Technology',
    title: 'Software, AI and infrastructure',
    intro:
      'Production-grade engineering work delivered by senior leads — for founders shipping their first product and enterprises modernizing the next workflow.',
    items: [
      { icon: Globe,      label: 'Web development',    sub: 'Marketing, product & internal tools' },
      { icon: Smartphone, label: 'Mobile apps',        sub: 'iOS, Android, React Native' },
      { icon: Bot,        label: 'AI solutions',       sub: 'Agents, RAG, fine-tuning' },
      { icon: Workflow,   label: 'Automation',         sub: 'Internal ops, integrations' },
      { icon: Cloud,      label: 'Cloud infrastructure', sub: 'AWS · Azure · GCP' },
      { icon: Database,   label: 'Data platforms',     sub: 'Pipelines, warehouses, BI' },
      { icon: LineChart,  label: 'Digital marketing',  sub: 'SEO · Performance · Brand' },
      { icon: Briefcase,  label: 'Tech consulting',    sub: 'Architecture & roadmaps' },
    ],
  },
  {
    key: 'edu',
    tag: 'Education',
    title: 'Training and academic operations',
    intro:
      'Programs delivered with the same standard whether the audience is a final-year engineering student, a college HOD or a school principal.',
    items: [
      { icon: GraduationCap, label: 'Industrial training', sub: 'Year-3 / 4 cohorts, on-campus' },
      { icon: Code2,         label: 'Coding bootcamps',    sub: 'Web, mobile, data, AI tracks' },
      { icon: ScrollText,    label: 'Faculty development', sub: 'FDPs aligned to curriculum' },
      { icon: ShieldCheck,   label: 'NAAC / NBA support',  sub: 'Documentation, audits' },
      { icon: Building,      label: 'Campus drives',       sub: 'End-to-end placement runs' },
    ],
  },
  {
    key: 'school',
    tag: 'Schools',
    title: 'Future-ready labs',
    intro:
      'STEM, ATL, AI and IoT labs designed for Indian classrooms — not Western blueprint copies. Curriculum, kits and teacher training survive the school year.',
    items: [
      { icon: Boxes,    label: 'STEM / ATL labs',  sub: 'AIM-aligned setups' },
      { icon: Cpu,      label: 'AI · IoT labs',    sub: 'Microcontroller + cloud' },
      { icon: Lightbulb,label: 'Curriculum design',sub: 'Grade-wise learning ladders' },
      { icon: HardDrive,label: 'Hardware kits',    sub: 'Arduino, Pi, drones, robotics' },
      { icon: Users2,   label: 'Teacher training', sub: 'On-site + recorded modules' },
    ],
  },
  {
    key: 'hire',
    tag: 'Hiring',
    title: 'Recruitment services',
    intro:
      'Permanent, contract and bulk hiring backed by the same students we train — so candidates arrive interview-ready, not interview-cleared.',
    items: [
      { icon: Briefcase,    label: 'Permanent recruitment', sub: 'Engineering & non-tech roles' },
      { icon: Wrench,       label: 'Contract staffing',     sub: '3–18 month engagements' },
      { icon: ClipboardList,label: 'Technical assessments', sub: 'Custom screens per role' },
      { icon: Users2,       label: 'Pre-trained interns',   sub: 'Curated from our cohorts' },
      { icon: Building,     label: 'Bulk hiring drives',    sub: 'Single-day onsite drives' },
    ],
  },
]

export function CapabilityMarquee() {
  const [active, setActive] = useState(GROUPS[0].key)
  const current = GROUPS.find((g) => g.key === active) ?? GROUPS[0]

  return (
    <section id="capabilities" className="relative bg-white">
      {/* Section header */}
      <div className="border-y border-line bg-canvas">
        <div className="mx-auto grid max-w-7xl grid-cols-12 items-end gap-6 px-5 py-12 md:px-8 md:py-16">
          <div className="col-span-12 md:col-span-7">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-700">
              § Capabilities
            </p>
            <h2 className="mt-4 font-display text-[36px] font-semibold leading-[1.04] tracking-[-0.02em] text-fg md:text-[56px] lg:text-[64px]">
              Forty-plus services. Four delivery groups.
            </h2>
          </div>
          <p className="col-span-12 text-[15.5px] leading-[1.6] text-fg-3 md:col-span-5">
            Each group runs as an in-house team — same hiring standard, shared
            engagement model, single point of contact for multi-track work.
          </p>
        </div>
      </div>

      {/* Tabbed content */}
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        {/* Tab strip */}
        <div className="-mx-5 flex items-stretch overflow-x-auto px-5 md:mx-0 md:px-0">
          {GROUPS.map((g) => {
            const isActive = g.key === active
            return (
              <button
                key={g.key}
                onClick={() => setActive(g.key)}
                className={`group relative shrink-0 px-1 py-2 pr-6 text-left transition-colors md:py-3 md:pr-12 ${
                  isActive ? 'text-fg' : 'text-fg-4 hover:text-fg-2'
                }`}
              >
                <span className="block font-mono text-[10.5px] font-semibold uppercase tracking-[0.18em]">
                  {g.tag}
                </span>
                <span className="mt-1.5 block font-display text-[18px] font-medium tracking-tight md:text-[20px]">
                  {g.items.length} services
                </span>
                {isActive && (
                  <motion.span
                    layoutId="capability-tab"
                    className="absolute inset-x-0 bottom-0 h-[3px] bg-brand-700"
                  />
                )}
              </button>
            )
          })}
        </div>
        <div className="-mt-px h-px w-full bg-line" />

        {/* Active panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.key}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.35 }}
            className="mt-10 grid grid-cols-12 gap-8 md:gap-12"
          >
            {/* Intro column */}
            <div className="col-span-12 lg:col-span-4">
              <p className="font-mono text-[10.5px] font-semibold uppercase tracking-[0.18em] text-brand-700">
                {current.tag}
              </p>
              <h3 className="mt-3 font-display text-[26px] font-semibold leading-[1.15] tracking-tight text-fg md:text-[32px]">
                {current.title}
              </h3>
              <p className="mt-4 text-[15px] leading-[1.6] text-fg-3">
                {current.intro}
              </p>
              <a
                href="#contact"
                className="mt-6 inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-brand-700 hover:text-brand-800"
              >
                Talk to this team
                <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} />
              </a>
            </div>

            {/* Services list */}
            <div className="col-span-12 lg:col-span-8">
              <ul className="grid grid-cols-1 gap-x-10 gap-y-1 sm:grid-cols-2">
                {current.items.map((it, i) => (
                  <li
                    key={it.label}
                    className={`flex items-start gap-4 py-4 ${
                      i !== 0 && i !== 1 ? 'border-t border-line' : ''
                    } ${i === 1 ? 'sm:border-t-0' : ''} ${i === 0 ? 'border-t-0' : ''}`}
                  >
                    <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-md bg-canvas text-brand-700">
                      <it.icon className="h-[16px] w-[16px]" strokeWidth={2} />
                    </span>
                    <div className="flex flex-col">
                      <span className="font-display text-[16px] font-medium tracking-tight text-fg">
                        {it.label}
                      </span>
                      <span className="text-[13px] text-fg-4">{it.sub}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
