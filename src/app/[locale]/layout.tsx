import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { NextIntlClientProvider, hasLocale } from 'next-intl'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { routing } from '@/i18n/routing'
import { getRegion } from '@/lib/region'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { OrganizationJsonLd } from '@/components/seo/JsonLd'
import { WhatsAppFloat } from '@/components/widgets/WhatsAppFloat'
import '../globals.css'

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

const SITE_URL = 'https://albionexports.com'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) return {}
  const t = await getTranslations({ locale, namespace: 'Meta' })
  const title = t('title')
  const description = t('description')
  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: '/en',
        zh: '/zh',
      },
    },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/${locale}`,
      siteName: 'Albion Exports',
      locale: locale === 'zh' ? 'zh_CN' : 'en_GB',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  }
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) notFound()
  setRequestLocale(locale)

  const region = await getRegion()

  return (
    <html lang={locale} className="h-full">
      <body className="min-h-full flex flex-col bg-paper text-ink">
        <NextIntlClientProvider>
          <OrganizationJsonLd />
          <Header region={region} />
          <main className="flex-1">{children}</main>
          <Footer region={region} />
          <WhatsAppFloat />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
