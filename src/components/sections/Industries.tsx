import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ArrowRight, ArrowUpRight } from 'lucide-react'

type Format = {
  key: string
  num: string
  name: string
  duration: string
  audience: string
  body: string
  body2: string
  includes: string[]
  flag: 'standard' | 'popular' | 'enterprise'
}

const FORMATS: Format[] = [
  {
    key: 'discovery',
    num: '01',
    name: 'Discovery sprint',
    duration: '1–2 weeks',
    audience: 'First-time engagements',
    body:
      'A short paid sprint to map the real constraint, surface the smallest viable scope and produce a written 90-day plan.',
    body2:
      'Refundable against any subsequent engagement. Best for institutions and businesses that have an open question and need a written, owner-mapped plan before committing to a longer programme.',
    includes: ['Stakeholder workshops', 'Constraint audit', 'Written 90-day plan', 'Refundable fee'],
    flag: 'standard',
  },
  {
    key: 'pilot',
    num: '02',
    name: 'Pilot programme',
    duration: '4–12 weeks',
    audience: 'Single-track engagement',
    body:
      'A focused pilot — one cohort, one drive, one product, or one lab. Designed to ship a measurable outcome within a single quarter so you can decide on scale-up.',
    body2:
      'Pilots run with the full Alphinix team and the same engagement model as larger contracts — they are not "trial" engagements. Output is real production work, not a sales demo.',
    includes: ['Single workstream', 'Owner per stream', 'Weekly status reviews', 'Real production output'],
    flag: 'popular',
  },
  {
    key: 'annual',
    num: '03',
    name: 'Annual partnership',
    duration: '12 months',
    audience: 'Multi-track institutions',
    body:
      'A retainer engagement spanning the full academic or fiscal year — combining training, technology and hiring tracks under one master agreement and one quarterly review cadence.',
    body2:
      'Designed for colleges and growing companies that want a single-vendor relationship instead of stitching together three. Includes carry-forward of unused capacity within the year.',
    includes: ['Multi-track scope', 'Quarterly business reviews', 'Cohort year-on-year carry', 'One master agreement'],
    flag: 'standard',
  },
  {
    key: 'bespoke',
    num: '04',
    name: 'Built-for-you',
    duration: 'Bespoke',
    audience: 'Enterprises & PSU partners',
    body:
      'A custom engagement scoped around your operating model — including dedicated teams, specialised SOWs, on-premise placement, and joint-IP arrangements where relevant.',
    body2:
      'Used for skill-mission projects, large-bid responses, and enterprise GCC engagements. We will scope, contract and staff a dedicated pod that operates as an extension of your team.',
    includes: ['Dedicated delivery pod', 'Custom SOW', 'On-premise placement', 'Joint-IP optional'],
    flag: 'enterprise',
  },
]

