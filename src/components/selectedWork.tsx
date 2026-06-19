import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

const cards = [
  {
    id: '01',
    href: 'https://invigoratedwater.com',
    year: '2025',
    title: 'Invigorated Water',
    badge: 'PDP · CART',
    desc: 'Premium water filtration storefront. Rebuilt PDP + cart against CWV; Theme App Extensions for subscription billing without theme bloat.',
    tags: ['Liquid', 'OS 2.0'],
    metric: '+32% LCP',
    thumb: (
      <div className="relative aspect-16/10 rounded-lg overflow-hidden mb-6" style={{background:'linear-gradient(135deg,#1e3a5f 0%,#0a1929 100%)'}}>
        <div className="absolute inset-0" style={{backgroundImage:'radial-gradient(circle at 30% 40%,rgba(96,165,250,.25),transparent 50%),radial-gradient(circle at 70% 70%,rgba(34,197,94,.15),transparent 50%)'}}></div>
        <div className="absolute inset-0" style={{backgroundImage:'linear-gradient(rgba(255,255,255,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.04) 1px,transparent 1px)',backgroundSize:'32px 32px'}}></div>
        <div className="absolute top-4 left-4 right-4 flex justify-between font-mono text-[10px] tracking-[0.14em] text-white/50">
          <span>● INVIGORATED WATER</span><span>SHOPIFY PLUS</span>
        </div>
        <div className="absolute bottom-6 left-6 right-6">
          <div className="text-[42px] font-semibold tracking-[-0.03em] text-white">invigorated<span className="text-blue-400">water</span></div>
          <div className="font-mono text-[10px] tracking-[0.14em] text-white/40 mt-2">{'{ HERO PLACEHOLDER }'}</div>
        </div>
      </div>
    ),
  },
  {
    id: '02',
    href: 'https://www.trysuji.com',
    year: '2025',
    title: 'Try Suji',
    badge: 'QUIZ · A/B',
    desc: 'Better-for-you noodle brand. Quiz-driven landing flow + 6-week A/B program on the PDP — variant B locked sustained AOV lift via bundle merchandising.',
    tags: ['Checkout Ext.', 'Functions'],
    metric: '+18% AOV',
    thumb: (
      <div className="relative aspect-16/10 rounded-lg overflow-hidden mb-6" style={{background:'linear-gradient(135deg,#3a2914 0%,#1a0f05 100%)'}}>
        <div className="absolute inset-0" style={{backgroundImage:'radial-gradient(circle at 70% 30%,rgba(251,191,36,.28),transparent 50%),radial-gradient(circle at 20% 80%,rgba(239,68,68,.18),transparent 50%)'}}></div>
        <div className="absolute inset-0" style={{backgroundImage:'linear-gradient(rgba(255,255,255,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.04) 1px,transparent 1px)',backgroundSize:'32px 32px'}}></div>
        <div className="absolute top-4 left-4 right-4 flex justify-between font-mono text-[10px] tracking-[0.14em] text-white/50">
          <span>● TRY SUJI</span><span>OS 2.0</span>
        </div>
        <div className="absolute bottom-6 left-6 right-6">
          <div className="text-[42px] font-semibold tracking-[-0.03em] text-white italic">suji.</div>
          <div className="font-mono text-[10px] tracking-[0.14em] text-white/40 mt-2">{'{ HERO PLACEHOLDER }'}</div>
        </div>
      </div>
    ),
  },
  {
    id: '03',
    href: 'https://getsowell.com',
    year: '2024',
    title: 'Get Sowell',
    badge: 'SUBSCRIPTIONS',
    desc: 'Sleep & wellness DTC brand. Quiz → personalized PDP flow; App Proxy + Customer Metafields persist state to drive subscription attach.',
    tags: ['Storefront API', 'GraphQL'],
    metric: '+24% sub attach',
    thumb: (
      <div className="relative aspect-16/10 rounded-lg overflow-hidden mb-6" style={{background:'linear-gradient(135deg,#1a2e22 0%,#0a1410 100%)'}}>
        <div className="absolute inset-0" style={{backgroundImage:'radial-gradient(circle at 50% 40%,rgba(134,239,172,.22),transparent 55%)'}}></div>
        <div className="absolute inset-0" style={{backgroundImage:'linear-gradient(rgba(255,255,255,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.04) 1px,transparent 1px)',backgroundSize:'32px 32px'}}></div>
        <div className="absolute top-4 left-4 right-4 flex justify-between font-mono text-[10px] tracking-[0.14em] text-white/50">
          <span>● SOWELL</span><span>WELLNESS</span>
        </div>
        <div className="absolute bottom-6 left-6 right-6">
          <div className="text-[42px] font-semibold tracking-[-0.03em] text-white">so<span className="text-[#86efac]">well</span></div>
          <div className="font-mono text-[10px] tracking-[0.14em] text-white/40 mt-2">{'{ HERO PLACEHOLDER }'}</div>
        </div>
      </div>
    ),
  },
  {
    id: '04',
    href: 'https://berkeleylife.com',
    year: '2024',
    title: 'Berkeley Life',
    badge: 'METAOBJECTS',
    desc: 'Nitric-oxide supplement brand backed by clinical research. Migrated to OS 2.0, rebuilt practitioner portal with metaobjects, shipped clinic finder.',
    tags: ['Metaobjects', 'Admin API'],
    metric: '−42% CLS',
    thumb: (
      <div className="relative aspect-16/10 rounded-lg overflow-hidden mb-6" style={{background:'linear-gradient(135deg,#2a2a2a 0%,#0a0a0a 100%)'}}>
        <div className="absolute inset-0" style={{backgroundImage:'radial-gradient(circle at 40% 50%,rgba(168,162,158,.18),transparent 50%)'}}></div>
        <div className="absolute inset-0" style={{backgroundImage:'linear-gradient(rgba(255,255,255,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.04) 1px,transparent 1px)',backgroundSize:'32px 32px'}}></div>
        <div className="absolute top-4 left-4 right-4 flex justify-between font-mono text-[10px] tracking-[0.14em] text-white/50">
          <span>● BERKELEY LIFE</span><span>SHOPIFY PLUS</span>
        </div>
        <div className="absolute bottom-6 left-6 right-6">
          <div className="text-[42px] font-semibold tracking-[-0.03em] text-white">berkeley<span className="text-[#a8a29e]">.life</span></div>
          <div className="font-mono text-[10px] tracking-[0.14em] text-white/40 mt-2">{'{ HERO PLACEHOLDER }'}</div>
        </div>
      </div>
    ),
  },
]

