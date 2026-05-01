import { useEffect, useState } from 'react'
import {
  ChevronDown,
  Menu,
  X,
  GraduationCap,
  Building2,
  School,
  Rocket,
  Users,
  Phone,
  Mail,
  MapPin,
  ShieldCheck,
  Newspaper,
  BookOpen,
  Calendar,
  Download,
  ArrowRight,
} from 'lucide-react'
import { Logo } from '@/components/ui/Logo'
import { cn } from '@/lib/cn'
import type { LucideIcon } from 'lucide-react'

type Item = { label: string; desc?: string; href: string; icon?: LucideIcon }

const SOLUTIONS: Item[] = [
  { label: 'For Students', desc: 'Industrial training, internships, certifications.', href: '#audiences', icon: GraduationCap },
  { label: 'For Colleges', desc: 'Placements, NAAC/NBA support, AI/IoT labs.', href: '#audiences', icon: Building2 },
  { label: 'For Schools', desc: 'AI · robotics · STEM/ATL labs.', href: '#audiences', icon: School },
  { label: 'For Businesses', desc: 'Web, mobile, AI, automation, cloud.', href: '#audiences', icon: Rocket },
  { label: 'For Hiring Teams', desc: 'Permanent · contract · bulk drives.', href: '#audiences', icon: Users },
]

const RESOURCES: Item[] = [
  { label: 'Blog', desc: 'Notes from the field.', href: '#', icon: Newspaper },
  { label: 'Webinars', desc: 'Upcoming live sessions.', href: '#', icon: Calendar },
  { label: 'Guides & Roadmaps', desc: 'Free downloads by segment.', href: '#', icon: Download },
  { label: 'Case Studies', desc: 'Selected engagements.', href: '#trust', icon: BookOpen },
]

const PORTAL: Item[] = [
  { label: 'Student LMS', desc: 'Courses, assessments, certificates.', href: '#', icon: GraduationCap },
  { label: 'College ERP', desc: 'Academic + placement operations.', href: '#', icon: Building2 },
  { label: 'Admin Console', desc: 'Internal pipeline & analytics.', href: '#', icon: ShieldCheck },
]

const SIMPLE_LINKS = [
  { label: 'Industries', href: '#industries' },
  { label: 'Approach', href: '#approach' },
  { label: 'About', href: '#about' },
  { label: 'Careers', href: '#footer' },
]

export function Header() {
  const [open, setOpen] = useState<string | null>(null)
  const [mobile, setMobile] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(null)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Utility bar */}
      <div className="utility-bar hidden md:block">
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-between px-5 md:px-8">
          <div className="flex items-center gap-5">
            <span className="inline-flex items-center gap-1.5 text-white/80">
              <MapPin className="h-3 w-3" strokeWidth={2.25} />
              Pune, Maharashtra · India
            </span>
            <a href="tel:+910000000000" className="inline-flex items-center gap-1.5 text-white/80 hover:text-white">
              <Phone className="h-3 w-3" strokeWidth={2.25} />
              +91 00000 00000
            </a>
            <a href="mailto:hello@alphinix.in" className="inline-flex items-center gap-1.5 text-white/80 hover:text-white">
              <Mail className="h-3 w-3" strokeWidth={2.25} />
              hello@alphinix.in
            </a>
          </div>
          <div className="flex items-center gap-5 text-white/80">
            <a href="#" className="hover:text-white">Investors</a>
            <a href="#" className="hover:text-white">Partners</a>
            <a href="#" className="hover:text-white">Newsroom</a>
            <a href="#contact" className="hover:text-white">Support</a>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div
        className={cn(
          'border-b bg-white transition-shadow',
          scrolled ? 'border-line shadow-sm' : 'border-transparent',
        )}
      >
        <div className="mx-auto flex h-[68px] max-w-7xl items-center justify-between px-5 md:px-8">
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
                className="px-3.5 py-2 text-[14px] font-medium text-fg-2 transition-colors hover:text-fg"
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
              className="group inline-flex items-center gap-1.5 rounded-md bg-brand-700 px-4 py-2 text-[13.5px] font-semibold text-white transition-colors hover:bg-brand-800"
            >
              Request a proposal
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" strokeWidth={2.5} />
            </a>
          </div>

          <button
            className="grid h-10 w-10 place-items-center rounded-md text-fg ring-1 ring-line lg:hidden"
            onClick={() => setMobile((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobile ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mega menus */}
        <MegaMenu visible={open === 'solutions'} onClose={() => setOpen(null)}>
          <MegaPanel
            title="Solutions"
            tagline="Five doors. One platform."
            items={SOLUTIONS}
            footer={{
              title: 'Not sure where to start?',
              body: 'Tell us about your institution or company — we will recommend the right entry point.',
              cta: 'Talk to a consultant',
              href: '#contact',
            }}
          />
        </MegaMenu>

        <MegaMenu visible={open === 'resources'} onClose={() => setOpen(null)}>
          <MegaPanel
            title="Resources"
            tagline="Insights, sessions and free tools."
            items={RESOURCES}
            footer={{
              title: 'Subscribe to insights',
              body: 'Quarterly notes on hiring trends, academic operations and applied AI.',
              cta: 'Visit the blog',
              href: '#',
            }}
          />
        </MegaMenu>
      </div>

      {/* Mobile sheet */}
      <div
        className={cn(
          'border-b border-line bg-white lg:hidden',
          mobile ? 'max-h-[calc(100vh-60px)] overflow-y-auto' : 'max-h-0 overflow-hidden',
          'transition-[max-height] duration-300',
        )}
      >
        <div className="space-y-5 px-5 py-5">
          <MobileGroup title="Solutions" items={SOLUTIONS} />
          <MobileGroup title="Resources" items={RESOURCES} />
          <MobileGroup title="Portal" items={PORTAL} />
          <div className="space-y-1">
            <p className="px-1 pb-1 pt-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-fg-4">More</p>
            {SIMPLE_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMobile(false)}
                className="block rounded-md px-2 py-2.5 text-[14.5px] font-medium text-fg-2 hover:bg-canvas"
              >
                {l.label}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="inline-flex w-full items-center justify-center gap-1.5 rounded-md bg-brand-700 px-4 py-3 text-[14px] font-semibold text-white"
          >
            Request a proposal
            <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} />
          </a>
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
        'inline-flex items-center gap-1 px-3.5 py-2 text-[14px] font-medium transition-colors',
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
        <div className="overflow-hidden rounded-md border border-line bg-white shadow-xl">
          {children}
        </div>
      </div>
    </div>
  )
}

