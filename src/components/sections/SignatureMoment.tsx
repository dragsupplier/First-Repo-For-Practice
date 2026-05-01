import { motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'

type Pillar = { tag: string; title: string; body: string }

const PILLARS: Pillar[] = [
  {
    tag: 'Delivery',
    title: 'Everything in-house.',
    body:
      'Trainers, engineers and recruiters work under one roof. No subcontractors. The team that scopes is the team that ships.',
  },
  {
    tag: 'Accountability',
    title: 'A single point of contact.',
    body:
      'One owner per engagement, one weekly status, one number to call — and a written record at every milestone.',
  },
  {
    tag: 'Compounding',
    title: 'Built to keep paying back.',
    body:
      'The students we train this year become next year\'s interns and the alumni base that fuels every future drive.',
  },
  {
    tag: 'Local context',
    title: 'India-ready by default.',
    body:
      'Programs are designed around NEP, NAAC, NBA and ATL guidelines — not Western blueprints retrofitted.',
  },
]

export function SignatureMoment() {
  return (
    <section id="about" className="relative overflow-hidden bg-canvas">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        {/* Featured manifesto — asymmetric, color-anchored */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15%' }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-12 gap-x-10 gap-y-10"
        >
          {/* Left meta */}
          <div className="col-span-12 lg:col-span-4">
            <p className="eyebrow">06 / Why Alphinix</p>
            <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.14em] text-brand-700">
              The founding principle
            </p>
            <h2 className="mt-3 font-display text-[28px] font-semibold leading-[1.08] tracking-[-0.02em] text-fg md:text-[34px] lg:text-[38px]">
              We're not five businesses in a trench coat.
            </h2>
            <p className="mt-5 text-[14.5px] leading-[1.65] text-fg-3">
              We are five segments of one platform — quietly feeding each
              other so every engagement compounds across cohorts, products
              and partners.
            </p>
            <a
              href="#contact"
              className="mt-7 inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-brand-700 hover:text-brand-800"
            >
              See the engagement model
              <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} />
            </a>
          </div>

          {/* Right pillar grid */}
          <div className="col-span-12 lg:col-span-8">
            <div className="grid grid-cols-1 gap-x-10 gap-y-0 md:grid-cols-2">
              {PILLARS.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-10%' }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="border-t border-line py-7 md:py-8"
                >
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-[12px] font-semibold uppercase tracking-[0.16em] text-brand-700">
                      0{i + 1}
                    </span>
                    <h3 className="font-display text-[18px] font-semibold tracking-tight text-fg md:text-[20px]">
                      {p.title}
                    </h3>
                  </div>
                  <p className="mt-3 max-w-[40ch] pl-7 text-[14px] leading-[1.6] text-fg-3">
                    {p.body}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
