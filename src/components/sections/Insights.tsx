import { motion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'

type Article = {
  category: string
  title: string
  dek: string
  read: string
  date: string
}

const ARTICLES: Article[] = [
  {
    category: 'Field notes',
    title: 'Designing a placement runway that actually starts in year two.',
    dek: 'Most placement programs run as a final-year sprint. Here is how a sequenced, year-on-year plan compounds outcomes for both colleges and students.',
    read: '6 min read',
    date: 'Q3 · 2025',
  },
  {
    category: 'Curriculum',
    title: 'NEP-aligned STEM and ATL labs that survive the school year.',
    dek: 'A field perspective on hardware kits, teacher training, lab maintenance and how to roll out across multiple campuses without dropping standards.',
    read: '5 min read',
    date: 'Q3 · 2025',
  },
  {
    category: 'Engineering',
    title: 'Shipping production AI for institutions, not Silicon Valley.',
    dek: 'How we approach AI engagements for Indian institutions — privacy posture, data residency, and integration with existing ERP / LMS systems.',
    read: '8 min read',
    date: 'Q2 · 2025',
  },
]

export function Insights() {
  return (
    <section id="insights" className="relative bg-white">
      {/* Section opener */}
      <div className="border-y border-line">
        <div className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-14">
          <div className="grid grid-cols-12 items-end gap-6">
            <div className="col-span-12 lg:col-span-7">
              <p className="kicker">07 — Insights</p>
              <h2 className="mt-4 font-display text-[28px] font-semibold leading-[1.08] tracking-[-0.02em] text-fg md:text-[36px] lg:text-[44px]">
                Latest thinking from the field.
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-5">
              <p className="text-[15px] leading-[1.6] text-fg-3 md:text-[15.5px]">
                Field notes, playbooks and short briefs from the engineers,
                trainers and recruiters delivering Alphinix engagements.
              </p>
              <a
                href="#"
                className="mt-3 inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-brand-700 hover:text-brand-800"
              >
                See all writing
                <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.5} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Article row */}
      <div className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-16">
        <ul className="grid grid-cols-1 gap-x-10 gap-y-10 lg:grid-cols-3">
          {ARTICLES.map((a, i) => (
            <ArticleCard key={a.title} a={a} index={i} />
          ))}
        </ul>
      </div>
    </section>
  )
}

function ArticleCard({ a, index }: { a: Article; index: number }) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10%' }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="group flex flex-col border-t border-line pt-7"
    >
      <div className="flex items-center justify-between text-[11px]">
        <span className="rounded-sm bg-canvas px-2 py-0.5 font-mono uppercase tracking-[0.14em] text-fg-3">
          {a.category}
        </span>
        <span className="font-mono uppercase tracking-[0.14em] text-fg-4">
          {a.date}
        </span>
      </div>

      <h3 className="mt-5 font-display text-[20px] font-semibold leading-[1.25] tracking-tight text-fg transition-colors group-hover:text-brand-700 md:text-[22px]">
        {a.title}
      </h3>

      <p className="mt-3 text-[14px] leading-[1.6] text-fg-3">{a.dek}</p>

      <div className="mt-5 flex items-center justify-between border-t border-line pt-4">
        <span className="text-[12px] text-fg-4">{a.read}</span>
        <a
          href="#"
          className="inline-flex items-center gap-1 text-[12.5px] font-semibold text-brand-700 hover:text-brand-800"
        >
          Read
          <ArrowUpRight className="h-3 w-3" strokeWidth={2.5} />
        </a>
      </div>
    </motion.li>
  )
}
