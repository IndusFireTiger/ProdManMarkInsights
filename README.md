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

## Reading paths by role

`/for/<id>` pages give each kind of role (AI product, product leadership,
product marketing, regulated domains, EdTech) a short pitch plus a curated
list of case studies and essays. Send the matching link with an application
instead of reskinning the site. Edit `src/lib/lenses.ts` to retune a pitch,
reorder what each path shows, or add a new path.

## Deploy

Connected to Netlify (build `npm run build`, publish `dist`). Pushing to the
default branch triggers an automatic build and deploy.
