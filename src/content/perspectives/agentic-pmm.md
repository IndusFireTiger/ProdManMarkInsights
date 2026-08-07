---
title: "Agentic PMM: everyone agrees product marketing belongs upstream, and the arithmetic is why it never gets there"
summary: "\"Involve product marketing earlier\" has been the right advice for twenty years and it is still mostly ignored — because it is not really advice, it's a request for headcount that isn't coming. Around 44% of product marketing teams are one or two people, and a third of product marketers carry five or more products. Agents change what a seat in discovery costs. Here's the blueprint for a synthetic product quad: five upstream agents, what they're allowed to sign, and the failure mode where you accidentally build a faster launch factory."
date: 2026-08-07
readingTime: "12 min read"
skill: "Go-to-Market & Product Marketing"
topics: ["Product Marketing", "Applied AI", "Agentic AI", "Go-to-Market", "Org Design"]
featured: false
draft: false
---

Every product marketer I know has received this message, usually on a Thursday:
*"Hey — this feature just shipped, can you tweet about it?"*

It's a small request and it contains an entire theory of the discipline. It says
product marketing is a thing you do *to* a product after the product exists. The
scope was set months ago, the trade-offs were made in a room you weren't in, the
category was chosen by default, and the price was picked last week by someone
reading a competitor's website. Your job is the announcement.

The counter-argument is well worn and correct. Positioning determines what gets
built, not just what gets said about it. Distribution is a design constraint. The
buyer's alternative — including the spreadsheet they'd keep using if you never
shipped — is a discovery input. Bring product marketing in at the start and the
product manager gets to validate problem-solution fit *before* engineering
capital is committed. None of this is controversial. April Dunford has been
saying it for a decade. Amazon institutionalised it as the PR-FAQ. Every credible
product organisation nods along.

And then almost nobody does it.

I've stopped believing this is a knowledge gap. It's an arithmetic problem, and
until you solve the arithmetic, the advice is just a nicer way of describing
something that isn't going to happen.

## The advice is right and the maths says no

Look at the shape of the function rather than the sentiment about it. The
industry's own survey data — the *State of Product Marketing* work and the
Product Marketing Alliance's C-suite research — draws an unflattering picture:

| What the numbers say | Value | What it actually means |
| --- | --- | --- |
| PMM teams made up of 1–2 people | ~44% | The "team" is a person with a laptop |
| Product marketers supporting 5+ products | ~32% | There is no version of the calendar where this works |
| Executive teams with no dedicated PMM function | ~41% | Positioning is being done by whoever has time |
| Senior executives unaware the discipline exists | ~10% | You are also doing internal category creation |
| PMMs measured primarily on direct revenue | ~53% | Full commercial accountability, unchanged capacity |

Now set that against the standard unit of product discovery. Modern product
development is organised around the **trio** — product manager, designer,
engineering lead — balancing value, usability and feasibility. It's a genuinely
good structure, and it has a hole in it exactly where market context,
distribution and commercialisation should sit. The trio decides. The product
marketer interprets, afterwards.

The received wisdom about ratios is a PMM for every two product managers, with
1:3 as the tolerable ceiling. The lived reality for a large minority of the
profession is 1:5 or worse. And 1:5 is not "a bit stretched" — it's a phase
change. At 1:5 you cannot sit in discovery ceremonies for five product areas,
run qualitative research, own pricing analysis, and still produce the launch
collateral five roadmaps generate. So the collateral wins, because the collateral
has a date on it and discovery doesn't. The PMM becomes a service desk with a
backlog, and the strategic half of the job quietly becomes the part they do on
weekends, if at all.

This is why "involve product marketing earlier" fails as a recommendation. It
isn't a behaviour change. It's a hiring request wearing a behaviour change's
clothes, and it arrives at a CFO who has just been told 41% of comparable
companies don't fund the function at all.

## What agents actually change

Here's the thing worth being precise about, because the hype in this space is
thick: **agents do not make a product marketer smarter, and they do not have
taste.** What they do is remove the reason the seat was unaffordable.

Split the job in two. Some of it is *judgement* — choosing the category you want
to be evaluated in, deciding which buyer you're willing to disappoint, holding a
price when sales wants a discount, saying a roadmap item shouldn't be built.
That's irreducible, and it's the part the org is nominally paying for. The rest
is *labour* — trawling win/loss calls for recurring objections, diffing
competitor release notes, cutting the same one-pager for the fourth persona,
rebuilding a battlecard because a rival changed their pricing page, assembling
the enablement kit, chasing the telemetry for the QBR.

The labour is what eats the calendar. It's also, almost entirely, the category of
work that a well-instructed agent with access to your CRM, your call recordings,
your product analytics and your issue tracker can do continuously and without
complaint. That's the whole argument for **agentic PMM**: you can't buy a fourth
chair in the trio, but you might be able to *staff* one — converting a 1:5
headcount reality into something closer to a synthetic 1:1 pairing, without
adding a person.

