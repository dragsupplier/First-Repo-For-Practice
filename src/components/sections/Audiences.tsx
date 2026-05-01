import { motion } from 'motion/react'
import {
  GraduationCap,
  Building2,
  School,
  Rocket,
  Users,
  ArrowUpRight,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

type Segment = {
  key: string
  num: string
  title: string
  who: string
  promise: string
  highlights: string[]
  icon: LucideIcon
  href: string
  span: string
  tone: 'dark' | 'light' | 'brand'
}

const SEGMENTS: Segment[] = [
  {
    key: 'students',
    num: '01',
    title: 'Students',
    who: 'Engineering · BCA · MCA · BSc · Diploma',
    promise: 'From classroom to offer letter.',
    highlights: ['Industrial training', 'Internships', 'Placement prep', 'Certifications'],
    icon: GraduationCap,
    href: '#',
    span: 'lg:col-span-7 lg:row-span-2',
    tone: 'dark',
  },
  {
    key: 'colleges',
    num: '02',
    title: 'Colleges',
    who: 'Engineering & polytechnic institutes',
    promise: 'Better placements. Stronger accreditation.',
    highlights: ['Campus training', 'NAAC / NBA support', 'AI / IoT / Cloud labs', 'LMS · ERP'],
    icon: Building2,
    href: '#',
    span: 'lg:col-span-5',
    tone: 'light',
  },
  {
    key: 'schools',
    num: '03',
    title: 'Schools (K-12)',
    who: 'Principals & school management',
    promise: 'Future-ready labs. NEP-aligned.',
    highlights: ['AI & robotics', 'STEM / ATL labs', 'Coding curriculum', 'Teacher training'],
    icon: School,
    href: '#',
    span: 'lg:col-span-5',
    tone: 'light',
  },
  {
    key: 'businesses',
    num: '04',
    title: 'Businesses & Startups',
    who: 'Founders, product & ops teams',
    promise: 'Ship faster. Scale leaner.',
    highlights: ['Web & mobile', 'AI solutions', 'Automation', 'Cloud infra'],
    icon: Rocket,
    href: '#',
    span: 'lg:col-span-7',
    tone: 'brand',
  },
  {
    key: 'hiring',
    num: '05',
    title: 'Hiring Managers',
    who: 'Companies hiring tech & non-tech talent',
    promise: 'Pre-trained talent, on demand.',
    highlights: ['Permanent recruitment', 'Contract staffing', 'Bulk drives', 'Pre-trained interns'],
    icon: Users,
    href: '#',
    span: 'lg:col-span-12',
    tone: 'light',
  },
]

export function Audiences() {
  return (
    <section id="audiences" className="relative bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeader />

        <div className="mt-12 grid grid-cols-1 gap-3 lg:grid-cols-12 lg:gap-4">
          {SEGMENTS.map((s, i) => (
            <SegmentCard key={s.key} seg={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function SectionHeader() {
  return (
    <div className="grid grid-cols-1 items-end gap-6 md:grid-cols-12">
      <div className="md:col-span-7">
        <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-ink-500">
          <span className="mr-2 inline-block h-px w-6 align-middle bg-ink-400" />
          Five doors. One platform.
        </p>
        <h2 className="mt-4 font-display text-[40px] font-bold leading-[1.02] tracking-[-0.02em] text-ink-950 md:text-[60px] lg:text-[72px]">
          Pick your <em className="not-italic text-brand-700">starting line</em>.
        </h2>
      </div>
      <p className="text-[16px] leading-[1.6] text-ink-600 md:col-span-5 md:text-[17px]">
        Alphinix doesn't shoehorn everyone into a single funnel. Each audience
        has its own room — built around the outcome that actually matters to
        them.
      </p>
    </div>
  )
}

function SegmentCard({ seg, index }: { seg: Segment; index: number }) {
  const tones = {
    dark: {
      card: 'bg-ink-950 text-paper',
      eyebrow: 'text-paper/55',
      promise: 'text-paper',
      who: 'text-paper/65',
      chip: 'bg-paper/[0.07] text-paper/85 ring-paper/10',
      iconWrap: 'bg-accent-500 text-ink-950',
      arrow: 'bg-paper text-ink-950',
    },
    light: {
      card: 'bg-white text-ink-950 ring-1 ring-ink-950/[0.06]',
      eyebrow: 'text-ink-400',
      promise: 'text-ink-950',
      who: 'text-ink-500',
      chip: 'bg-ink-100 text-ink-700 ring-ink-200',
      iconWrap: 'bg-brand-950 text-paper',
      arrow: 'bg-ink-950 text-paper',
    },
    brand: {
      card: 'bg-brand-950 text-paper',
      eyebrow: 'text-paper/55',
      promise: 'text-paper',
      who: 'text-paper/70',
      chip: 'bg-paper/[0.08] text-paper/85 ring-paper/10',
      iconWrap: 'bg-accent-500 text-ink-950',
      arrow: 'bg-accent-500 text-ink-950',
    },
  }[seg.tone]
  const Icon = seg.icon

  return (
    <motion.a
      href={seg.href}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10%' }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className={`group relative flex min-h-[220px] flex-col justify-between overflow-hidden rounded-2xl p-6 transition-shadow duration-300 hover:shadow-[0_18px_50px_-20px_rgba(11,13,18,0.35)] md:min-h-[260px] md:p-8 ${seg.span} ${tones.card}`}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className={`grid h-10 w-10 place-items-center rounded-xl ${tones.iconWrap}`}>
            <Icon className="h-[18px] w-[18px]" strokeWidth={2} />
          </span>
          <span className={`font-mono text-[12px] font-medium tracking-wider ${tones.eyebrow}`}>
            {seg.num} / {SEGMENTS.length.toString().padStart(2, '0')}
          </span>
        </div>
        <span
          className={`grid h-9 w-9 place-items-center rounded-full transition-transform duration-300 group-hover:rotate-[20deg] ${tones.arrow}`}
        >
          <ArrowUpRight className="h-4 w-4" strokeWidth={2.25} />
        </span>
      </div>

      <div>
        <p className={`text-[12.5px] font-medium uppercase tracking-[0.14em] ${tones.who}`}>
          {seg.title} · {seg.who}
        </p>
        <h3 className={`mt-2 font-display text-[28px] font-bold leading-[1.05] tracking-[-0.02em] md:text-[34px] ${tones.promise}`}>
          {seg.promise}
        </h3>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {seg.highlights.map((h) => (
            <span
              key={h}
              className={`rounded-full px-3 py-1 text-[12.5px] font-medium ring-1 ${tones.chip}`}
            >
              {h}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  )
}
