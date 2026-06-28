// Small inline SVG flags. Local + no emoji, so they render identically on
// Windows and inside the CN edition (no external CDN). Add codes as needed.

type FlagCode = 'gb' | 'ps' | 'de'

const titles: Record<FlagCode, string> = {
  gb: 'United Kingdom',
  ps: 'Palestine',
  de: 'Germany',
}

export function Flag({ code, className = '' }: { code: FlagCode; className?: string }) {
  const cls = `inline-block h-4 w-6 shrink-0 rounded-[2px] ring-1 ring-black/10 ${className}`
  const title = titles[code]

  if (code === 'gb') {
    return (
      <svg viewBox="0 0 60 30" className={cls} role="img" aria-label={title}>
        <title>{title}</title>
        <clipPath id="fb-gb-s">
          <path d="M0,0 v30 h60 v-30 z" />
        </clipPath>
        <clipPath id="fb-gb-t">
          <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
        </clipPath>
        <g clipPath="url(#fb-gb-s)">
          <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
          <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
          <path
            d="M0,0 L60,30 M60,0 L0,30"
            clipPath="url(#fb-gb-t)"
            stroke="#C8102E"
            strokeWidth="4"
          />
          <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
          <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
        </g>
      </svg>
    )
  }

  if (code === 'de') {
    return (
      <svg viewBox="0 0 5 3" className={cls} role="img" aria-label={title}>
        <title>{title}</title>
        <rect width="5" height="3" fill="#FFCE00" />
        <rect width="5" height="2" fill="#D00" />
        <rect width="5" height="1" fill="#000" />
      </svg>
    )
  }

  // ps
  return (
    <svg viewBox="0 0 6 3" className={cls} role="img" aria-label={title}>
      <title>{title}</title>
      <rect width="6" height="1" y="0" fill="#000" />
      <rect width="6" height="1" y="1" fill="#fff" />
      <rect width="6" height="1" y="2" fill="#007A3D" />
      <path d="M0,0 L2,1.5 L0,3 Z" fill="#CE1126" />
    </svg>
  )
}
