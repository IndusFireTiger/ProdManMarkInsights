---
term: "Data catalog"
aka: ["metadata catalog", "data discovery tool"]
roles: ["Data & Governance", "Product"]
kind: "Deep"
short: "An inventory of an organisation's data assets and their context — what exists, where it came from, who owns it, and whether you're allowed to use it."
example: "The move that makes data risk operable: you cannot govern, classify or defend what nobody can enumerate. The catalog turns an invisible estate into something addressable."
related: ["active-metadata", "discoverability-debt", "product-market-fit"]
appearsIn: ["/perspectives/data-catalog-and-data-risk", "/perspectives/catalog-to-enterprise-data-operations", "/work/data-governance-harmonisation"]
portfolio: true
learning:
  audience: ["Data Practitioner", "Data & AI Governance", "Product Manager"]
  level: advanced
  source: harvested
  module: "Data governance foundations"
  status: taught
---

## What it is

The system of record for metadata: technical (schemas, lineage), business
(definitions, ownership) and governance (classification, sensitivity, policy).
Its purpose is to make an estate that nobody can hold in their head into
something that can be searched, governed and audited.

## Where people get it wrong

**Building a library instead of a workflow.** A catalog that lives outside the
tools people already use gets populated once and abandoned. Metadata rots faster
than data does, and a stale catalog is worse than none — it documents problems it
can't fix while implying they're handled.

**Selling discoverability to a buyer who wants defensibility.** Search was the
original pitch and became table stakes. The budget now sits with risk and
compliance, which is a different buyer with a different question: *can you prove
it?* Same product, different [positioning](/marginalia/positioning).

**Treating population as the goal.** Coverage metrics — assets catalogued,
fields tagged — measure effort, not outcome. The outcome is whether a decision
got made differently.

## How to check

Ask what breaks if the catalog goes down for a week. If the honest answer is
"nothing urgent," it isn't in the workflow yet, and its metadata is already
decaying.

The stronger version binds action to the record — see [active
metadata](/marginalia/active-metadata) — so the catalog isn't consulted, it's
enforced.
