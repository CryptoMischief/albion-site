'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

export function ProductGallery({
  images,
  alt,
}: {
  images: string[]
  alt: string
}) {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const timer = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    if (images.length < 2 || paused) return
    timer.current = setInterval(
      () => setActive((i) => (i + 1) % images.length),
      3500
    )
    return () => {
      if (timer.current) clearInterval(timer.current)
    }
  }, [images.length, paused])

  return (
    <div
      className="relative aspect-[4/3] overflow-hidden rounded-t-3xl bg-navy-50"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {images.map((img, i) => (
        <Image
          key={img}
          src={img}
          alt={i === active ? alt : ''}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className={`object-cover transition-opacity duration-700 ${
            i === active ? 'opacity-100' : 'opacity-0'
          }`}
          priority={i === 0}
        />
      ))}
      {images.length > 1 && (
        <div className="absolute inset-x-0 bottom-0 flex justify-center gap-1.5 p-3">
          {images.map((img, i) => (
            <button
              key={img}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`View image ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                i === active ? 'w-5 bg-white' : 'w-1.5 bg-white/60 hover:bg-white/90'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
