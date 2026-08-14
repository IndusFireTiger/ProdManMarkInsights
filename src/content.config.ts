import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

// Skill highlights a Product Management / Product Marketing professional is
// positioned against. Each perspective is filed under exactly one.
export const SKILLS = [
  'Product Strategy & Vision',
  'Go-to-Market & Product Marketing',
  'Applied AI in Product',
  'Agile Leadership & Change',
  'EdTech & Education',
] as const;

// Multi-part essays that argue one case across several pieces. Parts collapse
// into a single grouped block on the perspectives index — ordered by `part`,
// positioned where the most recent part would have fallen chronologically.
//
// TO ADD A SERIES: add an entry here, then set `series` (a key below) and
// `part` (1-based) on each member. Set both or neither; a piece with `series`
// and no `part` sorts to the end of its block.
export const SERIES = {
  'product-craft': {
    title: 'What product management is, isn’t, and becomes',
    blurb:
      'Four pieces arguing one case: most product careers accumulate the wrong experience, the real craft is decision-making made legible, agents can buy back the attention it needs — and the faculty that finally decides is discernment.',
  },
  'ai-and-the-crafts': {
    title: 'What AI changed in the crafts',
    blurb:
      'The same inversion — building gets cheap, judgement gets scarce — arriving in three disciplines: engineering, interface design, and the product operating model itself.',
  },
  'australian-edtech': {
    title: 'Reading a market: Australian education',
    blurb:
      'One market examined three ways: how it segments and where the wedges are, the core systems institutions actually run on, and what it takes to enter it against trusted incumbents.',
  },
  'data-catalog': {
    title: 'The data catalog, examined twice',
    blurb:
      'A single product from two angles: first as a lens that makes invisible data risk operable, then as a case study in re-founding a product when its market fit decays.',
  },
} as const;

export type SeriesId = keyof typeof SERIES;

const perspectives = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/perspectives' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.coerce.date(),
    readingTime: z.string().optional(),
    skill: z.enum(SKILLS),
    topics: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),

    // ---- optional series membership; see SERIES above ----
    series: z
      .string()
      .refine((s): s is SeriesId => s in SERIES, {
        message: `series must be one of: ${Object.keys(SERIES).join(', ')}`,
      })
      .optional(),
    part: z.number().int().positive().optional(),
  }),
});

const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    focus: z.string(),
    role: z.string().optional(),
    kind: z.enum(['Enterprise', 'Learning Lab']).default('Learning Lab'),
    order: z.number().default(99),
    draft: z.boolean().default(false),
  }),
});

// ---------------------------------------------------------------------------
// Marginalia — terms used across the writing, unpacked.
// ---------------------------------------------------------------------------

// PUBLIC filter roles. Consolidated from the 15 internal audiences below so a
// reader gets a usable filter bar instead of fifteen chips.
export const ROLES = [
  'Product',
  'Go-to-Market',
  'Applied AI',
  'Data & Governance',
  'Design & Learning',
  'Evidence & Metrics',
] as const;

// INTERNAL audiences — the learning map. Never rendered; drives the study queue
// and any future academy export. See Portfolio/MARGINALIA-PLAN.md.
export const AUDIENCES = [
  'Product Manager',
  'AI Product Manager',
  'Founder / GM',
  'Product Marketer',
  'Marketer',
  'Sales & Presales',
  'Customer Success',
  'Data Practitioner',
  'Data & AI Governance',
  'Solution Architect',
  'Agile & Change Practitioner',
  'UX / Product Designer',
  'Growth & Analytics',
  'Learning Designer',
  'Sector Specialist',
] as const;

// Optional future academy home. Usually empty — this bank is a learning map
// first, academy feedstock only incidentally.
export const DESTINATIONS = [
  'pm-academy',
  'pmm-academy',
  'data-aigov-academy',
  'edtech-academy',
] as const;

const marginalia = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/marginalia' }),
  schema: z.object({
    // ---- rendered ----
    term: z.string(),
    aka: z.array(z.string()).default([]),
    roles: z.array(z.enum(ROLES)).min(1),
    kind: z.enum(['Deep', 'Coined', 'Disambiguation']).default('Deep'),
    short: z.string(),
    example: z.string().optional(),
    related: z.array(z.string()).default([]),
    appearsIn: z.array(z.string()).default([]),

    // ---- build control: publishing is opt-in ----
    portfolio: z.boolean().default(false),

    // ---- NEVER rendered: the learning map ----
    learning: z
      .object({
        audience: z.array(z.enum(AUDIENCES)).min(1),
        level: z.enum(['foundation', 'practitioner', 'advanced']),
        source: z.enum(['harvested', 'curriculum']).default('harvested'),
        module: z.string().optional(),
        status: z
          .enum(['backlog', 'learning', 'confident', 'taught'])
          .default('backlog'),
        destination: z.enum(DESTINATIONS).optional(),
      })
      .optional(),
  }),
});

// ---------------------------------------------------------------------------
// LEARNING MAP — the invisible bank. Renders nowhere; generates no pages.
//
// Terms harvested from the published corpus but deliberately NOT published in
// Marginalia: commodity definitions that would dilute a peer-to-peer site and
// can't earn a citation, but are exactly the foundation tier of a curriculum.
//
// Stored as a single JSON file (src/content/learning-map.json) so mastery
// status can be bulk-edited in one pass, and so any tooling can read it with
// no YAML dependency. JSON carries no comments, so the field semantics live
// here instead:
//
//   type        term (vocabulary) | essay | case-study
//                 'essay' and 'case-study' tag existing published work as
//                 course material without touching its frontmatter.
//   audience[]  who needs the term — the 15 internal AUDIENCES above. The
//                 public Marginalia filter consolidates these into 6 ROLES.
//   level       foundation | practitioner | advanced  (curriculum sequencing)
//   source      harvested  = appears somewhere in the published corpus
//               curriculum = study queue; not yet used in any essay
//   status      mastery: backlog -> learning -> confident -> taught
//                 ('taught' is the honest bar: you know it when you can teach it)
//   priority    study order for queue items only: now | next | later | someday
//                 Tiers rather than absolute ranks, so nothing needs renumbering
//                 when one item moves. Only set where status is backlog or
//                 learning; absent once a term reaches confident.
//   destination optional future academy; usually absent — this is a learning
//                 map first, academy feedstock only incidentally.
//
// TO PUBLISH A TERM: create src/content/marginalia/<id>.md with portfolio:true
// and delete its row here.
//
// See Portfolio/MARGINALIA-PLAN.md for the full plan.
// ---------------------------------------------------------------------------
const learningMap = defineCollection({
  loader: file('src/content/learning-map.json'),
  schema: z.object({
    // 'term' is vocabulary; 'essay' and 'case-study' tag existing published
    // work as course material without touching its frontmatter.
    type: z.enum(['term', 'essay', 'case-study']).default('term'),
    term: z.string(),
    aka: z.array(z.string()).default([]),
    short: z.string().optional(),
    audience: z.array(z.enum(AUDIENCES)).min(1),
    level: z.enum(['foundation', 'practitioner', 'advanced']),
    source: z.enum(['harvested', 'curriculum']).default('harvested'),
    module: z.string().optional(),
    status: z
      .enum(['backlog', 'learning', 'confident', 'taught'])
      .default('backlog'),
    priority: z.enum(['now', 'next', 'later', 'someday']).optional(),
    destination: z.enum(DESTINATIONS).optional(),
    appearsIn: z.array(z.string()).default([]),
  }),
});

export const collections = { perspectives, work, marginalia, learningMap };
