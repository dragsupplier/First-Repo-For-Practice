import { motion } from 'motion/react'
import {
  GraduationCap,
  Building2,
  School,
  Rocket,
  Users,
  ArrowRight,
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
  icon: LucideIcon
  href: string
}

const SEGMENTS: Segment[] = [
  {
    key: 'students',
    num: '01',
    title: 'For Students',
    who: 'Engineering · BCA · MCA · BSc · Diploma',
    promise: 'Industry-readiness, sequenced over your degree.',
    body:
      'Industrial training, internships, certifications, coding programs and structured placement preparation — mapped to your stream and year of study.',
    services: ['Industrial training', 'Internships', 'Coding bootcamps', 'Placement prep', 'Certifications', 'Career guidance'],
    icon: GraduationCap,
    href: '#',
  },
  {
    key: 'colleges',
    num: '02',
    title: 'For Colleges',
    who: 'Engineering & polytechnic institutes',
    promise: 'A single partner for academic and placement operations.',
    body:
      'Pre-placement training, drives, FDPs, NAAC/NBA support, and on-campus AI/IoT/Cloud labs — supported by ERP and LMS systems built for Indian institutions.',
    services: ['Campus training', 'Placement drives', 'NAAC / NBA support', 'AI · IoT labs', 'Faculty Dev. (FDP)', 'LMS / ERP'],
    icon: Building2,
    href: '#',
  },
  {
    key: 'schools',
    num: '03',
    title: 'For Schools',
    who: 'K-12 · Principals & management',
    promise: 'NEP 2020-aligned future-tech infrastructure.',
    body:
      'AI, robotics, IoT and STEM/ATL labs designed for Indian classrooms — with curriculum, hardware kits and teacher training that survive the school year.',
    services: ['AI & robotics', 'STEM / ATL labs', 'Coding curriculum', 'IoT lab setup', 'Hardware kits', 'Teacher training'],
    icon: School,
    href: '#',
  },
  {
    key: 'businesses',
    num: '04',
    title: 'For Businesses & Startups',
    who: 'Founders, product & operations leaders',
    promise: 'Ship product without standing up a full engineering org.',
    body:
      'Web, mobile, AI and automation work delivered by the same team that trains the engineers — so you can scale capability before you scale headcount.',
    services: ['Web development', 'Mobile apps', 'AI solutions', 'Automation', 'Cloud infrastructure', 'Tech consulting'],
    icon: Rocket,
    href: '#',
  },
  {
    key: 'hiring',
    num: '05',
    title: 'For Hiring Teams',
    who: 'Talent acquisition & people operations',
    promise: 'Pre-trained candidates supplied on demand.',
    body:
      'Permanent recruitment, contract staffing, RPO and bulk drives — backed by the same students we train, so candidates arrive interview-ready.',
    services: ['Permanent recruitment', 'Contract staffing', 'Pre-trained interns', 'Technical assessments', 'Bulk drives', 'RPO'],
    icon: Users,
    href: '#',
  },
]

export function Audiences() {
  return (
    <section id="audiences" className="relative bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeader />
        <div className="mt-10 grid grid-cols-1 gap-4 md:mt-12 md:grid-cols-2 lg:grid-cols-3">
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
    <div className="grid grid-cols-1 items-end gap-5 md:grid-cols-12">
      <div className="md:col-span-7">
        <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-brand-700">
          Solutions
        </p>
        <h2 className="mt-3 font-display text-[28px] font-bold leading-[1.15] tracking-[-0.02em] text-fg md:text-[40px] lg:text-[44px]">
          Five audience segments. One integrated platform.
        </h2>
      </div>
      <p className="text-[15px] leading-[1.6] text-fg-3 md:col-span-5 md:text-[15.5px]">
        Each segment has its own programs and outcomes — but they share a
        common stack, a common team and a common standard of delivery. Pick
        the door closest to where you stand today.
      </p>
    </div>
  )
}

function SegmentCard({ seg, index }: { seg: Segment; index: number }) {
  const Icon = seg.icon
  return (
    <motion.a
      href={seg.href}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10%' }}
      transition={{ duration: 0.45, delay: index * 0.05 }}
      className="group flex flex-col rounded-lg border border-line bg-white p-6 transition-shadow duration-200 hover:border-line-2 hover:shadow-[0_18px_40px_-24px_rgba(13,21,48,0.18)]"
    >
      <div className="flex items-start justify-between">
        <span className="grid h-11 w-11 place-items-center rounded-md bg-brand-700 text-white">
          <Icon className="h-5 w-5" strokeWidth={2.1} />
        </span>
        <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-fg-4">
          {seg.num}
        </span>
      </div>

      <p className="mt-5 text-[11.5px] font-semibold uppercase tracking-[0.14em] text-fg-4">
        {seg.title}
      </p>
      <h3 className="mt-1.5 font-display text-[20px] font-bold leading-[1.25] tracking-tight text-fg md:text-[22px]">
        {seg.promise}
      </h3>
      <p className="mt-3 text-[14px] leading-[1.55] text-fg-3">{seg.body}</p>

      <div className="mt-5 flex-1 border-t border-line pt-4">
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-fg-4">
          Programs
        </p>
        <ul className="mt-2 grid grid-cols-2 gap-x-4 gap-y-1.5">
          {seg.services.map((s) => (
            <li key={s} className="flex items-center gap-1.5 text-[13px] text-fg-2">
              <span className="h-1 w-1 rounded-full bg-brand-700" />
              {s}
            </li>
          ))}
        </ul>
      </div>

      <span className="mt-6 inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand-700">
        Learn more
        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" strokeWidth={2.5} />
      </span>
    </motion.a>
  )
}
