import Image from 'next/image'
import { getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import { ArrowRight } from 'lucide-react'
import { LinkedInIcon } from '@/components/icons/LinkedInIcon'

const photos = [
  {
    src: '/about/richie-meeting.jpg',
    alt: 'Albion’s founder meeting a manufacturer at a China trade show',
  },
  {
    src: '/about/richie-inspecting.jpg',
    alt: 'Checking a product hands-on at a China trade show',
  },
  {
    src: '/about/team-visit.jpg',
    alt: 'The Albion team visiting a Chinese manufacturer',
  },
]

export async function SeeUsSourcing() {
  const t = await getTranslations('Proof')
  return (
    <section className="border-b border-navy-100 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="max-w-2xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-navy-200 bg-paper px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-navy-700 sm:text-xs">
            {t('eyebrow')}
          </div>
          <h2 className="text-[1.75rem] font-semibold leading-tight tracking-tight text-navy-900 sm:text-3xl md:text-4xl">
            {t('headline')}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-mute sm:mt-5 md:text-lg">
            {t('body')}
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3 sm:gap-5">
          {photos.map((p) => (
            <div
              key={p.src}
              className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-sm"
            >
              <Image
                src={p.src}
                alt={p.alt}
                fill
                sizes="(min-width: 640px) 33vw, 100vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link
            href="/about"
            className="group inline-flex h-11 items-center justify-center gap-2 rounded-full bg-navy-900 px-5 text-sm font-semibold text-white transition-colors hover:bg-navy-800"
          >
            {t('cta')}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <a
            href="https://www.linkedin.com/company/albion-exports/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-navy-200 px-5 text-sm font-semibold text-navy-800 transition-colors hover:bg-navy-50"
          >
            <LinkedInIcon className="size-4" />
            {t('follow')}
          </a>
        </div>
      </div>
    </section>
  )
}
