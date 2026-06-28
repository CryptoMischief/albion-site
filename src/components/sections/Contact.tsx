import { getTranslations } from 'next-intl/server'
import { Mail, ArrowRight } from 'lucide-react'
import { Link } from '@/i18n/navigation'

export async function Contact() {
  const t = await getTranslations('Contact')
  return (
    <section
      id="contact"
      className="scroll-mt-20 border-t border-navy-100 bg-gradient-to-b from-paper to-white"
    >
      <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-20 md:py-28">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-navy-200 bg-white px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-navy-700 sm:text-xs">
          {t('eyebrow')}
        </div>
        <h2 className="text-[1.75rem] font-semibold leading-tight tracking-tight text-navy-900 sm:text-3xl md:text-4xl lg:text-5xl">
          {t('title')}
        </h2>
        <p className="mt-4 text-base leading-relaxed text-mute sm:mt-5 md:text-lg">
          {t('body')}
        </p>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3 sm:mt-8">
          <Link
            href="/contact"
            className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-navy-900 px-6 text-sm font-semibold text-white transition-colors hover:bg-navy-800"
          >
            {t('title')}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <a
            href={`mailto:${t('emailCta')}`}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-navy-200 bg-white px-6 text-sm font-semibold text-navy-800 transition-colors hover:bg-navy-50"
          >
            <Mail className="size-4" />
            {t('emailCta')}
          </a>
        </div>
      </div>
    </section>
  )
}
