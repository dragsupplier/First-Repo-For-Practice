import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ArrowRight, ArrowUpRight } from 'lucide-react'

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
  meshClass: string
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
    meshClass: 'seg-1-mesh',
  },
  {
    key: 'colleges',
    num: '02',
    tab: 'Colleges',
    title: 'For Colleges',
    who: 'Engineering & polytechnic institutes',
    promise: 'Better placements. Stronger accreditation.',
    body:
      'A single partner for the academic stack — pre-placement training, drives, faculty development, NAAC/NBA support and on-campus AI/IoT/Cloud labs, with ERP and LMS systems built for Indian institutions.',
    programs: ['Campus training', 'Placement drives', 'NAAC / NBA support', 'AI · IoT · Cloud labs', 'Faculty development', 'LMS / ERP systems'],
    outcome: 'A measurable lift in placement and ranking outcomes.',
    meshClass: 'seg-2-mesh',
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
    meshClass: 'seg-3-mesh',
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
    meshClass: 'seg-4-mesh',
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
    meshClass: 'seg-5-mesh',
  },
]

export function Audiences() {
  const [activeKey, setActiveKey] = useState(SEGMENTS[0].key)
  const active = SEGMENTS.find((s) => s.key === activeKey) ?? SEGMENTS[0]

  return (
    <section id="audiences" className="relative bg-white">
      {/* Section opener */}
      <div className="border-y border-line">
        <div className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-14">
          <div className="grid grid-cols-12 items-end gap-6">
            <div className="col-span-12 lg:col-span-7">
              <p className="eyebrow">02 / Solutions</p>
              <h2 className="mt-4 font-display text-[28px] font-semibold leading-[1.08] tracking-[-0.02em] text-fg md:text-[36px] lg:text-[44px]">
                Five audiences. One platform.
              </h2>
            </div>
            <p className="col-span-12 text-[15px] leading-[1.6] text-fg-3 lg:col-span-5">
              Pick an audience to see the programs we deliver, the outcomes
              we target, and how it connects to the rest of the platform.
            </p>
          </div>
        </div>
      </div>

      {/* Tabs + animated card */}
      <div className="mx-auto max-w-7xl px-4 pt-10 pb-16 md:px-8 md:pt-14 md:pb-24">
        {/* Tab strip */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {SEGMENTS.map((s) => {
            const isActive = s.key === activeKey
            return (
              <button
                key={s.key}
                onClick={() => setActiveKey(s.key)}
                aria-pressed={isActive}
                className={`group inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[13.5px] font-semibold transition-colors ${
                  isActive
                    ? 'border-brand-700 bg-brand-700 text-white'
                    : 'border-line bg-white text-fg-2 hover:border-brand-300 hover:text-fg'
                }`}
              >
                <span
                  className={`font-mono text-[10.5px] tracking-widest ${
                    isActive ? 'text-white/80' : 'text-fg-4 group-hover:text-brand-700'
                  }`}
                >
                  {s.num}
                </span>
                {s.tab}
              </button>
            )
          })}
        </div>

        {/* Centered animated color card */}
        <div className="relative mt-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.key}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4, ease: [0.2, 0.7, 0.2, 1] }}
              className={`color-card-edge relative overflow-hidden rounded-2xl ${active.meshClass} text-white`}
            >
              {/* Top corporate row */}
              <div className="flex items-center justify-between border-b border-white/15 px-7 py-4 md:px-10">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/70">
                  Audience {active.num} · {active.tab}
                </p>
                <p className="hidden font-mono text-[11px] tracking-[0.16em] text-white/55 md:block">
                  {active.who}
                </p>
              </div>

              {/* Card body */}
              <div className="grid grid-cols-12 gap-8 px-7 py-12 md:px-10 md:py-16 lg:gap-12">
                {/* Left main content (NOT 50/50 — content takes 8 cols) */}
                <div className="col-span-12 lg:col-span-8">
                  <h3 className="font-display text-[34px] font-semibold leading-[1.04] tracking-[-0.025em] text-white md:text-[52px] lg:text-[60px]">
                    {active.promise}
                  </h3>
                  <p className="mt-6 max-w-2xl text-[15.5px] leading-[1.65] text-white/80 md:text-[17px]">
                    {active.body}
                  </p>

                  <div className="mt-8">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/65">
                      Programs included
                    </p>
                    <ul className="mt-4 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2 md:grid-cols-3">
                      {active.programs.map((p) => (
                        <li
                          key={p}
                          className="flex items-center gap-2 border-b border-white/10 py-2 text-[13.5px] text-white/85"
                        >
                          <span className="h-1 w-1 rounded-full bg-white/55" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-9 flex flex-wrap items-center gap-3">
                    <a
                      href="#contact"
                      className="group inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-[14px] font-semibold text-brand-950 transition-colors hover:bg-brand-50"
                    >
                      Talk to the {active.tab.toLowerCase()} team
                      <ArrowRight
                        className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                        strokeWidth={2.5}
                      />
                    </a>
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 rounded-md px-5 py-3 text-[14px] font-semibold text-white ring-1 ring-white/25 transition-colors hover:bg-white/10"
                    >
                      Explore programs
                      <ArrowUpRight className="h-4 w-4" strokeWidth={2.25} />
                    </a>
                  </div>
                </div>

                {/* Right outcome panel (4 cols — subordinate, NOT a 50/50 visual) */}
                <aside className="col-span-12 lg:col-span-4">
                  <div className="flex h-full flex-col justify-between rounded-md border border-white/15 bg-white/[0.06] p-6 backdrop-blur">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/65">
                        The outcome
                      </p>
                      <p className="mt-4 font-display text-[22px] font-semibold leading-[1.18] tracking-tight text-white md:text-[24px]">
                        {active.outcome}
                      </p>
                    </div>

                    <div className="mt-6 border-t border-white/15 pt-5">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/55">
                        Direct line
                      </p>
                      <p className="mt-2 text-[14px] font-medium text-white">
                        hello@alphinix.in
                      </p>
                      <p className="mt-1 text-[12.5px] text-white/55">
                        Mon–Sat · 10:00–18:30 IST
                      </p>
                    </div>
                  </div>
                </aside>
              </div>

              {/* Bottom dotted index */}
              <div className="border-t border-white/15 px-7 py-4 md:px-10">
                <ol className="flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[11px] uppercase tracking-[0.16em]">
                  {SEGMENTS.map((s) => (
                    <li
                      key={s.key}
                      className={
                        s.key === activeKey
                          ? 'text-white'
                          : 'text-white/40'
                      }
                    >
                      {s.num} {s.tab}
                    </li>
                  ))}
                </ol>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
