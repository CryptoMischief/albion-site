import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { setRequestLocale, getTranslations } from 'next-intl/server'
import { routing } from '@/i18n/routing'
import { Link } from '@/i18n/navigation'
import { ArrowLeft } from 'lucide-react'
import { BreadcrumbJsonLd, ProductJsonLd } from '@/components/seo/JsonLd'
import { ProductDetail } from '@/components/products/ProductDetail'
import { products, categoryLabels, type Locale } from '@/data/products'

const SITE = 'https://albionexports.com'

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    products.map((p) => ({ locale, slug: p.slug }))
  )
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}): Promise<Metadata> {
  const { locale, slug } = await params
  const product = products.find((p) => p.slug === slug)
  if (!product) return {}
  const L: Locale = locale === 'zh' ? 'zh' : 'en'
  const name = product.name[L]
  const cat = categoryLabels[product.category][L]
  const title = `${name} — ${cat} | Albion Exports`
  const description = product.blurb[L]
  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}/products/${slug}`,
      languages: {
        en: `/en/products/${slug}`,
        zh: `/zh/products/${slug}`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${SITE}/${locale}/products/${slug}`,
      type: 'website',
      images: product.images.length
        ? [{ url: `${SITE}${product.images[0]}` }]
        : undefined,
    },
  }
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale, slug } = await params
  setRequestLocale(locale)
  const L: Locale = locale === 'zh' ? 'zh' : 'en'
  const product = products.find((p) => p.slug === slug)
  if (!product) notFound()

  const t = await getTranslations('Products')
  const tNav = await getTranslations('Nav')
  const cat = categoryLabels[product.category]

  return (
    <div className="bg-paper">
      <BreadcrumbJsonLd
        items={[
          { name: tNav('home'), url: `${SITE}/${locale}` },
          { name: tNav('products'), url: `${SITE}/${locale}/products` },
          {
            name: cat[L],
            url: `${SITE}/${locale}/products?category=${product.category}`,
          },
          {
            name: product.name[L],
            url: `${SITE}/${locale}/products/${product.slug}`,
          },
        ]}
      />
      <ProductJsonLd
        product={product}
        locale={L}
        url={`${SITE}/${locale}/products/${product.slug}`}
      />

      <section className="border-b border-navy-100 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
          <Link
            href={`/products?category=${product.category}`}
            className="group inline-flex items-center gap-1.5 text-sm font-medium text-navy-600 hover:text-navy-900"
          >
            <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-0.5" />
            {cat[L]}
          </Link>
          <h1 className="mt-4 max-w-3xl text-[1.6rem] font-semibold leading-tight tracking-tight text-navy-900 sm:text-3xl md:text-4xl">
            {product.name[L]}
          </h1>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
          <ProductDetail p={product} L={L} enquire={t('enquire')} />
        </div>
      </section>
    </div>
  )
}
