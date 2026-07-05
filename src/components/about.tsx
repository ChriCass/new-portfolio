import { useT, useLanguage } from '../i18n'
import { getProfile, type Variant } from '../lib/profile'
import portraitImage from '../assets/img/new-linkedin.webp'

const about = ({ variant = 'frontend' }: { variant?: Variant }) => {
  const t = useT()
  const { langKey } = useLanguage()
  const profile = getProfile(variant)

  const stats = [
    { label: t('about.stats.based'),     value: t('about.stats.basedValue'), sub: 'UTC−5'                     },
    { label: t('about.stats.languages'), value: 'ES / EN',                    sub: 'C1 · EFSET 64'            },
    { label: t('about.stats.studying'),  value: 'CS & Eng',                   sub: 'U. Científica del Sur'    },
    { label: t('about.stats.focus'),     value: 'Design Systems',             sub: 'Motion · A11y'            },
  ]

  return (
    <section id="about" className="max-w-7xl mx-auto px-4 lg:px-8  pt-14 pb-14 lg:py-35">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-x-20 items-start">
        <div className="order-1">
          <div className="font-mono text-[11px] tracking-[0.16em] text-[#525252] mb-4.5">/ABOUT</div>
          <h2 key={langKey} className="text-5xl lg:text-[56px] font-medium tracking-[-0.04em] leading-[1.02] m-0 mb-10 text-[#ededed] text-enter">
            {t(`about.headlineA.${variant}`)} <span className="text-[#737373]">{t(`about.headlineB.${variant}`)}</span>
          </h2>
        </div>

        <div className="order-2 w-full lg:row-span-2 lg:row-start-1 lg:col-start-2 mb-10 lg:mb-0">
          <div className="relative aspect-4/5 rounded-xl overflow-hidden border border-white/8" style={{background:'linear-gradient(180deg,#1a1a1a 0%,#0a0a0a 100%)'}}>
            <img src={portraitImage} alt={profile.about.portrait.name} className="absolute inset-0 w-full h-full object-cover" />
          </div>
          <div className="font-mono text-[11px] text-[#525252] mt-3.5 leading-[1.8]">
            {t('about.portrait.name').toUpperCase()}<br/>
            {t('about.stats.location').toUpperCase()}
          </div>
        </div>

        <div className="order-3 lg:col-start-1">
          <div className="flex flex-col gap-5 lg:grid lg:grid-cols-2 lg:gap-10 text-[#a3a3a3] leading-[1.7] text-[15px]">
            <p key={langKey + 1} className="m-0 text-enter">{t(`about.p1.${variant}`)}</p>
            <p key={langKey + 2} className="m-0 text-enter">{t(`about.p2.${variant}`)}</p>
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
