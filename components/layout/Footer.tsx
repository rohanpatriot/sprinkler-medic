import Link from 'next/link'

const PHONE_NUMBER = '(256) 679-2934'
const PHONE_HREF = 'tel:+12566792934'
const EMAIL = 'sprinklermedichsv@gmail.com'

const SERVICES = [
  { href: '/services/irrigation-service-repair', label: 'Repair & Troubleshooting' },
  { href: '/services/irrigation-installation', label: 'New Installation' },
  { href: '/services/leak-detection', label: 'Leak Detection' },
  { href: '/services/spring-startup-winterization', label: 'Winterization' },
  { href: '/services/outdoor-lighting', label: 'Outdoor Lighting' },
  { href: '/services/drainage', label: 'Drainage' },
]

const COMPANY_LINKS = [
  { href: '/about', label: 'About Us' },
  { href: '/gallery', label: 'Project Gallery' },
  { href: '/testimonials', label: 'Testimonials' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
  { href: '/booking', label: 'Book Service' },
]

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1 — Brand */}
          <div>
            <Link href="/" className="inline-flex items-center gap-2 mb-4" aria-label="Sprinkler Medic Home">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-600" aria-hidden="true">
                <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                </svg>
              </div>
              <span className="text-lg font-bold text-white">
                Sprinkler <span className="text-green-400">Medic</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              Professional irrigation installation, repair, and maintenance serving North Alabama since 2015.
            </p>
            <div className="mt-4 flex gap-3">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/share/1CVLsjxcN7/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 text-slate-400 transition-colors hover:bg-green-600 hover:text-white"
                aria-label="Sprinkler Medic on Facebook"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              {/* Google */}
              <a
                href="https://maps.app.goo.gl/PEiZRcnM2vucotjh8"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 text-slate-400 transition-colors hover:bg-green-600 hover:text-white"
                aria-label="Sprinkler Medic on Google"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2 — Services */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-white">
              Services
            </h3>
            <ul className="space-y-2">
              {SERVICES.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-green-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Company */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-white">
              Company
            </h3>
            <ul className="space-y-2">
              {COMPANY_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-green-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-white">
              Contact
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={PHONE_HREF}
                  className="flex items-center gap-2 text-slate-400 transition-colors hover:text-green-400"
                  aria-label={`Call us at ${PHONE_NUMBER}`}
                >
                  <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  {PHONE_NUMBER}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center gap-2 text-slate-400 transition-colors hover:text-green-400"
                >
                  <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  {EMAIL}
                </a>
              </li>
              <li className="flex items-start gap-2 text-slate-400">
                <svg className="mt-0.5 h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <span>Huntsville, AL &amp; North Alabama</span>
              </li>
              <li className="flex items-start gap-2 text-slate-400">
                <svg className="mt-0.5 h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Mon–Sat 7am–6pm<br />Emergency: 24/7</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-4 text-xs text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} Sprinkler Medic. All rights reserved.</p>
          <Link href="/contact" className="hover:text-slate-300">
            Contact Us
          </Link>
        </div>
      </div>
    </footer>
  )
}
