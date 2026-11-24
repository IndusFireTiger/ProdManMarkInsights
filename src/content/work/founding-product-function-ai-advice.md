---
title: "Standing up product management in an AI-first advice company"
summary: "Brought in as the first product manager for a portfolio of AI products in financial advice and insurance. I lead six developers and three QA engineers through a bolt-based AI-Driven Development Lifecycle, where every bolt is led by forward-deployed engineers and shown to a named customer."
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

AI-DLC, the AI-Driven Development Life Cycle introduced by AWS, has AI carry
out the work while people own intent, check the design and validate the
outcome. Its signature change is the **bolt**: a short, focused build cycle
that delivers one Unit of Work, in place of the multi-week sprint as the unit
of delivery. I set the team up to work this way, so the loop from requirement
to design to build to customer feedback stays fast and always has a customer
in view, with AI used at every stage of the lifecycle.

- **About eight bolts a sprint.** A typical sprint holds around eight bolts.
  Each one is led by a single developer or a pair of developers, with one QA
  engineer working in it. Across six developers and three QA engineers, that
  keeps several bolts moving in parallel.
- **Sprint goals are set with the C-suite, and they are about bolts.** Together
  we decide how many bolts the sprint holds, what each one must deliver, and,
  as the headline of every sprint goal, **which customer each outcome will be
  shown to**. A sprint succeeds when real customers have seen real outcomes.
- **Developers lead bolts as forward-deployed engineers.** The bolt lead works
  directly with the customer: they hear the problem first-hand, build against
  it, and present what they built. The people closest to the code are the
  people closest to the customer.
- **Every bolt ends in a showcase.** Outcomes are shown to the customer on a
  regular cadence, and what we hear goes straight into the structured intake
  and shapes the next bolts.
- **Clear intent first.** AI-DLC speeds up clear requirements and amplifies
  confused ones, so clarity sets the speed limit. My job is to own intent:
  agree the outcome before a bolt starts, answer questions within hours
  rather than at the next ceremony, and make sure every ticket traces back to
  its PRD.

The result is a regular customer cadence that the whole team owns: direction
set with leadership, built in short AI-assisted bolts, and checked against a
customer's reaction every time.

## Measuring bolt-based delivery

Speed only counts if quality holds, so velocity is never reported on its own.
These delivery KPIs for a bolt-based AI-DLC sit under the product's headline
outcome metric, time to complete a Statement or Record of Advice:

| KPI | Why it matters | Signal to act |
| --- | --- | --- |
| Bolt cycle time | Shows whether bolts stay short | Rising: Units of Work are too big, or decisions are stalling |
| Question turnaround | Unanswered questions now block delivery more than building does | Over a day: a decision-maker gap |
| Plan rejection rate | Tests the quality of specs and the rigour of review | Near zero: reviews may be rubber-stamping |
| Defect escape rate | Faster delivery with more failures isn't value | Rising with velocity: tighten the gates |
| Review load against commits | Human review is the scarce resource | Commits outpace review: add an evaluation harness |
| Bolts showcased to a customer | The sprint goal is customer outcomes, not output | A bolt that ships without a showcase hasn't closed the loop |

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
