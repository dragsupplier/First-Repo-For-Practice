import { motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'

const FLOWS = [
  { from: 'Schools', to: 'Colleges', label: 'AI / robotics learners → engineering pipeline' },
  { from: 'Colleges', to: 'Students', label: 'Campus training + placement readiness' },
  { from: 'Students', to: 'Hiring', label: 'Pre-trained interns + permanent hires' },
  { from: 'Businesses', to: 'Hiring', label: 'Talent supply at scale' },
]

export function SignatureMoment() {
  return (
    <section id="about" className="relative overflow-hidden bg-ink-950 py-28 text-paper md:py-36">
      <div className="signature-glow pointer-events-none absolute inset-0" />
      <Spark />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-paper/55">
              <span className="mr-2 inline-block h-px w-6 align-middle bg-paper/40" />
              The unfair advantage
            </p>
            <h2 className="mt-5 font-display text-[44px] font-bold leading-[1.02] tracking-[-0.025em] md:text-[68px] lg:text-[78px]">
              We're not five
              <br />
              businesses in a trench coat.
            </h2>
            <p className="mt-7 max-w-xl text-[17px] leading-[1.6] text-paper/70 md:text-[18px]">
              Every Alphinix segment quietly feeds the next. The student we
              train today becomes the intern your startup hires next quarter,
              builds the software your college runs, and goes back to teach
              the school down the road.
            </p>
            <a
              href="#contact"
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-accent-500 px-5 py-3 text-[15px] font-medium text-ink-950 transition-transform duration-300 hover:translate-y-[-1px]"
            >
              See the full loop
              <ArrowRight className="h-4 w-4" strokeWidth={2.25} />
            </a>
          </div>

          <div className="relative lg:col-span-6">
            <div className="relative rounded-2xl bg-paper/[0.03] p-6 ring-1 ring-paper/10 backdrop-blur md:p-8">
              <p className="font-mono text-[11.5px] uppercase tracking-[0.18em] text-paper/55">
                The Alphinix Loop
              </p>
              <div className="mt-5 space-y-3">
                {FLOWS.map((f, idx) => (
                  <motion.div
                    key={f.label}
                    initial={{ opacity: 0, x: 8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-15%' }}
                    transition={{ duration: 0.45, delay: idx * 0.08 }}
                    className="group flex items-center gap-3 rounded-xl bg-paper/[0.04] p-4 ring-1 ring-paper/[0.07] transition-colors hover:bg-paper/[0.07]"
                  >
                    <Pill>{f.from}</Pill>
                    <ArrowRight className="h-4 w-4 text-accent-500 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2.25} />
                    <Pill>{f.to}</Pill>
                    <span className="ml-auto hidden max-w-[260px] text-right text-[13px] text-paper/60 md:block">
                      {f.label}
                    </span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3">
                {[
                  { k: '01', v: 'Train' },
                  { k: '02', v: 'Place' },
                  { k: '03', v: 'Build' },
                ].map((s) => (
                  <div
                    key={s.k}
                    className="rounded-xl bg-paper/[0.04] p-4 ring-1 ring-paper/[0.07]"
                  >
                    <div className="font-mono text-[11px] tracking-wider text-paper/45">{s.k}</div>
                    <div className="mt-1 font-display text-[22px] font-semibold tracking-tight text-paper">
                      {s.v}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating tag */}
            <motion.div
              aria-hidden
              initial={{ opacity: 0, scale: 0.96, rotate: -2 }}
              whileInView={{ opacity: 1, scale: 1, rotate: -6 }}
              viewport={{ once: true, margin: '-20%' }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute -right-3 -top-3 hidden rounded-md bg-accent-500 px-3 py-1.5 font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-ink-950 shadow-[0_8px_30px_-10px_rgba(255,122,58,0.6)] md:block"
            >
              Closed-loop
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full bg-paper px-3 py-1 text-[12.5px] font-semibold tracking-tight text-ink-950">
      {children}
    </span>
  )
}

function Spark() {
  return (
    <svg
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-0 h-full w-full opacity-[0.18] mix-blend-screen"
    >
      <defs>
        <pattern id="dots" width="22" height="22" patternUnits="userSpaceOnUse">
          <circle cx="1.2" cy="1.2" r="1.1" fill="rgba(255,255,255,0.6)" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#dots)" />
    </svg>
  )
}
