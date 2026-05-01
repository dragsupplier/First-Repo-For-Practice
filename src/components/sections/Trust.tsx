import { motion } from 'motion/react'
import { ShieldCheck, UserCheck, Layers, Globe } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

type Pillar = { icon: LucideIcon; title: string; body: string }

const PILLARS: Pillar[] = [
  {
    icon: UserCheck,
    title: 'In-house delivery',
    body: 'Trainers, engineers and recruiters under one roof — no subcontracting, no agency-of-agencies maze.',
  },
  {
    icon: ShieldCheck,
    title: 'Single accountability',
    body: 'One owner per engagement, one weekly status, one number to call. No vendor merry-go-round.',
  },
  {
    icon: Layers,
    title: 'Built to compound',
    body: 'Every engagement leaves you with stronger pipelines for the next — alumni, content, tooling that stays.',
  },
  {
    icon: Globe,
    title: 'India-ready',
    body: 'Designed around NEP, NAAC, NBA and the operating realities of Indian institutions and companies.',
  },
]

const FEATURED = {
  body:
    '"Their campus training plugged a year-long gap in our placement preparation — and the platform talked to our ERP from day one. We finally have one number to call instead of five."',
  who: 'Director · Engineering College',
  where: 'Pune',
}

const SMALL_QUOTES = [
  {
    body:
      '"We needed engineers and a trainable cohort. Alphinix handled both, in the same conversation."',
    who: 'Co-founder · SaaS Startup',
    where: 'Mumbai',
  },
  {
    body:
      '"They picked up our STEM lab roll-out across multiple campuses without us chasing five vendors."',
    who: 'Group Principal · K-12',
    where: 'Maharashtra',
  },
]

export function Trust() {
  return (
    <section id="trust" className="relative bg-canvas">
      {/* Section header */}
      <div className="border-y border-line bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-12 items-end gap-6 px-5 py-12 md:px-8 md:py-16">
          <div className="col-span-12 md:col-span-7">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-700">
              § Why Alphinix
            </p>
            <h2 className="mt-4 font-display text-[36px] font-semibold leading-[1.04] tracking-[-0.02em] text-fg md:text-[56px] lg:text-[64px]">
              Quiet, accountable engagements.
            </h2>
          </div>
          <p className="col-span-12 text-[15.5px] leading-[1.6] text-fg-3 md:col-span-5">
            We don't lead with logo strips and inflated stat blocks. The
            engagement principles below are what most institutions and
            founders tell us they actually wanted from a partner.
          </p>
        </div>
      </div>

      {/* Featured quote — full bleed */}
      <div className="border-b border-line bg-canvas">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
          <motion.figure
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-15%' }}
            transition={{ duration: 0.55 }}
            className="grid grid-cols-12 gap-8"
          >
            <div className="col-span-12 md:col-span-2">
              <span className="font-display text-[100px] font-semibold leading-none text-brand-700 md:text-[140px]">
                "
              </span>
            </div>
            <div className="col-span-12 md:col-span-10">
              <blockquote className="font-display text-[26px] font-medium leading-[1.25] tracking-[-0.015em] text-fg md:text-[40px] lg:text-[48px]">
                {FEATURED.body}
              </blockquote>
              <figcaption className="mt-7 flex items-center gap-3 border-t border-line pt-5">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-brand-700 text-white">
                  <span className="font-display text-[12px] font-semibold">DC</span>
                </span>
                <span className="flex flex-col">
                  <span className="text-[13.5px] font-semibold text-fg">{FEATURED.who}</span>
                  <span className="text-[12.5px] text-fg-4">{FEATURED.where}</span>
                </span>
              </figcaption>
            </div>
          </motion.figure>
        </div>
      </div>

      {/* Pillars + small quotes */}
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-12 lg:col-span-7">
            <p className="font-mono text-[10.5px] font-semibold uppercase tracking-[0.18em] text-brand-700">
              Engagement principles
            </p>
            <ul className="mt-6 grid grid-cols-1 gap-x-8 gap-y-1 sm:grid-cols-2">
              {PILLARS.map((p, i) => (
                <motion.li
                  key={p.title}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-10%' }}
                  transition={{ duration: 0.35, delay: i * 0.05 }}
                  className="border-t border-line py-6"
                >
                  <div className="flex items-center gap-3">
                    <span className="grid h-9 w-9 place-items-center rounded-md bg-brand-50 text-brand-700 ring-1 ring-brand-100">
                      <p.icon className="h-[16px] w-[16px]" strokeWidth={2} />
                    </span>
                    <h3 className="font-display text-[18px] font-medium tracking-tight text-fg md:text-[20px]">
                      {p.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-[13.5px] leading-[1.55] text-fg-3">{p.body}</p>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="col-span-12 lg:col-span-5">
            <p className="font-mono text-[10.5px] font-semibold uppercase tracking-[0.18em] text-brand-700">
              From the field
            </p>
            <div className="mt-6 space-y-4">
              {SMALL_QUOTES.map((q, i) => (
                <motion.figure
                  key={q.who}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-10%' }}
                  transition={{ duration: 0.35, delay: i * 0.05 }}
                  className="rounded-md border border-line bg-white p-6"
                >
                  <blockquote className="font-display text-[16px] leading-[1.45] tracking-tight text-fg md:text-[17px]">
                    {q.body}
                  </blockquote>
                  <figcaption className="mt-4 border-t border-line pt-3 text-[12.5px]">
                    <span className="font-semibold text-fg-2">{q.who}</span>
                    <span className="text-fg-4"> · {q.where}</span>
                  </figcaption>
                </motion.figure>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
