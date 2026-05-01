import { motion } from 'motion/react'

type Step = { num: string; tag: string; title: string; body: string; aside: string }

const STEPS: Step[] = [
  {
    num: '01',
    tag: 'Discovery',
    title: 'Listen first.',
    body:
      'A short consultation, no decks. We map your real constraint — placement targets, hiring TAT, accreditation gaps, product timeline — before suggesting anything.',
    aside: 'Stakeholder call · goal mapping · constraint audit',
  },
  {
    num: '02',
    tag: 'Solution Design',
    title: 'Design the smallest viable scope.',
    body:
      'A written plan with sequencing and clear ownership. No vendor jargon, no sprawling line items — just what moves the needle next, and what is deliberately out of scope.',
    aside: 'Phased roadmap · owner per workstream · success metrics',
  },
  {
    num: '03',
    tag: 'Delivery',
    title: 'Execute in-house.',
    body:
      'Trainers, engineers and recruiters — same brand, same standard, end to end. You get one weekly status, one number to call, no agency-of-agencies maze.',
    aside: 'In-house teams · weekly status · single point of contact',
  },
  {
    num: '04',
    tag: 'Continuous Engagement',
    title: 'Compound, year over year.',
    body:
      'The students we train this year become the interns next year and the alumni base that fuels every future drive. Your investment quietly compounds.',
    aside: 'Alumni network · year-on-year ROI · closed-loop pipeline',
  },
]

export function Approach() {
  return (
    <section id="approach" className="relative bg-white">
      {/* Section header */}
      <div className="border-y border-line bg-canvas">
        <div className="mx-auto grid max-w-7xl grid-cols-12 items-end gap-6 px-5 py-12 md:px-8 md:py-16">
          <div className="col-span-12 md:col-span-7">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-700">
              § Approach
            </p>
            <h2 className="mt-4 font-display text-[36px] font-semibold leading-[1.04] tracking-[-0.02em] text-fg md:text-[56px] lg:text-[64px]">
              No theatre. <em className="font-medium italic text-brand-700">Just the work.</em>
            </h2>
          </div>
          <p className="col-span-12 text-[15.5px] leading-[1.6] text-fg-3 md:col-span-5">
            Most education and technology vendors lose institutions in the
            sales-to-delivery handoff. We don't have one — the team that
            scopes the engagement is the team that ships it.
          </p>
        </div>
      </div>

      {/* Manifesto steps */}
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        {STEPS.map((s, i) => (
          <motion.article
            key={s.num}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.45, delay: i * 0.04 }}
            className="grid grid-cols-12 gap-6 border-b border-line py-12 last:border-b-0 md:gap-12 md:py-20"
          >
            <div className="col-span-12 md:col-span-3">
              <span className="font-display text-[60px] font-semibold leading-none text-canvas-2 md:text-[88px]">
                {s.num}
              </span>
              <p className="mt-3 font-mono text-[10.5px] font-semibold uppercase tracking-[0.18em] text-brand-700">
                {s.tag}
              </p>
            </div>
            <div className="col-span-12 md:col-span-6">
              <h3 className="font-display text-[28px] font-semibold leading-[1.1] tracking-[-0.02em] text-fg md:text-[40px] lg:text-[44px]">
                {s.title}
              </h3>
              <p className="mt-5 max-w-2xl text-[16px] leading-[1.65] text-fg-3 md:text-[17px]">
                {s.body}
              </p>
            </div>
            <div className="col-span-12 md:col-span-3 md:border-l md:border-line md:pl-6">
              <p className="font-mono text-[10.5px] font-semibold uppercase tracking-[0.18em] text-fg-4">
                What it includes
              </p>
              <p className="mt-3 text-[14px] leading-[1.6] text-fg-2">
                {s.aside}
              </p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
