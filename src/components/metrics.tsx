import React from 'react'

const metrics = () => {
  return (
       <section className="border-t border-b border-white/[0.08] bg-white/[0.015]">
    <div className="max-w-[1280px] mx-auto px-4 lg:px-8 py-12 flex flex-col lg:grid lg:grid-cols-4 gap-8">
      <div>
        <div className="font-mono text-[10px] tracking-[0.16em] text-[#525252] mb-[14px]">REVENUE INFLUENCED</div>
        <div className="text-5xl font-medium tracking-[-0.04em] leading-none text-[#ededed]">£35M<span className="text-green-500">+</span></div>
      </div>
      <div>
        <div className="font-mono text-[10px] tracking-[0.16em] text-[#525252] mb-[14px]">BRANDS SHIPPED</div>
        <div className="text-5xl font-medium tracking-[-0.04em] leading-none text-[#ededed]">80<span className="text-green-500">+</span></div>
      </div>
      <div>
        <div className="font-mono text-[10px] tracking-[0.16em] text-[#525252] mb-[14px]">GUARANTEED UPLIFT / 90D</div>
        <div className="text-5xl font-medium tracking-[-0.04em] leading-none text-[#ededed]">+30%</div>
      </div>
      <div>
        <div className="font-mono text-[10px] tracking-[0.16em] text-[#525252] mb-[14px]">LIGHTHOUSE MOBILE GAIN</div>
        <div className="text-5xl font-medium tracking-[-0.04em] leading-none text-[#ededed]">+40%</div>
      </div>
    </div>
  </section>

  )
}

export default metrics