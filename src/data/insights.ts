// Albion Insights — the on-site blog. Content lives HERE (on albionexports.com)
// so the SEO value accrues to the main domain. Bodies are Markdown (GFM: tables,
// links, lists). To add an article, append a Post. Follow the house style guide.
// Substack can syndicate FROM this, with its canonical pointing back here.

export type Locale = 'en' | 'zh'
export type Faq = { q: string; a: string }
export type Link = { label: string; url: string }

export type Post = {
  slug: string
  date: string // ISO — published date
  image?: string
  imageAlt: Record<Locale, string>
  author: {
    name: string
    role: Record<Locale, string>
    bio: Record<Locale, string>
  }
  title: Record<Locale, string>
  standfirst: Record<Locale, string>
  excerpt: Record<Locale, string> // meta description + card summary
  body: Record<Locale, string> // Markdown
  faq: Record<Locale, Faq[]>
  furtherReading: Record<Locale, Link[]>
}

const EN_BODY = `Most UK and EU buyers don't get burned in China because they picked the wrong product. They get burned because they trusted the wrong company: a "factory" that turned out to be a middleman, a sample that looked nothing like the production run, or a spec that quietly changed somewhere between the quote and the container.

None of that is a reason to avoid China. It's a reason to source it properly. This guide walks through how to tell a real factory from a broker, how to check a supplier is who they claim to be, and how to place a first order small enough that a mistake costs you a lesson instead of a business.

## Why still China, and why "cheapest" is the trap

Price and capacity are the obvious pull. The part people underestimate is choice. For a single fairly ordinary product, say a stainless steel drinks bottle, you might find dozens of factories within an hour's drive of each other, each sitting at a different quality tier, with different minimum orders, different tooling, different appetite for customisation.

That depth is the advantage, and it's also the trap. The cheapest quote almost always comes from the factory cutting a corner you can't see in a photo: a thinner gauge of steel, a lining that fails a food-safety test, a lid that leaks after fifty uses. What you're really doing is matching a factory to the standard your customers expect. Cheap is easy. Right takes work.

![Inside a modern Chinese factory floor](/insights/img/china-factory-floor.jpg)

## Factory or middleman? How to tell who you're really talking to

A huge share of "factories" on the big B2B platforms are trading companies. There's nothing illegal about that, and a good trading company can be genuinely useful. But if you're paying factory-direct prices, you want to know whether you're talking to the people who own the machines, or to a broker adding a margin and a layer of distance between you and whoever can actually fix a problem.

The single most useful document here is the company's business licence (营业执照). Every legally registered mainland company has one, and it's not decorative. Ask for a colour scan and look at:

- **The Unified Social Credit Code (统一社会信用代码, or USCC)** — an 18-character ID printed at the top of every modern licence. It's the company's fingerprint across government systems.
- **Company type (类型)** — for example a limited liability company (有限责任公司).
- **The legal representative (法定代表人)** — the person legally able to bind the company.
- **Business scope (经营范围)** — the tell. A real manufacturer's scope mentions production or manufacturing (生产 / 制造) of specific goods. A pure trading company's scope leans on wholesale and trade (批发 / 贸易). If a "factory" licence says nothing about making anything, that's your answer.

Then verify it. China's official company registry, the National Enterprise Credit Information Publicity System (known as GSXT), is public, free, and run by the market regulator. You can look up any registered mainland company at [gsxt.gov.cn](https://www.gsxt.gov.cn) by Chinese name or USCC, and check that the details on the licence match the live record: same name, same code, same legal rep, and a live status (存续 / 在营) rather than cancelled or revoked (注销 / 吊销).

One honest catch: the registry is entirely in Chinese, usually wants a real-name login for the full record, and often blocks overseas connections. It's the authoritative source, and it's built for people inside China with a Chinese phone number. Which is exactly the kind of thing a partner on the ground is for.

## How to vet a factory before you commit

Verifying the paperwork tells you a company is real. It doesn't tell you it can make your product well. For that, work through something like this before you send a penny:

1. **Confirm the licence and check it on GSXT.** Real company, active status, scope that matches the work.
2. **Match the scope to the product.** A cookware factory quoting you on electronics is a broker wearing a hat.
3. **Ask to see the actual line.** Photos and a short video walk-through of the specific process, not a glossy brochure or a stock catalogue shot. Vague answers here are the loudest red flag there is.
4. **Get a sample, then check it against the production run.** A good sample proves the factory can hit the standard. It doesn't prove every unit will. Agreeing an inspection on the actual production batch is what closes that gap.
5. **Have someone stand on the floor.** In person. This is the biggest protection against a bad order, and it's the step most buyers skip because they're 8,000 km away. We've turned up to "factories" that were a rented showroom and a WeChat account, with the real production happening two provinces over, if it existed at all.

For anything beyond a small first order, an on-site check or a third-party inspection is cheap insurance. A single inspection typically runs somewhere in the low hundreds of pounds. Set against a five-figure order that ships wrong, it pays for itself many times over.

![A quality inspection on the factory floor before an order ships](/insights/img/factory-quality-inspection.jpg)

## OEM or ODM: which one do you actually need?

These two get used interchangeably, and they shouldn't be. The difference decides how fast you launch, how much you spend up front, and how much of the product is truly yours.

| | **OEM** (Original Equipment Manufacturer) | **ODM** (Original Design Manufacturer) |
|---|---|---|
| **What it means** | The factory builds *your* design | You brand a product the factory *already* makes |
| **Your input** | Full spec, drawings, sometimes tooling | Logo, packaging, minor tweaks |
| **Speed to launch** | Slower; design and tooling take time | Fast; it already exists |
| **Up-front cost** | Higher (tooling, samples, MOQs) | Lower |
| **How unique is it** | Genuinely your own product | Shared with whoever else buys it |
| **Best when** | You have a real design and want to own it | You want to test a market quickly |

Most first-time buyers start with ODM to get moving, prove the demand is real, then move to OEM once they know the product is worth building from scratch. There's no prize for doing it the hard way on day one. If you want a hand with either, [that's exactly what we do](/oem).

## Start small, then scale

You do not need a full container to begin. Plenty of factories will run an opening order well below their headline minimum if they think you'll come back: sometimes a few hundred units, occasionally less, depending on the product and the material. Custom tooling pushes the floor up; simpler goods keep it low.

Samples usually take one to three weeks, longer if there's new tooling involved. Use that round properly. It's your cheapest chance to catch a problem before it's multiplied by ten thousand. Test the market with a small run, confirm the product does what you promised your customers, then scale the volume once the risk is out of the way. Ambition is great. Ambition on your first order is how you end up with a garage full of leaking bottles.

![A production line in a Chinese factory scaling from samples to volume](/insights/img/china-production-line.jpg)

## Getting it home: a quick word on terms

Two things worth knowing before the goods move.

First, **Incoterms**: the shorthand that decides who pays for what and, just as importantly, who carries the risk at each leg of the journey. CFR (Cost and Freight) and CIF (Cost, Insurance and Freight) sound almost identical, but they aren't the same, and CFR applies to sea freight only. Agree the term in writing before anything ships, so there's no argument about who's liable for a container that's already at sea.

Second, **the UK import process itself**: duties, VAT, EORI numbers, commodity codes, and whether your specific product needs a licence or certificate. That's HMRC's territory and it changes. The UK government's [step-by-step import guide](https://www.gov.uk/import-goods-into-uk) is the place to start, and for the customs specifics most businesses use a customs agent rather than filing themselves. We won't pretend to be your customs broker or your accountant. For the legal and tax detail, that's exactly who you should lean on.

## Where Albion fits

Albion Exports is a British-founded, China-based [sourcing partner](/services). The short version: we're standing where your products are made. We find and verify the factory, read the licence and check it against the registry, negotiate the price, manage samples and quality control, and see the order through production and shipping.

You get China's price and scale, and a UK partner accountable for every step. One who can read the Chinese-only registry, walk the Anhui factory floor, and catch the problem while it's still fixable, instead of when it's on a boat.`

