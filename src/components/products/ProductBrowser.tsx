'use client'

import { useMemo, useState } from 'react'
import { ProductAccordionItem } from '@/components/products/ProductAccordionItem'
import type { Locale, Product } from '@/data/products'

const OTHER = 'other'

export function ProductBrowser({
  products,
  L,
  enquire,
  viewLabel,
  subLabels,
  subOrder,
  allLabel,
  moreLabel,
}: {
  products: Product[]
  L: Locale
  enquire: string
  viewLabel: string
  subLabels: Record<string, string>
  subOrder: string[]
  allLabel: string
  moreLabel: string
}) {
  const keyOf = (p: Product) => p.subcategory ?? OTHER
  const labelFor = (k: string) => (k === OTHER ? moreLabel : (subLabels[k] ?? k))

  const present = useMemo(() => {
    const set = new Set<string>(products.map(keyOf))
    const ordered = subOrder.filter((k) => set.has(k))
    if (set.has(OTHER)) ordered.push(OTHER)
    return ordered
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [products, subOrder])

  const [active, setActive] = useState<string>('all')
  const showPills = present.length >= 2

  const grid = (items: Product[]) => (
    <div className="mt-6 space-y-3">
      {items.map((p) => (
        <ProductAccordionItem
          key={p.slug}
          p={p}
          L={L}
          enquire={enquire}
          viewLabel={viewLabel}
        />
      ))}
    </div>
  )

  const tabs = [
    { key: 'all', label: allLabel, count: products.length },
    ...present.map((k) => ({
      key: k,
      label: labelFor(k),
      count: products.filter((p) => keyOf(p) === k).length,
    })),
  ]

  return (
    <div>
      {showPills && (
        <div className="sticky top-16 z-20 -mx-4 mb-2 border-b border-navy-100 bg-paper/90 px-4 py-3 backdrop-blur">
          <div className="flex gap-2 overflow-x-auto pb-0.5 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {tabs.map((tb) => {
              const on = active === tb.key
              return (
                <button
                  key={tb.key}
                  type="button"
                  onClick={() => setActive(tb.key)}
                  aria-pressed={on}
                  className={`inline-flex shrink-0 items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                    on
                      ? 'bg-navy-900 text-white'
                      : 'border border-navy-200 bg-white text-navy-700 hover:border-navy-300 hover:bg-navy-50'
                  }`}
                >
                  {tb.label}
                  <span
                    className={`text-xs font-normal ${on ? 'text-white/70' : 'text-mute'}`}
                  >
                    {tb.count}
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      )}

      {active === 'all' && showPills ? (
        <div className="space-y-12">
          {present.map((k) => (
            <section key={k} className="scroll-mt-32">
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-navy-600">
                {labelFor(k)}
              </h3>
              {grid(products.filter((p) => keyOf(p) === k))}
            </section>
          ))}
        </div>
      ) : (
        grid(
          active === 'all'
            ? products
            : products.filter((p) => keyOf(p) === active)
        )
      )}
    </div>
  )
}
