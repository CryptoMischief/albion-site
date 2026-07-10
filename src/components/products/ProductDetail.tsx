import { ArrowRight } from 'lucide-react'
import { Link } from '@/i18n/navigation'
import { ProductGallery } from '@/components/widgets/ProductGallery'
import type { Locale, Product } from '@/data/products'

export function ProductDetail({
  p,
  L,
  enquire,
}: {
  p: Product
  L: Locale
  enquire: string
}) {
  return (
    <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
      <ProductGallery images={p.images} alt={p.name[L]} />
      <div>
        <p className="text-sm leading-relaxed text-mute">{p.blurb[L]}</p>
        <dl className="mt-4 space-y-1.5 text-sm">
          {p.specs.map((s) => (
            <div key={s.label.en} className="flex gap-2">
              <dt className="w-28 shrink-0 text-mute">{s.label[L]}</dt>
              <dd className="text-navy-800">{s.value}</dd>
            </div>
          ))}
        </dl>
        {p.certs.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {p.certs.map((c) => (
              <span
                key={c}
                className="rounded-full bg-paper px-2.5 py-0.5 text-[11px] font-medium text-navy-700"
              >
                {c}
              </span>
            ))}
          </div>
        )}
        {p.video && (
          <video
            controls
            playsInline
            preload="metadata"
            className="mx-auto mt-4 block max-h-[480px] w-auto max-w-full rounded-xl"
          >
            <source src={`${p.video}#t=0.1`} type="video/mp4" />
          </video>
        )}
        <Link
          href={`/contact?product=${encodeURIComponent(p.name.en)}`}
          className="group mt-5 inline-flex h-10 items-center justify-center gap-1.5 rounded-full bg-navy-900 px-4 text-sm font-semibold text-white transition-colors hover:bg-navy-800"
        >
          {enquire}
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </div>
  )
}
