// ─────────────────────────────────────────────────────────────
// Dos perfiles de copy. Cada componente recibe un prop `variant`
// y elige cuál renderizar. Default = 'frontend'.
// ─────────────────────────────────────────────────────────────

export type Variant = 'frontend' | 'shopify'

type StackBlock = Record<string, string[]>

export type BulletNode = (string | { highlight: string })[]

export interface ExperienceItem {
  dateStart: string
  dateEnd: string
  active?: boolean
  role: string
  company: string
  description: string
  bullets: BulletNode[]
  last?: boolean
}

export interface ProjectCopy {
  badge: string
  description: string
  tags: string[]
  metric: string
}

interface Profile {
  tag: string                       // "/frontend" | "/shopify"
  footerSuffix: string              // " · frontend" | ""
  hero: {
    headlineA: string               // "Frontend engineer" | "Shopify developer"
    headlineHighlight: string       // "interfaces" | "storefronts"
    paragraph: React.ReactNode
  }
  metrics: { label: string; value: string; suffix: string }[]
  stack: {
    intro: string
    data: StackBlock
  }
  about: {
    headlineA: string
    headlineB: string               // gris
    paragraphs: [string, React.ReactNode]
    portrait: { name: string; location: string }
  }
  selectedWork: {
    subtitle: React.ReactNode
    projects: {
      kayelarcky: ProjectCopy
      suji:        ProjectCopy
      sowell:      ProjectCopy
      berkeley:    ProjectCopy
      tano:        ProjectCopy
    }
  }
  experience: ExperienceItem[]
}

import type { ReactNode } from 'react'
import { createElement, Fragment } from 'react'

// helper para mantener spans en blanco sin JSX en .ts
const t = (...nodes: ReactNode[]): ReactNode => createElement(Fragment, null, ...nodes)
const w = (text: string): ReactNode => createElement('span', { className: 'text-[#ededed]' }, text)