This is the same inversion I wrote about in
[the legacy product operating model](/perspectives/ai-product-operating-model):
the old shape of the work was a rational response to a scarcity that is
dissolving. There, the scarce thing was engineering time. Here it's PMM
attention. Same logic, different constraint.

## The synthetic quad

Concretely: five agents, mapped to the phases of the upstream lifecycle, each
with a defined output artifact and — critically — a defined human signature.

| Agent | What it does continuously | Output artifact | Who signs |
| --- | --- | --- | --- |
| **Market & competitive intelligence** | Ingests win/loss calls, competitor release notes, API docs, review-site movement; flags shifts in buyer language *before* discovery opens | Battlecards, feature-gap matrices, an objection ledger | PMM validates the market read and owns the ICP definition |
| **Upstream positioning** | Turns a raw PRD or epic outline into a Working-Backwards press release, customer FAQ and internal FAQ; scores the proposal against known ICP pain | PR-FAQ, Dunford-style positioning frame, feature value scorecard | PMM + PM sign off *before* sprint allocation |
| **Pricing & value architecture** | Correlates feature telemetry with deal data and churn to model willingness-to-pay and find the tiering seams | Packaging options, discount-threshold analysis | Product and finance leadership set the price |
| **Full-lifecycle GTM** | Generates persona-specific enablement matched to lifecycle stage — pain-led decks at introduction, ROI calculators and battlecards at growth, migration guides at maturity and decline | Modular launch kits, synced to wherever enablement lives | PMM edits for accuracy and runs the enablement itself |
| **PMF health & saturation** | Watches time-to-first-value, activation, adoption curves and retention; flags features consuming engineering budget to serve a narrow vocal cohort | Monthly PMF health audit, expansion-vector options | Leadership decides portfolio shifts, sunsets, investment |

The fifth one is the one I'd argue hardest for, because it's the one no
understaffed PMM function ever gets to. Product-market fit is not a trophy — it
decays, quietly, while the dashboards still look fine, and by the time growth
visibly stalls you're a year late diagnosing why. I've made that case at length
using the data catalog as the worked example in
[product-market fit decays](/perspectives/catalog-to-enterprise-data-operations).
An agent watching adoption curves against cohort retention every week is not more
insightful than a good product marketer. It is simply *there every week*, which
a person carrying five products is not.

## Agents get a byline, never a signature

The governance line is the part that decides whether this is a serious operating
model or an expensive way to generate slop, so it's worth stating flatly:

> Agents draft, gather, correlate and monitor. Humans decide, approve, price and
> defend. Every artifact has an agent's byline and a human's signature, and the
> signature is what makes it real.

That isn't ceremony. Three concrete reasons the split has to hold:

1. **Positioning is a set of things you refuse to do.** A model trained to be
   helpful will happily generate a positioning frame that claims every segment,
   because claiming more looks like more value. Real positioning forecloses
   options — it names the buyer you're not for. That's a commitment, and
   commitments need an owner with something at stake.
2. **The inputs are contaminated with your own past claims.** An intelligence
   agent scraping the market will read your competitors' marketing *and* the
   internal decks that repeat your own last-cycle assumptions. Without a human
   checking provenance, you get a confident synthesis of the consensus you
   already held.
3. **Somebody has to be accountable to the revenue number.** Since a majority of
   product marketers are now measured on revenue outcomes, the decision rights
   have to sit with the person carrying the metric. You cannot delegate
   accountability to a system that can't be held to it.

## The trap: automating the symptom

Now the part I'd want said out loud in any room where this gets pitched, because
I think it's the most likely outcome of a naive rollout.

The launch factory is a *symptom* of the capacity gap. Agents are very good at
producing launch collateral. So the path of least resistance is to deploy the
GTM execution agent first, watch collateral lead times collapse, declare victory
— and end up with a launch factory that runs four times faster while product
marketing remains exactly as downstream as it was.

You will have automated the symptom and preserved the disease. Worse, you'll have
made the disease cheaper to sustain: when the announcement is nearly free to
produce, the organisational pressure to involve product marketing early drops
further, because the visible pain that early involvement was meant to relieve has
gone away. The strategic gap doesn't close. It just stops itching.

I'd hold the same scepticism about the ROI numbers that tend to accompany these
blueprints — the "70% faster collateral" class of claim. Take it as a
projection, not evidence, and notice what it measures: *output volume*. Faster
production of downstream artifacts is precisely what you'd see in the failure
mode as well as the success case. It cannot tell the two apart.

So don't measure that. Measure whether the trio's decisions changed.

## The gate is the actual product

Here's the mechanism that makes agentic PMM real rather than decorative, and it
isn't a model at all. It's a **gate**: no roadmap item receives full development
budget until a positioning artifact exists and has been signed — a PR-FAQ, a
named competitive alternative, a target buyer, an intended price.

