import Image from 'next/image'
import { getTranslations } from 'next-intl/server'
import { ArrowRight } from 'lucide-react'

export async function Hero() {
  const t = await getTranslations('Hero')
  return (
    <section className="relative isolate overflow-hidden">
      {/* Photo: Houston Express container vessel at Hamburg Burchardkai (Pexels, 753331) */}
      <Image
        src="/hero/hero.jpg"
        alt="Container vessel at port — Albion Exports sources, verifies and ships consumer goods from China worldwide"
        fill
        priority
        sizes="100vw"
        className="object-cover -z-10"
      />
      {/* Gradient overlay for legibility */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-navy-900/95 via-navy-900/80 to-navy-800/60" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-navy-900/95 via-transparent to-transparent" />

      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 md:py-32 lg:py-40">
        <div className="grid items-center gap-10 md:grid-cols-12 md:gap-8">
          {/* Logo — single instance, repositioned via grid order. Above text on
              mobile (small), right column on desktop (large). */}
          <div className="-order-1 mx-auto w-40 sm:w-48 md:order-2 md:col-span-5 md:mx-0 md:w-full md:max-w-none">
            <div className="relative aspect-square">
              <Image
                src="/brand/logo-white.png"
                alt="Albion Exports"
                fill
                priority
                sizes="(min-width: 768px) 40vw, 192px"
                className="object-contain drop-shadow-[0_8px_30px_rgba(0,0,0,0.35)]"
              />
            </div>
          </div>

          {/* Text */}
          <div className="text-white md:order-1 md:col-span-7">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-white/90 backdrop-blur sm:text-xs">
              {t('eyebrow')}
            </div>
            <h1 className="text-[2rem] font-semibold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              {t('headline')}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/85 sm:mt-6 sm:text-lg md:text-xl">
              {t('sub')}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3 sm:mt-10">
              <a
                href="#contact"
                className="group inline-flex h-12 min-w-44 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-navy-900 transition-colors hover:bg-navy-50"
              >
                {t('ctaPrimary')}
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#services"
                className="inline-flex h-12 min-w-44 items-center justify-center rounded-full border border-white/40 bg-transparent px-6 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                {t('ctaSecondary')}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-2 right-3 hidden text-[10px] uppercase tracking-wider text-white/40 sm:block">
        {t('photoCredit')}
      </div>
    </section>
  )
}
