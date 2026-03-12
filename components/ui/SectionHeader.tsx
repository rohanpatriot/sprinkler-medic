interface SectionHeaderProps {
  eyebrow?: string
  heading: string
  subtext?: string
  /** Alignment — default center */
  align?: 'center' | 'left'
  className?: string
}

export function SectionHeader({
  eyebrow,
  heading,
  subtext,
  align = 'center',
  className = '',
}: SectionHeaderProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left'

  return (
    <div className={`max-w-2xl ${alignClass} ${className}`}>
      {eyebrow && (
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-green-600">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        {heading}
      </h2>
      {subtext && (
        <p className="mt-4 text-lg leading-relaxed text-slate-600">{subtext}</p>
      )}
    </div>
  )
}