const CardInner = ({ card }: { card: typeof cards[number] }) => (
  <a href={card.href} target="_blank" rel="noopener" className="no-underline text-inherit block h-full p-7 border border-white/8 rounded-[14px] bg-white/1.5 hover:border-white/18 hover:bg-white/3 transition-colors">
    {card.thumb}
    <div className="flex flex-col gap-4 lg:justify-between items-start mb-3.5">
      <div>
        <div className="font-mono text-[11px] text-[#525252] mb-1.5">{card.id} — {card.year}</div>
        <h3 className="text-2xl font-medium tracking-[-0.02em] m-0 text-[#ededed]">{card.title}</h3>
      </div>
      <span className="font-mono text-[11px] text-[#a3a3a3] px-2.5 py-1 border border-white/10 rounded-full">{card.badge}</span>
    </div>
    <p className="m-0 mb-4.5 text-[#a3a3a3] text-sm leading-[1.55]">{card.desc}</p>
    <div className="flex gap-2 flex-wrap font-mono text-[11px] text-[#525252]">
      {card.tags.map(t => <span key={t} className="px-2.25 py-1 bg-white/4 rounded-[5px]">{t}</span>)}
      <span className="px-2.25 py-1 bg-green-500/8 text-[#86efac] rounded-[5px]">{card.metric}</span>
    </div>
  </a>
)

