import { motion } from 'motion/react'

export function DisplayMoment() {
  return (
    <section className="relative bg-white">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="flex items-center gap-3 pb-8">
          <span className="kicker">A note on how we work</span>
          <span className="h-px flex-1 bg-line" />
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-20%' }}
          transition={{ duration: 0.6 }}
          className="display-xl text-[14vw] text-fg sm:text-[12vw] md:text-[112px] lg:text-[136px]"
        >
          We replace four vendors
          <br />
          with{' '}
          <span className="text-brand-700">one accountable team.</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-20%' }}
          transition={{ duration: 0.5, delay: 0.18 }}
          className="mt-12 grid grid-cols-12 gap-8 border-t border-line pt-8"
        >
          <div className="col-span-12 md:col-span-6">
            <p className="text-[15.5px] leading-[1.7] text-fg-3 md:text-[17px]">
              Most institutions juggle four or five separate partners — one
              for placement, one for training, one for software, one for
              hiring, one for accreditation. Each handover loses a week.
              Each contract loses an outcome.
            </p>
          </div>
          <div className="col-span-12 md:col-span-6">
            <p className="text-[15.5px] leading-[1.7] text-fg-3 md:text-[17px]">
              Alphinix runs all four under a single SOW, a single owner and
              a single weekly status — so the work compounds across cohorts
              and quarters instead of restarting at every vendor seam.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
