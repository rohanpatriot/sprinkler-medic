'use client'

import { useState } from 'react'

interface FAQItem {
  question: string
  answer: string
}

interface FAQAccordionProps {
  items: FAQItem[]
}

function AccordionItem({
  item,
  isOpen,
  onToggle,
  id,
}: {
  item: FAQItem
  isOpen: boolean
  onToggle: () => void
  id: string
}) {
  return (
    <div className="border-b border-slate-200 last:border-b-0">
      <button
        type="button"
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`${id}-answer`}
        id={`${id}-question`}
      >
        <span
          className={`text-base font-semibold transition-colors duration-200 ${
            isOpen ? 'text-green-600' : 'text-slate-900'
          }`}
        >
          {item.question}
        </span>
        <svg
          className={`h-5 w-5 shrink-0 text-green-600 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`}
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </button>

      <div
        id={`${id}-answer`}
        role="region"
        aria-labelledby={`${id}-question`}
        className={`overflow-hidden transition-all duration-200 ease-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="pb-5 text-base leading-relaxed text-slate-600">{item.answer}</p>
      </div>
    </div>
  )
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="mx-auto max-w-3xl divide-y-0">
      {items.map((item, i) => (
        <AccordionItem
          key={i}
          id={`faq-${i}`}
          item={item}
          isOpen={openIndex === i}
          onToggle={() => setOpenIndex(openIndex === i ? null : i)}
        />
      ))}
    </div>
  )
}
