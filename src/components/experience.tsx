import React from 'react'

const Experience = () => {
  return (
    <section id="experience" className="border-t border-white/8 bg-white/1">
      <div className="max-w-7xl mx-auto px-8 py-35">
        <div className="flex items-end justify-between mb-18">
          <div>
            <div className="font-mono text-[11px] tracking-[0.16em] text-[#525252] mb-4.5">/EXPERIENCE</div>
            <h2 className="text-[56px] font-medium tracking-[-0.04em] leading-none m-0 text-[#ededed]">Three years. Four teams.</h2>
          </div>
        </div>

        <div className="flex flex-col">
          {/* step labs */}
          <div className="grid grid-cols-[160px_1fr_1.2fr] gap-12 py-9 border-t border-white/8">
            <div className="font-mono text-xs text-[#a3a3a3] leading-[1.7]">
              OCT 2024<br/>
              <span className="text-[#525252]">— PRESENT</span><br/>
              <span className="text-[#22c55e] inline-flex items-center gap-1.5 mt-1.5"><span className="w-1.5 h-1.5 rounded-full bg-[#22c55e]"></span>active</span>
            </div>
            <div>
              <div className="font-mono text-[11px] text-[#525252] mb-2">SHOPIFY DEVELOPER · LONDON, UK · REMOTE</div>
              <h3 className="text-[28px] font-medium tracking-tight m-0 mb-3.5 text-[#ededed]">Step Labs</h3>
              <p className="m-0 text-[#a3a3a3] leading-[1.6]">
                Web development agency serving 7–8 figure DTC brands across UK and US. Shopify Plus, OS 2.0, Theme App Extensions, Checkout Extensibility.
              </p>
            </div>
            <ul className="list-none p-0 m-0 text-[#d4d4d4] text-sm leading-[1.6]">
              <li className="py-1.5 border-b border-white/5 flex gap-3.5"><span className="text-[#525252]">01</span> Architected storefronts for <span className="text-[#ededed]">80+ DTC brands</span>, influencing £35M attributable revenue.</li>
              <li className="py-1.5 border-b border-white/5 flex gap-3.5"><span className="text-[#525252]">02</span> Weekly A/B tests on PDP, cart, checkout — <span className="text-[#ededed]">+30% uplift</span> guaranteed / 90d.</li>
              <li className="py-1.5 border-b border-white/5 flex gap-3.5"><span className="text-[#525252]">03</span> <span className="text-[#ededed]">+25–40% Lighthouse mobile</span> across 10+ themes via LCP / CLS / INP tuning.</li>
              <li className="py-1.5 flex gap-3.5"><span className="text-[#525252]">04</span> Integrated 15+ apps via CLI, Admin & Storefront API (GraphQL).</li>
            </ul>
          </div>

          {/* rpu */}
          <div className="grid grid-cols-[160px_1fr_1.2fr] gap-12 py-9 border-t border-white/8">
            <div className="font-mono text-xs text-[#a3a3a3] leading-[1.7]">
              MAR 2024<br/>
              <span className="text-[#525252]">— MAR 2025</span>
            </div>
            <div>
              <div className="font-mono text-[11px] text-[#525252] mb-2">FULL-STACK DEVELOPER · AREQUIPA, PE · HYBRID</div>
              <h3 className="text-[28px] font-medium tracking-tight m-0 mb-3.5 text-[#ededed]">RPU & Asociados</h3>
              <p className="m-0 text-[#a3a3a3] leading-[1.6]">
                Accounting firm. Led a multi-tenant accounting platform for 5+ companies with SUNAT integration. Laravel MVC + Livewire.
              </p>
            </div>
            <ul className="list-none p-0 m-0 text-[#d4d4d4] text-sm leading-[1.6]">
              <li className="py-1.5 border-b border-white/5 flex gap-3.5"><span className="text-[#525252]">01</span> Real-time cash mgmt with Livewire + Wire UI; <span className="text-[#ededed]">−70% manual reconciliation</span>.</li>
              <li className="py-1.5 border-b border-white/5 flex gap-3.5"><span className="text-[#525252]">02</span> Designed <span className="text-[#ededed]">30+ normalized SQL schemas</span> across 8 financial modules.</li>
              <li className="py-1.5 border-b border-white/5 flex gap-3.5"><span className="text-[#525252]">03</span> <span className="text-[#ededed]">−40% regression bugs</span> via Git-based code review workflows.</li>
              <li className="py-1.5 flex gap-3.5"><span className="text-[#525252]">04</span> Responsive Bootstrap / SCSS UI, <span className="text-[#ededed]">−25% time-to-rollout</span>.</li>
            </ul>
          </div>

          {/* f5 */}
          <div className="grid grid-cols-[160px_1fr_1.2fr] gap-12 py-9 border-t border-white/8">
            <div className="font-mono text-xs text-[#a3a3a3] leading-[1.7]">
              NOV 2023<br/>
              <span className="text-[#525252]">— FEB 2024</span>
            </div>
            <div>
              <div className="font-mono text-[11px] text-[#525252] mb-2">FULL-STACK DEVELOPER · LAMBAYEQUE, PE · REMOTE</div>
              <h3 className="text-[28px] font-medium tracking-tight m-0 mb-3.5 text-[#ededed]">F5 Solutions</h3>
              <p className="m-0 text-[#a3a3a3] leading-[1.6]">
                Edtech. Built an online learning platform powering 50+ courses. Laravel + Vue.js + Inertia.js.
              </p>
            </div>
            <ul className="list-none p-0 m-0 text-[#d4d4d4] text-sm leading-[1.6]">
              <li className="py-1.5 border-b border-white/5 flex gap-3.5"><span className="text-[#525252]">01</span> Shipped monolithic Laravel + Inertia stack across <span className="text-[#ededed]">50+ courses</span>.</li>
              <li className="py-1.5 border-b border-white/5 flex gap-3.5"><span className="text-[#525252]">02</span> <span className="text-[#ededed]">−35% content load time</span> via query tuning on 15+ tables.</li>
              <li className="py-1.5 border-b border-white/5 flex gap-3.5"><span className="text-[#525252]">03</span> Accessible, responsive UI across 3+ breakpoints.</li>
              <li className="py-1.5 flex gap-3.5"><span className="text-[#525252]">04</span> <span className="text-[#ededed]">20+ features</span> shipped in tight agile sprints.</li>
            </ul>
          </div>

          {/* ludik */}
          <div className="grid grid-cols-[160px_1fr_1.2fr] gap-12 py-9 border-t border-b border-white/8">
            <div className="font-mono text-xs text-[#a3a3a3] leading-[1.7]">
              JUN 2023<br/>
              <span className="text-[#525252]">— SEP 2023</span>
            </div>
            <div>
              <div className="font-mono text-[11px] text-[#525252] mb-2">FRONTEND DEVELOPER · PERU · REMOTE</div>
              <h3 className="text-[28px] font-medium tracking-tight m-0 mb-3.5 text-[#ededed]">Ludik</h3>
              <p className="m-0 text-[#a3a3a3] leading-[1.6]">
                Boutique web studio. WordPress, PHP, ACF. Production sites: Soho Inmobiliaria, Sayers Ophthalmology, No Hay Sin Suerte, Codekillers, Jorge Luna.
              </p>
            </div>
            <ul className="list-none p-0 m-0 text-[#d4d4d4] text-sm leading-[1.6]">
              <li className="py-1.5 border-b border-white/5 flex gap-3.5"><span className="text-[#525252]">01</span> Shipped <span className="text-[#ededed]">4+ production WordPress sites</span> end-to-end.</li>
              <li className="py-1.5 border-b border-white/5 flex gap-3.5"><span className="text-[#525252]">02</span> <span className="text-[#ededed]">+30–50% organic traffic</span> via technical SEO on 4+ clients.</li>
              <li className="py-1.5 border-b border-white/5 flex gap-3.5"><span className="text-[#525252]">03</span> <span className="text-[#ededed]">+20% avg. retention</span> via 12+ interactive animations.</li>
              <li className="py-1.5 flex gap-3.5"><span className="text-[#525252]">04</span> Custom subscription / raffle module on Jorge Luna's WP site.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
