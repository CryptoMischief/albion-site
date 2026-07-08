import type { Metadata } from 'next'
import { setRequestLocale, getTranslations } from 'next-intl/server'
import { routing } from '@/i18n/routing'
import { Link } from '@/i18n/navigation'
import { ArrowRight } from 'lucide-react'
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd'
import { ProductGallery } from '@/components/widgets/ProductGallery'
import {
  products,
  categoryLabels,
  categoryOrder,
  type Locale,
  type Product,
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
    en: 'Products we can supply — vetted at source | Albion Exports',
    zh: '我们可供应的产品 — 源头核验 | 安必隆进出口',
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

function ProductCard({
  p,
  L,
  enquire,
}: {
  p: Product
  L: Locale
  enquire: string
}) {
  return (
    <article className="flex flex-col overflow-hidden rounded-3xl border border-navy-100 bg-white shadow-sm transition-all hover:border-navy-300 hover:shadow-md">
      <ProductGallery images={p.images} alt={p.name[L]} />
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="text-lg font-semibold text-navy-900">{p.name[L]}</h3>
        <p className="mt-2 text-sm leading-relaxed text-mute">{p.blurb[L]}</p>
        <dl className="mt-4 space-y-1.5 text-sm">
          {p.specs.map((s) => (
            <div key={s.label.en} className="flex gap-2">
              <dt className="w-28 shrink-0 text-mute">{s.label[L]}</dt>
              <dd className="text-navy-800">{s.value}</dd>
            </div>
          ))}
        </dl>
        {p.certs.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {p.certs.map((c) => (
              <span
                key={c}
                className="rounded-full bg-paper px-2.5 py-0.5 text-[11px] font-medium text-navy-700"
              >
                {c}
              </span>
            ))}
          </div>
        )}
        {p.video && (
          <video
            controls
            playsInline
            preload="metadata"
            className="mt-4 w-full rounded-xl"
          >
            <source src={`${p.video}#t=0.1`} type="video/mp4" />
          </video>
        )}
        <Link
          href={`/contact?product=${encodeURIComponent(p.name.en)}`}
          className="group mt-5 inline-flex h-10 items-center justify-center gap-1.5 self-start rounded-full bg-navy-900 px-4 text-sm font-semibold text-white transition-colors hover:bg-navy-800"
        >
          {enquire}
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </article>
  )
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

  return (
    <div className="bg-paper">
      <BreadcrumbJsonLd
        items={[
          { name: tNav('home'), url: `${SITE}/${locale}` },
          { name: tNav('products'), url: `${SITE}/${locale}/products` },
        ]}
      />

      <section className="border-b border-navy-100 bg-white">
        <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-20">
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
            <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
              <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-navy-600">
                {categoryLabels[cat][L]}
              </h2>
              {items.length > 0 ? (
                <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((p) => (
                    <ProductCard key={p.slug} p={p} L={L} enquire={t('enquire')} />
                  ))}
                </div>
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
