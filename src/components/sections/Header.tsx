import { useEffect, useState } from 'react'
import {
  ChevronDown,
  Menu,
  X,
  GraduationCap,
  Building2,
  ShieldCheck,
  Mail,
  ArrowRight,
  UserCircle2,
  School,
  Rocket,
  Users,
  BookOpen,
  Newspaper,
  Calendar,
  Download,
} from 'lucide-react'
import { Logo } from '@/components/ui/Logo'
import { cn } from '@/lib/cn'
import type { LucideIcon } from 'lucide-react'

type MenuItem = { label: string; desc: string; href: string; icon: LucideIcon }

const SOLUTIONS: MenuItem[] = [
  { label: 'For Students', desc: 'Industrial training, internships & certifications.', href: '#audiences', icon: GraduationCap },
  { label: 'For Colleges', desc: 'Placements, NAAC/NBA, AI/IoT labs.', href: '#audiences', icon: Building2 },
  { label: 'For Schools', desc: 'AI · robotics · STEM/ATL labs.', href: '#audiences', icon: School },
  { label: 'For Businesses', desc: 'Web, mobile, AI & automation.', href: '#audiences', icon: Rocket },
  { label: 'For Hiring', desc: 'Permanent · contract · bulk drives.', href: '#audiences', icon: Users },
]

const RESOURCES: MenuItem[] = [
  { label: 'Blog', desc: 'Notes from the field.', href: '#', icon: Newspaper },
  { label: 'Webinars', desc: 'Upcoming live sessions.', href: '#', icon: Calendar },
  { label: 'Guides & Roadmaps', desc: 'Free downloads by segment.', href: '#', icon: Download },
  { label: 'Case Studies', desc: 'How we partner end-to-end.', href: '#trust', icon: BookOpen },
]

const PORTAL: MenuItem[] = [
  { label: 'Student LMS', desc: 'Courses, assessments, certificates.', href: '#', icon: GraduationCap },
  { label: 'College ERP', desc: 'Academic + placement operations.', href: '#', icon: Building2 },
  { label: 'Admin Panel', desc: 'Lead pipeline & analytics.', href: '#', icon: ShieldCheck },
]

const SIMPLE_LINKS: { label: string; href: string }[] = [
  { label: 'Programs', href: '#approach' },
  { label: 'About', href: '#about' },
  { label: 'Careers', href: '#footer' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobile, setMobile] = useState(false)
  const [open, setOpen] = useState<string | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menus on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(null)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-[background,backdrop-filter,border-color] duration-300',
        scrolled
          ? 'border-b border-white/[0.06] bg-bg/75 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 md:px-8">
        <Logo />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex" onMouseLeave={() => setOpen(null)}>
          <DropdownTrigger
            label="Solutions"
            isOpen={open === 'solutions'}
            onEnter={() => setOpen('solutions')}
          />
          <DropdownTrigger
            label="Resources"
            isOpen={open === 'resources'}
            onEnter={() => setOpen('resources')}
          />
          {SIMPLE_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onMouseEnter={() => setOpen(null)}
              className="px-3.5 py-2 text-[14.5px] font-medium text-fg-2 transition-colors hover:text-fg"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Right cluster */}
        <div className="hidden items-center gap-2 lg:flex">
          <PortalDropdown items={PORTAL} />
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-[14px] font-medium text-fg-2 ring-1 ring-white/10 transition-colors hover:text-fg hover:ring-white/30"
          >
            <Mail className="h-3.5 w-3.5" strokeWidth={2.25} />
            Contact us
          </a>
          <a
            href="#contact"
            className="group inline-flex items-center gap-1.5 rounded-full bg-brand-500 px-4 py-2 text-[14px] font-semibold text-white transition-transform duration-200 hover:translate-y-[-1px] hover:bg-brand-400"
          >
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" strokeWidth={2.5} />
            Get started
          </a>
        </div>

        <button
          className="grid h-10 w-10 place-items-center rounded-lg text-fg ring-1 ring-white/10 lg:hidden"
          onClick={() => setMobile((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobile ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mega menu — Solutions */}
      <MegaMenu visible={open === 'solutions'} onClose={() => setOpen(null)}>
        <MegaPanel
          title="Solutions"
          subtitle="Five doors. One platform."
          items={SOLUTIONS}
        />
      </MegaMenu>

      {/* Mega menu — Resources */}
      <MegaMenu visible={open === 'resources'} onClose={() => setOpen(null)}>
        <MegaPanel
          title="Resources"
          subtitle="Notes, sessions and free tools."
          items={RESOURCES}
        />
      </MegaMenu>

      {/* Mobile sheet */}
      <div
        className={cn(
          'lg:hidden',
          mobile ? 'max-h-[100vh] border-t border-white/10' : 'max-h-0 overflow-hidden',
          'transition-[max-height] duration-300',
        )}
      >
        <div className="space-y-4 bg-bg px-5 py-5">
          <MobileGroup title="Solutions" items={SOLUTIONS} />
          <MobileGroup title="Resources" items={RESOURCES} />
          <div className="space-y-1">
            <p className="px-2 pb-1 pt-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-fg-3">More</p>
            {SIMPLE_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMobile(false)}
                className="block rounded-lg px-2 py-2.5 text-[15px] font-medium text-fg-2 hover:bg-white/[0.05]"
              >
                {l.label}
              </a>
            ))}
          </div>
          <MobileGroup title="Portal" items={PORTAL} />
          <div className="flex flex-col gap-2 pt-2">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full px-4 py-3 text-[14.5px] font-medium text-fg ring-1 ring-white/15"
            >
              <Mail className="h-3.5 w-3.5" /> Contact us
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-500 px-4 py-3 text-[14.5px] font-semibold text-white"
            >
              <ArrowRight className="h-3.5 w-3.5" /> Get started
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

