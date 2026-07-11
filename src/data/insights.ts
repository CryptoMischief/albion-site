// Albion Insights — the on-site blog. Content lives HERE (on albionexports.com)
// so the SEO value accrues to the main domain. To add an article, append a Post.
// Substack/newsletter can syndicate FROM this, with canonical pointing back here.

export type Locale = 'en' | 'zh'

export type Block =
  | { type: 'p'; text: Record<Locale, string> }
  | { type: 'h2'; text: Record<Locale, string> }
  | { type: 'ul'; items: Record<Locale, string[]> }
  | { type: 'img'; src: string; alt: Record<Locale, string> }

export type Post = {
  slug: string
  date: string // ISO — published date
  image?: string
  title: Record<Locale, string>
  excerpt: Record<Locale, string>
  body: Block[]
}

export const posts: Post[] = [
  {
    slug: 'how-to-source-products-from-china',
    date: '2026-07-11',
    image: '/insights/img/china-factory-floor.jpg',
    title: {
      en: 'How to source products from China without getting burned: a UK & EU buyer’s guide',
      zh: '如何从中国采购产品而不踩坑：英国与欧盟买家指南',
    },
    excerpt: {
      en: 'China still offers unbeatable price and scale — but only if you can trust the factory. Here’s how UK and EU buyers vet suppliers, protect quality and start small.',
      zh: '中国依然拥有无可比拟的价格与规模——前提是您能信任工厂。以下是英国与欧盟买家如何核验供应商、把控质量并小批量起步。',
    },
    body: [
      {
        type: 'p',
        text: {
          en: 'For UK and EU buyers, China remains the fastest route to competitive pricing and manufacturing scale. The catch is trust: an unverified factory, a miscommunicated spec, or a shipment that doesn’t match the sample can wipe out the saving. Here’s how to source from China the right way.',
          zh: '对英国与欧盟买家而言，中国依然是获得有竞争力价格与制造规模的最快途径。难点在于信任：未经核验的工厂、沟通错位的规格，或与样品不符的货物，都可能吞掉您省下的成本。以下是正确的中国采购之道。',
        },
      },
      {
        type: 'h2',
        text: { en: 'Why buyers still choose China', zh: '买家为何依然选择中国' },
      },
      {
        type: 'p',
        text: {
          en: 'Price and capacity are the obvious draws — but the real advantage is depth. For almost any consumer product there are dozens of factories, each with different quality tiers, minimum orders and customisation options. The skill is picking the right one, not just the cheapest.',
          zh: '价格与产能是显而易见的吸引力——但真正的优势在于深度。几乎任何消费品都有数十家工厂，各自拥有不同的质量等级、起订量与定制选项。关键在于选对，而非仅仅选最便宜的。',
        },
      },
      {
        type: 'h2',
        text: { en: 'Where deals go wrong', zh: '交易在哪里出问题' },
      },
      {
        type: 'ul',
        items: {
          en: [
            'Trading companies posing as factories — adding a margin and a layer of distance.',
            'Samples that don’t match the production run.',
            'Specifications lost in translation.',
            'No one on the ground to catch problems before they ship.',
          ],
          zh: [
            '贸易公司冒充工厂——增加一层加价与距离。',
            '样品与量产货不一致。',
            '规格在翻译中走样。',
            '发货前没有人在一线发现问题。',
          ],
        },
      },
      {
        type: 'h2',
        text: { en: 'How to vet a factory properly', zh: '如何正确核验工厂' },
      },
      {
        type: 'p',
        text: {
          en: 'Never judge a supplier from a website or a catalogue photo. Before you commit, confirm the business licence and export certifications, ask to see the actual production line, and — ideally — have someone inspect it in person. On-the-ground verification is the single biggest protection against a bad order.',
          zh: '切勿凭网站或产品图册照片判断供应商。在决定合作前，核实营业执照与出口认证，要求查看真实的生产线，并且——最好——安排人员实地查验。一线核验是抵御劣质订单的最大保障。',
        },
      },
      {
        type: 'img',
        src: '/insights/img/factory-quality-inspection.jpg',
        alt: {
          en: 'Inspecting a product on the factory floor before an order ships',
          zh: '发货前在工厂现场检验产品',
        },
      },
      {
        type: 'h2',
        text: { en: 'OEM or ODM — which do you need?', zh: 'OEM 还是 ODM——您需要哪种？' },
      },
      {
        type: 'p',
        text: {
          en: 'OEM (Original Equipment Manufacturer) means the factory builds your design. ODM (Original Design Manufacturer) means you brand a product the factory already makes. ODM is faster and cheaper to launch; OEM gives you a product that’s truly your own. Most first-time buyers start with ODM and move to OEM as they grow.',
          zh: 'OEM（原始设备制造）指工厂按您的设计生产。ODM（原始设计制造）指您为工厂现有产品贴牌。ODM 上市更快、成本更低；OEM 则让产品真正属于您自己。多数初次买家从 ODM 起步，随着成长转向 OEM。',
        },
      },
      {
        type: 'h2',
        text: { en: 'Start small, then scale', zh: '小批量起步，再扩大规模' },
      },
      {
        type: 'p',
        text: {
          en: 'You don’t need a full container on day one. Many factories will run opening orders from as little as 20–100 units, and a proper sample round lets you check quality before you spend. Test the market, prove the product, then scale the volume.',
          zh: '您无需一开始就订一整个货柜。许多工厂首批订单仅 20–100 件起，而完整的打样环节让您在投入前先检验质量。先试市场、验证产品，再扩大数量。',
        },
      },
      {
        type: 'img',
        src: '/insights/img/china-production-line.jpg',
        alt: {
          en: 'A production line in a Chinese factory ramping from samples to volume',
          zh: '中国工厂的生产线，从打样到量产',
        },
      },
      {
        type: 'h2',
        text: { en: 'Where Albion fits', zh: '安必隆的角色' },
      },
      {
        type: 'p',
        text: {
          en: 'Albion Exports is a British-founded, China-based sourcing partner. We’re on the ground where your products are made — we find and verify the factory, negotiate pricing, manage samples and quality control, and ship to your door. You get China’s price and scale with a UK partner accountable for every step.',
          zh: '安必隆进出口是一家英国创立、扎根中国的采购合作伙伴。我们就在您产品的生产一线——寻找并核验工厂、谈判价格、管理打样与质量控制，并直送到您门口。您获得中国的价格与规模，同时拥有一位对每个环节负责的英方伙伴。',
        },
      },
    ],
  },
]
