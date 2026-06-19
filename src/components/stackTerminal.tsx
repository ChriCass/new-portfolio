import React from 'react'

const stack = {
  shopify:   ["Liquid", "OS 2.0", "Theme App Ext.", "Metafields", "Metaobjects", "CLI", "Polaris", "Admin API", "Storefront API", "Webhooks", "OAuth 2.0", "Shopify Plus", "Checkout Ext.", "Functions"],
  languages: ["JavaScript", "TypeScript", "PHP", "HTML5", "CSS3", "SQL", "Liquid", "C#"],
  frameworks:["Vue.js", "Laravel", "Inertia.js", "Livewire", "Wire UI", "Bootstrap", "Tailwind", "SCSS", "jQuery", "WordPress", "ACF"],
  databases: ["MySQL", "PostgreSQL", "SQL Server"],
  methods:   ["CRO", "A/B Testing", "Mobile-First", "Core Web Vitals", "Technical SEO", "Agile/Scrum", "Code Review"],
  tools:     ["Git", "GitHub", "GH Actions", "Lighthouse", "DevTools", "Vite", "NPM"],
}

const Row = ({ label, items }: { label: string; items: string[] }) => (
  <>
    <div className="text-[#737373] mt-3.5">// {label}</div>
    <div>
      <span className="text-[#a78bfa]">{label}</span>:{' '}[
      {items.map((item, i) => (
        <span key={item}>
          <span className="text-[#86efac]">"{item}"</span>{i < items.length - 1 ? ', ' : ''}
        </span>
      ))}
      ],
    </div>
  </>
)

const stackTerminal = () => {
  return (
    <section id="stack" className="max-w-7xl mx-auto px-4 lg:px-8 pt-14 pb-14 lg:pt-35 lg:pb-25">
      <div className="flex flex-col lg:grid lg:grid-cols-[1fr_1.4fr] gap-20 items-start">
        <div>
          <div className="font-mono text-[11px] tracking-[0.16em] text-[#525252] mb-4.5">/STACK</div>
          <h2 className="text-5xl lg:text-[56px] font-medium tracking-[-0.04em] leading-none m-0 mb-6 text-[#ededed]">
            The daily<br/>toolkit.
          </h2>
          <p className="m-0 text-[#a3a3a3] leading-[1.6] max-w-[36ch]">
            Pragmatic full-stack tooling oriented around Shopify and Laravel. Opinionated about Liquid hygiene, CWV and code reviews that read like writing.
          </p>
        </div>

        {/* terminal card */}
        <div className="border border-white/10 rounded-[14px] bg-[#080808] overflow-hidden">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-white/6 bg-white/2">
            <span className="w-2.75 h-2.75 rounded-full bg-[#ff5f57]"></span>
            <span className="w-2.75 h-2.75 rounded-full bg-[#febc2e]"></span>
            <span className="w-2.75 h-2.75 rounded-full bg-[#28c840]"></span>
            <span className="ml-3.5 font-mono text-[11px] text-[#737373]">~/christian/stack.json</span>
          </div>
          <div className="px-8 py-7 font-mono text-[13px] leading-loose text-[#d4d4d4]">
            {Object.entries(stack).map(([label, items]) => (
              <Row key={label} label={label} items={items} />
            ))}
            <div className="mt-4.5 text-[#737373]">
              <span className="text-green-500">$</span> _<span className="inline-block w-[0.5em] h-[1em] bg-[#d4d4d4] align-[-0.1em] ml-[0.05em]"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default stackTerminal
