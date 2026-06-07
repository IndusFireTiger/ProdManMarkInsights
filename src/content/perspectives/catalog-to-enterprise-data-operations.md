---
title: "Product-market fit decays: why a product must keep re-earning it — the data catalog's evolution as a case study"
summary: "Product-market fit is not a trophy you win once; it erodes as the market moves and yesterday's value becomes table stakes. A product stays relevant only by constantly evolving against fresh needs and re-validating fit with the customers it serves. The data catalog is the case study — and its leading vendors are taking strikingly different evolutionary routes into different niches."
date: 2025-09-29
readingTime: "9 min read"
skill: "Product Strategy & Vision"
topics: ["Product Strategy", "Product-Market Fit", "Data Catalog", "Data Operations"]
featured: false
draft: false
---

In my last piece I used the data catalog as a worked example of a product move:
take an invisible enterprise problem and make it operable. This piece is about
what happens *next* — because getting a product to fit the market once is not the
same as keeping it there.

Here is the principle I want to argue, and the catalog is again my case study for
it: **product-market fit is not a trophy you win and shelve. It decays.** Markets
move, customer needs shift, and the value a product delivered last year quietly
becomes table stakes this year. A product stays relevant — and climbs to a
*higher* degree of value — only by constantly evolving against fresh market needs
and re-validating fit with the customers it actually serves. Stand still and fit
erodes underneath you, even if nothing about the product got worse. The bar
moved; you didn't.

The data catalog is a near-perfect illustration, because we can watch the decay
and the response happening in real time. I've seen it from the buyer's side of
the table. Organisations spend heavily on a catalog, populate it, demo it proudly
— and then watch adoption flatline. Not because the catalog is wrong, but because
it's *passive*. It documents the world; it doesn't change it. And a tool that
documents without acting is, sooner or later, shelfware. The fit it once had
quietly expired.

So this is a study in how a product re-earns its fit. My own bet is that the
catalog has to evolve from a passive inventory into an **enterprise data
operations system** — a layer that doesn't just describe data, but operates on
it. But, as we'll see, that's only one of several routes the market's vendors are
taking — and which route is *right* depends entirely on the customer you're
validating with.

## The passive-catalog trap

The first generation of catalogs solved a real problem: nobody knew what data
existed. So we built searchable inventories, added business glossaries, captured
lineage, assigned owners. Good. Necessary. But notice the verb in all of it —
*describe*. The catalog sat to one side of the data pipeline, a reference book
you were expected to keep current by hand and consult by discipline.

That design has three failure modes, and I've seen all three:

- **Metadata rots.** A description that isn't maintained by the system itself
  drifts out of date, and a catalog you can't trust is one you stop using.
- **It lives outside the workflow.** If governance, quality and discovery happen
  in a separate tab from where people actually build and query data, they get
  skipped under deadline.
- **It documents problems it can't fix.** A passive catalog can *tell* you a
  dataset is stale, ownerless or non-compliant. It can't *do* anything about it.

The result is the adoption flatline. Customers don't churn because the catalog
lied — they churn because it never became load-bearing. And nobody renews
shelfware.

## What changed underneath the category

This isn't only a product-design observation; the ground genuinely shifted. Four
forces, all well-documented across the data industry, pushed the catalog from
"nice reference" to "must operate":

1. **Active metadata.** When Gartner retired its long-running metadata-management
   coverage in favour of **active metadata management**, it named the shift
   directly: metadata should not sit in a passive repository — it should flow
   back into the tools that produce and consume data, triggering action. A
   catalog that merely *stores* metadata is, by that definition, already behind.
2. **Data mesh and data products.** Once Zhamak Dehghani's data-mesh ideas pushed
   ownership out to domain teams, governance could no longer be a central
   document. It had to become *federated and operational* — policies enforced at
   the point of use, data shipped as governed, observable **products** with SLAs,
   not just rows in a table.
3. **Data observability.** An entire category — Monte Carlo, Bigeye and others —
   grew up around a gap catalogs left open: freshness, volume, schema and quality
   monitoring. Customers learned to expect their data tooling to *watch* data in
   real time and alert on it. A catalog with no live quality signal now looks
   half-finished.
4. **The AI inflection.** RAG pipelines, feature stores and agents are only as
   trustworthy as the data feeding them. "AI-ready data" has become a board-level
   phrase, and it means governed, observable, lineage-traceable, access-controlled
   data — delivered operationally, not certified once in a document. The AI wave
   turned data operations from back-office hygiene into a competitive input.

Read those four together and the conclusion is hard to avoid: the market stopped
rewarding *description* and started rewarding *operation*. That shift — the bar
moving while the product stood still — is exactly what fit decaying looks like
from the inside. The pure catalog didn't get worse; the market simply outgrew it.

## Same pressure, different bets: how the vendors are evolving

Here is the part that makes this such a good product case study. Faced with the
same decaying fit, the leading vendors did *not* all run in one direction. They
each re-validated against the customers they cared most about — and so they
evolved toward different value propositions, into different niches. Same
pressure, very different bets:

