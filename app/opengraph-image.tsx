import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Sprinkler Medic — Irrigation Services in Huntsville, AL'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #15803d 0%, #166534 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '80px',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        {/* Badge */}
        <div
          style={{
            background: 'rgba(255,255,255,0.15)',
            borderRadius: '999px',
            padding: '8px 20px',
            color: '#bbf7d0',
            fontSize: '20px',
            fontWeight: 600,
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            marginBottom: '32px',
          }}
        >
          North Alabama&apos;s Irrigation Experts
        </div>

        {/* Logo / brand name */}
        <div
          style={{
            color: 'white',
            fontSize: '72px',
            fontWeight: 800,
            lineHeight: 1.1,
            marginBottom: '24px',
          }}
        >
          Sprinkler Medic
        </div>

        {/* Tagline */}
        <div
          style={{
            color: '#bbf7d0',
            fontSize: '32px',
            fontWeight: 400,
            lineHeight: 1.4,
            maxWidth: '700px',
            marginBottom: '48px',
          }}
        >
          Repair · Installation · Maintenance · Winterization
        </div>

        {/* Phone */}
        <div
          style={{
            background: '#d97706',
            color: 'white',
            fontSize: '36px',
            fontWeight: 700,
            padding: '16px 40px',
            borderRadius: '12px',
          }}
        >
          (256) 679-2934
        </div>
      </div>
    ),
    { ...size },
  )
}
