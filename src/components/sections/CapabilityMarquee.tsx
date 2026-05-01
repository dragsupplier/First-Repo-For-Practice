import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ArrowRight } from 'lucide-react'

type Item = { label: string; desc: string }
type Group = { key: string; tag: string; title: string; intro: string; items: Item[] }

const GROUPS: Group[] = [
  {
    key: 'training',
    tag: 'Training',
    title: 'Programs that turn into placements.',
    intro:
      'Industrial training, internships, certifications, faculty development and accreditation support — designed for Indian institutions.',
    items: [
      { label: 'Industrial training',     desc: 'Year-3 / 4 cohorts, on-campus' },
      { label: 'Internship placement',    desc: 'Curated with hiring partners' },
      { label: 'Coding bootcamps',        desc: 'Web · mobile · data · AI' },
      { label: 'Certifications',          desc: 'Industry-aligned tracks' },
      { label: 'Career guidance',         desc: 'Resume · interview · offer' },
      { label: 'Faculty development',     desc: 'FDPs aligned to curriculum' },
      { label: 'NAAC / NBA support',      desc: 'Documentation + audit prep' },
      { label: 'Curriculum consulting',   desc: 'Stream-wise outcome design' },
      { label: 'Skill development',       desc: 'Year-long structured tracks' },
      { label: 'Webinars & masterclasses',desc: 'On-demand + live sessions' },
      { label: 'Hackathons',              desc: 'Sponsored campus events' },
      { label: 'Alumni networks',         desc: 'Cohort-to-industry bridges' },
    ],
  },
  {
    key: 'engineering',
    tag: 'Engineering',
    title: 'Production-grade software, on real timelines.',
    intro:
      'Web, mobile, AI, automation, cloud and data work delivered by senior in-house leads — not subcontractors.',
    items: [
      { label: 'Web development',     desc: 'Marketing · product · internal tools' },
      { label: 'Mobile applications', desc: 'iOS · Android · React Native' },
      { label: 'AI solutions',        desc: 'Agents · RAG · fine-tuning' },
      { label: 'Automation',          desc: 'Internal ops · integrations' },
      { label: 'Cloud infrastructure',desc: 'AWS · Azure · GCP' },
      { label: 'Data platforms',      desc: 'Pipelines · warehouses · BI' },
      { label: 'API engineering',     desc: 'Public · partner · internal' },
      { label: 'Backend systems',     desc: 'Scalable Node · Python · Go' },
      { label: 'DevOps & SRE',        desc: 'CI / CD, observability' },
      { label: 'Tech consulting',     desc: 'Architecture · roadmaps' },
      { label: 'Security audits',     desc: 'OWASP, dependency scans' },
      { label: 'Performance tuning',  desc: 'Web Vitals, infra cost' },
    ],
  },
  {
    key: 'labs',
    tag: 'Labs · Schools',
    title: 'Future-ready labs for Indian classrooms.',
    intro:
      'STEM, ATL, AI, IoT and robotics labs with curriculum, hardware and teacher training — ready to run from day one.',
    items: [
      { label: 'STEM / ATL labs',       desc: 'AIM-aligned setups' },
      { label: 'AI · IoT labs',         desc: 'Microcontroller + cloud' },
      { label: 'Robotics labs',         desc: 'Hardware + curriculum' },
      { label: 'Coding curriculum',     desc: 'Grade-wise learning ladders' },
      { label: 'Hardware kits',         desc: 'Arduino · Pi · drones' },
      { label: 'Teacher training',      desc: 'On-site + recorded modules' },
      { label: 'Maker spaces',          desc: 'Tools · safety · workflow' },
      { label: 'Annual programs',       desc: '3-year skilling ladders' },
      { label: 'Maintenance & support', desc: 'On-call lab assistants' },
    ],
  },
  {
    key: 'talent',
    tag: 'Talent',
    title: 'Pre-trained candidates supplied on demand.',
    intro:
      'Permanent recruitment, contract staffing, RPO and bulk drives — backed by candidates we trained ourselves.',
    items: [
      { label: 'Permanent recruitment',   desc: 'Engineering & non-tech roles' },
      { label: 'Contract staffing',       desc: '3 to 18-month engagements' },
      { label: 'Pre-trained interns',     desc: 'Curated from our cohorts' },
      { label: 'Technical assessments',   desc: 'Custom screens per role' },
      { label: 'Recruitment outsourcing', desc: 'RPO with weekly reviews' },
      { label: 'Bulk hiring drives',      desc: 'Single-day on-site drives' },
      { label: 'Campus partnerships',     desc: 'Direct college pipelines' },
      { label: 'Background verification', desc: 'Standard + custom checks' },
      { label: 'Onboarding support',      desc: 'First-90-day enablement' },
    ],
  },
]

