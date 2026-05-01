import { cn } from '@/lib/cn'
import { ArrowUpRight } from 'lucide-react'
import { type ComponentPropsWithoutRef, type ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost'

type Props = ComponentPropsWithoutRef<'a'> & {
  variant?: Variant
  arrow?: boolean
  children: ReactNode
}

export function Button({ variant = 'primary', arrow = true, className, children, ...rest }: Props) {
  const base =
    'group relative inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[15px] font-medium tracking-tight transition-[background,color,transform,box-shadow] duration-300 will-change-transform'
  const styles: Record<Variant, string> = {
    primary:
      'bg-ink-950 text-paper hover:bg-brand-950 active:translate-y-px',
    secondary:
      'bg-paper text-ink-950 ring-1 ring-ink-950/10 hover:ring-ink-950/30',
    ghost:
      'text-ink-950 hover:bg-ink-950/[0.04]',
  }
  return (
    <a className={cn(base, styles[variant], className)} {...rest}>
      <span>{children}</span>
      {arrow && (
        <ArrowUpRight
          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          strokeWidth={2.25}
        />
      )}
    </a>
  )
}
