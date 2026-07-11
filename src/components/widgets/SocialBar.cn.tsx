// Chinese social/contact strip. Loaded only when region === 'cn'.
// WeChat is a scan-to-follow QR (click to reveal); the rest are link pills.

import Image from 'next/image'

const links = [
  { label: '小红书 Rednote', href: 'https://xhslink.com/m/Aomr2SzFWW9' },
  { label: '脉脉 Maimai', href: 'https://maimai.cn' },
  { label: 'Alibaba.com', href: 'https://albionexports.trustpass.alibaba.com' },
  { label: 'Made-in-China', href: 'https://www.made-in-china.com' },
]

export function SocialBarCn() {
  return (
    <ul className="flex flex-wrap items-center gap-3 text-sm text-navy-700">
      <li>
        <details className="group relative">
          <summary className="cursor-pointer list-none rounded-full border border-navy-200 px-3 py-1 transition-colors hover:bg-navy-50 group-open:border-navy-400 group-open:bg-navy-50 [&::-webkit-details-marker]:hidden">
            微信 WeChat
          </summary>
          <div className="absolute bottom-full left-0 z-30 mb-2 w-44 rounded-2xl border border-navy-100 bg-white p-3 shadow-xl">
            <Image
              src="/wechat-qr.png"
              alt="微信二维码 — Albion Exports WeChat QR code"
              width={160}
              height={160}
              className="h-auto w-full rounded-lg"
            />
            <p className="mt-2 text-center text-xs text-mute">微信扫一扫</p>
          </div>
        </details>
      </li>
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