export function Industries() {
  const [activeKey, setActiveKey] = useState(FORMATS[0].key)
  const active = FORMATS.find((f) => f.key === activeKey) ?? FORMATS[0]

  return (
    <section id="industries" className="relative bg-canvas">
      {/* Section opener */}
      <div className="bg-canvas">
        <div className="mx-auto max-w-7xl px-5 pt-16 md:px-8 md:pt-20">
          <div className="flex items-center gap-3">
            <span className="kicker">04 — Engagement formats</span>
            <span className="h-px flex-1 bg-line-2" />
          </div>
          <div className="mt-8 grid grid-cols-12 gap-x-10 gap-y-6">
            <h2 className="col-span-12 font-display text-[36px] font-semibold leading-[1.04] tracking-[-0.02em] text-fg lg:col-span-7 lg:text-[60px]">
              Four ways to start <span className="text-brand-700">working with us.</span>
            </h2>
            <p className="col-span-12 text-[15.5px] leading-[1.6] text-fg-3 lg:col-span-5 lg:text-[16.5px]">
              Start small with a discovery sprint, scale into a pilot, or
              commit to an annual partnership. Every format begins with the
              same conversation and the same delivery DNA.
            </p>
          </div>
        </div>
      </div>

      {/* Tabbed editorial: format list + active long-form panel */}
      <div className="mx-auto mt-12 max-w-7xl px-5 pb-20 md:mt-16 md:px-8 md:pb-24">
        <div className="grid grid-cols-12 gap-x-10 gap-y-10">
          {/* Format list */}
          <nav className="col-span-12 lg:col-span-4">
            <p className="kicker">Formats</p>
            <ol className="mt-5 border-t border-line">
              {FORMATS.map((f) => {
                const isActive = f.key === activeKey
                return (
                  <li key={f.key} className="border-b border-line">
                    <button
                      onClick={() => setActiveKey(f.key)}
                      className={`relative grid w-full grid-cols-[auto_1fr_auto] items-center gap-3 py-5 pr-1 text-left transition-colors ${
                        isActive ? 'bg-white text-fg' : 'text-fg-3 hover:text-fg'
                      }`}
                    >
                      <span
                        className={`grid h-9 w-9 place-items-center font-mono text-[11px] font-semibold tracking-[0.12em] ${
                          isActive
                            ? 'bg-brand-700 text-white'
                            : 'bg-white text-fg-3 ring-1 ring-line'
                        }`}
                      >
                        {f.num}
                      </span>
                      <span className="flex flex-col">
                        <span className="font-display text-[18px] font-semibold tracking-tight">
                          {f.name}
                        </span>
                        <span className="text-[12px] text-fg-4">
                          {f.duration} · {f.audience}
                        </span>
                      </span>
                      <ArrowRight
                        className={`h-3.5 w-3.5 transition-all duration-200 ${
                          isActive ? 'translate-x-0 text-brand-700' : '-translate-x-1 text-fg-5'
                        }`}
                        strokeWidth={2.5}
                      />
                      {isActive && (
                        <span aria-hidden className="absolute -left-1 top-3 h-9 w-0.5 bg-brand-700" />
                      )}
                    </button>
                  </li>
                )
              })}
            </ol>
          </nav>

          {/* Active panel */}
          <div className="col-span-12 lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.key}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.35 }}
                className="grid grid-cols-12 gap-x-6"
              >
                <div className="col-span-12 md:col-span-3">
                  <span className="font-display text-[80px] font-semibold leading-none tracking-tighter text-canvas-2 md:text-[112px]">
                    {active.num}
                  </span>
                  <p className="mt-4 inline-block rounded-sm bg-brand-50 px-2 py-0.5 font-mono text-[10.5px] font-semibold uppercase tracking-[0.14em] text-brand-700 ring-1 ring-brand-100">
                    {active.flag === 'popular'
                      ? 'Most chosen'
                      : active.flag === 'enterprise'
                        ? 'Enterprise'
                        : 'Standard'}
                  </p>
                  <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.14em] text-fg-4">
                    Duration · {active.duration}
                  </p>
                  <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.14em] text-fg-4">
                    For · {active.audience}
                  </p>
                </div>

                <div className="col-span-12 md:col-span-9">
                  <h3 className="font-display text-[28px] font-semibold leading-[1.1] tracking-[-0.02em] text-fg md:text-[36px]">
                    {active.name}
                  </h3>
                  <p className="mt-4 max-w-2xl text-[15.5px] leading-[1.65] text-fg-3 md:text-[16.5px]">
                    {active.body}
                  </p>
                  <p className="mt-4 max-w-2xl text-[14.5px] leading-[1.65] text-fg-4">
                    {active.body2}
                  </p>

                  <div className="mt-7 border-t border-line pt-5">
                    <p className="kicker">What it includes</p>
                    <ul className="mt-3 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
                      {active.includes.map((inc) => (
                        <li key={inc} className="inline-flex items-center gap-2 text-[13.5px] text-fg-2">
                          <span className="h-1 w-1 rounded-full bg-brand-700" />
                          {inc}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href="#contact"
                    className="link-rule mt-7 text-[13.5px]"
                  >
                    Start with this format
                    <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.5} />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
