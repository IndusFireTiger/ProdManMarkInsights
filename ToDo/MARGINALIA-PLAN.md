# Marginalia — a terms module for ProdManInsights

*Notes in the margin of the essays — terms, unpacked.*

Status: **built** — Phases 1–3 shipped, Phase 4 partial (2026-08-09).

| Phase | State | Result |
| --- | --- | --- |
| 1 — Infrastructure + published entries | ✅ done | 36 live at `/marginalia`; `TermsInThisPiece` self-populated 15 existing pages |
| 2 — Fill the map from the corpus | ✅ done | 104 harvested terms + 16 tagged essays/case studies |
| 3 — Extend beyond the corpus | ✅ done | 86 curriculum terms; study queue 0 → 97 |
| 4 — Make it usable | ✅ done | `npm run learning:map` + dev-only viewer; JSON-LD on 54 pages, sitemap, robots.txt, canonical-domain fix |

Storage landed as **one JSON file** (`src/content/learning-map.json`, 206 entries)
rather than YAML — no parser dependency, and mastery status is bulk-editable in
one pass. Field semantics live in `src/content.config.ts` above the schema, since
JSON carries no comments.

Read the map with `npm run learning:map` (`all` · `queue` · `next N` · `gaps`) or
visually at `/learning-map` when running `npm run dev` — that route is dev-only
and emits nothing in a production build.

---

## Two purposes, one corpus

**1. Marginalia — a published section** alongside Perspectives, Work and About.
~26 entries: disambiguation, coined vocabulary, and opinionated deep entries with
worked examples. This is the part site visitors see.

**2. A personal learning map** — a tagged, invisible bank covering every
discipline this career touches, whether or not the term has appeared in an essay
yet. This is the larger part, and it is **not** built for AIGovAcademy or the DRC
academy. Those are possible downstream consumers, not the reason it exists.

The organising axis is therefore **audience** — who needs to know this — not
which product might one day sell it. Academies stay an optional `destination`
field, nullable and mostly empty.

This also completes the **Learning Tracker** already listed in `PLAN.md` Phase 3:
each term carries a mastery status, so the bank doubles as a map of what's known,
what's being learned, and what's still unopened.

### Why the split works

The terms not worth publishing on the portfolio are exactly the foundation tier
of any curriculum. A definition of CAC is worthless to a reader who is a Head of
Product Marketing, and essential in week one of learning the discipline. Same
content, opposite value, decided purely by audience. Write once, tag by audience,
let the build decide what surfaces.

| | Marginalia (published) | Learning map (invisible) |
| --- | --- | --- |
| **Which terms** | Disambiguation, coined, opinionated | Everything — including terms not yet used in any essay |
| **Reader** | Peers evaluating a body of work | You |
| **Count** | ~26 | ~150 |
| **Rendered?** | Yes | Never |

---

## Why Marginalia earns a published section (the ~26)

1. **Disambiguation.** Real collisions in the published corpus:

   | Acronym | In one piece | In another |
   | --- | --- | --- |
   | SRS | Spaced Repetition System (LittleGurukul) | Software Requirements Spec (data governance) |
   | SMS | Student Management System (25 uses) | *not* text messaging |
   | PR | Press Release (PR-FAQ) | *not* public relations |
   | HR | Heart rate (FitPulse) | Human resources |
   | HELP | Higher Education Loan Program | *not* assistance |

2. **Coined vocabulary** — see the expanded list below. Ten-plus coined terms is
   a genuine positioning asset; a named vocabulary is what a body of thought
   looks like from outside.

3. **~15 opinionated deep entries** with a failure mode and a diagnostic — the
   only entries that can earn an answer-engine citation.

4. **A second navigation layer** into the essays.

---

## Naming

**Marginalia.** Nav label stays characterful; `<title>` recovers the search term:
*"Marginalia — a working glossary of product, GTM and data-governance terms."*

---

## Metadata design

