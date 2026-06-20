import { useEffect, useRef, useState } from 'react'
import { getProfile, type Variant } from '../lib/profile'

function parseValue(raw: string) {
  const match = raw.match(/^([^\d]*)(\d+)([^\d]*)$/)
  if (!match) return { prefix: raw, num: null, postfix: '' }
  return { prefix: match[1], num: parseInt(match[2], 10), postfix: match[3] }
}

function CountUp({ raw, suffix }: { raw: string; suffix: string }) {
  const { prefix, num, postfix } = parseValue(raw)
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const started = useRef(false)

  useEffect(() => {
    if (num === null) return
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const duration = 1000
          const start = performance.now()
          const tick = (now: number) => {
            const t = Math.min((now - start) / duration, 1)
            setCount(Math.round(t * num!))
            if (t < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [num])

  return (
    <div ref={ref} className="text-5xl font-medium tracking-[-0.04em] leading-none text-[#ededed]">
      {num === null ? raw : `${prefix}${count}${postfix}`}
      {suffix && <span className="text-green-500">{suffix}</span>}
    </div>
  )
}

const metrics = ({ variant = 'frontend' }: { variant?: Variant }) => {
  const items = getProfile(variant).metrics
  return (
    <section className="border-t border-b border-white/8 bg-white/1">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12 flex flex-col lg:grid lg:grid-cols-4 gap-8">
        {items.map(({ label, value, suffix }) => (
          <div key={label}>
            <div className="font-mono text-[10px] tracking-[0.16em] text-[#525252] mb-3.5">{label}</div>
            <CountUp raw={value} suffix={suffix} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default metrics
