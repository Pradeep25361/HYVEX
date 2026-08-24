export interface ServiceInfo {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  subtitle: string;
  deliverables: string[];
  processSteps: { step: string; title: string; desc: string }[];
  metrics: { label: string; value: string }[];
  techStack?: string[];
  faqs: { q: string; a: string }[];
}

export const AGENCY_DETAILS = {
  name: "HYVEX",
  tagline: "High-End Digital Marketing & Enterprise Software Architecture",
  email: "hyvexmarketingagency@gmail.com",
  phone: "+91 7702052296",
  phoneRaw: "+917702052296",
  location: "Hyderabad, Telangana, India",
  addressFull: "HYVEX Agency Tower, Financial District, Nanakramguda, Hyderabad, Telangana 500032, India",
  offices: [
    {
      city: "Hyderabad HQ",
      address: "Financial District, Nanakramguda, Hyderabad, Telangana 500032",
      isHQ: true
    },
    {
      city: "Dubai Hub",
      address: "Emaar Square, Building 4, Downtown Dubai, United Arab Emirates",
      isHQ: false
    }
  ],
  founder: {
    name: "Hari Krishna",
    role: "Founder & CEO",
    bio: "Visionary technology strategist and founder of HYVEX. Hari leads a elite team of digital marketeers, software architects, and brand engineers, pioneering high-performance growth systems for enterprise clients globally.",
    quote: "We don't just build websites or run advertising campaigns; we engineer resilient digital monopolies that outperform the market.",
    socials: {
      linkedin: "https://linkedin.com",
      twitter: "https://x.com",
      instagram: "https://instagram.com"
    }
  }
};

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  specialization: string;
  bio: string;
  skills: string[];
  image: string;
  socials: {
    linkedin?: string;
    github?: string;
    instagram?: string;
    twitter?: string;
  };
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "yeruva-sai-pradeep-reddy",
    name: "Yeruva Sai Pradeep Reddy",
    role: "Web Developer",
    specialization: "Full-Stack Web Architecture & Performance Engineering",
    bio: "Core web engineering lead specializing in high-frequency React/Next.js applications, custom luxury design systems, and sub-second load optimizations. Pradeep architects resilient, scalable frontend engines for global enterprises.",
    skills: ["React / Next.js", "TypeScript", "Tailwind CSS", "Node.js", "System Architecture", "Performance Tuning"],
    image: "/src/assets/images/team_pradeep_1787065935260.jpg",
    socials: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      twitter: "https://x.com"
    }
  },
  {
    id: "ruthvij-sai-reddy",
    name: "Ruthvij Sai Reddy",
    role: "App Developer",
    specialization: "Cross-Platform & Native Mobile Engineering",
    bio: "Mobile systems specialist directing iOS and Android app lifecycles. Ruthvij engineers fluid 60fps gesture interfaces, offline-first sync protocols, and high-throughput biometric authentication architectures.",
    skills: ["React Native", "Swift / iOS", "Kotlin / Android", "Firebase", "State Engines", "REST / GraphQL APIs"],
    image: "/src/assets/images/team_ruthvij_1787065952574.jpg",
    socials: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      twitter: "https://x.com"
    }
  },
  {
    id: "anji-sharma",
    name: "Anji Sharma",
    role: "Digital Marketer",
    specialization: "Omnichannel Growth & Performance Acquisition",
    bio: "Data-focused growth strategist managing multimillion-dollar paid media allocations across Meta, Google Ads, and Programmatic networks with laser-sharp conversion rate optimization and attribution modeling.",
    skills: ["Google Ads / Meta Ads", "CRO Optimization", "Audience Funnels", "Attribution Models", "Campaign Scaling", "Copywriting"],
    image: "/src/assets/images/team_anji_1787065963605.jpg",
    socials: {
      linkedin: "https://linkedin.com",
      twitter: "https://x.com",
      instagram: "https://instagram.com"
    }
  },
  {
    id: "prasad",
    name: "Prasad",
    role: "Instagram Handling",
    specialization: "Social Growth, Viral Content & Brand Narrative",
    bio: "Creative social media director leading Instagram algorithm growth, visual asset styling, short-form viral storytelling, and high-engagement community brand management for top-tier clientele.",
    skills: ["Instagram Algorithm Ops", "Viral Reels Production", "Brand Curation", "Community Scaling", "Visual Storytelling", "Influencer Strategy"],
    image: "/src/assets/images/team_prasad_1787065980675.jpg",
    socials: {
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
      twitter: "https://x.com"
    }
  }
];

