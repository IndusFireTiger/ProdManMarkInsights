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
// Learning map — the invisible bank. Renders nowhere; no page is generated from
// it. One YAML file so mastery status can be bulk-edited in a single pass.
// Terms live here until they're worth publishing, at which point they move to a
// marginalia/*.md file. See Portfolio/MARGINALIA-PLAN.md.
// ---------------------------------------------------------------------------
const learningMap = defineCollection({
  loader: file('src/content/learning-map.yaml'),
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
    destination: z.enum(DESTINATIONS).optional(),
    appearsIn: z.array(z.string()).default([]),
  }),
});

export const collections = { perspectives, work, marginalia, learningMap };
