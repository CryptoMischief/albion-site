import type { Metadata } from 'next'
import { setRequestLocale, getTranslations } from 'next-intl/server'
import { routing } from '@/i18n/routing'
import { Link } from '@/i18n/navigation'
import { ArrowRight } from 'lucide-react'
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd'
import { posts, type Locale } from '@/data/insights'

const SITE = 'https://albionexports.com'

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'Insights' })
  const title = `${t('headline')} | Albion Exports`
  return {
    title,
    description: t('intro'),
    alternates: {
      canonical: `/${locale}/insights`,
      languages: { en: '/en/insights', zh: '/zh/insights' },
    },
    openGraph: { title, description: t('intro'), url: `${SITE}/${locale}/insights`, type: 'website' },
  }
}

export default async function InsightsPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  const L: Locale = locale === 'zh' ? 'zh' : 'en'
  const t = await getTranslations('Insights')
  const tNav = await getTranslations('Nav')
  const fmt = new Intl.DateTimeFormat(locale === 'zh' ? 'zh-CN' : 'en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
  const sorted = [...posts].sort((a, b) => (a.date < b.date ? 1 : -1))

  return (
    <div className="bg-paper">
      <BreadcrumbJsonLd
        items={[
          { name: tNav('home'), url: `${SITE}/${locale}` },
          { name: tNav('insights'), url: `${SITE}/${locale}/insights` },
        ]}
      />

      <section className="border-b border-navy-100 bg-white">
        <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-20">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-navy-200 bg-paper px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-navy-700 sm:text-xs">
            {t('eyebrow')}
          </div>
          <h1 className="max-w-3xl text-[1.75rem] font-semibold leading-tight tracking-tight text-navy-900 sm:text-4xl md:text-5xl">
            {t('headline')}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-mute sm:mt-6 md:text-lg">
            {t('intro')}
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="space-y-4">
            {sorted.map((p) => (
              <Link
                key={p.slug}
                href={`/insights/${p.slug}`}
                className="group block rounded-3xl border border-navy-100 bg-white p-6 shadow-sm transition-all hover:border-navy-300 hover:shadow-md sm:p-8"
              >
                <div className="text-xs font-medium uppercase tracking-[0.16em] text-mute">
                  {fmt.format(new Date(p.date))}
                </div>
                <h2 className="mt-2 text-xl font-semibold leading-snug tracking-tight text-navy-900 sm:text-2xl">
                  {p.title[L]}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-mute sm:text-base">
                  {p.excerpt[L]}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-800 group-hover:text-navy-900">
                  {t('readMore')}
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
