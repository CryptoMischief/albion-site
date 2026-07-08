import Image from 'next/image'
import { getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/navigation'

const categories = [
  { key: 'pet', img: '/cats/pet.jpg' },
  { key: 'sports', img: '/cats/sports.jpg' },
  { key: 'household', img: '/cats/household.jpg' },
  { key: 'furniture', img: '/cats/furniture.jpg' },
  { key: 'electronics', img: '/cats/electronics.jpg' },
  { key: 'adjacent', img: '/cats/adjacent.jpg' },
] as const

export async function Scope() {
  const t = await getTranslations('Scope')
  return (
    <section id="services" className="scroll-mt-20 bg-paper">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 md:py-28">
        <div className="max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-navy-200 bg-white px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-navy-700 sm:text-xs">
            {t('eyebrow')}
          </div>
          <h2 className="text-[1.75rem] font-semibold leading-tight tracking-tight text-navy-900 sm:text-3xl md:text-4xl lg:text-5xl">
            {t('title')}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-mute sm:mt-5 md:text-lg">
            {t('intro')}
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map(({ key, img }) => (
            <Link
              key={key}
              href={`/products?category=${key}`}
              className="group relative isolate flex min-h-56 flex-col justify-end overflow-hidden rounded-2xl shadow-sm transition-shadow hover:shadow-lg sm:min-h-64"
            >
              <Image
                src={img}
                alt=""
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="-z-10 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* light scrim so the photo never fights the text box */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-navy-900/40 to-transparent" />
              <div className="p-3 sm:p-4">
                <div className="rounded-xl bg-navy-900/85 p-4 backdrop-blur-sm sm:p-5">
                  <h3 className="text-lg font-semibold text-white">
                    {t(`categories.${key}.title`)}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/90">
                    {t(`categories.${key}.body`)}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-white/90">
                    {t('viewProducts')}
                    <span className="transition-transform group-hover:translate-x-0.5">→</span>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
