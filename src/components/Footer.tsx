'use client'

import { MessageCircle, Instagram, Facebook } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import Logo from './Logo'

const WA_LINK =
  'https://wa.me/5219841234567?text=Hola%2C%20me%20interesa%20saber%20m%C3%A1s%20sobre%20los%20lotes%20de%20Chemuyil%20Residencial%20en%20Tulum.'

const sections = [
  { href: '#nosotros', id: 0 },
  { href: '#usos', id: 1 },
  { href: '#beneficios', id: 2 },
  { href: '#ubicacion', id: 3 },
]

export default function Footer() {
  const { t } = useLanguage()

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-forest-dark text-cream">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-10 border-b border-cream/10">
        {/* Brand */}
        <div className="lg:col-span-2">
          <div className="mb-5">
            <Logo variant="white" isotipoSize={48} showIsotipo showWordmark />
          </div>
          <p className="font-sans text-sm text-cream/40 leading-relaxed max-w-xs mt-3">
            {t.footer.tagline}
          </p>
          <div className="flex items-center gap-3 mt-6">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="w-9 h-9 border border-cream/20 flex items-center justify-center text-cream/40 hover:text-green-400 hover:border-green-400/40 transition-all duration-200"
            >
              <MessageCircle size={14} />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="w-9 h-9 border border-cream/20 flex items-center justify-center text-cream/40 hover:text-pink-400 hover:border-pink-400/40 transition-all duration-200"
            >
              <Instagram size={14} />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="w-9 h-9 border border-cream/20 flex items-center justify-center text-cream/40 hover:text-blue-400 hover:border-blue-400/40 transition-all duration-200"
            >
              <Facebook size={14} />
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="font-sans text-[10px] font-semibold tracking-[0.3em] uppercase text-gold/60 mb-4">
            Navegación
          </h4>
          <ul className="flex flex-col gap-3">
            {sections.map((s, i) => (
              <li key={s.href}>
                <button
                  onClick={() => scrollTo(s.href)}
                  className="font-sans text-sm text-cream/50 hover:text-cream transition-colors"
                >
                  {t.footer.links[i]}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-sans text-[10px] font-semibold tracking-[0.3em] uppercase text-gold/60 mb-4">
            Contacto
          </h4>
          <div className="flex flex-col gap-3">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-sans text-sm text-cream/50 hover:text-green-400 transition-colors"
            >
              <MessageCircle size={13} />
              WhatsApp
            </a>
            <p className="font-sans text-xs text-cream/30 leading-relaxed">
              Tulum, Quintana Roo
              <br />
              México, C.P. 77780
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="font-sans text-[11px] text-cream/25">
          © {new Date().getFullYear()} Chemuyil Residencial. {t.footer.rights}
        </p>
        <p className="font-sans text-[10px] text-cream/20 text-center md:text-right max-w-sm">
          {t.footer.disclaimer}
        </p>
      </div>
    </footer>
  )
}