export interface ClientPartner {
  id: string;
  name: string;
  industry: string;
  scope: string;
  impactMetric: string;
  impactLabel: string;
  description: string;
  quote?: string;
  featuredYear: string;
  technologiesUsed: string[];
}

export const CLIENT_PARTNERS: ClientPartner[] = [
  {
    id: "sleep-excellent",
    name: "Sleep Excellent",
    industry: "Luxury Sleep & Ergonomic Wellness",
    scope: "Performance Marketing & E-Commerce Web Platform",
    impactMetric: "+420%",
    impactLabel: "ROAS in Q1 Scale Sprint",
    description: "Architected end-to-end customer acquisition funnels and high-converting direct-to-consumer store infrastructure, transforming paid social traffic into compound subscription revenue.",
    quote: "HYVEX restructured our entire paid media acquisition. We achieved profitability on day 14 of the new ad sets.",
    featuredYear: "2024 — Present",
    technologiesUsed: ["Meta Ads Engine", "High-Converting CRO", "Headless React Storefront", "Attribution Analytics"]
  },
  {
    id: "career-connect",
    name: "Career Connect",
    industry: "Enterprise Talent & EdTech Recruitment",
    scope: "Full-Stack Web Portal & SEO Dominance",
    impactMetric: "2.4M+",
    impactLabel: "Monthly Active Job Seekers",
    description: "Engineered ultra-fast job discovery portals with sub-second Elasticsearch capabilities and executed high-authority programmatic SEO capturing top-tier organic keywords.",
    quote: "Our organic candidate inflow tripled following the technical SEO rewrite and sub-second UI overhaul by HYVEX.",
    featuredYear: "2023 — Present",
    technologiesUsed: ["Next.js App Engine", "Programmatic SEO", "Elasticsearch Gateways", "Automated Candidate Funnels"]
  },
  {
    id: "wallmart",
    name: "Wallmart",
    industry: "Global Retail & Commerce Operations",
    scope: "Performance Ad Testing & Supply Chain UI Modules",
    impactMetric: "-38%",
    impactLabel: "Customer Acquisition Cost (CAC)",
    description: "Developed localized digital performance ad variations and internal dashboard modules for real-time inventory campaign triggers across regional digital touchpoints.",
    quote: "The speed of execution and data rigor HYVEX brought to our performance campaigns set a new benchmark.",
    featuredYear: "2024",
    technologiesUsed: ["Omnichannel Ad Automations", "High-Frequency Banners", "Data Dashboards", "A/B Testing Frameworks"]
  },
  {
    id: "orica",
    name: "Orica",
    industry: "Global Mining & Commercial Infrastructure",
    scope: "Enterprise Web Architecture & Digital Brand Flagship",
    impactMetric: "99.99%",
    impactLabel: "Global Cloud Uptime & SLA",
    description: "Delivered a high-security, bilingual corporate digital ecosystem engineered for global compliance, responsive multi-device accessibility, and stakeholder analytics.",
    quote: "HYVEX treated our corporate web architecture with absolute engineering precision and zero downtime.",
    featuredYear: "2023 — 2024",
    technologiesUsed: ["TypeScript / React", "Cloud Run Infrastructure", "Bespoke Design System", "Strict Security Hardening"]
  },
  {
    id: "clat-ai",
    name: "Clat.AI",
    industry: "AI-Powered Legal Education & Law Prep",
    scope: "Mobile App Development & AI Growth Engine",
    impactMetric: "180K+",
    impactLabel: "Active Aspirants & 4.9★ Store Rating",
    description: "Built the cross-platform iOS and Android mock-test simulator with intelligent AI mistake analysis, paired with an aggressive viral Instagram and performance marketing acquisition loop.",
    quote: "From zero to over 180,000 legal aspirants in 6 months. HYVEX's mobile app engineering and social growth strategy made it happen.",
    featuredYear: "2024 — Present",
    technologiesUsed: ["React Native", "AI Evaluation Models", "Instagram Viral Engine", "In-App Subscription Systems"]
  }
];

