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
  body: string
  services: string[]
  outcome: string
  icon: LucideIcon
  href: string
  surface: 'white' | 'canvas' | 'brand' | 'ink'
}

const SEGMENTS: Segment[] = [
  {
    key: 'students',
    num: '01',
    title: 'For Students',
    who: 'Engineering · BCA · MCA · BSc · Diploma',
    promise: 'From classroom to offer letter.',
    body:
      'A guided runway across your degree — industrial training, internships, certifications, coding programs and structured placement preparation, sequenced by your stream and year.',
    services: ['Industrial training', 'Internships', 'Coding bootcamps', 'Certifications', 'Career guidance', 'Skill development'],
    outcome: 'Industry-ready before you graduate.',
    icon: GraduationCap,
    href: '#',
    surface: 'white',
  },
  {
    key: 'colleges',
    num: '02',
    title: 'For Colleges',
    who: 'Engineering & polytechnic institutes',
    promise: 'Better placements. Stronger accreditation.',
    body:
      'A single partner for the full academic stack — pre-placement training, drives, FDPs, NAAC/NBA support and on-campus AI/IoT/Cloud labs, with ERP and LMS systems built for Indian institutions.',
    services: ['Campus training', 'Placement drives', 'NAAC / NBA support', 'AI · IoT · Cloud labs', 'Faculty development', 'LMS / ERP systems'],
    outcome: 'A measurable lift in placement and ranking outcomes.',
    icon: Building2,
    href: '#',
    surface: 'canvas',
  },
  {
    key: 'schools',
    num: '03',
    title: 'For Schools',
    who: 'K-12 · Principals & management',
    promise: 'Future-ready labs. NEP 2020 aligned.',
    body:
      'AI, robotics, IoT and STEM/ATL labs designed for Indian classrooms — with curriculum, hardware kits and teacher training that survive the school year.',
    services: ['AI & robotics', 'STEM / ATL labs', 'Coding curriculum', 'IoT lab setup', 'Hardware kits', 'Teacher training'],
    outcome: 'Future-tech literacy that parents notice.',
    icon: School,
    href: '#',
    surface: 'white',
  },
  {
    key: 'businesses',
    num: '04',
    title: 'For Businesses & Startups',
    who: 'Founders, product & operations leaders',
    promise: 'Ship faster. Scale leaner.',
    body:
      'Web, mobile, AI and automation work delivered by the same team that trains the engineers — so you can scale capability before you scale headcount.',
    services: ['Web development', 'Mobile apps', 'AI solutions', 'Automation', 'Cloud infrastructure', 'Tech consulting'],
    outcome: 'Production-grade software, on real timelines.',
    icon: Rocket,
    href: '#',
    surface: 'brand',
  },
  {
    key: 'hiring',
    num: '05',
    title: 'For Hiring Teams',
    who: 'Talent acquisition & people operations',
    promise: 'Pre-trained talent, on demand.',
    body:
      'Permanent recruitment, contract staffing, RPO and bulk drives — backed by the same students we train, so candidates arrive interview-ready.',
    services: ['Permanent recruitment', 'Contract staffing', 'Pre-trained interns', 'Technical assessments', 'Bulk drives', 'RPO'],
    outcome: 'Faster time-to-hire with less drop-off.',
    icon: Users,
    href: '#',
    surface: 'ink',
  },
]

export function Audiences() {
  return (
    <section id="audiences" className="relative">
      <SectionHeader />
      {SEGMENTS.map((s, i) => (
        <SegmentRow key={s.key} seg={s} reversed={i % 2 === 1} index={i} />
      ))}
    </section>
  )
}

function SectionHeader() {
  return (
    <div className="border-y border-line bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-12 items-end gap-6 px-5 py-12 md:px-8 md:py-16">
        <div className="col-span-12 md:col-span-7">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-700">
            § Solutions
          </p>
          <h2 className="mt-4 font-display text-[36px] font-semibold leading-[1.04] tracking-[-0.02em] text-fg md:text-[56px] lg:text-[64px]">
            Pick your <em className="font-medium italic text-brand-700">starting line</em>.
          </h2>
        </div>
        <p className="col-span-12 text-[15.5px] leading-[1.6] text-fg-3 md:col-span-5">
          Five audience segments, one integrated platform. Each room is built
          around the outcome that actually matters to that segment — then
          quietly wired into the rest of the stack.
        </p>
      </div>
    </div>
  )
}

