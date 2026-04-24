'use client'

import {useLanguage} from '@/app/context/LanguageContext'

export default function LanguageToggle() {
  const {lang, setLang} = useLanguage()
  return (
    <button
      onClick={() => setLang(lang === 'en' ? 'pt' : 'en')}
      className="font-mono text-sm border border-gray-700 hover:border-yellow-400/50 text-gray-400 hover:text-yellow-400 px-3.5 py-1.5 rounded-sm transition-colors tracking-widest"
      title={lang === 'en' ? 'Switch to Portuguese' : 'Mudar para Inglês'}
    >
      {lang === 'en' ? 'PT' : 'EN'}
    </button>
  )
}
