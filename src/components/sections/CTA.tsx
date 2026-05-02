import { useState } from 'react'
import { TextReveal } from '@/components/ui/TextReveal'
import { Stagger, Rise } from '@/components/ui/Stagger'
import {
  ArrowRight,
  ArrowUpRight,
  Phone,
  Mail,
  CheckCircle2,
  FileText,
  MessageSquare,
  Users,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

type Action = {
  num: string
  tag: string
  title: string
  desc: string
  cta: string
  icon: LucideIcon
}

const ACTIONS: Action[] = [
  {
    num: '01',
    tag: 'Institutions & businesses',
    title: 'Request a proposal',
    desc: 'Share your context — we will return a written 90-day plan within one business week.',
    cta: 'Start a proposal',
    icon: FileText,
  },
  {
    num: '02',
    tag: 'Decision-makers',
    title: 'Speak to a consultant',
    desc: 'A 20-minute conversation, no decks. We will map your real constraint and recommend a format.',
    cta: 'Book a call',
    icon: MessageSquare,
  },
  {
    num: '03',
    tag: 'Partners & talent',
    title: 'Partner or join us',
    desc: 'Recruitment partners, RPO firms, training collaborators, and prospective Alphinix hires welcome.',
    cta: 'Get in touch',
    icon: Users,
  },
]

export function CTA() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <section id="contact" className="brand-mesh relative isolate text-white">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="flex items-center gap-3">
          <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-200">
            08 — Working together
          </span>
          <span className="h-px flex-1 bg-white/15" />
        </div>

        <div className="mt-10 grid grid-cols-12 gap-x-12 gap-y-12">
          {/* Left — three action cards */}
          <div className="col-span-12 lg:col-span-7">
            <h2 className="font-display text-[36px] font-semibold leading-[1.04] tracking-[-0.025em] md:text-[52px] lg:text-[60px]">
              <TextReveal text="Tell us where you are." unit="word" stagger={55} trigger="inview" />{' '}
              <span className="text-brand-200">
                <TextReveal text="We'll meet you there." unit="word" stagger={55} trigger="inview" />
              </span>
            </h2>

            <Stagger step={0.08} className="mt-12">
              <ul className="space-y-3">
                {ACTIONS.map((a) => {
                  const Icon = a.icon
                  return (
                    <Rise key={a.num}><li>
                    <a
                      href="#enquiry"
                      className="group grid grid-cols-12 items-center gap-4 rounded-md border border-white/10 bg-white/[0.03] p-5 transition-all duration-200 hover:border-white/25 hover:bg-white/[0.07]"
                    >
                      <span className="col-span-2 md:col-span-1">
                        <span className="grid h-11 w-11 place-items-center rounded-md bg-white text-brand-950">
                          <Icon className="h-4 w-4" strokeWidth={2} />
                        </span>
                      </span>
                      <div className="col-span-10 md:col-span-8">
                        <p className="font-mono text-[10.5px] font-semibold uppercase tracking-[0.14em] text-brand-200">
                          {a.num} · {a.tag}
                        </p>
                        <h3 className="mt-1.5 font-display text-[20px] font-semibold tracking-tight">
                          {a.title}
                        </h3>
                        <p className="mt-1.5 text-[13.5px] leading-[1.55] text-white/70">{a.desc}</p>
                      </div>
                      <div className="col-span-12 flex justify-end md:col-span-3">
                        <span className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-white group-hover:text-brand-200">
                          {a.cta}
                          <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-12" strokeWidth={2.5} />
                        </span>
                      </div>
                    </a>
                    </li></Rise>
                  )
                })}
              </ul>
            </Stagger>

            {/* Direct contact strip */}
            <ul className="mt-10 grid grid-cols-1 gap-3 border-t border-white/15 pt-7 sm:grid-cols-2">
              <li className="flex items-center gap-3 rounded-md bg-white/[0.04] px-4 py-3 ring-1 ring-white/10">
                <span className="grid h-9 w-9 place-items-center rounded-md bg-white/10">
                  <Phone className="h-3.5 w-3.5 text-brand-200" strokeWidth={2.25} />
                </span>
                <div>
                  <p className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-white/55">Phone</p>
                  <p className="text-[13.5px] font-semibold">+91 00000 00000</p>
                </div>
              </li>
              <li className="flex items-center gap-3 rounded-md bg-white/[0.04] px-4 py-3 ring-1 ring-white/10">
                <span className="grid h-9 w-9 place-items-center rounded-md bg-white/10">
                  <Mail className="h-3.5 w-3.5 text-brand-200" strokeWidth={2.25} />
                </span>
                <div>
                  <p className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-white/55">Email</p>
                  <p className="text-[13.5px] font-semibold">hello@alphinix.in</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Right — form */}
          <div className="col-span-12 lg:col-span-5" id="enquiry">
            <div className="overflow-hidden rounded-md border border-white/15 bg-white/[0.05] backdrop-blur">
              <div className="flex items-center justify-between border-b border-white/15 px-6 py-4">
                <p className="kicker text-brand-200">Quick enquiry</p>
                <span className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-white/45">
                  Step 1 of 1
                </span>
              </div>

              <div className="p-6 md:p-7">
                <p className="font-display text-[22px] font-semibold leading-tight tracking-tight">
                  Three fields. One reply.
                </p>

                {submitted ? (
                  <div className="mt-7 flex flex-col items-start gap-4 rounded-md bg-white/[0.06] p-6 ring-1 ring-white/15">
                    <span className="grid h-11 w-11 place-items-center rounded-full bg-white text-brand-700">
                      <CheckCircle2 className="h-5 w-5" strokeWidth={2.25} />
                    </span>
                    <div>
                      <p className="font-display text-[18px] font-semibold tracking-tight">
                        Thanks — we have your note.
                      </p>
                      <p className="mt-2 text-[14px] text-white/75">
                        A consultant will reach out within one business day.
                      </p>
                    </div>
                  </div>
                ) : (
                  <form
                    className="mt-6 space-y-7"
                    onSubmit={(e) => {
                      e.preventDefault()
                      setSubmitted(true)
                    }}
                  >
                    <UnderlineField label="Full name" id="name" hint="01">
                      <input
                        id="name"
                        type="text"
                        required
                        placeholder="Your name"
                        className="w-full bg-transparent py-2 text-[15px] text-white placeholder:text-white/40 focus:outline-none"
                      />
                    </UnderlineField>
                    <UnderlineField label="Work email" id="email" hint="02">
                      <input
                        id="email"
                        type="email"
                        required
                        placeholder="name@organization.com"
                        className="w-full bg-transparent py-2 text-[15px] text-white placeholder:text-white/40 focus:outline-none"
                      />
                    </UnderlineField>
                    <UnderlineField label="I represent" id="segment" hint="03">
                      <select
                        id="segment"
                        required
                        defaultValue=""
                        className="w-full bg-transparent py-2 text-[15px] text-white focus:outline-none"
                      >
                        <option value="" disabled className="text-fg">Select audience</option>
                        <option className="text-fg">A college / institute</option>
                        <option className="text-fg">A school</option>
                        <option className="text-fg">A business / startup</option>
                        <option className="text-fg">A hiring team</option>
                        <option className="text-fg">A student / individual</option>
                      </select>
                    </UnderlineField>

                    <button
                      type="submit"
                      className="group inline-flex w-full items-center justify-center gap-2 rounded-md bg-white px-5 py-3 text-[14px] font-semibold text-brand-950 transition-colors hover:bg-brand-50"
                    >
                      Submit enquiry
                      <ArrowRight
                        className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                        strokeWidth={2.5}
                      />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function UnderlineField({
  id,
  label,
  hint,
  children,
}: {
  id: string
  label: string
  hint: string
  children: React.ReactNode
}) {
  return (
    <div className="border-b border-white/20 transition-colors focus-within:border-white/55">
      <div className="flex items-center justify-between">
        <label htmlFor={id} className="block text-[10.5px] font-semibold uppercase tracking-[0.14em] text-white/55">
          {label}
        </label>
        <span className="font-mono text-[10.5px] tracking-[0.14em] text-white/35">{hint}</span>
      </div>
      {children}
    </div>
  )
}
