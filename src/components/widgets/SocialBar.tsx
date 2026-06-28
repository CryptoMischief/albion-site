import { SocialBarGlobal } from './SocialBar.global'
import { SocialBarCn } from './SocialBar.cn'
import type { Region } from '@/lib/region'

export function SocialBar({ region }: { region: Region }) {
  return region === 'cn' ? <SocialBarCn /> : <SocialBarGlobal />
}
