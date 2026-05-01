import { motion } from 'motion/react'
import { ArrowRight, Phone } from 'lucide-react'

const META_LINKS = [
  { label: 'For Students',     sub: 'Industrial training & placement', href: '#audiences' },
  { label: 'For Colleges',     sub: 'Campus operations & accreditation', href: '#audiences' },
  { label: 'For Businesses',   sub: 'Engineering, AI, automation', href: '#audiences' },
  { label: 'For Hiring Teams', sub: 'Permanent · contract · bulk', href: '#audiences' },
]

const PANEL_ROWS = [
  { k: 'Train', v: 'Students, faculty and school teachers — through structured programs.' },
  { k: 'Build', v: 'Software, infrastructure and labs — engineered by senior in-house teams.' },
  { k: 'Place', v: 'Permanent, contract and bulk hiring — with pre-trained candidate supply.' },
]

export function Hero() {
  return (
    <section className="relative bg-white">
      <div className="mx-auto max-w-7xl px-5 pt-12 pb-14 md:px-8 md:pt-16 md:pb-20">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="eyebrow"
        >
          Pune · Training · Technology · Recruitment
        </motion.p>

        {/* Anchored 7/5 grid */}
        <div className="mt-7 grid grid-cols-12 gap-8 md:mt-10 md:gap-12">
          {/* Headline + deck + CTAs (left 7) */}
          <div className="col-span-12 lg:col-span-7">
            <motion.h1
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-display text-[36px] font-semibold leading-[1.05] tracking-[-0.02em] text-fg sm:text-[44px] md:text-[52px] lg:text-[60px]"
            >
              One partner for student training,
              <br className="hidden md:block" />{' '}
              <span className="text-brand-700">technology delivery</span> and
              <br className="hidden md:block" />{' '}
              talent hiring.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-6 max-w-2xl text-[16.5px] leading-[1.65] text-fg-3 md:text-[17.5px]"
            >
              Alphinix is a Pune-based partner that combines campus training,
              in-house engineering, and recruitment under one accountable
              team — replacing the four or five vendors institutions and
              businesses were juggling.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18 }}
              className="mt-8 flex flex-wrap items-center gap-3"
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
            </motion.div>
          </div>

          {/* Side info panel (right 5 — narrower, subordinate) */}
          <motion.aside
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="col-span-12 lg:col-span-5"
          >
            <div className="border border-line bg-canvas">
              <div className="flex items-center justify-between border-b border-line px-5 py-3">
                <p className="eyebrow">What we do</p>
                <span className="font-mono text-[10.5px] text-fg-4">Index 01 / 03</span>
              </div>
              <ul>
                {PANEL_ROWS.map((r, i) => (
                  <li
                    key={r.k}
                    className={`flex items-baseline gap-5 px-5 py-4 ${
                      i !== 0 ? 'border-t border-line' : ''
                    }`}
                  >
                    <span className="w-12 shrink-0 font-mono text-[12px] font-semibold uppercase tracking-[0.12em] text-brand-700">
                      {r.k}
                    </span>
                    <span className="text-[14px] leading-[1.55] text-fg-2">{r.v}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.aside>
        </div>

        {/* In-hero meta strip — 4 audience entries */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-14 border-t border-line"
        >
          <ul className="grid grid-cols-2 lg:grid-cols-4">
            {META_LINKS.map((m, i) => (
              <li
                key={m.label}
                className={`px-1 py-5 ${i !== 0 ? 'border-t border-line lg:border-l lg:border-t-0' : ''} ${
                  i !== 1 || 'sm:border-t-0'
                }`}
              >
                <a href={m.href} className="group block lg:px-5">
                  <div className="flex items-center justify-between">
                    <span className="font-display text-[16px] font-semibold tracking-tight text-fg group-hover:text-brand-700">
                      {m.label}
                    </span>
                    <ArrowRight
                      className="h-3.5 w-3.5 text-fg-4 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-brand-700"
                      strokeWidth={2.25}
                    />
                  </div>
                  <p className="mt-1 text-[12.5px] text-fg-4">{m.sub}</p>
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
