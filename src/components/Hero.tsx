'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { MessageCircle, ChevronDown } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

const WA_LINK =
  'https://wa.me/5219841234567?text=Hola%2C%20me%20interesa%20saber%20m%C3%A1s%20sobre%20los%20lotes%20de%20Chemuyil%20Residencial%20en%20Tulum.'

export default function Hero() {
  const { t } = useLanguage()

  const scrollToAbout = () => {
    document.querySelector('#nosotros')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1505118380757-91f5f5632de0?q=85&w=2400&auto=format&fit=crop"
          alt="Tulum tropical landscape"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Multi-layer overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-forest-dark/80 via-forest-dark/50 to-forest-dark/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-dark/40 via-transparent to-transparent" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/3 right-10 w-px h-48 bg-gradient-to-b from-transparent via-gold/30 to-transparent hidden lg:block" />
      <div className="absolute bottom-1/3 left-10 w-px h-48 bg-gradient-to-b from-transparent via-gold/20 to-transparent hidden lg:block" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-24 pb-32 flex flex-col items-start">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="w-8 h-px bg-gold" />
          <span className="font-sans text-xs font-medium tracking-[0.35em] uppercase text-gold">
            {t.hero.badge}
          </span>
        </motion.div>

        {/* Headline */}
        <div className="mb-8 max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-cream leading-none"
          >
            {t.hero.headline1}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-none"
            style={{
              background: 'linear-gradient(135deg, #C4944A 0%, #D4BC7A 50%, #C4944A 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {t.hero.headline2}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-cream/70 leading-tight mt-2"
          >
            {t.hero.headline3}
          </motion.p>
        </div>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.75 }}
          className="font-sans text-base md:text-lg text-cream/60 leading-relaxed max-w-xl mb-12"
        >
          {t.hero.subheadline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 items-start sm:items-center"
        >
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 bg-gold hover:bg-gold-dark text-white font-sans font-semibold tracking-[0.15em] text-sm uppercase px-8 py-4 transition-all duration-300 hover:shadow-2xl hover:shadow-gold/30 active:scale-[0.98]"
          >
            <MessageCircle size={18} className="group-hover:scale-110 transition-transform" />
            {t.hero.cta}
          </a>
          <p className="font-sans text-xs text-cream/40 tracking-wider">
            {t.hero.ctaSub}
          </p>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="flex items-center gap-8 mt-16 pt-8 border-t border-cream/10"
        >
          {[
            { value: '575+', label: 'm² por lote' },
            { value: 'Tulum', label: 'Q. Roo, México' },
            { value: '100%', label: 'Sustentable' },
          ].map((stat) => (
            <div key={stat.value} className="flex flex-col">
              <span className="font-serif text-2xl md:text-3xl text-gold font-light">{stat.value}</span>
              <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-cream/40 mt-0.5">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cream/40 hover:text-cream/70 transition-colors group"
        aria-label="Scroll down"
      >
        <span className="font-sans text-[10px] tracking-[0.3em] uppercase">
          {t.hero.scroll}
        </span>
        <ChevronDown size={16} className="animate-scroll-hint" />
      </motion.button>
    </section>
  )
}
