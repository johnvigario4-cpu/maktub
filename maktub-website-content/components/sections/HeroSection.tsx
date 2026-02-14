'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/40 to-transparent"></div>

      <div className="relative z-10 text-center px-4 md:px-8 max-w-4xl mx-auto">
        {/* Main title with animation */}
        <div className="mb-6 animate-fade-in">
          <p className="text-lg md:text-xl text-primary font-playfair mb-4 opacity-90">
            O Destino
          </p>
          <h1 className="text-5xl md:text-7xl font-playfair font-bold text-foreground mb-4 leading-tight">
            Maktub.
          </h1>
          <p className="text-3xl md:text-5xl font-playfair text-primary mb-6">
            Nosso amor estava escrito.
          </p>
        </div>

        {/* Subtitle */}
        <div className="mb-12 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <p className="text-lg md:text-2xl text-foreground/70 font-poppins max-w-2xl mx-auto leading-relaxed">
            De uma amizade que atravessou o mundo, nasceu um amor que atravessará a vida.
          </p>
          <p className="text-base md:text-lg text-foreground/60 font-poppins mt-4">
            ♥ John & Renata
          </p>
        </div>

        {/* CTA Button */}
        <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <Button
            onClick={() => scrollToSection('section-2')}
            className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-full font-poppins font-semibold transition-all hover:scale-105"
          >
            Nossa História
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-primary"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  )
}
