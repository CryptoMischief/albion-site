// Albion product library.
// To add a product: append one object below. NO supplier name/contact/location —
// the source is our edge. `category` MUST match a "What we source" category key
// (sports | robotics | pet | household | furniture | electronics).

export type Locale = 'en' | 'zh'

export type Product = {
  slug: string
  category: keyof typeof categoryLabels
  subcategory?: keyof typeof subcategoryLabels
  name: Record<Locale, string>
  blurb: Record<Locale, string>
  specs: { label: Record<Locale, string>; value: string }[]
  certs: string[]
  images: string[] // first = cover; rest = carousel
  video?: string
  moq?: string
}

export const categoryLabels = {
  sports: { en: 'Sports & Outdoor', zh: '运动与户外' },
  robotics: { en: 'Robotics & automation', zh: '机器人与自动化' },
  pet: { en: 'Pet', zh: '宠物' },
  household: { en: 'Household & daily goods', zh: '家居日用' },
  furniture: { en: 'Furniture parts & fittings', zh: '家具配件' },
  electronics: { en: 'Consumer electronics', zh: '消费电子' },
} as const

// Optional second level within a category. Add a key here, then set
// `subcategory` on products. Filter pills appear automatically once a
// category has 2+ subcategories in use.
export const subcategoryLabels = {
  pickleball: { en: 'Pickleball', zh: '匹克球' },
  coolers: { en: 'Coolers', zh: '冷藏箱' },
} as const

export const subcategoryOrder = Object.keys(
  subcategoryLabels
) as (keyof typeof subcategoryLabels)[]

export const categoryOrder = Object.keys(
  categoryLabels
) as (keyof typeof categoryLabels)[]

export const products: Product[] = [
  {
    slug: 'carbon-pickleball-set',
    category: 'sports',
    subcategory: 'pickleball',
    name: {
      en: 'Carbon-Fibre Pickleball Set (USAPA)',
      zh: '碳纤维匹克球套装（USAPA 认证）',
    },
    blurb: {
      en: 'Our best-selling pickleball line — a USAPA-certified T300 carbon face over a PP honeycomb core for a balanced mix of control and power. Supplied as a ready-to-retail set: two paddles, balls, overgrips and a carry bag. Fully OEM / ODM — your graphics, colours and grip.',
      zh: '我们最畅销的匹克球系列——USAPA 认证 T300 碳纤维击球面搭配 PP 蜂窝芯，控球与力量兼备。以可直接零售的套装形式供应：两支球拍、球、握把胶带与手提包。全程 OEM / ODM——图案、配色与握把均可定制。',
    },
    specs: [
      { label: { en: 'Surface', zh: '击球面' }, value: 'T300 carbon fibre' },
      { label: { en: 'Core', zh: '拍芯' }, value: 'PP honeycomb · 14mm' },
      { label: { en: 'Certification', zh: '认证' }, value: 'USAPA approved' },
      { label: { en: 'Weight', zh: '重量' }, value: '220g ±5' },
      {
        label: { en: 'Set includes', zh: '套装含' },
        value: '2 paddles · balls · bag · overgrips',
      },
      {
        label: { en: 'Customisation', zh: '定制' },
        value: 'OEM / ODM · graphics, colours, grip',
      },
    ],
    certs: ['USAPA', 'OEM / ODM'],
    images: [
      '/products/pickleball/carbon-1.jpg',
      '/products/pickleball/carbon-2.jpg',
    ],
  },
  {
    slug: 'gearfoam-max-3d18k',
    category: 'sports',
    subcategory: 'pickleball',
    name: {
      en: 'GearFoam Max — 3D-18K Carbon Paddle',
      zh: 'GearFoam Max — 3D 18K 碳纤维球拍',
    },
    blurb: {
      en: 'Our flagship tournament paddle. The GearFoam Max pairs a thermoformed 3D-18K carbon face — the premium end of our surface range — with a high-density GearBridge foam core for elite power, spin and control. USAPA-certified and fully customisable OEM / ODM.',
      zh: '我们的旗舰比赛球拍。GearFoam Max 采用热压成型 3D 18K 碳纤维击球面——面料系列中的高端之选——搭配高密度 GearBridge 泡棉芯，带来顶级力量、旋转与控球。USAPA 认证，全程可 OEM / ODM 定制。',
    },
    specs: [
      { label: { en: 'Surface', zh: '击球面' }, value: '3D-18K carbon fibre' },
      {
        label: { en: 'Construction', zh: '工艺' },
        value: 'Thermoformed · GearBridge foam core',
      },
      { label: { en: 'Thickness', zh: '厚度' }, value: '14mm' },
      { label: { en: 'Certification', zh: '认证' }, value: 'USAPA approved' },
      { label: { en: 'Weight', zh: '重量' }, value: '225g ±5' },
      {
        label: { en: 'Customisation', zh: '定制' },
        value: 'OEM / ODM · graphics, colours, grip',
      },
    ],
    certs: ['USAPA', 'OEM / ODM'],
    images: [
      '/products/pickleball/gearfoam-1.jpg',
      '/products/pickleball/gearfoam-2.jpg',
    ],
    video: '/products/pickleball/gearfoam-video.mp4',
  },
  {
    slug: 'bluetooth-speaker-cooler',
    category: 'sports',
    subcategory: 'coolers',
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
  },
  {
    slug: 'cooler-air-con',
    category: 'sports',
    subcategory: 'coolers',
    name: { en: '2-in-1 Cool Box & Portable Air-Con', zh: '2 合 1 保温箱 & 便携空调' },
    blurb: {
      en: 'A dual-function outdoor unit: a 50 L insulated cool box that keeps drinks and food cold, PLUS a built-in portable air conditioner that blows cold air — and a cooling mist — at you. The electric side cools people, not the contents. Wheels and a retractable pull handle. For camping, festivals, tailgating and the beach.',
      zh: '2 合 1 户外设备：50 L 保温箱保持饮料与食物冰凉，另配内置便携空调，向人吹送冷风与冷雾——电制冷用于给人降温，而非冷藏箱内部。配拉杆与滚轮。适用于露营、音乐节、看台与沙滩。',
    },
    specs: [
      {
        label: { en: 'Type', zh: '类型' },
        value: '2-in-1 — cool box + portable air-con',
      },
      {
        label: { en: 'Air-con', zh: '空调' },
        value: 'Cools people (not the contents) · 3 modes: cold wind · air · mist',
      },
      { label: { en: 'Cool box', zh: '保温箱' }, value: '50 L insulated storage' },
      {
        label: { en: 'Mobility', zh: '移动' },
        value: '6" wheels + pull handle · rechargeable battery box',
      },
      {
        label: { en: 'Customisation', zh: '定制' },
        value: 'OEM / ODM · your branding',
      },
    ],
    certs: ['CE', 'FCC', 'KC', 'BSCI', 'SGS'],
    images: [
      '/products/iceenergy/cooler-ac-1.jpg',
      '/products/iceenergy/cooler-ac-2.jpg',
      '/products/iceenergy/cooler-ac-3.jpg',
      '/products/iceenergy/cooler-ac-4.jpg',
    ],
    video: '/products/iceenergy/ac-cooler-video.mp4',
  },
]
