// Role lenses — curated reading paths through the same body of work.
//
// One site, many applications: instead of reskinning the whole site for each
// job round, each lens gives a reader (a hiring manager, a recruiter) a short
// pitch plus the case studies and essays most relevant to that kind of role.
// Send the lens URL — /for/<id> — with an application.
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
  work: string[];
  perspectives: string[];
};

export const LENSES: Lens[] = [
  {
    id: 'ai-product',
    label: 'AI Product Management',
    title: 'For AI product roles',
    pitch:
      'I run product for AI products today, and I came up through engineering, so I can work in the detail of how models, workflows and evaluation actually behave. My focus is the part AI does not automate: deciding what to build, measuring whether it worked, and keeping a human accountable where the output matters.',
    strengths: [
      'Owning an AI product portfolio end to end, from strategy to acceptance testing',
      'An AI-Driven Development Lifecycle: short cycles, PRD-to-ticket tracing, feature-flagged rollouts',
      'Evaluation and benchmark testing tied to an outcome customers feel',
      'Hands-on: RAG, prompt engineering, MCP and agents (Claude, n8n, Zapier)',
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
    title: 'For product leadership roles',
    pitch:
      'I have built product functions as well as products: most recently as the first product manager brought in to establish the discipline, and before that leading a product marketing team as Head of Product Marketing and Principal Product Manager. I care about the operating model: how decisions get made, measured and revisited.',
    strengths: [
      'Establishing a product function from zero: strategy, roadmap, OKRs, intake',
      'Leading a product marketing team alongside a principal PM remit',
      'Outcome metrics and decision-making made legible',
      'Change leadership: moving teams from waterfall habits to iterative delivery',
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
    title: 'For product marketing and go-to-market roles',
    pitch:
      'I led a product marketing team while also holding a principal product manager remit, so I treat go-to-market as part of the product, not a handoff after it. I designed the GTM Factory, a repeatable launch system run by a virtual team embedded in engineering, and I am now exploring how agents can bring product marketing upstream.',
    strengths: [
      'The GTM Factory: asset tiering and compressed time-to-market',
      'Positioning, segmentation and pricing grounded in customer evidence',
      'Requirement harmonisation that makes features estimable and priceable',
      'AEO / SEO / GEO and AI-driven marketing workflows',
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
    title: 'For roles in regulated and data-heavy domains',
    pitch:
      'My recent work has all been where getting it wrong has consequences: data risk, compliance and governance in enterprise software, and now AI products for financial advice. I am comfortable turning subjective, regulated requirements into something scoped, traceable and shippable.',
    strengths: [
      'Data Risk & Compliance and Data Governance product depth',
      'AI-assisted compliance review built into the product',
      'Traceability and de-identified testing as product capabilities',
      'Harmonising many enterprises’ subjective requirements into one product',
    ],
    work: [
      'founding-product-function-ai-advice',
      'data-governance-harmonisation',
    ],
    perspectives: [
      'data-catalog-and-data-risk',
      'catalog-to-enterprise-data-operations',
      'fluency-is-free-now',
    ],
  },
  {
    id: 'edtech',
    label: 'EdTech & education',
    title: 'For EdTech and education roles',
    pitch:
      'Education is the sector I keep coming back to: a Masters in Public Administration, editing a student e-journal, coordinating campus placements and teaching underprivileged children through Project Manthan. On this site I have studied the Australian education market closely and built learning-lab products to test ideas about engagement and responsible AI.',
    strengths: [
      'Reading the Australian education market: segments, wedges and core systems',
      'Gamification and progression design for learning products',
      'Responsible AI personalisation with a human in the loop',
      'Product and go-to-market thinking applied to learning products',
    ],
    work: ['littlegurukul', 'ai-companion', 'smartlaunch'],
    perspectives: [
      'one-country-many-markets-australian-edtech',
      'student-management-systems-australian-higher-ed',
      'the-model-is-not-the-moat',
      'personalising-education',
    ],
  },
];