export const SERVICES_DATA: Record<string, ServiceInfo> = {
  "digital-marketing": {
    id: "digital-marketing",
    slug: "digital-marketing",
    title: "Digital Marketing",
    subtitle: "Precision Growth Engineering & Data-Driven Revenue Optimization",
    shortDesc: "High-converting paid media campaigns, omnichannel growth funnels, and precision audience targeting engineered for maximum ROI.",
    fullDesc: "Our Digital Marketing discipline strips away vanity metrics to focus strictly on enterprise revenue growth. We combine advanced customer acquisition funnels, algorithmic ad management, high-impact copywriting, and conversion rate optimization (CRO) to dominate market share.",
    deliverables: [
      "Omnichannel Meta & Google Ads Architecture",
      "High-Converting Sales & Lead Funnel Design",
      "Advanced Conversion Rate Optimization (CRO)",
      "Retargeting & LTV Amplification Networks",
      "Custom Data Analytics & Attribution Dashboards",
      "Strategic Copywriting & High-Contrast Visual Ad Assets"
    ],
    processSteps: [
      {
        step: "01",
        title: "Deep Audit & Market Diagnostics",
        desc: "We analyze your historical traffic, competitor positioning, ad account performance, and unit economics to pinpoint leakage points."
      },
      {
        step: "02",
        title: "Funnel & Campaign Architecture",
        desc: "Engineering custom landing page experiences paired with structured ad sets tailored for high-intent target audience segments."
      },
      {
        step: "03",
        title: "Multi-Channel Execution",
        desc: "Deploying high-impact creative messaging across Google, Meta, LinkedIn, and programmatic channels with daily bid management."
      },
      {
        step: "04",
        title: "Algorithmic Scaling & Optimization",
        desc: "Continuous A/B testing, audience refinement, and budget reallocation toward high-performing campaigns to compound ROI."
      }
    ],
    metrics: [
      { label: "Average Client ROI Growth", value: "340%" },
      { label: "Ad Spend Managed", value: "$12M+" },
      { label: "Conversion Rate Increase", value: "2.8x" }
    ],
    faqs: [
      { q: "How quickly do we see results from digital marketing campaigns?", a: "Initial traffic and conversion data begin populating within 48-72 hours of campaign activation. Full algorithmic optimization and scaling typically stabilize in weeks 2 to 4." },
      { q: "Which ad platforms do you specialize in?", a: "We manage high-performing campaigns across Meta (Facebook & Instagram), Google Search & Display, YouTube, LinkedIn B2B, and programmatic display ad networks." }
    ]
  },
  "performance-marketing": {
    id: "performance-marketing",
    slug: "performance-marketing",
    title: "Performance Marketing",
    subtitle: "High-ROAS Media Buying, Algorithmic Bidding & Unit-Economics Scaling",
    shortDesc: "Aggressive, mathematically optimized performance campaigns engineered to lower Customer Acquisition Cost (CAC) and scale Return on Ad Spend (ROAS).",
    fullDesc: "Performance Marketing at HYVEX is an exacting science. We don't chase vanity clicks or impressions; we engineer high-velocity acquisition machines calibrated against contribution margin, customer lifetime value (LTV), and real-time ROAS targets across Meta, Google Performance Max, TikTok, and Programmatic exchanges.",
    deliverables: [
      "Algorithmic Performance Max & Meta Scaling",
      "Dynamic Product Ads & Automated Feed Management",
      "Customer Acquisition Cost (CAC) Reduction Architecture",
      "Real-Time Server-Side Event Tracking & CAPI Setup",
      "Creative Fatigue Rotation & High-Velocity Iteration",
      "Multi-Touch Attribution & LTV Cohort Modeling"
    ],
    processSteps: [
      {
        step: "01",
        title: "Unit Economics & Baseline Modeling",
        desc: "Auditing gross margins, target blended CAC, payback periods, and historical conversion pixel fidelity to establish mathematical guardrails."
      },
      {
        step: "02",
        title: "High-Intent Audience & Creative Stacks",
        desc: "Deploying high-contrast creative angles, unboxing narratives, comparison grids, and dynamic hook testing across custom audience segments."
      },
      {
        step: "03",
        title: "Algorithmic Media Buying & Scaling",
        desc: "Scaling winning ad sets with horizontal budget distribution and automated rule-based bid triggers to prevent ad fatigue."
      },
      {
        step: "04",
        title: "Attribution & Margin Preservation",
        desc: "Reconciling server-side CAPI events, blended MER (Marketing Efficiency Ratio), and profit-first capital reinvestment."
      }
    ],
    metrics: [
      { label: "Average Client ROAS Achieved", value: "4.8x" },
      { label: "Average CAC Reduction", value: "-34%" },
      { label: "Total Revenue Scaled", value: "$28M+" }
    ],
    techStack: ["Meta Conversions API", "Google PMax", "Triple Whale / Northbeam", "Klaviyo CRM", "Shopify Plus", "Custom BI Dashboards"],
    faqs: [
      { q: "How is Performance Marketing different from general Digital Marketing?", a: "While digital marketing includes organic content and brand awareness, Performance Marketing is 100% focused on direct financial return—measuring strictly CPA, ROAS, and net contribution profit per dollar invested." },
      { q: "What monthly ad spend is ideal for performance marketing scaling?", a: "We work with brands investing anywhere from $3,000/month to upwards of $250,000+/month in paid media, tailoring algorithmic pacing and creative velocity to budget scale." }
    ]
  },
  "web-development": {
    id: "web-development",
    slug: "web-development",
    title: "Web Development",
    subtitle: "Ultra-Fast, Editorial Web Engineering & Bespoke UX/UI Systems",
    shortDesc: "Bespoke digital platforms engineered with lightning-fast load speeds, high-contrast editorial aesthetics, and bulletproof security.",
    fullDesc: "We build digital web flagships that set industry benchmarks. Combining cutting-edge JavaScript frameworks like React, Vite, and Next.js with meticulous responsive UI architecture, HYVEX creates web applications that feel fluid, authoritative, and frictionless.",
    deliverables: [
      "Custom React & Next.js Web Platforms",
      "Sub-Second Page Load Optimization (< 0.8s)",
      "Bespoke High-Contrast Luxury Design Systems",
      "Headless CMS Integration & Custom API Gateways",
      "Enterprise Web Security & Cross-Browser Precision",
      "Accessibility & WCAG AA Standard Compliance"
    ],
    processSteps: [
      {
        step: "01",
        title: "Architectural Discovery & Wireframing",
        desc: "Defining site structure, user journeys, performance targets, and content strategy prior to writing line one of code."
      },
      {
        step: "02",
        title: "Editorial Design System Creation",
        desc: "Crafting bespoke high-contrast typography, interactive components, micro-animations, and spatial grids."
      },
      {
        step: "03",
        title: "High-Performance Engineering",
        desc: "Developing lean, modular codebases with strict TypeScript safety, server-rendered components, and asset optimization."
      },
      {
        step: "04",
        title: "Global CDN Deployment & QA",
        desc: "Rigorous load testing, security hardening, SEO metadata auditing, and zero-downtime deployment on Cloud Run / Vercel."
      }
    ],
    metrics: [
      { label: "Lighthouse Performance Score", value: "99/100" },
      { label: "Average Page Load Time", value: "< 0.6s" },
      { label: "Client Security Uptime", value: "99.99%" }
    ],
    techStack: ["React 19", "TypeScript", "Tailwind CSS", "Vite", "Node.js / Express", "Framer Motion"],
    faqs: [
      { q: "Do you build custom themes or use pre-made templates?", a: "Every HYVEX website is 100% custom engineered from scratch. We do not use bloatware templates or generic builders, ensuring top-tier performance and original branding." },
      { q: "Can our team manage content internally after launch?", a: "Yes, we integrate seamless headless content management solutions so your editorial team can update copy, images, and articles effortlessly." }
    ]
  },
  "app-development": {
    id: "app-development",
    slug: "app-development",
    title: "App Development",
    subtitle: "Native & Cross-Platform Mobile Applications for iOS & Android",
    shortDesc: "High-performance mobile apps built for seamless offline functionality, intuitive gesture UI, and enterprise-grade backend stability.",
    fullDesc: "HYVEX transforms complex digital ideas into polished, high-rated mobile applications. Whether building native iOS/Android experiences or cross-platform mobile architectures, we prioritize liquid smooth 60fps animations, intelligent state caching, and bulletproof security.",
    deliverables: [
      "Native iOS (Swift) & Android (Kotlin) Development",
      "Cross-Platform React Native & Flutter Engineering",
      "Offline-First Data Synchronization Engines",
      "Real-Time Biometric Auth & Cloud API Backends",
      "Apple App Store & Google Play Store Publishing",
      "Continuous Monitoring, Crash Analytics & Updates"
    ],
    processSteps: [
      {
        step: "01",
        title: "Product Scope & Technical Blueprint",
        desc: "Detailing user personas, API specifications, offline state requirements, and screen hierarchy maps."
      },
      {
        step: "02",
        title: "Gesture UI & Prototype Testing",
        desc: "Designing tactile mobile interfaces optimized for single-hand ergonomics, haptic feedback, and fluid transitions."
      },
      {
        step: "03",
        title: "Agile Mobile Engineering",
        desc: "Iterative sprint development with continuous automated testing, build distribution, and security scans."
      },
      {
        step: "04",
        title: "Store Submission & Launch Ops",
        desc: "Handling strict App Store & Google Play approval processes, metadata optimization, and production rollback safeguards."
      }
    ],
    metrics: [
      { label: "App Store Approval Rate", value: "100%" },
      { label: "Average App Rating", value: "4.9/5" },
      { label: "Active Mobile Users Served", value: "1.2M+" }
    ],
    techStack: ["React Native", "Swift", "Kotlin", "Node.js", "REST / GraphQL", "Firebase / Postgres"],
    faqs: [
      { q: "Do you handle App Store and Google Play store submissions?", a: "Yes, we handle the entire release lifecycle, including developer account setup, provisioning profiles, store listings, and compliance reviews." },
      { q: "Can one codebase run on both iPhone and Android?", a: "Yes! Using cross-platform technologies like React Native, we can write a unified codebase that compiles natively to both iOS and Android with maximum efficiency." }
    ]
  },
  "seo-services": {
    id: "seo-services",
    slug: "seo-services",
    title: "SEO Services",
    subtitle: "Organic Search Domination & High-Intent Keyword Capture",
    shortDesc: "Technical SEO audits, semantic schema engineering, and high-authority link acquisition to secure top organic rankings.",
    fullDesc: "Search Engine Optimization at HYVEX is rooted in technical precision and content authority. We optimize every technical dimension—from site crawl budgets and schema markup to high-value editorial link building—positioning your brand at the absolute summit of search results.",
    deliverables: [
      "Enterprise Technical SEO & Crawlability Audits",
      "Semantic Search & Intent-Driven Keyword Strategy",
      "Structured JSON-LD Schema & Rich Snippet Markup",
      "High-Authority Editorial Backlink Acquisition",
      "Local SEO & Google Business Profile Optimization",
      "Real-Time Keyword Rank Tracking & Revenue Reporting"
    ],
    processSteps: [
      {
        step: "01",
        title: "360° Technical Crawl & Diagnostic",
        desc: "Diagnosing indexation roadblocks, canonical issues, Core Web Vitals, site architecture, and mobile rendering errors."
      },
      {
        step: "02",
        title: "Keyword & Entity Mapping",
        desc: "Identifying high-commercial-intent keywords and semantic entity structures competitors are failing to address."
      },
      {
        step: "03",
        title: "On-Page & Technical Remediation",
        desc: "Optimizing header hierarchies, meta descriptions, internal link silos, page speeds, and structured schema."
      },
      {
        step: "04",
        title: "Authority Outreach & Rank Scaling",
        desc: "Securing tier-1 editorial mentions and backlinks while monitoring keyword movements and organic revenue attribution."
      }
    ],
    metrics: [
      { label: "First-Page Keyword Dominance", value: "88%" },
      { label: "Average Organic Traffic Uplift", value: "285%" },
      { label: "High-Authority Links Built", value: "4,500+" }
    ],
    faqs: [
      { q: "How long does it take for SEO optimizations to reflect in Google rankings?", a: "Technical fixes can show indexing improvements within 2-3 weeks. Competitive keyword ranking climbs usually yield significant organic momentum in 60 to 90 days." },
      { q: "How do you protect our site from spammy backlink penalties?", a: "We strictly practice white-hat editorial outreach. Every backlink acquired comes from legitimate, high-DR domain publications relevant to your industry." }
    ]
  }
};

