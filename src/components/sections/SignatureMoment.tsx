import { motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'

const FLOWS: { from: string; to: string; label: string }[] = [
  { from: 'Schools',    to: 'Colleges',    label: 'AI / robotics learners feed into the engineering pipeline' },
  { from: 'Colleges',   to: 'Students',    label: 'Campus training drives placement readiness' },
  { from: 'Students',   to: 'Hiring',      label: 'Pre-trained interns and permanent hires for partner companies' },
  { from: 'Businesses', to: 'Hiring',      label: 'Talent supplied at scale during product delivery' },
]

export function SignatureMoment() {
  return (
    <section id="about" className="relative bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-brand-700">
              The Alphinix loop
            </p>
            <h2 className="mt-3 font-display text-[28px] font-bold leading-[1.15] tracking-[-0.02em] text-fg md:text-[40px] lg:text-[44px]">
              Five segments. One reinforcing loop.
            </h2>
            <p className="mt-5 text-[15px] leading-[1.6] text-fg-3 md:text-[15.5px]">
              Every Alphinix segment quietly feeds the next. The student we
              train today becomes the intern your startup hires next quarter,
              builds the software your college runs, and goes back to teach
              the school down the road.
            </p>
            <a
              href="#contact"
              className="mt-7 inline-flex items-center gap-1.5 rounded-md bg-brand-700 px-5 py-3 text-[14.5px] font-semibold text-white transition-colors hover:bg-brand-800"
            >
              See the full engagement model
              <ArrowRight className="h-4 w-4" strokeWidth={2.25} />
            </a>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-lg border border-line bg-canvas p-6">
              <p className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-fg-4">
                How segments reinforce each other
              </p>
              <ul className="mt-5 space-y-2.5">
                {FLOWS.map((f, idx) => (
                  <motion.li
                    key={f.label}
                    initial={{ opacity: 0, x: 6 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-10%' }}
                    transition={{ duration: 0.35, delay: idx * 0.05 }}
                    className="grid grid-cols-[auto_auto_auto_1fr] items-center gap-3 rounded-md border border-line bg-white px-4 py-3.5"
                  >
                    <Pill>{f.from}</Pill>
                    <ArrowRight className="h-3.5 w-3.5 text-brand-700" strokeWidth={2.5} />
                    <Pill>{f.to}</Pill>
                    <span className="text-right text-[13px] text-fg-3">{f.label}</span>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-5 grid grid-cols-3 divide-x divide-line border-t border-line pt-5 text-center">
                {[
                  { k: 'Train', v: 'Students & faculty' },
                  { k: 'Build', v: 'Software & labs' },
                  { k: 'Hire',  v: 'Permanent · contract' },
                ].map((s) => (
                  <div key={s.k} className="px-2">
                    <p className="font-display text-[16px] font-bold tracking-tight text-fg">{s.k}</p>
                    <p className="mt-0.5 text-[12px] text-fg-4">{s.v}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-sm bg-brand-700 px-2.5 py-1 text-[11.5px] font-semibold uppercase tracking-[0.06em] text-white">
      {children}
    </span>
  )
}
