import { motion } from 'motion/react'
import { Compass, Layers3, Workflow, Activity } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

type Step = {
  num: string
  title: string
  body: string
  icon: LucideIcon
}

const STEPS: Step[] = [
  {
    num: '01',
    title: 'Discovery',
    body:
      'A short consultation, no decks. We map your real constraint — placement targets, hiring TAT, accreditation gaps, product timeline.',
    icon: Compass,
  },
  {
    num: '02',
    title: 'Solution Design',
    body:
      'A written plan with the smallest viable scope, sequencing and clear ownership — no sprawling line items, only what moves the needle.',
    icon: Layers3,
  },
  {
    num: '03',
    title: 'Delivery',
    body:
      'Our in-house team executes — trainers, engineers, recruiters. One owner, one weekly status, one number to call.',
    icon: Workflow,
  },
  {
    num: '04',
    title: 'Continuous Engagement',
    body:
      'Programs and platforms are designed to compound year over year — with alumni, content, and tooling that stays after we leave.',
    icon: Activity,
  },
]

export function Approach() {
  return (
    <section id="approach" className="relative bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid grid-cols-1 items-end gap-5 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-brand-700">
              Our approach
            </p>
            <h2 className="mt-3 font-display text-[28px] font-bold leading-[1.15] tracking-[-0.02em] text-fg md:text-[40px] lg:text-[44px]">
              A predictable engagement model.
            </h2>
          </div>
          <p className="text-[15px] leading-[1.6] text-fg-3 md:col-span-5 md:text-[15.5px]">
            Most education and technology vendors lose institutions in the
            sales-to-delivery handoff. We don't have one — the team that
            scopes the engagement is the team that ships it.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 md:mt-12 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="rounded-lg border border-line bg-white p-6"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-md bg-brand-50 text-brand-700 ring-1 ring-brand-100">
                  <s.icon className="h-[16px] w-[16px]" strokeWidth={2} />
                </span>
                <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-fg-4">
                  Step {s.num}
                </span>
              </div>
              <h3 className="mt-5 font-display text-[20px] font-bold tracking-tight text-fg">
                {s.title}
              </h3>
              <p className="mt-2 text-[13.5px] leading-[1.55] text-fg-3">{s.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
