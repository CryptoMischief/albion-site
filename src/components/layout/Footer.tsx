import { getTranslations } from 'next-intl/server'
import type { Region } from '@/lib/region'
import { SocialBar } from '@/components/widgets/SocialBar'

const USCC = '91340100MAKET1LP5K'

export async function Footer({ region }: { region: Region }) {
  const t = await getTranslations('Footer')
  return (
    <footer className="border-t border-navy-100 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-8 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div className="space-y-1 text-sm text-mute">
          <div className="font-medium text-navy-800">{t('company')}</div>
          <div>
            {t('usccLabel')}: <span className="font-mono">{USCC}</span>
          </div>
          {region === 'cn' && (
            <div className="text-xs">
              <a
                href="https://beian.miit.gov.cn"
                className="underline-offset-2 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('icpPlaceholder')}
              </a>
            </div>
          )}
          <div className="pt-2 text-xs">{t('copyright')}</div>
        </div>
        <SocialBar region={region} />
      </div>
    </footer>
  )
}
