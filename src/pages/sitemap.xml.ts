// Hand-rolled sitemap — no dependency, and explicit about what is excluded.
//
// Excluded on purpose:
//   - draft entries (they build and are reachable, but are deliberately
//     unlisted; they also carry noindex)
//   - /learning-map (dev-only route; emits no pages in a production build)
//   - unpublished marginalia terms (portfolio:false never generates a page)
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

type Entry = { path: string; lastmod?: string; priority: string };

const iso = (d: Date) => d.toISOString().slice(0, 10);

export const GET: APIRoute = async ({ site }) => {
  const origin = (site?.href ?? 'https://prodmanmark-insights.netlify.app/')
    .replace(/\/$/, '');

  const perspectives = (await getCollection('perspectives')).filter(
    (e) => !e.data.draft
  );
  const work = (await getCollection('work')).filter((e) => !e.data.draft);
  const terms = (await getCollection('marginalia')).filter(
    (e) => e.data.portfolio
  );

  // Newest post date doubles as lastmod for the section indexes.
  const newest = perspectives
    .map((e) => e.data.date)
    .sort((a, b) => b.valueOf() - a.valueOf())[0];

  const entries: Entry[] = [
    { path: '/', lastmod: newest && iso(newest), priority: '1.0' },
    { path: '/perspectives', lastmod: newest && iso(newest), priority: '0.9' },
    { path: '/work', priority: '0.8' },
    { path: '/marginalia', priority: '0.8' },
    { path: '/about', priority: '0.6' },
    ...perspectives.map((e) => ({
      path: `/perspectives/${e.id}`,
      lastmod: iso(e.data.date),
      priority: '0.8',
    })),
    ...work.map((e) => ({ path: `/work/${e.id}`, priority: '0.7' })),
    ...terms.map((e) => ({ path: `/marginalia/${e.id}`, priority: '0.6' })),
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries
  .map(
    (e) =>
      `  <url>\n` +
      `    <loc>${origin}${e.path}</loc>\n` +
      (e.lastmod ? `    <lastmod>${e.lastmod}</lastmod>\n` : '') +
      `    <priority>${e.priority}</priority>\n` +
      `  </url>`
  )
  .join('\n')}
</urlset>
`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
