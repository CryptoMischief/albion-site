import type { MetadataRoute } from 'next'
import { routing } from '@/i18n/routing'
import { products } from '@/data/products'
import { posts } from '@/data/insights'

const SITE = 'https://albionexports.com'

const routes = [
  { path: '', priority: 1.0, changeFrequency: 'weekly' as const },
  { path: '/about', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/services', priority: 0.9, changeFrequency: 'monthly' as const },
  { path: '/products', priority: 0.9, changeFrequency: 'weekly' as const },
  { path: '/oem', priority: 0.9, changeFrequency: 'monthly' as const },
  { path: '/insights', priority: 0.8, changeFrequency: 'weekly' as const },
  { path: '/contact', priority: 0.7, changeFrequency: 'monthly' as const },
  // Per-product pages
  ...products.map((p) => ({
    path: `/products/${p.slug}`,
    priority: 0.8,
    changeFrequency: 'monthly' as const,
  })),
  // Insight articles
  ...posts.map((p) => ({
    path: `/insights/${p.slug}`,
    priority: 0.7,
    changeFrequency: 'monthly' as const,
  })),
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date('2026-07-10')
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
