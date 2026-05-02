import { useState } from 'react'
import { motion } from 'motion/react'
import { ArrowRight, ArrowUpRight, Phone, Mail, CheckCircle2 } from 'lucide-react'

const ACTIONS: { num: string; tag: string; title: string; desc: string; cta: string }[] = [
  {
    num: '01',
    tag: 'For institutions & businesses',
    title: 'Request a proposal',
    desc: 'Share your context — we will return a written 90-day plan within one business week.',
    cta: 'Start a proposal',
  },
  {
    num: '02',
    tag: 'For decision-makers',
    title: 'Speak to a consultant',
    desc: 'A 20-minute conversation, no decks. We will map your real constraint and recommend a format.',
    cta: 'Book a call',
  },
  {
    num: '03',
    tag: 'For partners & talent',
    title: 'Partner or join us',
    desc: 'Recruitment partners, RPO firms, training collaborators, and prospective Alphinix hires welcome.',
    cta: 'Get in touch',
  },
]

export function CTA() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <section id="contact" className="brand-mesh relative isolate text-white">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="flex items-center gap-3 text-white/55">
          <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-brand-200">
            08 — Working together
          </span>
          <span className="h-px flex-1 bg-white/15" />
        </div>

        <div className="mt-10 grid grid-cols-12 gap-x-12 gap-y-12">
          {/* Left — three pre-CTAs */}
          <div className="col-span-12 lg:col-span-7">
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-15%' }}
              transition={{ duration: 0.5 }}
              className="font-display text-[36px] font-semibold leading-[1.04] tracking-[-0.025em] md:text-[56px] lg:text-[64px]"
            >
              Tell us where you are.{' '}
              <span className="text-brand-200">We'll meet you there.</span>
            </motion.h2>

            <p className="mt-6 max-w-xl text-[16px] leading-[1.65] text-white/75 md:text-[17px]">
              Twenty minutes is all it takes to figure out which Alphinix
              door is yours. No deck. No script. Just a real conversation.
            </p>

            <ul className="mt-12 grid grid-cols-1 divide-y divide-white/15 border-t border-white/15">
              {ACTIONS.map((a) => (
                <li key={a.num} className="grid grid-cols-12 items-start gap-x-6 py-7">
                  <span className="col-span-2 font-mono text-[12px] font-semibold uppercase tracking-[0.14em] text-brand-200 md:col-span-1">
                    {a.num}
                  </span>
                  <div className="col-span-10 md:col-span-7">
                    <p className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-white/55">
                      {a.tag}
                    </p>
                    <h3 className="mt-1.5 font-display text-[22px] font-semibold tracking-tight text-white md:text-[24px]">
                      {a.title}
                    </h3>
                    <p className="mt-2 text-[14px] leading-[1.6] text-white/70">
                      {a.desc}
                    </p>
                  </div>
                  <div className="col-span-12 md:col-span-4 md:flex md:items-end md:justify-end">
                    <a
                      href="#enquiry"
                      className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-white hover:text-brand-200"
                    >
                      {a.cta}
                      <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.5} />
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — form */}
          <div className="col-span-12 lg:col-span-5" id="enquiry">
            <div className="rounded-md border border-white/15 bg-white/[0.04] p-6 backdrop-blur md:p-7">
              <p className="kicker text-brand-200">Quick enquiry</p>
              <p className="mt-2 font-display text-[20px] font-semibold leading-tight tracking-tight">
                Three fields. One reply.
              </p>

              {submitted ? (
                <div className="mt-7 flex flex-col gap-4">
                  <CheckCircle2 className="h-7 w-7 text-white" strokeWidth={2} />
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
                  className="mt-7 space-y-7"
                  onSubmit={(e) => {
                    e.preventDefault()
                    setSubmitted(true)
                  }}
                >
                  <UnderlineField label="Full name" id="name">
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="Your name"
                      className="w-full bg-transparent py-2 text-[15px] text-white placeholder:text-white/40 focus:outline-none"
                    />
                  </UnderlineField>
                  <UnderlineField label="Work email" id="email">
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="name@organization.com"
                      className="w-full bg-transparent py-2 text-[15px] text-white placeholder:text-white/40 focus:outline-none"
                    />
                  </UnderlineField>
                  <UnderlineField label="I represent" id="segment">
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

              <ul className="mt-7 space-y-2 border-t border-white/15 pt-5 text-[13px] text-white/75">
                <li className="flex items-center gap-2">
                  <Phone className="h-3.5 w-3.5 text-brand-200" strokeWidth={2.25} />
                  +91 00000 00000
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-3.5 w-3.5 text-brand-200" strokeWidth={2.25} />
                  hello@alphinix.in
                </li>
              </ul>
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
  children,
}: {
  id: string
  label: string
  children: React.ReactNode
}) {
  return (
    <div className="border-b border-white/20 transition-colors focus-within:border-white/55">
      <label htmlFor={id} className="block text-[10.5px] font-semibold uppercase tracking-[0.14em] text-white/55">
        {label}
      </label>
      {children}
    </div>
  )
}
