import React from 'react'

const stats = [
  { label: 'BASED',     value: 'Peru',       sub: 'UTC−5' },
  { label: 'LANGUAGES', value: 'ES / EN',         sub: 'C1 · EFSET 64' },
  { label: 'STUDYING',  value: 'CS & Eng',        sub: 'U. Científica del Sur' },
  { label: "FOCUS '26", value: 'Checkout Ext.',   sub: 'Functions · CRO' },
]

const about = () => {
  return (
    <section id="about" className="max-w-7xl mx-auto px-4 lg:px-8  pt-14 pb-14 lg:py-35">
      <div className="flex flex-col lg:grid lg:grid-cols-[1fr_280px] gap-20 items-start">
        <div>
          <div className="font-mono text-[11px] tracking-[0.16em] text-[#525252] mb-4.5">/ABOUT</div>
          <h2 className="text-5xl lg:text-[56px] font-medium tracking-[-0.04em] leading-[1.02] m-0 mb-10 text-[#ededed]">
            A developer who treats <span className="text-[#737373]">commerce as a craft.</span>
          </h2>
          <div className="flex flex-col gap-5 lg:grid lg:grid-cols-2 lg:gap-10 text-[#a3a3a3] leading-[1.7] text-[15px]">
            <p className="m-0">
              Started in 2023 building WordPress sites for Peruvian agencies — small clients, real deadlines, learning what does and doesn't survive contact with production. Two years later I was leading multi-tenant accounting platforms in Laravel; one more, shipping checkout extensions for British DTC founders at 3am London time.
            </p>
            <p className="m-0">
              The throughline: systems that <span className="text-[#ededed]">actually move numbers</span>. Liquid that respects the merchant. A/B tests with clean instrumentation. Lighthouse scores that climb because the architecture got simpler, not because something got hidden. Code reviews that read like writing.
            </p>
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

        {/* portrait card */}
        <div>
          <div className="relative aspect-4/5 rounded-xl overflow-hidden border border-white/8" style={{background:'linear-gradient(180deg,#1a1a1a 0%,#0a0a0a 100%)'}}>
            <div className="absolute inset-0" style={{backgroundImage:'linear-gradient(rgba(255,255,255,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.04) 1px,transparent 1px)',backgroundSize:'24px 24px'}}></div>
            <div className="absolute bottom-3.5 left-3.5 right-3.5 font-mono text-[10px] text-[#525252] leading-[1.7]">
              {'{ PORTRAIT — REPLACE }'}<br/>
              <span className="text-[#737373]">discreet · ~600×750</span>
            </div>
          </div>
          <div className="font-mono text-[11px] text-[#525252] mt-3.5 leading-[1.8]">
            CHRISTIAN CASSAS<br/>
            BASED IN PERU, WORKING REMOTELY
          </div>
        </div>
      </div>
    </section>
  )
}

export default about