const ZH_BODY = `多数英国与欧盟买家在中国吃亏，并不是因为选错了产品，而是因为信错了公司：一家"工厂"其实是中间商、样品与量产货判若两物，或者规格在报价与货柜之间被悄悄改动。

这些都不是躲开中国的理由，而是把采购做扎实的理由。本指南将带您分辨真工厂与掮客、核验供应商是否名副其实，并把首单下得足够小——让失误只带来一次教训，而不是拖垮生意。

## 为什么依然选中国，以及为何"最便宜"是陷阱

价格与产能是显而易见的吸引力。人们低估的是"选择"。就一件相当普通的产品而言，比如一只不锈钢保温水瓶，方圆一小时车程内可能就有数十家工厂，各自处于不同的质量档次，拥有不同的起订量、不同的模具、不同的定制意愿。

这种深度是优势，也是陷阱。最便宜的报价，几乎总来自那家削减了您在照片里看不出的成本的工厂：更薄的钢材、通不过食品安全测试的内胆、用过五十次就漏水的瓶盖。您真正要做的，是把工厂匹配到您客户期望的标准。便宜很容易，做对才是功夫。

![现代化中国工厂车间内部](/insights/img/china-factory-floor.jpg)

## 工厂还是中间商？如何辨清与您对话的到底是谁

大型 B2B 平台上很大一部分"工厂"其实是贸易公司。这本身并不违法，好的贸易公司也确实有用。但如果您付的是工厂直供价，就该弄清自己面对的是拥有机器的人，还是一个在您与真正能解决问题的人之间加了一层差价与距离的掮客。

这里最有用的单一文件，是公司的营业执照。每一家合法注册的内地公司都有一份，它绝非摆设。请对方提供彩色扫描件，并查看：

- **统一社会信用代码（USCC）** —— 印在每份现代执照顶部的 18 位识别码，是这家公司在政府各系统中的"指纹"。
- **类型** —— 例如有限责任公司。
- **法定代表人** —— 有权代表并约束公司的人。
- **经营范围** —— 这是关键。真正制造商的经营范围会写明具体货物的生产 / 制造；纯贸易公司则偏重批发 / 贸易。如果一家"工厂"的执照只字未提"造东西"，答案就摆在那里。

然后去核验。中国官方的企业登记系统——国家企业信用信息公示系统（简称 GSXT）——公开、免费，由市场监管部门运营。您可以在 [gsxt.gov.cn](https://www.gsxt.gov.cn) 用中文名称或 USCC 查询任意一家内地注册公司，核对执照上的信息与在线记录是否一致：同名、同码、同一法定代表人，且状态为存续 / 在营，而非注销 / 吊销。

有一点得说实话：该系统全为中文，查看完整记录通常需要实名登录，而且常常屏蔽境外访问。它是权威来源，但也是为身在中国、持中国手机号的人设计的。而这，正是一线伙伴的用武之地。

## 下单前如何考察一家工厂

核验文件能告诉您一家公司是真的，却不能告诉您它能把您的产品做好。为此，在付出一分钱之前，不妨走一遍这样的流程：

1. **确认执照并在 GSXT 上核查。** 真实公司、在营状态、经营范围与业务相符。
2. **把经营范围对上产品。** 一家炊具厂给您报电子产品的价，那是掮客在换帽子。
3. **要求看真实的生产线。** 就该具体工序的照片与简短视频走查，而不是精美画册或图库摆拍。这一步含糊其辞，是最响亮的危险信号。
4. **取样，再拿样品对照量产货。** 好样品证明工厂能达到标准，却不证明每一件都会达到。就实际量产批次约定验货，才能填上这道缝。
5. **让人站到车间里。** 亲自去。这是抵御劣质订单的最大保障，也是多数买家因远隔八千公里而跳过的一步。我们曾上门，结果"工厂"只是一间租来的展厅加一个微信号，真正的生产在两省之外——如果它真的存在的话。

对于超出小额首单的任何订单，一次现场查验或第三方验货都是廉价的保险。单次验货通常花费几百英镑上下。相较于一笔发错货的五位数订单，它的回报是成本的许多倍。

![发货前在工厂车间进行的质量检验](/insights/img/factory-quality-inspection.jpg)

## OEM 还是 ODM：您到底需要哪一种？

这两个词常被混用，其实不该。二者的区别，决定了您上市有多快、前期投入多少，以及产品有多少真正属于您。

| | **OEM**（原始设备制造） | **ODM**（原始设计制造） |
|---|---|---|
| **含义** | 工厂按*您的*设计生产 | 您为工厂*现有*产品贴牌 |
| **您的投入** | 完整规格、图纸，有时含模具 | 标识、包装、小幅调整 |
| **上市速度** | 较慢；设计与开模需要时间 | 快；产品已存在 |
| **前期成本** | 较高（模具、样品、起订量） | 较低 |
| **独特性** | 真正属于您自己的产品 | 与其他买家共享 |
| **适合场景** | 您已有真实设计并想拥有它 | 您想快速试水市场 |

多数初次买家先用 ODM 起步、跑通需求，确认产品值得从零打造后再转向 OEM。第一天就选最难的路，并没有奖励。若您在这两者上需要帮手，[这正是我们所做的事](/oem)。

## 小批量起步，再扩大规模

您无需一开始就订一整柜。只要工厂认为您会回头，许多都愿意接远低于其标称起订量的首单：有时几百件，偶尔更少，视产品与材料而定。定制开模会抬高门槛，简单货品则维持较低。

样品通常需要一到三周，涉及新开模会更久。把这一轮用好——这是您在问题被放大一万倍之前，最便宜的一次抓错机会。用小批量试市场，确认产品能兑现您对客户的承诺，待风险出清后再放量。有雄心是好事，但把雄心押在首单上，结果往往是车库里堆满漏水的瓶子。

![中国工厂从打样到量产的生产线](/insights/img/china-production-line.jpg)

## 把货运回家：关于贸易术语的一点提醒

货物启运前，有两件事值得了解。

其一，**国际贸易术语（Incoterms）**：它以简写界定谁承担哪些费用，同样重要的是，谁在每一段旅程中承担风险。CFR（成本加运费）与 CIF（成本、保险加运费）听来几乎一样，其实并不相同，且 CFR 仅适用于海运。启运前把术语落在书面上，就不会为一个已在海上的货柜由谁负责而起争执。

其二，**英国进口流程本身**：关税、增值税、EORI 号、商品编码，以及您的具体产品是否需要许可或证书。这属于英国税务海关总署（HMRC）的范畴，且时有变动。英国政府的[分步进口指南](https://www.gov.uk/import-goods-into-uk)是入门之处；至于清关细节，多数企业会委托报关行，而非自行申报。我们不会冒充您的报关行或会计师——法律与税务的细节，正该交给他们。

## 安必隆的角色

安必隆进出口是一家英国创立、扎根中国的[采购合作伙伴](/services)。一句话概括：我们就站在您产品被制造的地方。我们寻找并核验工厂、研读执照并对照登记系统核查、谈判价格、管理打样与质量控制，并把订单一路盯到生产与发货。

您得到的是中国的价格与规模，以及一位对每个环节负责的英方伙伴——一位能读懂纯中文登记系统、走得进安徽工厂车间、在问题还可挽回时就将其发现（而不是等它已在船上）的伙伴。`

