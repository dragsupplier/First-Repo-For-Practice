import { motion } from 'motion/react'
import { ArrowRight, ArrowDown } from 'lucide-react'
import { TextReveal } from '@/components/ui/TextReveal'

const VENDORS = ['Training', 'Software', 'Recruitment', 'Accreditation']

export function DisplayMoment() {
  return (
    <section className="relative bg-white">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        {/* Single-column display headline — no 50/50 */}
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="display-xl text-[clamp(38px,8vw,96px)] text-fg">
            <TextReveal text="Four vendors." unit="word" stagger={50} trigger="inview" as="span" />
            <br />
            <span className="text-brand-700">
              <TextReveal text="One accountable team." unit="word" stagger={50} trigger="inview" as="span" />
            </span>
          </h2>
        </div>

        {/* Horizontal flow band — vendors above, Alphinix below, NOT a side-by-side card */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15%' }}
          transition={{ duration: 0.5 }}
          className="mx-auto mt-16 max-w-5xl"
        >
          {/* Top row — 4 vendor pills */}
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {VENDORS.map((v) => (
              <div
                key={v}
                className="rounded-md border border-line-2 bg-canvas px-4 py-4 text-center"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-fg-4 line-through decoration-fg-4 decoration-[1.5px]">
                  Vendor
                </p>
                <p className="mt-1.5 font-display text-[16px] font-semibold tracking-tight text-fg-3">
                  {v}
                </p>
              </div>
            ))}
          </div>

          {/* Connector arrow row */}
          <div className="my-4 flex items-center justify-center">
            <ArrowDown className="h-6 w-6 text-brand-700" strokeWidth={2.5} />
          </div>

          {/* Bottom — single Alphinix bar */}
          <div className="rounded-md bg-brand-700 p-6 text-center text-white md:p-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-200">
              Alphinix
            </p>
            <p className="mt-2 font-display text-[24px] font-semibold tracking-tight text-white md:text-[28px]">
              All four under a single team, single SOW, single weekly status.
            </p>
            <a
              href="#audiences"
              className="group mt-6 inline-flex items-center gap-2 rounded-md bg-white px-5 py-2.5 text-[13.5px] font-semibold text-brand-950 transition-colors hover:bg-brand-50"
            >
              See how we replace them
              <ArrowRight
                className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
                strokeWidth={2.5}
              />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
