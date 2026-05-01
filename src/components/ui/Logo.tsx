import { cn } from '@/lib/cn'

type Props = {
  className?: string
  /** Subtle tagline below wordmark (e.g. "Talent · Tech · Hiring"). Set null/empty to hide. */
  tagline?: string | null
  /** Color scheme. 'auto' inherits from parent. */
  variant?: 'auto' | 'light' | 'dark'
}

export function Logo({ className, tagline = 'Talent · Tech · Hiring', variant = 'auto' }: Props) {
  const wordmark =
    variant === 'light'
      ? 'text-fg'
      : variant === 'dark'
        ? 'text-ink-950'
        : 'text-fg'
  const sub =
    variant === 'light'
      ? 'text-fg-3'
      : variant === 'dark'
        ? 'text-ink-500'
        : 'text-fg-3'

  return (
    <a href="/" className={cn('inline-flex items-center gap-2.5', className)}>
      <Mark />
      <span className="flex flex-col leading-none">
        <span className={cn('font-display text-[18px] font-bold tracking-tight', wordmark)}>
          Alphinix
        </span>
        {tagline ? (
          <span
            className={cn(
              'mt-1 font-mono text-[9.5px] font-medium uppercase tracking-[0.18em]',
              sub,
            )}
          >
            {tagline}
          </span>
        ) : null}
      </span>
    </a>
  )
}

function Mark() {
  return (
    <span className="relative grid h-9 w-9 place-items-center overflow-hidden rounded-[10px] bg-gradient-to-br from-brand-500 via-brand-600 to-brand-800 text-white ring-1 ring-white/10">
      <svg viewBox="0 0 24 24" className="h-[16px] w-[16px]" fill="none" aria-hidden>
        <path
          d="M3 20L12 4l9 16"
          stroke="currentColor"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M7.5 14h9" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
      </svg>
      <span aria-hidden className="absolute inset-x-0 -top-2 h-2 bg-white/30 blur-md" />
    </span>
  )
}