### Two mechanisms

**A. Invisible files — never built.** `portfolio: false` excludes the entry from
every collection query: no page, no HTML, no index entry.

**B. Published entries with unrendered metadata.** A published term still carries
its `learning` block; it's simply never passed to a component.

### Schema

```ts
const marginalia = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/marginalia' }),
  schema: z.object({
    // ---- rendered ----
    term:      z.string(),
    aka:       z.array(z.string()).default([]),
    short:     z.string(),
    example:   z.string().optional(),
    related:   z.array(z.string()).default([]),
    appearsIn: z.array(z.string()).default([]),   // '/perspectives/…' | '/work/…'

    // ---- build control ----
    portfolio: z.boolean().default(false),        // opt-in publishing

    // ---- NEVER rendered: the learning map ----
    learning: z.object({
      audience: z.array(z.enum(AUDIENCES)).min(1),   // who needs it — the main axis
      level:    z.enum(['foundation','practitioner','advanced']),
      source:   z.enum(['harvested','curriculum']).default('harvested'),
      module:   z.string().optional(),
      status:   z.enum(['backlog','learning','confident','taught']).default('backlog'),
      destination: z.enum(DESTINATIONS).optional(), // optional future academy — usually empty
    }).optional(),
  }),
});
```

**`source`** is the field that makes this a learning map rather than an index:
`harvested` = already used in an essay; `curriculum` = doesn't appear anywhere
yet, but belongs on the map. Most AI-governance and sales terms below are
`curriculum`.

**`status`** tracks *your* mastery — `backlog → learning → confident → taught`.
"Taught" is the honest bar: you know it when you can teach it.

### Visibility: what this does and does not mean

Verified 2026-08-07: the GitHub API returns **200 unauthenticated** — the repo is
**public**.

| Claim | True? |
| --- | --- |
| Invisible to a site visitor | **Yes** — never rendered |
| Absent from the built site | **Yes** for `portfolio: false` |
| Not indexable | **Yes** — no page exists |
| **Private** | **No** — frontmatter is readable on GitHub |

Curriculum tagging there is fine. Keep commercial strategy — academy pricing,
launch sequencing, revenue modelling — in the private planning docs.

---

## Audience taxonomy

Fifteen audiences across five clusters. `audience` is an array — overlap is
expected and useful.

| Cluster | Audiences |
| --- | --- |
| **Product & strategy** | Product Manager · AI Product Manager · Founder / GM |
| **Commercial** | Product Marketer · Marketer · Sales & Presales · Customer Success |
| **Data & governance** | Data Practitioner · Data & AI Governance (software products) |
| **Craft & delivery** | Solution Architect · Agile & Change Practitioner · UX / Product Designer |
| **Evidence & learning** | Growth & Analytics · Learning Designer · Sector Specialist |

---

## Term inventory by audience

★ = published in Marginalia · ✎ = `curriculum` (not yet in any essay)
**F / P / A** = foundation / practitioner / advanced

### Product Manager
**F:** MVP · PRD · SDLC · PDLC · definition of done · roadmap · backlog
**P:** continuous discovery · product trio ★ · spike vs spec · Opportunity-Solution Alignment · stage gate · system of record · RICE ✎ · jobs-to-be-done ✎
**A:** product-market fit ★ · PMF decay ★ · feature factory ★ · Red Queen effect ★ · product quad ★ · PMF expansion vectors ★

### AI Product Manager
**F:** prompt · token · context window · RAG ✎ · MCP ✎ · fine-tuning ✎
**P:** evals ✎ · guardrails ✎ · model selection ✎ · latency/cost trade-off ✎ · agentic workflow ★ · multi-agent systems ★ · foundation models
**A:** non-determinism ★ · human-in-the-loop ★ · trust calibration ★ · the plausible-versus-correct gap ★ · build → evaluate → decide ★ · model commoditisation ★

