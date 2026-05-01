import { motion } from 'motion/react'
import { ArrowRight, Phone } from 'lucide-react'

const SEGMENT_STRIP = [
  'Students',
  'Colleges',
  'Schools',
  'Businesses',
  'Hiring teams',
]

export function Hero() {
  return (
    <section className="relative bg-white">
      {/* Generous editorial container */}
      <div className="mx-auto max-w-7xl px-5 pt-14 pb-10 md:px-8 md:pt-20 md:pb-14">
        {/* Eyebrow / origin marker */}
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="grid grid-cols-12 items-baseline gap-6"
        >
          <div className="col-span-12 flex flex-wrap items-center gap-3 md:col-span-8">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-2.5 py-1 font-mono text-[10.5px] font-semibold uppercase tracking-[0.16em] text-brand-700 ring-1 ring-brand-100">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-700" />
              Pune, India · est. 2025
            </span>
            <span className="text-fg-4">·</span>
            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-fg-4">
              Talent &nbsp; / &nbsp; Technology &nbsp; / &nbsp; Hiring
            </span>
          </div>
          <div className="hidden md:col-span-4 md:block">
            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-fg-4">
              No. 01 — A Pune-based platform
            </span>
          </div>
        </motion.div>

        {/* Massive editorial headline */}
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-10 font-display text-[14vw] font-semibold leading-[0.92] tracking-[-0.03em] text-fg sm:text-[12vw] md:mt-14 md:text-[112px] lg:text-[136px] xl:text-[160px]"
        >
          Build futures.
        </motion.h1>

        {/* Asymmetric two-track copy block — magazine deck style */}
        <div className="mt-12 grid grid-cols-12 gap-6 md:mt-16 md:gap-10">
          {/* Left: substantive deck */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="col-span-12 md:col-span-7"
          >
            <p className="text-[18px] leading-[1.55] text-fg-2 md:text-[22px] md:leading-[1.45]">
              Alphinix is a Pune-based partner that combines{' '}
              <span className="text-fg">campus training</span>,{' '}
              <span className="text-fg">in-house engineering</span> and{' '}
              <span className="text-fg">recruitment</span> under one
              accountable team — replacing the four or five vendors
              institutions and businesses were juggling.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
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
                <span className="grid h-8 w-8 place-items-center rounded-full bg-brand-50 text-brand-700 ring-1 ring-brand-100">
                  <Phone className="h-3.5 w-3.5" strokeWidth={2.5} />
                </span>
                Speak to a consultant
              </a>
            </div>
          </motion.div>

          {/* Right: pull quote / manifesto */}
          <motion.figure
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.18 }}
            className="col-span-12 md:col-span-5 md:pl-6"
          >
            <div className="border-l-2 border-brand-700 pl-5 md:pl-7">
              <blockquote className="font-display text-[26px] font-medium italic leading-[1.18] tracking-tight text-fg md:text-[30px]">
                "We're not five businesses in a trench coat — we're five
                segments of one platform that quietly feed each other."
              </blockquote>
              <figcaption className="mt-5 font-mono text-[10.5px] uppercase tracking-[0.18em] text-fg-4">
                — Founding principle
              </figcaption>
            </div>
          </motion.figure>
        </div>

        {/* Bottom: who this page is for — editorial directory */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-16 flex flex-wrap items-center justify-between gap-6 border-t border-line pt-6 md:mt-20"
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-fg-4">
            For teams of every size
          </p>
          <ul className="flex flex-wrap items-center gap-x-1 gap-y-1.5 font-display text-[15px] font-medium tracking-tight text-fg md:text-[16px]">
            {SEGMENT_STRIP.map((s, i) => (
              <li key={s} className="inline-flex items-center gap-3">
                <a href="#audiences" className="hover:text-brand-700">
                  {s}
                </a>
                {i < SEGMENT_STRIP.length - 1 && (
                  <span className="text-fg-5">·</span>
                )}
              </li>
            ))}
          </ul>
          <a
            href="#audiences"
            className="inline-flex items-center gap-1 text-[13px] font-semibold text-brand-700 hover:text-brand-800"
          >
            Find your starting line
            <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
