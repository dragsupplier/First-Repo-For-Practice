import { useState } from 'react'
import { motion } from 'motion/react'
import { ArrowRight, Phone, Mail, Clock, MapPin, CheckCircle2 } from 'lucide-react'

const REASONS = [
  'A clear written plan within one business week',
  'No deck-driven sales cycle — direct delivery conversation',
  'Fixed-scope or retainer engagement, your call',
]

export function CTA() {
  const [submitted, setSubmitted] = useState(false)
  return (
    <section id="contact" className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
        <div className="grid grid-cols-12 gap-x-12 gap-y-12">
          {/* Left — pitch */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-15%' }}
            transition={{ duration: 0.5 }}
            className="col-span-12 lg:col-span-7"
          >
            <p className="eyebrow">07 / Get in touch</p>
            <h2 className="mt-4 font-display text-[34px] font-semibold leading-[1.04] tracking-[-0.02em] text-fg md:text-[48px] lg:text-[56px]">
              Tell us where you are.
              <br />
              <span className="text-brand-700">We'll meet you there.</span>
            </h2>
            <p className="mt-6 max-w-xl text-[16px] leading-[1.65] text-fg-3 md:text-[17px]">
              Twenty minutes is all it takes to figure out which Alphinix
              door is yours. No deck. No script. Just a real conversation.
            </p>

            <ul className="mt-8 space-y-2.5">
              {REASONS.map((r) => (
                <li key={r} className="flex items-start gap-3 text-[14.5px] text-fg-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-700" strokeWidth={2.25} />
                  {r}
                </li>
              ))}
            </ul>

            {/* Direct contact strip */}
            <div className="mt-10 grid grid-cols-1 gap-y-4 border-t border-line pt-7 sm:grid-cols-3">
              <ContactCell icon={Phone} label="Phone" value="+91 00000 00000" />
              <ContactCell icon={Mail} label="Email" value="hello@alphinix.in" href="mailto:hello@alphinix.in" />
              <ContactCell icon={MapPin} label="Office" value="Pune, India" />
            </div>

            <p className="mt-5 inline-flex items-center gap-1.5 text-[12.5px] text-fg-4">
              <Clock className="h-3 w-3" strokeWidth={2.25} />
              Mon–Sat · 10:00–18:30 IST · We respond within one business day
            </p>
          </motion.div>

          {/* Right — form on color */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-15%' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="col-span-12 lg:col-span-5"
          >
            <div className="brand-mesh color-card-edge relative overflow-hidden rounded-md text-white">
              <div className="border-b border-white/15 px-6 py-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/65">
                  Quick enquiry
                </p>
                <p className="mt-1.5 font-display text-[18px] font-medium tracking-tight">
                  Three fields. One reply.
                </p>
              </div>

              {submitted ? (
                <div className="flex flex-col items-start gap-4 p-7">
                  <CheckCircle2 className="h-7 w-7 text-white" strokeWidth={2} />
                  <div>
                    <p className="font-display text-[18px] font-semibold tracking-tight">
                      Thanks — we have your note.
                    </p>
                    <p className="mt-2 text-[14px] text-white/75">
                      A consultant will reach out within one business day. If
                      it's urgent, please call the number on the left.
                    </p>
                  </div>
                </div>
              ) : (
                <form
                  className="space-y-6 p-7"
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

                  <p className="text-[11.5px] text-white/55">
                    By submitting, you agree we may contact you about your
                    enquiry. We never share your details.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function ContactCell({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>
  label: string
  value: string
  href?: string
}) {
  const Inner = (
    <>
      <div className="flex items-center gap-1.5">
        <Icon className="h-3.5 w-3.5 text-brand-700" strokeWidth={2.25} />
        <span className="text-[10.5px] font-semibold uppercase tracking-[0.14em] text-fg-4">
          {label}
        </span>
      </div>
      <p className="mt-1.5 text-[14px] font-semibold text-fg">{value}</p>
    </>
  )
  return href ? (
    <a href={href} className="block transition-colors hover:text-brand-700">
      {Inner}
    </a>
  ) : (
    <div>{Inner}</div>
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
      <label
        htmlFor={id}
        className="block text-[10.5px] font-semibold uppercase tracking-[0.14em] text-white/55"
      >
        {label}
      </label>
      {children}
    </div>
  )
}
