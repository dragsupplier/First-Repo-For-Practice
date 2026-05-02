import { useState } from 'react'
import {
  ArrowRight,
  Phone,
  Mail,
  CheckCircle2,
  Clock,
} from 'lucide-react'
import { TextReveal } from '@/components/ui/TextReveal'

export function CTA() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <section id="contact" className="relative isolate overflow-hidden bg-bg">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <div className="overflow-hidden rounded-lg border border-line-2 bg-white shadow-[0_30px_70px_-30px_rgba(11,18,32,0.22)]">
          {/* Top — Stripe-style dark mesh hero band */}
          <div className="stripe-mesh-dark mesh-animate relative px-7 py-14 text-center text-white md:px-12 md:py-20">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-200">
              Working together
            </p>
            <h2 className="mx-auto mt-5 max-w-[18ch] font-display text-[36px] font-semibold leading-[1.05] tracking-[-0.025em] text-white md:text-[52px] lg:text-[60px]">
              <TextReveal text="Tell us where you are." unit="word" stagger={45} trigger="inview" />{' '}
              <span className="text-brand-200">
                <TextReveal text="We'll meet you there." unit="word" stagger={45} trigger="inview" />
              </span>
            </h2>
            <p className="mx-auto mt-6 max-w-[58ch] text-[15.5px] leading-[1.65] text-white/75 md:text-[17px]">
              Twenty minutes is all it takes to figure out which Alphinix
              door is yours. No deck. No script. Just a real conversation.
            </p>
          </div>

          {/* Bottom — form on white */}
          <div className="px-7 py-12 md:px-12 md:py-14">
            {submitted ? (
              <div className="mx-auto flex max-w-xl flex-col items-center gap-4 text-center">
                <span className="grid h-14 w-14 place-items-center rounded-full bg-brand-700 text-white">
                  <CheckCircle2 className="h-6 w-6" strokeWidth={2.25} />
                </span>
                <div>
                  <p className="font-display text-[22px] font-semibold tracking-tight text-fg">
                    Thanks — we have your note.
                  </p>
                  <p className="mt-2 text-[15px] text-fg-3">
                    A consultant will reach out within one business day.
                  </p>
                </div>
              </div>
            ) : (
              <form
                className="mx-auto max-w-3xl"
                onSubmit={(e) => {
                  e.preventDefault()
                  setSubmitted(true)
                }}
              >
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                  <Field label="Full name">
                    <input
                      type="text"
                      required
                      placeholder="Your name"
                      className="w-full rounded-md border border-line-2 bg-canvas px-4 py-3 text-[15px] text-fg placeholder:text-fg-5 focus:border-brand-700 focus:bg-white focus:outline-none"
                    />
                  </Field>
                  <Field label="Work email">
                    <input
                      type="email"
                      required
                      placeholder="name@org.com"
                      className="w-full rounded-md border border-line-2 bg-canvas px-4 py-3 text-[15px] text-fg placeholder:text-fg-5 focus:border-brand-700 focus:bg-white focus:outline-none"
                    />
                  </Field>
                  <Field label="I represent">
                    <select
                      required
                      defaultValue=""
                      className="w-full rounded-md border border-line-2 bg-canvas px-4 py-3 text-[15px] text-fg focus:border-brand-700 focus:bg-white focus:outline-none"
                    >
                      <option value="" disabled>Select audience</option>
                      <option>A college / institute</option>
                      <option>A school</option>
                      <option>A business / startup</option>
                      <option>A hiring team</option>
                      <option>A student / individual</option>
                    </select>
                  </Field>
                </div>

                <div className="mt-7 flex items-center justify-center">
                  <button
                    type="submit"
                    className="group inline-flex items-center gap-2 rounded-md bg-brand-700 px-7 py-3.5 text-[14.5px] font-semibold text-white shadow-[0_8px_24px_-8px_rgba(29,58,165,0.45)] transition-colors hover:bg-brand-800"
                  >
                    Submit enquiry
                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                      strokeWidth={2.5}
                    />
                  </button>
                </div>
              </form>
            )}

            {/* Direct contact strip */}
            <ul className="mx-auto mt-12 flex max-w-3xl flex-wrap items-center justify-center gap-x-10 gap-y-4 border-t border-line-2 pt-8 text-[14px]">
              <li className="inline-flex items-center gap-2 text-fg-2">
                <Phone className="h-3.5 w-3.5 text-brand-700" strokeWidth={2.25} />
                <a href="tel:+910000000000" className="font-semibold hover:text-brand-700">
                  +91 00000 00000
                </a>
              </li>
              <li className="inline-flex items-center gap-2 text-fg-2">
                <Mail className="h-3.5 w-3.5 text-brand-700" strokeWidth={2.25} />
                <a href="mailto:hello@alphinix.in" className="font-semibold hover:text-brand-700">
                  hello@alphinix.in
                </a>
              </li>
              <li className="inline-flex items-center gap-2 text-fg-4">
                <Clock className="h-3.5 w-3.5" strokeWidth={2.25} />
                Mon–Sat, 10:00–18:30 IST
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block text-left">
      <span className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.14em] text-fg-4">
        {label}
      </span>
      {children}
    </label>
  )
}
