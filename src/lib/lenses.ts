// Role routes — curated, standalone landing pages over the same body of work.
//
// One site, many applications: instead of reskinning the whole site for each
// job round, each route gives a reader (a hiring manager, a recruiter) a short
// pitch, a career snapshot told for that kind of role, and the case studies
// and essays most relevant to it. Send the URL — /<id> — with an
// application.
//
// URLs sit at the top level: /<id>, e.g. /ai-product. An id must not clash
// with a real page or section (about, work, perspectives, marginalia,
// learning-map, sitemap.xml).
//
// UNLISTED BY DESIGN: nothing on the public site links to these pages, they
// are left out of the sitemap and carry noindex, and they don't link to each
// other. They are reachable only by the link you send. The case studies and
// essays they point to are ordinary entries, listed under Work and
// Perspectives as usual.
//
// TO ADD OR RETUNE A LENS: edit this list. `work` and `perspectives` are entry
// ids (the Markdown file names without .md), listed in the order to show them.
// Unknown ids fail the build, so a renamed file can't silently drop out.

export type Lens = {
  id: string;
  label: string; // short name for cards and chips
  title: string; // page heading
  pitch: string; // one paragraph, first person
  strengths: string[]; // what this lens evidences, scannable
  // Career snapshot, newest first, each role told for this kind of reader.
  career: { when: string; role: string; line: string }[];
  work: string[];
  perspectives: string[];
};

