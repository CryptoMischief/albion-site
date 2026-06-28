import type { MetadataRoute } from 'next'
import { routing } from '@/i18n/routing'

const SITE = 'https://albionexports.com'

const routes = [
  { path: '', priority: 1.0, changeFrequency: 'weekly' as const },
  { path: '/about', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/services', priority: 0.9, changeFrequency: 'monthly' as const },
  { path: '/contact', priority: 0.7, changeFrequency: 'monthly' as const },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date('2026-06-11')
  const entries: MetadataRoute.Sitemap = []

  for (const route of routes) {
    for (const locale of routing.locales) {
      const url = `${SITE}/${locale}${route.path}`
      const alternates = Object.fromEntries(
        routing.locales.map((l) => [l, `${SITE}/${l}${route.path}`])
      )
      entries.push({
        url,
        lastModified,
        changeFrequency: route.changeFrequency,
        priority: route.priority,
        alternates: { languages: alternates },
      })
    }
  }

  return entries
}
