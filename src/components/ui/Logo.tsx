import { cn } from '@/lib/cn'

export function Logo({ className }: { className?: string }) {
  return (
    <a href="/" className={cn('group inline-flex items-center gap-2.5', className)}>
      <span className="relative grid h-8 w-8 place-items-center rounded-lg bg-brand-950 text-paper">
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden>
          <path d="M3 20L12 4l9 16" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M7.5 14h9" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
        </svg>
        <span className="absolute -bottom-1 -right-1 h-2 w-2 rounded-full bg-accent-500 ring-2 ring-paper transition-transform group-hover:scale-110" />
      </span>
      <span className="font-display text-[19px] font-bold tracking-tight text-ink-950">
        Alphinix
      </span>
    </a>
  )
}
