import type { Metadata } from 'next'
import { setRequestLocale, getTranslations } from 'next-intl/server'
import { routing } from '@/i18n/routing'
import { Link } from '@/i18n/navigation'
import { ArrowRight } from 'lucide-react'
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd'
import { ProductBrowser } from '@/components/products/ProductBrowser'
import {
  products,
  categoryLabels,
  categoryOrder,
  subcategoryLabels,
  subcategoryOrder,
  type Locale,
} from '@/data/products'

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
    en: 'Products we supply — vetted at source | Albion Exports',
    zh: '我们供应的产品 — 源头核验 | 安必隆进出口',
  }
  const descriptions: Record<string, string> = {
    en: 'Consumer products from Chinese factories we have vetted on the ground. Available OEM or ODM with your branding.',
    zh: '来自我们在中国实地核验工厂的消费品。支持 OEM / ODM 自有品牌定制。',
  }
  return {
    title: titles[locale] ?? titles.en,
    description: descriptions[locale] ?? descriptions.en,
    alternates: {
      canonical: `/${locale}/products`,
      languages: { en: '/en/products', zh: '/zh/products' },
    },
  }
}

export default async function ProductsPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>
  searchParams: Promise<{ category?: string }>
}) {
  const { locale } = await params
  const { category } = await searchParams
  setRequestLocale(locale)
  const L: Locale = locale === 'zh' ? 'zh' : 'en'
  const t = await getTranslations('Products')
  const tNav = await getTranslations('Nav')

  const selected =
    category && category in categoryLabels
      ? (category as keyof typeof categoryLabels)
      : null

  // categories to render: the selected one, or every category that has products
  const cats = selected
    ? [selected]
    : categoryOrder.filter((c) => products.some((p) => p.category === c))

  // localized subcategory labels for the filter pills
  const subLabels: Record<string, string> = Object.fromEntries(
    subcategoryOrder.map((k) => [k, subcategoryLabels[k][L]])
  )

  return (
    <div className="bg-paper">
      <BreadcrumbJsonLd
        items={[
          { name: tNav('home'), url: `${SITE}/${locale}` },
          { name: tNav('products'), url: `${SITE}/${locale}/products` },
        ]}
      />

      <section className="border-b border-navy-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-navy-200 bg-paper px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-navy-700 sm:text-xs">
            {selected ? categoryLabels[selected][L] : t('eyebrow')}
          </div>
          <h1 className="max-w-3xl text-[1.75rem] font-semibold leading-tight tracking-tight text-navy-900 sm:text-4xl md:text-5xl lg:text-6xl">
            {t('headline')}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-mute sm:mt-6 md:text-lg">
            {t('intro')}
          </p>
        </div>
      </section>

      {cats.map((cat) => {
        const items = products.filter((p) => p.category === cat)
        return (
          <section key={cat} id={cat} className="scroll-mt-20 border-b border-navy-100">
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
              <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-navy-600">
                {categoryLabels[cat][L]}
              </h2>
              {items.length > 0 ? (
                <ProductBrowser
                  products={items}
                  L={L}
                  enquire={t('enquire')}
                  viewLabel={t('viewProduct')}
                  subLabels={subLabels}
                  subOrder={subcategoryOrder}
                  allLabel={t('all')}
                  moreLabel={t('more')}
                />
              ) : (
                <div className="mt-6 rounded-3xl border border-dashed border-navy-200 bg-white p-8 text-center sm:p-12">
                  <p className="mx-auto max-w-md text-sm leading-relaxed text-mute">
                    {t('soon')}
                  </p>
                  <Link
                    href={`/contact?category=${cat}`}
                    className="group mt-5 inline-flex h-10 items-center justify-center gap-1.5 rounded-full bg-navy-900 px-4 text-sm font-semibold text-white transition-colors hover:bg-navy-800"
                  >
                    {t('enquire')}
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              )}
            </div>
          </section>
        )
      })}
    </div>
  )
}
