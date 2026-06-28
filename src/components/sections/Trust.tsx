import { getTranslations } from 'next-intl/server'
import { ShieldCheck, MapPin, ClipboardCheck, Globe2 } from 'lucide-react'

const items = [
  { key: 'owned', Icon: ShieldCheck },
  { key: 'ground', Icon: MapPin },
  { key: 'verify', Icon: ClipboardCheck },
  { key: 'global', Icon: Globe2 },
] as const

export async function Trust() {
  const t = await getTranslations('Trust')
  return (
    <section className="border-b border-navy-100 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <h2 className="text-2xl font-semibold tracking-tight text-navy-900 sm:text-3xl">
          {t('title')}
        </h2>
        <div className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
          {items.map(({ key, Icon }) => (
            <div
              key={key}
              className="group relative overflow-hidden rounded-2xl border border-navy-100 bg-paper p-5 transition-colors hover:border-navy-300 sm:p-6"
            >
              <div className="flex size-11 items-center justify-center rounded-xl bg-navy-800 text-white">
                <Icon className="size-5" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-navy-900 sm:mt-5 sm:text-lg">
                {t(`items.${key}.title`)}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-mute">
                {t(`items.${key}.body`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
