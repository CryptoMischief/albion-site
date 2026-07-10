'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronDown, ArrowUpRight } from 'lucide-react'
import { Link } from '@/i18n/navigation'
import { ProductDetail } from '@/components/products/ProductDetail'
import type { Locale, Product } from '@/data/products'

export function ProductAccordionItem({
  p,
  L,
  enquire,
  viewLabel,
}: {
  p: Product
  L: Locale
  enquire: string
  viewLabel: string
}) {
  const [open, setOpen] = useState(false)

  return (
    <div className="overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-sm transition-colors hover:border-navy-200">
      {/* Collapsed row — click to expand */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex w-full items-center gap-4 p-3 text-left transition-colors hover:bg-navy-50/40 sm:gap-5 sm:p-4"
      >
        <div className="relative size-16 shrink-0 overflow-hidden rounded-xl bg-paper sm:size-20">
          <Image
            src={p.images[0]}
            alt=""
            fill
            sizes="80px"
            className="object-cover"
          />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="truncate text-base font-semibold text-navy-900 sm:text-lg">
            {p.name[L]}
          </h3>
          <p className="mt-0.5 line-clamp-2 text-sm leading-relaxed text-mute">
            {p.blurb[L]}
          </p>
        </div>
        {p.certs.length > 0 && (
          <div className="hidden shrink-0 flex-wrap justify-end gap-1 lg:flex lg:max-w-[16rem]">
            {p.certs.map((c) => (
              <span
                key={c}
                className="rounded-full bg-paper px-2 py-0.5 text-[10px] font-medium text-navy-600"
              >
                {c}
              </span>
            ))}
          </div>
        )}
        <ChevronDown
          className={`size-5 shrink-0 text-navy-400 transition-transform duration-200 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>

      {/* Expanded detail */}
      {open && (
        <div className="border-t border-navy-100 p-4 sm:p-6">
          <ProductDetail p={p} L={L} enquire={enquire} />
          <Link
            href={`/products/${p.slug}`}
            className="group mt-5 inline-flex items-center gap-1 text-sm font-semibold text-navy-700 hover:text-navy-900"
          >
            {viewLabel}
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      )}
    </div>
  )
}
