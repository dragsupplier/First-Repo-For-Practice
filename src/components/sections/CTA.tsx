import { motion } from 'motion/react'
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react'

export function CTA() {
  return (
    <section id="contact" className="relative bg-white py-14 md:py-16">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15%' }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-lg bg-brand-950 p-8 text-white md:p-12"
        >
          <Bg />
          <div className="relative grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-brand-200">
                Get in touch
              </p>
              <h2 className="mt-3 font-display text-[28px] font-bold leading-[1.15] tracking-[-0.02em] md:text-[40px] lg:text-[44px]">
                Tell us about your institution or business.
              </h2>
              <p className="mt-4 max-w-xl text-[15px] leading-[1.6] text-white/80 md:text-[16px]">
                Twenty minutes is all it takes to figure out which Alphinix
                door is yours. No deck. No script. Just a real conversation.
              </p>

              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {[
                  { icon: Phone, label: 'Phone', value: '+91 00000 00000' },
                  { icon: Mail,  label: 'Email', value: 'hello@alphinix.in' },
                  { icon: MapPin, label: 'Office', value: 'Pune, India' },
                ].map((c) => (
                  <div key={c.label} className="rounded-md border border-white/10 bg-white/[0.04] p-3">
                    <div className="flex items-center gap-2">
                      <c.icon className="h-3.5 w-3.5 text-brand-200" strokeWidth={2.25} />
                      <span className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-white/60">
                        {c.label}
                      </span>
                    </div>
                    <p className="mt-1.5 text-[13.5px] font-semibold">{c.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-md border border-white/10 bg-white/[0.04] p-5">
                <p className="text-[11.5px] font-semibold uppercase tracking-[0.16em] text-white/65">
                  Quick enquiry
                </p>
                <form
                  className="mt-4 space-y-3"
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
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" strokeWidth={2.5} />
                  </button>
                </form>
              </div>
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

function Bg() {
  return (
    <svg
      aria-hidden
      className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.18]"
      viewBox="0 0 1200 500"
      preserveAspectRatio="xMidYMid slice"
    >
      <g stroke="rgba(255,255,255,0.4)" strokeWidth="0.6">
        {Array.from({ length: 28 }).map((_, i) => (
          <line key={i} x1={i * 50} y1="0" x2={i * 50 - 200} y2="500" />
        ))}
      </g>
    </svg>
  )
}
