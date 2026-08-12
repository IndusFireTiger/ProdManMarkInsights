---
term: "Red Queen effect"
aka: ["running to stand still"]
roles: ["Product", "Evidence & Metrics"]
kind: "Deep"
short: "Spending heavily on continuous feature shipping purely to hold market position — all the cost of progress, none of the gain."
example: "A feature consuming a quarter of the engineering budget to serve a narrow, vocal power-user segment, while adding complexity that suppresses adoption among everyone else."
related: ["pmf-decay", "feature-factory", "product-market-fit"]
appearsIn: ["/perspectives/agentic-pmm", "/perspectives/catalog-to-enterprise-data-operations", "/perspectives/the-decision-is-the-deliverable"]
portfolio: true
learning:
  audience: ["Product Manager", "Founder / GM", "Growth & Analytics"]
  level: advanced
  source: harvested
  module: "Strategy fundamentals"
  status: taught
---

## What it is

From *Through the Looking-Glass*: "it takes all the running you can do, to keep
in the same place." In product terms, competitive parity requires continuous
investment, so a growing share of the roadmap goes to matching rivals rather
than to anything that compounds.

## Where people get it wrong

**Mistaking it for competitiveness.** Every individual decision is defensible —
a competitor shipped it, a large customer asked, sales lost a deal citing it. The
pathology only appears in aggregate, which is why it survives quarterly review
after quarterly review.

**Missing the compounding complexity cost.** The trap isn't just wasted spend.
Each parity feature adds surface area to maintain, document, support and explain,
and it usually lands in service of the loudest users rather than the widest ones.
Over-optimising for power users is how a product becomes simultaneously more
capable and harder to adopt.

**Confusing it with genuine table stakes.** Sometimes matching a rival really is
required to stay in deals. The distinction is whether the feature moves you from
*excluded* to *considered* — that's table stakes and worth paying for — or from
*considered* to *considered*, which is the Red Queen.

## How to check

Tag the last two quarters of engineering spend by intent: **defend** or
**advance**. Most teams have never done this and are startled by the ratio.

Then look at who the defensive work served. If the high-maintenance features
cluster around a small, vocal cohort while broad activation is flat, you're
funding retention theatre for users who weren't going to leave.
