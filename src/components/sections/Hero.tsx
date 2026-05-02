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
  Sparkles,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { TextReveal } from '@/components/ui/TextReveal'
import { MagneticButton } from '@/components/ui/MagneticButton'
import { Stagger, Rise } from '@/components/ui/Stagger'

const PLATFORM_PREVIEW = [
  { label: 'Train',    sub: 'Students & faculty',     icon: GraduationCap },
  { label: 'Build',    sub: 'Software & labs',         icon: Rocket },
  { label: 'Place',    sub: 'Permanent & contract',    icon: Users },
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
    <section id="hero" className="relative isolate overflow-hidden">
      {/* Stripe-style mesh gradient background */}
      <div aria-hidden className="stripe-mesh-light mesh-animate absolute inset-0 -z-10" />
      {/* Soft white fade towards bottom for content legibility */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-b from-transparent to-white"
      />

      <div className="mx-auto max-w-7xl px-5 pt-20 pb-20 md:px-8 md:pt-28 md:pb-28">
        {/* Centered editorial hero */}
        <div className="mx-auto max-w-5xl text-center">
          <motion.span
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/60 px-3 py-1.5 text-[12px] font-semibold text-brand-900 shadow-[0_8px_24px_-12px_rgba(11,18,32,0.18)] backdrop-blur"
          >
            <Sparkles className="h-3 w-3 text-brand-700" strokeWidth={2.25} />
            New · Talent, technology and hiring on one platform
          </motion.span>

          <h1 className="mx-auto mt-7 max-w-[20ch] font-display text-[44px] font-semibold leading-[1.02] tracking-[-0.03em] text-fg sm:text-[60px] md:text-[80px] lg:text-[96px]">
            <TextReveal text="Build talent." stagger={70} delay={0.05} as="span" />
            <br />
            <span className="text-brand-700">
              <TextReveal text="Build futures." stagger={70} delay={0.4} as="span" />
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.85 }}
            className="mx-auto mt-7 max-w-[58ch] text-[16px] leading-[1.65] text-fg-2 md:text-[18px]"
          >
            Alphinix unifies campus training, in-house engineering and
            recruitment under a single accountable team — replacing the four
            or five vendors institutions and businesses were juggling.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
            className="mt-9 flex flex-wrap items-center justify-center gap-3"
          >
            <MagneticButton
              href="#contact"
              className="group rounded-full bg-fg px-6 py-3.5 text-[14.5px] font-semibold text-white shadow-[0_12px_30px_-10px_rgba(11,18,32,0.4)] transition-colors hover:bg-brand-950"
            >
              Request a proposal
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" strokeWidth={2.5} />
            </MagneticButton>
            <a
              href="#audiences"
              className="inline-flex items-center gap-2 rounded-full bg-white/80 px-6 py-3.5 text-[14.5px] font-semibold text-fg ring-1 ring-fg/10 backdrop-blur transition-colors hover:bg-white"
            >
              Explore the platform
              <ArrowRight className="h-4 w-4" strokeWidth={2.25} />
            </a>
            <a
              href="tel:+910000000000"
              className="ml-1 inline-flex items-center gap-2 text-[13.5px] font-semibold text-fg-2 hover:text-fg"
            >
              <Phone className="h-3.5 w-3.5 text-brand-700" strokeWidth={2.5} />
              Speak to a consultant
            </a>
          </motion.div>
        </div>

        {/* Platform preview — three white glass cards floating on the mesh */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1 }}
          className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-4 md:grid-cols-3"
        >
          {PLATFORM_PREVIEW.map((p, i) => (
            <div
              key={p.label}
              className="group rounded-xl border border-white/60 bg-white/75 p-6 shadow-[0_24px_60px_-30px_rgba(11,18,32,0.25)] backdrop-blur-md transition-transform duration-300 hover:-translate-y-1 md:p-7"
            >
              <div className="flex items-center justify-between">
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-brand-700 text-white">
                  <p.icon className="h-4 w-4" strokeWidth={2} />
                </span>
                <span className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-fg-4">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <p className="mt-6 font-display text-[24px] font-semibold tracking-tight text-fg md:text-[26px]">
                {p.label}
              </p>
              <p className="mt-1.5 text-[13.5px] text-fg-3">{p.sub}</p>
              <ArrowUpRight
                className="mt-6 h-4 w-4 text-fg-4 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-brand-700"
                strokeWidth={2.25}
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Audience strip on white below the hero */}
      <div className="border-t border-line-2 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-5 md:px-8 md:py-6">
          <Stagger step={0.05} className="grid grid-cols-2 gap-x-6 gap-y-4 lg:grid-cols-5">
            {AUDIENCE_STRIP.map((m) => (
              <Rise key={m.label}>
                <a
                  href="#audiences"
                  className="group flex items-center gap-3 rounded-md px-2 py-2 transition-colors hover:bg-canvas"
                >
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-md bg-brand-50 text-brand-700 ring-1 ring-brand-100 transition-colors group-hover:bg-brand-700 group-hover:text-white">
                    <m.icon className="h-4 w-4" strokeWidth={2} />
                  </span>
                  <span className="flex flex-col">
                    <span className="font-display text-[14.5px] font-semibold tracking-tight text-fg group-hover:text-brand-700">
                      {m.label}
                    </span>
                    <span className="text-[12px] text-fg-4">{m.sub}</span>
                  </span>
                  <ArrowUpRight
                    className="ml-auto h-3.5 w-3.5 text-fg-4 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-brand-700"
                    strokeWidth={2.25}
                  />
                </a>
              </Rise>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  )
}
