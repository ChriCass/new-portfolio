import React from 'react'

const selectedWork = () => {
  return (
    <section id="work" className="max-w-7xl mx-auto px-8 pt-35 pb-15">
      <div className="flex items-end justify-between mb-16">
        <div>
          <div className="font-mono text-[11px] tracking-[0.16em] text-[#525252] mb-4.5">/SELECTED_WORK</div>
          <h2 className="text-[64px] font-medium tracking-[-0.04em] leading-none m-0 text-[#ededed]">Storefronts in production.</h2>
        </div>
        <div className="font-mono text-xs text-[#a3a3a3] text-right max-w-60">
          5 of 80+ DTC brands<br/>
          shipped at <span className="text-[#ededed]">Step Labs</span> London<br/>
          <span className="text-[#525252]">2024 — 2026</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* 01 */}
        <a href="https://invigoratedwater.com" target="_blank" rel="noopener" className="no-underline text-inherit block p-7 border border-white/8 rounded-[14px] bg-white/1.5 hover:border-white/18 hover:bg-white/3 transition-colors">
          <div className="relative aspect-16/10 rounded-lg overflow-hidden mb-6" style={{background:'linear-gradient(135deg,#1e3a5f 0%,#0a1929 100%)'}}>
            <div className="absolute inset-0" style={{backgroundImage:'radial-gradient(circle at 30% 40%,rgba(96,165,250,.25),transparent 50%),radial-gradient(circle at 70% 70%,rgba(34,197,94,.15),transparent 50%)'}}></div>
            <div className="absolute inset-0" style={{backgroundImage:'linear-gradient(rgba(255,255,255,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.04) 1px,transparent 1px)',backgroundSize:'32px 32px'}}></div>
            <div className="absolute top-4 left-4 right-4 flex justify-between font-mono text-[10px] tracking-[0.14em] text-white/50">
              <span>● INVIGORATED WATER</span>
              <span>SHOPIFY PLUS</span>
            </div>
            <div className="absolute bottom-6 left-6 right-6">
              <div className="text-[42px] font-semibold tracking-[-0.03em] text-white">invigorated<span className="text-blue-400">water</span></div>
              <div className="font-mono text-[10px] tracking-[0.14em] text-white/40 mt-2">{'{ HERO PLACEHOLDER }'}</div>
            </div>
          </div>
          <div className="flex justify-between items-start mb-3.5">
            <div>
              <div className="font-mono text-[11px] text-[#525252] mb-1.5">01 — 2025</div>
              <h3 className="text-2xl font-medium tracking-[-0.02em] m-0 text-[#ededed]">Invigorated Water</h3>
            </div>
            <span className="font-mono text-[11px] text-[#a3a3a3] px-2.5 py-1 border border-white/10 rounded-full">PDP · CART</span>
          </div>
          <p className="m-0 mb-4.5 text-[#a3a3a3] text-sm leading-[1.55]">
            Premium water filtration storefront. Rebuilt PDP + cart against CWV; Theme App Extensions for subscription billing without theme bloat.
          </p>
          <div className="flex gap-2 flex-wrap font-mono text-[11px] text-[#525252]">
            <span className="px-2.25 py-1 bg-white/4 rounded-[5px]">Liquid</span>
            <span className="px-2.25 py-1 bg-white/4 rounded-[5px]">OS 2.0</span>
            <span className="px-2.25 py-1 bg-green-500/8 text-[#86efac] rounded-[5px]">+32% LCP</span>
          </div>
        </a>

        {/* 02 */}
        <a href="https://www.trysuji.com" target="_blank" rel="noopener" className="no-underline text-inherit block p-7 border border-white/8 rounded-[14px] bg-white/1.5 hover:border-white/18 hover:bg-white/3 transition-colors">
          <div className="relative aspect-16/10 rounded-lg overflow-hidden mb-6" style={{background:'linear-gradient(135deg,#3a2914 0%,#1a0f05 100%)'}}>
            <div className="absolute inset-0" style={{backgroundImage:'radial-gradient(circle at 70% 30%,rgba(251,191,36,.28),transparent 50%),radial-gradient(circle at 20% 80%,rgba(239,68,68,.18),transparent 50%)'}}></div>
            <div className="absolute inset-0" style={{backgroundImage:'linear-gradient(rgba(255,255,255,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.04) 1px,transparent 1px)',backgroundSize:'32px 32px'}}></div>
            <div className="absolute top-4 left-4 right-4 flex justify-between font-mono text-[10px] tracking-[0.14em] text-white/50">
              <span>● TRY SUJI</span>
              <span>OS 2.0</span>
            </div>
            <div className="absolute bottom-6 left-6 right-6">
              <div className="text-[42px] font-semibold tracking-[-0.03em] text-white italic">suji.</div>
              <div className="font-mono text-[10px] tracking-[0.14em] text-white/40 mt-2">{'{ HERO PLACEHOLDER }'}</div>
            </div>
          </div>
          <div className="flex justify-between items-start mb-3.5">
            <div>
              <div className="font-mono text-[11px] text-[#525252] mb-1.5">02 — 2025</div>
              <h3 className="text-2xl font-medium tracking-[-0.02em] m-0 text-[#ededed]">Try Suji</h3>
            </div>
            <span className="font-mono text-[11px] text-[#a3a3a3] px-2.5 py-1 border border-white/10 rounded-full">QUIZ · A/B</span>
          </div>
          <p className="m-0 mb-4.5 text-[#a3a3a3] text-sm leading-[1.55]">
            Better-for-you noodle brand. Quiz-driven landing flow + 6-week A/B program on the PDP — variant B locked sustained AOV lift via bundle merchandising.
          </p>
          <div className="flex gap-2 flex-wrap font-mono text-[11px] text-[#525252]">
            <span className="px-2.25 py-1 bg-white/4 rounded-[5px]">Checkout Ext.</span>
            <span className="px-2.25 py-1 bg-white/4 rounded-[5px]">Functions</span>
            <span className="px-2.25 py-1 bg-green-500/8 text-[#86efac] rounded-[5px]">+18% AOV</span>
          </div>
        </a>

        {/* 03 */}
        <a href="https://getsowell.com" target="_blank" rel="noopener" className="no-underline text-inherit block p-7 border border-white/8 rounded-[14px] bg-white/1.5 hover:border-white/18 hover:bg-white/3 transition-colors">
          <div className="relative aspect-16/10 rounded-lg overflow-hidden mb-6" style={{background:'linear-gradient(135deg,#1a2e22 0%,#0a1410 100%)'}}>
            <div className="absolute inset-0" style={{backgroundImage:'radial-gradient(circle at 50% 40%,rgba(134,239,172,.22),transparent 55%)'}}></div>
            <div className="absolute inset-0" style={{backgroundImage:'linear-gradient(rgba(255,255,255,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.04) 1px,transparent 1px)',backgroundSize:'32px 32px'}}></div>
            <div className="absolute top-4 left-4 right-4 flex justify-between font-mono text-[10px] tracking-[0.14em] text-white/50">
              <span>● SOWELL</span>
              <span>WELLNESS</span>
            </div>
            <div className="absolute bottom-6 left-6 right-6">
              <div className="text-[42px] font-semibold tracking-[-0.03em] text-white">so<span className="text-[#86efac]">well</span></div>
              <div className="font-mono text-[10px] tracking-[0.14em] text-white/40 mt-2">{'{ HERO PLACEHOLDER }'}</div>
            </div>
          </div>
          <div className="flex justify-between items-start mb-3.5">
            <div>
              <div className="font-mono text-[11px] text-[#525252] mb-1.5">03 — 2024</div>
              <h3 className="text-2xl font-medium tracking-[-0.02em] m-0 text-[#ededed]">Get Sowell</h3>
            </div>
            <span className="font-mono text-[11px] text-[#a3a3a3] px-2.5 py-1 border border-white/10 rounded-full">SUBSCRIPTIONS</span>
          </div>
          <p className="m-0 mb-4.5 text-[#a3a3a3] text-sm leading-[1.55]">
            Sleep & wellness DTC brand. Quiz → personalized PDP flow; App Proxy + Customer Metafields persist state to drive subscription attach.
          </p>
          <div className="flex gap-2 flex-wrap font-mono text-[11px] text-[#525252]">
            <span className="px-2.25 py-1 bg-white/4 rounded-[5px]">Storefront API</span>
            <span className="px-2.25 py-1 bg-white/4 rounded-[5px]">GraphQL</span>
            <span className="px-2.25 py-1 bg-green-500/8 text-[#86efac] rounded-[5px]">+24% sub attach</span>
          </div>
        </a>

        {/* 04 */}
        <a href="https://berkeleylife.com" target="_blank" rel="noopener" className="no-underline text-inherit block p-7 border border-white/8 rounded-[14px] bg-white/1.5 hover:border-white/18 hover:bg-white/3 transition-colors">
          <div className="relative aspect-16/10 rounded-lg overflow-hidden mb-6" style={{background:'linear-gradient(135deg,#2a2a2a 0%,#0a0a0a 100%)'}}>
            <div className="absolute inset-0" style={{backgroundImage:'radial-gradient(circle at 40% 50%,rgba(168,162,158,.18),transparent 50%)'}}></div>
            <div className="absolute inset-0" style={{backgroundImage:'linear-gradient(rgba(255,255,255,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.04) 1px,transparent 1px)',backgroundSize:'32px 32px'}}></div>
            <div className="absolute top-4 left-4 right-4 flex justify-between font-mono text-[10px] tracking-[0.14em] text-white/50">
              <span>● BERKELEY LIFE</span>
              <span>SHOPIFY PLUS</span>
            </div>
            <div className="absolute bottom-6 left-6 right-6">
              <div className="text-[42px] font-semibold tracking-[-0.03em] text-white">berkeley<span className="text-[#a8a29e]">.life</span></div>
              <div className="font-mono text-[10px] tracking-[0.14em] text-white/40 mt-2">{'{ HERO PLACEHOLDER }'}</div>
            </div>
          </div>
          <div className="flex justify-between items-start mb-3.5">
            <div>
              <div className="font-mono text-[11px] text-[#525252] mb-1.5">04 — 2024</div>
              <h3 className="text-2xl font-medium tracking-[-0.02em] m-0 text-[#ededed]">Berkeley Life</h3>
            </div>
            <span className="font-mono text-[11px] text-[#a3a3a3] px-2.5 py-1 border border-white/10 rounded-full">METAOBJECTS</span>
          </div>
          <p className="m-0 mb-4.5 text-[#a3a3a3] text-sm leading-[1.55]">
            Nitric-oxide supplement brand backed by clinical research. Migrated to OS 2.0, rebuilt practitioner portal with metaobjects, shipped clinic finder.
          </p>
          <div className="flex gap-2 flex-wrap font-mono text-[11px] text-[#525252]">
            <span className="px-2.25 py-1 bg-white/4 rounded-[5px]">Metaobjects</span>
            <span className="px-2.25 py-1 bg-white/4 rounded-[5px]">Admin API</span>
            <span className="px-2.25 py-1 bg-green-500/8 text-[#86efac] rounded-[5px]">−42% CLS</span>
          </div>
        </a>

        {/* 05 */}
        <a href="https://tanoskincare.com" target="_blank" rel="noopener" className="no-underline text-inherit block p-7 border border-white/8 rounded-[14px] bg-white/1.5 col-span-full hover:border-white/18 hover:bg-white/3 transition-colors">
          <div className="grid grid-cols-[1.2fr_1fr] gap-8 items-center">
            <div className="relative aspect-16/10 rounded-lg overflow-hidden" style={{background:'linear-gradient(135deg,#3a2418 0%,#1a0d05 100%)'}}>
              <div className="absolute inset-0" style={{backgroundImage:'radial-gradient(circle at 30% 30%,rgba(251,146,60,.22),transparent 50%),radial-gradient(circle at 70% 70%,rgba(217,119,6,.18),transparent 50%)'}}></div>
              <div className="absolute inset-0" style={{backgroundImage:'linear-gradient(rgba(255,255,255,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.04) 1px,transparent 1px)',backgroundSize:'32px 32px'}}></div>
              <div className="absolute top-4 left-4 right-4 flex justify-between font-mono text-[10px] tracking-[0.14em] text-white/[0.55]">
                <span>● TANO SKINCARE</span>
                <span>BEAUTY / DTC</span>
              </div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="text-[54px] font-semibold tracking-[-0.03em] text-white">tano<span className="text-orange-400">.</span></div>
                <div className="font-mono text-[10px] tracking-[0.14em] text-white/40 mt-2">{'{ HERO PLACEHOLDER }'}</div>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-start mb-4.5">
                <div>
                  <div className="font-mono text-[11px] text-[#525252] mb-1.5">05 — 2025 · FEATURED</div>
                  <h3 className="text-[36px] font-medium tracking-tight m-0 text-[#ededed]">Tano Skincare</h3>
                </div>
              </div>
              <p className="m-0 mb-5.5 text-[#a3a3a3] text-[15px] leading-[1.6]">
                Clean skincare line. Built a routine builder with progressive disclosure and a custom shade-by-tone component powered by Shopify Functions for stock-aware bundling. Locked +27% CVR on mobile via 6-week split test.
              </p>
              <div className="flex gap-2 flex-wrap font-mono text-[11px] text-[#525252]">
                <span className="py-1.25 px-2.75 bg-white/4 rounded-[5px]">Shopify Functions</span>
                <span className="py-1.25 px-2.75 bg-white/4 rounded-[5px]">Bundling</span>
                <span className="py-1.25 px-2.75 bg-white/4 rounded-[5px]">Liquid</span>
                <span className="py-1.25 px-2.75 bg-green-500/8 text-[#86efac] rounded-[5px]">+27% CVR</span>
              </div>
            </div>
          </div>
        </a>
      </div>
    </section>
  )
}

export default selectedWork
