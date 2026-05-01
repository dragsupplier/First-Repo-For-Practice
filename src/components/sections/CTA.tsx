import { motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'

export function CTA() {
  return (
    <section id="contact" className="relative isolate overflow-hidden bg-paper py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15%' }}
          transition={{ duration: 0.55 }}
          className="relative overflow-hidden rounded-[28px] bg-brand-950 p-8 text-paper md:p-14"
        >
          <BackdropArt />

          <div className="relative grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-paper/60">
                Start the conversation
              </p>
              <h2 className="mt-4 font-display text-[40px] font-bold leading-[1.02] tracking-[-0.025em] md:text-[64px] lg:text-[76px]">
                Tell us where you are.
                <br />
                <span className="text-accent-500">We'll meet you there.</span>
              </h2>
              <p className="mt-5 max-w-xl text-[16px] leading-[1.6] text-paper/70 md:text-[17px]">
                Twenty minutes is all it takes to figure out which Alphinix
                door is yours. No deck. No script. Just a real conversation.
              </p>
            </div>

            <div className="flex flex-col gap-3 lg:col-span-4 lg:items-end">
              <a
                href="mailto:hello@alphinix.in"
                className="group inline-flex w-full items-center justify-between gap-3 rounded-full bg-paper px-5 py-3.5 text-[15px] font-semibold text-ink-950 transition-transform duration-300 hover:translate-y-[-1px] lg:w-auto"
              >
                Book a 20-min call
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" strokeWidth={2.25} />
              </a>
              <a
                href="mailto:hello@alphinix.in"
                className="inline-flex w-full items-center justify-between gap-3 rounded-full px-5 py-3.5 text-[15px] font-medium text-paper ring-1 ring-paper/25 transition-colors hover:bg-paper/[0.06] lg:w-auto"
              >
                hello@alphinix.in
                <ArrowRight className="h-4 w-4" strokeWidth={2.25} />
              </a>
              <p className="mt-1 text-[12.5px] text-paper/55">
                Pune · Mon–Sat · 10:00 to 18:30 IST
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function BackdropArt() {
  return (
    <svg
      aria-hidden
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 1200 500"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <radialGradient id="cta-glow" cx="80%" cy="0%" r="60%">
          <stop offset="0%" stopColor="#5b85ff" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#0a1142" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="1200" height="500" fill="url(#cta-glow)" />
      <g stroke="rgba(255,255,255,0.06)" strokeWidth="1">
        {Array.from({ length: 18 }).map((_, i) => (
          <line key={i} x1={i * 70} y1="0" x2={i * 70 - 200} y2="500" />
        ))}
      </g>
    </svg>
  )
}
