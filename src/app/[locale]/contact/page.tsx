import type { Metadata } from 'next'
import { setRequestLocale, getTranslations } from 'next-intl/server'
import { routing } from '@/i18n/routing'
import { ContactForm } from '@/components/forms/ContactForm'
import { Mail } from 'lucide-react'
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
    en: 'Contact Albion Exports — Request a sourcing quote',
    zh: '联系安必隆进出口 — 请求采购报价',
  }
  const descriptions: Record<string, string> = {
    en: 'Tell us what you are sourcing and when you need it. Vetted China supplier options and indicative pricing within 24 hours.',
    zh: '请告知采购品类与交期。24 小时内回复经过核证的中国供应商与初步报价。',
  }
  return {
    title: titles[locale] ?? titles.en,
    description: descriptions[locale] ?? descriptions.en,
    alternates: {
      canonical: `/${locale}/contact`,
      languages: { en: '/en/contact', zh: '/zh/contact' },
    },
    openGraph: {
      title: titles[locale] ?? titles.en,
      description: descriptions[locale] ?? descriptions.en,
      url: `${SITE}/${locale}/contact`,
      type: 'website',
    },
  }
}

export default async function ContactPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>
  searchParams: Promise<{ product?: string }>
}) {
  const { locale } = await params
  const { product } = await searchParams
  setRequestLocale(locale)
  const t = await getTranslations('ContactPage')
  const tAlt = await getTranslations('ContactPage.alt')
  const tNav = await getTranslations('Nav')

  return (
    <div className="bg-paper">
      <BreadcrumbJsonLd
        items={[
          { name: tNav('home'), url: `${SITE}/${locale}` },
          { name: tNav('contact'), url: `${SITE}/${locale}/contact` },
        ]}
      />

      <section className="border-b border-navy-100 bg-white">
        <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 sm:py-20">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-navy-200 bg-paper px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-navy-700 sm:text-xs">
            {t('eyebrow')}
          </div>
          <h1 className="text-[1.75rem] font-semibold leading-tight tracking-tight text-navy-900 sm:text-4xl md:text-5xl">
            {t('headline')}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-mute sm:mt-5 md:text-lg">
            {t('sub')}
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto grid max-w-5xl gap-10 px-4 py-14 sm:px-6 sm:py-20 md:grid-cols-3 md:gap-12">
          <div className="md:col-span-2 rounded-3xl border border-navy-100 bg-white p-6 sm:p-8 md:p-10">
            <ContactForm defaultProduct={product} />
          </div>
          <aside className="space-y-6">
            <div className="rounded-3xl border border-navy-100 bg-white p-6">
              <h2 className="text-base font-semibold text-navy-900">
                {tAlt('title')}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-mute">
                {tAlt('body')}
              </p>
              <a
                href="mailto:hello@albionexports.com"
                className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-navy-800 hover:text-navy-600"
              >
                <Mail className="size-4" />
                hello@albionexports.com
              </a>
            </div>
          </aside>
        </div>
      </section>
    </div>
  )
}
