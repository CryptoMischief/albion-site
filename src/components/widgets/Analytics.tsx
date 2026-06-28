import { AnalyticsGlobal } from './Analytics.global'
import { AnalyticsCn } from './Analytics.cn'
import type { Region } from '@/lib/region'

export function Analytics({ region }: { region: Region }) {
  return region === 'cn' ? <AnalyticsCn /> : <AnalyticsGlobal />
}
