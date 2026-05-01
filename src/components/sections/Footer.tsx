import { Logo } from '@/components/ui/Logo'

const COLS: { title: string; links: [string, string][] }[] = [
  {
    title: 'Solutions',
    links: [
      ['For Students', '#audiences'],
      ['For Colleges', '#audiences'],
      ['For Schools', '#audiences'],
      ['For Businesses', '#audiences'],
      ['For Hiring', '#audiences'],
    ],
  },
  {
    title: 'Company',
    links: [
      ['About', '#about'],
      ['Approach', '#approach'],
      ['Case Studies', '#trust'],
      ['Careers', '#'],
      ['Contact', '#contact'],
    ],
  },
  {
    title: 'Resources',
    links: [
      ['Blog', '#'],
      ['Webinars', '#'],
      ['Career Roadmaps', '#'],
      ['College Brochures', '#'],
      ['Industry Reports', '#'],
    ],
  },
  {
    title: 'Legal',
    links: [
      ['Privacy Policy', '#'],
      ['Terms of Service', '#'],
      ['Cookie Policy', '#'],
      ['Refund Policy', '#'],
      ['Grievance Officer', '#'],
    ],
  },
]

export function Footer() {
  return (
    <footer
      id="footer"
      className="relative overflow-hidden border-t border-white/[0.06] bg-bg pt-20 pb-10 text-fg"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid grid-cols-2 gap-10 lg:grid-cols-12">
          <div className="col-span-2 lg:col-span-4">
            <Logo tagline="Talent · Tech · Hiring" />
            <p className="mt-6 max-w-sm text-[14.5px] leading-[1.6] text-fg-2">
              A Pune-based platform connecting students, colleges, schools,
              businesses and hiring managers — through one integrated stack.
            </p>
            <p className="mt-6 text-[11px] uppercase tracking-[0.18em] text-fg-3">
              Headquarters
            </p>
            <p className="mt-1.5 text-[14.5px] text-fg">
              Pune, Maharashtra · India
            </p>
          </div>

          {COLS.map((c) => (
            <div key={c.title} className="lg:col-span-2">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-fg-3">
                {c.title}
              </p>
              <ul className="mt-5 space-y-2.5">
                {c.links.map(([label, href]) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="text-[14px] text-fg-2 transition-colors hover:text-fg"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/[0.06] pt-6 text-[12.5px] text-fg-3 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Alphinix Technologies. All rights reserved.</p>
          <p className="font-mono uppercase tracking-[0.18em]">Built in Pune</p>
        </div>
      </div>
    </footer>
  )
}
