'use client'

import Image from 'next/image'
import { MessageCircle } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import AnimatedSection from './AnimatedSection'

const WA_LINK =
  'https://wa.me/5219841234567?text=Hola%2C%20me%20interesa%20saber%20m%C3%A1s%20sobre%20los%20lotes%20de%20Chemuyil%20Residencial%20en%20Tulum.'

export default function About() {
  const { t } = useLanguage()

  const stats = [
    { value: t.about.stat1, label: t.about.stat1label },
    { value: t.about.stat2, label: t.about.stat2label },
    { value: t.about.stat3, label: t.about.stat3label },
    { value: t.about.stat4, label: t.about.stat4label },
  ]

  return (
    <section id="nosotros" className="py-24 md:py-36 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Image */}
          <AnimatedSection direction="left">
            <div className="relative">
              {/* Main image */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop"
                  alt="Chemuyil Residencial luxury development"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/40 to-transparent" />
              </div>

              {/* Floating accent card */}
              <div className="absolute -bottom-6 -right-6 bg-forest-dark p-6 max-w-[200px] hidden md:block">
                <p className="font-serif text-3xl text-gold font-light leading-none mb-1">
                  575 m²
                </p>
                <p className="font-sans text-xs tracking-[0.2em] uppercase text-cream/60 leading-tight">
                  Lotes desde
                </p>
                <div className="w-8 h-px bg-gold/50 mt-3" />
                <p className="font-sans text-xs text-cream/40 mt-2 leading-relaxed">
                  Tulum, Quintana Roo
                </p>
              </div>

              {/* Decorative border */}
              <div className="absolute -top-4 -left-4 w-32 h-32 border border-gold/20 pointer-events-none hidden md:block" />
            </div>
          </AnimatedSection>

          {/* Right: Content */}
          <div className="flex flex-col gap-6">
            <AnimatedSection delay={0.1}>
              <span className="section-badge">{t.about.badge}</span>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <h2 className="section-title text-forest-dark">
                {t.about.title}
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <p className="font-sans text-forest/60 leading-relaxed text-base md:text-lg">
                {t.about.description}
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.35}>
              <p className="font-sans text-forest/60 leading-relaxed text-base">
                {t.about.description2}
              </p>
            </AnimatedSection>

            {/* Stats grid */}
            <AnimatedSection delay={0.45}>
              <div className="grid grid-cols-2 gap-px bg-sand/30 border border-sand/30 mt-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-cream p-5 flex flex-col group hover:bg-forest hover:text-cream transition-all duration-300"
                  >
                    <span className="font-serif text-2xl md:text-3xl text-forest-dark group-hover:text-gold font-light transition-colors leading-none mb-1">
                      {stat.value}
                    </span>
                    <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-forest/40 group-hover:text-cream/50 transition-colors">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.55}>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 font-sans text-sm font-semibold tracking-[0.2em] uppercase text-forest hover:text-gold transition-colors mt-2"
              >
                <span>{t.about.cta}</span>
                <span className="w-10 h-px bg-current transition-all duration-300 group-hover:w-16" />
                <MessageCircle size={14} className="opacity-60" />
              </a>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}