export function CapabilityMarquee() {
  const [active, setActive] = useState(GROUPS[0].key)
  const current = GROUPS.find((g) => g.key === active)!

  return (
    <section id="capabilities" className="relative bg-canvas">
      {/* Section opener */}
      <div className="border-y border-line bg-white">
        <div className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-14">
          <div className="grid grid-cols-12 items-end gap-6">
            <div className="col-span-12 lg:col-span-7">
              <p className="eyebrow">03 / Capabilities</p>
              <h2 className="mt-4 font-display text-[28px] font-semibold leading-[1.08] tracking-[-0.02em] text-fg md:text-[36px] lg:text-[40px]">
                A capability index, not a service brochure.
              </h2>
            </div>
            <p className="col-span-12 text-[15px] leading-[1.6] text-fg-3 lg:col-span-5">
              Forty-plus services across four delivery groups — same hiring
              standard, single point of contact for multi-track engagements.
            </p>
          </div>
        </div>
      </div>

      {/* Tabs + dense matrix */}
      <div className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16">
        <div className="grid grid-cols-12 gap-x-10 gap-y-8">
          {/* Vertical tabs */}
          <nav className="col-span-12 lg:col-span-3">
            <p className="eyebrow mb-4">Delivery groups</p>
            <ul className="border-t border-line">
              {GROUPS.map((g) => {
                const isActive = g.key === active
                return (
                  <li key={g.key} className="border-b border-line">
                    <button
                      onClick={() => setActive(g.key)}
                      className={`relative flex w-full items-center justify-between py-4 pr-2 text-left transition-colors ${
                        isActive ? 'text-fg' : 'text-fg-3 hover:text-fg'
                      }`}
                      aria-pressed={isActive}
                    >
                      <span className="flex flex-col items-start">
                        <span className="font-mono text-[10.5px] font-semibold uppercase tracking-[0.14em] text-fg-4">
                          {g.tag}
                        </span>
                        <span className="mt-1 font-display text-[16px] font-medium tracking-tight">
                          {g.items.length} services
                        </span>
                      </span>
                      <ArrowRight
                        className={`h-3.5 w-3.5 transition-all duration-200 ${
                          isActive ? 'translate-x-0 text-brand-700' : '-translate-x-1 text-fg-5'
                        }`}
                        strokeWidth={2.5}
                      />
                      {isActive && (
                        <motion.span
                          layoutId="cap-active"
                          className="absolute -left-[1px] top-0 h-full w-[3px] bg-brand-700"
                        />
                      )}
                    </button>
                  </li>
                )
              })}
            </ul>
          </nav>

          {/* Matrix */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current.key}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.3 }}
              className="col-span-12 lg:col-span-9"
            >
              <p className="font-mono text-[10.5px] font-semibold uppercase tracking-[0.14em] text-brand-700">
                {current.tag}
              </p>
              <h3 className="mt-3 font-display text-[24px] font-semibold leading-[1.15] tracking-tight text-fg md:text-[30px]">
                {current.title}
              </h3>
              <p className="mt-3 max-w-2xl text-[15px] leading-[1.6] text-fg-3">
                {current.intro}
              </p>

              <div className="mt-8 border-t border-line" />
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {current.items.map((it) => (
                  <li
                    key={it.label}
                    className="border-b border-line py-4 lg:px-1"
                  >
                    <p className="font-display text-[15.5px] font-medium tracking-tight text-fg">
                      {it.label}
                    </p>
                    <p className="mt-1 text-[12.5px] leading-snug text-fg-4">{it.desc}</p>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="mt-8 inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-brand-700 hover:text-brand-800"
              >
                Talk to the {current.tag.toLowerCase()} team
                <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} />
              </a>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
