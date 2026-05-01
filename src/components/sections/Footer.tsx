import { Logo } from '@/components/ui/Logo'

const COLS = [
  {
    title: 'Audiences',
    links: [
      ['Students', '#'],
      ['Colleges', '#'],
      ['Schools', '#'],
      ['Businesses', '#'],
      ['Hiring', '#'],
    ],
  },
  {
    title: 'Company',
    links: [
      ['About', '#'],
      ['Case Studies', '#'],
      ['Blog', '#'],
      ['Careers', '#'],
      ['Contact', '#contact'],
    ],
  },
  {
    title: 'Resources',
    links: [
      ['Webinars', '#'],
      ['Career Roadmaps', '#'],
      ['College Brochures', '#'],
      ['Industry Reports', '#'],
      ['Sitemap', '#'],
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
    <footer id="footer" className="bg-ink-950 pt-20 pb-10 text-paper">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid grid-cols-2 gap-10 lg:grid-cols-12">
          <div className="col-span-2 lg:col-span-4">
            <Logo className="[&_span:last-child]:text-paper [&>span:first-child]:bg-paper [&>span:first-child]:text-ink-950" />
            <p className="mt-6 max-w-sm text-[14.5px] leading-[1.6] text-paper/65">
              A Pune-based platform connecting students, colleges, schools,
              businesses and hiring managers — through one tightly integrated
              technology + talent stack.
            </p>
            <p className="mt-6 text-[12px] uppercase tracking-[0.18em] text-paper/45">
              Headquarters
            </p>
            <p className="mt-1.5 text-[14.5px] text-paper/80">
              Pune, Maharashtra · India
            </p>
          </div>

          {COLS.map((c) => (
            <div key={c.title} className="lg:col-span-2">
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-paper/55">
                {c.title}
              </p>
              <ul className="mt-5 space-y-2.5">
                {c.links.map(([label, href]) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="text-[14.5px] text-paper/80 transition-colors hover:text-paper"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-paper/10 pt-6 text-[12.5px] text-paper/55 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Alphinix Technologies. All rights reserved.</p>
          <p className="font-mono uppercase tracking-[0.18em]">
            Built in Pune · v1.0
          </p>
        </div>
      </div>
    </footer>
  )
}
