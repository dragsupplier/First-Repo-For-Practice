import { motion } from 'motion/react'
import { Compass, Layers3, Workflow, Activity } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

type Step = {
  num: string
  title: string
  body: string
  icon: LucideIcon
  highlights: string[]
}

const STEPS: Step[] = [
  {
    num: '01',
    title: 'Listen',
    body:
      'A short conversation, no decks. We map your real constraint — placement targets, hiring TAT, accreditation gaps, product timeline — before suggesting anything.',
    icon: Compass,
    highlights: ['Stakeholder call', 'Goal mapping', 'Constraint audit'],
  },
  {
    num: '02',
    title: 'Design',
    body:
      'A written plan with the smallest viable scope, sequencing and clear ownership. No vendor jargon, no sprawling line items — just what moves the needle next.',
    icon: Layers3,
    highlights: ['Phased roadmap', 'Owner per workstream', 'Success metrics'],
  },
  {
    num: '03',
    title: 'Execute',
    body:
      'Our in-house team delivers — trainers, engineers, recruiters. Same brand, same standard, end to end. You get one weekly status, one number to call.',
    icon: Workflow,
    highlights: ['In-house delivery', 'Weekly status', 'Single point of contact'],
  },
  {
    num: '04',
    title: 'Compound',
    body:
      'The students you train become the interns next year, the engineers after that — and the alumni base that fuels every future drive. Your investment compounds.',
    icon: Activity,
    highlights: ['Alumni network', 'Year-on-year ROI', 'Closed-loop pipeline'],
  },
]

export function Approach() {
  return (
    <section
      id="approach"
      className="relative overflow-hidden bg-bg py-24 md:py-32"
    >
      <div className="absolute inset-0 -z-10 bg-dark-grid opacity-[0.4]" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"
      />

      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid grid-cols-1 items-end gap-6 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-fg-3">
              <span className="mr-2 inline-block h-px w-6 align-middle bg-fg-4" />
              Methodology
            </p>
            <h2 className="mt-4 font-display text-[40px] font-bold leading-[1.02] tracking-[-0.025em] text-fg md:text-[60px] lg:text-[72px]">
              No theatre.
              <br />
              <span className="text-brand-300">Just the work.</span>
            </h2>
          </div>
          <p className="text-[16px] leading-[1.6] text-fg-2 md:col-span-5 md:text-[17px]">
            Most education + tech vendors lose institutions in the
            sales-to-delivery handoff. We don't have one. The same team that
            scopes is the team that ships.
          </p>
        </div>

        <div className="relative mt-16 grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4 lg:grid-cols-4">
          <div
            aria-hidden
            className="absolute left-0 right-0 top-12 hidden h-px bg-gradient-to-r from-transparent via-white/15 to-transparent lg:block"
          />
          {STEPS.map((s, i) => (
            <StepCard key={s.num} step={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function StepCard({ step, index }: { step: Step; index: number }) {
  const Icon = step.icon
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10%' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="card-dark relative flex flex-col rounded-2xl p-6 md:p-7"
    >
      <div className="flex items-center gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-500/15 text-brand-200 ring-1 ring-brand-500/30">
          <Icon className="h-[18px] w-[18px]" strokeWidth={2} />
        </span>
        <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-fg-3">
          Step {step.num}
        </span>
      </div>

      <h3 className="mt-7 font-display text-[28px] font-bold leading-tight tracking-tight text-fg md:text-[32px]">
        {step.title}
      </h3>

      <p className="mt-3 text-[14.5px] leading-[1.55] text-fg-2">{step.body}</p>

      <ul className="mt-6 space-y-1.5 border-t border-white/10 pt-5">
        {step.highlights.map((h) => (
          <li key={h} className="flex items-center gap-2 text-[13px] text-fg-2">
            <span className="h-1 w-1 rounded-full bg-accent-500" />
            {h}
          </li>
        ))}
      </ul>
    </motion.div>
  )
}
