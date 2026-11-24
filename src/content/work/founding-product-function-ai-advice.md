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

Advice is a regulated domain, so "move fast" has a hard boundary. Anything the
product generates has to be traceable, reviewable and defensible.

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
3. **Outcome metrics, not output metrics.** I introduced product OKRs, with a
   headline metric built on the customer's core workflow: how long the work
   our customers care about most takes them to complete. Benchmark testing
   gives each release a before-and-after against that measure.
4. **An AI-Driven Development Lifecycle (AI-DLC).** I established AI-DLC
   team practices: work runs in **bolts**, every ticket traces back to the PRD
   it came from, and feature-flagged, progressive rollouts let changes reach
   customers in stages and be pulled back. The model and how I ran it are
   described below.
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

## AI-DLC: speeding up the whole SDLC

In my recent role I put the AI-Driven Development Life Cycle (AI-DLC) in place
to speed up the whole software lifecycle, not just the typing. AI-DLC,
introduced by AWS, makes AI the orchestrator under human governance: people
define intent, verify the architecture and validate the outcome, and AI does
the execution. This is the model, and how I applied it.

<figure class="viz viz-tagline" aria-label="Clarity is the new velocity">
<p class="viz-tagline__big">Clarity is the new velocity.</p>
<p class="viz-tagline__sub">AI-DLC accelerates clear intent and amplifies confusion. That makes requirements a product management job again.</p>
</figure>

### The model

<figure class="viz" aria-labelledby="viz-phases-title">
<p class="viz__title" id="viz-phases-title">The model · three adaptive phases replace seven</p>
<ol class="viz-phases">
<li class="viz-phase"><span class="viz-phase__tag">What &amp; why</span><strong>Inception</strong><ul><li>Workspace detection</li><li>Reverse engineering</li><li>Question gating</li><li>Workflow planning</li></ul></li>
<li class="viz-phase"><span class="viz-phase__tag">How</span><strong>Construction</strong><ul><li>Per-unit execution</li><li>Code-generation planning</li><li>Unit and NFR tests</li><li>Isolated build and test</li></ul></li>
<li class="viz-phase"><span class="viz-phase__tag">Run &amp; heal</span><strong>Operations</strong><ul><li>Continuous deployment</li><li>Production telemetry</li><li>Adaptive repair loop</li></ul></li>
</ol>
<p class="viz-phases__loop"><b>↺ Micro-Inception</b> Production signals re-trigger the loop: a defect starts a new micro-Inception, not a manual patch.</p>
<figcaption>No code until the questions are answered: Inception stays blocked until people answer its clarification questions and approve the plan.</figcaption>
</figure>

### Sprints become bolts

<figure class="viz viz-shift" aria-labelledby="viz-shift-title">
<p class="viz-shift__big" id="viz-shift-title">Sprints become bolts.</p>
<p class="viz-shift__sub">A bolt is a focused work cycle measured in hours or a single day. Each one delivers an atomic Unit of Work.</p>
<div class="viz-shift__row">
<div class="viz-shift__cell"><span>Sprint</span><strong>Multi-week</strong></div>
<div class="viz-shift__arrow" aria-hidden="true">→</div>
<div class="viz-shift__cell viz-shift__cell--new"><span>Bolt</span><strong>Hours to a day</strong></div>
<div class="viz-shift__cell viz-shift__cell--why"><span>Why it works</span><strong>AI writes the boilerplate</strong></div>
</div>
</figure>

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

In my recent role I set the team up this way: about **eight bolts a sprint**,
each led by a single developer or a developer pair with **one QA engineer**,
across six developers and three QA engineers. Two choices made it work:

- **Sprint goals are set with the C-suite, and they are about bolts.** Together
  we decide how many bolts the sprint holds, what each one must deliver, and,
  as the headline of every sprint goal, **which customer each outcome will be
  shown to**. A sprint succeeds when real customers have seen real outcomes.
- **Developers lead bolts as forward-deployed engineers.** The bolt lead works
  directly with the customer: they hear the problem first-hand, build against
  it, and present what they built at the end of every bolt. What we hear goes
  straight into the structured intake and shapes the next bolts.

### How Agile rituals change

<figure class="viz" aria-labelledby="viz-rituals-title">
<p class="viz__title" id="viz-rituals-title">How Agile rituals change</p>
<ul class="viz-rituals">
<li class="viz-ritual"><span class="viz-ritual__old">Multi-week sprint</span><span class="viz-ritual__arrow" aria-hidden="true">→</span><span class="viz-ritual__new">Bolt</span><span class="viz-ritual__means">Hours to a day, one Unit of Work</span></li>
<li class="viz-ritual"><span class="viz-ritual__old">Story-pointed user story</span><span class="viz-ritual__arrow" aria-hidden="true">→</span><span class="viz-ritual__new">Unit of Work</span><span class="viz-ritual__means">An atomic, actionable block of value</span></li>
<li class="viz-ritual"><span class="viz-ritual__old">Async design meetings</span><span class="viz-ritual__arrow" aria-hidden="true">→</span><span class="viz-ritual__new">Mob Elaboration</span><span class="viz-ritual__means">PO, developers, architects and QA refine intent with the AI, live</span></li>
<li class="viz-ritual"><span class="viz-ritual__old">Solo coding, later review</span><span class="viz-ritual__arrow" aria-hidden="true">→</span><span class="viz-ritual__new">Mob Construction</span><span class="viz-ritual__means">The team challenges the AI's logic in real time</span></li>
<li class="viz-ritual"><span class="viz-ritual__old">Subjective peer review</span><span class="viz-ritual__arrow" aria-hidden="true">→</span><span class="viz-ritual__new">Named approver</span><span class="viz-ritual__means">Checklist review by someone other than the prompter</span></li>
<li class="viz-ritual"><span class="viz-ritual__old">Ticket and commit trail</span><span class="viz-ritual__arrow" aria-hidden="true">→</span><span class="viz-ritual__new">audit.md log</span><span class="viz-ritual__means">Prompts, answers and approvals tied to versions</span></li>
</ul>
<figcaption>Mob Elaboration and Mob Construction replace long asynchronous design cycles, and guard against people passively accepting AI decisions.</figcaption>
</figure>

