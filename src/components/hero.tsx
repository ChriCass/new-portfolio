import { useEffect } from "react";
import { useT, useLanguage } from "../i18n";
import { type Variant } from "../lib/profile";

const hero = ({ variant = 'frontend' }: { variant?: Variant }) => {
  const t = useT()
  const { langKey } = useLanguage()

  useEffect(() => {
    const dot = document.getElementById('dot');
    if (!dot) return;

    let counter = 0;
    const dotAnimation = setInterval(() => {
      counter++;
      if (counter % 2 === 0) {
        dot.classList.add('inline-block');
        dot.classList.remove('hidden');
      } else {
        dot.classList.add('hidden');
        dot.classList.remove('inline-block');
      }
    }, 500);

    return () => clearInterval(dotAnimation);
  }, []);

  const ctas = [
    { href: '#work',    key: 'hero.cta.work',    arrow: '→', primary: true  },
    { href: '#contact', key: 'hero.cta.contact',  arrow: '↗', primary: false },
  ]

  return (
    <section className="relative max-w-[1280px] mx-auto overflow-hidden px-4 lg:px-8 pt-14 lg:pt-30 pb-14 lg:pb-25">
      <div
        className="absolute inset-0 bg-[length:64px_64px] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.025) 1px, transparent 1px)",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 40%, #000 30%, transparent 100%)",
        }}
      />

      <div className="relative">
        <h1 key={langKey} className="font-['Geist',system-ui,sans-serif] font-medium text-[clamp(56px,9vw,140px)] leading-[.95] tracking-[-.045em] m-0 mb-12 text-[#ededed] text-enter">
          {t(`hero.headlineA.${variant}`)}
          <br />
          {t('hero.building')}{" "}
          <span className="bg-linear-to-br from-[#fafafa] to-[#737373] bg-clip-text text-transparent">
            {t(`hero.headlineHighlight.${variant}`)}
          </span>
          <br />
          {t('hero.shipRevenue')}
          <span id="dot" className="cursor hidden w-[.5em] h-[.6em] bg-[#ededed] align-[-.05em] ml-[.1em]" />
        </h1>

        <div className="flex flex-col lg:grid lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-20 pt-12 border-t border-white/8">
          <p key={langKey + 1} className="m-0 text-[#a3a3a3] text-lg leading-[1.6] max-w-[62ch] text-enter">
            {t(`hero.paragraph.${variant}`)}
          </p>

          <div className="flex flex-col gap-3.5">
            {ctas.map(({ href, key, arrow, primary }) => (
              <a key={href} href={href}
                className={`no-underline flex items-center justify-between py-4.5 px-5.5 rounded-[10px] font-medium text-sm transition-colors ${
                  primary
                    ? 'bg-[#fafafa] text-[#0a0a0a] hover:bg-[#ededed]'
                    : 'bg-white/4 text-[#ededed] border border-white/10 hover:bg-white/7'
                }`}
              >
                <span>{t(key)}</span>
                <span className={primary ? '' : 'text-[#a3a3a3]'}>{arrow}</span>
              </a>
            ))}
            <div className="font-mono text-[11px] text-[#525252] py-1 px-0.5 flex justify-between">
              <a href="mailto:chris_ccc68@outlook.com" className="text-[#525252] no-underline hover:text-[#a3a3a3] transition-colors">
                chris_ccc68@outlook.com
              </a>
              <span>Peru · UTC−5</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default hero;
