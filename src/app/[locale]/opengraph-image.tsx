import { ImageResponse } from 'next/og'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

export const alt = 'Albion Exports — Your sourcing partner in China'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
// Read from disk → must run on the Node runtime, not Edge.
export const runtime = 'nodejs'

export default async function OG({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const isZh = locale === 'zh'

  const logoBytes = await readFile(
    join(process.cwd(), 'public/brand/logo-white.png')
  )
  const logoSrc = `data:image/png;base64,${logoBytes.toString('base64')}`

  // English-only copy for now — render the same brand mark on the zh locale's
  // share card. Chinese rendering inside ImageResponse needs a CJK font
  // shipped with the bundle; we'll add that the day a Chinese share matters.
  const eyebrow = 'BRITISH-OWNED · CHINESE-LICENSED'
  const headline = 'Your sourcing partner in China.'
  const url = 'albionexports.com'

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          padding: '72px 80px',
          background:
            'linear-gradient(135deg, #1B2E55 0%, #162644 55%, #0d172b 100%)',
          color: 'white',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Left: text */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            paddingRight: '40px',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignSelf: 'flex-start',
              padding: '8px 16px',
              border: '1px solid rgba(255,255,255,0.32)',
              borderRadius: '999px',
              fontSize: '18px',
              letterSpacing: '3px',
              color: 'rgba(255,255,255,0.92)',
              marginBottom: '36px',
            }}
          >
            {eyebrow}
          </div>
          <div
            style={{
              fontSize: '76px',
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
            }}
          >
            {headline}
          </div>
          <div
            style={{
              marginTop: '44px',
              fontSize: '26px',
              fontWeight: 500,
              color: 'rgba(255,255,255,0.72)',
              letterSpacing: '0.05em',
            }}
          >
            {url}
          </div>
          {isZh && (
            <div
              style={{
                marginTop: '10px',
                fontSize: '20px',
                color: 'rgba(255,255,255,0.6)',
                letterSpacing: '0.03em',
              }}
            >
              {/* tiny footnote so zh share card isn't identical to en */}
              EN
            </div>
          )}
        </div>

        {/* Right: logo */}
        <div
          style={{
            flexShrink: 0,
            width: '380px',
            height: '380px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            filter: 'drop-shadow(0 12px 40px rgba(0,0,0,0.35))',
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={logoSrc}
            width={380}
            height={380}
            style={{ objectFit: 'contain' }}
            alt=""
          />
        </div>
      </div>
    ),
    { ...size }
  )
}
