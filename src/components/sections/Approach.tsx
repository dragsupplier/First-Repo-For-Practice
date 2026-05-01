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
      'A 30-minute conversation, no decks. We map your real constraint — placement targets, hiring TAT, accreditation gaps, product timeline — before suggesting anything.',
    icon: Compass,
    highlights: ['Stakeholder call', 'Goal mapping', 'Constraint audit'],
  },
  {
    num: '02',
    title: 'Design',
    body:
      'A written plan with the smallest viable scope, sequencing and clear ownership. No vendor jargon, no sprawling line items — just what moves the needle in the next 90 days.',
    icon: Layers3,
    highlights: ['90-day roadmap', 'Owner per workstream', 'Success metrics'],
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
      'The students you train this year become the interns next year, the engineers after that — and the alumni base that fuels every future drive. Your investment compounds.',
    icon: Activity,
    highlights: ['Alumni network', 'Year-on-year ROI', 'Closed-loop pipeline'],
  },
]

export function Approach() {
  return (
    <section id="approach" className="relative bg-white py-24 md:py-32">
      {/* Top accent rule */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ink-300 to-transparent" />

      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid grid-cols-1 items-end gap-6 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-ink-500">
              <span className="mr-2 inline-block h-px w-6 align-middle bg-ink-400" />
              Methodology
            </p>
            <h2 className="mt-4 font-display text-[40px] font-bold leading-[1.02] tracking-[-0.02em] text-ink-950 md:text-[60px] lg:text-[72px]">
              No theatre.
              <br />
              <span className="text-brand-700">Just the work.</span>
            </h2>
          </div>
          <p className="text-[16px] leading-[1.6] text-ink-600 md:col-span-5 md:text-[17px]">
            Most education + tech vendors lose institutions in the
            sales-to-delivery handoff. We don't have one. The same team that
            scopes is the team that ships.
          </p>
        </div>

        <div className="relative mt-16 grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4 lg:grid-cols-4">
          {/* Subtle connecting line on desktop */}
          <div
            aria-hidden
            className="absolute left-0 right-0 top-12 hidden h-px bg-gradient-to-r from-transparent via-ink-300 to-transparent lg:block"
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
      className="relative flex flex-col rounded-2xl bg-paper p-6 ring-1 ring-ink-950/[0.06] md:p-7"
    >
      <div className="flex items-center gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-xl bg-ink-950 text-paper">
          <Icon className="h-[18px] w-[18px]" strokeWidth={2} />
        </span>
        <span className="font-mono text-[11.5px] uppercase tracking-[0.18em] text-ink-400">
          Step {step.num}
        </span>
      </div>

      <h3 className="mt-7 font-display text-[28px] font-bold leading-tight tracking-tight text-ink-950 md:text-[32px]">
        {step.title}
      </h3>

      <p className="mt-3 text-[14.5px] leading-[1.55] text-ink-600">{step.body}</p>

      <ul className="mt-6 space-y-1.5 border-t border-ink-200 pt-5">
        {step.highlights.map((h) => (
          <li key={h} className="flex items-center gap-2 text-[13px] text-ink-700">
            <span className="h-1 w-1 rounded-full bg-accent-500" />
            {h}
          </li>
        ))}
      </ul>
    </motion.div>
  )
}
