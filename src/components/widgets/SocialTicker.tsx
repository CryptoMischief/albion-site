import Image from 'next/image'
import { getTranslations } from 'next-intl/server'
import { LinkedInIcon } from '@/components/icons/LinkedInIcon'
import { InstagramIcon } from '@/components/icons/InstagramIcon'
import { YouTubeIcon } from '@/components/icons/YouTubeIcon'
import { socialPosts, type SocialPost, type SocialPlatform } from '@/data/social'
import type { Region } from '@/lib/region'

type PlatformMeta = {
  name: string
  accent: string
  cta: string
  Icon: (p: { className?: string }) => React.ReactElement
}

const platformMeta: Record<SocialPlatform, PlatformMeta> = {
  linkedin: { name: 'LinkedIn', accent: '#0A66C2', cta: 'Read on LinkedIn', Icon: LinkedInIcon },
  instagram: { name: 'Instagram', accent: '#E1306C', cta: 'Watch on Instagram', Icon: InstagramIcon },
  youtube: { name: 'YouTube', accent: '#FF0000', cta: 'Watch on YouTube', Icon: YouTubeIcon },
  wechat: { name: '微信视频号', accent: '#07C160', cta: '在视频号观看', Icon: InstagramIcon },
  douyin: { name: '抖音', accent: '#161823', cta: '在抖音观看', Icon: YouTubeIcon },
}

function PostCard({ post }: { post: SocialPost }) {
  const m = platformMeta[post.platform]
  const { Icon } = m
  return (
    <a
      href={post.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group/card mx-2.5 flex h-36 w-[19rem] shrink-0 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-white/10 transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-md sm:mx-3 sm:w-[22rem]"
    >
      {/* Thumbnail — photo, or a branded fallback tile */}
      <div className="relative h-full w-28 shrink-0 overflow-hidden sm:w-32">
        {post.image ? (
          <Image
            src={post.image}
            alt=""
            fill
            sizes="128px"
            className="object-cover transition-transform duration-500 group-hover/card:scale-105"
          />
        ) : (
          <div
            className="flex h-full w-full items-center justify-center bg-gradient-to-br from-navy-700 to-navy-900"
            style={{ boxShadow: `inset 0 0 0 9999px ${m.accent}22` }}
          >
            <Icon className="size-9 text-white/85" />
          </div>
        )}
        {/* platform badge */}
        <span
          className="absolute left-2 top-2 inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-semibold text-white shadow-sm"
          style={{ backgroundColor: m.accent }}
        >
          <Icon className="size-2.5" />
          {m.name}
        </span>
      </div>

      {/* Copy */}
      <div className="flex min-w-0 flex-1 flex-col justify-between p-4">
        <div className="min-w-0">
          <h3 className="line-clamp-1 text-[0.95rem] font-semibold leading-snug text-navy-900">
            {post.title}
          </h3>
          <p className="mt-1.5 line-clamp-3 text-xs leading-relaxed text-mute">
            {post.blurb}
          </p>
        </div>
        <span
          className="mt-2 inline-flex items-center gap-1 text-xs font-semibold"
          style={{ color: m.accent }}
        >
          {m.cta}
          <span className="transition-transform group-hover/card:translate-x-0.5">→</span>
        </span>
      </div>
    </a>
  )
}

export async function SocialTicker({ region }: { region: Region }) {
  // LinkedIn / Instagram / YouTube are blocked in China — only render the
  // Western feed in the global edition. CN posts (WeChat/Douyin) render for cn.
  const posts = socialPosts.filter((p) => (p.region ?? 'global') === region)
  if (posts.length === 0) return null

  // Repeat the posts enough times that a single loop-copy is wider than any
  // screen — otherwise a short feed leaves a gap on the right as it scrolls.
  const reps = Math.max(2, Math.ceil(8 / posts.length))
  const oneSet = Array.from({ length: reps }, () => posts).flat()
  // Keep a calm, constant scroll speed (~40px/s) regardless of how many cards.
  const durationSec = Math.round((oneSet.length * 360) / 40)

  const t = await getTranslations('SocialTicker')

  return (
    <section
      aria-label={t('label')}
      style={{ '--marquee-duration': `${durationSec}s` } as React.CSSProperties}
      className="marquee-viewport relative flex items-stretch overflow-hidden border-y border-white/10 bg-navy-900"
    >
      {/* Fixed label on the left */}
      <div className="z-10 flex shrink-0 items-center gap-1.5 bg-navy-900 pl-4 pr-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/60 sm:pl-6">
        <span className="relative flex size-1.5">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400/70" />
          <span className="relative inline-flex size-1.5 rounded-full bg-emerald-400" />
        </span>
        {t('label')}
      </div>

      {/* Scrolling track — two identical copies for a seamless loop */}
      <div className="relative flex-1 overflow-hidden py-3.5">
        <div className="marquee-track flex w-max items-center">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex items-center" aria-hidden={copy === 1}>
              {oneSet.map((post, i) => (
                <PostCard key={`${copy}-${i}`} post={post} />
              ))}
            </div>
          ))}
        </div>
        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-navy-900 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-navy-900 to-transparent" />
      </div>
    </section>
  )
}
