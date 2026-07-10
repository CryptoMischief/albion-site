import type { Metadata } from 'next'
import { setRequestLocale, getTranslations } from 'next-intl/server'
import { routing } from '@/i18n/routing'
import { Link } from '@/i18n/navigation'
import {
  PawPrint,
  Dumbbell,
  Home,
  Sofa,
  Cpu,
  Bot,
  ArrowRight,
  X,
} from 'lucide-react'
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd'

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
  const titles: Record<string, string> = {
    en: 'What we source — Consumer goods from China | Albion Exports',
    zh: '经营品类 — 中国消费品采购 | 安必隆进出口',
  }
  const descriptions: Record<string, string> = {
    en: 'Pet supplies, sports & outdoor, household goods, furniture parts, consumer electronics and more. Verified at source by founders on the ground.',
    zh: '宠物用品、运动户外、家居日用、家具配件、消费电子等。创始团队中国实地核验。',
  }
  return {
    title: titles[locale] ?? titles.en,
    description: descriptions[locale] ?? descriptions.en,
    alternates: {
      canonical: `/${locale}/services`,
      languages: { en: '/en/services', zh: '/zh/services' },
    },
    openGraph: {
      title: titles[locale] ?? titles.en,
      description: descriptions[locale] ?? descriptions.en,
      url: `${SITE}/${locale}/services`,
      type: 'website',
    },
  }
}

const categories = [
  { key: 'sports', Icon: Dumbbell },
  { key: 'robotics', Icon: Bot },
  { key: 'pet', Icon: PawPrint },
  { key: 'household', Icon: Home },
  { key: 'furniture', Icon: Sofa },
  { key: 'electronics', Icon: Cpu },
] as const

const outOfScopeKeys = ['food', 'pharma', 'ivory'] as const

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations('Services')
  const tNav = await getTranslations('Nav')

  return (
    <div className="bg-paper">
      <BreadcrumbJsonLd
        items={[
          { name: tNav('home'), url: `${SITE}/${locale}` },
          { name: tNav('services'), url: `${SITE}/${locale}/services` },
        ]}
      />

      <section className="border-b border-navy-100 bg-white">
        <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-20">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-navy-200 bg-paper px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-navy-700 sm:text-xs">
            {t('eyebrow')}
          </div>
          <h1 className="max-w-3xl text-[1.75rem] font-semibold leading-tight tracking-tight text-navy-900 sm:text-4xl md:text-5xl lg:text-6xl">
            {t('headline')}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-mute sm:mt-6 md:text-lg">
            {t('intro')}
          </p>
        </div>
      </section>

      <section className="border-b border-navy-100">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <div className="grid gap-5 md:grid-cols-2">
            {categories.map(({ key, Icon }) => (
              <Link
                key={key}
                href={`/products?category=${key}`}
                className="group block rounded-3xl border border-navy-100 bg-white p-6 shadow-sm transition-all hover:border-navy-300 hover:shadow-md sm:p-8"
              >
                <div className="flex size-12 items-center justify-center rounded-xl bg-navy-50 text-navy-800 transition-colors group-hover:bg-navy-800 group-hover:text-white">
                  <Icon className="size-6" />
                </div>
                <h2 className="mt-5 text-xl font-semibold text-navy-900 sm:text-2xl">
                  {t(`categories.${key}.title`)}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-mute sm:text-base">
                  {t(`categories.${key}.body`)}
                </p>
                <p className="mt-4 rounded-xl bg-paper p-4 text-xs leading-relaxed text-navy-700 sm:text-sm">
                  {t(`categories.${key}.examples`)}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-800 group-hover:text-navy-900">
                  {t('viewProducts')}
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-navy-100 bg-paper">
        <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-20">
          <h2 className="text-2xl font-semibold tracking-tight text-navy-900 sm:text-3xl">
            {t('outOfScope.title')}
          </h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {outOfScopeKeys.map((k) => (
              <li
                key={k}
                className="flex items-start gap-3 rounded-2xl border border-navy-100 bg-white p-4 text-sm text-navy-800"
              >
                <X className="mt-0.5 size-4 shrink-0 text-mute" />
                <span>{t(`outOfScope.items.${k}`)}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-4 py-14 text-center sm:px-6 sm:py-20">
          <Link
            href="/contact"
            className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-navy-900 px-6 text-sm font-semibold text-white transition-colors hover:bg-navy-800"
          >
            Request a quote
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
