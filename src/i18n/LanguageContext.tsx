import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from 'react'

export type Lang = 'en' | 'es'

interface LanguageContextType {
  lang: Lang
  langKey: number
  setLang: (lang: Lang) => void
  toggleLang: () => void
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'en',
  langKey: 0,
  setLang: () => {},
  toggleLang: () => {},
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    const stored = localStorage.getItem('lang')
    return stored === 'es' ? 'es' : 'en'
  })
  const [langKey, setLangKey] = useState(0)

  const setLang = useCallback((l: Lang) => {
    setLangState(l)
    setLangKey(k => k + 1)
    localStorage.setItem('lang', l)
  }, [])

  const toggleLang = useCallback(() => {
    setLangState(prev => {
      const next = prev === 'en' ? 'es' : 'en'
      setLangKey(k => k + 1)
      localStorage.setItem('lang', next)
      return next
    })
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  return (
    <LanguageContext.Provider value={{ lang, langKey, setLang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
