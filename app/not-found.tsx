import Link from 'next/link'

const PHONE_HREF = 'tel:+12566792934'
const PHONE_NUMBER = '(256) 679-2934'

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white px-6 text-center">
      <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
        <svg className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
        </svg>
      </div>
      <h1 className="text-5xl font-extrabold text-slate-900">404</h1>
      <p className="mt-3 text-xl font-semibold text-slate-700">Page not found</p>
      <p className="mx-auto mt-4 max-w-md text-slate-500">
        That page doesn&apos;t exist. But if your irrigation system doesn&apos;t exist either, we can help with that.
      </p>
      <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-lg bg-green-600 px-6 py-3 font-bold text-white transition-colors hover:bg-green-700"
        >
          Go Home
        </Link>
        <a
          href={PHONE_HREF}
          className="inline-flex items-center gap-2 rounded-lg border-2 border-green-600 px-6 py-3 font-bold text-green-600 transition-colors hover:bg-green-50"
        >
          Call Us: {PHONE_NUMBER}
        </a>
      </div>
      <div className="mt-12">
        <p className="mb-4 text-sm font-medium text-slate-500">Or browse our services:</p>
        <nav className="flex flex-wrap justify-center gap-3">
          {[
            { href: '/services', label: 'All Services' },
            { href: '/about', label: 'About Us' },
            { href: '/contact', label: 'Contact' },
            { href: '/booking', label: 'Book Service' },
            { href: '/faq', label: 'FAQ' },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 transition-colors hover:border-green-300 hover:text-green-600"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  )
}
