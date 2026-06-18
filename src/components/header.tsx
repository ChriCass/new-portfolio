const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-[rgba(10,10,10,0.7)] backdrop-blur-xl border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-8 py-3.5 flex items-center justify-between font-mono text-xs">

        <div className="flex items-center gap-2.5">
          <div className="w-[22px] h-[22px] rounded-md bg-gradient-to-br from-white to-[#9c9c9c] flex items-center justify-center text-black font-bold text-[11px] tracking-[-0.02em]">
            cc
          </div>
          <span className="text-[#ededed] font-medium">christian.cassas</span>
          <span className="text-[#525252]">/dev</span>
        </div>

        <nav className="flex gap-7 text-[#a3a3a3]">
          <a href="#work" className="hover:text-[#ededed] transition-colors">work</a>
          <a href="#stack" className="hover:text-[#ededed] transition-colors">stack</a>
          <a href="#experience" className="hover:text-[#ededed] transition-colors">experience</a>
          <a href="#about" className="hover:text-[#ededed] transition-colors">about</a>
          <a href="#contact" className="hover:text-[#ededed] transition-colors">contact</a>
        </nav>

        <div className="flex items-center gap-2 text-[#a3a3a3]">
          <span className="relative inline-block w-2 h-2">
            <span className="absolute inset-0 rounded-full bg-green-500"></span>
            <span className="absolute -inset-[3px] rounded-full bg-green-500/25"></span>
          </span>
          available
        </div>

      </div>
    </header>
  )
}

export default Header
