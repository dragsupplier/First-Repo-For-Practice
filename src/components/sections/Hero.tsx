import { motion } from 'motion/react'
import { ArrowRight, Phone } from 'lucide-react'

const AUDIENCE_STRIP: { label: string; sub: string }[] = [
  { label: 'Students',     sub: 'Training & placement' },
  { label: 'Colleges',     sub: 'Academic operations' },
  { label: 'Schools',      sub: 'STEM · ATL · AI labs' },
  { label: 'Businesses',   sub: 'Engineering & AI' },
  { label: 'Hiring Teams', sub: 'Recruitment services' },
]

export function Hero() {
  return (
    <section className="relative bg-white">
      <div className="mx-auto max-w-7xl px-5 pt-14 pb-12 md:px-8 md:pt-20 md:pb-16">
        {/* Section number + tiny rule */}
        <div className="flex items-center gap-3">
          <span className="kicker">01 — Introduction</span>
          <span className="h-px flex-1 bg-line" />
        </div>

        {/* Big editorial headline */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="mt-10 max-w-[16ch] font-display text-[44px] font-semibold leading-[1.02] tracking-[-0.025em] text-fg sm:text-[56px] md:mt-14 md:text-[72px] lg:text-[80px]"
        >
          One partner for student training, technology delivery and talent hiring.
        </motion.h1>

        {/* Deck + CTAs in editorial row (NOT 50/50 — deck takes 7 cols, CTAs flow right) */}
        <div className="mt-10 grid grid-cols-12 gap-x-8 gap-y-6">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="col-span-12 max-w-[58ch] text-[16px] leading-[1.65] text-fg-3 md:col-span-7 md:text-[18px]"
          >
            Alphinix is a Pune-based partner that combines campus training,
            in-house engineering and recruitment under one accountable
            team — replacing the four or five vendors institutions and
            businesses were juggling.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="col-span-12 flex flex-wrap items-center gap-3 md:col-span-5 md:justify-end"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-md bg-brand-700 px-5 py-3 text-[14.5px] font-semibold text-white transition-colors hover:bg-brand-800"
            >
              Request a proposal
              <ArrowRight
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                strokeWidth={2.5}
              />
            </a>
            <a
              href="tel:+910000000000"
              className="inline-flex items-center gap-2 text-[13.5px] font-semibold text-fg-2 hover:text-fg"
            >
              <Phone className="h-3.5 w-3.5" strokeWidth={2.5} />
              Speak to a consultant
            </a>
          </motion.div>
        </div>

        {/* Audience strip — promoted, full-width, the hero asset */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.55, delay: 0.32 }}
          className="mt-16 border-t border-line pt-2 md:mt-20"
        >
          <div className="flex items-center justify-between pb-3">
            <span className="kicker">Who we serve</span>
            <span className="hidden font-mono text-[10.5px] uppercase tracking-[0.14em] text-fg-4 md:inline">
              5 audiences · 1 platform
            </span>
          </div>
          <div className="grid grid-cols-2 border-t border-line lg:grid-cols-5">
            {AUDIENCE_STRIP.map((m, i) => (
              <a
                key={m.label}
                href="#audiences"
                className={`group block py-6 transition-colors hover:bg-canvas md:py-7 ${
                  i !== 0 ? 'border-t border-line lg:border-l lg:border-t-0' : ''
                } ${i === 1 ? 'sm:border-t-0' : ''}`}
              >
                <div className="flex items-center justify-between gap-2 px-1 lg:px-5">
                  <span className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-fg-4">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <ArrowRight
                    className="h-3.5 w-3.5 text-fg-4 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-brand-700"
                    strokeWidth={2.25}
                  />
                </div>
                <p className="mt-3 px-1 font-display text-[18px] font-semibold leading-tight tracking-tight text-fg group-hover:text-brand-700 md:px-5 md:text-[20px]">
                  {m.label}
                </p>
                <p className="mt-1 px-1 text-[12.5px] text-fg-4 md:px-5">{m.sub}</p>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
