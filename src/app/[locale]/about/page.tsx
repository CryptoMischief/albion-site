import type { Metadata } from 'next'
import Image from 'next/image'
import { setRequestLocale, getTranslations } from 'next-intl/server'
import { routing } from '@/i18n/routing'
import { Link } from '@/i18n/navigation'
import { ArrowRight } from 'lucide-react'
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd'
import { Flag } from '@/components/icons/Flag'

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
    en: 'About Albion Exports — British-owned sourcing partner in China',
    zh: '关于安必隆进出口 — 英国独资 · 常驻中国的采购合作伙伴',
  }
  const descriptions: Record<string, string> = {
    en: 'Albion Exports is a British-owned trading company registered in China. Founders on the ground in Hefei, supplier verification across China, delivery worldwide.',
    zh: '安必隆进出口是一家注册于中国的英国独资贸易公司。创始团队常驻合肥,在中国全境核验供应商,面向全球交付。',
  }
  return {
    title: titles[locale] ?? titles.en,
    description: descriptions[locale] ?? descriptions.en,
    alternates: {
      canonical: `/${locale}/about`,
      languages: { en: '/en/about', zh: '/zh/about' },
    },
    openGraph: {
      title: titles[locale] ?? titles.en,
      description: descriptions[locale] ?? descriptions.en,
      url: `${SITE}/${locale}/about`,
      type: 'website',
    },
  }
}

const members = ['founder', 'cofounder', 'qc', 'germany'] as const

// Members with a headshot in /public/team — others render text-only
const memberPhotos: Record<string, string> = {
  founder: '/team/founder.jpg',
  cofounder: '/team/cofounder.jpg',
  qc: '/team/qc.jpg',
}

// Nationality flag shown beside each member's name
const memberFlags: Record<string, 'gb' | 'ps' | 'de'> = {
  founder: 'gb',
  cofounder: 'gb',
  qc: 'ps',
  germany: 'de',
}
const factKeys = ['name', 'type', 'uscc', 'domicile', 'bank'] as const

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations('About')
  const tNav = await getTranslations('Nav')

  return (
    <div className="bg-paper">
      <BreadcrumbJsonLd
        items={[
          { name: tNav('home'), url: `${SITE}/${locale}` },
          { name: tNav('about'), url: `${SITE}/${locale}/about` },
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

      <section className="border-b border-navy-100 bg-paper">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-14">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-sm">
              <Image
                src="/about/richie-meeting.jpg"
                alt="Richie, Albion's founder, meeting a manufacturer on a China trade-show floor"
                fill
                sizes="(min-width: 1024px) 38vw, 100vw"
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-navy-900 sm:text-3xl">
                {t('story.title')}
              </h2>
              <div className="mt-5 space-y-4">
                {(t.raw('story.paras') as string[]).map((para, i) => (
                  <p
                    key={i}
                    className="text-base leading-relaxed text-mute md:text-lg"
                  >
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* On the ground */}
      <section className="border-b border-navy-100 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <p className="max-w-2xl text-lg font-semibold leading-snug tracking-tight text-navy-900 sm:text-xl md:text-2xl">
            {t('ground.caption')}
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 sm:gap-5">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-sm">
              <Image
                src="/about/richie-inspecting.jpg"
                alt="Richie checking a product hands-on at a China trade show"
                fill
                sizes="(min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-sm">
              <Image
                src="/about/team-visit.jpg"
                alt="The Albion team visiting a Chinese manufacturer"
                fill
                sizes="(min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-navy-100 bg-white">
        <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-20">
          <h2 className="text-2xl font-semibold tracking-tight text-navy-900 sm:text-3xl">
            {t('team.title')}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-mute sm:mt-5">
            {t('team.intro')}
          </p>

          {/* Founder card — full-width, photo beside text so the face is never cropped */}
          <div className="mt-10 overflow-hidden rounded-2xl border border-navy-100 bg-paper sm:flex">
            <div className="relative aspect-[4/5] sm:aspect-auto sm:w-2/5 sm:min-h-72">
              <Image
                src="/team/founder.jpg"
                alt={t('team.members.founder.name')}
                fill
                sizes="(min-width: 640px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center p-5 sm:flex-1 sm:p-8">
              <h3 className="flex items-center gap-2 text-xl font-semibold text-navy-900">
                {t('team.members.founder.name')}
                <Flag code={memberFlags.founder} />
              </h3>
              <div className="mt-1 text-xs uppercase tracking-[0.16em] text-navy-600">
                {t('team.members.founder.role')}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-mute sm:text-base">
                {t('team.members.founder.body')}
              </p>
            </div>
          </div>

          <div className="mt-4 grid gap-4 sm:gap-5 md:grid-cols-3">
            {members
              .filter((k) => k !== 'founder')
              .map((k) => (
                <div
                  key={k}
                  className="overflow-hidden rounded-2xl border border-navy-100 bg-paper"
                >
                  {memberPhotos[k] && (
                    <div className="relative aspect-[4/5] w-full">
                      <Image
                        src={memberPhotos[k]}
                        alt={t(`team.members.${k}.name`)}
                        fill
                        sizes="(min-width: 768px) 30vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="p-5 sm:p-6">
                  <h3 className="flex items-center gap-2 text-lg font-semibold text-navy-900">
                    {t(`team.members.${k}.name`)}
                    {memberFlags[k] && <Flag code={memberFlags[k]} />}
                  </h3>
                  <div className="mt-1 text-xs uppercase tracking-[0.16em] text-navy-600">
                    {t(`team.members.${k}.role`)}
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-mute">
                    {t(`team.members.${k}.body`)}
                  </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-900 text-white">
        <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-20">
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            {t('facts.title')}
          </h2>
          <dl className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10">
            {factKeys.map((k) => (
              <div
                key={k}
                className="grid gap-1 bg-navy-900 px-5 py-4 sm:grid-cols-3 sm:gap-4 sm:px-6"
              >
                <dt className="text-xs uppercase tracking-[0.16em] text-white/60">
                  {t(`facts.items.${k}.label`)}
                </dt>
                <dd className="text-sm leading-relaxed text-white sm:col-span-2">
                  {t(`facts.items.${k}.value`)}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="border-t border-navy-100 bg-white">
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
