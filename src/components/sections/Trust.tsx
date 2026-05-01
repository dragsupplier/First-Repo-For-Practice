import { motion } from 'motion/react'
import { ArrowUpRight, Quote } from 'lucide-react'

const PARTNERS = [
  'Pune Institute of Tech',
  'Sinhgad Polytechnic',
  'Indus Coding Hub',
  'Aether Labs',
  'NebulaWorks',
  'Briteline Schools',
  'Northpoint HR',
  'Quantum BPO',
  'Vyom Robotics',
  'Helix Cloud',
]

type CaseStudy = {
  segment: string
  headline: string
  metric: string
  metricLabel: string
  body: string
  who: string
}

const CASES: CaseStudy[] = [
  {
    segment: 'Colleges',
    headline: 'A 3-college consortium shipped placements 41% faster.',
    metric: '41%',
    metricLabel: 'faster placement TAT',
    body:
      'Combined campus training, drives and pre-placement coaching across three Pune engineering colleges in a single rolling cohort.',
    who: 'Director of Placements',
  },
  {
    segment: 'Businesses',
    headline: 'A SaaS startup built and hired in the same quarter.',
    metric: '5+1',
    metricLabel: 'engineers hired alongside MVP',
    body:
      'We delivered the MVP web + mobile app while running a parallel hiring pipeline. The team that shipped became the team they hired.',
    who: 'Co-founder, SaaS',
  },
  {
    segment: 'Schools',
    headline: 'A K-12 group rolled out AI labs to four campuses.',
    metric: '4',
    metricLabel: 'campuses, single sequence',
    body:
      'STEM/ATL labs, hardware kits, AI/robotics curriculum and teacher training delivered on a four-month rollout — with NEP 2020 alignment built in.',
    who: 'Group Principal',
  },
]

export function Trust() {
  return (
    <section id="trust" className="relative bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        {/* Header */}
        <div className="grid grid-cols-1 items-end gap-6 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-ink-500">
              <span className="mr-2 inline-block h-px w-6 align-middle bg-ink-400" />
              Selected work
            </p>
            <h2 className="mt-4 font-display text-[40px] font-bold leading-[1.02] tracking-[-0.02em] text-ink-950 md:text-[60px] lg:text-[68px]">
              Institutions and teams
              <br />
              already moving with us.
            </h2>
          </div>
          <p className="text-[15.5px] leading-[1.55] text-ink-600 md:col-span-5 md:text-[16.5px]">
            A small selection of engagements across colleges, schools, startups
            and hiring desks. The pattern is always the same — clear scope,
            in-house delivery, measurable outcome.
          </p>
        </div>

        {/* Case studies */}
        <div className="mt-14 grid grid-cols-1 gap-4 md:mt-16 lg:grid-cols-3">
          {CASES.map((c, i) => (
            <CaseCard key={c.headline} c={c} index={i} />
          ))}
        </div>

        {/* Wordmark grid */}
        <div className="mt-20 md:mt-24">
          <div className="flex items-center justify-between">
            <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-ink-500">
              Trusted across {PARTNERS.length}+ engagements
            </p>
            <span className="hidden font-mono text-[11.5px] uppercase tracking-[0.18em] text-ink-400 md:inline">
              ◇ Active partners
            </span>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-x-2 gap-y-0 sm:grid-cols-3 lg:grid-cols-5">
            {PARTNERS.map((p, idx) => (
              <motion.div
                key={p}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10%' }}
                transition={{ duration: 0.4, delay: idx * 0.04 }}
                className={`group relative flex items-center justify-center border-ink-200 px-4 py-7 text-center transition-colors ${
                  idx % 5 !== 0 ? 'border-l' : ''
                } ${idx >= 5 ? 'border-t' : ''}`}
              >
                <span className="font-display text-[18px] font-semibold tracking-tight text-ink-700 transition-colors group-hover:text-ink-950">
                  {p}
                </span>
                <span className="absolute inset-x-4 bottom-2 h-px origin-left scale-x-0 bg-accent-500 transition-transform duration-300 group-hover:scale-x-100" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function CaseCard({ c, index }: { c: CaseStudy; index: number }) {
  return (
    <motion.a
      href="#"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10%' }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className="group relative flex flex-col overflow-hidden rounded-2xl bg-white p-7 ring-1 ring-ink-950/[0.06] transition-shadow duration-300 hover:shadow-[0_24px_60px_-24px_rgba(11,13,18,0.3)] md:p-8"
    >
      <div className="flex items-center justify-between">
        <span className="rounded-full bg-ink-100 px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-700 ring-1 ring-ink-200">
          {c.segment}
        </span>
        <span className="grid h-9 w-9 place-items-center rounded-full bg-ink-950 text-paper transition-transform duration-300 group-hover:rotate-[20deg]">
          <ArrowUpRight className="h-4 w-4" strokeWidth={2.25} />
        </span>
      </div>

      <Quote className="mt-7 h-5 w-5 text-accent-500" strokeWidth={2.25} />
      <h3 className="mt-3 font-display text-[22px] font-bold leading-[1.2] tracking-tight text-ink-950 md:text-[24px]">
        {c.headline}
      </h3>

      <p className="mt-3 text-[14px] leading-[1.55] text-ink-600">{c.body}</p>

      <div className="mt-7 flex items-end justify-between border-t border-ink-200 pt-5">
        <div>
          <span className="font-display text-[36px] font-bold leading-none tracking-tight text-brand-700">
            {c.metric}
          </span>
          <p className="mt-1 text-[12px] uppercase tracking-[0.14em] text-ink-500">
            {c.metricLabel}
          </p>
        </div>
        <p className="text-right text-[12px] text-ink-500">— {c.who}</p>
      </div>
    </motion.a>
  )
}
