import type { Metadata } from 'next'
import Image from 'next/image'
import { setRequestLocale, getTranslations } from 'next-intl/server'
import { routing } from '@/i18n/routing'
import { Link } from '@/i18n/navigation'
import { ArrowRight } from 'lucide-react'
import { SubstackIcon } from '@/components/icons/SubstackIcon'
import { LinkedInIcon } from '@/components/icons/LinkedInIcon'
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd'
import { posts, type Locale } from '@/data/insights'

const SITE = 'https://albionexports.com'
const SUBSTACK = 'https://albionexports.substack.com'
const LINKEDIN = 'https://www.linkedin.com/company/albion-exports/'

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

      {/* Navy hero */}
      <section className="bg-gradient-to-br from-navy-900 via-navy-900 to-navy-800">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-white/90 backdrop-blur sm:text-xs">
            {t('eyebrow')}
          </div>
          <h1 className="max-w-3xl text-[2rem] font-semibold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
            {t('headline')}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/85 sm:mt-6 md:text-lg">
            {t('intro')}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={SUBSTACK}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex h-11 items-center justify-center gap-2 rounded-full bg-white px-5 text-sm font-semibold text-navy-900 transition-colors hover:bg-navy-50"
            >
              <SubstackIcon className="size-4" />
              {t('subscribe')}
            </a>
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-white/40 px-5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              <LinkedInIcon className="size-4" />
              {t('follow')}
            </a>
          </div>
        </div>
      </section>

      {/* Articles */}
      <section>
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="space-y-6">
            {sorted.map((p) => (
              <Link
                key={p.slug}
                href={`/insights/${p.slug}`}
                className="group grid overflow-hidden rounded-3xl border border-navy-100 bg-white shadow-sm transition-all hover:border-navy-300 hover:shadow-md sm:grid-cols-[13rem_1fr] lg:grid-cols-[18rem_1fr]"
              >
                {p.image && (
                  <div className="relative aspect-[16/10] sm:aspect-auto">
                    <Image
                      src={p.image}
                      alt={p.imageAlt[L]}
                      fill
                      sizes="(min-width: 1024px) 18rem, (min-width: 640px) 13rem, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                )}
                <div className="p-6 sm:p-8">
                  <div className="text-xs font-medium uppercase tracking-[0.16em] text-mute">
                    {fmt.format(new Date(p.date))}
                  </div>
                  <h2 className="mt-2 text-xl font-semibold leading-snug tracking-tight text-navy-900 sm:text-2xl">
                    {p.title[L]}
                  </h2>
                  <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-mute sm:text-base">
                    {p.excerpt[L]}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-800 group-hover:text-navy-900">
                    {t('readMore')}
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA band */}
      <section className="border-t border-navy-100 bg-gradient-to-br from-navy-900 via-navy-900 to-navy-800">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-20">
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            {t('newsletterHeading')}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-white/85">
            {t('newsletterBody')}
          </p>
          <a
            href={SUBSTACK}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-7 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-navy-900 transition-colors hover:bg-navy-50"
          >
            <SubstackIcon className="size-4" />
            {t('subscribe')}
          </a>
        </div>
      </section>
    </div>
  )
}
