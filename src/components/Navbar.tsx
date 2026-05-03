'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, MessageCircle } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import type { Lang } from '@/data/translations'
import Logo from './Logo'

const WA_LINK =
  'https://wa.me/5219841234567?text=Hola%2C%20me%20interesa%20saber%20m%C3%A1s%20sobre%20los%20lotes%20de%20Chemuyil%20Residencial%20en%20Tulum.'

const navLinks = [
  { href: '#nosotros', labelKey: 'about' as const },
  { href: '#usos', labelKey: 'uses' as const },
  { href: '#beneficios', labelKey: 'benefits' as const },
  { href: '#ubicacion', labelKey: 'location' as const },
]

export default function Navbar() {
  const { lang, setLang, t } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLangToggle = (l: Lang) => {
    setLang(l)
    setMenuOpen(false)
  }

  const scrollTo = (href: string) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-forest-dark/95 backdrop-blur-md shadow-lg shadow-black/20 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
            className="hover:opacity-80 transition-opacity duration-300"
          >
            <Logo variant="white" isotipoSize={36} showIsotipo showWordmark />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="font-sans text-xs font-medium tracking-[0.2em] uppercase text-cream/70 hover:text-cream transition-colors duration-200"
              >
                {t.nav[link.labelKey]}
              </button>
            ))}
          </nav>

          {/* Right controls */}
          <div className="hidden md:flex items-center gap-4">
            {/* Lang toggle */}
            <div className="flex items-center border border-cream/20 overflow-hidden">
              {(['es', 'en'] as Lang[]).map((l) => (
                <button
                  key={l}
                  onClick={() => handleLangToggle(l)}
                  className={`px-3 py-1.5 font-sans text-[10px] font-semibold tracking-widest uppercase transition-all duration-200 ${
                    lang === l
                      ? 'bg-gold text-white'
                      : 'text-cream/60 hover:text-cream'
                  }`}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>

            {/* CTA */}
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gold hover:bg-gold-dark text-white font-sans text-xs font-semibold tracking-widest uppercase px-5 py-2.5 transition-all duration-300 hover:shadow-lg hover:shadow-gold/30"
            >
              <MessageCircle size={14} />
              {t.nav.contact}
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-cream p-2 -mr-2"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-forest-dark flex flex-col pt-24 pb-10 px-8 md:hidden"
          >
            <nav className="flex flex-col gap-6 flex-1">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                  onClick={() => scrollTo(link.href)}
                  className="font-serif text-3xl font-light text-cream/80 hover:text-cream text-left transition-colors"
                >
                  {t.nav[link.labelKey]}
                </motion.button>
              ))}
            </nav>

            <div className="flex flex-col gap-4">
              {/* Lang toggle mobile */}
              <div className="flex gap-2">
                {(['es', 'en'] as Lang[]).map((l) => (
                  <button
                    key={l}
                    onClick={() => handleLangToggle(l)}
                    className={`flex-1 py-2 font-sans text-xs font-bold tracking-widest uppercase border transition-all duration-200 ${
                      lang === l
                        ? 'bg-gold border-gold text-white'
                        : 'border-cream/30 text-cream/60 hover:border-cream/60'
                    }`}
                  >
                    {l.toUpperCase()}
                  </button>
                ))}
              </div>

              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-gold text-white font-sans text-sm font-semibold tracking-widest uppercase py-4 transition-all duration-200 active:scale-[0.98]"
              >
                <MessageCircle size={16} />
                {t.nav.contact}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
