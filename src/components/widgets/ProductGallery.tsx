'use client'

import { useState } from 'react'
import Image from 'next/image'

export function ProductGallery({
  images,
  alt,
}: {
  images: string[]
  alt: string
}) {
  const [active, setActive] = useState(0)
  return (
    <div>
      <div className="relative aspect-[4/3] overflow-hidden rounded-t-3xl bg-navy-50">
        <Image
          src={images[active]}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
      {images.length > 1 && (
        <div className="flex gap-2 px-3 pt-3">
          {images.map((img, i) => (
            <button
              key={img}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`View image ${i + 1}`}
              className={`relative size-14 shrink-0 overflow-hidden rounded-lg border-2 transition-colors ${
                i === active ? 'border-navy-700' : 'border-transparent opacity-70 hover:opacity-100'
              }`}
            >
              <Image src={img} alt="" fill sizes="56px" className="object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
