# albion-site — build notes

Sprint 2 ticket S2-03. Brief: `/Users/apple/Downloads/Albion_S2-03_Website_Build_Brief.md`.

## Stack
- Next.js 16 App Router, React 19, TypeScript
- Tailwind CSS v4 (CSS-first `@theme` in `src/app/globals.css`)
- next-intl 4 (EN / ZH, `localePrefix: 'always'`)
- Geo split via **`src/proxy.ts`** (Next 16 renamed middleware → proxy)
- System font stack only — no Google Fonts (CN edition safety)

## Region-aware pattern
- Component pairs: `widgets/<Name>.global.tsx` + `widgets/<Name>.cn.tsx` + thin `widgets/<Name>.tsx` wrapper that picks based on the `region` prop
- `src/lib/region.ts` `getRegion()` reads cookie → x-user-region header → x-vercel-ip-country header → fallback `global`
- Layout passes region into Header / Footer / page components

## Preview overrides
- `?region=cn` — sticky via cookie for 30 days
- `?region=global` — reset
- Same effect as a real visitor from CN/elsewhere

## Run
```
npm run dev          # http://localhost:3000  → 307 → /en
npm run build
npm run start
```

## Hard rules (from the S2-03 brief)
- Never put Google Fonts / GA4 / GTM / Google Maps / reCAPTCHA / YouTube / Meta scripts behind a code path that a CN visitor can hit. Gate behind `region === 'global'` server-side.
- WeChat JS-SDK + WeChat Pay need a verified Official Account + ICP-filed domain. Phase 1 uses QR/link fallbacks only.
- Customs / FX / tax / import-export law: the agent owns these. Do not assert them as fact in copy.

## What's stubbed (Phase 1 follow-ups)
- Analytics IDs: `NEXT_PUBLIC_GA_ID`, `NEXT_PUBLIC_BAIDU_TONGJI_ID` env vars (components no-op when missing)
- SocialBar links: placeholder URLs in `widgets/SocialBar.{global,cn}.tsx`
- WeChat OA QR: placeholder anchor; swap for the actual QR image asset when the Official Account is registered (S2-05)
- Contact: `mailto:hello@albionexports.com` — replace with a Resend-backed form when the domain is set up
- ICP number in footer is a placeholder until the host completes the filing
- Pages: only `/` is built; `/about`, `/services`, `/contact` are TBD (currently anchor scrolls on home)
- OG image, favicon, sitemap, robots.txt — not yet
- Deployment: Vercel for global, Aliyun/Tencent HK for CN Phase 1 — both TBD
