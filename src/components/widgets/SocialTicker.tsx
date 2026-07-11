import Image from 'next/image'
import { getTranslations, getLocale } from 'next-intl/server'
import { Newspaper } from 'lucide-react'
import { Link } from '@/i18n/navigation'
import { LinkedInIcon } from '@/components/icons/LinkedInIcon'
import { InstagramIcon } from '@/components/icons/InstagramIcon'
import { YouTubeIcon } from '@/components/icons/YouTubeIcon'
import { socialPosts, type SocialPlatform } from '@/data/social'
import { posts, type Locale } from '@/data/insights'
import type { Region } from '@/lib/region'

type IconCmp = React.ComponentType<{ className?: string }>

const iconFor: Record<SocialPlatform | 'insight', { accent: string; Icon: IconCmp }> = {
  linkedin: { accent: '#0A66C2', Icon: LinkedInIcon },
  instagram: { accent: '#E1306C', Icon: InstagramIcon },
  youtube: { accent: '#FF0000', Icon: YouTubeIcon },
  wechat: { accent: '#07C160', Icon: InstagramIcon },
  douyin: { accent: '#161823', Icon: YouTubeIcon },
  insight: { accent: '#1B2E55', Icon: Newspaper },
}

const platformName: Record<SocialPlatform, string> = {
  linkedin: 'LinkedIn',
  instagram: 'Instagram',
  youtube: 'YouTube',
  wechat: '微信视频号',
  douyin: '抖音',
}

const platformCta: Record<SocialPlatform, string> = {
  linkedin: 'Read on LinkedIn',
  instagram: 'Watch on Instagram',
  youtube: 'Watch on YouTube',
  wechat: '在视频号观看',
  douyin: '在抖音观看',
}

type Item = {
  key: string
  platform: SocialPlatform | 'insight'
  badge: string
  cta: string
  title: string
  blurb: string
  url: string
  image?: string
  internal: boolean
}

function TickerCard({ item }: { item: Item }) {
  const { accent, Icon } = iconFor[item.platform]
  const inner = (
    <>
      <div className="relative h-full w-28 shrink-0 overflow-hidden sm:w-32">
        {item.image ? (
          <Image
            src={item.image}
            alt=""
            fill
            sizes="128px"
            className="object-cover transition-transform duration-500 group-hover/card:scale-105"
          />
        ) : (
          <div
            className="flex h-full w-full items-center justify-center bg-gradient-to-br from-navy-700 to-navy-900"
            style={{ boxShadow: `inset 0 0 0 9999px ${accent}22` }}
          >
            <Icon className="size-9 text-white/85" />
          </div>
        )}
        <span
          className="absolute left-2 top-2 inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-semibold text-white shadow-sm"
          style={{ backgroundColor: accent }}
        >
          <Icon className="size-2.5" />
          {item.badge}
        </span>
      </div>
      <div className="flex min-w-0 flex-1 flex-col justify-between p-4">
        <div className="min-w-0">
          <h3 className="line-clamp-1 text-[0.95rem] font-semibold leading-snug text-navy-900">
            {item.title}
          </h3>
          <p className="mt-1.5 line-clamp-3 text-xs leading-relaxed text-mute">
            {item.blurb}
          </p>
        </div>
        <span
          className="mt-2 inline-flex items-center gap-1 text-xs font-semibold"
          style={{ color: accent }}
        >
          {item.cta}
          <span className="transition-transform group-hover/card:translate-x-0.5">→</span>
        </span>
      </div>
    </>
  )

  const cls =
    'group/card mx-2.5 flex h-36 w-[19rem] shrink-0 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-white/10 transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-md sm:mx-3 sm:w-[22rem]'

  return item.internal ? (
    <Link href={item.url} className={cls}>
      {inner}
    </Link>
  ) : (
    <a href={item.url} target="_blank" rel="noopener noreferrer" className={cls}>
      {inner}
    </a>
  )
}

export async function SocialTicker({ region }: { region: Region }) {
  const L: Locale = (await getLocale()) === 'zh' ? 'zh' : 'en'
  const t = await getTranslations('SocialTicker')
  const tIns = await getTranslations('Insights')

  // Latest articles first — shown in every edition (on-domain, not blocked in CN).
  const latest = [...posts].sort((a, b) => (a.date < b.date ? 1 : -1)).slice(0, 2)
  const insightItems: Item[] = latest.map((p) => ({
    key: `ins-${p.slug}`,
    platform: 'insight',
    badge: tIns('eyebrow'),
    cta: tIns('readMore'),
    title: p.title[L],
    blurb: p.excerpt[L],
    url: `/insights/${p.slug}`,
    image: p.image,
    internal: true,
  }))

  // Social posts for this edition (LinkedIn/IG etc. blocked in CN, so region-gated).
  const socialItems: Item[] = socialPosts
    .filter((p) => (p.region ?? 'global') === region)
    .map((p, i) => ({
      key: `soc-${i}`,
      platform: p.platform,
      badge: platformName[p.platform],
      cta: platformCta[p.platform],
      title: p.title,
      blurb: p.blurb,
      url: p.url,
      image: p.image,
      internal: false,
    }))

  const items = [...insightItems, ...socialItems]
  if (items.length === 0) return null

  // Repeat so a loop-copy always spans the screen; keep a calm ~40px/s speed.
  const reps = Math.max(2, Math.ceil(8 / items.length))
  const oneSet = Array.from({ length: reps }, () => items).flat()
  const durationSec = Math.round((oneSet.length * 360) / 40)

  return (
    <section
      aria-label={t('label')}
      style={{ '--marquee-duration': `${durationSec}s` } as React.CSSProperties}
      className="marquee-viewport relative flex items-stretch overflow-hidden border-y border-white/10 bg-navy-900"
    >
      <div className="z-10 flex shrink-0 items-center gap-1.5 bg-navy-900 pl-4 pr-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/60 sm:pl-6">
        <span className="relative flex size-1.5">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400/70" />
          <span className="relative inline-flex size-1.5 rounded-full bg-emerald-400" />
        </span>
        {t('label')}
      </div>

      <div className="relative flex-1 overflow-hidden py-3.5">
        <div className="marquee-track flex w-max items-center">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex items-center" aria-hidden={copy === 1}>
              {oneSet.map((item, i) => (
                <TickerCard key={`${copy}-${item.key}-${i}`} item={item} />
              ))}
            </div>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-navy-900 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-navy-900 to-transparent" />
      </div>
    </section>
  )
}
