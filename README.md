# ProdMan·Insights

An editorial portfolio site — product strategy, product marketing & applied AI,
with a keen interest in education. Built with [Astro](https://astro.build).

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
```

## Build

```bash
npm run build    # outputs static site to ./dist
npm run preview  # preview the production build locally
```

## Content

Writing and case studies are Markdown files — add or edit a `.md` file to publish:

- `src/content/perspectives/` — essays & frameworks
- `src/content/work/` — case studies

Frontmatter fields are defined in `src/content.config.ts`.

## Role routes (unlisted)

`/for/<id>` pages are standalone landing pages for a kind of role: AI product,
product leadership, product marketing, regulated domains and EdTech. Each has
a short pitch, a career snapshot told for that reader, and a curated list of
case studies and essays. Send the matching link with an application.

They are unlisted on purpose: nothing on the site links to them, they are not
in the sitemap, and they carry `noindex`. The work and essays they point to
are ordinary entries, listed under Work and Perspectives as usual. Edit
`src/lib/lenses.ts` to retune a route or add a new one.

## Deploy

Connected to Netlify (build `npm run build`, publish `dist`). Pushing to the
default branch triggers an automatic build and deploy.
