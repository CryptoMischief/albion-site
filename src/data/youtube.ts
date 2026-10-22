// Albion YouTube — curated carousel under the proof section.
//
// SELF-HOSTED thumbnails (/public/youtube/<id>.jpg) so the page makes no
// external request. Cards link out to YouTube — views should land on the
// channel, not be captured here.
//
// YouTube is BLOCKED in China. The <Videos> section renders only for
// region === 'global'; never surface this data on a CN code path.
//
// To add a video: append below, then save its thumbnail as
//   public/youtube/<id>.jpg   (i.ytimg.com/vi/<id>/maxresdefault.jpg)
// Order here is the order on screen.

export type VideoKind = 'film' | 'short'

export type Video = {
  /** YouTube video id — also the thumbnail filename. */
  id: string
  title: string
  kind: VideoKind
}

export const CHANNEL_URL = 'https://www.youtube.com/@AlbionExports'

export const videos: Video[] = [
  { id: '0d5SPtsPgs0', title: 'NIO ES6:  Chinese EV Review and Price', kind: 'film' },
  { id: 'Ibui4zt5MJs', title: 'I Tested Rokid AI Glasses in China — Are They Actually Useful?', kind: 'film' },
  { id: 'o5VhOqF2yjI', title: 'China\'s Next Gadgets, Before Anyone Has Them', kind: 'film' },
  { id: 'e0A6gT3puOE', title: 'China\'s Porsche Killer? Xiaomi Car Review & Price!', kind: 'short' },
  { id: 'tk6MeNn89Rc', title: 'NIO ES6: Europe Gets RIPPED OFF with OLDER Models!', kind: 'short' },
  { id: 'klIyvVe5IaE', title: 'You home EV charger was a waste of money. #electriccar', kind: 'short' },
  { id: 'fREiSajJvOg', title: 'Genius Chinese robot recites PI to 100', kind: 'short' },
  { id: 'fRj9N7_jtOw', title: 'Xiaomi Car: Seats Turn Into Dining Room! UNBELIEVABLE TECH', kind: 'short' },
  { id: 'YoqNm1amwNg', title: 'NIO ES6 2026 Review and Price', kind: 'short' },
  { id: 'EUbuEWD9B2c', title: 'Giant Drone, Talking Robot & Electric Suitcase: China Future Tech', kind: 'short' },
  { id: 'GAbKTJ_ARLQ', title: 'Welcome to Yiwu… The City That Supplies the World', kind: 'short' },
  { id: 'ag4tPdc6ag0', title: 'Don’t do this at Canton Fair!', kind: 'short' },
  { id: 'n28ipCo8Uhs', title: 'Smart Glasses Translate The World: Worth $599?', kind: 'short' },
  { id: 'vJtUYRrAdbc', title: 'Don’t Trust Every Supplier in China', kind: 'short' },
  { id: '8v51EwZBU-w', title: 'Sourcing Cheap Air Conditioners in China #airconditioner', kind: 'short' },
  { id: 'Vnbl5qwrHGQ', title: 'NEW ROKID AI/AR GLASSES TESTED IN CHINA', kind: 'short' },
  { id: '442IuzH76mA', title: '$6 Speaker That\'ll Make Your Parties POP! #shorts', kind: 'short' },
  { id: 'xg6NNi6uNoY', title: 'AI Glasses AR Navigation to Chinese EV Showroom!', kind: 'short' },
  { id: 'OT-Qqm6AizY', title: 'SELF DRIVING LUXURY CAR - ES9', kind: 'short' },
  { id: 'QoaLF6W-omU', title: 'Robot Recites 100 Digits of Pi PERFECTLY! #shorts', kind: 'short' },
  { id: 'KL0zRKymi30', title: 'AI Glasses: Music, Translation, Camera & More! #shorts', kind: 'short' },
]

export const videoUrl = (v: Video) =>
  v.kind === 'short'
    ? `https://www.youtube.com/shorts/${v.id}`
    : `https://www.youtube.com/watch?v=${v.id}`
