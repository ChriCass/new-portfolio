import { useCallback } from 'react'
import { useLanguage } from './LanguageContext'
import { getTranslation } from './translations'

export function useT() {
  const { lang } = useLanguage()
  const t = useCallback((key: string) => getTranslation(lang, key), [lang])
  return t
}
