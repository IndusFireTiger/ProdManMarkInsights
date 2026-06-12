---
title: "Harmonising subjective Data Governance requirements"
summary: "Many enterprises, each with their own definition of 'governed data'. The challenge: turn subjective, conflicting needs into one coherent, estimable, priced product."
focus: "Enterprise Product • Discovery • C4 estimation"
role: "Product Owner — Harvesting & Orchestration"
kind: "Enterprise"
order: 1
draft: false
---

> **New to Data Risk & Compliance?** I built
> **[DRCDrivers](https://sindhu-prasanna-drc.netlify.app/)** — an interactive, end-to-end
> explainer that drives you through the DRC concepts this product is built around.
> For context: Data Governance is
> inherently subjective — every organisation defines "governed", "sensitive" and
> "compliant" differently. The job was to serve many such customers from a
> single product without fragmenting it into bespoke forks.

## The problem

Each enterprise arrived with its own governance processes, vocabulary and
non-negotiables. Taken literally, the requirements conflicted; taken
individually, they implied a custom build per customer. Neither scales.

The real task wasn't gathering requirements — it was **harmonising** them: finding
the shared structure beneath divergent language, and expressing it as product
capability that each customer could configure to their own practice.

## Approach

1. **Gather across customers, not one at a time.** I collected Data Governance
   requirements from multiple enterprises in parallel — metadata harvesting
   needs (PowerBI, dbt, Databricks, IICS, SAP and more), micro- and event-based
   scanning, dynamic SQL processing — so patterns surfaced instead of one-off
   asks.
2. **Harmonise into features.** I mapped the subjective needs onto a coherent
   feature set: where two customers wanted "the same thing differently," that
   became a configurable capability, not two features.
3. **Estimate with the C4 model.** I used C4-model analysis (context →
   containers → components → code) to decompose complex requirements, which made
   effort estimation, work breakdown and pricing defensible for genuinely
   ambiguous scopes.
4. **Define the lifecycle.** User stories and acceptance criteria flowed from the
   harmonised model; delivery ran in Agile sprints with the development team,
   from conception through beta to post-launch performance analysis.

## What the C4 model unlocked

| C4 level | Used to… |
| --- | --- |
| Context | Agree the system boundary and who/what it serves |
| Containers | Separate harvesting, scanning and SQL-processing concerns |
| Components | Decompose each subjective requirement into estimable units |
| Code | Ground effort estimates in real implementation reality |

That decomposition is what turned "this is too vague to price" into a work
breakdown and a number we could stand behind.

## Outcome & learnings

- Subjective, conflicting requirements became **one configurable product**, not a
  set of forks.
- Complex scopes became **estimable and priceable** through C4 decomposition.
- The pattern generalises: *find the shared structure beneath divergent language,
  then let configuration absorb the difference.*

> The strategic move in enterprise product isn't saying yes to everyone — it's
> discovering the one model that lets everyone configure their own yes.
