import createIntlMiddleware from 'next-intl/middleware'
import { NextResponse, type NextRequest } from 'next/server'
import { routing } from '@/i18n/routing'
import { regionFromCountry, type Region } from '@/lib/region'

const intl = createIntlMiddleware(routing)

const WWW_HOST = 'www.albionexports.com'
const APEX_HOST = 'albionexports.com'

/**
 * Three jobs, in order:
 *   1. Force canonical host: www.albionexports.com → apex (single 308, before
 *      anything else, so the locale redirect never adds a second hop).
 *   2. Locale routing via next-intl (en / zh path segments).
 *   3. Geo split: stamp a `region` cookie (cn | global) so server components
 *      can render the correct script bundle without a client roundtrip.
 *
 * Region override channels for previewing:
 *   - cookie:  `region=cn` or `region=global`
 *   - query:   `?region=cn` or `?region=global` (also sets the cookie)
 */
export function proxy(request: NextRequest) {
  const url = request.nextUrl

  // 1. Canonical host. Vercel rewrites the inbound `Host` header internally,
  //    so the *user-requested* host is in `x-forwarded-host`. Fall back to
  //    `host` for local dev. Local dev (localhost) and Vercel preview URLs
  //    pass straight through.
  const host = (
    request.headers.get('x-forwarded-host') ||
    request.headers.get('host') ||
    ''
  ).toLowerCase()
  if (host === WWW_HOST) {
    const redirectUrl = url.clone()
    redirectUrl.host = APEX_HOST
    redirectUrl.protocol = 'https:'
    return NextResponse.redirect(redirectUrl, 308)
  }

  // 2 & 3 — locale routing and region cookie.
  const queryRegion = url.searchParams.get('region')
  const cookieRegion = request.cookies.get('region')?.value
  const valid = (v: string | null | undefined): v is Region =>
    v === 'cn' || v === 'global'
  const override: Region | null = valid(queryRegion)
    ? queryRegion
    : valid(cookieRegion)
      ? cookieRegion
      : null

  const country =
    request.headers.get('x-vercel-ip-country') ||
    request.headers.get('cf-ipcountry')
  const region: Region = override ?? regionFromCountry(country)

  const response = intl(request)
  response.headers.set('x-user-region', region)
  response.cookies.set('region', region, {
    path: '/',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 30,
  })

  return response
}

export const config = {
  matcher: [
    // Run on all pages but skip Next internals, the public/brand assets, and
    // common file extensions / metadata files.
    '/((?!_next|api|favicon\\.ico|robots\\.txt|sitemap\\.xml|brand/|.*\\..*).*)',
  ],
}
