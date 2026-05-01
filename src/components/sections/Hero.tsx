import { motion } from 'motion/react'
import { ArrowRight, MapPin } from 'lucide-react'

const STAT = [
  { k: '5', v: 'audience\nsegments' },
  { k: '40+', v: 'services across\nthe stack' },
  { k: '1', v: 'platform.\nzero handoffs' },
]

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-paper bg-noise pt-10 pb-24 md:pt-16 md:pb-32">
      {/* Decorative grid */}
      <svg
        aria-hidden
        className="absolute inset-x-0 top-0 -z-10 h-[520px] w-full opacity-[0.5]"
      >
        <defs>
          <pattern id="grid" width="56" height="56" patternUnits="userSpaceOnUse">
            <path d="M 56 0 L 0 0 0 56" fill="none" stroke="rgba(11,13,18,0.06)" strokeWidth="1" />
          </pattern>
          <radialGradient id="fade" cx="50%" cy="0%" r="65%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="100%" stopColor="white" stopOpacity="1" />
          </radialGradient>
          <mask id="m"><rect width="100%" height="100%" fill="url(#fade)" /></mask>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" mask="url(#m)" />
      </svg>

      <div className="mx-auto max-w-7xl px-5 md:px-8">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-2 text-[12.5px] font-medium uppercase tracking-[0.18em] text-ink-500"
        >
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent-500" />
          <span>Pune, India</span>
          <span className="text-ink-300">/</span>
          <span>est. 2025</span>
          <span className="text-ink-300">/</span>
          <span>Talent · Technology · Hiring</span>
        </motion.div>

        {/* Asymmetric editorial hero */}
        <div className="mt-6 grid grid-cols-1 gap-10 lg:mt-8 lg:grid-cols-12 lg:gap-8">
          {/* Headline takes 8 cols */}
          <div className="lg:col-span-8">
            <h1 className="font-display font-extrabold leading-[0.92] tracking-[-0.035em] text-ink-950 text-[14vw] sm:text-[12vw] md:text-[110px] lg:text-[132px]">
              <Word delay={0.05}>Build</Word>{' '}
              <span className="inline-flex items-center">
                <Word delay={0.1}>talent.</Word>
              </span>
              <br />
              <Word delay={0.15}>Build</Word>{' '}
              <span className="relative inline-block">
                <Word delay={0.2}>tech.</Word>
                <Underline />
              </span>
              <br />
              <span className="text-brand-700">
                <Word delay={0.25}>Build</Word>{' '}
                <Word delay={0.3}>futures.</Word>
              </span>
            </h1>
          </div>

          {/* Right rail: location + intro + cta */}
          <div className="flex flex-col justify-end lg:col-span-4">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="max-w-md text-[16px] leading-[1.55] text-ink-600 lg:text-[17px]"
            >
              Alphinix is a Pune-based platform that connects{' '}
              <span className="text-ink-950">students</span>,{' '}
              <span className="text-ink-950">colleges</span>,{' '}
              <span className="text-ink-950">schools</span>,{' '}
              <span className="text-ink-950">businesses</span> and{' '}
              <span className="text-ink-950">hiring managers</span> through one
              tightly-integrated stack — so training, technology and hiring
              stop living in separate worlds.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="mt-7 flex flex-wrap items-center gap-3"
            >
              <a
                href="#audiences"
                className="group inline-flex items-center gap-2 rounded-full bg-ink-950 px-5 py-3 text-[15px] font-medium text-paper transition-transform duration-300 hover:translate-y-[-1px]"
              >
                Find your path
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-[15px] font-medium text-ink-900 ring-1 ring-ink-950/15 transition-colors hover:bg-ink-950/[0.04]"
              >
                Book a 20-min call
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-7 flex items-center gap-2 text-[13px] text-ink-500"
            >
              <MapPin className="h-4 w-4 text-brand-700" strokeWidth={2.25} />
              Headquartered in Pune, Maharashtra · Serving institutions across India
            </motion.div>
          </div>
        </div>

        {/* Statline */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.5 }}
          className="mt-16 grid grid-cols-3 divide-x divide-ink-200 border-y border-ink-200"
        >
          {STAT.map((s) => (
            <div key={s.k} className="px-4 py-6 md:px-8 md:py-8">
              <div className="font-display text-5xl font-bold tracking-tight text-ink-950 md:text-6xl">
                {s.k}
              </div>
              <p className="mt-2 whitespace-pre-line text-[13px] uppercase tracking-[0.14em] text-ink-500">
                {s.v}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function Word({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: '0.3em' }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay, ease: [0.2, 0.7, 0.2, 1] }}
      className="inline-block"
    >
      {children}
    </motion.span>
  )
}

function Underline() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 300 16"
      className="absolute -bottom-2 left-0 h-3 w-full md:-bottom-3 md:h-4"
      preserveAspectRatio="none"
    >
      <motion.path
        d="M2 10 C 60 2, 130 16, 200 8 S 290 4, 298 10"
        stroke="var(--color-accent-500)"
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.1, delay: 0.55, ease: 'easeInOut' }}
      />
    </svg>
  )
}
