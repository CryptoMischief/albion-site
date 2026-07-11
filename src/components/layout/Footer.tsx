import { getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import type { Region } from '@/lib/region'
import { SocialBar } from '@/components/widgets/SocialBar'

const USCC = '91340100MAKET1LP5K'

const navLinks = [
  { href: '/services', key: 'services' as const },
  { href: '/products', key: 'products' as const },
  { href: '/oem', key: 'oem' as const },
  { href: '/insights', key: 'insights' as const },
  { href: '/about', key: 'about' as const },
  { href: '/contact', key: 'contact' as const },
]

export async function Footer({ region }: { region: Region }) {
  const t = await getTranslations('Footer')
  const tNav = await getTranslations('Nav')
  return (
    <footer className="border-t border-navy-100 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
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

          <nav className="grid grid-cols-2 gap-x-10 gap-y-2 text-sm sm:grid-cols-3">
            {navLinks.map((l) => (
              <Link
                key={l.key}
                href={l.href}
                className="text-navy-700 transition-colors hover:text-navy-900"
              >
                {tNav(l.key)}
              </Link>
            ))}
          </nav>

          <div className="md:pt-1">
            <SocialBar region={region} />
          </div>
        </div>
      </div>
    </footer>
  )
}