### Every bolt passes two human gates

<figure class="viz" aria-labelledby="viz-gates-title">
<p class="viz__title" id="viz-gates-title">Governance · every bolt passes two human gates</p>
<ol class="viz-gates">
<li class="viz-gate viz-gate--ai"><span>AI step</span><strong>Propose plan &amp; Unit of Work</strong></li>
<li class="viz-gate viz-gate--human"><span>Human gate</span><strong>Review against checklist</strong></li>
<li class="viz-gate viz-gate--ai"><span>AI step</span><strong>Execute the bolt</strong></li>
<li class="viz-gate viz-gate--ai"><span>AI step</span><strong>Validate output &amp; tests</strong></li>
<li class="viz-gate viz-gate--human"><span>Human gate</span><strong>Release &amp; change ticket</strong></li>
</ol>
<div class="viz-gates__notes">
<p class="viz-gates__no"><b>Rejected:</b> edit the specs or steering rules, then re-plan.</p>
<p class="viz-gates__yes"><b>Approved:</b> the decision is recorded in audit.md before execution. The bolt's artefact trail becomes the change-ticket evidence.</p>
</div>
<figcaption>Moving at bolt speed doesn't mean skipping change control.</figcaption>
</figure>

### One bolt, end to end

<figure class="viz" aria-labelledby="viz-flow-title">
<p class="viz__title" id="viz-flow-title">One bolt, end to end</p>
<ol class="viz-flow">
<li><strong>Intent</strong><span class="viz-who">PM with the C-suite</span><span>Outcome, Unit of Work and the customer it's for, agreed in the sprint goal.</span></li>
<li class="viz-flow__customer"><strong>Elaborate</strong><span class="viz-who">Bolt lead with the customer</span><span>Hear the problem first-hand. PRD to tickets, every ticket traced.</span></li>
<li><strong>Build</strong><span class="viz-who">Dev or pair, with AI</span><span>AI drafts the design, code and tests; developers curate and validate.</span></li>
<li><strong>Test</strong><span class="viz-who">QA, with AI</span><span>Acceptance and AI workflow tests, run on de-identified real-world data.</span></li>
<li><strong>Release</strong><span class="viz-who">Feature flag</span><span>Progressive rollout that reaches customers in stages and can be pulled back.</span></li>
<li class="viz-flow__customer"><strong>Showcase</strong><span class="viz-who">Bolt lead to the customer</span><span>Show the outcome; feedback goes into the structured intake.</span></li>
</ol>
<p class="viz-loopback">↺ The intake shapes the intent for the next bolts.</p>
<figcaption>Inspired by the AI-DLC loop, where people own intent and validation and AI carries out the work.</figcaption>
</figure>

### The PM becomes the owner of intent

When building takes hours, waiting for decisions becomes the bottleneck.
Clarity is the speed limit, so product management moves from grooming tickets
ahead of time to owning intent, answering questions within hours, and
approving the acceptance tests that gate construction.

<figure class="viz" aria-labelledby="viz-methods-title">
<p class="viz__title" id="viz-methods-title">Six methods for bolt-speed product work</p>
<ol class="viz-methods">
<li class="viz-method"><span class="viz-method__n">01</span><strong>Write intent briefs</strong><span>One page: problem, user, outcome, constraints, non-goals. The AI drafts stories from it; you check them.</span></li>
<li class="viz-method"><span class="viz-method__n">02</span><strong>Join Mob Elaboration</strong><span>Block live time with developers, architects and QA. Unanswered questions are now the bottleneck.</span></li>
<li class="viz-method"><span class="viz-method__n">03</span><strong>Tests define ready</strong><span>Inception isn't done until a human approves the acceptance tests that gate construction.</span></li>
<li class="viz-method"><span class="viz-method__n">04</span><strong>Slice by blast radius</strong><span>Size each Unit of Work to fit one bolt, one named approver and one change ticket.</span></li>
<li class="viz-method"><span class="viz-method__n">05</span><strong>Close the telemetry loop</strong><span>Feed production signals and user behaviour into the next micro-Inception and roadmap call.</span></li>
<li class="viz-method"><span class="viz-method__n">06</span><strong>Pair speed with quality</strong><span>Report velocity next to defect escape rate. Faster delivery with more failures isn't value.</span></li>
</ol>
</figure>

### Measuring bolt-based delivery

Speed only counts if quality holds, so velocity is never reported on its own.

<figure class="viz" aria-labelledby="viz-kpi-title">
<p class="viz__title" id="viz-kpi-title">Bolt-based delivery scorecard</p>
<ul class="viz-kpis">
<li class="viz-kpi viz-kpi--headline"><strong>Speed and quality, read together</strong><span>Every bolt serves one customer outcome metric, benchmarked release by release. Velocity is never reported without defect escape beside it.</span><span class="viz-kpi__act"><b>The rule above the scorecard</b></span></li>
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
- **Pick the metric the customer feels.** How long the core workflow takes is
  something a customer notices on their first day with the product. It keeps
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
