// Albion product library.
// To add a product: append one object below. No supplier name/contact/location —
// the source is our edge. Group is driven by `category`.

export type Locale = 'en' | 'zh'

export type Product = {
  slug: string
  category: keyof typeof categoryLabels
  name: Record<Locale, string>
  blurb: Record<Locale, string>
  specs: { label: Record<Locale, string>; value: string }[]
  certs: string[]
  image: string
  moq?: string
}

export const categoryLabels = {
  outdoor: { en: 'Outdoor', zh: '户外' },
  sports: { en: 'Sports & Outdoor', zh: '运动与户外' },
  pet: { en: 'Pet', zh: '宠物' },
  household: { en: 'Household', zh: '家居日用' },
  furniture: { en: 'Furniture Parts', zh: '家具配件' },
  electronics: { en: 'Consumer Electronics', zh: '消费电子' },
} as const

export const products: Product[] = [
  {
    slug: 'bluetooth-speaker-cooler',
    category: 'outdoor',
    name: { en: 'Bluetooth Speaker Cooler', zh: '蓝牙音箱冷藏箱' },
    blurb: {
      en: 'Insulated hard cool box with built-in wireless speakers — for beach, camping and outdoor-lifestyle retail.',
      zh: '内置无线音箱的硬质保温冷藏箱——沙滩、露营及户外生活方式零售。',
    },
    specs: [
      { label: { en: 'Type', zh: '类型' }, value: 'Hard cooler + speakers' },
      { label: { en: 'Power', zh: '供电' }, value: 'Rechargeable battery' },
      {
        label: { en: 'Customisation', zh: '定制' },
        value: 'OEM / ODM · your branding & colours',
      },
    ],
    certs: ['CE', 'FCC', 'KC', 'BSCI', 'SGS'],
    image: '/products/iceenergy/bluetooth-cooler.jpg',
  },
]

// category display order
export const categoryOrder = Object.keys(categoryLabels) as (keyof typeof categoryLabels)[]
