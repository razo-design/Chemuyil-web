'use client'

import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { MessageCircle, ArrowUpRight } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import AnimatedSection from './AnimatedSection'

const WA_LINK =
  'https://wa.me/5219841234567?text=Hola%2C%20me%20interesa%20saber%20m%C3%A1s%20sobre%20los%20lotes%20de%20Chemuyil%20Residencial%20en%20Tulum.'

const cardImages = [
  'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1496080174650-637e3f22fa03?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=800&auto=format&fit=crop',
]

export default function LotUses() {
  const { t } = useLanguage()
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: '-80px' })

  const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  }

  const cardVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } },
  }

  return (
    <section id="usos" className="py-24 md:py-36 bg-forest-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <AnimatedSection delay={0}>
              <span className="section-badge text-gold">{t.uses.badge}</span>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h2 className="section-title text-cream">{t.uses.title}</h2>
            </AnimatedSection>
          </div>
          <AnimatedSection delay={0.2} className="max-w-md">
            <p className="font-sans text-cream/50 leading-relaxed text-sm md:text-base">
              {t.uses.subtitle}
            </p>
          </AnimatedSection>
        </div>

        {/* Cards grid */}
        <motion.div
          ref={containerRef}
          variants={stagger}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-forest-light/30"
        >
          {t.uses.cards.map((card, i) => (
            <motion.a
              key={card.title}
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              variants={cardVariant}
              className="group bg-forest-dark flex flex-col overflow-hidden cursor-pointer"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={cardImages[i]}
                  alt={card.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-dark via-forest-dark/20 to-transparent" />

                {/* Number */}
                <div className="absolute top-4 left-4">
                  <span className="font-serif text-5xl font-light text-cream/10 group-hover:text-gold/20 transition-colors duration-500">
                    0{i + 1}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1 border-t border-forest-light/20 group-hover:border-gold/20 transition-colors duration-500">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-serif text-xl font-light text-cream group-hover:text-gold transition-colors duration-300">
                    {card.title}
                  </h3>
                  <ArrowUpRight
                    size={16}
                    className="text-gold/0 group-hover:text-gold/80 transition-all duration-300 mt-1 ml-2 shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </div>
                <p className="font-sans text-sm text-cream/50 leading-relaxed flex-1">
                  {card.desc}
                </p>
                <div className="mt-4 pt-4 border-t border-forest-light/20">
                  <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-gold/60">
                    {card.detail}
                  </p>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <AnimatedSection delay={0.3} className="flex justify-center mt-12">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 border border-gold/40 hover:border-gold hover:bg-gold/10 text-gold font-sans text-xs font-semibold tracking-[0.25em] uppercase px-8 py-4 transition-all duration-300"
          >
            <MessageCircle size={14} />
            <span>Consultar disponibilidad</span>
          </a>
        </AnimatedSection>
      </div>
    </section>
  )
}
