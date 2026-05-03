'use client'

import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { X, ZoomIn } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import AnimatedSection from './AnimatedSection'

const images = [
  {
    src: 'https://images.unsplash.com/photo-1566438480900-0609be27a4be?q=80&w=1200&auto=format&fit=crop',
    alt: 'Tropical luxury pool',
    span: 'lg:col-span-2 lg:row-span-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=800&auto=format&fit=crop',
    alt: 'Luxury resort room',
    span: 'lg:col-span-1 lg:row-span-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1559827291-72ee739d0d9a?q=80&w=800&auto=format&fit=crop',
    alt: 'Jungle pool at sunset',
    span: 'lg:col-span-1 lg:row-span-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=1200&auto=format&fit=crop',
    alt: 'Caribbean beach paradise',
    span: 'lg:col-span-2 lg:row-span-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1586611292717-f828b167408c?q=80&w=800&auto=format&fit=crop',
    alt: 'Crystal cenote',
    span: 'lg:col-span-1 lg:row-span-1',
  },
]

export default function Gallery() {
  const { t } = useLanguage()
  const [lightbox, setLightbox] = useState<string | null>(null)
  const gridRef = useRef(null)
  const isInView = useInView(gridRef, { once: true, margin: '-80px' })

  const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  }
  const item = {
    hidden: { opacity: 0, scale: 0.97 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.75, ease: [0.25, 0.1, 0.25, 1] } },
  }

  return (
    <>
      <section className="py-24 md:py-36 bg-forest overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-14">
            <AnimatedSection>
              <span className="section-badge text-gold">{t.gallery.badge}</span>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h2 className="section-title text-cream">{t.gallery.title}</h2>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <p className="font-sans text-cream/40 leading-relaxed mt-4">
                {t.gallery.subtitle}
              </p>
            </AnimatedSection>
          </div>

          {/* Gallery grid */}
          <motion.div
            ref={gridRef}
            variants={stagger}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:grid-rows-[280px_280px]"
          >
            {images.map((img, i) => (
              <motion.div
                key={img.src}
                variants={item}
                onClick={() => setLightbox(img.src)}
                className={`group relative overflow-hidden cursor-pointer ${img.span} ${
                  i === 0 ? 'aspect-[4/3] sm:aspect-auto' : 'aspect-[4/3]'
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-forest-dark/0 group-hover:bg-forest-dark/30 transition-all duration-500 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-cream/10 backdrop-blur-sm border border-cream/20 rounded-full p-3">
                    <ZoomIn size={20} className="text-cream" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setLightbox(null)}
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 cursor-pointer"
        >
          <button
            className="absolute top-4 right-4 text-white/60 hover:text-white bg-white/10 rounded-full p-2 transition-colors"
            onClick={() => setLightbox(null)}
            aria-label="Close lightbox"
          >
            <X size={20} />
          </button>
          <div className="relative max-w-5xl w-full aspect-video">
            <Image
              src={lightbox}
              alt="Gallery image"
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>
        </motion.div>
      )}
    </>
  )
}