const frontend: Profile = {
  tag: '/frontend',
  footerSuffix: ' · frontend',
  hero: {
    headlineA: 'Frontend engineer',
    headlineHighlight: 'interfaces',
    paragraph: t(
      'Frontend engineer with 3 years across React, Vue, TypeScript and modern CSS. Currently at ',
      w('Step Labs'),
      ' in London — design-system-driven UI, accessible components, motion, and Core Web Vitals work. Shipped UI across ',
      w('80+ brands'),
      ' influencing ',
      w('£35M+ revenue'),
      '.',
    ),
  },
  metrics: [
    { label: 'UI SHIPPED ACROSS',      value: '80',   suffix: '+' },
    { label: 'COMPONENTS AUTHORED',    value: '200',  suffix: '+' },
    { label: 'WCAG 2.1 AA TARGETED',   value: '100%', suffix: ''  },
    { label: 'LIGHTHOUSE MOBILE GAIN', value: '+40%', suffix: ''  },
  ],
  stack: {
    intro:
      'A frontend-first toolkit: React, TypeScript, modern CSS, design systems, motion. Opinionated about a11y, Core Web Vitals, and component APIs that other devs enjoy using.',
    data: {
      frameworks: ['React', 'Next.js', 'Vue.js', 'Nuxt', 'Inertia.js', 'Astro'],
      languages:  ['TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Liquid'],
      styling:    ['Tailwind', 'SCSS', 'CSS Modules', 'CSS Variables', 'Container Queries'],
      quality:    ['Core Web Vitals', 'LCP / CLS / INP', 'WCAG 2.1 AA', 'Lighthouse', 'PageSpeed Insights'],
      data:       ['GraphQL', 'REST', 'relational databases', 'SQL'],
      tools:      ['Vite', 'Storybook','Git', 'GitHub Actions', 'DevTools'],
    },
  },
  about: {
    headlineA: 'A frontend engineer who treats',
    headlineB: 'the UI as a product.',
    paragraphs: [
      'Started in 2023 building custom themes for Peruvian agencies — small clients, real deadlines, learning what survives contact with production. Two years later I was leading the UI of a multi-tenant accounting platform; one more, shipping typed React components for British DTC founders at 3am London time.',
      t(
        'The throughline: interfaces that ',
        w('actually move numbers'),
        '. Component APIs the next dev enjoys using. Accessible by default. Lighthouse scores that climb because the architecture got simpler, not because something got hidden. PRs that read like writing.',
      ),
    ],
    portrait: { name: 'Christian Cassas', location: 'Based in Peru, working remotely' },
  },
  selectedWork: {
    subtitle: t(
      '5 frontends shipped to', createElement('br'),
      'production at ', w('Step Labs'), ' London', createElement('br'),
      createElement('span', { className: 'text-[#525252]' }, '2024 — 2026'),
    ),
    projects: {
      kayelarcky: {
        badge: 'UI · PERF',
        description: 'Premium water filtration brand. Rebuilt the PDP and cart UI against Core Web Vitals — image strategy, font subsetting, hydration cleanup. Componentized the bundling flow for reuse across the catalog.',
        tags: ['TypeScript', 'CSS Architecture'],
        metric: '+32% LCP',
      },
      suji: {
        badge: 'QUIZ UI · A/B',
        description: 'Better-for-you noodle brand. Designed and built an interactive quiz UI with multi-step state, a custom bundle builder, and a 6-week A/B test instrumentation layer running side-by-side.',
        tags: ['React', 'State Machines'],
        metric: '+18% AOV',
      },
      sowell: {
        badge: 'PERSONALIZATION',
        description: 'Sleep & wellness brand. Built a personalized PDP that renders dynamic copy and product modules from quiz state — all on a typed component layer with persisted client state.',
        tags: ['GraphQL', 'TypeScript'],
        metric: '+24% sub attach',
      },
      berkeley: {
        badge: 'PORTAL · MAP UI',
        description: 'Nitric-oxide supplement brand backed by clinical research. Rebuilt the practitioner portal UI from scratch and shipped a custom map-based clinic finder with accessible filter UI.',
        tags: ['Map UI', 'A11y'],
        metric: '−42% CLS',
      },
      tano: {
        badge: 'FEATURED',
        description: 'Clean skincare line. Designed a routine builder UI with progressive disclosure and a custom shade-by-tone component — typed, accessible, and instrumented end-to-end. Locked +27% CVR on mobile via 6-week split test.',
        tags: ['React', 'Design System', 'A11y'],
        metric: '+27% CVR',
      },
    },
  },
  experience: [
    {
      dateStart: 'OCT 2024',
      dateEnd: 'PRESENT',
      active: true,
      role: 'FRONTEND ENGINEER · LONDON, UK · REMOTE',
      company: 'Step Labs',
      description: 'Web development agency serving 7–8 figure DTC brands across UK and US. TypeScript, React/Liquid hybrids, design systems, motion, accessibility.',
      bullets: [
        ['Shipped frontend UI for ', { highlight: '80+ DTC brands' }, '; UI influenced £35M+ revenue.'],
        ['Authored ', { highlight: '200+ reusable components' }, ' with typed APIs and Storybook docs.'],
        [{ highlight: '+25–40% Lighthouse mobile' }, ' across 10+ themes via LCP / CLS / INP tuning.'],
        ['Audited and remediated to ', { highlight: 'WCAG 2.1 AA' }, ' across high-traffic flows.'],
      ],
    },
    {
      dateStart: 'MAR 2024',
      dateEnd: 'MAR 2025',
      role: 'UI ENGINEER · AREQUIPA, PE · HYBRID',
      company: 'RPU & Asociados',
      description: 'Accounting firm. Led the frontend of a multi-tenant accounting platform serving 5+ companies — reactive UI with Livewire + Wire UI, Bootstrap / SCSS design system.',
      bullets: [
        ['Built real-time cash mgmt UI; cut ', { highlight: '−70% manual reconciliation' }, '.'],
        ['Stood up a shared ', { highlight: 'SCSS component library' }, ' across 8 financial modules.'],
        [{ highlight: '−40% UI regression bugs' }, ' via PR review and component contracts.'],
        ['Responsive UI across 3+ breakpoints; ', { highlight: '−25% time-to-rollout' }, '.'],
      ],
    },
    {
      dateStart: 'NOV 2023',
      dateEnd: 'FEB 2024',
      role: 'FRONTEND DEVELOPER · LAMBAYEQUE, PE · REMOTE',
      company: 'F5 Solutions',
      description: 'Edtech. Built the Vue / Inertia UI of an online learning platform powering 50+ courses — course player, dashboard, and content authoring screens.',
      bullets: [
        ['Shipped Vue 3 + Inertia UI across ', { highlight: '50+ courses' }, '.'],
        [{ highlight: '−35% content load time' }, ' via lazy routes & image strategy.'],
        ['Accessible, responsive UI across 3+ breakpoints.'],
        [{ highlight: '20+ UI features' }, ' shipped in tight agile sprints.'],
      ],
    },
    {
      dateStart: 'JUN 2023',
      dateEnd: 'SEP 2023',
      last: true,
      role: 'FRONTEND DEVELOPER · PERU · REMOTE',
      company: 'Ludik',
      description: 'Boutique web studio. Custom themes, SCSS, GSAP. Production sites: Soho Inmobiliaria, Sayers Ophthalmology, No Hay Sin Suerte, Codekillers, Jorge Luna.',
      bullets: [
        ['Shipped ', { highlight: '4+ production frontends' }, ' end-to-end.'],
        [{ highlight: '+30–50% organic traffic' }, ' via semantic HTML & technical SEO.'],
        [{ highlight: '+20% avg. retention' }, ' via 12+ scroll & hover micro-interactions.'],
        ["Built a custom subscription / raffle UI on Jorge Luna's site."],
      ],
    },
  ],
}

