import { motion } from 'motion/react'

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

const QUOTES = [
  {
    body:
      '“Their campus training plugged a year-long gap in our placement preparation — and the platform talked to our ERP from day one.”',
    who: 'Director, Engineering College',
    where: 'Pune',
  },
  {
    body:
      '“We needed five hires and one trainable cohort. Alphinix handled both, in the same conversation.”',
    who: 'Co-founder, SaaS Startup',
    where: 'Mumbai',
  },
]

export function Trust() {
  return (
    <section id="trust" className="relative bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-ink-500">
              <span className="mr-2 inline-block h-px w-6 align-middle bg-ink-400" />
              Selected partners
            </p>
            <h2 className="mt-4 font-display text-[36px] font-bold leading-[1.02] tracking-[-0.02em] text-ink-950 md:text-[52px]">
              Institutions and teams already moving with us.
            </h2>
          </div>
          <span className="hidden font-mono text-[12px] uppercase tracking-[0.18em] text-ink-400 md:block">
            ◇ {PARTNERS.length}+ active engagements
          </span>
        </div>

        {/* Logos as design element — wordmark style, not gray strip */}
        <div className="mt-12 grid grid-cols-2 gap-x-2 gap-y-0 sm:grid-cols-3 lg:grid-cols-5">
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

        {/* Pull quotes */}
        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          {QUOTES.map((q) => (
            <figure
              key={q.who}
              className="relative rounded-2xl bg-white p-7 ring-1 ring-ink-950/[0.06] md:p-9"
            >
              <span aria-hidden className="font-display absolute right-6 top-2 text-[120px] leading-none text-ink-100">”</span>
              <blockquote className="relative font-display text-[22px] leading-[1.3] tracking-tight text-ink-950 md:text-[26px]">
                {q.body}
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3 text-[13px]">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
                <span className="font-medium text-ink-900">{q.who}</span>
                <span className="text-ink-400">·</span>
                <span className="text-ink-500">{q.where}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
