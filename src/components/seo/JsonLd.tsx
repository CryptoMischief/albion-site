import { categoryLabels, type Locale, type Product } from '@/data/products'

const SITE_URL = 'https://albionexports.com'

const ORG_BASE = {
  '@id': `${SITE_URL}#organization`,
  name: 'Albion Exports',
  alternateName: 'Hefei Anbilong Import & Export Trading Co., Ltd.',
  url: SITE_URL,
  logo: `${SITE_URL}/brand/logo-colour.png`,
  email: 'hello@albionexports.com',
  description:
    'British-owned, Chinese-licensed sourcing company. We source, verify and ship from China for buyers worldwide.',
  founder: {
    '@type': 'Person',
    name: 'Richard Cormack',
    alternateName: 'Luo Ruiqi (罗瑞奇)',
  },
  foundingDate: '2026-05-26',
  taxID: '91340100MAKET1LP5K',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Hefei',
    addressRegion: 'Anhui',
    addressCountry: 'CN',
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: 'hello@albionexports.com',
      availableLanguage: ['English', 'Chinese'],
      areaServed: ['GB', 'DE', 'EU', 'Worldwide'],
    },
  ],
}

const organization = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  ...ORG_BASE,
}

const localBusiness = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  ...ORG_BASE,
  '@id': `${SITE_URL}#localbusiness`,
  priceRange: '$$',
  areaServed: {
    '@type': 'Place',
    name: 'Worldwide',
  },
}

const website = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}#website`,
  url: SITE_URL,
  name: 'Albion Exports',
  publisher: { '@id': `${SITE_URL}#organization` },
  inLanguage: ['en', 'zh'],
}

export function OrganizationJsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  )
}

export function ProductJsonLd({
  product,
  locale,
  url,
}: {
  product: Product
  locale: Locale
  url: string
}) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name[locale],
    description: product.blurb[locale],
    image: product.images.map((i) => `${SITE_URL}${i}`),
    category: categoryLabels[product.category][locale],
    sku: product.slug,
    brand: { '@type': 'Brand', name: 'Albion Exports' },
    url,
    additionalProperty: product.specs.map((s) => ({
      '@type': 'PropertyValue',
      name: s.label[locale],
      value: s.value,
    })),
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; url: string }[]
}) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

export function FaqJsonLd({ items }: { items: { q: string; a: string }[] }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((it) => ({
      '@type': 'Question',
      name: it.q,
      acceptedAnswer: { '@type': 'Answer', text: it.a },
    })),
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

export function ArticleJsonLd({
  headline,
  description,
  url,
  datePublished,
  image,
}: {
  headline: string
  description: string
  url: string
  datePublished: string
  image?: string
}) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline,
    description,
    datePublished,
    dateModified: datePublished,
    url,
    mainEntityOfPage: url,
    image: image ? `${SITE_URL}${image}` : undefined,
    author: { '@type': 'Organization', name: 'Albion Exports', url: SITE_URL },
    publisher: { '@id': `${SITE_URL}#organization` },
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
