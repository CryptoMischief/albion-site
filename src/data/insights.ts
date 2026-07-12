// Albion Insights — the on-site blog. Content lives HERE (on albionexports.com)
// so the SEO value accrues to the main domain. Bodies are Markdown (GFM: tables,
// links, lists). To add an article, append a Post. Follow the house style guide
// (mirrored in the albion-writer skill). Substack can syndicate FROM this, with
// its canonical pointing back here.

export type Locale = 'en' | 'zh'
export type Faq = { q: string; a: string }
export type Link = { label: string; url: string }

export type Post = {
  slug: string
  date: string // ISO — published date
  image?: string // photo — used for the ticker thumbnail
  thumb?: string // branded square tile — used for the Insights index card
  banner?: string // branded 1200×630 — used for OG share image + in-article hero
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

![An example business licence (营业执照). The business scope field, 经营范围, is what separates a real maker from a trader](/insights/img/business-licence-example.jpg)

Then verify it. China's official company registry, the National Enterprise Credit Information Publicity System (known as GSXT), is public, free, and run by the market regulator. You can look up any registered mainland company at [gsxt.gov.cn](https://www.gsxt.gov.cn) by Chinese name or USCC, and check that the details on the licence match the live record: same name, same code, same legal rep, and a live status (存续 / 在营) rather than cancelled or revoked (注销 / 吊销).

One honest catch: it's entirely in Chinese, with no English version. You search by the exact registered Chinese name or the 18-digit USCC (an English spelling returns nothing), and the sign-in captcha is a slider puzzle or a 'tap these Chinese characters in order' test, in Chinese. Most of a company's record is visible without an account, but the deeper filings sit behind a Chinese ID and face scan. It's the authoritative source, built for people already inside China. Which is exactly what a partner on the ground is for.

There's a quicker, checklist version of all this too: our [5-minute supplier background check](/insights/supplier-background-check).

## How to vet a factory before you commit

Verifying the paperwork tells you a company is real. It doesn't tell you it can make your product well. For that, work through something like this before you send a penny:

1. **Confirm the licence and check it on GSXT.** Real company, active status, scope that matches the work.
2. **Match the scope to the product.** A supplier whose whole catalogue is cookware but who happily quotes your electronics order isn't making either. They're a trader, buying it in from the real factory and adding a cut.
3. **Ask to see the actual line.** Photos and a short video walk-through of the specific process, not a glossy brochure or a stock catalogue shot. Vague answers here are the loudest red flag there is.
4. **Get a sample, then check it against the production run.** A good sample proves the factory can hit the standard. It doesn't prove every unit will. Agreeing an inspection on the actual production batch is what closes that gap.
5. **Have someone stand on the floor.** In person. This is the biggest protection against a bad order, and it's the step most buyers skip because they're 8,000 km away. We've turned up to "factories" that were a rented showroom and a WeChat account, with the real production happening two provinces over, if it existed at all.

For anything beyond a small first order, an on-site check or a third-party inspection is cheap insurance. It costs a small fraction of the value it protects, and the first time it stops a flawed batch before the container leaves, it has paid for itself several times over.

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

Most first-time buyers start with ODM to get moving, prove the demand is real, then move to OEM once they know the product is worth building from scratch. There's no prize for doing it the hard way on day one. Both routes are exactly what our [OEM and ODM sourcing](/oem) is built for: we run the design, factory and quality side so you can get on with selling.

## Start small, then scale

You do not need a full container to begin. Plenty of factories will run an opening order well below their headline minimum if they think you'll come back: sometimes a few hundred units, occasionally less, depending on the product and the material. Custom tooling pushes the floor up; simpler goods keep it low.

Samples usually take one to three weeks, longer if there's new tooling involved. Use that round properly. It's your cheapest chance to catch a problem before it's multiplied by ten thousand. Test the market with a small run, confirm the product does what you promised your customers, then scale the volume once the risk is out of the way. Ambition is great. Ambition on your first order is how you end up with a garage full of leaking bottles.

![A production line in a Chinese factory scaling from samples to volume](/insights/img/china-production-line.jpg)

## Getting it home: a quick word on terms

The journey has two halves: out of China, and into the UK.

![A container port at night, the scale of China's export trade](/insights/img/sourcing-china-port.jpg)

Out of China is our side. Albion is a licensed import/export company on the ground here, so the Chinese export paperwork is part of what we handle, not something you inherit.

Into the UK is yours, and it's worth knowing the shape of it before the goods move.

First, **Incoterms**: the shorthand that decides who pays for what and, just as importantly, who carries the risk at each leg of the journey. CFR (Cost and Freight) and CIF (Cost, Insurance and Freight) sound almost identical, but they aren't the same, and CFR applies to sea freight only. Agree the term in writing before anything ships, so there's no argument about who's liable for a container that's already at sea.

Second, **the UK import process itself**: duties, VAT, EORI numbers, commodity codes, and whether your specific product needs a licence or certificate. That's HMRC's territory and it changes. The UK government's [step-by-step import guide](https://www.gov.uk/import-goods-into-uk) is the place to start, and for the customs specifics most businesses use a customs agent rather than filing themselves. We won't pretend to be your customs broker or your accountant. For the legal and tax detail, that's exactly who you should lean on.

## Where Albion fits

Albion Exports is a British-founded, China-based [sourcing partner](/services). The short version: we're standing where your products are made. We find and verify the factory, read the licence and check it against the registry, negotiate the price, manage samples and quality control, and see the order through production and shipping.

You get China's price and scale, and a UK partner accountable for every step. One who can read the Chinese-only registry, walk the factory floor, and catch the problem while it's still fixable, instead of when it's on a boat.`

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

![营业执照示例。经营范围一栏，正是分辨真工厂与贸易商的关键](/insights/img/business-licence-example.jpg)

然后去核验。中国官方的企业登记系统——国家企业信用信息公示系统（简称 GSXT）——公开、免费，由市场监管部门运营。您可以在 [gsxt.gov.cn](https://www.gsxt.gov.cn) 用中文名称或 USCC 查询任意一家内地注册公司，核对执照上的信息与在线记录是否一致：同名、同码、同一法定代表人，且状态为存续 / 在营，而非注销 / 吊销。

有一点得说实话：它全为中文，没有英文版。查询须用确切的中文注册名称或 18 位统一社会信用代码（用英文拼写查不到），而登录验证码是滑块拼图，或"按顺序点选中文字"的测试，且全程中文。多数记录无需账号即可查看，但更深层的备案信息需要中国身份证与人脸识别才能解锁。它是权威来源，却是为已经身在中国的人准备的。而这，正是一线伙伴的用武之地。

这套流程还有一个更快的清单版：[5 分钟供应商背景调查](/insights/supplier-background-check)。

## 下单前如何考察一家工厂

核验文件能告诉您一家公司是真的，却不能告诉您它能把您的产品做好。为此，在付出一分钱之前，不妨走一遍这样的流程：

1. **确认执照并在 GSXT 上核查。** 真实公司、在营状态、经营范围与业务相符。
2. **把经营范围对上产品。** 一家整本目录都是炊具的供应商，却爽快地给您的电子订单报价，其实两样它都不生产。它是贸易商，从真正的工厂进货，再加一道差价。
3. **要求看真实的生产线。** 就该具体工序的照片与简短视频走查，而不是精美画册或图库摆拍。这一步含糊其辞，是最响亮的危险信号。
4. **取样，再拿样品对照量产货。** 好样品证明工厂能达到标准，却不证明每一件都会达到。就实际量产批次约定验货，才能填上这道缝。
5. **让人站到车间里。** 亲自去。这是抵御劣质订单的最大保障，也是多数买家因远隔八千公里而跳过的一步。我们曾上门，结果"工厂"只是一间租来的展厅加一个微信号，真正的生产在两省之外——如果它真的存在的话。

对于超出小额首单的任何订单，一次现场查验或第三方验货都是廉价的保险。它的花费只是所保护货值的一小部分；而只要它在货柜启运前拦下一批次品，就已数倍地收回成本。

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

多数初次买家先用 ODM 起步、跑通需求，确认产品值得从零打造后再转向 OEM。第一天就选最难的路，并没有奖励。这两条路，正是我们的 [OEM / ODM 采购服务](/oem) 所擅长：设计、工厂与质量这一端由我们统筹，您只管把货卖好。

## 小批量起步，再扩大规模

您无需一开始就订一整柜。只要工厂认为您会回头，许多都愿意接远低于其标称起订量的首单：有时几百件，偶尔更少，视产品与材料而定。定制开模会抬高门槛，简单货品则维持较低。

样品通常需要一到三周，涉及新开模会更久。把这一轮用好——这是您在问题被放大一万倍之前，最便宜的一次抓错机会。用小批量试市场，确认产品能兑现您对客户的承诺，待风险出清后再放量。有雄心是好事，但把雄心押在首单上，结果往往是车库里堆满漏水的瓶子。

![中国工厂从打样到量产的生产线](/insights/img/china-production-line.jpg)

## 把货运回家：关于贸易术语的一点提醒

这段旅程分两半：运出中国，以及进入英国。

![夜色中的集装箱港口——中国出口贸易的规模](/insights/img/sourcing-china-port.jpg)

运出中国这一半是我们的事。安必隆是一家在中国本地持牌的进出口公司，因此中国这端的出口手续本就是我们工作的一部分，不会甩给您。

进入英国这一半是您的事，货物启运前值得先了解它的轮廓。

其一，**国际贸易术语（Incoterms）**：它以简写界定谁承担哪些费用，同样重要的是，谁在每一段旅程中承担风险。CFR（成本加运费）与 CIF（成本、保险加运费）听来几乎一样，其实并不相同，且 CFR 仅适用于海运。启运前把术语落在书面上，就不会为一个已在海上的货柜由谁负责而起争执。

其二，**英国进口流程本身**：关税、增值税、EORI 号、商品编码，以及您的具体产品是否需要许可或证书。这属于英国税务海关总署（HMRC）的范畴，且时有变动。英国政府的[分步进口指南](https://www.gov.uk/import-goods-into-uk)是入门之处；至于清关细节，多数企业会委托报关行，而非自行申报。我们不会冒充您的报关行或会计师——法律与税务的细节，正该交给他们。

## 安必隆的角色

安必隆进出口是一家英国创立、扎根中国的[采购合作伙伴](/services)。一句话概括：我们就站在您产品被制造的地方。我们寻找并核验工厂、研读执照并对照登记系统核查、谈判价格、管理打样与质量控制，并把订单一路盯到生产与发货。

您得到的是中国的价格与规模，以及一位对每个环节负责的英方伙伴——一位能读懂纯中文登记系统、走得进中国工厂车间、在问题还可挽回时就将其发现（而不是等它已在船上）的伙伴。`

const EN_BODY_2 = `A convincing website, an Alibaba Gold Supplier badge, a folder of shiny certificates. None of it proves the company you're about to wire a deposit to actually makes anything, or exists as a factory at all. The quality-inspection specialists at QualityInspection.org put it plainly: being a "gold supplier" on Alibaba doesn't mean much. It's paid placement, not verification.

Most of a real background check, though, takes about five minutes and costs nothing. This is the version we run before we let a client near a new factory, and the exact point it stops working if you're doing it from the UK.

## Start with the business licence

Ask for a colour scan of the company's business licence (营业执照). Every legally registered mainland company has one, and it carries the facts you actually need:

- The **18-digit Unified Social Credit Code (USCC)** at the top, the company's fingerprint across government systems.
- The **company type** and the **legal representative (法定代表人)**.
- The **business scope (经营范围)**, which is the tell. A real manufacturer's scope names production or manufacturing (生产 / 制造) of specific goods; a pure trading company's leans on wholesale and trade (批发 / 贸易).

![An example business licence. The 经营范围 field separates a maker from a trader](/insights/img/business-licence-example.jpg)

Then do the check most buyers skip. Make sure the name on the licence matches the name on the quote, the name on the invoice, and the name on the bank account you're asked to pay. That last one catches real scams: a deposit heading to a personal account, a Hong Kong account, or a company with a different name is one of the loudest warnings there is.

## Check the official registry, if you can

Look the company up on China's official registry, GSXT ([gsxt.gov.cn](https://www.gsxt.gov.cn)), by its exact Chinese name or USCC. Confirm the licence details match the live record, and the status reads 存续 / 在营 (active) rather than 注销 / 吊销 (cancelled or revoked).

This is where a UK buyer hits the first wall. GSXT is Chinese-only, the sign-in captcha is a Chinese slider or character puzzle, and the deeper records sit behind a Chinese ID and a face scan. The two databases Chinese agents actually use, 企查查 (Qichacha) and 天眼查 (Tianyancha), are worse for an outsider: both need a Chinese +86 phone number to register and take payment only through Alipay or WeChat Pay. From Britain, you often simply can't run the authoritative check yourself. The English report services that fill the gap start around $30 to $100 a company.

## Prove they've actually shipped something

This is the step almost nobody does, and it's the strongest of the lot. A website and a badge tell you nothing about whether a "factory" has ever exported a single box. Customs shipping records do.

Search the company on [ImportYeti](https://www.importyeti.com). It's free, in English, and built from US customs bill-of-lading data. If the supplier is a genuine exporter, you'll see real shipments leaving China with their name on them, which buyers they ship to, roughly how much, and the product category by HS code. A broker dressed up as a factory, or a shell, shows nothing.

One honest limit: ImportYeti covers US sea imports only. A factory that mostly ships to the UK and Europe may have a thin US record, so an empty result is not proof of a scam. A full, multi-year record, on the other hand, is strong proof they're real. For UK-lane confirmation you'd need a paid global tool.

## The red flags that catch the rest

Most of the remaining tells are behaviour, not paperwork. Dig harder, or walk away, when you see:

- A price 15–20% under everyone else with no explanation. As J.P. Morgan's own vendor-fraud guidance says, if an offer looks too good to be true, it usually is.
- A free email address (@gmail, @163) instead of a company domain.
- Specs that quietly change between the quote and the order.
- A refusal to let you visit unannounced, or to introduce the real factory rather than a sales office.
- A "factory" whose catalogue somehow covers everything from cookware to electronics.

The law firm Harris Sliwoski, which tracks China factory scams, documents the common patterns: a supplier takes a 30% deposit, nudges it toward 50%, then does no work and disappears; or a buyer pays in full for a discount and the container turns up with good product on top and bricks or scrap beneath.

## The video tour isn't the proof it used to be

For years the standard advice was to insist on a live video walk-through of the line. That advice is starting to break. AI-generated "factory tours", with deepfaked faces and voices on a video call, have begun to appear. Treat a video as a good sign, not proof. Pair it with an independent third-party audit, or a real person on the floor. A screen can be faked. A production line, seen in person, cannot.

## Where the five minutes runs out

You can and should do all of the above yourself. It will catch most bad actors before they cost you anything. But three walls remain, and clearing them is the job we do.

The registry that settles the question is Chinese-only and phone-walled. The free shipping data covers the wrong ocean for a UK importer. And no tool tells you that the company you verified on paper is really a rented meeting room, with the production two provinces away. We've turned up to precisely that. As Harris Sliwoski bluntly notes, when a foreign buyer is cheated in China the local police rarely act, so getting your money back is not the plan. Not losing it is.

So we run the full check before a client pays a deposit: the registry in Chinese, the shipping records, the certificates checked with the issuing body, and the part that can't be faked, one of us standing on the factory floor. If you'd rather not spend your evenings fighting a Chinese captcha, that's what we're for. See [how we work](/oem), or start with the [full guide to sourcing from China](/insights/how-to-source-products-from-china).`

const ZH_BODY_2 = `一个精致的网站、一个阿里巴巴"金牌供应商"徽章、一叠漂亮的证书。这些都无法证明您即将打定金过去的那家公司真的在生产什么，甚至无法证明它是不是一家工厂。质检专家网站 QualityInspection.org 说得直白：阿里巴巴上的"金牌供应商"并不说明什么，那是花钱买的位置，而非核验。

不过，一次真正的背景调查，大部分只需约五分钟，且不花一分钱。以下就是我们在让客户接触一家新工厂之前所做的版本，以及当您身在英国时它会在哪一步失灵。

## 从营业执照看起

向对方索取营业执照的彩色扫描件。每一家合法注册的内地公司都有一份，上面就有您真正需要的信息：

- 顶部的 **18 位统一社会信用代码（USCC）**，即这家公司在政府各系统中的"指纹"。
- **类型**与**法定代表人**。
- **经营范围**，这是关键判断点。真正制造商的经营范围会写明具体货物的生产 / 制造；纯贸易公司则偏重批发 / 贸易。

![营业执照示例。经营范围一栏，正是分辨真工厂与贸易商的关键](/insights/img/business-licence-example.jpg)

然后做一件多数买家会跳过的核对：确认执照上的名称，与报价上的名称、发票上的名称，以及您被要求付款的银行账户名称一致。最后这一项能揪出真正的骗局：定金流向一个个人账户、一个香港账户，或一家名称不同的公司，都是最响亮的警号之一。

## 在官方登记系统核查，如果你能

在中国官方登记系统 GSXT（[gsxt.gov.cn](https://www.gsxt.gov.cn)）上，用其确切的中文名称或 USCC 查询该公司。核对执照信息与在线记录是否一致，状态是否为存续 / 在营，而非注销 / 吊销。

这里正是英国买家撞上的第一堵墙。GSXT 全为中文，登录验证码是中文滑块或点字测试，而更深层的记录需要中国身份证与人脸识别。中国代理真正在用的两个数据库——企查查与天眼查——对外人更不友好：两者注册都需要中国 +86 手机号，付款也只接受支付宝或微信支付。身在英国，您往往根本无法自己完成这项权威核查。填补这一空缺的英文报告服务，起价约为每家公司 30 到 100 美元。

## 证明他们确实发过货

这一步几乎没人做，却是其中最有力的。网站和徽章无法告诉您一家"工厂"是否真的出口过哪怕一箱货，而海关运输记录可以。

在 [ImportYeti](https://www.importyeti.com) 上搜索该公司。它免费、英文界面，数据来自美国海关的提单记录。如果这家供应商是真正的出口商，您会看到实实在在从中国发出、以其名义申报的货运，看到他们发给哪些买家、大致数量，以及按 HS 编码划分的产品类别。而一个伪装成工厂的贸易商，或一个空壳，则什么都查不到。

老实说有一个局限：ImportYeti 只覆盖美国海运进口。一家主要发往英国与欧洲的工厂，美国记录可能很少，因此查不到并不等于骗局。反过来，一份多年连续的记录，则是他们真实存在的有力证明。若要确认英国航线，则需要付费的全球工具。

## 揪出其余骗子的危险信号

剩下的大多数破绽在于行为，而非文件。出现以下情况，请多加追问，或直接走人：

- 价格比所有人低 15–20% 却没有解释。正如摩根大通（J.P. Morgan）自家的供应商防欺诈指南所言，好到不真实的报价，通常就是不真实。
- 用免费邮箱（@gmail、@163），而非公司域名邮箱。
- 规格在报价与下单之间被悄悄改动。
- 拒绝让您突击到访，或不肯引荐真正的工厂，只给一个销售办公室。
- 一家"工厂"的产品目录，居然从炊具到电子产品无所不包。

追踪中国工厂骗局的律所 Harris Sliwoski 记录了常见套路：供应商收取 30% 定金，再设法把比例推向 50%，随后不干活、消失；或者买家为折扣全款付清，货柜到手却是上层为合格产品、下面是砖块或废料。

## 视频看厂，已不再是从前的铁证

多年来，标准建议是坚持要一次生产线的实时视频走查。如今这条建议正在失效。由 AI 生成的"工厂视频"——视频通话里深度伪造的面孔与声音——已经开始出现。把视频当作一个好迹象，而非铁证。把它与独立的第三方验厂，或一个真正站在车间里的人配合起来。屏幕可以造假，亲眼所见的生产线不能。

## 五分钟用完之后

上述这些，您都能、也都该自己做。它能在多数坏人让您破财之前就把他们挡住。但仍有三堵墙，跨过它们，就是我们的工作。

那个能一锤定音的登记系统，全为中文且被手机号锁死。免费的运输数据，覆盖的是对英国进口商而言"错的那片海"。而且没有任何工具能告诉您：您在纸面上核验过的公司，其实是一间租来的会议室，生产在两省之外。我们就上门遇到过这种情况。正如 Harris Sliwoski 直言，外国买家在中国被骗时，当地警方鲜少作为——所以把钱追回来不是计划，不把钱丢掉才是。

因此，在客户付定金之前，我们会做完整的核查：用中文查登记系统、查运输记录、向发证机构核实证书，以及那个无法伪造的部分——我们中的一个人，就站在工厂车间里。如果您不想把晚上耗在跟中文验证码搏斗上，这正是我们的用处。看看[我们如何合作](/oem)，或从[中国采购完整指南](/insights/how-to-source-products-from-china)开始。`

export const posts: Post[] = [
  {
    slug: 'how-to-source-products-from-china',
    date: '2026-07-11',
    image: '/insights/img/sourcing-china-port.jpg',
    thumb: '/insights/img/article-banner-square.jpg',
    banner: '/insights/img/article-banner.jpg',
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
        en: 'Richie is the British founder of Albion Exports. He has lived in China for fifteen years and does this work on the ground, in person. It comes from the factory floor, not a search engine.',
        zh: 'Richie 是安必隆进出口的英国创始人，在中国生活了十五年，亲力亲为、扎根一线。以下内容来自工厂车间，而非搜索引擎。',
      },
    },
    title: {
      en: 'How to source products from China without getting burned: a UK & EU buyer’s guide',
      zh: '如何从中国采购产品而不踩坑：英国与欧盟买家指南',
    },
    standfirst: {
      en: 'The saving is real. So is the risk. Getting one without the other is the whole job, and it’s what we do on factory floors across China most weeks.',
      zh: '省钱是真的，风险也是真的。既要省钱又要避开风险，才是真正的功夫，而这正是我们每周在中国各地工厂车间所做的事。',
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
  {
    slug: 'supplier-background-check',
    date: '2026-07-12',
    image: '/insights/img/business-licence-example.jpg',
    thumb: '/insights/img/bg-check-banner-square.jpg',
    banner: '/insights/img/bg-check-banner.jpg',
    imageAlt: {
      en: 'A Chinese business licence, the document at the heart of a supplier background check',
      zh: '中国营业执照，供应商背景调查的核心文件',
    },
    author: {
      name: 'Richie',
      role: {
        en: 'Founder, Albion Exports · written from our office in Hefei',
        zh: '创始人，安必隆进出口 · 于合肥办公室撰写',
      },
      bio: {
        en: 'Richie is the British founder of Albion Exports. He has lived in China for fifteen years and does this work on the ground, in person. It comes from the factory floor, not a search engine.',
        zh: 'Richie 是安必隆进出口的英国创始人，在中国生活了十五年，亲力亲为、扎根一线。以下内容来自工厂车间，而非搜索引擎。',
      },
    },
    title: {
      en: 'How to check a Chinese supplier is real: a 5-minute background check',
      zh: '如何核验一家中国供应商是否真实：5 分钟背景调查',
    },
    standfirst: {
      en: 'A slick website proves nothing. Most of a real background check takes five minutes and costs nothing. This is the one we run before a client goes near a new factory.',
      zh: '精致的网站证明不了什么。真正的背景调查大部分只需五分钟，且分文不花。以下就是我们在客户接触一家新工厂之前所做的那一套。',
    },
    excerpt: {
      en: 'A convincing website and an Alibaba badge don’t prove a factory is real. A free, 5-minute background check for UK & EU buyers: the business licence, the official registry, shipping records, and the red flags most buyers miss.',
      zh: '精致的网站与阿里巴巴徽章，证明不了一家工厂是真的。这份面向英国与欧盟买家的免费 5 分钟背景调查涵盖：营业执照、官方登记系统、运输记录，以及多数买家会忽略的危险信号。',
    },
    body: { en: EN_BODY_2, zh: ZH_BODY_2 },
    faq: {
      en: [
        {
          q: 'Can I check a Chinese supplier from the UK for free?',
          a: 'Partly. You can read the business licence and search shipping records on ImportYeti for free. But the official registry (GSXT) and the databases agents use (Qichacha, Tianyancha) are effectively walled off — Chinese-only, and needing a Chinese +86 phone number and Alipay/WeChat Pay. English report services fill the gap from about $30–100 a company.',
        },
        {
          q: 'How do I tell a real factory from a trading company?',
          a: 'Read the business scope (经营范围) on the licence — a maker’s names production or manufacturing; a trader’s leans on wholesale and trade. Then check ImportYeti to see whether they actually export your product category.',
        },
        {
          q: 'Is an Alibaba Gold Supplier badge a guarantee?',
          a: 'No. It’s paid placement, not verification. Treat it as marketing and run the licence, registry and shipping-record checks anyway.',
        },
        {
          q: 'They sent me great certificates — am I safe?',
          a: 'Not necessarily. Certificates, and their QR codes, can be forged. Verify each one directly with the issuing body, and treat any you can’t confirm as if it isn’t there.',
        },
        {
          q: 'Should I still ask for a video factory tour?',
          a: 'Yes, but don’t treat it as proof. AI-deepfaked factory tours now exist. Pair the video with an independent third-party audit or a person physically on the floor.',
        },
      ],
      zh: [
        {
          q: '在英国能免费核查一家中国供应商吗？',
          a: '部分可以。营业执照与 ImportYeti 上的运输记录都能免费查看。但官方登记系统 GSXT，以及代理常用的企查查、天眼查，实际上把外人挡在门外——全为中文，且需要中国 +86 手机号与支付宝/微信支付。填补空缺的英文报告服务，起价约每家公司 30 到 100 美元。',
        },
        {
          q: '如何分辨真工厂与贸易公司？',
          a: '看执照上的经营范围——制造商会写明生产 / 制造，贸易商则偏重批发 / 贸易。再用 ImportYeti 查看他们是否真的出口您所需的产品类别。',
        },
        {
          q: '阿里巴巴"金牌供应商"是保证吗？',
          a: '不是。那是花钱买的位置，而非核验。把它当作营销，照样去做执照、登记系统与运输记录的核查。',
        },
        {
          q: '对方发来了漂亮的证书——我就安全了吗？',
          a: '未必。证书及其二维码都可能伪造。逐一向发证机构直接核实，凡是无法确认的，就当它不存在。',
        },
        {
          q: '还要不要要求视频看厂？',
          a: '要，但别把它当铁证。AI 深度伪造的"工厂视频"如今已经出现。把视频与独立第三方验厂，或一个真正站在车间里的人配合起来。',
        },
      ],
    },
    furtherReading: {
      en: [
        {
          label: 'Harris Sliwoski — China factory scams (China Law Blog)',
          url: 'https://harris-sliwoski.com/chinalawblog/china-factory-scams/',
        },
        {
          label: 'ImportYeti — free US import shipping records',
          url: 'https://www.importyeti.com',
        },
        {
          label: 'Import goods into the UK: step by step (GOV.UK)',
          url: 'https://www.gov.uk/import-goods-into-uk',
        },
      ],
      zh: [
        {
          label: 'Harris Sliwoski — 中国工厂骗局（China Law Blog，英文）',
          url: 'https://harris-sliwoski.com/chinalawblog/china-factory-scams/',
        },
        {
          label: 'ImportYeti — 免费美国进口运输记录（英文）',
          url: 'https://www.importyeti.com',
        },
        {
          label: '英国进口分步指南（GOV.UK，英文）',
          url: 'https://www.gov.uk/import-goods-into-uk',
        },
      ],
    },
  },
]
