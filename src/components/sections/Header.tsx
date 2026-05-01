import { useEffect, useState } from 'react'
import { ChevronDown, Menu, X, GraduationCap, Building2, ShieldCheck } from 'lucide-react'
import { Logo } from '@/components/ui/Logo'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/cn'

const NAV = [
  { label: 'Services', href: '#audiences' },
  { label: 'About', href: '#about' },
  { label: 'Case Studies', href: '#trust' },
  { label: 'Resources', href: '#capabilities' },
  { label: 'Careers', href: '#footer' },
]

const PORTAL = [
  { icon: GraduationCap, title: 'Student LMS', desc: 'Courses, assessments, certificates.' },
  { icon: Building2, title: 'College ERP', desc: 'Academic + placement operations.' },
  { icon: ShieldCheck, title: 'Admin Panel', desc: 'Lead pipeline + analytics.' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [portalOpen, setPortalOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-[background,backdrop-filter,box-shadow] duration-300',
        scrolled
          ? 'bg-paper/80 backdrop-blur-md shadow-[0_1px_0_0_rgba(11,13,18,0.06)]'
          : 'bg-transparent',
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-[72px] md:px-8">
        <Logo />

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="nav-underline text-[14.5px] font-medium text-ink-800 hover:text-ink-950"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <div
            className="relative"
            onMouseEnter={() => setPortalOpen(true)}
            onMouseLeave={() => setPortalOpen(false)}
          >
            <button
              className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-[14.5px] font-medium text-ink-800 ring-1 ring-ink-950/10 transition-colors hover:text-ink-950 hover:ring-ink-950/30"
              aria-haspopup="true"
              aria-expanded={portalOpen}
            >
              Portal
              <ChevronDown
                className={cn('h-4 w-4 transition-transform duration-200', portalOpen && 'rotate-180')}
                strokeWidth={2.25}
              />
            </button>
            <div
              className={cn(
                'absolute right-0 top-full w-80 origin-top-right pt-3 transition-[opacity,transform] duration-200',
                portalOpen
                  ? 'pointer-events-auto translate-y-0 opacity-100'
                  : 'pointer-events-none -translate-y-1 opacity-0',
              )}
            >
              <div className="overflow-hidden rounded-2xl bg-paper p-2 shadow-xl ring-1 ring-ink-950/10">
                {PORTAL.map((p) => (
                  <a
                    key={p.title}
                    href="#"
                    className="group flex gap-3 rounded-xl p-3 transition-colors hover:bg-ink-100"
                  >
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-brand-950 text-paper">
                      <p.icon className="h-[18px] w-[18px]" strokeWidth={2} />
                    </span>
                    <span className="flex flex-col">
                      <span className="text-[14px] font-semibold text-ink-950">{p.title}</span>
                      <span className="text-[13px] text-ink-500">{p.desc}</span>
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
          <Button href="#contact" variant="primary">Talk to us</Button>
        </div>

        <button
          className="grid h-10 w-10 place-items-center rounded-lg ring-1 ring-ink-950/10 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile sheet */}
      <div
        className={cn(
          'lg:hidden',
          open ? 'max-h-[100vh] border-t border-ink-200' : 'max-h-0 overflow-hidden',
          'transition-[max-height] duration-300',
        )}
      >
        <div className="space-y-1 bg-paper px-5 py-4">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-2 py-2.5 text-[15px] font-medium text-ink-800 hover:bg-ink-100"
            >
              {n.label}
            </a>
          ))}
          <div className="my-2 h-px bg-ink-200" />
          <p className="px-2 pb-1 pt-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-500">Portal</p>
          {PORTAL.map((p) => (
            <a key={p.title} href="#" className="flex items-center gap-3 rounded-lg px-2 py-2.5 hover:bg-ink-100">
              <p.icon className="h-4 w-4 text-brand-700" strokeWidth={2.25} />
              <span className="text-[14.5px] font-medium text-ink-900">{p.title}</span>
            </a>
          ))}
          <div className="pt-3">
            <Button href="#contact" variant="primary" className="w-full justify-center">Talk to us</Button>
          </div>
        </div>
      </div>
    </header>
  )
}
