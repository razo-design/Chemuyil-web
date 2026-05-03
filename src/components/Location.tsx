'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { MapPin, Clock } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import AnimatedSection from './AnimatedSection'

export default function Location() {
  const { t } = useLanguage()
  const listRef = useRef(null)
  const isInView = useInView(listRef, { once: true, margin: '-60px' })

  const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
  }
  const item = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.55, ease: 'easeOut' } },
  }

  return (
    <section id="ubicacion" className="py-24 md:py-36 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Map */}
          <AnimatedSection direction="left">
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden rounded-none border border-sand/40">
                <iframe
                  title="Ubicación Chemuyil Residencial, Tulum"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60344.45850318638!2d-87.5031799!3d20.2113447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4fd404b1b3e529%3A0xed29e8de24aa0a01!2sTulum%2C%20Quintana%20Roo%2C%20M%C3%A9xico!5e0!3m2!1ses!2smx!4v1700000000000!5m2!1ses!2smx"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'grayscale(20%) contrast(1.05)' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>

              {/* Location pin badge */}
              <div className="absolute -bottom-5 left-6 bg-forest-dark flex items-center gap-3 px-5 py-3">
                <MapPin size={14} className="text-gold shrink-0" />
                <span className="font-sans text-xs tracking-[0.2em] uppercase text-cream/80">
                  Tulum, Quintana Roo
                </span>
              </div>
            </div>
          </AnimatedSection>

          {/* Right: Content */}
          <div className="flex flex-col gap-6 pt-4">
            <AnimatedSection delay={0.1}>
              <span className="section-badge">{t.location.badge}</span>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <h2 className="section-title text-forest-dark">{t.location.title}</h2>
            </AnimatedSection>
            <AnimatedSection delay={0.3}>
              <p className="section-subtitle">{t.location.subtitle}</p>
            </AnimatedSection>

            {/* Distance list */}
            <motion.ul
              ref={listRef}
              variants={stagger}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className="flex flex-col gap-0 border border-sand/40 mt-2"
            >
              {t.location.points.map((point, i) => (
                <motion.li
                  key={point.label}
                  variants={item}
                  className={`group flex items-center justify-between px-6 py-4 hover:bg-forest hover:text-cream transition-all duration-300 cursor-default ${
                    i < t.location.points.length - 1 ? 'border-b border-sand/30' : ''
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <MapPin
                      size={13}
                      className="text-sage group-hover:text-gold transition-colors shrink-0"
                      strokeWidth={1.5}
                    />
                    <span className="font-sans text-sm text-forest-dark group-hover:text-cream transition-colors">
                      {point.label}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={11} className="text-gold/60 shrink-0" strokeWidth={1.5} />
                    <span className="font-sans text-xs font-semibold tracking-widest uppercase text-gold group-hover:text-gold transition-colors">
                      {point.distance}
                    </span>
                  </div>
                </motion.li>
              ))}
            </motion.ul>

            {/* Region note */}
            <AnimatedSection delay={0.5}>
              <div className="flex items-start gap-3 p-4 bg-forest-50 border-l-2 border-gold/50">
                <span className="font-sans text-xs text-forest/60 leading-relaxed">
                  Chemuyil Residencial se encuentra dentro de la Riviera Maya, uno de los corredores
                  turísticos de mayor crecimiento en el mundo.
                </span>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}
