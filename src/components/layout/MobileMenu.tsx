'use client'

import { useEffect, useState } from 'react'
import { useLocale, useTranslations } from 'next-intl'
import { Link, usePathname, useRouter } from '@/i18n/navigation'
import { Menu, X } from 'lucide-react'
import { routing } from '@/i18n/routing'
import { WhatsAppIcon } from '@/components/icons/WhatsAppIcon'
import { LinkedInIcon } from '@/components/icons/LinkedInIcon'
import { InstagramIcon } from '@/components/icons/InstagramIcon'

const links = [
  { href: '/about', key: 'about' as const },
  { href: '/services', key: 'services' as const },
  { href: '/contact', key: 'contact' as const },
]

export function MobileMenu({ region }: { region: 'cn' | 'global' }) {
  const t = useTranslations('Nav')
  const [open, setOpen] = useState(false)
  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const next = locale === 'en' ? 'zh' : 'en'

  return (
    <>
      <button
        type="button"
        aria-label="Open menu"
        aria-expanded={open}
        onClick={() => setOpen(true)}
        className="inline-flex size-11 items-center justify-center rounded-full border border-navy-200 text-navy-800 transition-colors hover:bg-navy-50 md:hidden"
      >
        <Menu className="size-5" />
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 md:hidden"
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-navy-900/40 backdrop-blur-sm"
          />
          <div className="absolute inset-x-0 top-0 origin-top rounded-b-3xl bg-white p-6 shadow-2xl">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium uppercase tracking-[0.18em] text-mute">
                {region === 'cn' ? 'CN' : 'Global'}
              </span>
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="inline-flex size-10 items-center justify-center rounded-full text-navy-800 hover:bg-navy-50"
              >
                <X className="size-5" />
              </button>
            </div>

            <nav className="mt-6 flex flex-col">
              {links.map((l) => (
                <Link
                  key={l.key}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="-mx-2 rounded-2xl px-2 py-4 text-2xl font-semibold tracking-tight text-navy-900 transition-colors hover:bg-navy-50"
                >
                  {t(l.key)}
                </Link>
              ))}
            </nav>

            <div className="mt-6 flex items-center justify-between border-t border-navy-100 pt-6">
              <button
                type="button"
                onClick={() => {
                  router.replace(pathname, {
                    locale: next as (typeof routing.locales)[number],
                  })
                  setOpen(false)
                }}
                className="inline-flex h-11 items-center justify-center rounded-full border border-navy-200 px-4 text-sm font-medium text-navy-800 transition-colors hover:bg-navy-50"
              >
                {t('languageToggle')}
              </button>
              <div className="flex items-center gap-2">
                <a
                  href="https://www.linkedin.com/company/albion-exports/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="inline-flex size-11 items-center justify-center rounded-full border border-navy-200 text-navy-700 transition-colors hover:bg-navy-50"
                >
                  <LinkedInIcon className="size-5" />
                </a>
                <a
                  href="https://api.whatsapp.com/send?phone=447732506459"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="inline-flex size-11 items-center justify-center rounded-full border border-navy-200 text-navy-700 transition-colors hover:bg-navy-50"
                >
                  <WhatsAppIcon className="size-5" />
                </a>
                <a
                  href="https://www.instagram.com/albionexports/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="inline-flex size-11 items-center justify-center rounded-full border border-navy-200 text-navy-700 transition-colors hover:bg-navy-50"
                >
                  <InstagramIcon className="size-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
