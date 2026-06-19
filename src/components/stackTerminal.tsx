import React from 'react'

const stackTerminal = () => {
  return (
    <section id="stack" className="max-w-7xl mx-auto px-4 lg:px-8 pt-14 pb-14 lg:pt-35 lg:pb-25">
      <div className="flex flex-col lg:grid lg:grid-cols-[1fr_1.4fr] gap-20 items-start">
        <div>
          <div className="font-mono text-[11px] tracking-[0.16em] text-[#525252] mb-4.5">/STACK</div>
          <h2 className="text-[56px] font-medium tracking-[-0.04em] leading-none m-0 mb-6 text-[#ededed]">
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
            <div className="text-[#737373]">// shopify</div>
            <div><span className="text-[#a78bfa]">shopify</span>: [<span className="text-[#86efac]">"Liquid"</span>, <span className="text-[#86efac]">"OS 2.0"</span>, <span className="text-[#86efac]">"Theme App Ext."</span>, <span className="text-[#86efac]">"Metafields"</span>, <span className="text-[#86efac]">"Metaobjects"</span>,</div>
            <div className="pl-6"><span className="text-[#86efac]">"CLI"</span>, <span className="text-[#86efac]">"Polaris"</span>, <span className="text-[#86efac]">"Admin API"</span>, <span className="text-[#86efac]">"Storefront API"</span>, <span className="text-[#86efac]">"Webhooks"</span>,</div>
            <div className="pl-6"><span className="text-[#86efac]">"OAuth 2.0"</span>, <span className="text-[#86efac]">"Shopify Plus"</span>, <span className="text-[#86efac]">"Checkout Ext."</span>, <span className="text-[#86efac]">"Functions"</span>],</div>

            <div className="text-[#737373] mt-3.5">// languages</div>
            <div><span className="text-[#a78bfa]">languages</span>: [<span className="text-[#86efac]">"JavaScript"</span>, <span className="text-[#86efac]">"TypeScript"</span>, <span className="text-[#86efac]">"PHP"</span>, <span className="text-[#86efac]">"HTML5"</span>, <span className="text-[#86efac]">"CSS3"</span>, <span className="text-[#86efac]">"SQL"</span>, <span className="text-[#86efac]">"Liquid"</span>, <span className="text-[#86efac]">"C#"</span>],</div>

            <div className="text-[#737373] mt-3.5">// frameworks</div>
            <div><span className="text-[#a78bfa]">frameworks</span>: [<span className="text-[#86efac]">"Vue.js"</span>, <span className="text-[#86efac]">"Laravel"</span>, <span className="text-[#86efac]">"Inertia.js"</span>, <span className="text-[#86efac]">"Livewire"</span>, <span className="text-[#86efac]">"Wire UI"</span>,</div>
            <div className="pl-6"><span className="text-[#86efac]">"Bootstrap"</span>, <span className="text-[#86efac]">"Tailwind"</span>, <span className="text-[#86efac]">"SCSS"</span>, <span className="text-[#86efac]">"jQuery"</span>, <span className="text-[#86efac]">"WordPress"</span>, <span className="text-[#86efac]">"ACF"</span>],</div>

            <div className="text-[#737373] mt-3.5">// databases</div>
            <div><span className="text-[#a78bfa]">databases</span>: [<span className="text-[#86efac]">"MySQL"</span>, <span className="text-[#86efac]">"PostgreSQL"</span>, <span className="text-[#86efac]">"SQL Server"</span>],</div>

            <div className="text-[#737373] mt-3.5">// methodology</div>
            <div><span className="text-[#a78bfa]">methods</span>: [<span className="text-[#86efac]">"CRO"</span>, <span className="text-[#86efac]">"A/B Testing"</span>, <span className="text-[#86efac]">"Mobile-First"</span>, <span className="text-[#86efac]">"Core Web Vitals"</span>,</div>
            <div className="pl-6"><span className="text-[#86efac]">"Technical SEO"</span>, <span className="text-[#86efac]">"Agile/Scrum"</span>, <span className="text-[#86efac]">"Code Review"</span>],</div>

            <div className="text-[#737373] mt-3.5">// tools</div>
            <div><span className="text-[#a78bfa]">tools</span>: [<span className="text-[#86efac]">"Git"</span>, <span className="text-[#86efac]">"GitHub"</span>, <span className="text-[#86efac]">"GH Actions"</span>, <span className="text-[#86efac]">"Lighthouse"</span>, <span className="text-[#86efac]">"DevTools"</span>, <span className="text-[#86efac]">"Vite"</span>, <span className="text-[#86efac]">"NPM"</span>]</div>

            <div className="mt-4.5 text-[#737373]"><span className="text-green-500">$</span> _<span className="inline-block w-[0.5em] h-[1em] bg-[#d4d4d4] align-[-0.1em] ml-[0.05em]"></span></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default stackTerminal