export const TESTIMONIALS = [
  {
    quote: "HYVEX completely transformed our online sales infrastructure. Their digital marketing funnels generated a 4x increase in qualified leads within 60 days.",
    author: "Vikramaditya Rao",
    title: "Chief Marketing Officer, Apex Financials",
    location: "Hyderabad"
  },
  {
    quote: "The web development team engineered our platform with sub-second page loads and a stunning dark editorial design. Our user engagement doubled immediately.",
    author: "Elena Rostova",
    title: "Managing Director, Solis Luxury Real Estate",
    location: "Dubai & Mumbai"
  },
  {
    quote: "Working directly with Hari Krishna and the HYVEX team was a game-changer. They built our cross-platform mobile app seamlessly and launched on both store platforms ahead of schedule.",
    author: "Siddharth Verma",
    title: "Co-Founder, Qube Logistics",
    location: "Bengaluru"
  }
];

export const AGENCY_STATS = [
  { number: "120+", label: "High-Impact Projects Delivered" },
  { number: "340%", label: "Average Client ROI Lift" },
  { number: "$45M+", label: "Client Revenue Generated" },
  { number: "99.8%", label: "Platform Uptime & Reliability" }
];

export const CORE_VALUES = [
  {
    title: "Uncompromising Precision",
    desc: "We reject mediocrity and AI slop. Every pixel, line of code, and ad copy variation is crafted with deliberate mathematical precision."
  },
  {
    title: "Unmatched Speed",
    desc: "In modern business, speed is the ultimate competitive advantage. We execute rapid deployment sprints without breaking quality constraints."
  },
  {
    title: "Data Authoritarianism",
    desc: "Opinions don't scale; data does. Every strategic decision at HYVEX is anchored in measurable metrics, conversion data, and unit economics."
  },
  {
    title: "Radical Transparency",
    desc: "No hidden fees, no vague reports. Our clients maintain real-time visibility into campaign performance, code commits, and project milestones."
  }
];
