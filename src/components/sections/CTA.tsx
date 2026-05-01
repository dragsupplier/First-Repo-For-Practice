import { motion } from 'motion/react'
import { ArrowRight, Phone, Mail } from 'lucide-react'

export function CTA() {
  return (
    <section id="contact" className="relative bg-ink-950 text-white">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15%' }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-12 gap-10"
        >
          {/* Left — pitch + contact */}
          <div className="col-span-12 lg:col-span-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/55">
              08 / Get in touch
            </p>
            <h2 className="mt-4 font-display text-[28px] font-semibold leading-[1.08] tracking-[-0.02em] text-white md:text-[36px] lg:text-[44px]">
              Tell us about your institution or business.
            </h2>
            <p className="mt-5 max-w-xl text-[15.5px] leading-[1.65] text-white/70">
              Twenty minutes is all it takes to figure out which Alphinix
              door is yours. No deck. No script. Just a real conversation.
            </p>

            <ul className="mt-9 space-y-3 text-[14px]">
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-brand-200" strokeWidth={2.25} />
                <span className="font-medium">+91 00000 00000</span>
                <span className="text-white/45">·</span>
                <span className="text-white/60">Mon–Sat, 10:00–18:30 IST</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-brand-200" strokeWidth={2.25} />
                <a href="mailto:hello@alphinix.in" className="font-medium hover:text-brand-200">
                  hello@alphinix.in
                </a>
                <span className="text-white/45">·</span>
                <span className="text-white/60">Replies within 1 business day</span>
              </li>
            </ul>
          </div>

          {/* Right — inline underline form */}
          <div className="col-span-12 lg:col-span-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/55">
              Quick enquiry
            </p>
            <form
              className="mt-5 space-y-7"
              onSubmit={(e) => {
                e.preventDefault()
                window.location.href = 'mailto:hello@alphinix.in'
              }}
            >
              <UnderlineField label="Full name" id="name">
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="Your name"
                  className="w-full bg-transparent py-2 text-[15px] text-white placeholder:text-white/35 focus:outline-none"
                />
              </UnderlineField>
              <UnderlineField label="Work email" id="email">
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="name@organization.com"
                  className="w-full bg-transparent py-2 text-[15px] text-white placeholder:text-white/35 focus:outline-none"
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
                className="group inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-[14px] font-semibold text-ink-950 transition-colors hover:bg-brand-50"
              >
                Submit enquiry
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                  strokeWidth={2.5}
                />
              </button>
            </form>
          </div>
        </motion.div>
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
    <div className="border-b border-white/15 transition-colors focus-within:border-white/45">
      <label
        htmlFor={id}
        className="block text-[11px] font-semibold uppercase tracking-[0.14em] text-white/55"
      >
        {label}
      </label>
      {children}
    </div>
  )
}
