'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

const WA_LINK =
  'https://wa.me/5219841234567?text=Hola%2C%20me%20interesa%20saber%20m%C3%A1s%20sobre%20los%20lotes%20de%20Chemuyil%20Residencial%20en%20Tulum.'

export default function FloatingWhatsApp() {
  const { lang } = useLanguage()
  const [visible, setVisible] = useState(false)
  const [tooltipOpen, setTooltipOpen] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2500)
    const tooltipTimer = setTimeout(() => {
      if (!dismissed) setTooltipOpen(true)
    }, 4000)
    return () => {
      clearTimeout(timer)
      clearTimeout(tooltipTimer)
    }
  }, [dismissed])

  const message =
    lang === 'es'
      ? '¡Hola! ¿Tienes preguntas sobre Chemuyil Residencial?'
      : 'Hello! Any questions about Chemuyil Residencial?'

  const cta = lang === 'es' ? 'Escríbenos ahora' : 'Message us now'

  return (
    <AnimatePresence>
      {visible && (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
          {/* Tooltip card */}
          <AnimatePresence>
            {tooltipOpen && !dismissed && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="bg-white shadow-2xl shadow-black/15 border border-sand/40 p-4 max-w-[240px] relative"
              >
                <button
                  onClick={() => { setDismissed(true); setTooltipOpen(false) }}
                  className="absolute top-2 right-2 text-forest/30 hover:text-forest/70 transition-colors"
                  aria-label="Close tooltip"
                >
                  <X size={12} />
                </button>
                <p className="font-sans text-xs text-forest leading-relaxed pr-4">{message}</p>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 mt-3 font-sans text-[11px] font-semibold text-green-600 hover:text-green-700 transition-colors"
                >
                  <MessageCircle size={12} />
                  {cta}
                </a>
                {/* Arrow */}
                <div className="absolute bottom-[-6px] right-[22px] w-3 h-3 bg-white border-b border-r border-sand/40 rotate-45" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main button */}
          <motion.a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            onHoverStart={() => setTooltipOpen(true)}
            aria-label="Contact via WhatsApp"
            className="group relative w-14 h-14 bg-green-500 hover:bg-green-600 flex items-center justify-center shadow-2xl shadow-green-500/30 transition-colors duration-200"
          >
            {/* Pulse rings */}
            <span className="absolute inset-0 bg-green-500/30 animate-ping rounded-none opacity-75" />
            <span className="absolute inset-[-4px] border border-green-500/20" />
            <MessageCircle
              size={24}
              className="text-white relative z-10 group-hover:scale-110 transition-transform duration-200"
            />
          </motion.a>
        </div>
      )}
    </AnimatePresence>
  )
}
