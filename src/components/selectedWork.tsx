import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { getProfile, type Variant } from '../lib/profile'

type ProjectKey = 'invigorated' | 'suji' | 'sowell' | 'berkeley' | 'tano'

interface BaseCard {
  key: ProjectKey
  id: string
  href: string
  year: string
  title: string
  featured?: boolean
  thumb: React.ReactNode
}

const baseCards: BaseCard[] = [
  {
    key: 'invigorated', id: '01', href: 'https://invigoratedwater.com', year: '2025', title: 'Invigorated Water',
    thumb: (
      <div className="relative aspect-16/10 rounded-lg overflow-hidden" style={{background:'linear-gradient(135deg,#1e3a5f 0%,#0a1929 100%)'}}>
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
    key: 'suji', id: '02', href: 'https://www.trysuji.com', year: '2025', title: 'Try Suji',
    thumb: (
      <div className="relative aspect-16/10 rounded-lg overflow-hidden" style={{background:'linear-gradient(135deg,#3a2914 0%,#1a0f05 100%)'}}>
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
    key: 'sowell', id: '03', href: 'https://getsowell.com', year: '2024', title: 'Get Sowell',
    thumb: (
      <div className="relative aspect-16/10 rounded-lg overflow-hidden" style={{background:'linear-gradient(135deg,#1a2e22 0%,#0a1410 100%)'}}>
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
    key: 'berkeley', id: '04', href: 'https://berkeleylife.com', year: '2024', title: 'Berkeley Life',
    thumb: (
      <div className="relative aspect-16/10 rounded-lg overflow-hidden" style={{background:'linear-gradient(135deg,#2a2a2a 0%,#0a0a0a 100%)'}}>
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
  {
    key: 'tano', id: '05', href: 'https://tanoskincare.com', year: '2025', title: 'Tano Skincare', featured: true,
    thumb: (
      <div className="relative aspect-16/10 rounded-lg overflow-hidden" style={{background:'linear-gradient(135deg,#3a2418 0%,#1a0d05 100%)'}}>
        <div className="absolute inset-0" style={{backgroundImage:'radial-gradient(circle at 30% 30%,rgba(251,146,60,.22),transparent 50%),radial-gradient(circle at 70% 70%,rgba(217,119,6,.18),transparent 50%)'}}></div>
        <div className="absolute inset-0" style={{backgroundImage:'linear-gradient(rgba(255,255,255,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.04) 1px,transparent 1px)',backgroundSize:'32px 32px'}}></div>
        <div className="absolute top-4 left-4 right-4 flex justify-between font-mono text-[10px] tracking-[0.14em] text-white/50">
          <span>● TANO SKINCARE</span><span>BEAUTY / DTC</span>
        </div>
        <div className="absolute bottom-6 left-6 right-6">
          <div className="text-[54px] font-semibold tracking-[-0.03em] text-white">tano<span className="text-orange-400">.</span></div>
          <div className="font-mono text-[10px] tracking-[0.14em] text-white/40 mt-2">{'{ HERO PLACEHOLDER }'}</div>
        </div>
      </div>
    ),
  },
]

type Card = BaseCard & { badge: string; desc: string; tags: string[]; metric: string }

const Tags = ({ card }: { card: Card }) => (
  <div className="flex gap-2 flex-wrap font-mono text-[11px] text-[#525252]">
    {card.tags.map(t => <span key={t} className="px-2.25 py-1 bg-white/4 rounded-[5px]">{t}</span>)}
    <span className="px-2.25 py-1 bg-green-500/8 text-[#86efac] rounded-[5px]">{card.metric}</span>
  </div>
)

const CardInner = ({ card }: { card: Card }) => (
  <a href={card.href} target="_blank" rel="noopener"
    className="no-underline text-inherit block h-full p-4 lg:p-7 border border-white/8 rounded-[14px] bg-white/1.5 hover:border-white/18 hover:bg-white/3 transition-colors">
    <div className="mb-6">{card.thumb}</div>
    <div className="flex flex-col gap-4 lg:justify-between items-start mb-3.5">
      <div>
        <div className="font-mono text-[11px] text-[#525252] mb-1.5">
          {card.id} — {card.year}{card.featured ? ' · FEATURED' : ''}
        </div>
        <h3 className="text-2xl font-medium tracking-[-0.02em] m-0 text-[#ededed]">{card.title}</h3>
      </div>
      <span className="font-mono text-[11px] text-[#a3a3a3] px-2.5 py-1 border border-white/10 rounded-full">{card.badge}</span>
    </div>
    <p className="m-0 mb-4.5 text-[#a3a3a3] text-sm leading-[1.55]">{card.desc}</p>
    <Tags card={card} />
  </a>
)

const FeaturedCard = ({ card }: { card: Card }) => (
  <a href={card.href} target="_blank" rel="noopener"
    className="no-underline text-inherit block p-7 border border-white/8 rounded-[14px] bg-white/1.5 col-span-full hover:border-white/18 hover:bg-white/3 transition-colors">
    <div className="grid grid-cols-[1.2fr_1fr] gap-8 items-center">
      {card.thumb}
      <div>
        <div className="flex justify-between items-start mb-4.5">
          <div>
            <div className="font-mono text-[11px] text-[#525252] mb-1.5">{card.id} — {card.year} · FEATURED</div>
            <h3 className="text-[36px] font-medium tracking-tight m-0 text-[#ededed]">{card.title}</h3>
          </div>
        </div>
        <p className="m-0 mb-5.5 text-[#a3a3a3] text-[15px] leading-[1.6]">{card.desc}</p>
        <Tags card={card} />
      </div>
    </div>
  </a>
)

const selectedWork = ({ variant = 'frontend' }: { variant?: Variant }) => {
  const profile = getProfile(variant)
  const cards: Card[] = baseCards.map(b => {
    const copy = profile.selectedWork.projects[b.key]
    return { ...b, badge: copy.badge, desc: copy.description, tags: copy.tags, metric: copy.metric }
  })

  return (
    <section id="work" className="pt-14 pb-14">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex flex-col gap-5 lg:items-end lg:justify-between mb-16">
          <div>
            <div className="font-mono text-[11px] tracking-[0.16em] text-[#525252] mb-4.5">/SELECTED_WORK</div>
            <h2 className="text-5xl lg:text-[64px] font-medium tracking-[-0.04em] leading-none m-0 text-[#ededed]">Storefronts in production.</h2>
          </div>
          <div className="font-mono text-xs text-[#a3a3a3] lg:text-right max-w-60">
            {profile.selectedWork.subtitle}
          </div>
        </div>
      </div>

      {/* Mobile: Swiper */}
      <div className="lg:hidden px-4">
        <Swiper slidesPerView={1.1} spaceBetween={16} grabCursor>
          {cards.map(card => (
            <SwiperSlide key={card.id}>
              <CardInner card={card} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Desktop: grid */}
      <div className="hidden lg:grid grid-cols-2 gap-6 max-w-7xl mx-auto px-8">
        {cards.map(card =>
          card.featured
            ? <FeaturedCard key={card.id} card={card} />
            : <CardInner key={card.id} card={card} />
        )}
      </div>
    </section>
  )
}

export default selectedWork
