import React from 'react'
import { getProfile, type Variant } from '../lib/profile'
import portraitImage from '../assets/img/new-linkedin.webp'

const stats = [
  { label: 'BASED',     value: 'Peru',      sub: 'UTC−5'               },
  { label: 'LANGUAGES', value: 'ES / EN',        sub: 'C1 · EFSET 64'      },
  { label: 'STUDYING',  value: 'CS & Eng',       sub: 'U. Científica del Sur' },
  { label: "FOCUS '26", value: 'Design Systems', sub: 'Motion · A11y'      },
]

const about = ({ variant = 'frontend' }: { variant?: Variant }) => {
  const profile = getProfile(variant)
  return (
    <section id="about" className="max-w-7xl mx-auto px-4 lg:px-8  pt-14 pb-14 lg:py-35">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-x-20 items-start">
        {/* título — primero siempre */}
        <div className="order-1">
          <div className="font-mono text-[11px] tracking-[0.16em] text-[#525252] mb-4.5">/ABOUT</div>
          <h2 className="text-5xl lg:text-[56px] font-medium tracking-[-0.04em] leading-[1.02] m-0 mb-10 text-[#ededed]">
            {profile.about.headlineA} <span className="text-[#737373]">{profile.about.headlineB}</span>
          </h2>
        </div>

        {/* portrait — segundo en mobile, columna derecha en desktop */}
        <div className="order-2 w-full lg:row-span-2 lg:row-start-1 lg:col-start-2 mb-10 lg:mb-0">
          <div className="relative aspect-4/5 rounded-xl overflow-hidden border border-white/8" style={{background:'linear-gradient(180deg,#1a1a1a 0%,#0a0a0a 100%)'}}>
            <img src={portraitImage} alt={profile.about.portrait.name} className="absolute inset-0 w-full h-full object-cover" />
          </div>
          <div className="font-mono text-[11px] text-[#525252] mt-3.5 leading-[1.8]">
            {profile.about.portrait.name.toUpperCase()}<br/>
            {profile.about.portrait.location.toUpperCase()}
          </div>
        </div>

        {/* párrafos + stats — tercero en mobile, columna izquierda fila 2 en desktop */}
        <div className="order-3 lg:col-start-1">
          <div className="flex flex-col gap-5 lg:grid lg:grid-cols-2 lg:gap-10 text-[#a3a3a3] leading-[1.7] text-[15px]">
            <p className="m-0">{profile.about.paragraphs[0]}</p>
            <p className="m-0">{profile.about.paragraphs[1]}</p>
          </div>

          <div className="mt-5 flex text-center justify-center flex-wrap gap-3 lg:grid lg:grid-cols-4 lg:gap-6 lg:mt-16 pt-8 border-t border-white/8 lg:text-left">
            {stats.map(({ label, value, sub }) => (
              <div key={label}>
                <div className="font-mono text-[10px] tracking-[0.16em] text-[#525252] mb-2">{label}</div>
                <div className="text-base text-[#ededed]">{value}</div>
                <div className="font-mono text-[11px] text-[#737373] mt-0.5">{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default about
