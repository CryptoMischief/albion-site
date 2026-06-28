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
