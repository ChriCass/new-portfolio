import { useState, useEffect } from 'react'
import ThemeToggle from './ThemeToggle'
import LanguageToggle from './LanguageToggle'
import { useT } from '../i18n'
import { getProfile, type Variant } from '../lib/profile'

const sectionKeys = ['nav.work', 'nav.stack', 'nav.experience', 'nav.about', 'nav.contact'] as const
const sectionHrefs = ['#work', '#stack', '#experience', '#about', '#contact']

const Header = ({ variant = 'frontend' }: { variant?: Variant }) => {
  const profile = getProfile(variant)
  const t = useT()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const smoothScrollTo = (targetY: number, duration = 900) => {
    const startY = window.scrollY
    const distance = targetY - startY
    const startTime = performance.now()
    const ease = (t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2

    const step = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1)
      window.scrollTo(0, startY + distance * ease(progress))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const el = document.getElementById(href.slice(1))
    if (!el) return

    setOpen(false)

    const headerOffset = 53
    const targetY = el.getBoundingClientRect().top + window.scrollY - headerOffset

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        smoothScrollTo(targetY)
        history.replaceState(null, '', href)
      })
    })
  }

  return (
    <header className="sticky top-0 z-50 bg-[rgba(10,10,10,0.7)] backdrop-blur-xl border-b border-white/6">
      <div className="max-w-7xl mx-auto px-8 py-3.5 flex items-center justify-between font-mono text-xs">

        <div className="flex items-center gap-2.5 min-w-0">
          <div className="w-[22px] h-[22px] rounded-md bg-gradient-to-br from-white to-[#9c9c9c] flex items-center justify-center text-black font-bold text-[11px] tracking-[-0.02em] shrink-0">
            cc
          </div>
          <span className="text-[#ededed] font-medium truncate">christian.cassas</span>
          <span className="text-[#949494] hidden sm:inline">{profile.tag}</span>
        </div>

        <nav className="hidden md:flex gap-7 text-[#a3a3a3]" aria-label={t('nav.main')}>
          {sectionKeys.map((key, i) => (
            <a key={sectionHrefs[i]} href={sectionHrefs[i]} onClick={(e) => handleNav(e, sectionHrefs[i])} className="hover:text-[#ededed] transition-colors">{t(key)}</a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3 text-[#a3a3a3]">
          <LanguageToggle />
          <ThemeToggle />
        </div>

        <div className="md:hidden flex items-center gap-2 text-[#a3a3a3] shrink-0">
          <LanguageToggle />
          <ThemeToggle />
          <button
            onClick={() => setOpen(!open)}
            className="flex flex-col gap-1.5 p-1"
            aria-label={t('header.toggleMenu')}
            aria-expanded={open}
            aria-controls="mobile-nav"
          >
            <span className={`block w-5 h-px bg-current transition-all ${open ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-5 h-px bg-current transition-all ${open ? 'opacity-0' : ''}`}></span>
            <span className={`block w-5 h-px bg-current transition-all ${open ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>

      </div>

      <nav
        id="mobile-nav"
        className={`md:hidden fixed inset-x-0 top-13.25 h-[calc(100dvh-3.3125rem)] bg-[#0a0a0a] px-8 flex flex-col justify-center gap-8 font-mono text-[#a3a3a3] transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          open ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'
        }`}
        aria-label={t('nav.mobile')}
        aria-hidden={!open}
      >
        {sectionKeys.map((key, i) => (
          <a
            key={sectionHrefs[i]}
            href={sectionHrefs[i]}
            onClick={(e) => handleNav(e, sectionHrefs[i])}
            tabIndex={open ? 0 : -1}
            style={{
              transitionDelay: open ? `${120 + i * 70}ms` : '0ms',
            }}
            className={`text-4xl font-medium text-[#ededed] hover:text-[#a3a3a3] transition-[opacity,transform,color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              open ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            {t(key)}
          </a>
        ))}
      </nav>
    </header>
  )
}

export default Header
