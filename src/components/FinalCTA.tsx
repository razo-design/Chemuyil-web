'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { MessageCircle, ChevronRight } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import AnimatedSection from './AnimatedSection'

const WA_LINK =
  'https://wa.me/5219841234567?text=Hola%2C%20me%20interesa%20saber%20m%C3%A1s%20sobre%20los%20lotes%20de%20Chemuyil%20Residencial%20en%20Tulum.%20%C2%BFMe%20pueden%20dar%20m%C3%A1s%20informaci%C3%B3n%3F'

export default function FinalCTA() {
  const { t } = useLanguage()

  return (
    <section className="relative py-32 md:py-48 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1573750328991-c4a9f41e3aa4?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Luxury Tulum architecture"
          fill
          sizes="100vw"
          className="object-cover object-center"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-forest-dark/92 via-forest-dark/85 to-forest/90" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-gold/5 rounded-full pointer-events-none hidden lg:block" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-gold/5 rounded-full pointer-events-none hidden lg:block" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-10 text-center">
        {/* Badge */}
        <AnimatedSection>
          <div className="flex items-center justify-center gap-3 mb-8">
            <span className="w-8 h-px bg-gold/40" />
            <span className="font-sans text-xs font-medium tracking-[0.35em] uppercase text-gold">
              {t.cta.badge}
            </span>
            <span className="w-8 h-px bg-gold/40" />
          </div>
        </AnimatedSection>

        {/* Title */}
        <AnimatedSection delay={0.1}>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-cream leading-tight text-balance mb-6">
            {t.cta.title}
          </h2>
        </AnimatedSection>

        {/* Subtitle */}
        <AnimatedSection delay={0.2}>
          <p className="font-sans text-base md:text-lg text-cream/55 leading-relaxed max-w-xl mx-auto mb-12">
            {t.cta.subtitle}
          </p>
        </AnimatedSection>

        {/* CTA Button */}
        <AnimatedSection delay={0.35}>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-4 bg-gold hover:bg-gold-dark text-white font-sans font-semibold tracking-[0.15em] text-sm uppercase px-10 py-5 transition-all duration-300 hover:shadow-2xl hover:shadow-gold/30 active:scale-[0.98]"
          >
            <MessageCircle
              size={18}
              className="group-hover:scale-110 transition-transform duration-300"
            />
            <span>{t.cta.button}</span>
            <ChevronRight
              size={16}
              className="opacity-60 group-hover:translate-x-1 transition-transform duration-300"
            />
          </a>
        </AnimatedSection>

        {/* Note */}
        <AnimatedSection delay={0.45}>
          <p className="font-sans text-xs text-cream/30 tracking-wider mt-6">
            {t.cta.note}
          </p>
        </AnimatedSection>

        {/* Trust markers */}
        <AnimatedSection delay={0.55}>
          <div className="flex items-center justify-center gap-8 mt-16 pt-8 border-t border-cream/10">
            {[
              { icon: '🌿', label: 'Ciudad Sustentable' },
              { icon: '📍', label: 'Tulum, México' },
              { icon: '💎', label: 'Luxury Real Estate' },
            ].map((marker) => (
              <div key={marker.label} className="flex items-center gap-2">
                <span className="text-lg">{marker.icon}</span>
                <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-cream/30">
                  {marker.label}
                </span>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
