import { useState, useEffect } from 'react'

const Header = () => {
  const [open, setOpen] = useState(false)

  // bloquea el scroll del body mientras el menu esta abierto
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const close = () => setOpen(false)

  return (
    <header className="sticky top-0 z-50 bg-[rgba(10,10,10,0.7)] backdrop-blur-xl border-b border-white/6">
      <div className="max-w-7xl mx-auto px-8 py-3.5 flex items-center justify-between font-mono text-xs">

        <div className="flex items-center gap-2.5">
          <div className="w-[22px] h-[22px] rounded-md bg-gradient-to-br from-white to-[#9c9c9c] flex items-center justify-center text-black font-bold text-[11px] tracking-[-0.02em]">
            cc
          </div>
          <span className="text-[#ededed] font-medium">christian.cassas</span>
          <span className="text-[#525252]">/dev</span>
        </div>

        {/* nav desktop */}
        <nav className="hidden md:flex gap-7 text-[#a3a3a3]">
          <a href="#work"       className="hover:text-[#ededed] transition-colors">work</a>
          <a href="#stack"      className="hover:text-[#ededed] transition-colors">stack</a>
          <a href="#experience" className="hover:text-[#ededed] transition-colors">experience</a>
          <a href="#about"      className="hover:text-[#ededed] transition-colors">about</a>
          <a href="#contact"    className="hover:text-[#ededed] transition-colors">contact</a>
        </nav>

        <div className="hidden md:flex items-center gap-2 text-[#a3a3a3]">
          <span className="relative inline-block w-2 h-2">
            <span className="absolute inset-0 rounded-full bg-green-500"></span>
            <span className="absolute -inset-[3px] rounded-full bg-green-500/25"></span>
          </span>
          available
        </div>

        {/* hamburger — solo mobile */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 p-1 text-[#a3a3a3]"
          aria-label="toggle menu"
        >
          <span className={`block w-5 h-px bg-current transition-all ${open ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-5 h-px bg-current transition-all ${open ? 'opacity-0' : ''}`}></span>
          <span className={`block w-5 h-px bg-current transition-all ${open ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>

      </div>

      {/* menu mobile — ocupa todo el dvh restante */}
      {open && (
        <nav className="md:hidden fixed inset-x-0 top-13.25 h-[calc(100dvh-3.3125rem)] bg-[#0a0a0a] px-8 flex flex-col justify-center gap-8 font-mono text-[#a3a3a3]">
          <a href="#work"       onClick={close} className="text-4xl font-medium text-[#ededed] hover:text-[#a3a3a3] transition-colors">work</a>
          <a href="#stack"      onClick={close} className="text-4xl font-medium text-[#ededed] hover:text-[#a3a3a3] transition-colors">stack</a>
          <a href="#experience" onClick={close} className="text-4xl font-medium text-[#ededed] hover:text-[#a3a3a3] transition-colors">experience</a>
          <a href="#about"      onClick={close} className="text-4xl font-medium text-[#ededed] hover:text-[#a3a3a3] transition-colors">about</a>
          <a href="#contact"    onClick={close} className="text-4xl font-medium text-[#ededed] hover:text-[#a3a3a3] transition-colors">contact</a>
        </nav>
      )}
    </header>
  )
}

export default Header