### Founder / GM
**F:** P&L ✎ · unit economics ✎ · burn & runway ✎ · TAM / SAM / SOM ✎
**P:** business model ✎ · pricing power ✎ · moat ★ · portfolio strategy ✎
**A:** sunsetting ✎ · build-vs-buy ✎ · category creation ✎

### Product Marketer
**F:** value proposition · persona · ICP · battlecard · sales enablement · product lifecycle stages · GTM
**P:** PR-FAQ / Working Backwards ★ · packaging & gating · price anchoring · win/loss analysis · market category frame · launch factory ★ · PMM-to-PM ratio
**A:** positioning ★ · competitive alternative ★ · willingness to pay ★ · upstream vs downstream product marketing ★ · wedge strategy ★

### Marketer *(demand gen · brand · content)*
**F:** demand generation ✎ · brand positioning ✎ · content marketing ✎ · funnel: TOFU / MOFU / BOFU ✎ · MQL ✎ · SEO ✎
**P:** **AEO** ✎ · **GEO** ✎ · lifecycle marketing ✎ · nurture sequence ✎ · attribution ✎ · share of voice ✎
**A:** brand-vs-performance tension ✎ · thin content & scaled-content penalty ✎ · citation-worthiness ✎

### Sales & Presales
**F:** pipeline ✎ · quota ✎ · discovery call ✎ · demo ✎ · RFP ✎ · procurement ✎
**P:** MEDDIC / MEDDPICC ✎ · champion ✎ · economic buyer ✎ · objection handling ✎ · pipeline velocity
**A:** enterprise sales cycle ✎ · land and expand ✎ · **the institutional "no"** ★

### Customer Success
**F:** onboarding ✎ · QBR ✎ · health score ✎ · renewal ✎
**P:** expansion motion ✎ · churn signals ✎ · escalation path ✎ · TTFV ★
**A:** NRR ★ · adoption decay ★

### Data Practitioner
**F:** PII · lineage · stewardship & ownership · metadata harvesting
**P:** classification & sensitivity tagging · data observability · audit & evidence · policy & access governance
**A:** data catalog ★ · active metadata ★ · data mesh · data products · discoverability debt ★

### Data & AI Governance *(for software products)*
**F:** GDPR · CCPA · LGPD · consent ✎ · purpose limitation ✎ · data provenance ✎
**P:** AI inventory ✎ · model card ✎ · model registry ✎ · drift monitoring ✎ · AI risk classification ✎ · EU AI Act tiers ✎ · NIST AI RMF ✎ · ISO 42001 ✎ · AIGP ✎
**A:** governance-by-design ✎ · algorithmic accountability ✎ · explainability vs interpretability ✎ · runtime enforcement ★ · regulatory / privacy / reputational risk ★

### Solution Architect
**F:** API · SSO & federated identity · monolith vs composable
**P:** C4 model · iPaaS / integration layer · B2G APIs · SRS · quality & security debt
**A:** DORA metrics · composability trade-offs ★ · customisation-as-lock-in ★

### Agile & Change Practitioner
**F:** waterfall · scrum · sprint · retrospective · velocity ✎ · XP
**P:** prioritisation under constraint ★ · problem framing ★ · early adopters ★ · definition of done
**A:** **change-as-product** ★ · taste & quality judgement ★ · review-as-bottleneck ★

### UX / Product Designer
**F:** discoverability ★ · affordance ✎ · information architecture ✎ · progressive disclosure ✎
**P:** intent capture ★ · legibility ★ · spatial memory & predictability ★ · flow design ★
**A:** **discoverability debt** ★ · **collapsed complexity** ★ · **intent over mechanics** ★ · over-trust ★

### Growth & Analytics
**F:** CAC · CLV · MRR (net-new & expansion) · churn · activation rate · DAU/MAU · A/B testing
**P:** cohort analysis · PQL · leading vs lagging indicators · vanity metrics · statistical significance ✎
**A:** **selection bias** ★ · **survivorship bias** ★ · Simpson's paradox ✎ · regression to the mean ✎

