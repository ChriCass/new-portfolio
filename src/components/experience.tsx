type BulletNode = (string | { highlight: string })[]

interface ExperienceItem {
  dateStart: string
  dateEnd: string
  active?: boolean
  role: string
  company: string
  description: string
  bullets: BulletNode[]
  last?: boolean
}

const experiences: ExperienceItem[] = [
  {
    dateStart: 'OCT 2024',
    dateEnd: 'PRESENT',
    active: true,
    role: 'SHOPIFY DEVELOPER · LONDON, UK · REMOTE',
    company: 'Step Labs',
    description:
      'Web development agency serving 7–8 figure DTC brands across UK and US. Shopify Plus, OS 2.0, Theme App Extensions, Checkout Extensibility.',
    bullets: [
      ['Architected storefronts for ', { highlight: '80+ DTC brands' }, ', influencing £35M attributable revenue.'],
      ['Weekly A/B tests on PDP, cart, checkout — ', { highlight: '+30% uplift' }, ' guaranteed / 90d.'],
      [{ highlight: '+25–40% Lighthouse mobile' }, ' across 10+ themes via LCP / CLS / INP tuning.'],
      ['Integrated 15+ apps via CLI, Admin & Storefront API (GraphQL).'],
    ],
  },
  {
    dateStart: 'MAR 2024',
    dateEnd: 'MAR 2025',
    role: 'FULL-STACK DEVELOPER · AREQUIPA, PE · HYBRID',
    company: 'RPU & Asociados',
    description:
      'Accounting firm. Led a multi-tenant accounting platform for 5+ companies with SUNAT integration. Laravel MVC + Livewire.',
    bullets: [
      ['Real-time cash mgmt with Livewire + Wire UI; ', { highlight: '−70% manual reconciliation' }, '.'],
      ['Designed ', { highlight: '30+ normalized SQL schemas' }, ' across 8 financial modules.'],
      [{ highlight: '−40% regression bugs' }, ' via Git-based code review workflows.'],
      ['Responsive Bootstrap / SCSS UI, ', { highlight: '−25% time-to-rollout' }, '.'],
    ],
  },
  {
    dateStart: 'NOV 2023',
    dateEnd: 'FEB 2024',
    role: 'FULL-STACK DEVELOPER · LAMBAYEQUE, PE · REMOTE',
    company: 'F5 Solutions',
    description:
      'Edtech. Built an online learning platform powering 50+ courses. Laravel + Vue.js + Inertia.js.',
    bullets: [
      ['Shipped monolithic Laravel + Inertia stack across ', { highlight: '50+ courses' }, '.'],
      [{ highlight: '−35% content load time' }, ' via query tuning on 15+ tables.'],
      ['Accessible, responsive UI across 3+ breakpoints.'],
      [{ highlight: '20+ features' }, ' shipped in tight agile sprints.'],
    ],
  },
  {
    dateStart: 'JUN 2023',
    dateEnd: 'SEP 2023',
    last: true,
    role: 'FRONTEND DEVELOPER · PERU · REMOTE',
    company: 'Ludik',
    description:
      'Boutique web studio. WordPress, PHP, ACF. Production sites: Soho Inmobiliaria, Sayers Ophthalmology, No Hay Sin Suerte, Codekillers, Jorge Luna.',
    bullets: [
      ['Shipped ', { highlight: '4+ production WordPress sites' }, ' end-to-end.'],
      [{ highlight: '+30–50% organic traffic' }, ' via technical SEO on 4+ clients.'],
      [{ highlight: '+20% avg. retention' }, ' via 12+ interactive animations.'],
      ["Custom subscription / raffle module on Jorge Luna's WP site."],
    ],
  },
]

function renderBullet(nodes: BulletNode) {
  return nodes.map((node, i) =>
    typeof node === 'string'
      ? node
      : <span key={i} className="text-[#ededed]">{node.highlight}</span>
  )
}

const Experience = () => {
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
