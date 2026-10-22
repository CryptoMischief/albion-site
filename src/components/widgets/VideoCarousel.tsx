'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Play } from 'lucide-react'
import { videoUrl, type Video } from '@/data/youtube'

type Labels = {
  /** Accessible name for the scroller. */
  region: string
  prev: string
  next: string
  film: string
  short: string
}

export function VideoCarousel({
  videos,
  labels,
}: {
  videos: Video[]
  labels: Labels
}) {
  const trackRef = useRef<HTMLDivElement>(null)
  const [atStart, setAtStart] = useState(true)
  const [atEnd, setAtEnd] = useState(false)

  // Arrows are hints, not controls people hunt for — hide them when there's
  // nothing left that way so the row doesn't look broken at either end.
  const sync = useCallback(() => {
    const el = trackRef.current
    if (!el) return
    const max = el.scrollWidth - el.clientWidth
    setAtStart(el.scrollLeft <= 2)
    setAtEnd(el.scrollLeft >= max - 2)
  }, [])

  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    sync()
    el.addEventListener('scroll', sync, { passive: true })
    window.addEventListener('resize', sync)
    return () => {
      el.removeEventListener('scroll', sync)
      window.removeEventListener('resize', sync)
    }
  }, [sync])

  const nudge = (dir: 1 | -1) => {
    const el = trackRef.current
    if (!el) return
    // Scroll by roughly one viewport so cards never land half-cut.
    el.scrollBy({ left: dir * Math.round(el.clientWidth * 0.85), behavior: 'smooth' })
  }

  return (
    <div className="relative">
      <div
        ref={trackRef}
        role="region"
        aria-label={labels.region}
        tabIndex={0}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {videos.map((v) => (
          <a
            key={v.id}
            href={videoUrl(v)}
            target="_blank"
            rel="noopener noreferrer"
            className="group/vid w-[15rem] shrink-0 snap-start sm:w-[19rem]"
          >
            <div
              className={`relative overflow-hidden rounded-2xl bg-navy-900 shadow-sm ring-1 ring-navy-100 transition-shadow duration-300 group-hover/vid:shadow-md ${
                v.kind === 'short' ? 'aspect-[9/13]' : 'aspect-video'
              }`}
            >
              <Image
                src={`/youtube/${v.id}.jpg`}
                alt=""
                fill
                sizes="(max-width: 640px) 60vw, 19rem"
                className="object-cover transition-transform duration-500 group-hover/vid:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/75 via-navy-900/10 to-transparent" />

              <span className="absolute left-3 top-3 rounded-full bg-navy-900/80 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/90 backdrop-blur-sm">
                {v.kind === 'short' ? labels.short : labels.film}
              </span>

              <span className="absolute inset-0 flex items-center justify-center">
                <span className="flex size-12 items-center justify-center rounded-full bg-white/90 shadow-lg transition-transform duration-300 group-hover/vid:scale-110">
                  <Play className="ml-0.5 size-5 fill-navy-900 text-navy-900" />
                </span>
              </span>

              <p className="absolute inset-x-0 bottom-0 line-clamp-2 p-3 text-sm font-medium leading-snug text-white sm:p-4">
                {v.title}
              </p>
            </div>
          </a>
        ))}
      </div>

      <button
        type="button"
        onClick={() => nudge(-1)}
        aria-label={labels.prev}
        className={`absolute -left-3 top-1/2 hidden size-10 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md ring-1 ring-navy-100 transition hover:bg-paper md:flex ${
          atStart ? 'pointer-events-none opacity-0' : 'opacity-100'
        }`}
      >
        <ChevronLeft className="size-5 text-navy-900" />
      </button>
      <button
        type="button"
        onClick={() => nudge(1)}
        aria-label={labels.next}
        className={`absolute -right-3 top-1/2 hidden size-10 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md ring-1 ring-navy-100 transition hover:bg-paper md:flex ${
          atEnd ? 'pointer-events-none opacity-0' : 'opacity-100'
        }`}
      >
        <ChevronRight className="size-5 text-navy-900" />
      </button>
    </div>
  )
}
