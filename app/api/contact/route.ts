import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const TO_EMAIL = 'sprinklermedichsv@gmail.com'

interface ContactPayload {
  name: string
  phone: string
  email: string
  service: string
  message: string
  // honeypot — should be empty
  website?: string
}

function validate(body: ContactPayload): string[] {
  const errors: string[] = []
  if (!body.name?.trim()) errors.push('Name is required.')
  if (!body.phone?.trim()) errors.push('Phone number is required.')
  if (!body.email?.trim()) {
    errors.push('Email is required.')
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
    errors.push('Email address is invalid.')
  }
  if (!body.service?.trim()) errors.push('Service type is required.')
  return errors
}

export async function POST(req: NextRequest) {
  let body: ContactPayload
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 })
  }

  // Honeypot check — bots fill in the hidden "website" field
  if (body.website) {
    return NextResponse.json({ ok: true })
  }

  const errors = validate(body)
  if (errors.length > 0) {
    return NextResponse.json({ errors }, { status: 422 })
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.error('[contact] RESEND_API_KEY is not set')
    return NextResponse.json({ error: 'Email service is not configured.' }, { status: 503 })
  }

  const resend = new Resend(apiKey)
  const FROM_EMAIL = process.env.RESEND_FROM_EMAIL ?? 'noreply@sprinklermedic.com'

  const SERVICE_LABELS: Record<string, string> = {
    installation: 'New Installation',
    repair: 'Repair / Troubleshooting',
    maintenance: 'Seasonal Maintenance',
    winterization: 'Winterization',
    emergency: 'Emergency Service',
    other: 'Other',
  }
  const serviceLabel = SERVICE_LABELS[body.service] ?? body.service

  try {
    await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: body.email,
      subject: `New service request: ${serviceLabel} — ${body.name}`,
      text: [
        `Name: ${body.name}`,
        `Phone: ${body.phone}`,
        `Email: ${body.email}`,
        `Service: ${serviceLabel}`,
        body.message ? `Message:\n${body.message}` : '',
      ]
        .filter(Boolean)
        .join('\n'),
      html: `
        <h2>New Service Request — Sprinkler Medic</h2>
        <table cellpadding="8" style="border-collapse:collapse;">
          <tr><td><strong>Name</strong></td><td>${escapeHtml(body.name)}</td></tr>
          <tr><td><strong>Phone</strong></td><td>${escapeHtml(body.phone)}</td></tr>
          <tr><td><strong>Email</strong></td><td><a href="mailto:${escapeHtml(body.email)}">${escapeHtml(body.email)}</a></td></tr>
          <tr><td><strong>Service</strong></td><td>${escapeHtml(serviceLabel)}</td></tr>
          ${body.message ? `<tr><td><strong>Message</strong></td><td>${escapeHtml(body.message).replace(/\n/g, '<br>')}</td></tr>` : ''}
        </table>
        <p style="color:#666;font-size:12px;margin-top:24px;">Sent from sprinklermedic.com contact form</p>
      `,
    })
  } catch (err) {
    console.error('[contact] resend error', err)
    return NextResponse.json({ error: 'Failed to send email. Please try again.' }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}
