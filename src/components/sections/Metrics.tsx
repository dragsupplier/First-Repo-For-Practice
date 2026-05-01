import { motion } from 'motion/react'
import { useCountUp } from '@/lib/useCountUp'

type Metric = { n: number; suffix: string; label: string; sub: string }

const METRICS: Metric[] = [
  { n: 25, suffix: '+', label: 'Partner institutions', sub: 'Engineering & polytechnic colleges' },
  { n: 1200, suffix: '+', label: 'Students trained', sub: 'Across coding, AI, hardware tracks' },
  { n: 95, suffix: '%', label: 'Completion rate', sub: 'On structured training cohorts' },
  { n: 12, suffix: '', label: 'Capability domains', sub: 'From AI to NAAC accreditation' },
]

export function Metrics() {
  return (
    <section className="relative overflow-hidden bg-ink-950 py-20 text-paper md:py-24">
      <Bg />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15%' }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-end justify-between gap-6"
        >
          <div>
            <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-paper/55">
              <span className="mr-2 inline-block h-px w-6 align-middle bg-paper/40" />
              By the numbers
            </p>
            <h2 className="mt-4 font-display text-[36px] font-bold leading-[1.02] tracking-[-0.02em] md:text-[52px]">
              Quiet work, loud results.
            </h2>
          </div>
          <p className="max-w-md text-[14.5px] text-paper/70 md:text-[15.5px]">
            We measure what compounds — placements, completion, partner
            retention. Not vanity metrics.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-paper/10 ring-1 ring-paper/10 md:mt-16 md:grid-cols-4">
          {METRICS.map((m, i) => (
            <MetricCell key={m.label} m={m} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function MetricCell({ m, index }: { m: Metric; index: number }) {
  const { ref, value } = useCountUp(m.n, 1500 + index * 120)
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10%' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="bg-ink-950 p-7 md:p-9"
    >
      <span ref={ref} className="block font-display text-[64px] font-bold leading-none tracking-tight text-paper md:text-[88px]">
        {value.toLocaleString('en-IN')}
        <span className="text-accent-500">{m.suffix}</span>
      </span>
      <p className="mt-5 font-display text-[16px] font-semibold tracking-tight text-paper md:text-[17px]">
        {m.label}
      </p>
      <p className="mt-1 text-[13px] text-paper/55">{m.sub}</p>
    </motion.div>
  )
}

function Bg() {
  return (
    <svg aria-hidden className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.07]">
      <defs>
        <pattern id="metric-grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="0.6" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#metric-grid)" />
    </svg>
  )
}
