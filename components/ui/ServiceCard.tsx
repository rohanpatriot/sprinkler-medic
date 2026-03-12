import Link from 'next/link'

interface ServiceCardProps {
  title: string
  description: string
  icon: React.ReactNode
  href: string
}

export function ServiceCard({ title, description, icon, href }: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group flex min-h-[220px] flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
    >
      {/* Icon */}
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-50 text-green-600">
        {icon}
      </div>

      {/* Title */}
      <h3 className="mb-2 text-xl font-semibold text-slate-900">{title}</h3>

      {/* Description */}
      <p className="mb-4 flex-1 text-base leading-relaxed text-slate-600">{description}</p>

      {/* CTA */}
      <span className="inline-flex items-center gap-1 text-sm font-semibold text-green-600 group-hover:underline">
        Learn More
        <svg
          className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
      </span>
    </Link>
  )
}
