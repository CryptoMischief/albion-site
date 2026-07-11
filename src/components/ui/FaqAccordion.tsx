import { ChevronDown } from 'lucide-react'

// Collapsible FAQ. Native <details> so it works without JS and keeps the answer
// text in the DOM (so FAQPage schema still validates). Add <FaqJsonLd> alongside.
export function FaqAccordion({
  items,
}: {
  items: { q: string; a: string }[]
}) {
  return (
    <div className="mt-6 divide-y divide-navy-100 border-y border-navy-100">
      {items.map((f) => (
        <details key={f.q} className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-base font-semibold text-navy-900 transition-colors hover:text-navy-700 [&::-webkit-details-marker]:hidden">
            <span>{f.q}</span>
            <ChevronDown className="size-5 shrink-0 text-navy-400 transition-transform duration-200 group-open:rotate-180" />
          </summary>
          <p className="pb-5 pr-8 text-sm leading-relaxed text-mute sm:text-base">
            {f.a}
          </p>
        </details>
      ))}
    </div>
  )
}
