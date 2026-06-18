import React from "react";

const hero = () => {
  return (
    <section className="relative max-w-[1280px] mx-auto px-8 pt-[120px] pb-[100px] overflow-hidden">
      {/* subtle grid bg */}
      <div
        className="absolute inset-0 bg-[length:64px_64px] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.025) 1px, transparent 1px)",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 40%, #000 30%, transparent 100%)",
        }}
      />

      <div className="relative">
        <div className="flex items-center gap-3   text-xs text-[#a3a3a3] mb-12">
          <span className="inline-flex items-center gap-2 py-[5px] px-[11px] border border-white/10 rounded-full bg-white/[.02]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] shadow-[0_0_12px_#22c55e]" />
            available — Q3 2026
          </span>
          <span className="text-[#525252]">v2.6 · last deploy 12h ago</span>
        </div>

        <h1 className="font-['Geist',system-ui,sans-serif] font-medium text-[clamp(56px,9vw,140px)] leading-[.95] tracking-[-.045em] m-0 text-[#ededed]">
          Frontend Developer
          <br />
          building{" "}
          <span className="bg-gradient-to-br from-[#fafafa] to-[#737373] bg-clip-text text-transparent">
            storefronts
          </span>
          <br />
          that ship revenue.
          <span className="cursor inline-block w-[.5em] h-[.9em] bg-[#ededed] align-[-.05em] ml-[.1em]" />
        </h1>

        <div className="grid grid-cols-[1.4fr_1fr] gap-[80px] mt-[80px] pt-12 border-t border-white/[.08]">
          <p className="m-0 text-[#a3a3a3] text-lg leading-[1.6] max-w-[62ch]">
            Software engineer with 3 years across Liquid, Laravel and Vue.
            Currently at <span className="text-[#ededed]">Step Labs</span> in
            London — Shopify Plus, OS 2.0, Theme App Extensions, Checkout
            Extensibility. Influenced{" "}
            <span className="text-[#ededed]">£35M+ revenue</span> across{" "}
            <span className="text-[#ededed]">80+ DTC brands</span> through CRO,
            A/B testing and Core Web Vitals work.
          </p>
          <div className="flex flex-col gap-[14px]">
            <a
              href="#work"
              className="no-underline flex items-center justify-between py-[18px] px-[22px] bg-[#fafafa] text-[#0a0a0a] rounded-[10px] font-medium text-sm hover:bg-[#ededed] transition-colors"
            >
              <span>See selected work</span>
              <span className=" ">→</span>
            </a>
            <a
              href="#contact"
              className="no-underline flex items-center justify-between py-[18px] px-[22px] bg-white/[.04] text-[#ededed] border border-white/10 rounded-[10px] font-medium text-sm hover:bg-white/[.07] transition-colors"
            >
              <span>Start a project</span>
              <span className="  text-[#a3a3a3]">↗</span>
            </a>
            <div className="  text-[11px] text-[#525252] py-1 px-0.5 flex justify-between">
              <span>
                <a
                  href="/cdn-cgi/l/email-protection"
                  className="__cf_email__"
                  data-cfemail="d7b4bfa5bea488b4b4b4e1ef97b8a2a3bbb8b8bcf9b4b8ba"
                >
                  [email&#160;protected]
                </a>
              </span>
              <span>Lima · UTC−5</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default hero;
