// Schema.org helpers. One place for the brand identity so author/publisher
// never drift between page types.
//
// The site is deliberately anonymised, so author and publisher are the
// Organization, not a Person. See Portfolio/MARGINALIA-PLAN.md.

export const SITE_NAME = 'ProdMan·Insights';

export const ORGANISATION = {
  '@type': 'Organization',
  name: SITE_NAME,
} as const;

const abs = (site: URL | undefined, path: string) =>
  new URL(path, site ?? 'https://prodmanmark-insights.netlify.app').href;

/** An essay or case study. */
export function articleSchema(opts: {
  site: URL | undefined;
  path: string;
  headline: string;
  description: string;
  datePublished?: Date;
  keywords?: string[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: opts.headline,
    description: opts.description,
    url: abs(opts.site, opts.path),
    mainEntityOfPage: { '@type': 'WebPage', '@id': abs(opts.site, opts.path) },
    author: ORGANISATION,
    publisher: ORGANISATION,
    inLanguage: 'en',
    ...(opts.datePublished
      ? { datePublished: opts.datePublished.toISOString().slice(0, 10) }
      : {}),
    ...(opts.keywords?.length ? { keywords: opts.keywords.join(', ') } : {}),
  };
}

/** A single glossary term. */
export function definedTermSchema(opts: {
  site: URL | undefined;
  path: string;
  name: string;
  description: string;
  termCode?: string;
  aka?: string[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'DefinedTerm',
    name: opts.name,
    description: opts.description,
    url: abs(opts.site, opts.path),
    inDefinedTermSet: {
      '@type': 'DefinedTermSet',
      name: `${SITE_NAME} — Marginalia`,
      url: abs(opts.site, '/marginalia'),
    },
    publisher: ORGANISATION,
    inLanguage: 'en',
    ...(opts.termCode ? { termCode: opts.termCode } : {}),
    ...(opts.aka?.length ? { alternateName: opts.aka } : {}),
  };
}

/** The glossary itself, listing every term it contains. */
export function definedTermSetSchema(opts: {
  site: URL | undefined;
  description: string;
  terms: { id: string; name: string; description: string }[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'DefinedTermSet',
    name: `${SITE_NAME} — Marginalia`,
    description: opts.description,
    url: abs(opts.site, '/marginalia'),
    publisher: ORGANISATION,
    inLanguage: 'en',
    hasDefinedTerm: opts.terms.map((t) => ({
      '@type': 'DefinedTerm',
      name: t.name,
      description: t.description,
      url: abs(opts.site, `/marginalia/${t.id}`),
    })),
  };
}