- **Governance- and compliance-first** — *Collibra*, and in its own ecosystem
  *Microsoft Purview*, leaned into policy, stewardship and regulatory control for
  large, heavily-regulated enterprises. Their bet: the buyer is the Chief Data
  Officer with an audit problem, so depth of governance is the value.
- **Observability-first, arriving from the opposite side** — *Monte Carlo* and
  *Bigeye* didn't start as catalogs at all. They started by *watching* data for
  freshness and quality, and are now expanding back toward cataloguing and
  lineage. Their bet: trust and reliability is the wedge; the inventory comes
  after.
- **Active-metadata control plane for the modern data stack** — *Atlan* positioned
  itself as an API-first, integration-heavy "control plane" for agile data teams,
  pushing metadata back into the tools. Its bet: the buyer is the fast-moving data
  team that wants the catalog *embedded* in its workflow, not bolted beside it.
- **Data intelligence and literacy** — *Alation*, one of the originals, leaned into
  search, behavioural metadata and building a "culture of data" inside the
  organisation. Its bet: adoption and human understanding, not just enforcement.
- **The broad enterprise suite** — *Informatica* folded cataloguing into a sweeping
  data-management platform (integration, quality, MDM) with an AI engine across
  it. Its bet: sell the whole stack to the enterprise, with the catalog as one
  module.
- **Absorbed into the platform** — *Databricks* (Unity Catalog) and *Snowflake*
  (Horizon / the open Polaris catalog) built governance *natively* into the
  lakehouse and warehouse. Their bet is the most aggressive of all: the catalog
  shouldn't be a separate product at all — it should be a feature of where the
  data already lives.

That last bet is the threat that should keep every standalone catalog vendor
awake. Note that these routes aren't equally safe, and they aren't all the same
product — governance depth, reliability, embedded agility, literacy, suite
breadth and platform-nativity are genuinely *different* value propositions for
genuinely *different* customers. There is no single correct evolution. There is
only the route your customers will actually validate and pay more for.

My own bet — the enterprise data operations system — is the route I'd back for a
standalone vendor that wants to stay central rather than be absorbed. But the
strategic point stands regardless of which route you choose: when fit is decaying,
*doing nothing is the one option guaranteed to fail.* The question is never
*whether* to evolve; it's *in which direction, and for whom*.

## The route I'd back: from catalog to enterprise data operations system

Of those routes, here is the one I'd put my chips on for a standalone vendor —
the operations-system play — because it's the one that keeps the product
*load-bearing* instead of optional. So what does it actually do? The catalog's
inventory becomes the *foundation* — but five operational capabilities sit on
top, turning the map into a control system:

| From (passive catalog) | To (enterprise data operations) |
| --- | --- |
| Stores metadata | **Active metadata loop** — sense, decide, push action back into source tools |
| Documents policies | **Runtime enforcement** — access, residency and retention applied at the point of use |
| Records lineage | **Live observability** — freshness, quality and anomaly signals on that lineage |
| Lists datasets | **Data-product lifecycle** — governed products with owners, SLAs and consumers |
| Is consulted manually | **Embedded in the workflow** — governance happens where people build and query |

The through-line is the one I keep returning to in this work: turn a periodic,
manual scramble into a standing, automated capability. The risk-reduction control
plane from my last essay only delivers if it's *operational* — if the policy
isn't just written but enforced, the quality isn't just hoped for but watched,
and the action isn't a ticket someone files but a loop the system closes.

## Why this matters for the customer — and the strategy

Stay passive, and the catalog's fate is predictable: it gets squeezed into a
feature inside a broader platform, its value commoditised, its price compressed,
its renewals at risk. Evolve into an enterprise data operations system, and it
becomes the layer the rest of the data stack *runs on* — sticky, central, and
worth paying for because it's doing the work, not just describing it.

> A catalog tells you where the data is. An operations system makes the data
> trustworthy, governed and usable — continuously, and without you having to ask.
> Customers will keep paying for the second thing long after they've stopped
> opening the first.

## What the case study really teaches

Step back from the catalog and the lesson is about product, not data. Every
product that lasts is the same story: fit is rented, never owned. The catalog
earned its fit by making data findable, then watched that fit decay as the market
came to expect *operation*, not description. The vendors that will still matter in
five years are the ones treating that decay as the normal condition of a product
— and re-validating, release after release, against what their specific customers
now need.

Three things travel from this case study to any product:

1. **Treat fit as perishable.** Re-validate it continuously with real customers;
   don't assume last year's win still holds.
2. **Evolve toward higher-degree value.** The goal isn't to keep up — it's to do
   more of the customer's job than you did before, so you're worth *more*, not
   merely still relevant.
3. **Choose your direction by your customer.** As the divergent vendor bets show,
   there's no universally correct evolution — only the one your segment will
   validate and pay a premium for. Standing still is the only certain loss.

The strategic move, then, is not to add features to a catalog. It's to
**re-found the product** on a different verb the market is now willing to pay for
— for me, from *catalogue* to *operate*. The inventory was always the means.
Earning fit, again and again, by operating the enterprise's data where the work
actually happens — that was always the point.
