import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  GraduationCap,
  Building2,
  School,
  Rocket,
  Users,
  Target,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

type Segment = {
  key: string
  num: string
  tab: string
  title: string
  who: string
  promise: string
  body: string
  programs: string[]
  outcome: string
  icon: LucideIcon
}

const SEGMENTS: Segment[] = [
  {
    key: 'students',
    num: '01',
    tab: 'Students',
    title: 'For Students',
    who: 'Engineering · BCA · MCA · BSc · Diploma',
    promise: 'From classroom to offer letter.',
    body:
      'A guided runway across your degree — industrial training, internships, certifications, coding programmes and structured placement preparation, sequenced by stream and year.',
    programs: ['Industrial training', 'Internships', 'Coding bootcamps', 'Certifications', 'Career guidance', 'Skill development'],
    outcome: 'Industry-ready before you graduate.',
    icon: GraduationCap,
  },
  {
    key: 'colleges',
    num: '02',
    tab: 'Colleges',
    title: 'For Colleges',
    who: 'Engineering & polytechnic institutes',
    promise: 'Better placements. Stronger accreditation.',
    body:
      'A single partner for the academic stack — pre-placement training, drives, faculty development, NAAC/NBA support and on-campus AI/IoT/Cloud labs.',
    programs: ['Campus training', 'Placement drives', 'NAAC / NBA support', 'AI · IoT · Cloud labs', 'Faculty development', 'LMS / ERP systems'],
    outcome: 'A measurable lift in placement and ranking outcomes.',
    icon: Building2,
  },
  {
    key: 'schools',
    num: '03',
    tab: 'Schools',
    title: 'For Schools (K-12)',
    who: 'Principals & school management',
    promise: 'Future-ready labs. NEP 2020 aligned.',
    body:
      'AI, robotics, IoT and STEM/ATL labs designed for Indian classrooms — with curriculum, hardware kits and teacher training that survive the school year.',
    programs: ['AI & robotics', 'STEM / ATL labs', 'Coding curriculum', 'IoT lab setup', 'Hardware kits', 'Teacher training'],
    outcome: 'Future-tech literacy that parents notice.',
    icon: School,
  },
  {
    key: 'businesses',
    num: '04',
    tab: 'Businesses',
    title: 'For Businesses & Startups',
    who: 'Founders, product & operations leaders',
    promise: 'Ship faster. Scale leaner.',
    body:
      'Web, mobile, AI and automation work delivered by the same team that trains the engineers — so you can scale capability before you scale headcount.',
    programs: ['Web development', 'Mobile apps', 'AI solutions', 'Automation', 'Cloud infrastructure', 'Tech consulting'],
    outcome: 'Production-grade software, on real timelines.',
    icon: Rocket,
  },
  {
    key: 'hiring',
    num: '05',
    tab: 'Hiring',
    title: 'For Hiring Teams',
    who: 'Talent acquisition & people operations',
    promise: 'Pre-trained talent, on demand.',
    body:
      'Permanent recruitment, contract staffing, RPO and bulk drives — backed by the same students we train, so candidates arrive interview-ready.',
    programs: ['Permanent recruitment', 'Contract staffing', 'Pre-trained interns', 'Technical assessments', 'Bulk drives', 'RPO'],
    outcome: 'Faster time-to-hire with less drop-off.',
    icon: Users,
  },
]

