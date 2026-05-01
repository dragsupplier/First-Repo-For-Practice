import { motion } from 'motion/react'
import { ArrowRight, Phone, Mail, MapPin } from 'lucide-react'

export function CTA() {
  return (
    <section id="contact" className="relative bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15%' }}
          transition={{ duration: 0.5 }}
          className="overflow-hidden rounded-md bg-brand-950 text-white"
        >
          <div className="grid grid-cols-12">
            {/* Left — manifesto + contact details */}
            <div className="col-span-12 p-8 md:p-14 lg:col-span-7">
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-200">
                § Get in touch
              </p>
              <h2 className="mt-5 font-display text-[36px] font-semibold leading-[1.04] tracking-[-0.02em] md:text-[56px] lg:text-[64px]">
                Tell us where you are. <em className="font-medium italic text-brand-200">We'll meet you there.</em>
              </h2>
              <p className="mt-6 max-w-xl text-[16px] leading-[1.65] text-white/75">
                Twenty minutes is all it takes to figure out which Alphinix
                door is yours. No deck. No script. Just a real conversation.
              </p>

              <div className="mt-10 grid grid-cols-1 gap-y-5 sm:grid-cols-3">
                {[
                  { icon: Phone, label: 'Phone', value: '+91 00000 00000' },
                  { icon: Mail,  label: 'Email', value: 'hello@alphinix.in' },
                  { icon: MapPin, label: 'Office', value: 'Pune, India' },
                ].map((c) => (
                  <div key={c.label}>
                    <div className="flex items-center gap-1.5">
                      <c.icon className="h-3.5 w-3.5 text-brand-200" strokeWidth={2.25} />
                      <span className="font-mono text-[10.5px] font-semibold uppercase tracking-[0.16em] text-white/55">
                        {c.label}
                      </span>
                    </div>
                    <p className="mt-1.5 text-[15px] font-semibold">{c.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — enquiry form */}
            <div className="col-span-12 border-t border-white/10 bg-white/[0.03] p-8 md:p-14 lg:col-span-5 lg:border-l lg:border-t-0">
              <p className="font-mono text-[10.5px] font-semibold uppercase tracking-[0.18em] text-brand-200">
                Quick enquiry
              </p>
              <p className="mt-3 font-display text-[20px] font-medium leading-tight tracking-tight text-white md:text-[22px]">
                Tell us about your institution or business.
              </p>
              <form
                className="mt-6 space-y-3"
                onSubmit={(e) => {
                  e.preventDefault()
                  window.location.href = 'mailto:hello@alphinix.in'
                }}
              >
                <Field label="Name">
                  <input
                    type="text"
                    required
                    placeholder="Full name"
                    className="w-full rounded-md border border-white/15 bg-white/[0.04] px-3.5 py-2.5 text-[14px] text-white placeholder:text-white/40 focus:border-white/30 focus:outline-none"
                  />
                </Field>
                <Field label="Work email">
                  <input
                    type="email"
                    required
                    placeholder="name@organization.com"
                    className="w-full rounded-md border border-white/15 bg-white/[0.04] px-3.5 py-2.5 text-[14px] text-white placeholder:text-white/40 focus:border-white/30 focus:outline-none"
                  />
                </Field>
                <Field label="I represent">
                  <select
                    defaultValue=""
                    required
                    className="w-full rounded-md border border-white/15 bg-white/[0.04] px-3.5 py-2.5 text-[14px] text-white focus:border-white/30 focus:outline-none"
                  >
                    <option value="" disabled className="text-fg">Select segment</option>
                    <option className="text-fg">A college / institute</option>
                    <option className="text-fg">A school</option>
                    <option className="text-fg">A business / startup</option>
                    <option className="text-fg">A hiring team</option>
                    <option className="text-fg">A student / individual</option>
                  </select>
                </Field>
                <button
                  type="submit"
                  className="group inline-flex w-full items-center justify-center gap-1.5 rounded-md bg-white px-5 py-3 text-[14px] font-semibold text-brand-950 transition-colors hover:bg-brand-50"
                >
                  Submit enquiry
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                    strokeWidth={2.5}
                  />
                </button>
                <p className="text-[11.5px] text-white/45">
                  We typically respond within one business day.
                </p>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[12px] font-medium text-white/70">{label}</span>
      {children}
    </label>
  )
}
