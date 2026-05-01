import { motion } from 'motion/react'
import { ArrowRight, Phone } from 'lucide-react'

const HIGHLIGHTS = [
  { kicker: 'Train',   label: 'Students & faculty',     desc: 'Industrial training, certifications, FDPs.' },
  { kicker: 'Build',   label: 'Software & labs',         desc: 'Web, mobile, AI, automation, STEM labs.' },
  { kicker: 'Place',   label: 'Permanent & contract',    desc: 'Pre-trained candidate supply, on demand.' },
]

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Right-anchored brand colour wedge — single-hue, no rainbow */}
      <div
        aria-hidden
        className="absolute inset-y-0 right-0 -z-10 hidden w-[42%] bg-canvas lg:block"
      />
      <div
        aria-hidden
        className="absolute inset-y-0 right-0 -z-10 hidden w-[42%] lg:block"
        style={{
          background:
            'linear-gradient(180deg, rgba(29,58,165,0.04) 0%, rgba(29,58,165,0.0) 100%)',
        }}
      />

      <div className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
        {/* Anchored top — H1 + deck */}
        <div className="grid grid-cols-12 gap-x-8 gap-y-10">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="col-span-12 lg:col-span-8"
          >
            <h1 className="font-display text-[36px] font-semibold leading-[1.06] tracking-[-0.02em] text-fg sm:text-[44px] md:text-[52px]">
              One partner for student training,{' '}
              <span className="text-brand-700">technology delivery</span> and
              talent hiring.
            </h1>

            <p className="mt-6 max-w-2xl text-[16px] leading-[1.65] text-fg-3 md:text-[17px]">
              Alphinix is a Pune-based partner that combines campus training,
              in-house engineering and recruitment under one accountable
              team — replacing the four or five vendors institutions and
              businesses were juggling.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
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
                href="#audiences"
                className="inline-flex items-center gap-2 rounded-md px-5 py-3 text-[14.5px] font-semibold text-fg ring-1 ring-line-2 transition-colors hover:bg-canvas"
              >
                Explore solutions
              </a>
              <a
                href="tel:+910000000000"
                className="ml-1 inline-flex items-center gap-2 text-[13.5px] font-semibold text-fg-2 hover:text-fg"
              >
                <Phone className="h-3.5 w-3.5" strokeWidth={2.5} />
                Speak to a consultant
              </a>
            </div>
          </motion.div>

          {/* Right side — single brand-tinted index panel (4 cols, narrower than text) */}
          <motion.aside
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="col-span-12 lg:col-span-4"
          >
            <div className="relative h-full">
              <div className="rounded-md bg-brand-700 px-6 py-5 text-white">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/60">
                  At a glance
                </p>
                <p className="mt-2 font-display text-[20px] font-medium leading-tight tracking-tight">
                  Three delivery teams, one engagement.
                </p>
              </div>
              <ul className="rounded-b-md border border-t-0 border-line bg-white">
                {HIGHLIGHTS.map((h, i) => (
                  <li
                    key={h.kicker}
                    className={`px-6 py-4 ${i !== 0 ? 'border-t border-line' : ''}`}
                  >
                    <div className="flex items-baseline gap-3">
                      <span className="w-12 shrink-0 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-700">
                        {h.kicker}
                      </span>
                      <div>
                        <p className="text-[14px] font-semibold text-fg">{h.label}</p>
                        <p className="mt-0.5 text-[12.5px] leading-snug text-fg-4">{h.desc}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </motion.aside>
        </div>

        {/* In-hero audience strip (full-width below) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-14 grid grid-cols-2 border-t border-line lg:grid-cols-5"
        >
          {[
            ['Students', 'Training & placement'],
            ['Colleges', 'Academic operations'],
            ['Schools', 'STEM · ATL · AI labs'],
            ['Businesses', 'Engineering & AI'],
            ['Hiring', 'Recruitment services'],
          ].map(([label, sub], i) => (
            <a
              key={label}
              href="#audiences"
              className={`group block px-1 py-5 transition-colors hover:bg-canvas ${
                i !== 0 ? 'border-t border-line lg:border-l lg:border-t-0' : ''
              } ${i === 1 ? 'sm:border-t-0' : ''}`}
            >
              <div className="flex items-center justify-between gap-2 lg:px-5">
                <span className="font-display text-[15px] font-semibold tracking-tight text-fg group-hover:text-brand-700">
                  {label}
                </span>
                <ArrowRight
                  className="h-3.5 w-3.5 text-fg-4 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-brand-700"
                  strokeWidth={2.25}
                />
              </div>
              <p className="mt-1 text-[12.5px] text-fg-4 lg:px-5">{sub}</p>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
