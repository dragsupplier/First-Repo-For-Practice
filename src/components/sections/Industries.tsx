import { motion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'

type Industry = {
  num: string
  name: string
  body: string
  tags: string[]
}

const INDUSTRIES: Industry[] = [
  {
    num: '01',
    name: 'Higher Education',
    body: 'Engineering, polytechnic and management institutes — placement, accreditation and on-campus tech infrastructure.',
    tags: ['Engineering', 'Polytechnic', 'MCA / MBA'],
  },
  {
    num: '02',
    name: 'K-12 Schools',
    body: 'Group schools and standalone campuses building NEP-aligned future-tech labs and AI/STEM curriculum.',
    tags: ['CBSE', 'ICSE', 'State boards', 'IB'],
  },
  {
    num: '03',
    name: 'IT & Software Services',
    body: 'Service organizations and GCCs scaling delivery teams and shipping product accelerators.',
    tags: ['Product', 'Services', 'GCC / GIC'],
  },
  {
    num: '04',
    name: 'SaaS & Startups',
    body: 'Founders shipping their first product or scaling from seed to Series B without standing up a full engineering org.',
    tags: ['Pre-seed → Series B', 'D2C', 'Vertical SaaS'],
  },
  {
    num: '05',
    name: 'BFSI',
    body: 'Banks, NBFCs and insurance — digital channels, automation and recruitment for tech and ops talent.',
    tags: ['Banks', 'NBFCs', 'Insurance', 'Capital markets'],
  },
  {
    num: '06',
    name: 'Healthcare',
    body: 'Hospital chains and diagnostics groups modernizing patient-facing software and back-office operations.',
    tags: ['Hospitals', 'Diagnostics', 'HealthTech'],
  },
  {
    num: '07',
    name: 'Manufacturing & MSME',
    body: 'Auto, industrial and MSME groups digitizing the factory floor and the offices around it.',
    tags: ['Automotive', 'Industrial', 'MSME'],
  },
  {
    num: '08',
    name: 'Retail & E-commerce',
    body: 'D2C brands and marketplaces building owned digital channels and unified data infrastructure.',
    tags: ['D2C', 'Marketplaces', 'Omnichannel'],
  },
  {
    num: '09',
    name: 'Government & PSU',
    body: 'Skill missions, training partnerships and tendered software work for public-sector programs.',
    tags: ['Skill India', 'NSDC', 'PSUs'],
  },
  {
    num: '10',
    name: 'Recruitment Agencies',
    body: 'RPO partners and search firms outsourcing technical assessment and bulk-drive operations.',
    tags: ['RPO', 'Bulk drives', 'Tech screens'],
  },
]

export function Industries() {
  return (
    <section id="industries" className="relative bg-canvas">
      {/* Section header */}
      <div className="border-y border-line bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-12 items-end gap-6 px-5 py-12 md:px-8 md:py-16">
          <div className="col-span-12 md:col-span-7">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-700">
              § Industries
            </p>
            <h2 className="mt-4 font-display text-[36px] font-semibold leading-[1.04] tracking-[-0.02em] text-fg md:text-[56px] lg:text-[64px]">
              Built for India's institutions and growing companies.
            </h2>
          </div>
          <p className="col-span-12 text-[15.5px] leading-[1.6] text-fg-3 md:col-span-5">
            From engineering colleges scaling placements to founders shipping
            their first product — our delivery teams are familiar with the
            sectors below.
          </p>
        </div>
      </div>

      {/* Editorial directory list */}
      <div className="mx-auto max-w-7xl px-5 py-6 md:px-8 md:py-10">
        <ul>
          {INDUSTRIES.map((it, i) => (
            <IndustryRow key={it.num} it={it} index={i} />
          ))}
        </ul>
      </div>
    </section>
  )
}

function IndustryRow({ it, index }: { it: Industry; index: number }) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10%' }}
      transition={{ duration: 0.35, delay: index * 0.03 }}
      className="border-b border-line"
    >
      <a
        href="#audiences"
        className="group grid grid-cols-12 items-baseline gap-4 py-7 transition-colors hover:bg-white md:gap-6 md:py-8"
      >
        <span className="col-span-2 font-mono text-[12px] font-semibold uppercase tracking-[0.18em] text-brand-700 md:col-span-1">
          {it.num}
        </span>
        <h3 className="col-span-10 font-display text-[24px] font-medium leading-[1.2] tracking-tight text-fg md:col-span-3 md:text-[28px]">
          {it.name}
        </h3>
        <p className="col-span-12 text-[14.5px] leading-[1.55] text-fg-3 md:col-span-5">
          {it.body}
        </p>
        <div className="col-span-12 flex items-center justify-between gap-4 md:col-span-3 md:justify-end">
          <span className="hidden flex-wrap justify-end gap-1.5 md:flex">
            {it.tags.slice(0, 2).map((t) => (
              <span
                key={t}
                className="rounded-full border border-line bg-white px-2.5 py-0.5 font-mono text-[10.5px] font-medium uppercase tracking-[0.14em] text-fg-3"
              >
                {t}
              </span>
            ))}
          </span>
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-line text-fg-2 transition-all duration-200 group-hover:border-brand-700 group-hover:bg-brand-700 group-hover:text-white">
            <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.25} />
          </span>
        </div>
      </a>
    </motion.li>
  )
}
