import React from "react";
import { getProfile, type Variant } from "../lib/profile";

const ctas = [
  { href: '#work',    label: 'See selected work', arrow: '→', primary: true  },
  { href: '#contact', label: 'Start a project',   arrow: '↗', primary: false },
]

const hero = ({ variant = 'frontend' }: { variant?: Variant }) => {
  const profile = getProfile(variant)
  return (
    <section className="relative max-w-[1280px] mx-auto overflow-hidden px-4 lg:px-8 pt-14 lg:pt-30 pb-14 lg:pb-25">
      {/* subtle grid bg */}
      <div
        className="absolute inset-0 bg-[length:64px_64px] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.025) 1px, transparent 1px)",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 40%, #000 30%, transparent 100%)",
        }}
      />

      <div className="relative">
        <div className="flex items-center gap-3 text-xs text-[#a3a3a3] mb-12">
          <span className="inline-flex items-center gap-2 py-1.25 px-2.75 border border-white/10 rounded-full bg-white/2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] shadow-[0_0_12px_#22c55e]" />
            Ready for new opportunities
          </span>
          <span className="text-[#525252]">v2.6 · last deploy 12h ago</span>
        </div>

        <h1 className="font-['Geist',system-ui,sans-serif] font-medium text-[clamp(56px,9vw,140px)] leading-[.95] tracking-[-.045em] m-0 text-[#ededed]">
          {profile.hero.headlineA}
          <br />
          building{" "}
          <span className="bg-linear-to-br from-[#fafafa] to-[#737373] bg-clip-text text-transparent">
            {profile.hero.headlineHighlight}
          </span>
          <br />
          that ship revenue.
          <span className="cursor inline-block w-[.5em] h-[.9em] bg-[#ededed] align-[-.05em] ml-[.1em]" />
        </h1>

        <div className="flex flex-col lg:grid lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-20 pt-12 border-t border-white/8">
          <p className="m-0 text-[#a3a3a3] text-lg leading-[1.6] max-w-[62ch]">
            {profile.hero.paragraph}
          </p>

          <div className="flex flex-col gap-3.5">
            {ctas.map(({ href, label, arrow, primary }) => (
              <a key={href} href={href}
                className={`no-underline flex items-center justify-between py-4.5 px-5.5 rounded-[10px] font-medium text-sm transition-colors ${
                  primary
                    ? 'bg-[#fafafa] text-[#0a0a0a] hover:bg-[#ededed]'
                    : 'bg-white/4 text-[#ededed] border border-white/10 hover:bg-white/7'
                }`}
              >
                <span>{label}</span>
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