function SegmentRow({
  seg,
  reversed,
  index,
}: {
  seg: Segment
  reversed: boolean
  index: number
}) {
  const styles = {
    white: {
      section: 'bg-white',
      bigNum: 'text-canvas-2',
      eyebrow: 'text-fg-4',
      title: 'text-fg',
      body: 'text-fg-3',
      chip: 'border-line text-fg-2 hover:border-brand-300 hover:text-fg',
      sideBg: 'bg-canvas',
      iconBox: 'bg-brand-700 text-white',
      sideBorder: 'border-line',
      sideTitle: 'text-fg',
      sideMuted: 'text-fg-4',
      arrow: 'bg-brand-700 text-white',
    },
    canvas: {
      section: 'bg-canvas',
      bigNum: 'text-white',
      eyebrow: 'text-fg-4',
      title: 'text-fg',
      body: 'text-fg-3',
      chip: 'border-line bg-white text-fg-2 hover:border-brand-300 hover:text-fg',
      sideBg: 'bg-white',
      iconBox: 'bg-brand-700 text-white',
      sideBorder: 'border-line',
      sideTitle: 'text-fg',
      sideMuted: 'text-fg-4',
      arrow: 'bg-brand-700 text-white',
    },
    brand: {
      section: 'bg-brand-950',
      bigNum: 'text-white/[0.05]',
      eyebrow: 'text-brand-200',
      title: 'text-white',
      body: 'text-white/75',
      chip: 'border-white/15 text-white/85 hover:border-white/30 hover:text-white',
      sideBg: 'bg-white/[0.05]',
      iconBox: 'bg-white text-brand-950',
      sideBorder: 'border-white/15',
      sideTitle: 'text-white',
      sideMuted: 'text-white/55',
      arrow: 'bg-white text-brand-950',
    },
    ink: {
      section: 'bg-fg',
      bigNum: 'text-white/[0.05]',
      eyebrow: 'text-fg-5',
      title: 'text-white',
      body: 'text-white/70',
      chip: 'border-white/15 text-white/80 hover:border-white/30 hover:text-white',
      sideBg: 'bg-white/[0.04]',
      iconBox: 'bg-brand-500 text-white',
      sideBorder: 'border-white/15',
      sideTitle: 'text-white',
      sideMuted: 'text-white/55',
      arrow: 'bg-brand-500 text-white',
    },
  }[seg.surface]

  const Icon = seg.icon

  return (
    <section className={`relative overflow-hidden border-b border-line ${styles.section}`}>
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        {/* Big background number — typography as decoration (no SVG) */}
        <span
          aria-hidden
          className={`pointer-events-none absolute select-none font-display text-[32vw] font-semibold leading-none tracking-tighter md:text-[24rem] ${styles.bigNum} ${
            reversed ? 'left-[-4%] -bottom-20' : 'right-[-4%] -top-20'
          }`}
        >
          {seg.num}
        </span>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-12%' }}
          transition={{ duration: 0.55, delay: index * 0.04 }}
          className="relative grid grid-cols-12 gap-8 md:gap-12"
        >
          {/* Main content */}
          <div className={`col-span-12 lg:col-span-7 ${reversed ? 'lg:order-2' : ''}`}>
            <div className="flex items-center gap-4">
              <span className={`grid h-12 w-12 place-items-center rounded-md ${styles.iconBox}`}>
                <Icon className="h-5 w-5" strokeWidth={2.1} />
              </span>
              <div className="flex flex-col gap-1">
                <span className={`font-mono text-[10.5px] font-semibold uppercase tracking-[0.18em] ${styles.eyebrow}`}>
                  {seg.num} · {seg.title}
                </span>
                <span className={`font-mono text-[10.5px] uppercase tracking-[0.16em] ${styles.eyebrow}`}>
                  {seg.who}
                </span>
              </div>
            </div>

            <h3 className={`mt-9 font-display text-[36px] font-semibold leading-[1.05] tracking-[-0.025em] md:text-[56px] lg:text-[64px] ${styles.title}`}>
              {seg.promise}
            </h3>

            <p className={`mt-6 max-w-2xl text-[16px] leading-[1.65] md:text-[17px] ${styles.body}`}>
              {seg.body}
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {seg.services.map((s) => (
                <span
                  key={s}
                  className={`rounded-full border px-3.5 py-1.5 text-[12.5px] font-medium transition-colors ${styles.chip}`}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Side outcome panel */}
          <div className={`col-span-12 lg:col-span-5 ${reversed ? 'lg:order-1' : ''}`}>
            <div className={`relative h-full overflow-hidden rounded-md border ${styles.sideBorder} ${styles.sideBg} p-6 md:p-8`}>
              <p className={`font-mono text-[10.5px] font-semibold uppercase tracking-[0.18em] ${styles.sideMuted}`}>
                The outcome
              </p>
              <p className={`mt-4 font-display text-[24px] font-semibold leading-[1.18] tracking-[-0.02em] md:text-[28px] ${styles.sideTitle}`}>
                {seg.outcome}
              </p>

              <div className={`mt-8 flex items-center justify-between border-t pt-5 ${styles.sideBorder}`}>
                <a
                  href={seg.href}
                  className={`text-[13.5px] font-semibold ${styles.sideTitle} hover:opacity-80`}
                >
                  Explore {seg.title.toLowerCase().replace('for ', '')} →
                </a>
                <span
                  className={`grid h-10 w-10 place-items-center rounded-full transition-transform duration-300 group-hover:rotate-[20deg] ${styles.arrow}`}
                >
                  <ArrowUpRight className="h-4 w-4" strokeWidth={2.25} />
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
