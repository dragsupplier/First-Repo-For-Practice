import { motion } from 'motion/react'
import { Quote, ShieldCheck, UserCheck, Layers, Globe } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

type Pillar = { icon: LucideIcon; title: string; body: string }

const PILLARS: Pillar[] = [
  {
    icon: UserCheck,
    title: 'In-house delivery',
    body: 'Trainers, engineers and recruiters under one roof — no subcontracting.',
  },
  {
    icon: ShieldCheck,
    title: 'Single accountability',
    body: 'One owner per engagement, weekly status, no vendor merry-go-round.',
  },
  {
    icon: Layers,
    title: 'Built to compound',
    body: 'Every engagement leaves you with stronger pipelines for the next.',
  },
  {
    icon: Globe,
    title: 'India-ready',
    body: 'Designed around NEP, NAAC, NBA and the operating realities of Indian institutions.',
  },
]

const QUOTES: { body: string; who: string; where: string }[] = [
  {
    body:
      '"Their campus training plugged a year-long gap in our placement preparation — and the platform talked to our ERP from day one."',
    who: 'Director · Engineering College',
    where: 'Pune',
  },
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
    <section id="trust" className="relative bg-canvas py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid grid-cols-1 items-end gap-5 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-brand-700">
              Why Alphinix
            </p>
            <h2 className="mt-3 font-display text-[28px] font-bold leading-[1.15] tracking-[-0.02em] text-fg md:text-[40px] lg:text-[44px]">
              Quiet, accountable engagements.
            </h2>
          </div>
          <p className="text-[15px] leading-[1.6] text-fg-3 md:col-span-5 md:text-[15.5px]">
            We don't lead with logo strips and inflated stat blocks. The
            engagement model below is what most institutions and founders tell
            us they actually wanted from a partner.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-3 md:mt-12 md:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-lg border border-line bg-white p-5"
            >
              <span className="grid h-10 w-10 place-items-center rounded-md bg-brand-50 text-brand-700 ring-1 ring-brand-100">
                <p.icon className="h-[18px] w-[18px]" strokeWidth={2} />
              </span>
              <h3 className="mt-4 font-display text-[16px] font-bold tracking-tight text-fg md:text-[17px]">
                {p.title}
              </h3>
              <p className="mt-1.5 text-[13.5px] leading-[1.55] text-fg-3">{p.body}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-3 md:grid-cols-3">
          {QUOTES.map((q, i) => (
            <motion.figure
              key={q.who}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-lg border border-line bg-white p-6"
            >
              <Quote className="h-4 w-4 text-brand-700" strokeWidth={2.25} />
              <blockquote className="mt-3 font-display text-[16px] leading-[1.45] tracking-tight text-fg md:text-[17px]">
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
    </section>
  )
}
