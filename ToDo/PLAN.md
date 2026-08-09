# ProdManInsights — Portfolio Plan

A light, editorial ("publication") portfolio that positions the owner as a
**product strategist and thought leader**, with a keen interest in the
**education sector**. Built with Astro + Markdown so writing is a first-class
citizen and content is editable without touching code.

Brand: **ProdManInsights** · Contact: prodmaninsights@gmail.com

---

## Positioning thesis

A real engineer who climbed the entire product ladder — Senior Developer →
Technical Lead → Product Owner → Senior PM → Head of Product Marketing &
Principal PM — and now drives applied AI, in a demanding enterprise domain
(Data Risk & Compliance / Data Governance). The site leads with **points of
view and frameworks**, not job descriptions.

### Flagship marketing assets (from the resume)
- **The GTM Factory** — repeatable product-marketing framework (asset tiering,
  virtual team embedded in engineering, compressed time-to-market). Signature
  thought-leadership piece.
- **Structured intelligent system** — definition that lets AI accelerate
  iterative product launch + market feedback (AEO/SEO/GEO).
- **C4-model requirement harmonisation** — turning subjective Data Governance
  needs from many enterprises into estimable, priced features.
- **Applied AI** — AI Asset Description, AI Code Explainer, prompt engineering,
  RAG / MCP / AI agents (Claude, n8n, Zapier). 6-month GenAI program (IIT Patna).
- **"Say NO! to Waterfall"** — change leadership / agile advocacy.
- **Education thread** — MPA; Chief Editor of an e-journal; Placement
  Coordinator; Project Manthan (educating the underprivileged); plus the three
  EdTech learning-lab case studies (LittleGurukul, SmartLaunch, AI Companion).

---

## Phased plan

### Phase 1 — MVP  *(this build)*
- Astro + Markdown editorial design system (serif display, warm "ink on cream",
  scholarly forest accent, restrained motion).
- **Home**: positioning thesis → featured Perspective → Selected Work → about
  strip → contact.
- Flagship essay: **The GTM Factory**.
- Case studies: LittleGurukul, SmartLaunch, AI Companion (EdTech learning lab) +
  one enterprise study (Harmonising Data Governance Requirements with C4).
- **About**, **Perspectives** index, **Work** index, dynamic article/work pages.

### Phase 2 — Depth
- Expand every case study with artifacts (PRD snippet, RICE matrix, C4 diagram,
  KPI dashboard, user-journey map).
- Full enterprise Data-Governance case study.
- Artifact Gallery page.

### Phase 3 — Thought-leadership engine
- Finish the four reflection essays.
- RSS feed + newsletter capture; tags/topics.
- AEO / SEO / GEO pass (owner's own specialty).
- Learning Tracker.

### Phase 4 — Polish & launch
- Dark mode, accessibility pass, OG images, performance budget.
- Analytics, custom domain, deploy (Netlify / Vercel / GitHub Pages).

---

## Running the site

```bash
cd site
npm install
npm run dev      # local preview at http://localhost:4321
npm run build    # production build to ./dist
```

Content lives in `site/src/content/perspectives` and `site/src/content/work`
as Markdown files — add or edit a `.md` file to publish.
