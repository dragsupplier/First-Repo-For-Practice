import { motion } from 'motion/react'
import {
  ArrowRight,
  Phone,
  CheckCircle2,
  GraduationCap,
  Building2,
  School,
  Rocket,
  Users,
} from 'lucide-react'

const TRUST_POINTS = [
  'In-house delivery teams',
  'Single point of contact',
  'NEP / NAAC / NBA aligned',
]

const SEGMENT_TILES = [
  { icon: GraduationCap, label: 'Students',   sub: 'Training & placement' },
  { icon: Building2,     label: 'Colleges',   sub: 'Academic operations' },
  { icon: School,        label: 'Schools',    sub: 'STEM · ATL · AI labs' },
  { icon: Rocket,        label: 'Businesses', sub: 'Engineering & AI' },
  { icon: Users,         label: 'Hiring',     sub: 'Recruitment services' },
]

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line bg-white">
      {/* Subtle dot pattern */}
      <div aria-hidden className="hero-pattern pointer-events-none absolute inset-0 opacity-60" />
      {/* Right-side blue panel */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 bg-gradient-to-br from-canvas to-white lg:block"
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 py-14 md:px-8 md:py-20 lg:grid-cols-12 lg:gap-12">
        {/* Left — content */}
        <div className="lg:col-span-7">
          <motion.span
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-[12px] font-semibold uppercase tracking-[0.12em] text-brand-700 ring-1 ring-brand-100"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand-700" />
            Talent · Technology · Hiring
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="mt-5 font-display text-[40px] font-extrabold leading-[1.05] tracking-[-0.02em] text-fg md:text-[56px] lg:text-[64px]"
          >
            One partner for student training, <span className="text-brand-700">technology delivery</span> and talent hiring.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="mt-5 max-w-2xl text-[16px] leading-[1.65] text-fg-3 md:text-[17px]"
          >
            Alphinix is a Pune-based partner that combines campus training,
            in-house engineering and recruitment under one accountable team.
            Educational institutions, growing businesses and hiring teams use
            us to replace the four or five vendors they were juggling.
          </motion.p>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="mt-6 flex flex-wrap gap-x-6 gap-y-2"
          >
            {TRUST_POINTS.map((p) => (
              <li key={p} className="inline-flex items-center gap-2 text-[13.5px] text-fg-2">
                <CheckCircle2 className="h-4 w-4 text-brand-700" strokeWidth={2.25} />
                {p}
              </li>
            ))}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-md bg-brand-700 px-5 py-3 text-[14.5px] font-semibold text-white transition-colors hover:bg-brand-800"
            >
              Request a proposal
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" strokeWidth={2.5} />
            </a>
            <a
              href="#audiences"
              className="inline-flex items-center gap-2 rounded-md px-5 py-3 text-[14.5px] font-semibold text-fg ring-1 ring-line-2 transition-colors hover:bg-canvas"
            >
              Explore solutions
            </a>
            <a
              href="tel:+910000000000"
              className="ml-1 inline-flex items-center gap-2 text-[13.5px] font-semibold text-fg-2 hover:text-fg"
            >
              <span className="grid h-8 w-8 place-items-center rounded-full bg-brand-50 text-brand-700 ring-1 ring-brand-100">
                <Phone className="h-3.5 w-3.5" strokeWidth={2.5} />
              </span>
              Speak to a consultant
            </a>
          </motion.div>
        </div>

        {/* Right — segment tile cluster */}
        <div className="relative lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative rounded-xl border border-line bg-white p-5 shadow-[0_30px_60px_-30px_rgba(13,21,48,0.18)]"
          >
            <div className="flex items-center justify-between">
              <p className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-fg-4">
                The Alphinix platform
              </p>
              <span className="rounded-full bg-canvas-2 px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-fg-3">
                v 2026.1
              </span>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-2">
              {SEGMENT_TILES.map((t, i) => (
                <motion.div
                  key={t.label}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.05 }}
                  className={`flex items-start gap-3 rounded-md border border-line bg-white p-3.5 transition-colors hover:bg-canvas ${
                    i === SEGMENT_TILES.length - 1 ? 'col-span-2' : ''
                  }`}
                >
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-md bg-brand-700 text-white">
                    <t.icon className="h-4 w-4" strokeWidth={2.1} />
                  </span>
                  <div className="flex flex-col">
                    <span className="text-[13.5px] font-semibold text-fg">{t.label}</span>
                    <span className="text-[12px] text-fg-3">{t.sub}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-4 grid grid-cols-3 divide-x divide-line border-t border-line pt-4 text-center">
              {[
                { k: 'Train', v: 'Students & faculty' },
                { k: 'Build', v: 'Software & labs' },
                { k: 'Hire',  v: 'Permanent · contract' },
              ].map((s) => (
                <div key={s.k} className="px-2">
                  <p className="font-display text-[14px] font-bold text-fg">{s.k}</p>
                  <p className="mt-0.5 text-[11.5px] text-fg-4">{s.v}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Floating tag */}
          <motion.div
            aria-hidden
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="absolute -left-3 -top-3 hidden rounded-md bg-fg px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-white shadow-md md:block"
          >
            ISO 9001 / 27001 ready
          </motion.div>
        </div>
      </div>
    </section>
  )
}
