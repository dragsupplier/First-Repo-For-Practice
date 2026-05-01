import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Plus, Minus, ArrowRight } from 'lucide-react'

type Item = { label: string; desc: string }
type Group = { key: string; tag: string; title: string; intro: string; items: Item[] }

const GROUPS: Group[] = [
  {
    key: 'training',
    tag: 'A',
    title: 'Training & academic operations',
    intro:
      'Programs that turn into placements — industrial training, internships, certifications, faculty development, and accreditation support.',
    items: [
      { label: 'Industrial training',     desc: 'Year-3 / 4 cohorts on campus' },
      { label: 'Internship placement',    desc: 'Curated with hiring partners' },
      { label: 'Coding bootcamps',        desc: 'Web · mobile · data · AI tracks' },
      { label: 'Certifications',          desc: 'Industry-aligned tracks' },
      { label: 'Career guidance',         desc: 'Resume · interview · offer' },
      { label: 'Faculty development',     desc: 'FDPs aligned to curriculum' },
      { label: 'NAAC / NBA support',      desc: 'Documentation + audit prep' },
      { label: 'Curriculum consulting',   desc: 'Stream-wise outcome design' },
      { label: 'Skill development',       desc: 'Year-long structured tracks' },
    ],
  },
  {
    key: 'engineering',
    tag: 'B',
    title: 'Software, AI and infrastructure',
    intro:
      'Production-grade engineering by senior in-house leads — for founders shipping their first product and enterprises modernising the next workflow.',
    items: [
      { label: 'Web development',     desc: 'Marketing · product · internal tools' },
      { label: 'Mobile applications', desc: 'iOS · Android · React Native' },
      { label: 'AI solutions',        desc: 'Agents · RAG · fine-tuning' },
      { label: 'Automation',          desc: 'Internal ops · integrations' },
      { label: 'Cloud infrastructure',desc: 'AWS · Azure · GCP' },
      { label: 'Data platforms',      desc: 'Pipelines · warehouses · BI' },
      { label: 'API engineering',     desc: 'Public · partner · internal' },
      { label: 'DevOps & SRE',        desc: 'CI/CD, observability' },
      { label: 'Tech consulting',     desc: 'Architecture · roadmaps' },
    ],
  },
  {
    key: 'labs',
    tag: 'C',
    title: 'Future-ready labs for schools',
    intro:
      'STEM, ATL, AI, IoT and robotics labs designed for Indian classrooms — with curriculum, hardware and teacher training that survive the year.',
    items: [
      { label: 'STEM / ATL labs',       desc: 'AIM-aligned setups' },
      { label: 'AI · IoT labs',         desc: 'Microcontroller + cloud' },
      { label: 'Robotics labs',         desc: 'Hardware + curriculum' },
      { label: 'Coding curriculum',     desc: 'Grade-wise learning ladders' },
      { label: 'Hardware kits',         desc: 'Arduino · Pi · drones' },
      { label: 'Teacher training',      desc: 'On-site + recorded modules' },
      { label: 'Maker spaces',          desc: 'Tools, safety, workflow' },
    ],
  },
  {
    key: 'talent',
    tag: 'D',
    title: 'Recruitment & talent supply',
    intro:
      'Permanent recruitment, contract staffing, RPO and bulk drives — backed by candidates we trained ourselves.',
    items: [
      { label: 'Permanent recruitment',   desc: 'Engineering & non-tech roles' },
      { label: 'Contract staffing',       desc: '3 to 18-month engagements' },
      { label: 'Pre-trained interns',     desc: 'Curated from our cohorts' },
      { label: 'Technical assessments',   desc: 'Custom screens per role' },
      { label: 'Recruitment outsourcing', desc: 'RPO with weekly reviews' },
      { label: 'Bulk hiring drives',      desc: 'Single-day on-site drives' },
    ],
  },
]

export function CapabilityMarquee() {
  const [openKey, setOpenKey] = useState<string | null>(GROUPS[0].key)

  return (
    <section id="capabilities" className="relative bg-white">
      {/* Section opener */}
      <div className="border-y border-line">
        <div className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-14">
          <div className="grid grid-cols-12 items-end gap-6">
            <div className="col-span-12 lg:col-span-7">
              <p className="eyebrow">03 / Capabilities</p>
              <h2 className="mt-4 font-display text-[28px] font-semibold leading-[1.08] tracking-[-0.02em] text-fg md:text-[36px] lg:text-[42px]">
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

      {/* Accordion — clean, expandable rows */}
      <div className="mx-auto max-w-7xl px-5 py-10 md:px-8 md:py-14">
        <ul>
          {GROUPS.map((g, i) => {
            const isOpen = openKey === g.key
            return (
              <li key={g.key} className="cap-row">
                <button
                  onClick={() => setOpenKey(isOpen ? null : g.key)}
                  className="grid w-full grid-cols-12 items-center gap-4 py-7 text-left transition-colors hover:bg-canvas/40 md:py-9"
                  aria-expanded={isOpen}
                >
                  <span className="col-span-2 font-mono text-[12px] font-semibold uppercase tracking-[0.16em] text-brand-700 md:col-span-1">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="col-span-9 font-display text-[20px] font-semibold leading-tight tracking-tight text-fg md:col-span-9 md:text-[26px]">
                    {g.title}
                  </h3>
                  <span className="col-span-1 flex items-center justify-end md:col-span-2">
                    <span
                      className={`hidden font-mono text-[11.5px] font-medium uppercase tracking-[0.14em] md:inline ${
                        isOpen ? 'text-brand-700' : 'text-fg-4'
                      }`}
                    >
                      {g.items.length} services
                    </span>
                    <span
                      className={`ml-4 grid h-9 w-9 place-items-center rounded-full border transition-colors ${
                        isOpen
                          ? 'border-brand-700 bg-brand-700 text-white'
                          : 'border-line text-fg-3'
                      }`}
                    >
                      {isOpen ? (
                        <Minus className="h-3.5 w-3.5" strokeWidth={2.5} />
                      ) : (
                        <Plus className="h-3.5 w-3.5" strokeWidth={2.5} />
                      )}
                    </span>
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.2, 0.7, 0.2, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="grid grid-cols-12 gap-x-6 gap-y-8 pb-10">
                        <div className="col-span-12 md:col-span-3">
                          <p className="max-w-[40ch] text-[14.5px] leading-[1.6] text-fg-3">
                            {g.intro}
                          </p>
                          <a
                            href="#contact"
                            className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand-700 hover:text-brand-800"
                          >
                            Discuss this team
                            <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} />
                          </a>
                        </div>
                        <ul className="col-span-12 grid grid-cols-1 gap-x-6 gap-y-0 sm:grid-cols-2 md:col-span-9 lg:grid-cols-3">
                          {g.items.map((it) => (
                            <li
                              key={it.label}
                              className="border-t border-line py-3.5"
                            >
                              <p className="font-display text-[15px] font-medium tracking-tight text-fg">
                                {it.label}
                              </p>
                              <p className="mt-0.5 text-[12.5px] leading-snug text-fg-4">
                                {it.desc}
                              </p>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