export function Audiences() {
  const [activeKey, setActiveKey] = useState(SEGMENTS[0].key)
  const active = SEGMENTS.find((s) => s.key === activeKey) ?? SEGMENTS[0]
  const ActiveIcon = active.icon
  const activeIndex = SEGMENTS.findIndex((s) => s.key === activeKey)

  return (
    <section id="audiences" className="relative bg-canvas">
      <div className="brand-mesh-light h-2 w-full" aria-hidden />

      {/* Section opener */}
      <div className="bg-canvas">
        <div className="mx-auto max-w-7xl px-5 pt-14 md:px-8 md:pt-20">
          <div className="flex items-center gap-3">
            <span className="kicker">02 — Solutions</span>
            <span className="h-px flex-1 bg-line-2" />
          </div>
          <div className="mt-8 grid grid-cols-12 gap-x-10 gap-y-6">
            <h2 className="col-span-12 font-display text-[36px] font-semibold leading-[1.04] tracking-[-0.02em] text-fg lg:col-span-7 lg:text-[52px]">
              Five audiences. <span className="text-brand-700">One platform.</span>
            </h2>
            <p className="col-span-12 text-[15.5px] leading-[1.6] text-fg-3 lg:col-span-5 lg:text-[16.5px]">
              Pick an audience to see the programmes we deliver, the outcomes
              we target, and how it connects to the rest of the platform.
            </p>
          </div>
        </div>
      </div>

      {/* Tabs with icons */}
      <div className="mx-auto mt-10 max-w-7xl px-5 md:px-8 md:mt-14">
        <div className="border-y border-line">
          <div className="-mx-1 flex items-stretch overflow-x-auto">
            {SEGMENTS.map((s) => {
              const isActive = s.key === activeKey
              const Icon = s.icon
              return (
                <button
                  key={s.key}
                  onClick={() => setActiveKey(s.key)}
                  aria-pressed={isActive}
                  className={`group relative flex shrink-0 items-center gap-3 px-4 py-4 text-left transition-colors md:px-6 md:py-5 ${
                    isActive ? 'text-fg' : 'text-fg-3 hover:text-fg'
                  }`}
                >
                  <span
                    className={`grid h-9 w-9 place-items-center rounded-md transition-colors ${
                      isActive
                        ? 'bg-brand-700 text-white'
                        : 'bg-canvas-2 text-fg-3 group-hover:bg-brand-50 group-hover:text-brand-700'
                    }`}
                  >
                    <Icon className="h-4 w-4" strokeWidth={2} />
                  </span>
                  <span className="flex flex-col">
                    <span
                      className={`font-mono text-[10.5px] tracking-[0.14em] ${
                        isActive ? 'text-brand-700' : 'text-fg-5'
                      }`}
                    >
                      {s.num}
                    </span>
                    <span className="font-display text-[15px] font-semibold tracking-tight md:text-[16px]">
                      {s.tab}
                    </span>
                  </span>
                  {isActive && (
                    <span aria-hidden className="absolute inset-x-3 -bottom-px h-0.5 bg-brand-700" />
                  )}
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* Animated card */}
      <div className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16">
        <AnimatePresence mode="wait">
          <motion.article
            key={active.key}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4, ease: [0.2, 0.7, 0.2, 1] }}
            className="overflow-hidden rounded-lg border border-line bg-white shadow-[0_24px_60px_-30px_rgba(11,18,32,0.18)]"
          >
            {/* Card header — icon block + meta */}
            <div className="grid grid-cols-12 gap-0 border-b border-line">
              <div className="col-span-12 grid place-items-center bg-brand-700 p-7 text-white sm:col-span-3 md:p-8">
                <div className="text-center">
                  <ActiveIcon className="mx-auto h-10 w-10" strokeWidth={1.6} />
                  <p className="mt-3 font-mono text-[10.5px] uppercase tracking-[0.18em] text-brand-200">
                    {active.num} · {active.tab}
                  </p>
                </div>
              </div>
              <div className="col-span-12 flex flex-col justify-between gap-4 p-7 sm:col-span-9 md:flex-row md:items-end md:p-10">
                <div>
                  <p className="kicker">{active.title}</p>
                  <h3 className="mt-3 font-display text-[28px] font-semibold leading-[1.05] tracking-[-0.025em] text-fg md:text-[40px] lg:text-[44px]">
                    {active.promise}
                  </h3>
                </div>
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-fg-4 md:text-right">
                  {active.who}
                </p>
              </div>
            </div>

            {/* Card body */}
            <div className="grid grid-cols-12 gap-x-10 gap-y-10 p-7 md:p-10">
              {/* Body + outcome */}
              <div className="col-span-12 lg:col-span-7">
                <p className="max-w-xl text-[16px] leading-[1.65] text-fg-3 md:text-[17px]">
                  {active.body}
                </p>

                {/* Outcome — visual chip */}
                <div className="mt-7 flex items-start gap-4 rounded-md border border-brand-100 bg-brand-50 p-5">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-md bg-brand-700 text-white">
                    <Target className="h-4 w-4" strokeWidth={2.25} />
                  </span>
                  <div>
                    <p className="kicker">The outcome</p>
                    <p className="mt-1.5 font-display text-[18px] font-semibold leading-snug tracking-tight text-fg md:text-[20px]">
                      {active.outcome}
                    </p>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <a
                    href="#contact"
                    className="group inline-flex items-center gap-2 rounded-md bg-brand-700 px-5 py-3 text-[14px] font-semibold text-white transition-colors hover:bg-brand-800"
                  >
                    Talk to the {active.tab.toLowerCase()} team
                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                      strokeWidth={2.5}
                    />
                  </a>
                  <a href="#" className="link-rule text-[13.5px]">
                    Programmes catalogue
                    <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.5} />
                  </a>
                </div>
              </div>

              {/* Programs list */}
              <aside className="col-span-12 lg:col-span-5">
                <div className="border-t border-line">
                  <div className="flex items-center justify-between border-b border-line py-3">
                    <p className="kicker">Programmes included</p>
                    <span className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-fg-4">
                      {active.programs.length}
                    </span>
                  </div>
                  <ul>
                    {active.programs.map((p, i) => (
                      <li
                        key={p}
                        className={`flex items-center gap-3 py-3 text-[14px] text-fg-2 ${
                          i !== active.programs.length - 1 ? 'border-b border-line' : ''
                        }`}
                      >
                        <CheckCircle2 className="h-4 w-4 text-brand-700" strokeWidth={2.25} />
                        <span className="flex-1">{p}</span>
                        <span className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-fg-5">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </aside>
            </div>

            {/* Visual progression footer */}
            <div className="flex items-center justify-between border-t border-line bg-canvas px-7 py-4 md:px-10">
              <p className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-fg-4">
                Audience {active.num} of {String(SEGMENTS.length).padStart(2, '0')}
              </p>
              <div className="flex items-center gap-1.5">
                {SEGMENTS.map((s, i) => {
                  const isActive = i === activeIndex
                  return (
                    <button
                      key={s.key}
                      onClick={() => setActiveKey(s.key)}
                      aria-label={`Show ${s.tab}`}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        isActive ? 'w-8 bg-brand-700' : 'w-2 bg-line-2 hover:bg-fg-5'
                      }`}
                    />
                  )
                })}
              </div>
            </div>
          </motion.article>
        </AnimatePresence>
      </div>
    </section>
  )
}
