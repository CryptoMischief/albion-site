// Albion social feed — curated posts for the scrolling card row under the hero.
// SELF-HOSTED (no external scripts) so it works in the China edition too.
//
// To add a post: append one object below.
//   platform: which glyph + brand colour   ('linkedin' | 'instagram' | 'youtube' | 'wechat' | 'douyin')
//   title:    punchy, clickable headline    (curiosity beats "another day...")
//   blurb:    1–2 sentences about the post   (keep it factory-name-free — the source is our edge)
//   url:      the exact post permalink       (the real post, not the profile)
//   image:    optional thumbnail under /public/social/…  (omit → branded fallback tile)
//   region:   'global' (default) = Western edition · 'cn' = China edition.
//             LinkedIn / Instagram / YouTube are BLOCKED in China — keep those 'global'.
//             Use 'cn' only for WeChat 视频号 / Douyin posts.
//
// When the ticker has no posts for a region, it renders nothing.

export type SocialPlatform =
  | 'linkedin'
  | 'instagram'
  | 'youtube'
  | 'wechat'
  | 'douyin'

export type SocialPost = {
  platform: SocialPlatform
  title: string
  blurb: string
  url: string
  image?: string
  region?: 'global' | 'cn'
}

export const socialPosts: SocialPost[] = [
  {
    platform: 'linkedin',
    title: "Inside China's robotics revolution",
    blurb:
      'A full day on the floor of a Chinese robotics manufacturer — from lab prototypes to production lines. The kind of supplier Western buyers rarely get in front of.',
    url: 'https://www.linkedin.com/posts/albion-exports_robotics-ai-automation-activity-7481244199514832896-SD4d',
    image: '/social/ig.jpg',
  },
  {
    platform: 'instagram',
    title: '3 days sourcing ISPO Shanghai',
    blurb:
      'Sports, outdoor and pet gear — three days on the show floor, meeting factories face to face and finding products worth bringing back to our buyers.',
    url: 'https://www.instagram.com/reel/DaelgUcPXl7/',
    image: '/social/li.jpg',
  },
  {
    platform: 'youtube',
    title: "China's Porsche killer?",
    blurb:
      'Our most-watched film. A full review of the Xiaomi SU7 — the car that has European manufacturers rattled, driven and priced on the ground in China.',
    url: 'https://www.youtube.com/shorts/e0A6gT3puOE',
    image: '/youtube/e0A6gT3puOE.jpg',
  },
  {
    platform: 'youtube',
    title: 'NIO ES6: Europe gets the older car',
    blurb:
      'The same SUV costs roughly 70% more in Europe — and the European version runs the previous generation of hardware. We drove the Chinese one to show the gap.',
    url: 'https://www.youtube.com/shorts/tk6MeNn89Rc',
    image: '/youtube/tk6MeNn89Rc.jpg',
  },
  {
    platform: 'youtube',
    title: 'Welcome to Yiwu, the city that supplies the world',
    blurb:
      'Inside the largest wholesale market on earth. Where a huge share of the products on Western shelves actually begins.',
    url: 'https://www.youtube.com/shorts/GAbKTJ_ARLQ',
    image: '/youtube/GAbKTJ_ARLQ.jpg',
  },
  {
    platform: 'instagram',
    title: 'Testing AI glasses on the ground in China',
    blurb:
      'Live translation, navigation and a camera in a pair of glasses. We road-tested them around Hefei to see which claims survive contact with real use.',
    url: 'https://www.instagram.com/p/DddJBssT2HM/',
  },
  {
    platform: 'instagram',
    title: 'Canton Fair, Guangzhou',
    blurb:
      "The world's largest trade fair, walked hall by hall. Meeting manufacturers face to face and bringing back the products worth putting in front of our buyers.",
    url: 'https://www.instagram.com/p/DewSoKksz4b/',
  },
  // Instagram: paste new reel permalinks here as they go up.
  // WeChat 视频号 / Douyin: add with region: 'cn' when live.
]
