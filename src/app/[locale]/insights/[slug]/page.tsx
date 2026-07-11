import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { setRequestLocale, getTranslations } from 'next-intl/server'
import { routing } from '@/i18n/routing'
import { Link } from '@/i18n/navigation'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import {
  BreadcrumbJsonLd,
  ArticleJsonLd,
} from '@/components/seo/JsonLd'
import { posts, type Locale } from '@/data/insights'

const SITE = 'https://albionexports.com'

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    posts.map((p) => ({ locale, slug: p.slug }))
  )
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}): Promise<Metadata> {
  const { locale, slug } = await params
  const post = posts.find((p) => p.slug === slug)
  if (!post) return {}
  const L: Locale = locale === 'zh' ? 'zh' : 'en'
  const title = `${post.title[L]} | Albion Exports`
  const description = post.excerpt[L]
  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}/insights/${slug}`,
      languages: {
        en: `/en/insights/${slug}`,
        zh: `/zh/insights/${slug}`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${SITE}/${locale}/insights/${slug}`,
      type: 'article',
      publishedTime: post.date,
      images: post.image ? [{ url: `${SITE}${post.image}` }] : undefined,
    },
  }
}

export default async function InsightPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale, slug } = await params
  setRequestLocale(locale)
  const L: Locale = locale === 'zh' ? 'zh' : 'en'
  const post = posts.find((p) => p.slug === slug)
  if (!post) notFound()

  const t = await getTranslations('Insights')
  const tNav = await getTranslations('Nav')
  const tOem = await getTranslations('Oem')
  const fmt = new Intl.DateTimeFormat(locale === 'zh' ? 'zh-CN' : 'en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <div className="bg-paper">
      <BreadcrumbJsonLd
        items={[
          { name: tNav('home'), url: `${SITE}/${locale}` },
          { name: tNav('insights'), url: `${SITE}/${locale}/insights` },
          {
            name: post.title[L],
            url: `${SITE}/${locale}/insights/${post.slug}`,
          },
        ]}
      />
      <ArticleJsonLd
        headline={post.title[L]}
        description={post.excerpt[L]}
        url={`${SITE}/${locale}/insights/${post.slug}`}
        datePublished={post.date}
        image={post.image}
      />

      <article className="mx-auto max-w-2xl px-4 py-14 sm:px-6 sm:py-20">
        <Link
          href="/insights"
          className="group inline-flex items-center gap-1.5 text-sm font-medium text-navy-600 hover:text-navy-900"
        >
          <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-0.5" />
          {t('backToInsights')}
        </Link>

        <div className="mt-6 text-xs font-medium uppercase tracking-[0.16em] text-mute">
          {fmt.format(new Date(post.date))}
        </div>
        <h1 className="mt-3 text-[1.75rem] font-semibold leading-tight tracking-tight text-navy-900 sm:text-4xl">
          {post.title[L]}
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-mute">
          {post.excerpt[L]}
        </p>

        <div className="mt-10 space-y-5">
          {post.body.map((block, i) => {
            if (block.type === 'h2') {
              return (
                <h2
                  key={i}
                  className="pt-4 text-xl font-semibold tracking-tight text-navy-900 sm:text-2xl"
                >
                  {block.text[L]}
                </h2>
              )
            }
            if (block.type === 'ul') {
              return (
                <ul key={i} className="ml-1 space-y-2">
                  {block.items[L].map((it, j) => (
                    <li key={j} className="flex gap-2.5 text-base leading-relaxed text-navy-800">
                      <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-navy-400" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              )
            }
            return (
              <p key={i} className="text-base leading-relaxed text-navy-800">
                {block.text[L]}
              </p>
            )
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-3xl border border-navy-100 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-lg font-semibold text-navy-900 sm:text-xl">
            {tOem('ctaHeading')}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-mute">
            {tOem('ctaBody')}
          </p>
          <Link
            href="/contact?enquiry=oem"
            className="group mt-5 inline-flex h-11 items-center justify-center gap-2 rounded-full bg-navy-900 px-5 text-sm font-semibold text-white transition-colors hover:bg-navy-800"
          >
            {tOem('ctaButton')}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </article>
    </div>
  )
}
