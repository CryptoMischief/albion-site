'use client'

import { useState, useTransition } from 'react'
import { useTranslations, useLocale } from 'next-intl'
import { Send, CheckCircle2, AlertTriangle } from 'lucide-react'
import { submitContact, type ContactSubmission } from '@/lib/contact-action'

type Status = 'idle' | 'sending' | 'success' | 'error'

const fieldClass =
  'w-full rounded-xl border border-navy-200 bg-white px-4 py-3 text-base text-navy-900 placeholder-mute/70 transition-colors focus:border-navy-500 focus:outline-none focus:ring-2 focus:ring-navy-200'

const labelClass = 'block text-sm font-medium text-navy-800 mb-1.5'

export function ContactForm({ defaultProduct }: { defaultProduct?: string }) {
  const t = useTranslations('ContactPage.form')
  const locale = useLocale()
  const [status, setStatus] = useState<Status>('idle')
  const [isPending, startTransition] = useTransition()

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (isPending) return
    setStatus('sending')
    const form = e.currentTarget
    const fd = new FormData(form)
    const submission: ContactSubmission = {
      name: String(fd.get('name') ?? ''),
      email: String(fd.get('email') ?? ''),
      company: String(fd.get('company') ?? ''),
      country: String(fd.get('country') ?? ''),
      product: String(fd.get('product') ?? ''),
      quantity: String(fd.get('quantity') ?? ''),
      targetPrice: String(fd.get('targetPrice') ?? ''),
      message: String(fd.get('message') ?? ''),
      website: String(fd.get('website') ?? ''), // honeypot
      locale,
    }
    startTransition(async () => {
      const result = await submitContact(submission)
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
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 text-center">
        <CheckCircle2 className="mx-auto size-8 text-emerald-700" />
        <p className="mt-3 text-base font-medium text-emerald-900">
          {t('success')}
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate>
      {/* Honeypot — invisible to humans, harvested by bots */}
      <div className="hidden" aria-hidden="true">
        <label>
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>{t('name')} *</label>
          <input id="name" name="name" type="text" required autoComplete="name" className={fieldClass} />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>{t('email')} *</label>
          <input id="email" name="email" type="email" required autoComplete="email" className={fieldClass} />
        </div>
        <div>
          <label htmlFor="company" className={labelClass}>{t('company')}</label>
          <input id="company" name="company" type="text" autoComplete="organization" className={fieldClass} />
        </div>
        <div>
          <label htmlFor="country" className={labelClass}>{t('country')}</label>
          <input id="country" name="country" type="text" autoComplete="country-name" className={fieldClass} />
        </div>
        <div>
          <label htmlFor="product" className={labelClass}>{t('product')}</label>
          <input id="product" name="product" type="text" defaultValue={defaultProduct} className={fieldClass} />
        </div>
        <div>
          <label htmlFor="quantity" className={labelClass}>{t('quantity')}</label>
          <input id="quantity" name="quantity" type="text" className={fieldClass} />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="targetPrice" className={labelClass}>{t('targetPrice')}</label>
          <input id="targetPrice" name="targetPrice" type="text" className={fieldClass} />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className={labelClass}>{t('message')} *</label>
          <textarea id="message" name="message" required rows={5} className={`${fieldClass} resize-y`} />
        </div>
      </div>

      {status === 'error' && (
        <div className="flex items-start gap-2 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
          <AlertTriangle className="mt-0.5 size-4 shrink-0" />
          <p>{t('error')}</p>
        </div>
      )}

      <div className="pt-2">
        <button
          type="submit"
          disabled={isPending}
          className="inline-flex h-12 min-w-44 items-center justify-center gap-2 rounded-full bg-navy-900 px-6 text-sm font-semibold text-white transition-colors hover:bg-navy-800 disabled:cursor-not-allowed disabled:bg-navy-400"
        >
          <Send className="size-4" />
          {isPending ? t('submitting') : t('submit')}
        </button>
      </div>
    </form>
  )
}
