'use client'

import { useInView } from 'react-intersection-observer'

interface TimelineEvent {
  date: string
  title: string
  description: string
  highlighted?: boolean
}

interface TimelineSectionProps {
  id?: string
  sectionTitle: string
  title: string
  events: TimelineEvent[]
  highlightedDate?: string
  className?: string
}

export function TimelineSection({
  id,
  sectionTitle,
  title,
  events,
  highlightedDate,
  className = '',
}: TimelineSectionProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section
      ref={ref}
      id={id}
      className={`py-24 md:py-32 px-4 md:px-8 max-w-4xl mx-auto ${className}`}
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

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent transform md:-translate-x-1/2"></div>

        {/* Events */}
        <div className="space-y-8">
          {events.map((event, index) => {
            const isHighlighted = highlightedDate === event.date || event.highlighted
            const isEvenIndex = index % 2 === 0

            return (
              <div
                key={index}
                className={`relative flex ${isEvenIndex ? 'md:flex-row' : 'md:flex-row-reverse'} transition-all duration-700 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
                style={{ transitionDelay: inView ? `${index * 0.15}s` : '0s' }}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-0 md:left-1/2 top-6 w-8 h-8 -ml-4 md:-ml-4 rounded-full border-4 transition-all duration-300 ${
                    isHighlighted
                      ? 'bg-primary border-primary shadow-lg shadow-primary/50 scale-125'
                      : 'bg-white border-primary'
                  }`}
                />

                {/* Content */}
                <div
                  className={`ml-20 md:ml-0 md:w-1/2 ${isEvenIndex ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'}`}
                >
                  <div
                    className={`p-6 rounded-lg transition-all duration-300 ${
                      isHighlighted
                        ? 'bg-primary/10 border-2 border-primary shadow-lg'
                        : 'bg-secondary/50 border border-border'
                    }`}
                  >
                    {/* Date */}
                    <p
                      className={`font-playfair text-lg font-bold mb-2 ${
                        isHighlighted
                          ? 'text-primary'
                          : 'text-foreground'
                      }`}
                    >
                      {event.date}
                    </p>

                    {/* Title */}
                    <h3 className="font-playfair text-xl font-semibold text-foreground mb-2">
                      {event.title}
                    </h3>

                    {/* Description */}
                    <p className="text-foreground/60 font-poppins text-sm md:text-base">
                      {event.description}
                    </p>

                    {isHighlighted && (
                      <p className="text-primary font-playfair italic mt-3 text-sm">
                        ✨ Um dia que mudou tudo
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
