'use client'

import { useEffect, useRef, useState } from 'react'

/** Animated progress bar — fills from 0 to `value` when scrolled into view. */
export function ProgressBar({
  value,
  label,
}: {
  value: number
  label: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [fill, setFill] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // slight delay so the user sees the fill happen
          requestAnimationFrame(() => setFill(value))
          observer.disconnect()
        }
      },
      { threshold: 0.4 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [value])

  return (
    <div ref={ref}>
      <div className="flex items-center justify-between text-xs">
        <span className="font-medium uppercase tracking-[0.14em] text-navy-600">
          {label}
        </span>
        <span className="font-mono font-semibold text-navy-800">{value}%</span>
      </div>
      <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-navy-100">
        <div
          className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 transition-[width] duration-[1200ms] ease-out"
          style={{ width: `${fill}%` }}
        />
      </div>
    </div>
  )
}
