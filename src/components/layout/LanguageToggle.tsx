'use client'

import { useLocale, useTranslations } from 'next-intl'
import { usePathname, useRouter } from '@/i18n/navigation'
import { routing } from '@/i18n/routing'

export function LanguageToggle() {
  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()
  const t = useTranslations('Nav')

  const next = locale === 'en' ? 'zh' : 'en'

  return (
    <button
      type="button"
      onClick={() => router.replace(pathname, { locale: next as (typeof routing.locales)[number] })}
      className="rounded-full border border-navy-200 px-3 py-1 text-xs font-medium text-navy-700 transition-colors hover:bg-navy-50"
      aria-label={`Switch to ${next}`}
    >
      {t('languageToggle')}
    </button>
  )
}
