import React from 'react'

const items = [
  { label: 'REVENUE INFLUENCED',    value: '£35M', suffix: '+' },
  { label: 'BRANDS SHIPPED',        value: '80',   suffix: '+' },
  { label: 'GUARANTEED UPLIFT / 90D', value: '+30%', suffix: ''  },
  { label: 'LIGHTHOUSE MOBILE GAIN', value: '+40%', suffix: ''  },
]

const metrics = () => {
  return (
    <section className="border-t border-b border-white/8 bg-white/1">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12 flex flex-col lg:grid lg:grid-cols-4 gap-8">
        {items.map(({ label, value, suffix }) => (
          <div key={label}>
            <div className="font-mono text-[10px] tracking-[0.16em] text-[#525252] mb-3.5">{label}</div>
            <div className="text-5xl font-medium tracking-[-0.04em] leading-none text-[#ededed]">
              {value}{suffix && <span className="text-green-500">{suffix}</span>}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default metrics