function DropdownTrigger({
  label,
  isOpen,
  onEnter,
}: {
  label: string
  isOpen: boolean
  onEnter: () => void
}) {
  return (
    <button
      onMouseEnter={onEnter}
      className={cn(
        'inline-flex items-center gap-1 rounded-full px-3.5 py-2 text-[14.5px] font-medium transition-colors',
        isOpen ? 'text-fg' : 'text-fg-2 hover:text-fg',
      )}
      aria-expanded={isOpen}
    >
      {label}
      <ChevronDown
        className={cn('h-3.5 w-3.5 transition-transform duration-200', isOpen && 'rotate-180')}
        strokeWidth={2.25}
      />
    </button>
  )
}

function MegaMenu({
  visible,
  onClose,
  children,
}: {
  visible: boolean
  onClose: () => void
  children: React.ReactNode
}) {
  return (
    <div
      onMouseLeave={onClose}
      className={cn(
        'absolute inset-x-0 top-full origin-top transition-[opacity,transform] duration-200',
        visible
          ? 'pointer-events-auto translate-y-0 opacity-100'
          : 'pointer-events-none -translate-y-1 opacity-0',
      )}
    >
      <div className="mx-auto max-w-7xl px-5 pt-2 md:px-8">
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-surface-1/95 shadow-2xl backdrop-blur-xl">
          {children}
        </div>
      </div>
    </div>
  )
}

function MegaPanel({
  title,
  subtitle,
  items,
}: {
  title: string
  subtitle: string
  items: MenuItem[]
}) {
  return (
    <div className="grid gap-0 md:grid-cols-12">
      <div className="border-white/[0.06] bg-white/[0.02] p-7 md:col-span-3 md:border-r">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-fg-3">{title}</p>
        <p className="mt-3 font-display text-[22px] font-bold leading-tight tracking-tight text-fg">
          {subtitle}
        </p>
      </div>
      <ul className="grid gap-0 p-3 md:col-span-9 md:grid-cols-2">
        {items.map((it) => (
          <li key={it.label}>
            <a
              href={it.href}
              className="group flex items-start gap-3 rounded-xl p-4 transition-colors hover:bg-white/[0.05]"
            >
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-white/[0.06] text-fg ring-1 ring-white/10 transition-colors group-hover:bg-brand-500/20 group-hover:ring-brand-500/40">
                <it.icon className="h-[16px] w-[16px]" strokeWidth={2} />
              </span>
              <span className="flex flex-col">
                <span className="text-[14px] font-semibold text-fg">{it.label}</span>
                <span className="mt-0.5 text-[12.5px] text-fg-3">{it.desc}</span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

function PortalDropdown({ items }: { items: MenuItem[] }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button
        className="inline-flex items-center gap-1.5 rounded-full px-3.5 py-2 text-[14px] font-medium text-fg-2 ring-1 ring-white/10 transition-colors hover:text-fg hover:ring-white/30"
        aria-expanded={open}
      >
        <UserCircle2 className="h-3.5 w-3.5" strokeWidth={2} />
        Portal
        <ChevronDown
          className={cn('h-3.5 w-3.5 transition-transform duration-200', open && 'rotate-180')}
          strokeWidth={2.25}
        />
      </button>
      <div
        className={cn(
          'absolute right-0 top-full w-[320px] origin-top-right pt-3 transition-[opacity,transform] duration-200',
          open
            ? 'pointer-events-auto translate-y-0 opacity-100'
            : 'pointer-events-none -translate-y-1 opacity-0',
        )}
      >
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-surface-1/95 p-2 shadow-2xl backdrop-blur-xl">
          {items.map((p) => (
            <a
              key={p.label}
              href={p.href}
              className="group flex gap-3 rounded-xl p-3 transition-colors hover:bg-white/[0.05]"
            >
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-white/[0.06] text-fg ring-1 ring-white/10">
                <p.icon className="h-[16px] w-[16px]" strokeWidth={2} />
              </span>
              <span className="flex flex-col">
                <span className="text-[13.5px] font-semibold text-fg">{p.label}</span>
                <span className="mt-0.5 text-[12px] text-fg-3">{p.desc}</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

function MobileGroup({ title, items }: { title: string; items: MenuItem[] }) {
  return (
    <div className="space-y-1">
      <p className="px-2 pb-1 pt-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-fg-3">
        {title}
      </p>
      {items.map((it) => (
        <a
          key={it.label}
          href={it.href}
          className="flex items-start gap-3 rounded-lg px-2 py-2.5 hover:bg-white/[0.05]"
        >
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-white/[0.06] text-fg ring-1 ring-white/10">
            <it.icon className="h-4 w-4" strokeWidth={2} />
          </span>
          <span className="flex flex-col">
            <span className="text-[14px] font-medium text-fg">{it.label}</span>
            <span className="text-[12px] text-fg-3">{it.desc}</span>
          </span>
        </a>
      ))}
    </div>
  )
}
