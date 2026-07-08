// Albion product library.
// To add a product: append one object below. NO supplier name/contact/location —
// the source is our edge. `category` MUST match a "What we source" category key
// (pet | sports | household | furniture | electronics | adjacent).

export type Locale = 'en' | 'zh'

export type Product = {
  slug: string
  category: keyof typeof categoryLabels
  name: Record<Locale, string>
  blurb: Record<Locale, string>
  specs: { label: Record<Locale, string>; value: string }[]
  certs: string[]
  images: string[] // first = cover; rest = carousel
  video?: string
  moq?: string
}

export const categoryLabels = {
  pet: { en: 'Pet', zh: '宠物' },
  sports: { en: 'Sports & Outdoor', zh: '运动与户外' },
  household: { en: 'Household & daily goods', zh: '家居日用' },
  furniture: { en: 'Furniture parts & fittings', zh: '家具配件' },
  electronics: { en: 'Consumer electronics', zh: '消费电子' },
  adjacent: { en: 'And more', zh: '更多品类' },
} as const

export const categoryOrder = Object.keys(
  categoryLabels
) as (keyof typeof categoryLabels)[]

export const products: Product[] = [
  {
    slug: 'bluetooth-speaker-cooler',
    category: 'sports',
    name: { en: 'Bluetooth Speaker Cooler', zh: '蓝牙音箱冷藏箱' },
    blurb: {
      en: 'Insulated hard cool box with built-in wireless speakers — for beach, camping and outdoor-lifestyle retail. One of 40+ cooler models we can supply: hard, rotomoulded, soft and car coolers from 3.8 L to 160 L.',
      zh: '内置无线音箱的硬质保温冷藏箱——沙滩、露营及户外生活方式零售。这只是我们可供应的 40+ 款冷藏箱之一：硬箱、滚塑箱、软箱与车载冷藏箱，容量 3.8 L 至 160 L。',
    },
    specs: [
      { label: { en: 'Type', zh: '类型' }, value: 'Hard cooler + stereo speakers' },
      { label: { en: 'Power', zh: '供电' }, value: 'Rechargeable battery' },
      {
        label: { en: 'Full range', zh: '完整系列' },
        value: '40+ cooler models · 3.8–160 L',
      },
      {
        label: { en: 'Customisation', zh: '定制' },
        value: 'OEM / ODM · your branding & colours',
      },
    ],
    certs: ['CE', 'FCC', 'KC', 'BSCI', 'SGS'],
    images: [
      '/products/iceenergy/cooler-1.jpg',
      '/products/iceenergy/cooler-2.jpg',
      '/products/iceenergy/cooler-3.jpg',
      '/products/iceenergy/cooler-4.jpg',
    ],
    video: '/products/iceenergy/cooler-video.mp4',
  },
  {
    slug: 'ac-powered-cooler',
    category: 'sports',
    name: { en: 'AC-Powered Wheeled Cooler', zh: '插电式拉杆冷藏箱' },
    blurb: {
      en: 'A 2-in-1 rotomoulded cool box with a built-in electric cooling unit — keeps contents cold for up to 72 hours, with wheels and a retractable pull handle. For premium outdoor, camping and overlanding retail.',
      zh: '2 合 1 滚塑保温箱，内置电制冷模块——最长可保冷 72 小时，配拉杆与滚轮。适用于高端户外、露营与自驾零售。',
    },
    specs: [
      {
        label: { en: 'Type', zh: '类型' },
        value: 'Rotomoulded cooler + electric cooling (2-in-1)',
      },
      { label: { en: 'Cooling', zh: '制冷' }, value: 'Up to 72 hours cold' },
      {
        label: { en: 'Features', zh: '功能' },
        value: '3 airflow modes · wheels + pull handle · USB charging box',
      },
      {
        label: { en: 'Customisation', zh: '定制' },
        value: 'OEM / ODM · your branding',
      },
    ],
    certs: ['CE', 'FCC', 'KC', 'BSCI', 'SGS'],
    images: ['/products/iceenergy/cooler-ac-1.jpg'],
  },
]
