import { motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'

const FLOWS: { from: string; to: string; label: string }[] = [
  { from: 'Schools',    to: 'Colleges',    label: 'AI / robotics learners feed into the engineering pipeline' },
  { from: 'Colleges',   to: 'Students',    label: 'Campus training drives placement readiness' },
  { from: 'Students',   to: 'Hiring',      label: 'Pre-trained interns and permanent hires for partner companies' },
  { from: 'Businesses', to: 'Hiring',      label: 'Talent supplied at scale during product delivery' },
]

const PHASES = [
  { k: 'Train', v: 'Students & faculty' },
  { k: 'Build', v: 'Software & labs' },
  { k: 'Hire',  v: 'Permanent · contract' },
]

export function SignatureMoment() {
  return (
    <section id="about" className="relative bg-brand-950 text-white">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="grid grid-cols-12 gap-10">
          {/* Editorial pull-quote — the memory hook */}
          <div className="col-span-12 lg:col-span-7">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-200">
              § The unfair advantage
            </p>
            <h2 className="mt-5 font-display text-[40px] font-semibold leading-[1.02] tracking-[-0.025em] md:text-[68px] lg:text-[80px]">
              We're not five
              <br />
              businesses in a
              <br />
              <em className="font-medium italic text-brand-200">trench coat.</em>
            </h2>
            <p className="mt-8 max-w-xl text-[17px] leading-[1.6] text-white/75 md:text-[18px]">
              Every Alphinix segment quietly feeds the next. The student we
              train today becomes the intern your startup hires next quarter,
              builds the software your college runs, and goes back to teach
              the school down the road.
            </p>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-[14.5px] font-semibold text-brand-950 transition-colors hover:bg-brand-50"
            >
              See the full engagement model
              <ArrowRight className="h-4 w-4" strokeWidth={2.25} />
            </a>
          </div>

          {/* The loop */}
          <div className="col-span-12 lg:col-span-5">
            <div className="rounded-md border border-white/10 bg-white/[0.03] p-6 md:p-7">
              <p className="font-mono text-[10.5px] font-semibold uppercase tracking-[0.18em] text-white/55">
                The Alphinix loop
              </p>
              <ul className="mt-5 divide-y divide-white/10">
                {FLOWS.map((f, idx) => (
                  <motion.li
                    key={f.label}
                    initial={{ opacity: 0, x: 6 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-15%' }}
                    transition={{ duration: 0.35, delay: idx * 0.06 }}
                    className="flex items-center gap-3 py-3.5"
                  >
                    <Pill>{f.from}</Pill>
                    <ArrowRight className="h-3.5 w-3.5 text-brand-200" strokeWidth={2.5} />
                    <Pill>{f.to}</Pill>
                    <span className="ml-auto text-right text-[12.5px] text-white/55">
                      {f.label}
                    </span>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-6 grid grid-cols-3 divide-x divide-white/10 border-t border-white/10 pt-5 text-center">
                {PHASES.map((s) => (
                  <div key={s.k} className="px-2">
                    <p className="font-display text-[18px] font-semibold tracking-tight text-white">
                      {s.k}
                    </p>
                    <p className="mt-1 text-[11.5px] text-white/55">{s.v}</p>
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
    <span className="rounded-sm bg-white px-2 py-0.5 text-[11px] font-semibold uppercase tracking-[0.04em] text-brand-950">
      {children}
    </span>
  )
}
