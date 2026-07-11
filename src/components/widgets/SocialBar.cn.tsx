// Chinese social/contact strip. Loaded only when region === 'cn'.
// Phase 1: WeChat OA QR (scan-to-follow), Maimai badge, Alibaba storefront link.
// Replace placeholder hrefs when accounts are live.

const links = [
  { label: '微信公众号', href: '#wechat-qr' },
  { label: '小红书 Rednote', href: 'https://xhslink.com/m/Aomr2SzFWW9' },
  { label: '脉脉 Maimai', href: 'https://maimai.cn' },
  { label: 'Alibaba.com', href: 'https://albionexports.trustpass.alibaba.com' },
  { label: 'Made-in-China', href: 'https://www.made-in-china.com' },
]

export function SocialBarCn() {
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
