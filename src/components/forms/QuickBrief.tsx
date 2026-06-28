'use client'

import { useState, useTransition } from 'react'
import { useLocale, useTranslations } from 'next-intl'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { submitContact } from '@/lib/contact-action'

type Status = 'idle' | 'success' | 'error'

/** Two-field inline RFQ — product + email. Posts to the same Resend action. */
export function QuickBrief() {
  const t = useTranslations('QuickBrief')
  const locale = useLocale()
  const [status, setStatus] = useState<Status>('idle')
  const [isPending, startTransition] = useTransition()

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (isPending) return
    const form = e.currentTarget
    const fd = new FormData(form)
    const product = String(fd.get('product') ?? '')
    const email = String(fd.get('email') ?? '')
    startTransition(async () => {
      const result = await submitContact({
        name: email.split('@')[0] ?? 'Quick brief',
        email,
        company: '',
        country: '',
        product,
        quantity: '',
        targetPrice: '',
        message: `[Quick brief from Process section] ${product}`,
        website: String(fd.get('website') ?? ''),
        locale,
      })
      if (result.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    })
  }

  if (status === 'success') {
    return (
      <div className="flex items-center gap-2 rounded-xl bg-emerald-500/15 p-3 text-sm text-emerald-200">
        <CheckCircle2 className="size-4 shrink-0" />
        {t('success')}
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="space-y-2">
      <div className="hidden" aria-hidden="true">
        <input type="text" name="website" tabIndex={-1} autoComplete="off" />
      </div>
      <input
        type="text"
        name="product"
        required
        placeholder={t('placeholder')}
        className="w-full rounded-xl border border-white/20 bg-white/10 px-3.5 py-2.5 text-sm text-white placeholder-white/50 focus:border-white/50 focus:outline-none"
      />
      <input
        type="email"
        name="email"
        required
        placeholder={t('emailPlaceholder')}
        className="w-full rounded-xl border border-white/20 bg-white/10 px-3.5 py-2.5 text-sm text-white placeholder-white/50 focus:border-white/50 focus:outline-none"
      />
      <button
        type="submit"
        disabled={isPending}
        className="inline-flex w-full items-center justify-center gap-1.5 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-navy-900 transition-colors hover:bg-navy-50 disabled:opacity-60"
      >
        {isPending ? t('sending') : t('submit')}
        {!isPending && <ArrowRight className="size-3.5" />}
      </button>
      {status === 'error' && (
        <p className="text-xs text-amber-300">{t('error')}</p>
      )}
    </form>
  )
}