function MegaPanel({
  title,
  tagline,
  items,
  footer,
}: {
  title: string
  tagline: string
  items: Item[]
  footer: { title: string; body: string; cta: string; href: string }
}) {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-3 border-r border-line bg-canvas p-7">
        <p className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-fg-4">{title}</p>
        <p className="mt-3 font-display text-[20px] font-bold leading-tight tracking-tight text-fg">
          {tagline}
        </p>
        <div className="mt-6 rounded-md border border-line bg-white p-4">
          <p className="text-[12.5px] font-semibold text-fg">{footer.title}</p>
          <p className="mt-1.5 text-[12.5px] leading-snug text-fg-3">{footer.body}</p>
          <a
            href={footer.href}
            className="mt-3 inline-flex items-center gap-1 text-[12.5px] font-semibold text-brand-700 hover:text-brand-800"
          >
            {footer.cta}
            <ArrowRight className="h-3 w-3" strokeWidth={2.5} />
          </a>
        </div>
      </div>
      <ul className="col-span-9 grid grid-cols-2 gap-0 p-3">
        {items.map((it) => (
          <li key={it.label}>
            <a
              href={it.href}
              className="group flex items-start gap-3 rounded-md p-3.5 transition-colors hover:bg-canvas"
            >
              {it.icon ? (
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-md bg-brand-50 text-brand-700 ring-1 ring-brand-100">
                  <it.icon className="h-[16px] w-[16px]" strokeWidth={2} />
                </span>
              ) : null}
              <span className="flex flex-col">
                <span className="text-[13.5px] font-semibold text-fg">{it.label}</span>
                <span className="mt-0.5 text-[12.5px] text-fg-3">{it.desc}</span>
              </span>
              <ArrowRight
                className="ml-auto h-3.5 w-3.5 translate-x-[-4px] text-fg-4 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100"
                strokeWidth={2.25}
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

function PortalDropdown({ items }: { items: Item[] }) {
  const [open, setOpen] = useState(false)
  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className="inline-flex items-center gap-1.5 rounded-md px-3.5 py-2 text-[13.5px] font-medium text-fg-2 ring-1 ring-line transition-colors hover:text-fg hover:ring-line-2"
        aria-expanded={open}
      >
        Portal Login
        <ChevronDown
          className={cn('h-3.5 w-3.5 transition-transform duration-200', open && 'rotate-180')}
          strokeWidth={2.25}
        />
      </button>
      <div
        className={cn(
          'absolute right-0 top-full w-[300px] origin-top-right pt-2 transition-[opacity,transform] duration-200',
          open
            ? 'pointer-events-auto translate-y-0 opacity-100'
            : 'pointer-events-none -translate-y-1 opacity-0',
        )}
      >
        <div className="overflow-hidden rounded-md border border-line bg-white p-1.5 shadow-xl">
          {items.map((p) => (
            <a
              key={p.label}
              href={p.href}
              className="flex gap-3 rounded-sm p-3 transition-colors hover:bg-canvas"
            >
              {p.icon ? (
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-md bg-brand-50 text-brand-700 ring-1 ring-brand-100">
                  <p.icon className="h-4 w-4" strokeWidth={2} />
                </span>
              ) : null}
              <span className="flex flex-col">
                <span className="text-[13px] font-semibold text-fg">{p.label}</span>
                <span className="mt-0.5 text-[12px] text-fg-3">{p.desc}</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

function MobileGroup({ title, items }: { title: string; items: Item[] }) {
  return (
    <div className="space-y-1">
      <p className="px-1 pb-1 pt-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-fg-4">
        {title}
      </p>
      {items.map((it) => (
        <a
          key={it.label}
          href={it.href}
          className="flex items-start gap-3 rounded-md px-2 py-2.5 hover:bg-canvas"
        >
          {it.icon ? (
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-md bg-brand-50 text-brand-700 ring-1 ring-brand-100">
              <it.icon className="h-4 w-4" strokeWidth={2} />
            </span>
          ) : null}
          <span className="flex flex-col">
            <span className="text-[14px] font-medium text-fg">{it.label}</span>
            {it.desc ? <span className="text-[12px] text-fg-3">{it.desc}</span> : null}
          </span>
        </a>
      ))}
    </div>
  )
}
