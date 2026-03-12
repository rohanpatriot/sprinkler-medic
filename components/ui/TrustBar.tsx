interface TrustMetric {
  icon: React.ReactNode
  value: string
  label: string
}

const DEFAULT_METRICS: TrustMetric[] = [
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      </svg>
    ),
    value: '11+ Years',
    label: 'Experience',
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
    value: '500+',
    label: 'Projects Completed',
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    value: '24/7',
    label: 'Emergency Service',
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    value: 'Licensed',
    label: '& Insured',
  },
]

interface TrustBarProps {
  metrics?: TrustMetric[]
  /** Use 'dark' for green background version, 'light' for white with green text */
  variant?: 'dark' | 'light'
}

export function TrustBar({ metrics = DEFAULT_METRICS, variant = 'dark' }: TrustBarProps) {
  const isDark = variant === 'dark'

  return (
    <div
      className={`w-full ${
        isDark
          ? 'bg-green-600 text-white'
          : 'bg-white border-y border-slate-200 text-slate-900'
      }`}
    >
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 py-8 md:grid-cols-4 md:gap-8 md:px-8">
        {metrics.map((metric, i) => (
          <div key={i} className="flex flex-col items-center gap-2 text-center">
            <div className={isDark ? 'text-white/90' : 'text-green-600'}>
              {metric.icon}
            </div>
            <div>
              <p className={`text-2xl font-extrabold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                {metric.value}
              </p>
              <p className={`text-sm ${isDark ? 'text-white/80' : 'text-slate-600'}`}>
                {metric.label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
