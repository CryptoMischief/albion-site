import type { Metadata } from 'next'
import Image from 'next/image'
import { setRequestLocale, getTranslations } from 'next-intl/server'
import { routing } from '@/i18n/routing'
import { Link } from '@/i18n/navigation'
import {
  PackageOpen,
  Palette,
  Timer,
  Factory,
  ShieldCheck,
  Layers,
  Check,
  ArrowRight,
} from 'lucide-react'
import { BreadcrumbJsonLd, FaqJsonLd } from '@/components/seo/JsonLd'
import { FaqAccordion } from '@/components/ui/FaqAccordion'

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
  const t = await getTranslations({ locale, namespace: 'Oem' })
  return {
    title: t('meta.title'),
    description: t('meta.description'),
    alternates: {
      canonical: `/${locale}/oem`,
      languages: { en: '/en/oem', zh: '/zh/oem' },
    },
    openGraph: {
      title: t('meta.title'),
      description: t('meta.description'),
      url: `${SITE}/${locale}/oem`,
      type: 'website',
    },
  }
}

const propIcons = [PackageOpen, Palette, Timer, Factory, ShieldCheck, Layers]

type TwoLine = { title: string; body: string }
type Tier = { name: string; tag: string; body: string; points: string[]; cta: string }

export default async function OemPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations('Oem')
  const tNav = await getTranslations('Nav')

  const props = t.raw('props') as TwoLine[]
  const tiers = t.raw('tiers') as Tier[]
  const steps = t.raw('steps') as TwoLine[]
  const why = t.raw('why') as TwoLine[]
  const faq = t.raw('faq') as { q: string; a: string }[]

  return (
    <div className="bg-paper">
      <BreadcrumbJsonLd
        items={[
          { name: tNav('home'), url: `${SITE}/${locale}` },
          { name: tNav('oem'), url: `${SITE}/${locale}/oem` },
        ]}
      />

      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <Image
          src="/insights/img/china-factory-floor.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-navy-900/97 via-navy-900/88 to-navy-800/72" />
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 md:py-32">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-white/90 backdrop-blur sm:text-xs">
            {t('eyebrow')}
          </div>
          <h1 className="max-w-4xl text-[2rem] font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl">
            {t('headline')}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg md:text-xl">
            {t('sub')}
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Link
              href="/contact?enquiry=oem"
              className="group inline-flex h-12 min-w-44 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-navy-900 transition-colors hover:bg-navy-50"
            >
              {t('ctaPrimary')}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/services"
              className="inline-flex h-12 min-w-44 items-center justify-center rounded-full border border-white/40 px-6 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              {t('ctaSecondary')}
            </Link>
          </div>
        </div>
      </section>

      {/* Value props */}
      <section className="border-b border-navy-100">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <h2 className="max-w-2xl text-2xl font-semibold tracking-tight text-navy-900 sm:text-3xl md:text-4xl">
            {t('propsHeading')}
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {props.map((p, i) => {
              const Icon = propIcons[i] ?? PackageOpen
              return (
                <div
                  key={p.title}
                  className="rounded-3xl border border-navy-100 bg-white p-6 shadow-sm sm:p-7"
                >
                  <div className="flex size-11 items-center justify-center rounded-xl bg-gradient-to-br from-navy-600 to-navy-900 text-white shadow-sm">
                    <Icon className="size-5.5" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-navy-900">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-mute">{p.body}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Two service tiers */}
      <section className="border-b border-navy-100 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <h2 className="text-2xl font-semibold tracking-tight text-navy-900 sm:text-3xl md:text-4xl">
            {t('tiersHeading')}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-mute md:text-lg">
            {t('tiersIntro')}
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {tiers.map((tier, i) => (
              <div
                key={tier.name}
                className={`flex flex-col rounded-3xl border p-7 sm:p-8 ${
                  i === 1
                    ? 'border-navy-900 bg-navy-900 text-white'
                    : 'border-navy-200 bg-paper'
                }`}
              >
                <span
                  className={`inline-flex w-fit items-center rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] ${
                    i === 1
                      ? 'bg-white/15 text-white'
                      : 'bg-navy-100 text-navy-700'
                  }`}
                >
                  {tier.tag}
                </span>
                <h3
                  className={`mt-4 text-xl font-semibold sm:text-2xl ${
                    i === 1 ? 'text-white' : 'text-navy-900'
                  }`}
                >
                  {tier.name}
                </h3>
                <p
                  className={`mt-3 text-sm leading-relaxed ${
                    i === 1 ? 'text-white/85' : 'text-mute'
                  }`}
                >
                  {tier.body}
                </p>
                <ul className="mt-5 space-y-2.5">
                  {tier.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2.5 text-sm">
                      <Check
                        className={`mt-0.5 size-4 shrink-0 ${
                          i === 1 ? 'text-white' : 'text-navy-700'
                        }`}
                      />
                      <span className={i === 1 ? 'text-white/90' : 'text-navy-800'}>
                        {pt}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/contact?enquiry=${i === 1 ? 'oem' : 'commission'}`}
                  className={`group mt-7 inline-flex h-11 items-center justify-center gap-2 self-start rounded-full px-5 text-sm font-semibold transition-colors ${
                    i === 1
                      ? 'bg-white text-navy-900 hover:bg-navy-50'
                      : 'bg-navy-900 text-white hover:bg-navy-800'
                  }`}
                >
                  {tier.cta}
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="border-b border-navy-100">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <h2 className="text-2xl font-semibold tracking-tight text-navy-900 sm:text-3xl md:text-4xl">
            {t('stepsHeading')}
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map((s, i) => (
              <div
                key={s.title}
                className="rounded-3xl border border-navy-100 bg-white p-6 shadow-sm sm:p-7"
              >
                <span className="inline-flex size-9 items-center justify-center rounded-full bg-navy-900 text-sm font-semibold text-white">
                  {i + 1}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-navy-900">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-mute">{s.body}</p>
              </div>
            ))}
          </div>

          {/* Example deliverable */}
          <div className="mt-12 grid gap-8 rounded-3xl border border-navy-100 bg-white p-6 shadow-sm sm:p-10 lg:grid-cols-2 lg:items-center lg:gap-12">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-navy-200 bg-paper px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-navy-700">
                {t('exampleEyebrow')}
              </div>
              <h3 className="mt-4 text-xl font-semibold tracking-tight text-navy-900 sm:text-2xl">
                {t('exampleHeading')}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-mute sm:text-base">
                {t('exampleBody')}
              </p>
            </div>
            <div className="relative aspect-[1200/1045] overflow-hidden rounded-2xl border border-navy-100 shadow-md ring-1 ring-navy-100">
              <Image
                src="/oem/spec-comparison-example.jpg"
                alt="Albion spec comparison: a client's requirements checked against a battery cell, parameter by parameter"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Full-bleed image band */}
      <section className="relative isolate overflow-hidden border-b border-navy-100">
        <Image
          src="/insights/img/china-production-line.jpg"
          alt=""
          fill
          sizes="100vw"
          className="-z-10 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-navy-900/82" />
        <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 sm:py-28">
          <p className="text-2xl font-semibold leading-snug tracking-tight text-white sm:text-3xl md:text-4xl">
            {t('bandLine')}
          </p>
        </div>
      </section>

      {/* Why Albion */}
      <section className="border-b border-navy-100 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-sm">
              <Image
                src="/insights/img/factory-quality-inspection.jpg"
                alt=""
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-navy-900 sm:text-3xl md:text-4xl">
                {t('whyHeading')}
              </h2>
              <div className="mt-8 space-y-7">
                {why.map((w) => (
                  <div key={w.title} className="border-l-2 border-navy-200 pl-5">
                    <h3 className="text-lg font-semibold text-navy-900">
                      {w.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-mute">
                      {w.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-b border-navy-100">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
          <h2 className="text-2xl font-semibold tracking-tight text-navy-900 sm:text-3xl md:text-4xl">
            {t('faqHeading')}
          </h2>
          <FaqAccordion items={faq} />
        </div>
        <FaqJsonLd items={faq} />
      </section>

      {/* CTA band */}
      <section className="bg-gradient-to-br from-navy-900 via-navy-900 to-navy-800">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-24">
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-4xl">
            {t('ctaHeading')}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/85 md:text-lg">
            {t('ctaBody')}
          </p>
          <Link
            href="/contact?enquiry=oem"
            className="group mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-navy-900 transition-colors hover:bg-navy-50"
          >
            {t('ctaButton')}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
