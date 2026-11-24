---
title: "Standing up product management in an AI-first advice company"
summary: "Brought in as the first product manager for a portfolio of AI products serving financial advice and insurance. I lead a team of six developers and three QA engineers through an AI-Driven Development Lifecycle built on bolts: short build cycles, each led by a developer working as a forward-deployed engineer and shown to a named customer when it lands."
focus: "AI Product • Building the product function • Regulated advice"
role: "First Product Manager — current role"
kind: "Enterprise"
order: 1
draft: false
---

> **Focus:** AI product management · Product operations · Regulated domains.
> What it takes to install a product function inside a team that already ships
> fast with AI — so that speed turns into the right outcomes, and every change
> can stand up to a compliance reviewer.

## Context

The company builds AI products for professionals in financial advice and
insurance: a planning product (the one I own), alongside R&D and insurance
products in the same portfolio. Before I joined there was no product
management function. The team could build quickly with AI tools; what a product
function adds is the system around that speed: one shared view of where the
products are going, a measure of whether they are getting there, and a
reliable way for customers to shape them.

Advice is a regulated domain. An adviser's Statement or Record of Advice is a
compliance document as much as a client deliverable, so "move fast" has a hard
boundary. Anything the product generates has to be traceable, reviewable and
defensible.

## The brief

Establish product management as a function, not just a role, and do it while
the products keep shipping. I lead a delivery team of **six developers and
three QA engineers**, and set direction with the C-suite.

## What I put in place

1. **Strategy and roadmap.** I set the product strategy and roadmap across the
   portfolio, so priorities were argued once, in the open, rather than
   re-decided ticket by ticket.
2. **A platform overhaul grounded in research.** I led an overhaul of the
   platform around a new UI, designed from market research into how advisers
   actually work rather than from the existing screen inventory.
3. **Outcome metrics, not output metrics.** I introduced product OKRs. The
   headline metric is the **time it takes to complete a Statement or Record of
   Advice**, the unit of work our customers care about most. Benchmark testing
   gives each release a before-and-after against that measure.
4. **An AI-Driven Development Lifecycle (AI-DLC).** I established AI-DLC
   team practices: work runs in **bolts**, every ticket traces back to the PRD
   it came from, and feature-flagged, progressive rollouts let changes reach
   customers in stages and be pulled back. How it runs is described below.
5. **A customer validation loop.** I run recurring validation sessions with
   customers, feeding a structured intake where every request carries its
   rationale. The backlog records *why* something is wanted, not just *what*,
   which makes prioritisation an argument about evidence.
6. **Compliance as a product capability.** I built Claude-based compliance
   review tools, so reviewing AI-generated advice is part of the product rather
   than a manual step bolted on afterwards.
7. **AI acceptance testing with a delivery partner.** With an external
   development partner, I run AI workflow and acceptance testing on
   de-identified client files: real-world complexity, with no real client data
   exposed.

## How the AI-DLC runs: bolts, sprint goals and customer showcases

The aim was a fast, AI-assisted loop from requirement to design to build to
customer feedback, so the product is always built with a customer in view and
the team gets the highest throughput from AI at every stage of the lifecycle.

- **Bolts are the unit of delivery.** A bolt is a short, focused build cycle
  with one clear outcome. AI supports every stage inside it: shaping the
  requirement, designing, building and testing.
- **Sprint goals are set with the C-suite, and they are about bolts.** Together
  we decide how many bolts the sprint holds, what each one must deliver, and,
  as the headline of every sprint goal, **which customer each outcome will be
  shown to**. A sprint succeeds when real customers have seen real outcomes.
- **Developers lead bolts as forward-deployed engineers.** Each bolt has a
  developer who owns it end to end and works directly with the customer: they
  hear the problem first-hand, build against it, and present what they built.
  The people closest to the code are the people closest to the customer.
- **Every bolt ends in a showcase.** Outcomes are shown to the customer on a
  regular cadence, and what we hear goes straight into the structured intake
  and shapes the next bolts.

The result is a regular customer cadence that the whole team owns: product
direction set with leadership, built in short AI-assisted cycles, and checked
against a customer's reaction every time.

## What I'd carry into any team

- **When building gets cheap, the scarce work is deciding.** AI makes the
  engineering faster. The product function's value is making sure that speed
  is pointed at the right outcome, and showing that it was.
- **Pick the metric the customer feels.** Time to complete a piece of advice is
  something an adviser notices on their first day with the product. It keeps
  every roadmap conversation honest.
- **Traceability is a feature in regulated work.** PRD-to-ticket tracing,
  feature flags and de-identified test data aren't process overhead. They are
  what lets a regulated product move quickly without losing trust.
- **Put the customer in the sprint goal.** Naming which customer will see
  each outcome changes what a team builds and how it builds it. It turns
  "done" into "shown, and it worked for them".
- **Install the function, not a dependency on me.** The aim was a set of habits
  the team keeps running: strategy, OKRs, intake, a delivery lifecycle and a
  testing practice. Not a person everything has to route through.

> Related reading: [AI product management: the legacy operating model was built
> around scarcity](/perspectives/ai-product-operating-model) and
> [The decision is the deliverable](/perspectives/the-decision-is-the-deliverable).
