import { motion } from 'motion/react'
import {
  GraduationCap,
  Building2,
  School,
  Rocket,
  Users,
  ArrowUpRight,
  CheckCircle2,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

type Segment = {
  key: string
  num: string
  title: string
  who: string
  promise: string
  body: string
  services: string[]
  outcome: string
  icon: LucideIcon
  href: string
  accent: string
  tone: 'paper' | 'ink' | 'brand'
}

const SEGMENTS: Segment[] = [
  {
    key: 'students',
    num: '01',
    title: 'Students',
    who: 'Engineering · BCA · MCA · BSc · Diploma',
    promise: 'From classroom to offer letter.',
    body:
      'A guided runway for the next four years — industrial training, internships, certifications, coding programs and placement prep, sequenced by year and stream.',
    services: [
      'Industrial training',
      'Internship placement',
      'Coding bootcamps',
      'Certifications',
      'Career guidance',
      'Skill development',
    ],
    outcome: 'Industry-ready by final year',
    icon: GraduationCap,
    href: '#',
    accent: 'var(--color-accent-500)',
    tone: 'paper',
  },
  {
    key: 'colleges',
    num: '02',
    title: 'Colleges',
    who: 'Engineering & polytechnic institutes',
    promise: 'Better placements. Stronger accreditation.',
    body:
      'A single partner for the full academic stack — pre-placement training, drives, FDPs, NAAC/NBA support and on-campus AI/IoT/Cloud labs.',
    services: [
      'Campus training',
      'Placement drives',
      'NAAC / NBA support',
      'AI · IoT · Cloud labs',
      'Faculty Development',
      'LMS / ERP systems',
    ],
    outcome: 'Year-on-year placement growth',
    icon: Building2,
    href: '#',
    accent: '#5b85ff',
    tone: 'ink',
  },
  {
    key: 'schools',
    num: '03',
    title: 'Schools (K-12)',
    who: 'Principals & school management',
    promise: 'Future-ready labs. NEP-aligned.',
    body:
      'AI, robotics, IoT and STEM/ATL labs designed for Indian classrooms — with curriculum, kits, and teacher training that survive the school year.',
    services: [
      'AI & robotics',
      'STEM / ATL labs',
      'Coding curriculum',
      'IoT lab setup',
      'Hardware kits',
      'Teacher training',
    ],
    outcome: 'NEP 2020 compliance + parent trust',
    icon: School,
    href: '#',
    accent: 'var(--color-accent-500)',
    tone: 'paper',
  },
  {
    key: 'businesses',
    num: '04',
    title: 'Businesses & Startups',
    who: 'Founders, product & ops teams',
    promise: 'Ship faster. Scale leaner.',
    body:
      'Web, mobile, AI and automation work delivered by a team that also trains the engineers — so you get product velocity without the full-time payroll.',
    services: [
      'Web development',
      'Mobile apps',
      'AI solutions',
      'Automation',
      'Cloud infrastructure',
      'Tech consulting',
    ],
    outcome: 'Production-grade software in weeks',
    icon: Rocket,
    href: '#',
    accent: '#5b85ff',
    tone: 'brand',
  },
  {
    key: 'hiring',
    num: '05',
    title: 'Hiring Managers',
    who: 'Companies hiring tech & non-tech talent',
    promise: 'Pre-trained talent, on demand.',
    body:
      'Permanent recruitment, contract staffing, RPO and bulk drives — backed by the same students we train, so candidates arrive interview-ready.',
    services: [
      'Permanent recruitment',
      'Contract staffing',
      'Pre-trained interns',
      'Technical assessments',
      'Bulk hiring drives',
      'RPO',
    ],
    outcome: 'Faster TAT, lower drop-off',
    icon: Users,
    href: '#',
    accent: 'var(--color-accent-500)',
    tone: 'ink',
  },
]

export function Audiences() {
  return (
    <section id="audiences" className="relative bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeader />

        <div className="mt-16 space-y-3 md:mt-20 md:space-y-4">
          {SEGMENTS.map((s, i) => (
            <SegmentRow key={s.key} seg={s} reversed={i % 2 === 1} index={i} />
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
        <h2 className="mt-4 font-display text-[40px] font-bold leading-[1.02] tracking-[-0.02em] text-ink-950 md:text-[60px] lg:text-[76px]">
          Pick your <em className="not-italic text-brand-700">starting line</em>.
        </h2>
      </div>
      <p className="text-[16px] leading-[1.6] text-ink-600 md:col-span-5 md:text-[17px]">
        We don't shoehorn everyone into one funnel. Each audience gets its own
        room — built around the outcome that actually matters to them, then
        wired into the rest of the platform.
      </p>
    </div>
  )
}

function SegmentRow({ seg, reversed, index }: { seg: Segment; reversed: boolean; index: number }) {
  const tones = {
    paper: {
      card: 'bg-white text-ink-950 ring-1 ring-ink-950/[0.06]',
      muted: 'text-ink-500',
      bigNum: 'text-ink-100',
      chip: 'bg-ink-100 text-ink-800 ring-ink-200',
      arrow: 'bg-ink-950 text-paper',
      check: 'text-brand-700',
    },
    ink: {
      card: 'bg-ink-950 text-paper',
      muted: 'text-paper/60',
      bigNum: 'text-paper/[0.06]',
      chip: 'bg-paper/[0.07] text-paper/85 ring-paper/10',
      arrow: 'bg-accent-500 text-ink-950',
      check: 'text-accent-500',
    },
    brand: {
      card: 'bg-brand-950 text-paper',
      muted: 'text-paper/65',
      bigNum: 'text-paper/[0.06]',
      chip: 'bg-paper/[0.08] text-paper/85 ring-paper/10',
      arrow: 'bg-accent-500 text-ink-950',
      check: 'text-accent-500',
    },
  }[seg.tone]

  const Icon = seg.icon

  return (
    <motion.a
      href={seg.href}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-12%' }}
      transition={{ duration: 0.55, delay: index * 0.05, ease: [0.2, 0.7, 0.2, 1] }}
      className={`group relative block overflow-hidden rounded-3xl p-7 transition-shadow duration-500 hover:shadow-[0_30px_70px_-30px_rgba(11,13,18,0.4)] md:p-10 ${tones.card}`}
    >
      {/* Giant background number */}
      <span
        aria-hidden
        className={`pointer-events-none absolute -right-2 -top-12 select-none font-display text-[200px] font-black leading-none tracking-tighter md:-right-4 md:-top-20 md:text-[320px] ${tones.bigNum}`}
      >
        {seg.num}
      </span>

      <div
        className={`relative grid grid-cols-1 items-start gap-8 md:grid-cols-12 md:gap-10 ${
          reversed ? 'md:[&>:first-child]:md:order-2' : ''
        }`}
      >
        {/* Left column */}
        <div className="md:col-span-7">
          <div className="flex flex-wrap items-center gap-3">
            <span
              className="grid h-11 w-11 place-items-center rounded-xl"
              style={{ background: seg.accent, color: '#0b0d12' }}
            >
              <Icon className="h-5 w-5" strokeWidth={2.1} />
            </span>
            <span className={`font-mono text-[11.5px] uppercase tracking-[0.18em] ${tones.muted}`}>
              {seg.num} · {seg.title}
            </span>
            <span className={`hidden h-px flex-1 ${seg.tone === 'paper' ? 'bg-ink-200' : 'bg-paper/15'} md:block`} />
            <span className={`hidden font-mono text-[11.5px] uppercase tracking-[0.18em] md:inline ${tones.muted}`}>
              {seg.who}
            </span>
          </div>

          <h3 className="mt-7 font-display text-[34px] font-bold leading-[1.05] tracking-[-0.025em] md:text-[52px] lg:text-[60px]">
            {seg.promise}
          </h3>

          <p className={`mt-5 max-w-xl text-[15.5px] leading-[1.6] md:text-[16.5px] ${tones.muted}`}>
            {seg.body}
          </p>

          <div className="mt-7 flex flex-wrap gap-2">
            {seg.services.map((s) => (
              <span
                key={s}
                className={`rounded-full px-3.5 py-1.5 text-[12.5px] font-medium ring-1 ${tones.chip}`}
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Right column — outcome card + CTA */}
        <div className="md:col-span-5">
          <div
            className={`relative h-full overflow-hidden rounded-2xl p-6 ring-1 ${
              seg.tone === 'paper' ? 'bg-paper ring-ink-200' : 'bg-paper/[0.04] ring-paper/10'
            }`}
          >
            <p className={`text-[11.5px] font-semibold uppercase tracking-[0.2em] ${tones.muted}`}>
              The Outcome
            </p>
            <p
              className={`mt-3 font-display text-[24px] font-bold leading-[1.15] tracking-tight md:text-[28px] ${
                seg.tone === 'paper' ? 'text-ink-950' : 'text-paper'
              }`}
            >
              {seg.outcome}
            </p>

            <ul className="mt-6 space-y-2.5">
              {seg.services.slice(0, 3).map((s) => (
                <li key={s} className="flex items-center gap-2.5 text-[13.5px]">
                  <CheckCircle2 className={`h-4 w-4 shrink-0 ${tones.check}`} strokeWidth={2.25} />
                  <span className={seg.tone === 'paper' ? 'text-ink-700' : 'text-paper/80'}>{s}</span>
                </li>
              ))}
            </ul>

            <div className="mt-7 flex items-center justify-between">
              <span
                className={`text-[13px] font-medium ${
                  seg.tone === 'paper' ? 'text-ink-700' : 'text-paper/80'
                }`}
              >
                Explore {seg.title.toLowerCase()} →
              </span>
              <span
                className={`grid h-10 w-10 place-items-center rounded-full transition-transform duration-300 group-hover:rotate-[20deg] group-hover:translate-x-0.5 ${tones.arrow}`}
              >
                <ArrowUpRight className="h-4 w-4" strokeWidth={2.25} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.a>
  )
}
