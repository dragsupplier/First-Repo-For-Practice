import { motion } from 'motion/react'
import { Quote } from 'lucide-react'

const QUOTES: { body: string; who: string; where: string }[] = [
  {
    body:
      '"Their campus training plugged a year-long gap in our placement preparation — and the platform talked to our ERP from day one."',
    who: 'Director, Engineering College',
    where: 'Pune',
  },
  {
    body:
      '"We needed engineers and a trainable cohort. Alphinix handled both, in the same conversation."',
    who: 'Co-founder, SaaS Startup',
    where: 'Mumbai',
  },
  {
    body:
      '"They picked up our STEM lab roll-out across multiple campuses without us chasing five vendors."',
    who: 'Group Principal, K-12',
    where: 'Maharashtra',
  },
]

const FOCUS = [
  { title: 'In-house delivery', body: 'Trainers, engineers and recruiters under one roof — no subcontracting.' },
  { title: 'Single point of contact', body: 'One owner per engagement, weekly status, no vendor merry-go-round.' },
  { title: 'Built for compounding', body: 'Every engagement leaves you with a stronger pipeline for the next.' },
  { title: 'India-ready', body: 'Designed around NEP, NAAC, NBA and the realities of Indian institutions.' },
]

export function Trust() {
  return (
    <section id="trust" className="relative overflow-hidden bg-bg py-24 md:py-32">
      <div className="absolute inset-0 -z-10 bg-dark-grid opacity-[0.35]" />
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid grid-cols-1 items-end gap-6 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-fg-3">
              <span className="mr-2 inline-block h-px w-6 align-middle bg-fg-4" />
              Why teams pick us
            </p>
            <h2 className="mt-4 font-display text-[40px] font-bold leading-[1.02] tracking-[-0.025em] text-fg md:text-[60px] lg:text-[68px]">
              Quiet, accountable,
              <br />
              <span className="text-brand-300">end-to-end.</span>
            </h2>
          </div>
          <p className="text-[15.5px] leading-[1.55] text-fg-2 md:col-span-5 md:text-[16.5px]">
            We don't lead with logo strips and inflated stat blocks. The
            engagement model below is what most institutions and founders tell
            us they actually wanted from a partner.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-3 md:mt-16 md:grid-cols-2 lg:grid-cols-4">
          {FOCUS.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="card-dark rounded-2xl p-6 md:p-7"
            >
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-fg-3">
                0{i + 1}
              </span>
              <h3 className="mt-4 font-display text-[20px] font-bold leading-tight tracking-tight text-fg md:text-[22px]">
                {f.title}
              </h3>
              <p className="mt-2.5 text-[14px] leading-[1.55] text-fg-2">{f.body}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-3">
          {QUOTES.map((q, i) => (
            <motion.figure
              key={q.who}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="card-dark relative rounded-2xl p-6 md:p-7"
            >
              <Quote className="h-5 w-5 text-accent-500" strokeWidth={2.25} />
              <blockquote className="mt-3 font-display text-[18px] leading-[1.4] tracking-tight text-fg md:text-[20px]">
                {q.body}
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-2 border-t border-white/10 pt-4 text-[12.5px]">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
                <span className="font-medium text-fg-2">{q.who}</span>
                <span className="text-fg-4">·</span>
                <span className="text-fg-3">{q.where}</span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
