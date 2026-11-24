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

<figure class="viz" aria-labelledby="viz-compare-title">
<p class="viz__title" id="viz-compare-title">From sprints to bolts</p>
<div class="viz-compare">
<div class="viz-compare__col">
<p class="viz-compare__head">Sprint-based delivery</p>
<dl>
<div><dt>Unit of delivery</dt><dd>Story-pointed user stories over a multi-week sprint</dd></div>
<div><dt>Who builds</dt><dd>Developers type the code; AI autocompletes</dd></div>
<div><dt>Who meets the customer</dt><dd>Product and sales, then a handoff</dd></div>
<div><dt>"Done" means</dt><dd>Accepted at the sprint review</dd></div>
<div><dt>Measured by</dt><dd>Story points and velocity</dd></div>
</dl>
</div>
<div class="viz-compare__col viz-compare__col--new">
<p class="viz-compare__head">Bolt-based AI-DLC, as I run it</p>
<dl>
<div><dt>Unit of delivery</dt><dd>A bolt: one Unit of Work in a short, focused cycle</dd></div>
<div><dt>Who builds</dt><dd>AI drafts at every stage; developers curate and validate</dd></div>
<div><dt>Who meets the customer</dt><dd>The bolt lead, as a forward-deployed engineer</dd></div>
<div><dt>"Done" means</dt><dd>Shown to a named customer, and it worked for them</dd></div>
<div><dt>Measured by</dt><dd>Cycle time and defect escape, under a customer outcome</dd></div>
</dl>
</div>
</div>
<figcaption>Adapted from the AI-DLC comparison of sprint and bolt rituals, with how my team applies it.</figcaption>
</figure>

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

<figure class="viz" aria-labelledby="viz-sprint-title">
<p class="viz__title" id="viz-sprint-title">Anatomy of a sprint</p>
<div class="viz-goal"><b>Sprint goal · set with the C-suite</b>How many bolts, what each one delivers, and which customer sees each outcome.</div>
<ol class="viz-bolts">
<li class="viz-bolt"><strong>Bolt 1</strong><span>Dev pair + QA</span><span class="viz-bolt__show">→ Customer showcase</span></li>
<li class="viz-bolt"><strong>Bolt 2</strong><span>Dev + QA</span><span class="viz-bolt__show">→ Customer showcase</span></li>
<li class="viz-bolt"><strong>Bolt 3</strong><span>Dev + QA</span><span class="viz-bolt__show">→ Customer showcase</span></li>
<li class="viz-bolt"><strong>Bolt 4</strong><span>Dev pair + QA</span><span class="viz-bolt__show">→ Customer showcase</span></li>
<li class="viz-bolt"><strong>Bolt 5</strong><span>Dev + QA</span><span class="viz-bolt__show">→ Customer showcase</span></li>
<li class="viz-bolt"><strong>Bolt 6</strong><span>Dev pair + QA</span><span class="viz-bolt__show">→ Customer showcase</span></li>
<li class="viz-bolt"><strong>Bolt 7</strong><span>Dev + QA</span><span class="viz-bolt__show">→ Customer showcase</span></li>
<li class="viz-bolt"><strong>Bolt 8</strong><span>Dev + QA</span><span class="viz-bolt__show">→ Customer showcase</span></li>
</ol>
<p class="viz-team"><span>Developers <span class="viz-dots" aria-label="6"><i></i><i></i><i></i><i></i><i></i><i></i></span></span><span>QA engineers <span class="viz-dots viz-dots--qa" aria-label="3"><i></i><i></i><i></i></span></span><span>Product: owns intent and the intake</span></p>
<figcaption>Illustrative: a typical sprint of about eight bolts, each led by one developer or a pair with one QA engineer.</figcaption>
</figure>

<figure class="viz" aria-labelledby="viz-flow-title">
<p class="viz__title" id="viz-flow-title">One bolt, end to end</p>
<ol class="viz-flow">
<li><strong>Intent</strong><span class="viz-who">PM with the C-suite</span><span>Outcome, Unit of Work and the customer it's for, agreed in the sprint goal.</span></li>
<li class="viz-flow__customer"><strong>Elaborate</strong><span class="viz-who">Bolt lead with the customer</span><span>Hear the problem first-hand. PRD to tickets, every ticket traced.</span></li>
<li><strong>Build</strong><span class="viz-who">Dev or pair, with AI</span><span>AI drafts the design, code and tests; developers curate and validate.</span></li>
<li><strong>Test</strong><span class="viz-who">QA, with AI</span><span>Acceptance and AI workflow testing on de-identified client files.</span></li>
<li><strong>Release</strong><span class="viz-who">Feature flag</span><span>Progressive rollout that reaches customers in stages and can be pulled back.</span></li>
<li class="viz-flow__customer"><strong>Showcase</strong><span class="viz-who">Bolt lead to the customer</span><span>Show the outcome; feedback goes into the structured intake.</span></li>
</ol>
<p class="viz-loopback">↺ The intake shapes the intent for the next bolts.</p>
<figcaption>Inspired by the AI-DLC loop, where people own intent and validation and AI carries out the work.</figcaption>
</figure>

The result is a regular customer cadence that the whole team owns: direction
set with leadership, built in short AI-assisted bolts, and checked against a
customer's reaction every time.

## Measuring bolt-based delivery

Speed only counts if quality holds, so velocity is never reported on its own.
These delivery KPIs for a bolt-based AI-DLC sit under the product's headline
outcome metric, time to complete a Statement or Record of Advice.

<figure class="viz" aria-labelledby="viz-kpi-title">
<p class="viz__title" id="viz-kpi-title">Bolt-based delivery scorecard</p>
<ul class="viz-kpis">
<li class="viz-kpi viz-kpi--headline"><strong>Time to complete a Statement or Record of Advice</strong><span>The product outcome every bolt serves. Benchmarked release by release.</span><span class="viz-kpi__act"><b>Headline metric</b></span></li>
<li class="viz-kpi"><strong>Bolt cycle time</strong><span>Shows whether bolts stay short.</span><span class="viz-kpi__act"><b>Act if rising:</b> Units of Work are too big, or decisions are stalling.</span></li>
<li class="viz-kpi"><strong>Question turnaround</strong><span>Unanswered questions now block delivery more than building does.</span><span class="viz-kpi__act"><b>Act if over a day:</b> a decision-maker gap.</span></li>
<li class="viz-kpi"><strong>Plan rejection rate</strong><span>Tests the quality of specs and the rigour of review.</span><span class="viz-kpi__act"><b>Act if near zero:</b> reviews may be rubber-stamping.</span></li>
<li class="viz-kpi"><strong>Defect escape rate</strong><span>Faster delivery with more failures isn't value.</span><span class="viz-kpi__act"><b>Act if rising with velocity:</b> tighten the gates.</span></li>
<li class="viz-kpi"><strong>Review load against commits</strong><span>Human review is the scarce resource.</span><span class="viz-kpi__act"><b>Act if commits outpace review:</b> add an evaluation harness.</span></li>
<li class="viz-kpi"><strong>Bolts showcased to a customer</strong><span>The sprint goal is customer outcomes, not output.</span><span class="viz-kpi__act"><b>Act if a bolt ships unshown:</b> the loop hasn't closed.</span></li>
</ul>
<figcaption>Delivery KPIs adapted from the AI-DLC bolt-speed scorecard, read together rather than one at a time.</figcaption>
</figure>

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
