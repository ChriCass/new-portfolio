import type { Lang } from './LanguageContext'

type TranslationDict = Record<string, string>

const en: TranslationDict = {
  'nav.work': 'work',
  'nav.stack': 'stack',
  'nav.experience': 'experience',
  'nav.about': 'about',
  'nav.contact': 'contact',
  'nav.main': 'Main navigation',
  'nav.mobile': 'Mobile navigation',

  'hero.cta.work': 'See selected work',
  'hero.cta.contact': 'Start a project',
  'hero.ready': 'Ready for new opportunities',

  'header.available': 'available',
  'header.toggleMenu': 'toggle menu',

  'selectedWork.heading': 'Storefronts in production.',

  'stack.heading': 'The daily\ntoolkit.',

  'experience.heading': 'Experience that ships.',
  'experience.active': 'active',

  'about.stats.based': 'BASED',
  'about.stats.languages': 'LANGUAGES',
  'about.stats.studying': 'STUDYING',
  'about.stats.focus': "FOCUS '26",
  'about.stats.basedValue': 'Peru',
  'about.stats.location': 'Based in Peru, working remotely',
  'about.portrait.name': 'Christian Cassas',

  'contact.heading': "Let's build\nsomething useful.",
  'contact.primary': 'PRIMARY',
  'contact.replies': 'replies within 24h · timezone UTC−5',
  'contact.cards.whatsapp': 'WHATSAPP',
  'contact.cards.linkedin': 'LINKEDIN',
  'contact.cards.location': 'LOCATION',
  'contact.cards.locationValue': 'Peru, Remote',

  'footer.copy': '© CHRISTIAN CASSAS · 2026',

  'hero.headlineA.frontend': 'Frontend engineer',
  'hero.headlineHighlight.frontend': 'interfaces',
  'hero.headlineA.shopify': 'Shopify developer',
  'hero.headlineHighlight.shopify': 'storefronts',
  'hero.building': 'building',
  'hero.shipRevenue': 'that ship revenue.',

  'hero.paragraph.frontend':
    'Frontend engineer working across React, Vue, TypeScript and modern CSS. Currently at Step Labs in London, focused on design-system-driven UI, accessible components, motion, and Core Web Vitals work. Shipped UI across 80+ brands influencing £35M+ revenue.',
  'hero.paragraph.shopify':
    'Full-stack engineer working across Liquid, Laravel and Vue. Currently at Step Labs in London, focused on Shopify Plus, OS 2.0, Theme App Extensions, Checkout Extensibility. Influenced £35M+ revenue across 80+ DTC brands through CRO, A/B testing and Core Web Vitals work.',

  'metrics.0.frontend': 'UI SHIPPED ACROSS',
  'metrics.1.frontend': 'COMPONENTS AUTHORED',
  'metrics.2.frontend': 'WCAG 2.1 AA TARGETED',
  'metrics.3.frontend': 'LIGHTHOUSE MOBILE GAIN',
  'metrics.0.shopify': 'REVENUE INFLUENCED',
  'metrics.1.shopify': 'BRANDS SHIPPED',
  'metrics.2.shopify': 'GUARANTEED UPLIFT / 90D',
  'metrics.3.shopify': 'LIGHTHOUSE MOBILE GAIN',

  'stack.intro.frontend':
    'A frontend-first toolkit: React, TypeScript, modern CSS, design systems, motion. Opinionated about a11y, Core Web Vitals, and component APIs that other devs enjoy using.',
  'stack.intro.shopify':
    'Pragmatic full-stack tooling oriented around Shopify and Next.js. Opinionated about Liquid hygiene, CWV and code reviews that read like writing.',

  'about.headlineA.frontend': 'A frontend engineer who treats',
  'about.headlineB.frontend': 'the UI as a product.',
  'about.headlineA.shopify': 'A developer who ships for the',
  'about.headlineB.shopify': 'bottom line.',

  'about.p1.frontend':
    'Started in 2023 building custom themes for Peruvian agencies: small clients, real deadlines, learning what survives contact with production. Two years later I was leading the UI of a multi-tenant accounting platform; one more, shipping typed React components for DTC founders worldwide.',
  'about.p1.shopify':
    'Started in 2023 building custom WordPress themes for Peruvian agencies. Two years later I was leading a multi-tenant accounting platform with SUNAT integration; one more, shipping Shopify Plus storefronts for DTC founders worldwide.',

  'about.p2.frontend':
    'The throughline: interfaces that actually move numbers. Component APIs the next dev enjoys using. Accessible by default. Lighthouse scores that climb because the architecture got simpler, not because something got hidden. PRs that read like writing.',
  'about.p2.shopify':
    'The throughline: code that actually moves numbers. A/B tests that lock in conversion. Liquid that the next dev can read. PRs reviewed line by line. The boring stuff that compounds.',

  'selectedWork.subtitle.frontend':
    '5 frontends shipped to production at Step Labs London 2024-2026',
  'selectedWork.subtitle.shopify':
    '5 of 80+ DTC brands shipped at Step Labs London 2024-2026',

  'project.kayelarcky.desc.frontend':
    'Premium bralettes brand. Implemented collection page A/B tests (reviews-between-products variant), rebuilt PDPs for accessibility (95% score), and shipped wholesale partner portal. Drove CRO improvements off Clarity data: CVR +769%, sessions +83%, AOV +15% period-over-period.',
  'project.kayelarcky.badge.frontend': 'CRO · A11Y',
  'project.suji.desc.frontend':
    'Targeted compression training brand. Implemented mobile Hero and PDP Reviews A/B tests driving RPV, AOV, and CVR lifts. Designed Holiday/Gift homepage section, built 3D product mockups with video integrations, migrated Trustpilot reviews to Okendo, and created Institutional Logos carousel designs.',
  'project.suji.badge.frontend': 'A/B · CRO',
  'project.sowell.desc.frontend':
    'GLP-1 daily-essentials brand covering protein, electrolytes, fiber, vitamins. Implemented Heroes A/B test (CVR +11%, ATC +11%). Redesigned Balance PDP, built Subscriber Perks section, integrated Tolstoy UGC feed + video bubbles on PDPs. Designed landing pages for System Believer and Skeptic personas, shipped 3 new Electrolytes PDPs and Summer Playbook sections.',
  'project.sowell.badge.frontend': 'A/B · CVR',
  'project.berkeley.desc.frontend':
    'Nitric oxide supplement brand. Redesigned homepage, ran Prime Day campaigns (DTC + wholesale), and rebuilt Gum and Test Strips PDPs above the fold. Designed wholesale Pendulum-style catalog, shipped Trish\'s book section across Wholesale and HCP pages, and designed Mind Body Green landing page. Mapping active aging micro-persona LP strategy.',
  'project.berkeley.badge.frontend': 'HOMEPAGE · CRO',
  'project.tano.desc.frontend':
    'Retinol-alternative skincare brand. Shipped Lauren Fisher LP and HSA/FSA page, redesigned Mini Bundle and Everyday Body Lotion PDPs. Running Results Timeline A/B test, designed About page and subscription perks. Proposed retinol LP A/B test (UGC higher + direct ATC) based on mobile heatmap data. Net sales +12%, AOV $103.86 (+4%), 863 orders (+6%).',
  'project.tano.badge.frontend': 'A/B · PDP',

  'project.kayelarcky.desc.shopify':
    'Premium bralettes brand. Ran collection page A/B tests, rebuilt accessible PDPs, shipped a wholesale partner portal, and built 6 of 7 Klaviyo email flows. Kicked off referral program implementation and drove CRO from 14 days of Clarity analytics: CVR jumped 769% period-over-period, sessions up 83%, AOV +15%.',
  'project.kayelarcky.badge.shopify': 'CRO · GROWTH',
  'project.suji.desc.shopify':
    'Targeted compression training brand. Shipped mobile Hero A/B test, ran PDP Reviews A/B test driving meaningful lifts in RPV, AOV, and CVR. Designed and implemented Holiday/Gift homepage section, built 3D section mockups with video integrations, imported Trustpilot reviews into Okendo, and designed Institutional Logos carousel.',
  'project.suji.badge.shopify': 'A/B · CRO',
  'project.sowell.desc.shopify':
    'GLP-1 daily-essentials brand covering protein, electrolytes, fiber, vitamins. Ran Heroes A/B test lifting CVR 11% to 2.32% and ATC rate 11% to 5.73%. Launched Balance PDP redesign, built Subscriber Perks section, shipped founder video on homepage, rolled out Tolstoy UGC feed and video bubbles on PDPs. Designed and developed landing pages for System Believer and Skeptic personas, plus 3 new Electrolytes PDPs.',
  'project.sowell.badge.shopify': 'A/B · CVR',
  'project.berkeley.desc.shopify':
    'Nitric oxide supplement brand. Launched homepage redesign and ran Prime Day campaigns across DTC and wholesale channels. Designed wholesale catalog (Pendulum style), rebuilt Gum and Test Strips PDPs above the fold, shipped Trish\'s book section on Wholesale and HCP pages, and designed Mind Body Green landing page. Mapping active aging micro-persona LP strategy.',
  'project.berkeley.badge.shopify': 'PRIME DAY · DTC',
  'project.tano.desc.shopify':
    'Retinol-alternative skincare brand. Shipped Lauren Fisher LP and HSA/FSA page, redesigned Mini Bundle and Everyday Body Lotion PDPs. Running Results Timeline section A/B test, designed About page and subscription perks in Figma. Proposed retinol LP A/B test moving UGC higher with direct ATC, backed by heatmap data showing mobile engagement on UGC. Net sales +12%, AOV $103.86 (+4%), 863 orders (+6%).',
  'project.tano.badge.shopify': 'A/B · PDP',

  'exp.role.frontend.0': 'FRONTEND ENGINEER · LONDON, UK · REMOTE',
  'exp.company.frontend.0': 'Step Labs',
  'exp.desc.frontend.0':
    'Web development agency serving 7–8 figure DTC brands across UK and US. TypeScript, React/Liquid hybrids, design systems, motion, accessibility.',
  'exp.bullet.frontend.0.0': 'Shipped frontend UI for 80+ DTC brands; UI influenced £35M+ revenue.',
  'exp.bullet.frontend.0.1': 'Authored 200+ reusable components with typed APIs and Storybook docs.',
  'exp.bullet.frontend.0.2': '+25–40% Lighthouse mobile across 10+ themes via LCP / CLS / INP tuning.',
  'exp.bullet.frontend.0.3': 'Audited and remediated to WCAG 2.1 AA across high-traffic flows.',

  'exp.role.frontend.1': 'UI ENGINEER · AREQUIPA, PE · HYBRID',
  'exp.company.frontend.1': 'RPU & Asociados',
  'exp.desc.frontend.1':
    'Accounting firm. Led the frontend of a multi-tenant accounting platform serving 5+ companies with reactive UI built on Livewire + Wire UI, Bootstrap / SCSS design system.',
  'exp.bullet.frontend.1.0': 'Built real-time cash mgmt UI; cut −70% manual reconciliation.',
  'exp.bullet.frontend.1.1': 'Stood up a shared SCSS component library across 8 financial modules.',
  'exp.bullet.frontend.1.2': '−40% UI regression bugs via PR review and component contracts.',
  'exp.bullet.frontend.1.3': 'Responsive UI across 3+ breakpoints; −25% time-to-rollout.',

  'exp.role.frontend.2': 'FRONTEND DEVELOPER · LAMBAYEQUE, PE · REMOTE',
  'exp.company.frontend.2': 'F5 Solutions',
  'exp.desc.frontend.2':
    'Edtech. Built the Vue / Inertia UI of an online learning platform powering 50+ courses: course player, dashboard, and content authoring screens.',
  'exp.bullet.frontend.2.0': 'Shipped Vue 3 + Inertia UI across 50+ courses.',
  'exp.bullet.frontend.2.1': '−35% content load time via lazy routes & image strategy.',
  'exp.bullet.frontend.2.2': 'Accessible, responsive UI across 3+ breakpoints.',
  'exp.bullet.frontend.2.3': '20+ UI features shipped in tight agile sprints.',

  'exp.role.frontend.3': 'FRONTEND DEVELOPER · PERU · REMOTE',
  'exp.company.frontend.3': 'Ludik',
  'exp.desc.frontend.3':
    'Boutique web studio. Custom themes, SCSS, GSAP. Production sites: Soho Inmobiliaria, Sayers Ophthalmology, No Hay Sin Suerte, Codekillers, Jorge Luna.',
  'exp.bullet.frontend.3.0': 'Shipped 4+ production frontends end-to-end.',
  'exp.bullet.frontend.3.1': '+30–50% organic traffic via semantic HTML & technical SEO.',
  'exp.bullet.frontend.3.2': '+20% avg. retention via 12+ scroll & hover micro-interactions.',
  'exp.bullet.frontend.3.3': "Built a custom subscription / raffle UI on Jorge Luna's site.",

  'exp.role.shopify.0': 'SHOPIFY DEVELOPER · LONDON, UK · REMOTE',
  'exp.company.shopify.0': 'Step Labs',
  'exp.desc.shopify.0':
    'Web development agency serving 7–8 figure DTC brands across UK and US. Shopify Plus, OS 2.0, Theme App Extensions, Checkout Extensibility.',
  'exp.bullet.shopify.0.0': 'Architected storefronts for 80+ DTC brands, influencing £35M attributable revenue.',
  'exp.bullet.shopify.0.1': 'Weekly A/B tests on PDP, cart, checkout with +30% uplift guaranteed / 90d.',
  'exp.bullet.shopify.0.2': '+25–40% Lighthouse mobile across 10+ themes via LCP / CLS / INP tuning.',
  'exp.bullet.shopify.0.3': 'Integrated 15+ apps via CLI, Admin & Storefront API (GraphQL).',

  'exp.role.shopify.1': 'FULL-STACK DEVELOPER · AREQUIPA, PE · HYBRID',
  'exp.company.shopify.1': 'RPU & Asociados',
  'exp.desc.shopify.1':
    'Accounting firm. Led a multi-tenant accounting platform for 5+ companies with SUNAT integration. Laravel MVC + Livewire.',
  'exp.bullet.shopify.1.0': 'Real-time cash mgmt with Livewire + Wire UI; −70% manual reconciliation.',
  'exp.bullet.shopify.1.1': 'Designed 30+ normalized SQL schemas across 8 financial modules.',
  'exp.bullet.shopify.1.2': '−40% regression bugs via Git-based code review workflows.',
  'exp.bullet.shopify.1.3': 'Responsive Bootstrap / SCSS UI, −25% time-to-rollout.',

  'exp.role.shopify.2': 'FULL-STACK DEVELOPER · LAMBAYEQUE, PE · REMOTE',
  'exp.company.shopify.2': 'F5 Solutions',
  'exp.desc.shopify.2':
    'Edtech. Built an online learning platform powering 50+ courses. Laravel + Vue.js + Inertia.js.',
  'exp.bullet.shopify.2.0': 'Shipped monolithic Laravel + Inertia stack across 50+ courses.',
  'exp.bullet.shopify.2.1': '−35% content load time via query tuning on 15+ tables.',
  'exp.bullet.shopify.2.2': 'Accessible, responsive UI across 3+ breakpoints.',
  'exp.bullet.shopify.2.3': '20+ features shipped in tight agile sprints.',

  'exp.role.shopify.3': 'FRONTEND DEVELOPER · PERU · REMOTE',
  'exp.company.shopify.3': 'Ludik',
  'exp.desc.shopify.3':
    'Boutique web studio. WordPress, PHP, ACF. Production sites: Soho Inmobiliaria, Sayers Ophthalmology, No Hay Sin Suerte, Codekillers, Jorge Luna.',
  'exp.bullet.shopify.3.0': 'Shipped 4+ production WordPress sites end-to-end.',
  'exp.bullet.shopify.3.1': '+30–50% organic traffic via technical SEO on 4+ clients.',
  'exp.bullet.shopify.3.2': '+20% avg. retention via 12+ interactive animations.',
  'exp.bullet.shopify.3.3': "Custom subscription / raffle module on Jorge Luna's WP site.",
}

