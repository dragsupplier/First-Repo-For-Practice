import { motion } from 'motion/react'

type Step = { num: string; tag: string; title: string; body: string }

const STEPS: Step[] = [
  {
    num: '01',
    tag: 'Discovery',
    title: 'Listen first.',
    body:
      'A short consultation, no decks. We map your real constraint before suggesting anything.',
  },
  {
    num: '02',
    tag: 'Design',
    title: 'Smallest viable scope.',
    body:
      'A written plan with sequencing and clear ownership. No vendor jargon, no sprawling line items.',
  },
  {
    num: '03',
    tag: 'Delivery',
    title: 'In-house, end-to-end.',
    body:
      'Trainers, engineers and recruiters under one team. One weekly status, one number to call.',
  },
  {
    num: '04',
    tag: 'Compounding',
    title: 'Year-on-year ROI.',
    body:
      'Programs and platforms designed to compound — alumni, content and tooling that stays.',
  },
]

export function Approach() {
  return (
    <section id="approach" className="relative bg-white">
      {/* Section opener */}
      <div className="border-y border-line">
        <div className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-14">
          <div className="grid grid-cols-12 items-end gap-6">
            <div className="col-span-12 lg:col-span-7">
              <p className="eyebrow">05 / Approach</p>
              <h2 className="mt-4 font-display text-[28px] font-semibold leading-[1.08] tracking-[-0.02em] text-fg md:text-[36px] lg:text-[40px]">
                A predictable engagement model.
              </h2>
            </div>
            <p className="col-span-12 text-[15px] leading-[1.6] text-fg-3 lg:col-span-5">
              Most education and technology vendors lose institutions in the
              sales-to-delivery handoff. We don't have one — the team that
              scopes is the team that ships.
            </p>
          </div>
        </div>
      </div>

      {/* Zigzag timeline rail */}
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <div className="relative">
          {/* The hairline rail */}
          <div className="absolute left-0 right-0 top-1/2 hidden h-px -translate-y-1/2 bg-line lg:block" />

          <ol className="relative grid grid-cols-1 gap-y-10 lg:grid-cols-4 lg:gap-x-6">
            {STEPS.map((s, i) => (
              <StepCell key={s.num} step={s} index={i} />
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

function StepCell({ step, index }: { step: Step; index: number }) {
  const isAbove = index % 2 === 0
  return (
    <motion.li
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10%' }}
      transition={{ duration: 0.35, delay: index * 0.06 }}
      className="relative flex flex-col"
    >
      {/* Mobile: simple stacked */}
      <div className="lg:hidden">
        <span className="font-display text-[18px] font-semibold text-brand-700">{step.num}</span>
        <p className="mt-1 eyebrow">{step.tag}</p>
        <h3 className="mt-3 font-display text-[20px] font-semibold tracking-tight text-fg">
          {step.title}
        </h3>
        <p className="mt-2 text-[14.5px] leading-[1.6] text-fg-3">{step.body}</p>
      </div>

      {/* Desktop: zigzag above/below the rail */}
      <div className="hidden lg:block">
        <div className={`flex flex-col ${isAbove ? 'pb-12' : 'pt-12 order-2'}`}>
          <p className="eyebrow">{step.tag}</p>
          <h3 className="mt-2 font-display text-[20px] font-semibold leading-tight tracking-tight text-fg">
            {step.title}
          </h3>
          <p className="mt-2 max-w-[26ch] text-[14px] leading-[1.6] text-fg-3">
            {step.body}
          </p>
        </div>

        {/* The node on the rail */}
        <div className={`relative flex items-center ${isAbove ? '' : 'order-1'}`}>
          <div className="grid h-7 w-7 place-items-center rounded-full border border-line bg-white">
            <span className="font-mono text-[10.5px] font-semibold text-brand-700">{step.num}</span>
          </div>
        </div>
      </div>
    </motion.li>
  )
}
