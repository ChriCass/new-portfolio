import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { getProfile, type Variant } from '../lib/profile'
import getSoWellImage from '../assets/img/portfolio-projects-1.webp'
import img2 from '../assets/img/portfolio-projects-2.webp'
import klImage from '../assets/img/portfolio-projects-3.webp'
import img4 from '../assets/img/portfolio-projects-4.webp'
import img5 from '../assets/img/portfolio-projects-5.webp'

type ProjectKey = 'kayelarcky' | 'suji' | 'sowell' | 'berkeley' | 'tano'

interface BaseCard {
  key: ProjectKey
  id: string
  href: string
  year: string
  title: string
  featured?: boolean
  image?: string
  overlay: string
  tag: string
  brand: React.ReactNode
}

const baseCards: BaseCard[] = [
  {
    key: 'kayelarcky', id: '01', href: 'https://kayelarcky.com', year: '2025', title: 'Kayelarcky',
    image: klImage, overlay: '#956867',
    tag: 'Rebrand',
    brand: <>kayelarcky<span className="text-blue-400">.</span></>,
  },
  {
    key: 'suji', id: '02', href: 'https://www.trysuji.com', year: '2025', title: 'Try Suji',
    image: img2, overlay: '#181818',
    tag: 'OS 2.0',
    brand: <span className="italic">suji.</span>,
  },
  {
    key: 'sowell', id: '03', href: 'https://getsowell.com', year: '2024', title: 'Get Sowell',
    image: getSoWellImage, overlay: '#1b2152',
    tag: 'WELLNESS',
    brand: <>so<span className="text-[#86efac]">well</span></>,
  },
  {
    key: 'berkeley', id: '04', href: 'https://berkeleylife.com', year: '2024', title: 'Berkeley Life',
    image: img4, overlay: '#1b1e2a',
    tag: 'SHOPIFY PLUS',
    brand: <>berkeley<span className="text-[#a8a29e]">.life</span></>,
  },
  {
    key: 'tano', id: '05', href: 'https://tanoskincare.com', year: '2025', title: 'Tano Skincare', featured: true,
    image: img5, overlay: '#3d441e',
    tag: 'BEAUTY / DTC',
    brand: <>tano<span className="text-orange-400">.</span></>,
  },
]

const PLACEHOLDER_BG: Record<ProjectKey, string> = {
  kayelarcky: 'linear-gradient(135deg,#1e3a5f 0%,#0a1929 100%)',
  suji:        'linear-gradient(135deg,#3a2914 0%,#1a0f05 100%)',
  sowell:      'linear-gradient(135deg,#1a2e22 0%,#0a1410 100%)',
  berkeley:    'linear-gradient(135deg,#2a2a2a 0%,#0a0a0a 100%)',
  tano:        'linear-gradient(135deg,#3a2418 0%,#1a0d05 100%)',
}

const Thumb = ({ card }: { card: BaseCard }) => (
  <div className="relative aspect-16/10 rounded-lg overflow-hidden" style={{ background: PLACEHOLDER_BG[card.key] }}>
    {card.image && (
      <img
        src={card.image}
        alt={card.title}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
    )}
    {card.image && (
      <div className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-60" style={{ background: `linear-gradient(to top, ${card.overlay}cc 0%, ${card.overlay}55 50%, transparent 100%)` }} />
    )}
    <div className="absolute top-4 left-4 right-4 flex justify-between font-mono text-[10px] tracking-[0.14em] text-white/70 drop-shadow">
      <span>● {card.title.toUpperCase()}</span><span>{card.tag}</span>
    </div>
    {!card.image && (
      <div className="absolute bottom-6 left-6 right-6">
        <div className={`${card.featured ? 'text-[54px]' : 'text-[42px]'} font-semibold tracking-[-0.03em] text-white`}>{card.brand}</div>
        <div className="font-mono text-[10px] tracking-[0.14em] text-white/40 mt-2">{'{ HERO PLACEHOLDER }'}</div>
      </div>
    )}
  </div>
)

type Card = BaseCard & { badge: string; desc: string; tags: string[]; metric: string }

const Tags = ({ card }: { card: Card }) => (
  <div className="flex gap-2 flex-wrap font-mono text-[11px] text-[#525252]">
    {card.tags.map(t => <span key={t} className="px-2.25 py-1 bg-white/4 rounded-[5px]">{t}</span>)}
    <span className="px-2.25 py-1 bg-green-500/8 text-[#86efac] rounded-[5px]">{card.metric}</span>
  </div>
)

const CardInner = ({ card }: { card: Card }) => (
  <a href={card.href} target="_blank" rel="noopener"
    className="group no-underline text-inherit block h-full p-4 lg:p-7 border border-white/8 rounded-[14px] bg-white/1.5 hover:border-white/18 hover:bg-white/3 transition-colors">
    <div className="mb-6"><Thumb card={card} /></div>
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
    className="group no-underline text-inherit block p-7 border border-white/8 rounded-[14px] bg-white/1.5 col-span-full hover:border-white/18 hover:bg-white/3 transition-colors">
    <div className="grid grid-cols-[1.2fr_1fr] gap-8 items-center">
      <Thumb card={card} />
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