### Learning Designer
**F:** scaffolding ★ · spaced repetition ★ · gamification-in-service-of-learning ★ · progression system ★ · knowledge unlocks ★
**P:** flow design ★ · difficulty curve ★ · adaptive pacing ★ · formative vs summative assessment ✎ · learner agency ✎
**A:** **protect the struggle** ★ · desirable difficulty ✎ · Socratic mode / thinking-partner-not-answer-machine ★ · zone of proximal development ✎ · pedagogy-as-moat ★

### Sector Specialist *(EdTech · Australian higher ed)*
**F:** LMS · student management system ★ · VET · HELP ★ · USI
**P:** TEQSA · TCSI · HEIMS · CRICOS · ESOS regime
**A:** funding model as segmentation line ★ · federation-of-buyers ★

---

## Coined vocabulary

Larger than first catalogued — worth its own filter on the published index, since
this is the vocabulary that marks a body of work as yours.

| Term | Origin essay |
| --- | --- |
| GTM Factory | The GTM Factory |
| Asset tiering | The GTM Factory |
| Structured intelligent description | The GTM Factory |
| Launch factory | Agentic PMM |
| Synthetic product quad | Agentic PMM |
| Agentic PMM | Agentic PMM |
| Discoverability debt | Evolving UX after AI |
| Collapsed complexity | Evolving UX after AI |
| Intent over mechanics | Evolving UX after AI |
| The plausible-versus-correct gap | Evolving UX after AI |
| Protect the struggle | Personalising education · AI Companion |
| The institutional "no" | The model is not the moat |
| Change-as-product | Say NO! to Waterfall |
| Seeker → Sage | LittleGurukul |

---

## Tooling

```bash
npm run learning:map      # what do I know, what's next
npm run learning:export   # per-audience JSON, if an academy ever wants it
```

`scripts/learning-map.mjs` reads the collection and reports:

- Coverage by audience × level — where the map is thin
- Status counts — `backlog / learning / confident / taught`
- `curriculum` terms with status `backlog`, sorted by audience — **the study queue**
- Harvested terms not yet linked from any essay — writing prompts

`exports/` is gitignored; regenerate on demand.

---

## Phases

### Phase 1 — Infrastructure + publish the 26
Collection, `AUDIENCES` / `DESTINATIONS` exports, index with filter, term route,
nav item, `TermsInThisPiece` footer component driven by querying `appearsIn`.
Write the 26: 5 disambiguation, ~14 coined, ~15 deep (several overlap).
Start with **selection bias** and **survivorship bias** — referenced in live
pages and currently unglossed.

### Phase 2 — Fill the map from the corpus
The ~85 harvested terms as `portfolio: false` files. Terse: `short` + `example`.
Backfill `learning` blocks onto existing perspectives and work.

### Phase 3 — Extend the map beyond the corpus
The ~65 `curriculum` terms — AI governance, sales, marketing, founder,
learning-science. These are the study queue, not a backlog of writing.

### Phase 4 — Make it usable
`learning:map` script; `DefinedTerm` JSON-LD on published entries; sitemap + RSS.

---

## Open questions

1. **Main nav or nested under Perspectives?** Recommend main nav.
2. **Default index sort** — grouped by audience, filter defaulting to "All".
3. **Should the published index expose an audience filter,** or only roles a
   visitor cares about? Fifteen chips is too many for a reader; suggest the
   published index filters on ~5 broad roles and the full taxonomy stays internal.
4. **Does `status` ever surface publicly** as a learning-in-progress signal?
   Interesting for the thought-leadership positioning, risky if it reads as gaps.
   Default: keep private.

---

## Running notes

Content lives in `site/src/content/marginalia/*.md`, one file per term. Published
and invisible entries share a folder, separated by the `portfolio` flag, so a
term is promoted by flipping one boolean.
