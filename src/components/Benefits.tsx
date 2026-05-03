'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Leaf, TrendingUp, MapPin, Star, Wind, Sun } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import AnimatedSection from './AnimatedSection'

const icons = [Leaf, TrendingUp, MapPin, Star, Wind, Sun]

export default function Benefits() {
  const { t } = useLanguage()
  const gridRef = useRef(null)
  const isInView = useInView(gridRef, { once: true, margin: '-80px' })

  const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  }
  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.25, 0.1, 0.25, 1] } },
  }

  return (
    <section id="beneficios" className="py-24 md:py-36 bg-cream-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <AnimatedSection>
            <span className="section-badge">{t.benefits.badge}</span>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="section-title text-forest-dark">{t.benefits.title}</h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="section-subtitle mx-auto mt-4 text-center">{t.benefits.subtitle}</p>
          </AnimatedSection>
        </div>

        {/* Benefits grid */}
        <motion.div
          ref={gridRef}
          variants={stagger}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-sand/30"
        >
          {t.benefits.items.map((benefit, i) => {
            const Icon = icons[i]
            return (
              <motion.div
                key={benefit.title}
                variants={item}
                className="group bg-cream-dark hover:bg-forest hover:text-cream p-8 md:p-10 flex flex-col gap-5 transition-all duration-500 cursor-default"
              >
                {/* Icon */}
                <div className="w-12 h-12 flex items-center justify-center border border-forest/10 group-hover:border-gold/30 transition-colors duration-500">
                  <Icon
                    size={20}
                    className="text-sage group-hover:text-gold transition-colors duration-500"
                    strokeWidth={1.5}
                  />
                </div>

                {/* Text */}
                <div>
                  <h3 className="font-serif text-xl font-light text-forest-dark group-hover:text-cream mb-2 transition-colors duration-500">
                    {benefit.title}
                  </h3>
                  <p className="font-sans text-sm text-forest/55 group-hover:text-cream/60 leading-relaxed transition-colors duration-500">
                    {benefit.desc}
                  </p>
                </div>

                {/* Decorative line */}
                <div className="w-8 h-px bg-gold/30 group-hover:w-12 group-hover:bg-gold/60 transition-all duration-500 mt-auto" />
              </motion.div>
            )
          })}
        </motion.div>

        {/* Quote strip */}
        <AnimatedSection delay={0.2} className="mt-16 md:mt-20">
          <div className="relative border border-sand py-10 px-8 md:px-14 text-center overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-cream-dark px-4">
              <span className="font-serif text-4xl text-gold/20">&ldquo;</span>
            </div>
            <p className="font-serif text-xl md:text-2xl lg:text-3xl font-light text-forest-dark/70 italic text-balance leading-relaxed max-w-3xl mx-auto">
              Invierte en el corazón de Tulum y construye el futuro que imaginas.
            </p>
            <div className="mt-4 flex items-center justify-center gap-3">
              <span className="w-8 h-px bg-gold/40" />
              <span className="font-sans text-xs tracking-[0.3em] uppercase text-gold/60">
                Chemuyil Residencial
              </span>
              <span className="w-8 h-px bg-gold/40" />
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
