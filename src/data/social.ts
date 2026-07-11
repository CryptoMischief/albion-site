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
  // YouTube: channel not live yet — add posts here once it's up.
  // WeChat 视频号 / Douyin: add with region: 'cn' when live.
]
