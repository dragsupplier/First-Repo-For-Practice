import { motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'

type Format = {
  num: string
  name: string
  duration: string
  audience: string
  body: string
  includes: string[]
  flag: 'standard' | 'popular' | 'enterprise'
}

const FORMATS: Format[] = [
  {
    num: '01',
    name: 'Discovery sprint',
    duration: '1–2 weeks',
    audience: 'First-time engagements',
    body:
      'A short paid sprint to map the real constraint, surface the smallest viable scope and produce a written 90-day plan. Refundable against any subsequent engagement.',
    includes: ['Stakeholder workshops', 'Constraint audit', 'Written 90-day plan'],
    flag: 'standard',
  },
  {
    num: '02',
    name: 'Pilot programme',
    duration: '4–12 weeks',
    audience: 'Single-track engagement',
    body:
      'A focused pilot — one cohort, one drive, one product, or one lab. Designed to ship a measurable outcome within a single quarter so you can decide on scale-up.',
    includes: ['Single workstream', 'Owner per stream', 'Weekly status reviews'],
    flag: 'popular',
  },
  {
    num: '03',
    name: 'Annual partnership',
    duration: '12 months',
    audience: 'Multi-track institutions',
    body:
      'A retainer engagement spanning the full academic or fiscal year — combining training, technology and hiring tracks under one master agreement and one quarterly review cadence.',
    includes: ['Multi-track scope', 'Quarterly business reviews', 'Cohort year-on-year carry'],
    flag: 'standard',
  },
  {
    num: '04',
    name: 'Built-for-you',
    duration: 'Bespoke',
    audience: 'Enterprises & PSU partners',
    body:
      'A custom engagement scoped around your operating model — including dedicated teams, specialised SOWs, on-premise placement, and joint-IP arrangements where relevant.',
    includes: ['Dedicated delivery pod', 'Custom SOW', 'On-premise placement'],
    flag: 'enterprise',
  },
]

export function Industries() {
  return (
    <section id="industries" className="relative bg-canvas">
      {/* Section opener */}
      <div className="border-y border-line bg-white">
        <div className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-14">
          <div className="grid grid-cols-12 items-end gap-6">
            <div className="col-span-12 lg:col-span-7">
              <p className="eyebrow">04 / How to engage</p>
              <h2 className="mt-4 font-display text-[28px] font-semibold leading-[1.08] tracking-[-0.02em] text-fg md:text-[36px] lg:text-[42px]">
                Four ways to start working with us.
              </h2>
            </div>
            <p className="col-span-12 text-[15px] leading-[1.6] text-fg-3 lg:col-span-5">
              Start small with a discovery sprint, scale into a pilot, or
              commit to an annual partnership. Every format begins with the
              same conversation and the same delivery DNA.
            </p>
          </div>
        </div>
      </div>

      {/* Format pairs — 2 across desktop, alternating canvas/white surface */}
      <div className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
        <div className="grid grid-cols-1 gap-x-10 gap-y-2 md:grid-cols-2 md:gap-y-4">
          {FORMATS.map((f, i) => (
            <FormatItem key={f.num} f={f} index={i} />
          ))}
        </div>

        {/* Footer rule with note */}
        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-line pt-6 md:flex-row md:items-center">
          <p className="max-w-xl text-[13px] text-fg-4">
            Not sure which format fits? A 30-minute call usually answers
            that — we'll tell you which one we'd recommend, and why.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-brand-700 hover:text-brand-800"
          >
            Recommend a format for me
            <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} />
          </a>
        </div>
      </div>
    </section>
  )
}

function FormatItem({ f, index }: { f: Format; index: number }) {
  const flagLabel =
    f.flag === 'popular' ? 'Most chosen' : f.flag === 'enterprise' ? 'Enterprise' : 'Standard'
  const flagClass =
    f.flag === 'popular'
      ? 'bg-brand-700 text-white'
      : f.flag === 'enterprise'
        ? 'bg-fg text-white'
        : 'bg-canvas-2 text-fg-3'

  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10%' }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="grid grid-cols-12 items-start gap-x-5 border-t border-line py-8 md:py-10"
    >
      {/* Left meta column */}
      <div className="col-span-12 md:col-span-4">
        <div className="flex items-center gap-2">
          <span className="font-mono text-[12px] font-semibold uppercase tracking-[0.16em] text-brand-700">
            {f.num}
          </span>
          <span className={`rounded-sm px-2 py-0.5 text-[10.5px] font-semibold uppercase tracking-[0.12em] ${flagClass}`}>
            {flagLabel}
          </span>
        </div>
        <h3 className="mt-3 font-display text-[24px] font-semibold leading-tight tracking-tight text-fg md:text-[28px]">
          {f.name}
        </h3>
        <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.14em] text-fg-4">
          {f.duration} · {f.audience}
        </p>
      </div>

      {/* Right body */}
      <div className="col-span-12 md:col-span-8">
        <p className="text-[14.5px] leading-[1.6] text-fg-3">{f.body}</p>
        <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
          {f.includes.map((inc) => (
            <li
              key={inc}
              className="inline-flex items-center gap-1.5 text-[12.5px] text-fg-2"
            >
              <span className="h-1 w-1 rounded-full bg-brand-700" />
              {inc}
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="mt-6 inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand-700 hover:text-brand-800"
        >
          Start with this format
          <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} />
        </a>
      </div>
    </motion.article>
  )
}
