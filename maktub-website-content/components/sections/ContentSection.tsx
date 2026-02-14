'use client'

import { AnimatedText } from '@/components/ui/AnimatedText'
import { ReactNode } from 'react'
import { useInView } from 'react-intersection-observer'

interface ContentSectionProps {
  id?: string
  sectionTitle: string
  title: string
  subtitle?: string
  content: string | string[]
  children?: ReactNode
  className?: string
  layout?: 'default' | 'centered' | 'split'
}

export function ContentSection({
  id,
  sectionTitle,
  title,
  subtitle,
  content,
  children,
  className = '',
  layout = 'default',
}: ContentSectionProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const layoutClasses = {
    default: 'text-left',
    centered: 'text-center',
    split: 'grid md:grid-cols-2 gap-8 items-center',
  }

  return (
    <section
      ref={ref}
      id={id}
      className={`py-24 md:py-32 px-4 md:px-8 max-w-6xl mx-auto ${className}`}
    >
      {/* Section label */}
      <div className={`mb-4 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <p className="text-primary font-playfair text-lg md:text-xl opacity-80">
          {sectionTitle}
        </p>
      </div>

      {/* Main title */}
      <h2 className={`text-4xl md:text-5xl font-playfair font-bold text-foreground mb-6 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: inView ? '0.1s' : '0s' }}>
        {title}
      </h2>

      {/* Subtitle if provided */}
      {subtitle && (
        <p className={`text-lg md:text-xl text-foreground/60 font-poppins mb-8 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: inView ? '0.2s' : '0s' }}>
          {subtitle}
        </p>
      )}

      {/* Content with animation */}
      <div className={`${layoutClasses[layout]} transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: inView ? '0.3s' : '0s' }}>
        <div className="mb-8">
          {Array.isArray(content) ? (
            <div className="space-y-4">
              {content.map((paragraph, i) => (
                <p
                  key={i}
                  className="text-lg leading-relaxed text-foreground/70 font-poppins"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          ) : (
            <p className="text-lg leading-relaxed text-foreground/70 font-poppins">
              {content}
            </p>
          )}
        </div>

        {/* Additional children content */}
        {children && <div>{children}</div>}
      </div>
    </section>
  )
}