Gates like this have been recommended for years and are almost never enforced,
for a reason that has nothing to do with belief. A gate that costs three days of
a stretched person's week to clear is a gate that gets waived under deadline, and
a gate that gets waived twice is not a gate. The enforcement failure was always
an economics failure.

Agents change the economics of the gate. When the first draft of the PR-FAQ,
the positioning frame and the value scorecard land in twenty minutes rather than
three days, the gate becomes cheap enough that holding it is politically
survivable. The human work compresses into what it should have been all along:
reading the draft, disagreeing with it, and deciding.

That's the actual thesis. **The agents aren't the intervention — the gate is. The
agents just make the gate affordable enough to hold.** Everything else in this
essay is plumbing in service of that one sentence.

It also means the artifacts only work if they're machine-drafted from something
real. This is where the [GTM Factory](/perspectives/the-gtm-factory) turns out to
be the precondition rather than a separate idea: if you've already defined a
structured, machine-readable description of the product — features, capabilities,
value propositions, GTM strategy as inputs rather than folklore — then the agents
have something to reason over. If you haven't, they'll reason over the last deck
somebody wrote, and you'll get fluent restatements of stale positioning at
impressive speed.

## How I'd actually sequence it

Most blueprints for this start with a Phase 1 that connects every agent to the
CRM, the call-intelligence platform, the analytics stack and the issue tracker
before anything ships. I'd invert that, on the grounds that integration-first
programmes die in procurement and security review, having produced nothing anyone
can point at.

1. **Run the gate manually for one product line, once.** No agents. Write the
   PR-FAQ by hand for the next significant epic and make it a condition of sprint
   allocation. You're testing whether the organisation will honour a gate at all.
   If it won't, no amount of automation will save you, and you've learned that
   for the price of one document.
2. **Automate the artifact you just proved people read.** Point the positioning
   agent at incoming PRDs. Narrow scope, visible output, an existing human ritual
   to plug into. This is the step that buys the calendar back.
3. **Add the intelligence agent, because the positioning agent is starving.**
   Win/loss ingestion and competitor monitoring exist to make the PR-FAQ's claims
   about alternatives true rather than plausible. Note the dependency runs this
   way round — intelligence is not the foundation layer, it's the fact-checker.
4. **Then the enablement agent.** Deliberately fourth. By now product marketing
   is upstream, so faster collateral compounds a good position instead of
   scaling a bad one.
5. **Then PMF health monitoring, as the permanent one.** The others accelerate a
   cycle. This one runs forever and is the only agent that will ever tell you
   the thing nobody wants to hear about a product that's still growing.

## The test that matters

Strip out the product marketing specifics and the pattern generalises to any
function that is structurally under-resourced relative to the function it's meant
to govern — security review against engineering throughput, data governance
against the rate of new data products, research against the rate of design
decisions. Each has the same shape: everybody agrees it should happen earlier,
the arithmetic says it can't, so it happens late and shallow and gets blamed for
being a bottleneck. Agents don't resolve the disagreement. They change which
seats an organisation can afford to fill, which is a different and more useful
kind of answer.

But it only counts if the seat is used for judgement. So here's the test I'd
apply to an agentic PMM programme at the six-month mark, and it isn't a
dashboard:

> Did anything get cancelled?

If upstream positioning never killed a feature, never redirected an epic, never
changed a price before launch, never sent a PM back to reconsider who the buyer
was — then the quad is decorative and you've bought a very sophisticated
announcement machine. The whole point of moving product marketing upstream is
that it gets to say *no* while saying no is still cheap.

Everything else is a tweet on a Thursday.

---

*This essay grew out of a session I proposed for Product Camp Melbourne 2026 —
"Product marketing can't be an afterthought" — and the structural research behind
it. Benchmark figures are drawn from the
[State of Product Marketing](https://www.productmarketingalliance.com/state-of-product-marketing-report/)
research and the Product Marketing Alliance's
[C-suite perception survey](https://www.productmarketingalliance.com/product-marketing-perceptions-among-the-c-suite-2/)
and [ratio guidance](https://www.productmarketingalliance.com/the-right-ratio-product-marketers-product-managers/);
they describe the surveyed population, not a universal law. Further reading:
[A quickstart guide to positioning — April Dunford](https://www.aprildunford.com/post/a-quickstart-guide-to-positioning);
[Opportunity-Solution Alignment — Melanie Richards](https://melanie-richards.com/blog/opportunity-solution-alignment/);
[Understand product-market fit expansion — Reforge](https://www.reforge.com/guides/understand-product-market-fit-expansion).
Companion pieces:
[The GTM Factory](/perspectives/the-gtm-factory);
[Product-market fit decays](/perspectives/catalog-to-enterprise-data-operations);
[The legacy product operating model was built around scarcity](/perspectives/ai-product-operating-model).*