const shopify: Profile = {
  tag: '/shopify',
  footerSuffix: '',
  hero: {
    headlineA: 'Shopify developer',
    headlineHighlight: 'storefronts',
    paragraph: t(
      'Full-stack engineer with 3 years across Liquid, Laravel and Vue. Currently at ',
      w('Step Labs'),
      ' in London — Shopify Plus, OS 2.0, Theme App Extensions, Checkout Extensibility. Influenced ',
      w('£35M+ revenue'),
      ' across ',
      w('80+ DTC brands'),
      ' through CRO, A/B testing and Core Web Vitals work.',
    ),
  },
  metrics: [
    { label: 'REVENUE INFLUENCED',      value: '£35M', suffix: '+' },
    { label: 'BRANDS SHIPPED',          value: '80',   suffix: '+' },
    { label: 'GUARANTEED UPLIFT / 90D', value: '+30%', suffix: ''  },
    { label: 'LIGHTHOUSE MOBILE GAIN',  value: '+40%', suffix: ''  },
  ],
  stack: {
    intro:
      'Pragmatic full-stack tooling oriented around Shopify and Next.js. Opinionated about Liquid hygiene, CWV and code reviews that read like writing.',
    data: {
      shopify:    ['Liquid','Hydrogen' ,'OS 2.0', 'Theme App Ext.', 'Metafields', 'Metaobjects', 'CLI', 'Polaris', 'Admin API', 'Storefront API', 'Webhooks', 'Shopify Plus', 'Checkout Ext.', 'Functions'],
      languages:  ['JavaScript', 'TypeScript', 'PHP', 'HTML5', 'CSS3', 'SQL', 'Liquid'],
      frameworks: ['Vue.js', 'Next.js', 'Laravel', 'Livewire', 'Wire UI', 'Bootstrap', 'Tailwind', 'SCSS'],
      databases:  ['MySQL', 'PostgreSQL', 'SQL Server'],
      methods:    ['CRO', 'A/B Testing', 'Mobile-First', 'Core Web Vitals', 'Technical SEO', 'Agile/Scrum', 'Code Review'],
      tools:      ['Git', 'GitHub', 'GH Actions', 'Lighthouse', 'DevTools', 'Vite', 'NPM'],
    },
  },
  about: {
    headlineA: 'A developer who treats',
    headlineB: 'commerce as a craft.',
    paragraphs: [
      'Started in 2023 building custom WordPress themes for Peruvian agencies. Two years later I was leading a multi-tenant accounting platform with SUNAT integration; one more, shipping Shopify Plus storefronts for British DTC founders at 3am London time.',
      t(
        'The throughline: code that ',
        w('actually moves numbers'),
        '. A/B tests that lock in conversion. Liquid that the next dev can read. PRs reviewed line by line. The boring stuff that compounds.',
      ),
    ],
    portrait: { name: 'Christian Cassas', location: 'Based in Peru, working remotely' },
  },
  selectedWork: {
    subtitle: t(
      '5 of 80+ DTC brands', createElement('br'),
      'shipped at ', w('Step Labs'), ' London', createElement('br'),
      createElement('span', { className: 'text-[#525252]' }, '2024 — 2026'),
    ),
    projects: {
      kayelarcky: {
        badge: 'PDP · CART',
        description: 'Premium water filtration storefront. Rebuilt PDP + cart against CWV; Theme App Extensions for subscription billing without theme bloat.',
        tags: ['Liquid', 'OS 2.0'],
        metric: '+32% LCP',
      },
      suji: {
        badge: 'QUIZ · A/B',
        description: 'Better-for-you noodle brand. Quiz-driven landing flow + 6-week A/B program on the PDP — variant B locked sustained AOV lift via bundle merchandising.',
        tags: ['Checkout Ext.', 'Functions'],
        metric: '+18% AOV',
      },
      sowell: {
        badge: 'SUBSCRIPTIONS',
        description: 'Sleep & wellness DTC brand. Quiz → personalized PDP flow; App Proxy + Customer Metafields persist state to drive subscription attach.',
        tags: ['Storefront API', 'GraphQL'],
        metric: '+24% sub attach',
      },
      berkeley: {
        badge: 'METAOBJECTS',
        description: 'Nitric-oxide supplement brand backed by clinical research. Migrated to OS 2.0, rebuilt practitioner portal with metaobjects, shipped clinic finder.',
        tags: ['Metaobjects', 'Admin API'],
        metric: '−42% CLS',
      },
      tano: {
        badge: 'FEATURED',
        description: 'Clean skincare line. Built a routine builder with progressive disclosure and a custom shade-by-tone component powered by Shopify Functions for stock-aware bundling. Locked +27% CVR on mobile via 6-week split test.',
        tags: ['Shopify Functions', 'Bundling', 'Liquid'],
        metric: '+27% CVR',
      },
    },
  },
  experience: [
    {
      dateStart: 'OCT 2024',
      dateEnd: 'PRESENT',
      active: true,
      role: 'SHOPIFY DEVELOPER · LONDON, UK · REMOTE',
      company: 'Step Labs',
      description: 'Web development agency serving 7–8 figure DTC brands across UK and US. Shopify Plus, OS 2.0, Theme App Extensions, Checkout Extensibility.',
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
      description: 'Accounting firm. Led a multi-tenant accounting platform for 5+ companies with SUNAT integration. Laravel MVC + Livewire.',
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
      description: 'Edtech. Built an online learning platform powering 50+ courses. Laravel + Vue.js + Inertia.js.',
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
      description: 'Boutique web studio. WordPress, PHP, ACF. Production sites: Soho Inmobiliaria, Sayers Ophthalmology, No Hay Sin Suerte, Codekillers, Jorge Luna.',
      bullets: [
        ['Shipped ', { highlight: '4+ production WordPress sites' }, ' end-to-end.'],
        [{ highlight: '+30–50% organic traffic' }, ' via technical SEO on 4+ clients.'],
        [{ highlight: '+20% avg. retention' }, ' via 12+ interactive animations.'],
        ["Custom subscription / raffle module on Jorge Luna's WP site."],
      ],
    },
  ],
}

export const profiles: Record<Variant, Profile> = { frontend, shopify }
export const getProfile = (v: Variant = 'frontend'): Profile => profiles[v]
