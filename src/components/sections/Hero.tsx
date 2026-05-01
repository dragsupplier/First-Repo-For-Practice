import { motion } from 'motion/react'
import { ArrowRight, Phone } from 'lucide-react'

const QUICK_LINKS = [
  { label: 'For Students',    sub: 'Training & placement',     href: '#audiences' },
  { label: 'For Colleges',    sub: 'Academic operations',      href: '#audiences' },
  { label: 'For Schools',     sub: 'STEM · ATL · AI labs',     href: '#audiences' },
  { label: 'For Businesses',  sub: 'Engineering & AI',         href: '#audiences' },
  { label: 'For Hiring Teams',sub: 'Recruitment services',     href: '#audiences' },
]

export function Hero() {
  return (
    <section className="relative bg-canvas px-4 pt-6 pb-10 md:px-6 md:pt-10 md:pb-14">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="hero-mesh color-card-edge relative mx-auto max-w-[1400px] overflow-hidden rounded-2xl px-7 pt-12 pb-0 text-white md:px-14 md:pt-20"
      >
        {/* Top eyebrow row */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/65">
            <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-brand-200 align-middle" />
            Pune · Talent · Technology · Hiring
          </p>
          <p className="hidden font-mono text-[11px] uppercase tracking-[0.16em] text-white/45 md:block">
            Established 2025 — A Pune-based platform
          </p>
        </div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-12 max-w-[18ch] font-display text-[44px] font-semibold leading-[1.02] tracking-[-0.025em] text-white md:text-[68px] lg:text-[84px]"
        >
          One partner for training, technology and hiring.
        </motion.h1>

        {/* Sub-deck + CTAs row (asymmetric — NOT a 50/50 split) */}
        <div className="mt-9 flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="max-w-[44ch] text-[16px] leading-[1.6] text-white/80 md:text-[17.5px]"
          >
            Alphinix combines campus training, in-house engineering and
            recruitment under one accountable team — replacing the four or
            five vendors institutions and businesses were juggling.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.22 }}
            className="flex flex-wrap items-center gap-3"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-[14.5px] font-semibold text-brand-950 transition-colors hover:bg-brand-50"
            >
              Request a proposal
              <ArrowRight
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                strokeWidth={2.5}
              />
            </a>
            <a
              href="#audiences"
              className="inline-flex items-center gap-2 rounded-md px-5 py-3 text-[14.5px] font-semibold text-white ring-1 ring-white/25 transition-colors hover:bg-white/10"
            >
              Explore solutions
            </a>
            <a
              href="tel:+910000000000"
              className="ml-1 inline-flex items-center gap-2 text-[13.5px] font-semibold text-white/85 hover:text-white"
            >
              <Phone className="h-3.5 w-3.5" strokeWidth={2.5} />
              Speak to a consultant
            </a>
          </motion.div>
        </div>

        {/* In-card audience strip — corporate sub-nav */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.32 }}
          className="mt-14 grid grid-cols-2 border-t border-white/15 lg:grid-cols-5"
        >
          {QUICK_LINKS.map((m, i) => (
            <a
              key={m.label}
              href={m.href}
              className={`group block px-4 py-5 transition-colors hover:bg-white/[0.05] md:px-5 ${
                i !== 0 ? 'border-t border-white/15 lg:border-l lg:border-t-0' : ''
              } ${i === 1 ? 'sm:border-t-0' : ''}`}
            >
              <div className="flex items-center justify-between gap-2">
                <span className="font-display text-[14px] font-semibold tracking-tight text-white md:text-[15px]">
                  {m.label}
                </span>
                <ArrowRight
                  className="h-3.5 w-3.5 text-white/55 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-white"
                  strokeWidth={2.25}
                />
              </div>
              <p className="mt-1 text-[12px] text-white/60">{m.sub}</p>
            </a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
