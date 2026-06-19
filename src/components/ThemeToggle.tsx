import { useState, useEffect } from 'react'

const ThemeToggle = () => {
  const [light, setLight] = useState(() => localStorage.getItem('theme') === 'light')

  useEffect(() => {
    document.documentElement.classList.toggle('light', light)
    localStorage.setItem('theme', light ? 'light' : 'dark')
  }, [light])

  return (
    <button
      onClick={() => setLight(v => !v)}
      className="hidden md:flex items-center justify-center w-7 h-7 rounded-md border border-white/10 text-[#a3a3a3] hover:text-[#ededed] hover:border-white/20 transition-colors"
      aria-label="toggle theme"
      title={light ? 'Switch to dark' : 'Switch to light'}
    >
      {light ? '○' : '◑'}
    </button>
  )
}

export default ThemeToggle
