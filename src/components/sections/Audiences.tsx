import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ArrowRight, ArrowUpRight, CheckCircle2 } from 'lucide-react'

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
      'A guided runway across your degree — industrial training, internships, certifications, coding programs and structured placement preparation, sequenced by stream and year.',
    programs: ['Industrial training', 'Internships', 'Coding bootcamps', 'Certifications', 'Career guidance', 'Skill development'],
    outcome: 'Industry-ready before you graduate.',
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
  },
]

export function Audiences() {
  const [activeKey, setActiveKey] = useState(SEGMENTS[0].key)
  const active = SEGMENTS.find((s) => s.key === activeKey) ?? SEGMENTS[0]

  return (
    <section id="audiences" className="relative bg-canvas">
      {/* Top color slab — replaces inner mesh card */}
      <div className="brand-mesh-light h-2 w-full" aria-hidden />

      {/* Section opener */}
      <div className="bg-canvas">
        <div className="mx-auto max-w-7xl px-5 pt-14 md:px-8 md:pt-20">
          <div className="flex items-center gap-3">
            <span className="kicker">02 — Solutions</span>
            <span className="h-px flex-1 bg-line-2" />
          </div>
          <div className="mt-8 grid grid-cols-12 gap-x-10 gap-y-6">
            <h2 className="col-span-12 font-display text-[36px] font-semibold leading-[1.04] tracking-[-0.02em] text-fg lg:col-span-7 lg:text-[60px]">
              Five audiences. <span className="text-brand-700">One platform.</span>
            </h2>
            <p className="col-span-12 text-[15.5px] leading-[1.6] text-fg-3 lg:col-span-5 lg:text-[16.5px]">
              Pick an audience to see the programmes we deliver, the outcomes
              we target, and how it connects to the rest of the platform.
            </p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mx-auto max-w-7xl px-5 pt-10 md:px-8 md:pt-14">
        <div className="border-y border-line">
          <div className="-mx-1 flex items-stretch overflow-x-auto">
            {SEGMENTS.map((s) => {
              const isActive = s.key === activeKey
              return (
                <button
                  key={s.key}
                  onClick={() => setActiveKey(s.key)}
                  aria-pressed={isActive}
                  className={`group relative flex shrink-0 items-baseline gap-3 px-4 py-4 text-left transition-colors md:px-6 md:py-5 ${
                    isActive ? 'text-fg' : 'text-fg-3 hover:text-fg'
                  }`}
                >
                  <span
                    className={`font-mono text-[11.5px] tracking-[0.14em] ${
                      isActive ? 'text-brand-700' : 'text-fg-5'
                    }`}
                  >
                    {s.num}
                  </span>
                  <span className="font-display text-[15px] font-semibold tracking-tight md:text-[17px]">
                    {s.tab}
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

      {/* Active panel — full-width editorial body, no card chrome */}
      <div className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={active.key}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.4, ease: [0.2, 0.7, 0.2, 1] }}
            className="grid grid-cols-12 gap-x-10 gap-y-12"
          >
            {/* Left — promise + deck + ctas */}
            <div className="col-span-12 lg:col-span-7">
              <p className="kicker">{active.title} · {active.who}</p>
              <h3 className="mt-5 font-display text-[36px] font-semibold leading-[1.04] tracking-[-0.025em] text-fg md:text-[56px] lg:text-[64px]">
                {active.promise}
              </h3>
              <p className="mt-6 max-w-xl text-[16px] leading-[1.65] text-fg-3 md:text-[17px]">
                {active.body}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 rounded-md bg-brand-700 px-5 py-3 text-[14.5px] font-semibold text-white transition-colors hover:bg-brand-800"
                >
                  Talk to the {active.tab.toLowerCase()} team
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                    strokeWidth={2.5}
                  />
                </a>
                <a
                  href="#"
                  className="link-rule text-[13.5px]"
                >
                  Programmes catalogue
                  <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.5} />
                </a>
              </div>
            </div>

            {/* Right — programs as a typographic spec list */}
            <aside className="col-span-12 lg:col-span-5">
              <div className="border-t border-line">
                <div className="flex items-center justify-between border-b border-line py-3">
                  <p className="kicker">Programmes included</p>
                  <span className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-fg-4">
                    {active.programs.length} items
                  </span>
                </div>
                <ul>
                  {active.programs.map((p, i) => (
                    <li
                      key={p}
                      className={`flex items-center gap-3 py-3 text-[14.5px] text-fg-2 ${
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
                <div className="mt-5 rounded-sm bg-brand-50 p-4 ring-1 ring-brand-100">
                  <p className="kicker">The outcome</p>
                  <p className="mt-2 font-display text-[18px] font-semibold leading-snug tracking-tight text-fg">
                    {active.outcome}
                  </p>
                </div>
              </div>
            </aside>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
