import { useLanguage } from '../i18n'

const LanguageToggle = () => {
  const { lang, toggleLang, langKey } = useLanguage()
  const isEs = lang === 'es'

  return (
    <div className="flex items-center gap-2">
      <span
        key={langKey}
        className="font-mono text-[11px] tracking-wider text-[#ededed] text-enter select-none"
      >
        {lang.toUpperCase()}
      </span>
      <button
        onClick={toggleLang}
        className="relative flex items-center w-[40px] h-6 rounded-full border border-white/10 bg-white/3 hover:border-white/20 transition-colors cursor-pointer"
        aria-label={isEs ? 'Switch to English' : 'Cambiar a español'}
        aria-pressed={isEs}
        title={isEs ? 'Switch to English' : 'Cambiar a español'}
      >
        <span
          className={`absolute left-[2px] w-4.5 h-4.5 rounded-full bg-white shadow-sm transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isEs ? 'translate-x-[16px]' : 'translate-x-0'
          }`}
        />
      </button>
    </div>
  )
}

export default LanguageToggle
