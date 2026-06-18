import React from 'react'

const about = () => {
  return (
    <section id="about" className="max-w-7xl mx-auto px-8 py-35">
      <div className="grid grid-cols-[1fr_280px] gap-20 items-start">
        <div>
          <div className="font-mono text-[11px] tracking-[0.16em] text-[#525252] mb-4.5">/ABOUT</div>
          <h2 className="text-[56px] font-medium tracking-[-0.04em] leading-[1.02] m-0 mb-10 text-[#ededed]">
            A developer who treats <span className="text-[#737373]">commerce as a craft.</span>
          </h2>
          <div className="grid grid-cols-2 gap-10 text-[#a3a3a3] leading-[1.7] text-[15px]">
            <p className="m-0">
              Started in 2023 building WordPress sites for Peruvian agencies — small clients, real deadlines, learning what does and doesn't survive contact with production. Two years later I was leading multi-tenant accounting platforms in Laravel; one more, shipping checkout extensions for British DTC founders at 3am London time.
            </p>
            <p className="m-0">
              The throughline: systems that <span className="text-[#ededed]">actually move numbers</span>. Liquid that respects the merchant. A/B tests with clean instrumentation. Lighthouse scores that climb because the architecture got simpler, not because something got hidden. Code reviews that read like writing.
            </p>
          </div>

          <div className="grid grid-cols-4 gap-6 mt-16 pt-8 border-t border-white/8">
            <div>
              <div className="font-mono text-[10px] tracking-[0.16em] text-[#525252] mb-2">BASED</div>
              <div className="text-base text-[#ededed]">Lima, PE</div>
              <div className="font-mono text-[11px] text-[#737373] mt-0.5">UTC−5</div>
            </div>
            <div>
              <div className="font-mono text-[10px] tracking-[0.16em] text-[#525252] mb-2">LANGUAGES</div>
              <div className="text-base text-[#ededed]">ES <span className="text-[#525252]">/</span> EN</div>
              <div className="font-mono text-[11px] text-[#737373] mt-0.5">C1 · EFSET 64</div>
            </div>
            <div>
              <div className="font-mono text-[10px] tracking-[0.16em] text-[#525252] mb-2">STUDYING</div>
              <div className="text-base text-[#ededed]">CS & Eng</div>
              <div className="font-mono text-[11px] text-[#737373] mt-0.5">U. Científica del Sur</div>
            </div>
            <div>
              <div className="font-mono text-[10px] tracking-[0.16em] text-[#525252] mb-2">FOCUS '26</div>
              <div className="text-base text-[#ededed]">Checkout Ext.</div>
              <div className="font-mono text-[11px] text-[#737373] mt-0.5">Functions · CRO</div>
            </div>
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
            B. AREQUIPA, PE<br/>
            BASED IN LIMA
          </div>
        </div>
      </div>
    </section>
  )
}

export default about
