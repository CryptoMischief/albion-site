import { getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import { MonitorPlay, PawPrint, Dumbbell, ArrowRight } from 'lucide-react'
import { ProgressBar } from '@/components/widgets/ProgressBar'

const items = [
  { key: 'displays', Icon: MonitorPlay, progress: 45 },
  { key: 'pet', Icon: PawPrint, progress: 55 },
  { key: 'sports', Icon: Dumbbell, progress: 25 },
] as const

export async function SourcingNow() {
  const t = await getTranslations('SourcingNow')
  return (
    <section className="border-b border-navy-100 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-300 bg-emerald-50 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-emerald-800 sm:text-xs">
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-600" />
              </span>
              {t('eyebrow')}
            </div>
            <h2 className="text-[1.75rem] font-semibold leading-tight tracking-tight text-navy-900 sm:text-3xl md:text-4xl">
              {t('title')}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-mute">
              {t('intro')}
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {items.map(({ key, Icon, progress }) => (
            <div
              key={key}
              className="group flex flex-col rounded-2xl border border-navy-100 bg-paper p-5 transition-colors hover:border-navy-300 sm:p-6"
            >
              <div className="flex items-center justify-between">
                <div className="flex size-11 items-center justify-center rounded-xl bg-navy-800 text-white">
                  <Icon className="size-5" />
                </div>
                <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-[11px] font-medium text-emerald-800">
                  {t(`items.${key}.status`)}
                </span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-navy-900">
                {t(`items.${key}.title`)}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-mute">
                {t(`items.${key}.spec`)}
              </p>
              <div className="mt-4">
                <ProgressBar value={progress} label={t('progressLabel')} />
              </div>
              <Link
                href={{
                  pathname: '/contact',
                  query: { product: t(`items.${key}.title`) },
                }}
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-navy-800 transition-colors hover:text-navy-600"
              >
                {t('cta')}
                <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          ))}
        </div>

        <p className="mt-6 text-xs text-mute">{t('disclaimer')}</p>
      </div>
    </section>
  )
}
