import React from 'react'

const cards = [
  { label: 'WHATSAPP', value: '+51 964 868 233',      href: 'tel:+51964868233',                              icon: '↗' },
  { label: 'LINKEDIN', value: '/in/christian-cassas', href: 'https://linkedin.com/in/christian-cassas',      icon: '↗' },
  { label: 'LOCATION', value: 'Peru — Remote',  href: null,                                            icon: '●' },
]

const cardClass = "flex justify-between items-center py-4.5 px-5.5 border border-white/10 rounded-[10px] bg-white/2 transition-colors"

const contact = () => {
  return (
    <section id="contact" className="border-t border-white/8 bg-white/1">
      <div className="max-w-7xl mx-auto px-4 pt-14 pb-14 lg:pt-40 lg:pb-25">
        <div className="font-mono text-[11px] tracking-[0.16em] text-[#525252] mb-6">/CONTACT</div>
        <h2 className="text-[clamp(72px,11vw,168px)] font-medium tracking-tighter leading-[0.9] m-0 mb-16 text-[#ededed]">
          Let's build<br/>
          <span className="bg-linear-to-br from-[#fafafa] to-[#737373] bg-clip-text text-transparent">something useful.</span>
        </h2>

        <div className="flex flex-col lg:grid lg:grid-cols-[1.4fr_1fr] gap-7 lg:gap-16 pt-12 border-t border-white/8">
          <div>
            <div className="font-mono text-[11px] tracking-[0.14em] text-[#525252] mb-4.5">PRIMARY</div>
            <a href="mailto:chris_ccc68@outlook.com" className="text-2xl lg:text-[42px] font-medium tracking-tight text-[#ededed] no-underline inline-block leading-[1.1] hover:text-[#a3a3a3] transition-colors">
              chris_ccc68<span className="text-[#737373]">@outlook.com</span>
            </a>
            <div className="font-mono text-xs text-[#737373] mt-6 leading-[1.8]">
              replies within 24h · timezone UTC−5 
            </div>
          </div>

          <div className="flex flex-col gap-3">
            {cards.map(({ label, value, href, icon }) =>
              href ? (
                <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener"
                  className={`no-underline text-inherit ${cardClass} hover:border-white/20 hover:bg-white/4`}>
                  <div>
                    <div className="font-mono text-[10px] tracking-[0.14em] text-[#525252] mb-1">{label}</div>
                    <div className="text-[15px] text-[#ededed]">{value}</div>
                  </div>
                  <span className="text-[#737373]">{icon}</span>
                </a>
              ) : (
                <div key={label} className={cardClass}>
                  <div>
                    <div className="font-mono text-[10px] tracking-[0.14em] text-[#525252] mb-1">{label}</div>
                    <div className="text-[15px] text-[#ededed]">{value}</div>
                  </div>
                  <span className="text-[#737373]">{icon}</span>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default contact
