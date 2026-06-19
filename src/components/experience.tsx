import { getProfile, type Variant, type BulletNode } from '../lib/profile'

function renderBullet(nodes: BulletNode) {
  return nodes.map((node, i) =>
    typeof node === 'string'
      ? node
      : <span key={i} className="text-[#ededed]">{node.highlight}</span>
  )
}

const Experience = ({ variant = 'frontend' }: { variant?: Variant }) => {
  const experiences = getProfile(variant).experience
  return (
    <section id="experience" className="border-t border-white/8 bg-white/1">
      <div className="max-w-7xl mx-auto px-4 pt-14 pb-14 lg:px-8 lg:py-35">
        <div className="flex items-end justify-between mb-18">
          <div>
            <div className="font-mono text-[11px] tracking-[0.16em] text-[#525252] mb-4.5">/EXPERIENCE</div>
            <h2 className="text-5xl lg:text-[56px] font-medium tracking-[-0.04em] leading-none m-0 text-[#ededed]">Three years. Four teams.</h2>
          </div>
        </div>

        <div className="flex flex-col">
          {experiences.map((exp) => (
            <div
              key={exp.company}
              className={`flex flex-col lg:grid lg:grid-cols-[160px_1fr_1.2fr] gap-6 lg:gap-12 py-9 border-t ${exp.last ? 'border-b' : ''} border-white/8`}
            >
              <div className="font-mono text-xs text-[#a3a3a3] leading-[1.7]">
                {exp.dateStart}<br/>
                <span className="text-[#525252]">— {exp.dateEnd}</span>
                {exp.active && (
                  <><br/><span className="text-[#22c55e] inline-flex items-center gap-1.5 mt-1.5"><span className="w-1.5 h-1.5 rounded-full bg-[#22c55e]"></span>active</span></>
                )}
              </div>
              <div>
                <div className="font-mono text-[11px] text-[#525252] mb-2">{exp.role}</div>
                <h3 className="text-[28px] font-medium tracking-tight m-0 mb-3.5 text-[#ededed]">{exp.company}</h3>
                <p className="m-0 text-[#a3a3a3] leading-[1.6]">{exp.description}</p>
              </div>
              <ul className="list-none p-0 m-0 text-[#d4d4d4] text-sm leading-[1.6]">
                {exp.bullets.map((bullet, i) => (
                  <li
                    key={i}
                    className={`py-1.5   ${i < exp.bullets.length - 1 ? 'border-b border-white/5' : ''}`}
                  >
                    <span className="text-[#525252] mr-2">{String(i + 1).padStart(2, '0')}</span>
                    {renderBullet(bullet)}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
