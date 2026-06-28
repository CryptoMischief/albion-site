// Western social/contact strip. Loaded only when region === 'global'.
// Phase 1: simple icon links. Replace href values when accounts are live.

const links = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/albion-exports/' },
  { label: 'WhatsApp', href: 'https://api.whatsapp.com/send?phone=447732506459' },
  // TODO: wire the rest as accounts come online (S2-04)
  // { label: 'X', href: 'https://x.com/...' },
  // { label: 'Instagram', href: 'https://www.instagram.com/...' },
]

export function SocialBarGlobal() {
  return (
    <ul className="flex flex-wrap items-center gap-3 text-sm text-navy-700">
      {links.map((l) => (
        <li key={l.label}>
          <a
            className="rounded-full border border-navy-200 px-3 py-1 transition-colors hover:bg-navy-50"
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {l.label}
          </a>
        </li>
      ))}
    </ul>
  )
}
