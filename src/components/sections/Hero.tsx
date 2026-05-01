import { motion } from 'motion/react'
import { ArrowRight, MapPin, Sparkles } from 'lucide-react'
import { useCountUp } from '@/lib/useCountUp'

const STATS = [
  { n: 5, suffix: '', label: 'audience\nsegments' },
  { n: 40, suffix: '+', label: 'services across\nthe stack' },
  { n: 1, suffix: '', label: 'integrated\nplatform' },
  { n: 0, suffix: '%', label: 'handoff\nfriction' },
]

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-paper bg-noise pt-10 pb-20 md:pt-16 md:pb-28">
      <BackgroundGrid />
      <Aurora />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-wrap items-center gap-2 text-[12px] font-medium uppercase tracking-[0.18em] text-ink-500 md:text-[12.5px]"
        >
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-2.5 py-1 ring-1 ring-ink-200">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-500 opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent-500" />
            </span>
            Pune, India
          </span>
          <span className="text-ink-300">/</span>
          <span>Talent · Technology · Hiring</span>
          <span className="text-ink-300">/</span>
          <span>est. 2025</span>
        </motion.div>

        {/* Headline + Visual */}
        <div className="mt-6 grid grid-cols-1 gap-10 lg:mt-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <h1 className="font-display font-extrabold leading-[0.92] tracking-[-0.035em] text-ink-950 text-[14vw] sm:text-[12vw] md:text-[100px] lg:text-[120px] xl:text-[140px]">
              <Word delay={0.05}>Build</Word>{' '}
              <Word delay={0.1}>talent.</Word>
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

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="mt-8 max-w-2xl text-[16px] leading-[1.6] text-ink-600 md:text-[18px]"
            >
              Alphinix is a Pune-based platform that connects{' '}
              <Hi>students</Hi>, <Hi>colleges</Hi>, <Hi>schools</Hi>,{' '}
              <Hi>businesses</Hi> and <Hi>hiring managers</Hi> through one
              tightly-integrated stack — so training, technology and hiring
              stop living in separate worlds.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <a
                href="#audiences"
                className="group inline-flex items-center gap-2 rounded-full bg-ink-950 px-6 py-3.5 text-[15px] font-medium text-paper shadow-[0_10px_30px_-12px_rgba(11,13,18,0.4)] transition-transform duration-300 hover:translate-y-[-1px]"
              >
                Find your path
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-[15px] font-medium text-ink-900 ring-1 ring-ink-950/15 transition-colors hover:bg-ink-100"
              >
                <Sparkles className="h-4 w-4 text-accent-500" strokeWidth={2.25} />
                Book a 20-min call
              </a>
              <span className="ml-1 inline-flex items-center gap-1.5 text-[13px] text-ink-500">
                <MapPin className="h-3.5 w-3.5 text-brand-700" strokeWidth={2.25} />
                HQ in Pune · Serving institutions across India
              </span>
            </motion.div>
          </div>

          {/* Constellation visual */}
          <div className="relative lg:col-span-5">
            <Constellation />
          </div>
        </div>

        {/* Stats line */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.5 }}
          className="mt-20 grid grid-cols-2 divide-x divide-ink-200 border-y border-ink-200 md:grid-cols-4"
        >
          {STATS.map((s, i) => (
            <Stat key={s.label} {...s} delay={i * 80} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function Stat({ n, suffix, label, delay }: { n: number; suffix: string; label: string; delay: number }) {
  const { ref, value } = useCountUp(n, 1300 + delay)
  return (
    <div className="px-4 py-7 md:px-8 md:py-9">
      <span ref={ref} className="font-display text-5xl font-bold tracking-tight text-ink-950 md:text-6xl">
        {value}
        <span className="text-brand-700">{suffix}</span>
      </span>
      <p className="mt-2 whitespace-pre-line text-[12.5px] uppercase tracking-[0.14em] text-ink-500">
        {label}
      </p>
    </div>
  )
}

function Hi({ children }: { children: React.ReactNode }) {
  return <span className="text-ink-950">{children}</span>
}

function Word({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: '0.3em' }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: [0.2, 0.7, 0.2, 1] }}
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

function BackgroundGrid() {
  return (
    <svg aria-hidden className="absolute inset-x-0 top-0 -z-10 h-[640px] w-full opacity-[0.55]">
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
  )
}

function Aurora() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[700px] overflow-hidden">
      <div
        className="absolute -left-40 top-10 h-[420px] w-[480px] rounded-full opacity-[0.45]"
        style={{
          background:
            'radial-gradient(closest-side, color-mix(in oklab, var(--color-brand-500) 40%, transparent), transparent 70%)',
          filter: 'blur(40px)',
        }}
      />
      <div
        className="absolute -right-32 top-40 h-[380px] w-[420px] rounded-full opacity-[0.35]"
        style={{
          background:
            'radial-gradient(closest-side, color-mix(in oklab, var(--color-accent-500) 50%, transparent), transparent 70%)',
          filter: 'blur(50px)',
        }}
      />
    </div>
  )
}