const selectedWork = () => {
  return (
    <section id="work" className="pt-14 pb-14">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex flex-col gap-5 lg:items-end lg:justify-between mb-16">
          <div>
            <div className="font-mono text-[11px] tracking-[0.16em] text-[#525252] mb-4.5">/SELECTED_WORK</div>
            <h2 className="text-[64px] font-medium tracking-[-0.04em] leading-none m-0 text-[#ededed]">Storefronts in production.</h2>
          </div>
          <div className="font-mono text-xs text-[#a3a3a3] lg:text-right max-w-60">
            5 of 80+ DTC brands<br/>
            shipped at <span className="text-[#ededed]">Step Labs</span> London<br/>
            <span className="text-[#525252]">2024 — 2026</span>
          </div>
        </div>
      </div>

      {/* Mobile: Swiper slider */}
      <div className="lg:hidden px-4">
        <Swiper
          slidesPerView={1.1}
          spaceBetween={16}
          grabCursor
        >
          {cards.map(card => (
            <SwiperSlide key={card.id}>
              <CardInner card={card} />
            </SwiperSlide>
          ))}
          {/* Card 05 featured */}
          <SwiperSlide>
            <a href="https://tanoskincare.com" target="_blank" rel="noopener" className="no-underline text-inherit block h-full p-7 border border-white/8 rounded-[14px] bg-white/1.5 hover:border-white/18 hover:bg-white/3 transition-colors">
              <div className="relative aspect-16/10 rounded-lg overflow-hidden mb-6" style={{background:'linear-gradient(135deg,#3a2418 0%,#1a0d05 100%)'}}>
                <div className="absolute inset-0" style={{backgroundImage:'radial-gradient(circle at 30% 30%,rgba(251,146,60,.22),transparent 50%),radial-gradient(circle at 70% 70%,rgba(217,119,6,.18),transparent 50%)'}}></div>
                <div className="absolute inset-0" style={{backgroundImage:'linear-gradient(rgba(255,255,255,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.04) 1px,transparent 1px)',backgroundSize:'32px 32px'}}></div>
                <div className="absolute top-4 left-4 right-4 flex justify-between font-mono text-[10px] tracking-[0.14em] text-white/[0.55]">
                  <span>● TANO SKINCARE</span><span>BEAUTY / DTC</span>
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="text-[54px] font-semibold tracking-[-0.03em] text-white">tano<span className="text-orange-400">.</span></div>
                  <div className="font-mono text-[10px] tracking-[0.14em] text-white/40 mt-2">{'{ HERO PLACEHOLDER }'}</div>
                </div>
              </div>
              <div className="flex justify-between items-start mb-3.5">
                <div>
                  <div className="font-mono text-[11px] text-[#525252] mb-1.5">05 — 2025 · FEATURED</div>
                  <h3 className="text-2xl font-medium tracking-[-0.02em] m-0 text-[#ededed]">Tano Skincare</h3>
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
            </a>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Desktop: original grid */}
      <div className="hidden lg:block max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-2 gap-6">
          {cards.map(card => (
            <CardInner key={card.id} card={card} />
          ))}

          {/* 05 — featured, full width */}
          <a href="https://tanoskincare.com" target="_blank" rel="noopener" className="no-underline text-inherit block p-7 border border-white/8 rounded-[14px] bg-white/1.5 col-span-full hover:border-white/18 hover:bg-white/3 transition-colors">
            <div className="grid grid-cols-[1.2fr_1fr] gap-8 items-center">
              <div className="relative aspect-16/10 rounded-lg overflow-hidden" style={{background:'linear-gradient(135deg,#3a2418 0%,#1a0d05 100%)'}}>
                <div className="absolute inset-0" style={{backgroundImage:'radial-gradient(circle at 30% 30%,rgba(251,146,60,.22),transparent 50%),radial-gradient(circle at 70% 70%,rgba(217,119,6,.18),transparent 50%)'}}></div>
                <div className="absolute inset-0" style={{backgroundImage:'linear-gradient(rgba(255,255,255,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.04) 1px,transparent 1px)',backgroundSize:'32px 32px'}}></div>
                <div className="absolute top-4 left-4 right-4 flex justify-between font-mono text-[10px] tracking-[0.14em] text-white/[0.55]">
                  <span>● TANO SKINCARE</span><span>BEAUTY / DTC</span>
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
      </div>
    </section>
  )
}

export default selectedWork
