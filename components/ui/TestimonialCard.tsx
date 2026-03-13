interface TestimonialCardProps {
  quote: string
  name: string
  location?: string
  date?: string
  rating?: number
}

function StarRating({ rating = 5 }: { rating?: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`h-5 w-5 ${i < rating ? 'text-green-500' : 'text-slate-200'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

function Initials({ name }: { name: string }) {
  const parts = name.trim().split(' ')
  const initials = parts.length >= 2
    ? `${parts[0][0]}${parts[parts.length - 1][0]}`
    : parts[0].slice(0, 2)
  return <>{initials.toUpperCase()}</>
}

export function TestimonialCard({
  quote,
  name,
  location,
  date,
  rating = 5,
}: TestimonialCardProps) {
  return (
    <figure className="flex flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
      <StarRating rating={rating} />

      <blockquote className="mt-4 flex-1">
        <p className="text-lg italic leading-relaxed text-slate-700">
          &ldquo;{quote}&rdquo;
        </p>
      </blockquote>

      <figcaption className="mt-6 flex items-center gap-3">
        {/* Avatar */}
        <div
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-100 text-sm font-bold text-green-700"
          aria-hidden="true"
        >
          <Initials name={name} />
        </div>

        <div>
          <p className="font-semibold text-slate-900">{name}</p>
          {(location || date) && (
            <p className="text-sm text-slate-500">
              {[location, date].filter(Boolean).join(' · ')}
            </p>
          )}
        </div>
      </figcaption>
    </figure>
  )
}
