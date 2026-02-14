'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'

interface GalleryItem {
  src: string
  alt: string
  caption?: string
  quote?: string
}

interface GallerySectionProps {
  id?: string
  sectionTitle: string
  title: string
  items: GalleryItem[]
  columns?: number
  className?: string
}

export function GallerySection({
  id,
  sectionTitle,
  title,
  items,
  columns = 3,
  className = '',
}: GallerySectionProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const gridClasses = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
  }

  return (
    <section
      ref={ref}
      id={id}
      className={`py-24 md:py-32 px-4 md:px-8 max-w-6xl mx-auto ${className}`}
    >
      {/* Section label */}
      <div className="mb-4">
        <p className="text-primary font-playfair text-lg md:text-xl opacity-80">
          {sectionTitle}
        </p>
      </div>

      {/* Main title */}
      <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-12">
        {title}
      </h2>

      {/* Gallery grid */}
      <div className={`grid ${gridClasses[columns as keyof typeof gridClasses]} gap-6`}>
        {items.map((item, index) => (
          <div
            key={index}
            className={`group relative overflow-hidden rounded-lg cursor-pointer transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: inView ? `${index * 0.1}s` : '0s' }}
            onClick={() => setSelectedImage(item)}
          >
            {/* Image container */}
            <div className="relative h-64 md:h-72 bg-muted overflow-hidden">
              <div className="relative w-full h-full bg-gradient-to-br from-secondary to-accent/20">
                <div className="absolute inset-0 flex items-center justify-center text-foreground/30 text-center p-4">
                  <p className="text-sm md:text-base font-playfair">{item.alt}</p>
                </div>
              </div>
            </div>

            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              {item.caption && (
                <p className="text-white font-poppins text-sm md:text-base">
                  {item.caption}
                </p>
              )}
              {item.quote && (
                <p className="text-white font-playfair text-base italic">
                  "{item.quote}"
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
            {/* Close button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-8 right-0 text-white hover:text-primary text-2xl z-10"
            >
              ×
            </button>

            {/* Image display area */}
            <div className="bg-white rounded-lg p-4">
              <div className="bg-gradient-to-br from-secondary to-accent/20 rounded p-8 min-h-96 flex items-center justify-center">
                <div className="text-center text-foreground/50">
                  <p className="text-lg font-playfair mb-4">{selectedImage.alt}</p>
                  {selectedImage.caption && (
                    <p className="text-foreground/40 font-poppins text-sm">
                      {selectedImage.caption}
                    </p>
                  )}
                  {selectedImage.quote && (
                    <p className="text-foreground/60 font-playfair italic text-base mt-4">
                      "{selectedImage.quote}"
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
