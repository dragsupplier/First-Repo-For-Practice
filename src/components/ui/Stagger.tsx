import { motion, useReducedMotion } from 'motion/react'
import { cn } from '@/lib/cn'

type StaggerProps = {
  children: React.ReactNode
  /** Stagger between children in seconds */
  step?: number
  className?: string
  /** Delay before the sequence starts */
  delay?: number
}

export function Stagger({ children, step = 0.06, delay = 0, className }: StaggerProps) {
  const reduce = useReducedMotion()
  if (reduce) return <div className={className}>{children}</div>

  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-10%' }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: step, delayChildren: delay } },
      }}
    >
      {children}
    </motion.div>
  )
}

type RiseProps = { children: React.ReactNode; className?: string; y?: number }

/** Child of Stagger — rises and fades in when its parent triggers */
export function Rise({ children, className, y = 14 }: RiseProps) {
  const reduce = useReducedMotion()
  if (reduce) return <div className={className}>{children}</div>

  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y, filter: 'blur(4px)' },
        visible: {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          transition: { duration: 0.55, ease: [0.2, 0.7, 0.2, 1] },
        },
      }}
    >
      {children}
    </motion.div>
  )
}
