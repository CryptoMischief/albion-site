import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
  locales: ['en', 'zh'] as const,
  defaultLocale: 'en',
  // /en/about for English, /zh/about for Chinese. Root redirects to detected locale.
  localePrefix: 'always',
})

export type Locale = (typeof routing.locales)[number]
