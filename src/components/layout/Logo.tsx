import Image from 'next/image'
import { Link } from '@/i18n/navigation'

export function Logo({
  size = 'md',
  variant = 'colour',
  withWordmark = true,
}: {
  size?: 'sm' | 'md' | 'lg'
  variant?: 'colour' | 'mono'
  withWordmark?: boolean
}) {
  const px = size === 'sm' ? 40 : size === 'md' ? 56 : 80
  return (
    <Link
      href="/"
      className="inline-flex items-center"
      aria-label="Albion Exports"
    >
      <Image
        src={variant === 'mono' ? '/brand/logo-mono.png' : '/brand/logo-colour.png'}
        alt="Albion Exports"
        width={px}
        height={px}
        priority
      />
      {withWordmark && (
        <span className="sr-only">Albion Exports</span>
      )}
    </Link>
  )
}
