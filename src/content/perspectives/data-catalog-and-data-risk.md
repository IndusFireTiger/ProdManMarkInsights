---
title: "A product lens on the invisible: making data risk operable, with the data catalog as the case study"
summary: "A product strategist's job on a hard enterprise problem is to turn an invisible, perpetual scramble into a capability you can run and trust. Data risk and compliance is the worked example here — and the data catalog is the product move that makes it governable. The pattern generalises far beyond it."
date: 2025-09-22
readingTime: "9 min read"
skill: "Product Strategy & Vision"
topics: ["Product Strategy", "Data Governance", "Risk & Compliance", "Data Catalog"]
featured: false
draft: false
---

As a product strategist, I keep coming back to one kind of question: take a hard,
abstract enterprise problem — the kind people throw services, spreadsheets and
heroics at — and ask *what product would make this operable?* What turns a
perpetual scramble into a capability you can buy, run, and trust?

Data risk and compliance is the example I'll work through here, for two reasons.
It's about as hard as enterprise problems get — sprawling, high-stakes, and
relentlessly regulated. And the product answer is unusually clean. But treat the
specifics as a *case study*: the underlying move — making an invisible problem
visible and then operable — is the part that generalises.

So start where every good product starts, with the problem. Spend any time in
Data Risk & Compliance and you learn the uncomfortable truth early: most
organisations don't have a data *problem*, they have a data *visibility* problem.
The personal data, the financial records, the health information, the trade
secrets — it's all there. What's missing is a reliable answer to three
deceptively simple questions: *What data do we hold? Where is it? And who is
responsible for it?*

Every serious data risk traces back to a gap in those answers. You can't protect
a dataset you've forgotten exists. You can't honour a deletion request for
records you can't locate. You can't prove to a regulator that a control is
working if you can't even produce the inventory it's meant to control. Risk
hides in the unknown — and in most enterprises, the unknown is large.

The instinct is to treat each exposure as its own fire: a breach response here,
an audit remediation there, a frantic data-mapping exercise when a new
regulation lands. That's bespoke risk management, and like bespoke anything, it
doesn't scale. The **data catalog** is the system that does — the control plane
that makes data *knowable*, and therefore governable.

## What "data risk" actually means

Before reaching for the tool, it's worth being precise about what we're
reducing. Data risk isn't one thing; it's a cluster of related exposures that
share a common root:

- **Regulatory risk** — failing to meet a legal obligation (consent, retention,
  residency, the right to erasure), and the fines and orders that follow.
- **Privacy & security risk** — sensitive data exposed, over-shared, or breached
  because nobody knew it was sensitive or where it lived.
- **Operational risk** — decisions made on data that is stale, duplicated, or
  simply wrong, because there was no authoritative source.
- **Reputational risk** — the trust you lose when any of the above becomes
  public.

The common root is the same in every case: **the organisation acted on data it
did not fully understand.** Reduce the not-understanding, and you reduce every
branch of the risk at once.

## The catalog as a control plane

A data catalog is often sold as a search tool — "Google for your data." That
undersells it. In a governance context, the catalog is the **single, governed
inventory of an organisation's data and the controls around it.** Six
capabilities do the real risk-reduction work:

1. **Discovery & inventory.** Automated scanning finds data across warehouses,
   lakes, SaaS apps and shadow stores, and registers it. The first win is simply
   *knowing what exists* — which is also the first thing every regulator asks
   for.
2. **Classification & sensitivity tagging.** The catalog labels what is personal,
   financial, health-related, or otherwise regulated. Sensitivity stops being
   tribal knowledge and becomes a queryable attribute attached to the data
   itself.
3. **Lineage.** It traces where data came from, how it was transformed, and where
   it flows. When something goes wrong upstream, lineage tells you everything
   downstream that's now suspect — and when a regulator asks "where did this
   figure come from?", you have an answer.
4. **Ownership & stewardship.** Every dataset gets a named owner and steward.
   Accountability becomes assignable rather than diffuse — and "no one knew it
   was their job" stops being a valid breach post-mortem.
5. **Policy & access governance.** Retention schedules, residency rules and
   access policies are bound *to the classified data*, so the rule travels with
   the data instead of living in a forgotten wiki.
6. **Audit & evidence.** Because all of the above is recorded, the catalog
   produces the evidence trail — who accessed what, under which policy, and when
   — that turns an audit from an archaeology project into a query.