/* ---------- Constellation: 5 audience nodes connected by lines ---------- */

const NODES = [
  { id: 'students', label: 'Students', x: 50, y: 22, big: true },
  { id: 'colleges', label: 'Colleges', x: 86, y: 42 },
  { id: 'businesses', label: 'Businesses', x: 74, y: 78 },
  { id: 'hiring', label: 'Hiring', x: 26, y: 78 },
  { id: 'schools', label: 'Schools', x: 14, y: 42 },
]

const EDGES: [string, string][] = [
  ['students', 'colleges'],
  ['colleges', 'businesses'],
  ['businesses', 'hiring'],
  ['hiring', 'schools'],
  ['schools', 'students'],
  ['students', 'businesses'],
  ['colleges', 'hiring'],
]

function Constellation() {
  const find = (id: string) => NODES.find((n) => n.id === id)!
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.3, ease: [0.2, 0.7, 0.2, 1] }}
      className="relative mx-auto aspect-square w-full max-w-[460px]"
    >
      {/* Soft glow */}
      <div
        aria-hidden
        className="absolute inset-6 rounded-full"
        style={{
          background:
            'radial-gradient(closest-side, color-mix(in oklab, var(--color-brand-500) 22%, transparent), transparent 70%)',
          filter: 'blur(20px)',
        }}
      />
      {/* Concentric rings */}
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" aria-hidden>
        {[44, 36, 28, 20].map((r, i) => (
          <circle
            key={r}
            cx="50"
            cy="50"
            r={r}
            fill="none"
            stroke="rgba(11,13,18,0.06)"
            strokeWidth={i === 0 ? 1.2 : 0.5}
            strokeDasharray={i % 2 ? '0' : '0.6 1.4'}
          />
        ))}

        {/* Edges */}
        {EDGES.map(([a, b], i) => {
          const A = find(a)
          const B = find(b)
          return (
            <motion.line
              key={`${a}-${b}`}
              x1={A.x}
              y1={A.y}
              x2={B.x}
              y2={B.y}
              stroke="url(#edgeGrad)"
              strokeWidth="0.4"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.55 + i * 0.07 }}
            />
          )
        })}

        <defs>
          <linearGradient id="edgeGrad" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="var(--color-brand-700)" stopOpacity="0.7" />
            <stop offset="100%" stopColor="var(--color-accent-500)" stopOpacity="0.6" />
          </linearGradient>
        </defs>
      </svg>

      {/* Pulsing center */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative grid place-items-center">
          <span className="absolute h-12 w-12 animate-ping rounded-full bg-brand-500/30" />
          <span className="grid h-10 w-10 place-items-center rounded-full bg-brand-950 text-paper shadow-lg ring-4 ring-paper">
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden>
              <path d="M3 20L12 4l9 16" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M7.5 14h9" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
            </svg>
          </span>
          <span className="mt-2 font-mono text-[10.5px] uppercase tracking-[0.18em] text-ink-500">
            Alphinix Core
          </span>
        </div>
      </div>

      {/* Nodes */}
      {NODES.map((n, i) => (
        <motion.div
          key={n.id}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.65 + i * 0.08, ease: [0.2, 0.7, 0.2, 1] }}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${n.x}%`, top: `${n.y}%` }}
        >
          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 4 + i * 0.4, repeat: Infinity, ease: 'easeInOut', delay: i * 0.2 }}
            className="flex flex-col items-center gap-1.5"
          >
            <span
              className={`grid place-items-center rounded-full bg-paper text-ink-950 shadow-[0_8px_30px_-12px_rgba(11,13,18,0.35)] ring-1 ring-ink-950/10 ${
                n.big ? 'h-12 w-12' : 'h-10 w-10'
              }`}
            >
              <span className={`rounded-full bg-accent-500 ${n.big ? 'h-2.5 w-2.5' : 'h-2 w-2'}`} />
            </span>
            <span className="rounded-md bg-ink-950 px-2 py-0.5 font-mono text-[10.5px] font-medium uppercase tracking-[0.14em] text-paper">
              {n.label}
            </span>
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  )
}
