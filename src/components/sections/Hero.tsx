import { motion } from 'motion/react'
import { ArrowRight, Sparkles } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-bg pt-12 pb-28 md:pt-16 md:pb-36">
      {/* Vertical light streak — central spotlight */}
      <div aria-hidden className="hero-spotlight pointer-events-none absolute inset-0 -z-10" />

      {/* Soft horizontal grid — fades to bottom */}
      <svg
        aria-hidden
        className="absolute inset-x-0 top-0 -z-10 h-full w-full opacity-[0.5]"
      >
        <defs>
          <pattern id="hero-grid" width="56" height="56" patternUnits="userSpaceOnUse">
            <path d="M 56 0 L 0 0 0 56" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
          </pattern>
          <radialGradient id="hero-fade" cx="50%" cy="0%" r="80%">
            <stop offset="0%" stopColor="black" stopOpacity="0" />
            <stop offset="100%" stopColor="black" stopOpacity="1" />
          </radialGradient>
          <mask id="hero-mask">
            <rect width="100%" height="100%" fill="url(#hero-fade)" />
          </mask>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-grid)" mask="url(#hero-mask)" />
      </svg>

      {/* Subtle bottom gradient, blends into next section */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-bg"
      />

      <div className="relative mx-auto flex max-w-5xl flex-col items-center px-5 text-center md:px-8">
        <Announcement />

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.2, 0.7, 0.2, 1] }}
          className="mt-12 font-display font-extrabold leading-[0.95] tracking-[-0.04em] text-fg text-[15vw] sm:text-[12vw] md:text-[112px] lg:text-[140px] xl:text-[168px]"
        >
          Build futures.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-7 max-w-2xl text-[16px] leading-[1.6] text-fg-2 md:text-[18px]"
        >
          Alphinix unifies student training, technology delivery and talent
          hiring on a single platform — so institutions and businesses stop
          stitching it together themselves.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.32 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#audiences"
            className="group inline-flex items-center gap-2 rounded-full bg-fg px-6 py-3.5 text-[15px] font-semibold text-bg transition-transform duration-200 hover:translate-y-[-1px]"
          >
            Explore the platform
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" strokeWidth={2.25} />
          </a>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-[15px] font-medium text-fg ring-1 ring-white/15 transition-colors hover:bg-white/[0.05] hover:ring-white/30"
          >
            Talk to us
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 flex items-center gap-2 font-mono text-[11.5px] uppercase tracking-[0.18em] text-fg-3"
        >
          <span className="h-px w-8 bg-fg-3/50" />
          Pune, India · serving institutions across the country
          <span className="h-px w-8 bg-fg-3/50" />
        </motion.p>
      </div>
    </section>
  )
}

function Announcement() {
  return (
    <motion.a
      href="#contact"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] py-1 pl-1 pr-4 text-[12.5px] backdrop-blur-md transition-colors hover:border-white/20 hover:bg-white/[0.07]"
    >
      <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-500/15 px-2.5 py-1 font-semibold text-brand-300 ring-1 ring-brand-500/30">
        <Sparkles className="h-3 w-3 text-accent-400" strokeWidth={2.25} />
        New
      </span>
      <span className="text-fg-2">2026 cohort applications now open</span>
      <span className="text-fg-3">·</span>
      <span className="inline-flex items-center gap-0.5 font-medium text-fg transition-colors group-hover:text-brand-300">
        Learn more
        <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5" strokeWidth={2.5} />
      </span>
    </motion.a>
  )
}