Put together, these turn an abstract obligation ("protect personal data") into
concrete, enforceable mechanics ("this column is tagged PII, owned by this
steward, retained for this period, accessible to this role, with this access
log").

## Why this maps so cleanly onto regulation

Here's the pattern I keep returning to: nearly every modern data regulation,
whatever the region, demands some combination of the same primitives — *know
what personal data you hold, know where it is, limit who can touch it, keep it
only as long as you need it, be able to find and delete it on request, and prove
all of the above.* Those are precisely the primitives a catalog provides. The
catalog isn't compliant with one law; it's the substrate that makes compliance
with *many* laws tractable.

And the regulatory surface is only widening. A multinational doesn't get to pick
one regime — it inherits all of them, region by region.

### A few regulations, by global region

| Region | Key regulations | What they demand (and the catalog supports) |
| --- | --- | --- |
| **European Union / UK** | GDPR; UK GDPR + Data Protection Act 2018; EU AI Act; DORA (financial sector) | Lawful basis & consent, data-subject access and erasure, records of processing, data residency, breach notification |
| **North America** | US — sectoral: HIPAA (health), GLBA (financial), SOX; state laws led by CCPA/CPRA (California). Canada — PIPEDA; Quebec Law 25 | Sensitivity classification, access control, consumer access/deletion rights, breach reporting, retention discipline |
| **Asia–Pacific** | Australia — Privacy Act 1988 (Australian Privacy Principles), Notifiable Data Breaches, Consumer Data Right. Singapore — PDPA. India — DPDP Act 2023. China — PIPL, Data Security Law, Cybersecurity Law. Japan — APPI | Inventory of personal data, breach notification, cross-border transfer controls, strict data-localisation (esp. China) |
| **Latin America** | Brazil — LGPD; growing adoption across the region | Lawful basis, data-subject rights, processing records — closely modelled on GDPR |
| **Middle East & Africa** | UAE — Federal PDPL, DIFC Data Protection Law. South Africa — POPIA | Consent, processing limitation, residency, accountability of a named responsible party |

Read down that table and the recurring verbs jump out: *inventory, classify,
locate, restrict, retain, delete, prove.* You do not satisfy thirty different
laws with thirty different projects. You build the inventory-and-control
capability once — in the catalog — and point it at each obligation.

## From requirement to control: the harmonisation move

This is the part of the work I find most interesting, because it mirrors a
pattern I've used elsewhere: taking a sprawl of subjective, region-specific
demands and **harmonising them into a common set of estimable, enforceable
controls.** Rather than implementing "GDPR Article 17" and "CCPA deletion" and
"LGPD erasure" as separate features, you implement one capability — *find and
delete all data relating to an individual, with proof* — and map each regulation
to it.

The catalog is what makes that mapping possible, because it's the layer where a
legal clause meets an actual column in an actual table. A requirement that used
to be a debate ("are we GDPR-compliant?") becomes a query against the catalog
("show me every dataset tagged PII without a retention policy and a named
owner"). That's the same move as turning fuzzy enterprise needs into priced,
buildable features — just pointed at risk instead of roadmap.

## What it buys you

- **A standing inventory** — you always know what data you hold and where, so no
  regulation ever starts you from zero.
- **Risk you can see** — unclassified sensitive data, ownerless datasets and
  policy gaps become visible *before* they become incidents.
- **Faster, cheaper audits** — evidence is a query, not a quarter.
- **One capability, many regimes** — new regulations map onto controls you
  already run instead of triggering fresh fire drills.

> A data catalog doesn't make an organisation compliant on its own — people and
> process still do that. But it changes the game from periodically *discovering*
> your data under deadline to continuously *knowing* it. Compliance stops being
> a scramble and becomes a capability.

## The product move, generalised

Step back from the worked example and the product pattern is what remains. Faced
with a hard, invisible enterprise problem, the strategist's move is the same one
every time:

1. **Name the invisibility** — find the thing nobody can see (here, *what data we
   hold and where*) and make it the product's job to surface it.
2. **Turn it into a system of record** — an authoritative inventory others can
   build on, instead of tribal knowledge that rots.
3. **Bind action to the record** — classification, policy, ownership and proof
   attached to the data, so the product *does*, not just *describes*.
4. **Harmonise the chaos** — collapse many overlapping demands into one
   capability you build once and point everywhere.

Data risk happens to be the case where this pays off most visibly, but I've
applied the same lens to requirement harmonisation, to go-to-market, and to
applied AI. Standardise and make visible the predictable, so the scarce human
judgement goes where it actually matters — interpreting the law, weighing the
trade-offs, deciding what risk is worth taking. You can't govern what you can't
see; you can't *productise* it either. The catalog is simply how this particular
problem starts seeing.
