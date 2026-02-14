'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'

interface AnimatedTextProps {
  text: string | string[]
  className?: string
  staggerDelay?: number
  typewriter?: boolean
  typewriterSpeed?: number
}

export function AnimatedText({
  text,
  className = '',
  staggerDelay = 0.1,
  typewriter = false,
  typewriterSpeed = 50,
}: AnimatedTextProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const [displayedText, setDisplayedText] = useState(typewriter ? '' : undefined)
  const textArray = Array.isArray(text) ? text : [text]

  useEffect(() => {
    if (!typewriter || !inView) return

    let index = 0
    const fullText = textArray.join(' ')
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(interval)
      }
    }, typewriterSpeed)

    return () => clearInterval(interval)
  }, [inView, typewriter, typewriterSpeed, textArray])

  if (Array.isArray(text)) {
    return (
      <div ref={ref} className={className}>
        {textArray.map((line, i) => (
          <div
            key={i}
            className={`${inView ? 'animate-fade-in-up' : 'opacity-0'}`}
            style={{
              transitionDelay: inView ? `${i * staggerDelay}s` : '0s',
            }}
          >
            {line}
          </div>
        ))}
      </div>
    )
  }

  return (
    <div
      ref={ref}
      className={`${inView ? 'animate-fade-in-up' : 'opacity-0'} ${className}`}
    >
      {typewriter ? displayedText : text}
    </div>
  )
}