const es: TranslationDict = {
  'nav.work': 'trabajo',
  'nav.stack': 'stack',
  'nav.experience': 'experiencia',
  'nav.about': 'sobre mí',
  'nav.contact': 'contacto',
  'nav.main': 'Navegación principal',
  'nav.mobile': 'Navegación móvil',

  'hero.cta.work': 'Ver trabajo seleccionado',
  'hero.cta.contact': 'Iniciar un proyecto',
  'hero.ready': 'Disponible para nuevos proyectos',

  'header.available': 'disponible',
  'header.toggleMenu': 'alternar menú',

  'selectedWork.heading': 'Storefronts en producción.',

  'stack.heading': 'El toolkit\ndiario.',

  'experience.heading': 'Experiencia que entrega.',
  'experience.active': 'activo',

  'about.stats.based': 'UBICADO',
  'about.stats.languages': 'IDIOMAS',
  'about.stats.studying': 'ESTUDIANDO',
  'about.stats.focus': 'FOCO \'26',
  'about.stats.basedValue': 'Peru',
  'about.stats.location': 'Peru, trabajando remoto',
  'about.portrait.name': 'Christian Cassas',

  'contact.heading': 'Construyamos\nalgo útil.',
  'contact.primary': 'PRINCIPAL',
  'contact.replies': 'respuesta en 24h · zona horaria UTC−5',
  'contact.cards.whatsapp': 'WHATSAPP',
  'contact.cards.linkedin': 'LINKEDIN',
  'contact.cards.location': 'UBICACIÓN',
  'contact.cards.locationValue': 'Perú, Remoto',

  'footer.copy': '© CHRISTIAN CASSAS · 2026',

  'hero.headlineA.frontend': 'Ingeniero Frontend',
  'hero.headlineHighlight.frontend': 'interfaces',
  'hero.headlineA.shopify': 'Desarrollador Shopify',
  'hero.headlineHighlight.shopify': 'storefronts',
  'hero.building': 'creando',
  'hero.shipRevenue': 'que generan revenue.',

  'hero.paragraph.frontend':
    'Ingeniero Frontend trabajando en React, Vue, TypeScript y CSS moderno. Actualmente en Step Labs en Londres, enfocado en UI basada en design systems, componentes accesibles, motion y Core Web Vitals. UI desplegada en más de 80 marcas influyendo £35M+ en ingresos.',
  'hero.paragraph.shopify':
    'Ingeniero full-stack trabajando en Liquid, Laravel y Vue. Actualmente en Step Labs en Londres, enfocado en Shopify Plus, OS 2.0, Theme App Extensions, Checkout Extensibility. Influí £35M+ en ingresos en más de 80 marcas DTC mediante CRO, A/B testing y Core Web Vitals.',

  'metrics.0.frontend': 'UI DESPLEGADA EN',
  'metrics.1.frontend': 'COMPONENTES CREADOS',
  'metrics.2.frontend': 'WCAG 2.1 AA APLICADO',
  'metrics.3.frontend': 'MEJORA LIGHTHOUSE MÓVIL',
  'metrics.0.shopify': 'INGRESOS INFLUIDOS',
  'metrics.1.shopify': 'MARCAS DESPLEGADAS',
  'metrics.2.shopify': 'MEJORA GARANTIZADA / 90D',
  'metrics.3.shopify': 'MEJORA LIGHTHOUSE MÓVIL',

  'stack.intro.frontend':
    'Un toolkit frontend-first: React, TypeScript, CSS moderno, design systems, motion. Opinionado sobre a11y, Core Web Vitals y APIs de componentes que otros devs disfrutan usar.',
  'stack.intro.shopify':
    'Tooling full-stack pragmático orientado a Shopify y Next.js. Opinionado sobre buenas prácticas en Liquid, CWV y code reviews que se leen como escritura.',

  'about.headlineA.frontend': 'Un ingeniero frontend que trata',
  'about.headlineB.frontend': 'la UI como un producto.',
  'about.headlineA.shopify': 'Un desarrollador que impacta el',
  'about.headlineB.shopify': 'resultado final.',

  'about.p1.frontend':
    'Comencé en 2023 creando temas personalizados para agencias peruanas: clientes pequeños, plazos reales, aprendiendo lo que sobrevive al contacto con producción. Dos años después lideraba la UI de una plataforma contable multi-tenant; uno más, desarrollando componentes React tipados para founders DTC alrededor del mundo.',
  'about.p1.shopify':
    'Comencé en 2023 creando temas WordPress personalizados para agencias peruanas. Dos años después lideraba una plataforma contable multi-tenant con integración SUNAT; uno más, desarrollando storefronts Shopify Plus para founders DTC alrededor del mundo.',

  'about.p2.frontend':
    'El hilo conductor: interfaces que realmente mueven números. APIs de componentes que el siguiente dev disfruta usar. Accesible por defecto. Scores de Lighthouse que suben porque la arquitectura se simplificó, no porque algo se ocultó. PRs que se leen como escritura.',
  'about.p2.shopify':
    'El hilo conductor: código que realmente mueve números. A/B tests que aseguran conversión. Liquid que el siguiente dev puede leer. PRs revisados línea por línea. Lo aburrido que genera resultados.',

  'selectedWork.subtitle.frontend':
    '5 frontends lanzados a producción en Step Labs Londres 2024-2026',
  'selectedWork.subtitle.shopify':
    '5 de 80+ marcas DTC lanzadas en Step Labs Londres 2024-2026',

  'project.kayelarcky.desc.frontend':
    'Marca premium de bralettes. Implementé A/B tests en collection pages, reconstruí PDPs accesibles (95% score) y desarrollé un portal para wholesale partners. Optimicé CRO basado en datos de Clarity: CVR +769%, sesiones +83%, AOV +15% período contra período.',
  'project.kayelarcky.badge.frontend': 'CRO · A11Y',
  'project.suji.desc.frontend':
    'Marca de entrenamiento de compresión dirigida. Implementé A/B tests en Hero móvil y Reviews del PDP generando mejoras en RPV, AOV y CVR. Diseñé sección Holiday/Gift en homepage, creé mockups 3D con integración de video, migré reseñas de Trustpilot a Okendo y diseñé carrusel de Logos Institucionales.',
  'project.suji.badge.frontend': 'A/B · CRO',
  'project.sowell.desc.frontend':
    'Marca de esenciales diarios para GLP-1 con proteína, electrolitos, fibra, vitaminas. Implementé A/B test en Heroes (CVR +11%, ATC +11%). Rediseñé el PDP Balance, construí sección Subscriber Perks, integré feed UGC de Tolstoy + video bubbles en PDPs. Diseñé landing pages para personas System Believer y Skeptic, y 3 nuevos PDPs de Electrolitos.',
  'project.sowell.badge.frontend': 'A/B · CVR',
  'project.berkeley.desc.frontend':
    'Marca de suplementos de óxido nítrico. Rediseñé la homepage, ejecuté campañas Prime Day (DTC + wholesale) y reconstruí los PDPs de Gum y Test Strips above the fold. Diseñé catálogo wholesale estilo Pendulum, integré la sección del libro de Trish en páginas Wholesale y HCP, y diseñé landing page Mind Body Green. Definiendo estrategia de LP para la micro-persona active aging.',
  'project.berkeley.badge.frontend': 'HOMEPAGE · CRO',
  'project.tano.desc.frontend':
    'Marca de skincare con alternativas al retinol. Lanzé LP Lauren Fisher y página HSA/FSA, rediseñé PDPs de Mini Bundle y Everyday Body Lotion. Ejecutando A/B test de Results Timeline, diseñé página About y perks de suscripción. Propuse A/B test en LP de retinol (UGC más arriba + ATC directo) basado en datos de heatmap móvil. Ventas netas +12%, AOV $103.86 (+4%), 863 órdenes (+6%).',
  'project.tano.badge.frontend': 'A/B · PDP',

  'project.kayelarcky.desc.shopify':
    'Marca premium de bralettes. Ejecuté A/B tests en collection pages, reconstruí PDPs accesibles, desarrollé un portal wholesale partner y construí 6 de 7 flujos de email en Klaviyo. Inicié implementación de programa de referidos y optimicé CRO con 14 días de datos de Clarity: CVR aumentó 769%, sesiones +83%, AOV +15%.',
  'project.kayelarcky.badge.shopify': 'CRO · GROWTH',
  'project.suji.desc.shopify':
    'Marca de entrenamiento de compresión dirigida. Lanzé A/B test en Hero móvil, ejecuté A/B test de Reviews en PDP generando mejoras significativas en RPV, AOV y CVR. Diseñé e implementé sección Holiday/Gift en homepage, creé mockups 3D con integración de video, importé reseñas de Trustpilot a Okendo y diseñé carrusel de Logos Institucionales.',
  'project.suji.badge.shopify': 'A/B · CRO',
  'project.sowell.desc.shopify':
    'Marca de esenciales diarios para GLP-1 con proteína, electrolitos, fibra, vitaminas. Ejecuté A/B test en Heroes elevando CVR 11% a 2.32% y ATC 11% a 5.73%. Lanzé rediseño del PDP Balance, construí sección Subscriber Perks, integré video del founder en homepage y feed UGC de Tolstoy con video bubbles en PDPs. Diseñé y desarrollé landing pages para personas System Believer y Skeptic, más 3 nuevos PDPs de Electrolitos.',
  'project.sowell.badge.shopify': 'A/B · CVR',
  'project.berkeley.desc.shopify':
    'Marca de suplementos de óxido nítrico. Lanzé rediseño de homepage y ejecuté campañas Prime Day en canales DTC y wholesale. Diseñé catálogo wholesale (estilo Pendulum), reconstruí PDPs de Gum y Test Strips above the fold, integré sección del libro de Trish en páginas Wholesale y HCP, y diseñé landing page Mind Body Green. Definiendo estrategia de LP para micro-persona active aging.',
  'project.berkeley.badge.shopify': 'PRIME DAY · DTC',
  'project.tano.desc.shopify':
    'Marca de skincare con alternativas al retinol. Lanzé LP Lauren Fisher y página HSA/FSA, rediseñé PDPs de Mini Bundle y Everyday Body Lotion. Ejecutando A/B test de Results Timeline, diseñé página About y perks de suscripción en Figma. Propuse A/B test en LP de retinol (UGC más arriba + ATC directo) basado en heatmaps mostrando engagement móvil en UGC. Ventas netas +12%, AOV $103.86 (+4%), 863 órdenes (+6%).',
  'project.tano.badge.shopify': 'A/B · PDP',

  'exp.role.frontend.0': 'FRONTEND ENGINEER · LONDRES, UK · REMOTO',
  'exp.company.frontend.0': 'Step Labs',
  'exp.desc.frontend.0':
    'Agencia de desarrollo web sirviendo marcas DTC de 7–8 cifras en UK y US. TypeScript, híbridos React/Liquid, design systems, motion, accesibilidad.',
  'exp.bullet.frontend.0.0': 'Desarrollé UI frontend para más de 80 marcas DTC; la UI influyó £35M+ en ingresos.',
  'exp.bullet.frontend.0.1': 'Creé más de 200 componentes reutilizables con APIs tipadas y documentación en Storybook.',
  'exp.bullet.frontend.0.2': '+25–40% Lighthouse móvil en más de 10 temas mediante optimización de LCP / CLS / INP.',
  'exp.bullet.frontend.0.3': 'Audité y corregí para cumplir WCAG 2.1 AA en flujos de alto tráfico.',

  'exp.role.frontend.1': 'UI ENGINEER · AREQUIPA, PE · HÍBRIDO',
  'exp.company.frontend.1': 'RPU & Asociados',
  'exp.desc.frontend.1':
    'Firma contable. Lideré el frontend de una plataforma contable multi-tenant para más de 5 empresas con UI reactiva basada en Livewire + Wire UI, design system Bootstrap / SCSS.',
  'exp.bullet.frontend.1.0': 'Construí UI de gestión de caja en tiempo real; reduje −70% la conciliación manual.',
  'exp.bullet.frontend.1.1': 'Creé una librería compartida de componentes SCSS para 8 módulos financieros.',
  'exp.bullet.frontend.1.2': '−40% bugs de regresión UI mediante revisión de PRs y contratos de componentes.',
  'exp.bullet.frontend.1.3': 'UI responsive en más de 3 breakpoints; −25% tiempo de despliegue.',

  'exp.role.frontend.2': 'FRONTEND DEVELOPER · LAMBAYEQUE, PE · REMOTO',
  'exp.company.frontend.2': 'F5 Solutions',
  'exp.desc.frontend.2':
    'Edtech. Construí la UI Vue / Inertia de una plataforma de aprendizaje online con más de 50 cursos: reproductor de cursos, dashboard y pantallas de creación de contenido.',
  'exp.bullet.frontend.2.0': 'Desarrollé UI con Vue 3 + Inertia para más de 50 cursos.',
  'exp.bullet.frontend.2.1': '−35% tiempo de carga de contenido mediante rutas lazy y estrategia de imágenes.',
  'exp.bullet.frontend.2.2': 'UI accesible y responsive en más de 3 breakpoints.',
  'exp.bullet.frontend.2.3': 'Más de 20 funcionalidades de UI entregadas en sprints ágiles.',

  'exp.role.frontend.3': 'FRONTEND DEVELOPER · PERÚ · REMOTO',
  'exp.company.frontend.3': 'Ludik',
  'exp.desc.frontend.3':
    'Estudio web boutique. Temas personalizados, SCSS, GSAP. Sitios en producción: Soho Inmobiliaria, Sayers Ophthalmology, No Hay Sin Suerte, Codekillers, Jorge Luna.',
  'exp.bullet.frontend.3.0': 'Entregué más de 4 frontends en producción de principio a fin.',
  'exp.bullet.frontend.3.1': '+30–50% tráfico orgánico mediante HTML semántico y SEO técnico.',
  'exp.bullet.frontend.3.2': '+20% retención promedio mediante más de 12 micro-interacciones de scroll y hover.',
  'exp.bullet.frontend.3.3': 'Construí una UI personalizada de suscripción / rifa para el sitio de Jorge Luna.',

  'exp.role.shopify.0': 'SHOPIFY DEVELOPER · LONDRES, UK · REMOTO',
  'exp.company.shopify.0': 'Step Labs',
  'exp.desc.shopify.0':
    'Agencia de desarrollo web sirviendo marcas DTC de 7–8 cifras en UK y US. Shopify Plus, OS 2.0, Theme App Extensions, Checkout Extensibility.',
  'exp.bullet.shopify.0.0': 'Arquitecté storefronts para más de 80 marcas DTC, influyendo £35M en ingresos atribuibles.',
  'exp.bullet.shopify.0.1': 'A/B tests semanales en PDP, carrito, checkout con +30% de mejora garantizada / 90d.',
  'exp.bullet.shopify.0.2': '+25–40% Lighthouse móvil en más de 10 temas mediante optimización de LCP / CLS / INP.',
  'exp.bullet.shopify.0.3': 'Integré más de 15 apps mediante CLI, Admin y Storefront API (GraphQL).',

  'exp.role.shopify.1': 'FULL-STACK DEVELOPER · AREQUIPA, PE · HÍBRIDO',
  'exp.company.shopify.1': 'RPU & Asociados',
  'exp.desc.shopify.1':
    'Firma contable. Lideré una plataforma contable multi-tenant para más de 5 empresas con integración SUNAT. Laravel MVC + Livewire.',
  'exp.bullet.shopify.1.0': 'Gestión de caja en tiempo real con Livewire + Wire UI; −70% conciliación manual.',
  'exp.bullet.shopify.1.1': 'Diseñé más de 30 esquemas SQL normalizados para 8 módulos financieros.',
  'exp.bullet.shopify.1.2': '−40% bugs de regresión mediante flujos de code review basados en Git.',
  'exp.bullet.shopify.1.3': 'UI responsive Bootstrap / SCSS, −25% tiempo de despliegue.',

  'exp.role.shopify.2': 'FULL-STACK DEVELOPER · LAMBAYEQUE, PE · REMOTO',
  'exp.company.shopify.2': 'F5 Solutions',
  'exp.desc.shopify.2':
    'Edtech. Construí una plataforma de aprendizaje online para más de 50 cursos. Laravel + Vue.js + Inertia.js.',
  'exp.bullet.shopify.2.0': 'Desarrollé un stack monolítico Laravel + Inertia para más de 50 cursos.',
  'exp.bullet.shopify.2.1': '−35% tiempo de carga mediante optimización de consultas en más de 15 tablas.',
  'exp.bullet.shopify.2.2': 'UI accesible y responsive en más de 3 breakpoints.',
  'exp.bullet.shopify.2.3': 'Más de 20 funcionalidades entregadas en sprints ágiles.',

  'exp.role.shopify.3': 'FRONTEND DEVELOPER · PERÚ · REMOTO',
  'exp.company.shopify.3': 'Ludik',
  'exp.desc.shopify.3':
    'Estudio web boutique. WordPress, PHP, ACF. Sitios en producción: Soho Inmobiliaria, Sayers Ophthalmology, No Hay Sin Suerte, Codekillers, Jorge Luna.',
  'exp.bullet.shopify.3.0': 'Entregué más de 4 sitios WordPress en producción de principio a fin.',
  'exp.bullet.shopify.3.1': '+30–50% tráfico orgánico mediante SEO técnico en más de 4 clientes.',
  'exp.bullet.shopify.3.2': '+20% retención promedio mediante más de 12 animaciones interactivas.',
  'exp.bullet.shopify.3.3': 'Módulo personalizado de suscripción / rifa en el sitio WP de Jorge Luna.',
}

const translations: Record<Lang, TranslationDict> = { en, es }

export function getTranslation(lang: Lang, key: string): string {
  return translations[lang]?.[key] ?? translations.en[key] ?? key
}
