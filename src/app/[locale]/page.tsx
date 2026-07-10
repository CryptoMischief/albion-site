import { setRequestLocale } from 'next-intl/server'
import { routing } from '@/i18n/routing'
import { getRegion } from '@/lib/region'
import { Analytics } from '@/components/widgets/Analytics'
import { Hero } from '@/components/sections/Hero'
import { SocialTicker } from '@/components/widgets/SocialTicker'
import { Trust } from '@/components/sections/Trust'
import { SourcingNow } from '@/components/sections/SourcingNow'
import { Scope } from '@/components/sections/Scope'
import { Process } from '@/components/sections/Process'
import { Coverage } from '@/components/sections/Coverage'
import { Contact } from '@/components/sections/Contact'

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  const region = await getRegion()

  return (
    <>
      <Analytics region={region} />
      <Hero />
      <SocialTicker region={region} />
      <Trust />
      <Scope />
      <SourcingNow />
      <Process />
      <Coverage />
      <Contact />
    </>
  )
}