export const posts: Post[] = [
  {
    slug: 'how-to-source-products-from-china',
    date: '2026-07-11',
    image: '/insights/img/sourcing-china-port.jpg',
    imageAlt: {
      en: 'A container port at night — the scale of China’s export trade',
      zh: '夜色中的集装箱港口——中国出口贸易的规模',
    },
    author: {
      name: 'Richie',
      role: {
        en: 'Founder, Albion Exports · written from our office in Hefei',
        zh: '创始人，安必隆进出口 · 于合肥办公室撰写',
      },
      bio: {
        en: 'Richie is the British founder of Albion Exports. He lives in Hefei and spends most weeks on factory floors across Anhui, so this comes from the ground, not from a search engine.',
        zh: 'Richie 是安必隆进出口的英国创始人，常驻合肥，多数时间都在安徽各地的工厂车间。以下内容来自一线，而非搜索引擎。',
      },
    },
    title: {
      en: 'How to source products from China without getting burned: a UK & EU buyer’s guide',
      zh: '如何从中国采购产品而不踩坑：英国与欧盟买家指南',
    },
    standfirst: {
      en: 'The saving is real. So is the risk. Getting one without the other is the whole job, and it’s what we do on factory floors across Anhui most weeks.',
      zh: '省钱是真的，风险也是真的。既要省钱又要避开风险，才是真正的功夫，而这正是我们每周在安徽各地工厂车间所做的事。',
    },
    excerpt: {
      en: 'China’s price and scale are real, but only if you can trust the factory. A UK & EU buyer’s guide to spotting middlemen, verifying suppliers on China’s official registry, and starting small.',
      zh: '中国的价格与规模是真实的，但前提是您能信任工厂。这份英国与欧盟买家指南教您识别中间商、在中国官方登记系统核验供应商，并从小批量起步。',
    },
    body: { en: EN_BODY, zh: ZH_BODY },
    faq: {
      en: [
        {
          q: 'How do I know if I’m talking to a factory or a middleman?',
          a: 'Ask for a colour scan of the business licence and read the business scope field (经营范围). A real manufacturer’s scope names production or manufacturing of specific goods; a trading company’s leans on wholesale and trade. Then confirm the licence is genuine on China’s official registry at gsxt.gov.cn.',
        },
        {
          q: 'What’s the minimum order from a Chinese factory?',
          a: 'It varies enormously by product and material. Headline minimums are often negotiable for a first order, especially if the factory expects repeat business, sometimes down to a few hundred units. Custom tooling raises the floor; simple products keep it low.',
        },
        {
          q: 'Can I trust a supplier’s sample?',
          a: 'A sample proves the factory can hit the standard, not that every unit will. Treat it as the benchmark, then agree an inspection on the actual production run so the batch is checked against the sample you approved.',
        },
        {
          q: 'Do I need someone in China to source safely?',
          a: 'Not strictly, but it’s the single biggest risk-reducer. Paperwork can be verified remotely; a production line, the real one, is best seen in person. Someone on the ground catches problems while they’re still cheap to fix.',
        },
        {
          q: 'What’s the difference between OEM and ODM?',
          a: 'OEM means the factory builds your design. ODM means you brand a product the factory already makes. ODM is faster and cheaper to launch; OEM gives you a product that’s genuinely your own.',
        },
      ],
      zh: [
        {
          q: '我怎么知道对方是工厂还是中间商？',
          a: '请对方提供营业执照彩色扫描件，查看经营范围一栏。真正制造商的范围会写明具体货物的生产 / 制造；贸易公司则偏重批发 / 贸易。随后在中国官方登记系统 gsxt.gov.cn 上确认执照真伪。',
        },
        {
          q: '中国工厂的最小起订量是多少？',
          a: '因产品与材料而异，差别很大。标称起订量在首单时往往可谈，尤其当工厂期待回头生意，有时可低至几百件。定制开模会抬高门槛，简单产品则维持较低。',
        },
        {
          q: '供应商的样品可信吗？',
          a: '样品证明工厂能达到标准，却不证明每一件都会达到。把它当作基准，再就实际量产批次约定验货，让整批货与您确认过的样品对照检验。',
        },
        {
          q: '在中国采购一定要有人在当地吗？',
          a: '并非绝对必要，但这是最大的风险降低手段。文件可以远程核验；真正的生产线最好亲眼所见。有人在一线，问题还便宜时就能被抓住。',
        },
        {
          q: 'OEM 与 ODM 有什么区别？',
          a: 'OEM 指工厂按您的设计生产；ODM 指您为工厂现有产品贴牌。ODM 上市更快、成本更低；OEM 则让产品真正属于您自己。',
        },
      ],
    },
    furtherReading: {
      en: [
        {
          label: 'Import goods into the UK: step by step (GOV.UK)',
          url: 'https://www.gov.uk/import-goods-into-uk',
        },
        {
          label: 'National Enterprise Credit Information Publicity System (gsxt.gov.cn)',
          url: 'https://www.gsxt.gov.cn',
        },
      ],
      zh: [
        {
          label: '英国进口分步指南（GOV.UK，英文）',
          url: 'https://www.gov.uk/import-goods-into-uk',
        },
        {
          label: '国家企业信用信息公示系统（gsxt.gov.cn）',
          url: 'https://www.gsxt.gov.cn',
        },
      ],
    },
  },
]
