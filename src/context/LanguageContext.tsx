'use client'

import React, { createContext, useContext, useState } from 'react'
import { translations, type Lang, type T } from '@/data/translations'

interface LanguageContextType {
  lang: Lang
  setLang: (lang: Lang) => void
  t: T
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'es',
  setLang: () => {},
  t: translations.es,
})

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>('es')

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)
