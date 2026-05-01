import { motion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'

type Segment = {
  num: string
  name: string
  who: string
  body: string
  chips: string[]
  href: string
}

const SEGMENTS: Segment[] = [
  {
    num: '01',
    name: 'Students',
    who: 'Engineering · BCA · MCA · BSc · Diploma',
    body:
      'A guided runway across your degree — industrial training, internships, certifications and structured placement preparation, sequenced by stream and year.',
    chips: ['Industrial training', 'Internships', 'Coding bootcamps', 'Certifications'],
    href: '#',
  },
  {
    num: '02',
    name: 'Colleges',
    who: 'Engineering & polytechnic institutes',
    body:
      'A single partner for the academic stack — pre-placement training, drives, faculty development, NAAC/NBA support and on-campus AI/IoT/Cloud labs.',
    chips: ['Campus training', 'Placement drives', 'NAAC / NBA', 'AI · IoT labs'],
    href: '#',
  },
  {
    num: '03',
    name: 'Schools (K-12)',
    who: 'Principals & school management',
    body:
      'NEP-aligned future-tech labs designed for Indian classrooms — with curriculum, hardware kits and teacher training that survive the school year.',
    chips: ['STEM / ATL labs', 'AI & robotics', 'Curriculum design', 'Teacher training'],
    href: '#',
  },
  {
    num: '04',
    name: 'Businesses & Startups',
    who: 'Founders, product & operations leaders',
    body:
      'Web, mobile, AI and automation work delivered by the same team that trains the engineers — scaling capability before you scale headcount.',
    chips: ['Web & mobile', 'AI solutions', 'Automation', 'Cloud infrastructure'],
    href: '#',
  },
  {
    num: '05',
    name: 'Hiring Teams',
    who: 'Talent acquisition & people operations',
    body:
      'Permanent recruitment, contract staffing, RPO and bulk drives — backed by the same students we train, so candidates arrive interview-ready.',
    chips: ['Permanent', 'Contract', 'Bulk drives', 'RPO'],
    href: '#',
  },
]

export function Audiences() {
  return (
    <section id="audiences" className="relative bg-white">
      {/* Section opener */}
      <div className="border-y border-line">
        <div className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-14">
          <div className="grid grid-cols-12 items-end gap-6">
            <div className="col-span-12 lg:col-span-7">
              <p className="eyebrow">02 / Solutions</p>
              <h2 className="mt-4 font-display text-[28px] font-semibold leading-[1.08] tracking-[-0.02em] text-fg md:text-[36px] lg:text-[40px]">
                Five audiences. One platform.
              </h2>
            </div>
            <p className="col-span-12 text-[15px] leading-[1.6] text-fg-3 lg:col-span-5">
              Each audience has its own programs and outcomes — but they
              share the same delivery DNA, the same engagement model, and a
              single team behind every conversation.
            </p>
          </div>
        </div>
      </div>

      {/* Numbered staircase list */}
      <ul className="mx-auto max-w-7xl px-5 md:px-8">
        {SEGMENTS.map((s, i) => (
          <SegmentRow key={s.num} seg={s} index={i} />
        ))}
      </ul>
    </section>
  )
}

function SegmentRow({ seg, index }: { seg: Segment; index: number }) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 6 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10%' }}
      transition={{ duration: 0.35, delay: index * 0.04 }}
      className="border-b border-line last:border-b-0"
    >
      <a
        href={seg.href}
        className="group relative grid grid-cols-12 items-start gap-x-6 gap-y-3 py-7 md:py-9"
      >
        {/* hover marker */}
        <span
          aria-hidden
          className="pointer-events-none absolute left-[-12px] top-0 h-full w-[3px] origin-top scale-y-0 bg-brand-700 transition-transform duration-200 group-hover:scale-y-100"
        />

        {/* number */}
        <span className="col-span-2 font-display text-[28px] font-semibold leading-none tracking-tight text-brand-700 md:col-span-1 md:text-[32px]">
          {seg.num}
        </span>

        {/* name + role */}
        <div className="col-span-10 md:col-span-3">
          <h3 className="font-display text-[20px] font-semibold leading-tight tracking-tight text-fg md:text-[22px]">
            {seg.name}
          </h3>
          <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.14em] text-fg-4">
            {seg.who}
          </p>
        </div>

        {/* body */}
        <p className="col-span-12 text-[14.5px] leading-[1.6] text-fg-3 md:col-span-5">
          {seg.body}
        </p>

        {/* chips + arrow */}
        <div className="col-span-12 flex items-center justify-between gap-4 md:col-span-3 md:justify-end">
          <div className="flex flex-wrap justify-end gap-1.5">
            {seg.chips.slice(0, 3).map((c) => (
              <span
                key={c}
                className="rounded-full border border-line bg-white px-2.5 py-0.5 text-[11.5px] font-medium text-fg-3 transition-colors group-hover:border-brand-200 group-hover:text-brand-700"
              >
                {c}
              </span>
            ))}
          </div>
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-line text-fg-2 transition-all duration-200 group-hover:border-brand-700 group-hover:bg-brand-700 group-hover:text-white">
            <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.25} />
          </span>
        </div>
      </a>
    </motion.li>
  )
}
