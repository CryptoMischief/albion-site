import { getTranslations } from 'next-intl/server'
import { ArrowRight } from 'lucide-react'
import { YouTubeIcon } from '@/components/icons/YouTubeIcon'
import { VideoCarousel } from '@/components/widgets/VideoCarousel'
import { CHANNEL_URL, videos } from '@/data/youtube'
import type { Region } from '@/lib/region'

export async function Videos({ region }: { region: Region }) {
  // YouTube is blocked in China — every card here would be a dead link in the
  // CN edition, so the whole section is gated server-side rather than hidden
  // with CSS. The China edition gets 视频号 / 抖音 once those are live.
  if (region !== 'global') return null
  if (videos.length === 0) return null

  const t = await getTranslations('Videos')

  return (
    <section className="border-b border-navy-100 bg-paper">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-navy-200 bg-white px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-navy-700 sm:text-xs">
              <YouTubeIcon className="size-3.5" />
              {t('eyebrow')}
            </div>
            <h2 className="text-[1.75rem] font-semibold leading-tight tracking-tight text-navy-900 sm:text-3xl md:text-4xl">
              {t('headline')}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-mute sm:mt-5 md:text-lg">
              {t('body')}
            </p>
          </div>

          <a
            href={CHANNEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-navy-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-navy-800"
          >
            {t('cta')}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>

        <div className="mt-10">
          <VideoCarousel
            videos={videos}
            labels={{
              region: t('headline'),
              prev: t('prev'),
              next: t('next'),
              film: t('film'),
              short: t('short'),
            }}
          />
        </div>
      </div>
    </section>
  )
}
