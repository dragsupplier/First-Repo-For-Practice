import { Logo } from '@/components/ui/Logo'
import { MapPin, Phone, Mail } from 'lucide-react'

function LinkedInIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8h4.56v15H.22V8zm7.79 0h4.37v2.05h.06c.61-1.15 2.1-2.37 4.32-2.37 4.62 0 5.47 3.04 5.47 6.99V23h-4.56v-7.6c0-1.81-.04-4.14-2.52-4.14-2.52 0-2.91 1.97-2.91 4v7.74H8.01V8z"/>
    </svg>
  )
}
function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117l11.966 15.644z"/>
    </svg>
  )
}
function YouTubeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  )
}

const COLS: { title: string; links: [string, string][] }[] = [
  {
    title: 'Solutions',
    links: [
      ['For Students', '#audiences'],
      ['For Colleges', '#audiences'],
      ['For Schools', '#audiences'],
      ['For Businesses', '#audiences'],
      ['For Hiring Teams', '#audiences'],
    ],
  },
  {
    title: 'Capabilities',
    links: [
      ['Training & Education', '#capabilities'],
      ['Software & Technology', '#capabilities'],
      ['AI · IoT · Cloud Labs', '#capabilities'],
      ['Recruitment Services', '#capabilities'],
      ['Digital Marketing', '#capabilities'],
    ],
  },
  {
    title: 'Company',
    links: [
      ['About', '#about'],
      ['Approach', '#approach'],
      ['Industries', '#industries'],
      ['Case Studies', '#trust'],
      ['Careers', '#'],
      ['Newsroom', '#'],
    ],
  },
  {
    title: 'Resources',
    links: [
      ['Blog', '#'],
      ['Webinars', '#'],
      ['Career Roadmaps', '#'],
      ['Industry Reports', '#'],
      ['Sitemap', '#'],
    ],
  },
]

const LEGAL: [string, string][] = [
  ['Privacy Policy', '#'],
  ['Terms of Service', '#'],
  ['Cookie Policy', '#'],
  ['Refund Policy', '#'],
  ['Grievance Officer', '#'],
]

export function Footer() {
  return (
    <footer
      id="footer"
      className="relative bg-brand-950 pt-14 pb-8 text-white"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid grid-cols-2 gap-10 lg:grid-cols-12">
          <div className="col-span-2 lg:col-span-4">
            <Logo variant="inverted" />
            <p className="mt-5 max-w-sm text-[13.5px] leading-[1.6] text-white/70">
              A Pune-based partner for student training, technology delivery
              and talent hiring — used by institutions, growing businesses and
              hiring teams across India.
            </p>

            <div className="mt-5 space-y-2 text-[13px] text-white/80">
              <p className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 text-brand-200" strokeWidth={2.25} />
                Pune, Maharashtra · India
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5 text-brand-200" strokeWidth={2.25} />
                +91 00000 00000
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 text-brand-200" strokeWidth={2.25} />
                hello@alphinix.in
              </p>
            </div>

            <div className="mt-6 flex items-center gap-2">
              {[
                { I: LinkedInIcon, label: 'LinkedIn' },
                { I: XIcon, label: 'X' },
                { I: YouTubeIcon, label: 'YouTube' },
              ].map(({ I, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="grid h-8 w-8 place-items-center rounded-md border border-white/15 text-white/70 transition-colors hover:border-white/30 hover:text-white"
                >
                  <I className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </div>

          {COLS.map((c) => (
            <div key={c.title} className="lg:col-span-2">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/55">
                {c.title}
              </p>
              <ul className="mt-4 space-y-2">
                {c.links.map(([label, href]) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="text-[13.5px] text-white/75 transition-colors hover:text-white"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-5 md:flex-row md:items-center">
          <p className="text-[12.5px] text-white/55">
            © {new Date().getFullYear()} Alphinix Technologies. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-[12.5px]">
            {LEGAL.map(([label, href]) => (
              <li key={label}>
                <a href={href} className="text-white/65 transition-colors hover:text-white">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
