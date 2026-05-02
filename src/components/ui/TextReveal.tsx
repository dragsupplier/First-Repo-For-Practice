import { motion, useReducedMotion } from 'motion/react'
import { cn } from '@/lib/cn'

type Props = {
  text: string
  className?: string
  /** Animate per word (default) or per character */
  unit?: 'word' | 'char'
  /** Stagger between units in ms */
  stagger?: number
  /** Delay before reveal starts */
  delay?: number
  /** Trigger on view (default) or on mount */
  trigger?: 'inview' | 'mount'
  as?: keyof React.JSX.IntrinsicElements
}

export function TextReveal({
  text,
  className,
  unit = 'word',
  stagger = 30,
  delay = 0,
  trigger = 'mount',
  as = 'span',
}: Props) {
  const reduce = useReducedMotion()
  const Tag = motion[as as 'span'] as typeof motion.span

  if (reduce) {
    return <Tag className={className}>{text}</Tag>
  }

  const tokens =
    unit === 'word'
      ? text.split(/(\s+)/) // keep whitespace as its own token
      : Array.from(text)

  const animateProps =
    trigger === 'inview'
      ? { initial: 'hidden', whileInView: 'visible', viewport: { once: true, margin: '-15%' } }
      : { initial: 'hidden', animate: 'visible' }

  return (
    <Tag
      className={cn('inline', className)}
      variants={{ visible: { transition: { staggerChildren: stagger / 1000, delayChildren: delay } } }}
      {...animateProps}
    >
      {tokens.map((tok, i) => {
        if (/^\s+$/.test(tok)) return <span key={i}>{tok}</span>
        return (
          <span
            key={i}
            className="inline-block overflow-hidden align-bottom leading-[1]"
            style={{ paddingBottom: '0.06em' }}
          >
            <motion.span
              className="inline-block"
              variants={{
                hidden: { y: '110%', opacity: 0 },
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: { duration: 0.7, ease: [0.2, 0.7, 0.2, 1] },
                },
              }}
            >
              {tok}
            </motion.span>
          </span>
        )
      })}
    </Tag>
  )
}
