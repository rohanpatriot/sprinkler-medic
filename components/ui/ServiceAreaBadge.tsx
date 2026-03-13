const SERVICE_AREAS = [
  'Huntsville',
  'Madison',
  'Athens',
  'Decatur',
  'Harvest',
  'Meridianville',
  'Hampton Cove',
  'New Market',
  'Hazel Green',
  'Owens Cross Roads',
  'Gurley',
  'Toney',
  'Ardmore',
  'Limestone County',
  'Madison County',
  'Morgan County',
]

interface ServiceAreaBadgeProps {
  areas?: string[]
  showTitle?: boolean
}

export function ServiceAreaBadge({
  areas = SERVICE_AREAS,
  showTitle = true,
}: ServiceAreaBadgeProps) {
  return (
    <div>
      {showTitle && (
        <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-green-600">
          Serving Northern Alabama
        </p>
      )}
      <div className="flex flex-wrap gap-2" role="list" aria-label="Service areas">
        {areas.map((area) => (
          <span
            key={area}
            role="listitem"
            className="inline-flex items-center gap-1 rounded-full border border-green-200 bg-green-50 px-3 py-1 text-sm font-medium text-green-700"
          >
            <svg
              className="h-3 w-3"
              fill="currentColor"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
            {area}
          </span>
        ))}
      </div>
    </div>
  )
}