export const LENSES: Lens[] = [
  {
    id: 'ai-product',
    label: 'AI Product Management',
    title: 'AI product management',
    pitch:
      'I run product for AI products today, and I came up through engineering, so I can work in the detail of how models, workflows and evaluation actually behave. My focus is the part AI does not automate: deciding what to build, measuring whether it worked, and keeping a human accountable where the output matters.',
    strengths: [
      'Owning an AI product portfolio end to end, from strategy to acceptance testing',
      'An AI-Driven Development Lifecycle: short cycles, PRD-to-ticket tracing, feature-flagged rollouts',
      'Evaluation and benchmark testing tied to an outcome customers feel',
      'Hands-on: RAG, prompt engineering, MCP and agents (Claude, n8n, Zapier)',
    ],
    career: [
      { when: 'Now', role: "First Product Manager \u00b7 AI products for financial advice and insurance", line: "Own the planning product in a portfolio of three AI products. Run an AI-Driven Development Lifecycle, benchmark testing against time to complete a piece of advice, and AI acceptance testing on de-identified client files." },
      { when: 'Jan–Aug 2026', role: "Head of Product Marketing and Principal Product Manager \u00b7 enterprise Data Risk & Compliance", line: "Prototyped an AI Asset Description generator and an AI Code Explainer, and designed AI-driven automation across product and marketing workflows." },
      { when: 'Earlier', role: "Senior Product Manager, Product Owner, Technical Lead, Senior Software Engineer", line: "An engineer first, which is why I can work in the detail of models, workflows and evaluation. Completed a six-month GenAI program at IIT Patna." },
    ],
    work: [
      'founding-product-function-ai-advice',
      'fitpulse-pricing-agent',
      'ai-companion',
    ],
    perspectives: [
      'ai-product-operating-model',
      'fluency-is-free-now',
      'agile-in-the-age-of-ai',
      'evolving-ux-after-ai',
      'the-model-is-not-the-moat',
    ],
  },
  {
    id: 'product-leadership',
    label: 'Product leadership',
    title: 'Product leadership',
    pitch:
      'I have built product functions as well as products: most recently as the first product manager brought in to establish the discipline, and before that leading a product marketing team as Head of Product Marketing and Principal Product Manager. I care about the operating model: how decisions get made, measured and revisited.',
    strengths: [
      'Establishing a product function from zero: strategy, roadmap, OKRs, intake',
      'Leading a product marketing team alongside a principal PM remit',
      'Outcome metrics and decision-making made legible',
      'Change leadership: moving teams from waterfall habits to iterative delivery',
    ],
    career: [
      { when: 'Now', role: "First Product Manager \u00b7 AI products for financial advice and insurance", line: "Brought in to establish the product management function: strategy and roadmap, product OKRs, a structured customer intake and an AI-driven delivery lifecycle." },
      { when: 'Jan–Aug 2026', role: "Head of Product Marketing and Principal Product Manager \u00b7 enterprise Data Risk & Compliance", line: "Led the product marketing team while holding a principal product manager remit, partnering with regional sales and executives on go-to-market." },
      { when: 'Earlier', role: "Senior Product Manager, Product Owner, Technical Lead, Senior Software Engineer", line: "Climbed the whole ladder from engineering to product, so I've worked from inside every seat a product leader depends on." },
    ],
    work: [
      'founding-product-function-ai-advice',
      'data-governance-harmonisation',
    ],
    perspectives: [
      'the-decision-is-the-deliverable',
      'what-product-management-is-not',
      'agents-dont-give-you-hours',
      'ai-product-operating-model',
      'say-no-to-waterfall',
    ],
  },
  {
    id: 'product-marketing',
    label: 'Product marketing & GTM',
    title: 'Product marketing and go-to-market',
    pitch:
      'I led a product marketing team while also holding a principal product manager remit, so I treat go-to-market as part of the product, not a handoff after it. I designed the GTM Factory, a repeatable launch system run by a virtual team embedded in engineering, and I am now exploring how agents can bring product marketing upstream.',
    strengths: [
      'The GTM Factory: asset tiering and compressed time-to-market',
      'Positioning, segmentation and pricing grounded in customer evidence',
      'Requirement harmonisation that makes features estimable and priceable',
      'AEO / SEO / GEO and AI-driven marketing workflows',
    ],
    career: [
      { when: 'Now', role: "First Product Manager \u00b7 AI products for financial advice and insurance", line: "Run recurring customer validation sessions with a rationale-backed intake, and ground a platform overhaul in market research into how advisers work." },
      { when: 'Jan–Aug 2026', role: "Head of Product Marketing and Principal Product Manager \u00b7 enterprise Data Risk & Compliance", line: "Led the product marketing team. Designed the GTM Factory, a repeatable launch system run by a virtual team embedded in engineering." },
      { when: 'Earlier', role: "Senior Product Manager, Product Owner, Technical Lead, Senior Software Engineer", line: "Engineering and product ownership before marketing, which is why my go-to-market starts inside the product." },
    ],
    work: [
      'fitpulse-pricing-agent',
      'smartlaunch',
      'data-governance-harmonisation',
    ],
    perspectives: [
      'the-gtm-factory',
      'agentic-pmm',
      'one-country-many-markets-australian-edtech',
      'the-model-is-not-the-moat',
    ],
  },
  {
    id: 'regulated-domains',
    label: 'Regulated & data-heavy domains',
    title: 'Regulated and data-heavy domains',
    pitch:
      'My recent work has all been where getting it wrong has consequences: data risk, compliance and governance in enterprise software, and now AI products for financial advice. I am comfortable turning subjective, regulated requirements into something scoped, traceable and shippable.',
    strengths: [
      'Data Risk & Compliance and Data Governance product depth',
      'AI-assisted compliance review built into the product',
      'Traceability and de-identified testing as product capabilities',
      'Harmonising many enterprises’ subjective requirements into one product',
      'Two live governance learning products: DRC Academy and AI Governance Academy',
    ],
    career: [
      { when: 'Now', role: "First Product Manager \u00b7 AI products for financial advice and insurance", line: "AI products for financial advice, where a Statement or Record of Advice is a compliance document. Built Claude-based compliance review tools and tested AI workflows on de-identified client files." },
      { when: 'Jan–Aug 2026', role: "Head of Product Marketing and Principal Product Manager \u00b7 enterprise Data Risk & Compliance", line: "Product and go-to-market for Data Risk & Compliance and Data Governance, harmonising many enterprises' subjective requirements into one product." },
      { when: 'Earlier', role: "Senior Product Manager, Product Owner, Technical Lead, Senior Software Engineer", line: "As Product Owner for harvesting and orchestration, scoped metadata harvesting, scanning and SQL processing using C4-model estimation." },
    ],
    work: [
      'founding-product-function-ai-advice',
      'data-governance-harmonisation',
      'drc-academy',
      'aigov-academy',
    ],
    perspectives: [
      'data-catalog-and-data-risk',
      'catalog-to-enterprise-data-operations',
      'fluency-is-free-now',
    ],
  },
  {
    id: 'ai-governance',
    label: 'AI & data governance',
    title: 'AI and data governance',
    pitch:
      'Governance is where I have spent my recent career, from both sides. I built product and go-to-market for enterprise Data Risk & Compliance software, and I now run product for AI products in financial advice, where every output has to stand up to a compliance reviewer. Outside work I build governance learning products and write about AI governance in practice.',
    strengths: [
      'Data Risk & Compliance and Data Governance product depth',
      'AI governance in practice: compliance review tooling, traceability, de-identified testing',
      'Two live learning products: DRC Academy and AI Governance Academy',
      'Writing on AI governance as a practice at Governed·AI',
    ],
    career: [
      { when: 'Now', role: 'First Product Manager · AI products for financial advice and insurance', line: 'Built Claude-based compliance review tools, PRD-to-ticket traceability and feature-flagged rollouts, and run AI acceptance testing on de-identified client files.' },
      { when: 'Jan–Aug 2026', role: 'Head of Product Marketing and Principal Product Manager · enterprise Data Risk & Compliance', line: 'Led product marketing and shaped the product for Data Risk & Compliance and Data Governance, harmonising many enterprises’ subjective requirements into one product.' },
      { when: 'Earlier', role: 'Senior Product Manager, Product Owner, Technical Lead, Senior Software Engineer', line: 'As Product Owner for harvesting and orchestration, scoped metadata harvesting, scanning and SQL processing for governance use cases.' },
    ],
    work: [
      'drc-academy',
      'aigov-academy',
      'data-governance-harmonisation',
      'founding-product-function-ai-advice',
    ],
    perspectives: [
      'data-catalog-and-data-risk',
      'catalog-to-enterprise-data-operations',
      'ai-product-operating-model',
    ],
  },
  {
    id: 'edtech',
    label: 'EdTech & education',
    title: 'EdTech and education',
    pitch:
      'Education is the sector I keep coming back to: a Masters in Public Administration, editing a student e-journal, coordinating campus placements and teaching underprivileged children through Project Manthan. On this site I have studied the Australian education market closely and built learning-lab products to test ideas about engagement and responsible AI.',
    strengths: [
      'Reading the Australian education market: segments, wedges and core systems',
      'Gamification and progression design for learning products',
      'Responsible AI personalisation with a human in the loop',
      'Product and go-to-market thinking applied to learning products',
      'A live learning product: a 38-lesson, self-paced AI governance curriculum',
    ],
    career: [
      { when: 'Now', role: "First Product Manager \u00b7 AI products for financial advice and insurance", line: "Running product for AI products in a regulated domain: the same craft of trust, evaluation and human oversight that responsible learning products need." },
      { when: 'Jan–Aug 2026', role: "Head of Product Marketing and Principal Product Manager \u00b7 enterprise Data Risk & Compliance", line: "Led product marketing in enterprise software: positioning, segmentation and launch systems that carry over to education markets." },
      { when: 'Earlier', role: "Senior Product Manager, Product Owner, Technical Lead, Senior Software Engineer", line: "Outside work: a Masters in Public Administration, editing a student e-journal, coordinating campus placements and volunteering with Project Manthan." },
    ],
    work: ['aigov-academy', 'ai-companion', 'smartlaunch'],
    perspectives: [
      'one-country-many-markets-australian-edtech',
      'student-management-systems-australian-higher-ed',
      'the-model-is-not-the-moat',
      'personalising-education',
    ],
  },
];
