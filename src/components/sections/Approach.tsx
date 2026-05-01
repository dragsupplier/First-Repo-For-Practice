import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ArrowRight } from 'lucide-react'

type Step = {
  num: string
  tag: string
  title: string
  body: string
  artefacts: string[]
  duration: string
}

const STEPS: Step[] = [
  {
    num: '01',
    tag: 'Discovery',
    title: 'Listen first.',
    body:
      'A short consultation, no decks. We map your real constraint — placement targets, hiring TAT, accreditation gaps, product timeline — before suggesting anything.',
    artefacts: ['Stakeholder workshop', 'Constraint audit', 'Goal mapping'],
    duration: '1 week',
  },
  {
    num: '02',
    tag: 'Solution Design',
    title: 'The smallest viable scope.',
    body:
      'A written plan with sequencing and clear ownership. No vendor jargon, no sprawling line items — just what moves the needle next, and what is deliberately out of scope.',
    artefacts: ['Phased roadmap', 'Owner per workstream', 'Success metrics'],
    duration: '1–2 weeks',
  },
  {
    num: '03',
    tag: 'Delivery',
    title: 'In-house, end-to-end.',
    body:
      'Trainers, engineers and recruiters under one team — same brand, same standard. You get one weekly status, one number to call, no agency-of-agencies maze.',
    artefacts: ['Weekly status reviews', 'Single point of contact', 'In-house teams'],
    duration: 'Ongoing',
  },
  {
    num: '04',
    tag: 'Continuous Engagement',
    title: 'Built to compound.',
    body:
      'Programs and platforms designed to compound year over year — alumni, content, dashboards and tooling that stay after we leave.',
    artefacts: ['Quarterly reviews', 'Alumni network', 'Year-on-year ROI'],
    duration: 'Year over year',
  },
]

export function Approach() {
  const [activeIndex, setActiveIndex] = useState(0)
  const active = STEPS[activeIndex]

  return (
    <section id="approach" className="relative bg-white">
      {/* Section opener */}
      <div className="border-y border-line">
        <div className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-14">
          <div className="grid grid-cols-12 items-end gap-6">
            <div className="col-span-12 lg:col-span-7">
              <p className="eyebrow">05 / How we work</p>
              <h2 className="mt-4 font-display text-[28px] font-semibold leading-[1.08] tracking-[-0.02em] text-fg md:text-[36px] lg:text-[42px]">
                A predictable engagement model.
              </h2>
            </div>
            <p className="col-span-12 text-[15px] leading-[1.6] text-fg-3 lg:col-span-5">
              Most education and technology vendors lose institutions in the
              sales-to-delivery handoff. We don't have one — the team that
              scopes the engagement is the team that ships it.
            </p>
          </div>
        </div>
      </div>

      {/* Stepper + Active panel */}
      <div className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
        <div className="grid grid-cols-12 gap-x-10 gap-y-10">
          {/* Left rail — step list */}
          <nav className="col-span-12 md:col-span-4">
            <p className="eyebrow mb-5">The four steps</p>
            <ol className="space-y-1">
              {STEPS.map((s, i) => {
                const isActive = i === activeIndex
                return (
                  <li key={s.num}>
                    <button
                      onClick={() => setActiveIndex(i)}
                      className={`relative grid w-full grid-cols-[auto_1fr_auto] items-center gap-3 rounded-md px-3 py-3 text-left transition-colors ${
                        isActive ? 'bg-canvas' : 'hover:bg-canvas/60'
                      }`}
                      aria-pressed={isActive}
                    >
                      <span
                        className={`grid h-7 w-7 place-items-center rounded-full font-mono text-[10.5px] font-semibold tracking-wider transition-colors ${
                          isActive
                            ? 'bg-brand-700 text-white'
                            : 'bg-white text-fg-3 ring-1 ring-line'
                        }`}
                      >
                        {s.num}
                      </span>
                      <span className="flex flex-col">
                        <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-fg-4">
                          {s.tag}
                        </span>
                        <span
                          className={`mt-0.5 font-display text-[16px] font-semibold tracking-tight ${
                            isActive ? 'text-fg' : 'text-fg-2'
                          }`}
                        >
                          {s.title}
                        </span>
                      </span>
                      <ArrowRight
                        className={`h-3.5 w-3.5 transition-all duration-200 ${
                          isActive
                            ? 'translate-x-0 text-brand-700'
                            : '-translate-x-1 text-fg-5'
                        }`}
                        strokeWidth={2.5}
                      />
                    </button>
                  </li>
                )
              })}
            </ol>
          </nav>

          {/* Right — active step detail */}
          <div className="col-span-12 md:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.num}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-12 gap-x-6"
              >
                {/* Big numeric anchor */}
                <div className="col-span-12 md:col-span-3">
                  <span className="font-display text-[80px] font-semibold leading-none tracking-tighter text-canvas-2 md:text-[112px]">
                    {active.num}
                  </span>
                  <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-700">
                    {active.tag}
                  </p>
                  <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.14em] text-fg-4">
                    Duration · {active.duration}
                  </p>
                </div>

                {/* Body */}
                <div className="col-span-12 md:col-span-9">
                  <h3 className="font-display text-[28px] font-semibold leading-[1.1] tracking-[-0.02em] text-fg md:text-[36px]">
                    {active.title}
                  </h3>
                  <p className="mt-4 max-w-2xl text-[15.5px] leading-[1.65] text-fg-3 md:text-[16.5px]">
                    {active.body}
                  </p>

                  <div className="mt-7 border-t border-line pt-5">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-fg-4">
                      What you receive
                    </p>
                    <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
                      {active.artefacts.map((a) => (
                        <li key={a} className="inline-flex items-center gap-1.5 text-[13px] text-fg-2">
                          <span className="h-1 w-1 rounded-full bg-brand-700" />
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
