'use client'

import {createContext, useContext, useState, useEffect, type ReactNode} from 'react'
import {translations, type Lang} from '@/app/lib/translations'

type LanguageContextType = {
  lang: Lang
  setLang: (lang: Lang) => void
  t: typeof translations.en
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'en',
  setLang: () => {},
  t: translations.en,
})

export function LanguageProvider({children}: {children: ReactNode}) {
  const [lang, setLangState] = useState<Lang>('en')

  useEffect(() => {
    const stored = localStorage.getItem('lang') as Lang | null
    if (stored === 'en' || stored === 'pt') setLangState(stored)
  }, [])

  function setLang(l: Lang) {
    setLangState(l)
    localStorage.setItem('lang', l)
  }

  return (
    <LanguageContext.Provider value={{lang, setLang, t: translations[lang]}}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
