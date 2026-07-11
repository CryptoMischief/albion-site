import type { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { setRequestLocale, getTranslations } from 'next-intl/server'
import { routing } from '@/i18n/routing'
import { Link } from '@/i18n/navigation'
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react'
import {
  BreadcrumbJsonLd,
  ArticleJsonLd,
  FaqJsonLd,
} from '@/components/seo/JsonLd'
import { ArticleBody } from '@/components/insights/ArticleBody'
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
    twitter: {
      card: 'summary_large_image',
      title,
      description,
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
  const faq = post.faq[L]
  const further = post.furtherReading[L]

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
        authorName={post.author.name}
        authorRole={post.author.role[L]}
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
        <p className="mt-5 text-lg italic leading-relaxed text-mute">
          {post.standfirst[L]}
        </p>

        {/* Byline — E-E-A-T signal */}
        <div className="mt-6 border-y border-navy-100 py-4">
          <div className="text-sm font-semibold text-navy-900">
            {post.author.name} · {post.author.role[L]}
          </div>
          <p className="mt-1 text-sm leading-relaxed text-mute">
            {post.author.bio[L]}
          </p>
        </div>

        {post.image && (
          <div className="relative mt-8 aspect-[3/2] overflow-hidden rounded-2xl bg-navy-50">
            <Image
              src={post.image}
              alt={post.imageAlt[L]}
              fill
              priority
              sizes="(min-width: 672px) 640px, 100vw"
              className="object-cover"
            />
          </div>
        )}

        <div className="mt-10">
          <ArticleBody markdown={post.body[L]} locale={L} />
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

        {/* FAQ */}
        {faq.length > 0 && (
          <section className="mt-12">
            <h2 className="text-xl font-semibold tracking-tight text-navy-900 sm:text-2xl">
              {tOem('faqHeading')}
            </h2>
            <dl className="mt-6 divide-y divide-navy-100 border-t border-navy-100">
              {faq.map((f) => (
                <div key={f.q} className="py-5">
                  <dt className="text-base font-semibold text-navy-900">
                    {f.q}
                  </dt>
                  <dd className="mt-2 text-sm leading-relaxed text-mute">
                    {f.a}
                  </dd>
                </div>
              ))}
            </dl>
            <FaqJsonLd items={faq} />
          </section>
        )}

        {/* Further reading */}
        {further.length > 0 && (
          <section className="mt-10 rounded-2xl bg-white p-6 ring-1 ring-navy-100">
            <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-navy-600">
              {L === 'zh' ? '延伸阅读' : 'Further reading'}
            </h2>
            <ul className="mt-3 space-y-2">
              {further.map((r) => (
                <li key={r.url}>
                  <a
                    href={r.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-start gap-1.5 text-sm font-medium text-navy-700 hover:text-navy-900"
                  >
                    <ExternalLink className="mt-0.5 size-3.5 shrink-0 text-navy-400" />
                    <span className="underline decoration-navy-200 underline-offset-2">
                      {r.label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        )}
      </article>
    </div>
  )
}
