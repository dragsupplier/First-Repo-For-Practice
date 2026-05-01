import { motion } from 'motion/react'

type Pillar = { tag: string; title: string; body: string }

const PILLARS: Pillar[] = [
  {
    tag: 'Delivery',
    title: 'Everything in-house.',
    body:
      'Trainers, engineers and recruiters work under one roof. No subcontractors. No agency-of-agencies maze. The team that scopes is the team that ships.',
  },
  {
    tag: 'Accountability',
    title: 'A single point of contact.',
    body:
      'One owner per engagement, one weekly status, one number to call — and a written record at every milestone, audit-ready when you need it.',
  },
  {
    tag: 'Compounding',
    title: 'Built to keep paying back.',
    body:
      'The students we train this year become the interns next year, the engineers after that, and the alumni base that fuels every future drive.',
  },
  {
    tag: 'Local context',
    title: 'India-ready by default.',
    body:
      'Programs are designed around NEP, NAAC, NBA and ATL guidelines — and the operating realities of Indian institutions, not Western blueprints.',
  },
]

export function SignatureMoment() {
  return (
    <section id="about" className="relative bg-canvas">
      {/* Opener */}
      <div className="border-y border-line bg-white">
        <div className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-14">
          <div className="grid grid-cols-12 items-end gap-6">
            <div className="col-span-12 lg:col-span-7">
              <p className="eyebrow">06 / Why Alphinix</p>
              <h2 className="mt-4 font-display text-[28px] font-semibold leading-[1.08] tracking-[-0.02em] text-fg md:text-[36px] lg:text-[40px]">
                Quiet, accountable engagements.
              </h2>
            </div>
            <p className="col-span-12 text-[15px] leading-[1.6] text-fg-3 lg:col-span-5">
              We don't lead with logo strips and inflated stat blocks. The
              principles below are what most institutions and founders tell
              us they actually wanted from a partner.
            </p>
          </div>
        </div>
      </div>

      {/* Prose 2x2 — no cards, no borders boxing content */}
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <div className="grid grid-cols-12 gap-x-10 gap-y-10 md:gap-x-16">
          {PILLARS.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="col-span-12 border-t border-line pt-6 md:col-span-6"
            >
              <p className="eyebrow">{p.tag}</p>
              <h3 className="mt-3 font-display text-[22px] font-semibold leading-[1.2] tracking-tight text-fg md:text-[26px]">
                {p.title}
              </h3>
              <p className="mt-3 max-w-[44ch] text-[15px] leading-[1.6] text-fg-3">
                {p.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
