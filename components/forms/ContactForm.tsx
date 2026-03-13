'use client'

import { useState } from 'react'

const SERVICE_OPTIONS = [
  { value: '', label: 'Select a service...' },
  { value: 'installation', label: 'New Installation' },
  { value: 'repair', label: 'Repair / Troubleshooting' },
  { value: 'maintenance', label: 'Seasonal Maintenance' },
  { value: 'winterization', label: 'Winterization' },
  { value: 'emergency', label: 'Emergency Service' },
  { value: 'other', label: 'Other' },
]

type FormState = 'idle' | 'loading' | 'success' | 'error'

interface FormData {
  name: string
  phone: string
  email: string
  service: string
  message: string
}

const INITIAL_FORM: FormData = {
  name: '',
  phone: '',
  email: '',
  service: '',
  message: '',
}

const inputClass =
  'w-full rounded-lg border border-slate-200 px-4 py-2.5 text-base text-slate-900 placeholder:text-slate-400 transition-colors duration-150 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-600/20'

const labelClass = 'mb-1 block text-sm font-semibold text-slate-700'

export function ContactForm() {
  const [form, setForm] = useState<FormData>(INITIAL_FORM)
  const [honeypot, setHoneypot] = useState('')
  const [state, setState] = useState<FormState>('idle')
  const [errors, setErrors] = useState<Partial<FormData>>({})
  const [serverError, setServerError] = useState('')

  function validate(): boolean {
    const newErrors: Partial<FormData> = {}
    if (!form.name.trim()) newErrors.name = 'Name is required'
    if (!form.phone.trim()) newErrors.phone = 'Phone number is required'
    if (!form.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Enter a valid email address'
    }
    if (!form.service) newErrors.service = 'Please select a service'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!validate()) return
    setState('loading')
    setServerError('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, website: honeypot }),
      })
      if (res.ok) {
        setState('success')
        // GA4 event
        if (typeof window !== 'undefined' && 'gtag' in window) {
          ;(window as unknown as { gtag: (...args: unknown[]) => void }).gtag('event', 'form_submit', {
            event_category: 'Contact',
            event_label: form.service,
          })
        }
      } else {
        const data = await res.json().catch(() => ({}))
        setServerError(
          (data as { error?: string }).error ?? 'Something went wrong. Please try again.',
        )
        setState('error')
      }
    } catch {
      setServerError('Network error. Please try again or call us directly.')
      setState('error')
    }
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  if (state === 'success') {
    return (
      <div className="flex flex-col items-center gap-4 rounded-2xl bg-white p-8 text-center shadow-xl">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
          <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-slate-900">Request Received!</h3>
        <p className="text-slate-600">
          We&apos;ll be in touch within 24 hours. For urgent needs, call us directly at{' '}
          <a href="tel:+12566792934" className="font-semibold text-green-600 hover:underline">
            (256) 679-2934
          </a>
          .
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-2xl bg-white p-8 shadow-xl"
    >
      <h3 className="mb-6 text-2xl font-bold text-slate-900">Request Service</h3>

      {/* Honeypot — hidden from real users, bots will fill it */}
      <div aria-hidden="true" className="hidden">
        <label htmlFor="website">Leave this blank</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />
      </div>

      <div className="space-y-5">
        {/* Name */}
        <div>
          <label htmlFor="name" className={labelClass}>
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Josh Smith"
            value={form.name}
            onChange={handleChange}
            className={`${inputClass} ${errors.name ? 'border-red-500 focus:ring-red-500/20' : ''}`}
            aria-describedby={errors.name ? 'name-error' : undefined}
          />
          {errors.name && (
            <p id="name-error" className="mt-1 text-sm text-red-600" role="alert">
              {errors.name}
            </p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="(256) 555-0100"
            value={form.phone}
            onChange={handleChange}
            className={`${inputClass} ${errors.phone ? 'border-red-500 focus:ring-red-500/20' : ''}`}
            aria-describedby={errors.phone ? 'phone-error' : undefined}
          />
          {errors.phone && (
            <p id="phone-error" className="mt-1 text-sm text-red-600" role="alert">
              {errors.phone}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className={labelClass}>
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            value={form.email}
            onChange={handleChange}
            className={`${inputClass} ${errors.email ? 'border-red-500 focus:ring-red-500/20' : ''}`}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email && (
            <p id="email-error" className="mt-1 text-sm text-red-600" role="alert">
              {errors.email}
            </p>
          )}
        </div>

        {/* Service Type */}
        <div>
          <label htmlFor="service" className={labelClass}>
            Service Needed <span className="text-red-500">*</span>
          </label>
          <select
            id="service"
            name="service"
            value={form.service}
            onChange={handleChange}
            className={`${inputClass} ${errors.service ? 'border-red-500 focus:ring-red-500/20' : ''}`}
            aria-describedby={errors.service ? 'service-error' : undefined}
          >
            {SERVICE_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value} disabled={opt.value === ''}>
                {opt.label}
              </option>
            ))}
          </select>
          {errors.service && (
            <p id="service-error" className="mt-1 text-sm text-red-600" role="alert">
              {errors.service}
            </p>
          )}
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className={labelClass}>
            Message <span className="text-slate-400">(optional)</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Describe your project or issue..."
            value={form.message}
            onChange={handleChange}
            className={inputClass}
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={state === 'loading'}
          className="w-full rounded-lg bg-green-600 px-6 py-3 text-base font-bold text-white transition-colors duration-200 hover:bg-green-700 active:scale-95 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {state === 'loading' ? 'Sending...' : 'Request Service'}
        </button>

        {state === 'error' && (
          <p className="text-center text-sm text-red-600" role="alert">
            {serverError || 'Something went wrong. Please call us at'}{' '}
            {!serverError && (
              <a href="tel:+12566792934" className="font-semibold underline">
                (256) 679-2934
              </a>
            )}
          </p>
        )}
      </div>
    </form>
  )
}
