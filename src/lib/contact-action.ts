'use server'

import { Resend } from 'resend'

export type ContactSubmission = {
  name: string
  email: string
  company: string
  country: string
  product: string
  quantity: string
  targetPrice: string
  message: string
  /** Honeypot — must be empty. Bots fill it. */
  website: string
  locale: string
}

export type ContactResult =
  | { ok: true }
  | { ok: false; error: 'spam' | 'invalid' | 'send_failed' | 'not_configured' }

const RESEND_API_KEY = process.env.RESEND_API_KEY
const FROM_ADDRESS =
  process.env.CONTACT_FROM_ADDRESS ?? 'Albion Exports <onboarding@resend.dev>'
const TO_ADDRESS =
  process.env.CONTACT_TO_ADDRESS ?? 'hello@albionexports.com'

function escape(value: string): string {
  return value.replace(/[<>&]/g, (c) =>
    c === '<' ? '&lt;' : c === '>' ? '&gt;' : '&amp;'
  )
}

function buildText(s: ContactSubmission): string {
  return [
    `Name: ${s.name}`,
    `Email: ${s.email}`,
    `Company: ${s.company || '—'}`,
    `Country: ${s.country || '—'}`,
    `Product: ${s.product || '—'}`,
    `Quantity: ${s.quantity || '—'}`,
    `Target price: ${s.targetPrice || '—'}`,
    `Locale: ${s.locale}`,
    '',
    'Message:',
    s.message || '—',
  ].join('\n')
}

function buildHtml(s: ContactSubmission): string {
  const row = (label: string, value: string) =>
    `<tr><td style="padding:6px 14px 6px 0;color:#5a6378;font-size:13px;vertical-align:top">${escape(label)}</td><td style="padding:6px 0;color:#0f172a;font-size:14px">${escape(value || '—')}</td></tr>`
  return `
    <div style="font-family:-apple-system,BlinkMacSystemFont,'Helvetica Neue',Arial,sans-serif;max-width:560px">
      <h2 style="color:#1b2b46;margin:0 0 16px 0;font-size:18px">New enquiry — albionexports.com</h2>
      <table style="border-collapse:collapse;width:100%">
        ${row('Name', s.name)}
        ${row('Email', s.email)}
        ${row('Company', s.company)}
        ${row('Country', s.country)}
        ${row('Product', s.product)}
        ${row('Quantity', s.quantity)}
        ${row('Target price', s.targetPrice)}
        ${row('Locale', s.locale)}
      </table>
      <h3 style="color:#1b2b46;margin:20px 0 8px 0;font-size:14px">Message</h3>
      <p style="color:#0f172a;font-size:14px;line-height:1.6;white-space:pre-wrap;margin:0">${escape(s.message || '—')}</p>
    </div>
  `
}

export async function submitContact(
  data: ContactSubmission
): Promise<ContactResult> {
  // Honeypot — silently drop bot fills
  if (data.website && data.website.trim() !== '') {
    return { ok: false, error: 'spam' }
  }

  // Minimal validation
  if (!data.name?.trim() || !data.email?.trim() || !data.message?.trim()) {
    return { ok: false, error: 'invalid' }
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    return { ok: false, error: 'invalid' }
  }

  if (!RESEND_API_KEY) {
    // Not yet configured — log so we can see local dev attempts, but tell the
    // user we couldn't send. UI falls back to the mailto: card.
    console.warn('[contact] RESEND_API_KEY not set; refusing to send')
    return { ok: false, error: 'not_configured' }
  }

  try {
    const resend = new Resend(RESEND_API_KEY)
    const { error } = await resend.emails.send({
      from: FROM_ADDRESS,
      to: TO_ADDRESS,
      replyTo: data.email,
      subject: `Enquiry: ${data.product || data.name} — albionexports.com`,
      text: buildText(data),
      html: buildHtml(data),
    })
    if (error) {
      console.error('[contact] resend error', error)
      return { ok: false, error: 'send_failed' }
    }
    return { ok: true }
  } catch (err) {
    console.error('[contact] unexpected error', err)
    return { ok: false, error: 'send_failed' }
  }
}
