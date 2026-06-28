import { cookies, headers } from 'next/headers'

export type Region = 'cn' | 'global'

const CN_COUNTRY = 'CN'

/**
 * Resolve the region of the current request:
 *   1. The `region` cookie (set by the proxy after the first response).
 *   2. The Vercel/Cloudflare geo header on the request (works on first visit
 *      before the cookie is set).
 *   3. Fall back to 'global' in local dev where neither exists.
 */
export async function getRegion(): Promise<Region> {
  const c = await cookies()
  const cookieRegion = c.get('region')?.value
  if (cookieRegion === 'cn' || cookieRegion === 'global') return cookieRegion

  const h = await headers()
  const stamped = h.get('x-user-region')
  if (stamped === 'cn' || stamped === 'global') return stamped

  const country =
    h.get('x-vercel-ip-country') ?? h.get('cf-ipcountry')
  return regionFromCountry(country)
}

export function regionFromCountry(country: string | null | undefined): Region {
  return country?.toUpperCase() === CN_COUNTRY ? 'cn' : 'global'
}
