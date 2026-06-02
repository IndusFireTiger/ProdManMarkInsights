import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const perspectives = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/perspectives' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.coerce.date(),
    readingTime: z.string().optional(),
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

export const collections = { perspectives, work };
