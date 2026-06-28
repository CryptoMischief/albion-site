import { getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import { Logo } from './Logo'
import { LanguageToggle } from './LanguageToggle'
import { MobileMenu } from './MobileMenu'
import { WhatsAppIcon } from '@/components/icons/WhatsAppIcon'
import { LinkedInIcon } from '@/components/icons/LinkedInIcon'
import type { Region } from '@/lib/region'

export async function Header({ region }: { region: Region }) {
  const t = await getTranslations('Nav')
  return (
    <header className="sticky top-0 z-30 border-b border-navy-100 bg-white/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Logo size="md" />
        <nav className="hidden items-center gap-8 text-sm font-medium text-navy-800 md:flex">
          <Link href="/about" className="hover:text-navy-600">{t('about')}</Link>
          <Link href="/services" className="hover:text-navy-600">{t('services')}</Link>
          <Link href="/contact" className="hover:text-navy-600">{t('contact')}</Link>
        </nav>
        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-1.5 md:flex">
            <a
              href="https://www.linkedin.com/company/albion-exports/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-flex size-9 items-center justify-center rounded-full text-navy-700 transition-colors hover:bg-navy-50 hover:text-navy-900"
            >
              <LinkedInIcon className="size-4.5" />
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=447732506459"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="inline-flex size-9 items-center justify-center rounded-full text-navy-700 transition-colors hover:bg-navy-50 hover:text-navy-900"
            >
              <WhatsAppIcon className="size-4.5" />
            </a>
          </div>
          <span className="hidden text-xs uppercase tracking-wide text-mute sm:inline">
            {region === 'cn' ? 'CN' : 'Global'}
          </span>
          <div className="hidden md:block">
            <LanguageToggle />
          </div>
          <MobileMenu region={region} />
        </div>
      </div>
    </header>
  )
}
