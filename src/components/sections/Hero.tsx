import { motion } from 'motion/react'
import {
  ArrowRight,
  Phone,
  GraduationCap,
  Building2,
  School,
  Rocket,
  Users,
  ArrowUpRight,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { TextReveal } from '@/components/ui/TextReveal'
import { MagneticButton } from '@/components/ui/MagneticButton'
import { Stagger, Rise } from '@/components/ui/Stagger'

const TRIAD = [
  { kicker: 'Train', label: 'Students & faculty', tone: 'brand' as const },
  { kicker: 'Build', label: 'Software & labs',     tone: 'ink' as const },
  { kicker: 'Place', label: 'Permanent & contract', tone: 'canvas' as const },
]

const AUDIENCE_STRIP: { label: string; sub: string; icon: LucideIcon }[] = [
  { label: 'Students',     sub: 'Training & placement',     icon: GraduationCap },
  { label: 'Colleges',     sub: 'Academic operations',      icon: Building2 },
  { label: 'Schools',      sub: 'STEM · ATL · AI labs',     icon: School },
  { label: 'Businesses',   sub: 'Engineering & AI',         icon: Rocket },
  { label: 'Hiring Teams', sub: 'Recruitment services',     icon: Users },
]

export function Hero() {
  return (
    <section id="hero" className="relative bg-white">
      {/* Top — centered hero text */}
      <div className="mx-auto max-w-5xl px-5 pt-20 pb-12 text-center md:px-8 md:pt-28 md:pb-14">
        <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-[12px] font-semibold text-brand-700 ring-1 ring-brand-200">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-700 opacity-60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand-700" />
          </span>
          Pune · Talent · Technology · Hiring
        </span>

        <h1 className="mx-auto mt-7 max-w-[20ch] font-display text-[44px] font-semibold leading-[1.04] tracking-[-0.025em] text-fg sm:text-[56px] md:text-[68px] lg:text-[76px]">
          <TextReveal text="One partner." stagger={70} delay={0.05} />{' '}
          <span className="text-brand-700">
            <TextReveal text="One platform." stagger={70} delay={0.35} />
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mx-auto mt-6 max-w-[58ch] text-[16px] leading-[1.65] text-fg-3 md:text-[17.5px]"
        >
          Alphinix combines campus training, in-house engineering and
          recruitment under a single accountable team — replacing the four
          or five vendors institutions and businesses were juggling.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.85 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
        >
          <MagneticButton
            href="#contact"
            className="group rounded-md bg-brand-700 px-6 py-3.5 text-[14.5px] font-semibold text-white shadow-[0_10px_30px_-10px_rgba(29,58,165,0.55)] transition-colors hover:bg-brand-800"
          >
            Request a proposal
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" strokeWidth={2.5} />
          </MagneticButton>
          <a
            href="tel:+910000000000"
            className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-3.5 text-[14.5px] font-semibold text-fg ring-1 ring-line-2 transition-colors hover:bg-canvas"
          >
            <Phone className="h-3.5 w-3.5 text-brand-700" strokeWidth={2.5} />
            Speak to a consultant
          </a>
        </motion.div>
      </div>

      {/* Bold horizontal triad — visual anchor, no drawn shapes, full-bleed feel inside container */}
      <div className="mx-auto max-w-7xl px-5 pb-16 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.95 }}
          className="grid grid-cols-1 overflow-hidden rounded-lg shadow-[0_30px_70px_-30px_rgba(11,18,32,0.18)] md:grid-cols-3"
        >
          {TRIAD.map((t) => {
            const styles =
              t.tone === 'brand'
                ? 'bg-brand-700 text-white'
                : t.tone === 'ink'
                  ? 'bg-fg text-white'
                  : 'bg-canvas-2 text-fg ring-1 ring-line-2 ring-inset'
            return (
              <div
                key={t.kicker}
                className={`flex items-end justify-between gap-6 px-7 py-8 md:px-9 md:py-10 ${styles}`}
              >
                <div>
                  <p
                    className={`text-[11px] font-semibold uppercase tracking-[0.18em] ${
                      t.tone === 'canvas' ? 'text-brand-700' : 'text-white/70'
                    }`}
                  >
                    {t.kicker}
                  </p>
                  <p className={`mt-3 font-display text-[20px] font-semibold tracking-tight md:text-[22px]`}>
                    {t.label}
                  </p>
                </div>
                <ArrowUpRight
                  className={`h-5 w-5 ${t.tone === 'canvas' ? 'text-fg-3' : 'text-white/55'}`}
                  strokeWidth={2}
                />
              </div>
            )
          })}
        </motion.div>
      </div>

      {/* Audience strip with stagger reveal */}
      <div className="mx-auto max-w-7xl px-5 pb-16 md:px-8 md:pb-20">
        <div className="border-t border-line-2">
          <Stagger step={0.05} className="grid grid-cols-2 lg:grid-cols-5">
            {AUDIENCE_STRIP.map((m, i) => (
              <Rise
                key={m.label}
                className={`relative ${
                  i !== 0 ? 'border-t border-line-2 lg:border-l lg:border-t-0' : ''
                } ${i === 1 ? 'sm:border-t-0' : ''}`}
              >
                <a
                  href="#audiences"
                  className="group block px-4 py-6 transition-colors hover:bg-canvas md:px-6 md:py-7"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-md bg-brand-50 text-brand-700 ring-1 ring-brand-100 transition-colors group-hover:bg-brand-700 group-hover:text-white">
                    <m.icon className="h-4 w-4" strokeWidth={2} />
                  </span>
                  <p className="mt-5 font-display text-[18px] font-semibold leading-tight tracking-tight text-fg group-hover:text-brand-700 md:text-[19px]">
                    {m.label}
                  </p>
                  <p className="mt-1 text-[12.5px] text-fg-4">{m.sub}</p>
                  <div className="mt-5 flex items-center justify-between border-t border-line pt-3">
                    <span className="text-[11.5px] font-medium text-fg-3 group-hover:text-brand-700">
                      Explore
                    </span>
                    <ArrowUpRight
                      className="h-3.5 w-3.5 text-fg-4 transition-all duration-300 group-hover:translate-x-0.5 group-hover:rotate-12 group-hover:text-brand-700"
                      strokeWidth={2.25}
                    />
                  </div>
                </a>
              </Rise>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  )
}
