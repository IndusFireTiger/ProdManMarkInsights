---
title: "AI product management: the legacy product operating model was built around scarcity, and the scarcity is gone"
summary: "For thirty years the product operating model — PRDs, sprints, specs, staged rollouts, layers of coordination — was a rational response to one constraint: engineering time was expensive and scarce. AI is dissolving that constraint, and when building something testable costs thirty minutes instead of two weeks, the sequence inverts from research-then-build to build-then-evaluate. A look at what that changes for PM, design and engineering, where the hype overreaches, and what's actually scarce now."
date: 2026-06-19
readingTime: "7 min read"
skill: "Applied AI in Product"
topics: ["Product Strategy", "Applied AI", "Operating Model", "Org Design", "Agile"]
featured: false
series: "ai-and-the-crafts"
part: 3
draft: false
---

For thirty years, every product organization has been quietly optimizing for the same constraint: **engineering time is expensive and engineers are scarce.**

We rarely said it out loud, but it's the assumption underneath almost everything we built. Why do PRDs exist? To make sure we don't waste precious engineering cycles building the wrong thing. Why do we run discovery, write specs, groom backlogs, hold sprint planning, stage rollouts, and gate everything behind code review? Because building was the bottleneck, and the entire apparatus of "product" grew up to protect that bottleneck.

Take a fresh look at the modern product org and you'll see it's mostly *coordination overhead* in service of a scarce resource — PMs, TPMs, designers, QA, release managers, all arranged to make sure expensive builders point at the right thing.

Here's the uncomfortable question: **if you were standing up a product organization from scratch today, would any of this exist in its current form?**

I don't think it would. And I say that as someone who came up through engineering before moving into product — I have real affection for the machinery. But the constraint it was designed around is dissolving.

## The build is no longer the bottleneck

When building something testable costs thirty minutes of agent time instead of two engineer-weeks, the economics of the entire workflow flip.

The traditional sequence is **research → spec → align → build → review → ship**. Every stage front-loads thinking because the build is the expensive, irreversible part. You plan hard precisely because you can't afford to be wrong once you start cutting code.

The AI-native sequence inverts it: **build → evaluate → decide.**

You don't argue about the feature in the abstract. You generate three working versions of it, look at them, and react. The artifact arrives before the alignment meeting, not after it. The wrong direction isn't a two-week tax — it's a discarded prototype and a better prompt.

This is the whole game, and it's worth sitting with: *the cost of being wrong collapsed, so the value of elaborate processes designed to avoid being wrong collapsed with it.*

## What the lean teams are actually telling us

The proof points are getting hard to wave away. Cursor reportedly reached billions in ARR with a few dozen engineers and a single PM. OpenAI's Codex team has run a dozen product surfaces with a headcount that would traditionally staff one or two. Anthropic's engineers prototype hundreds of variations without routing through a PM or designer first.

The reflexive read is "AI replaces people." That's the wrong lesson, and it's lazy.

The real lesson is that **the ratio of coordination to creation inverted.** Old teams spent most of their energy coordinating a scarce build capacity. The new teams spend almost all of their energy creating, because build capacity is abundant. The coordination layer didn't get automated away — it became *unnecessary*, because there's far less to coordinate when one generalist can carry an idea from problem to working software in an afternoon.

## What this changes for the three core roles

I don't believe PM, design, and engineering disappear. I believe what each role is *for* changes.

**Product management** stops being the keeper of the spec and the broker of scarce eng time. When anyone can generate the artifact, the PM's edge is no longer "translating intent into a backlog." It's **taste, judgment, and problem selection** — knowing which of the hundred things you *could* build actually deserves to exist, and being able to tell a good prototype from a seductive one. The scarce resource is now discernment, not documentation.

**Design** stops reviewing your words and starts reacting to your artifacts. When a PM can produce a clickable flow in plain language, design moves upstream into systems, principles, and the hard taste calls — and stops being a production bottleneck for screens. (I've argued the deeper version of this shift in [Designing for a machine that can finally understand you](/perspectives/evolving-ux-after-ai).)

**Engineering** moves from character-by-character authorship toward **architecture, judgment, and orchestration** — directing agents, owning the parts that genuinely require depth, and being accountable for what's correct and safe rather than for raw throughput.

The common thread: every role moves *up the value chain*, away from production and toward judgment.

## Where I'd push back on the hype

A few cautions, because the genre tends toward triumphalism.

Most of the celebrated examples are **net-new, AI-native, low-regulatory-surface products.** Inverting "spec then build" into "build then evaluate" is clean when the cost of a wrong build is thirty minutes. It is not clean when the wrong build touches money movement, patient data, or a regulated control. In those worlds — and a lot of real product work lives there — "evaluate before you ship" still carries serious weight, and some of that old apparatus is load-bearing, not bureaucratic.

Second, **abundance of building raises the premium on knowing what's worth building.** When everyone can ship anything, the differentiator stops being execution and becomes problem selection and taste. The bottleneck doesn't vanish; it relocates — from your engineers' hands to your judgment.

So I'd hold the inversion as a powerful default, not a universal law. The skill is knowing when you're in a thirty-minute-mistake regime and can move fast, versus a high-consequence regime where the old discipline earns its keep.

## So what do you actually do Monday morning?

You don't reorganize the company. You start smaller:

- **Move the artifact earlier.** Bring a working prototype to the conversation that you'd normally bring a doc to. Watch how much faster the team converges.
- **Default to building the spike, not writing the spec** — when the cost of being wrong is genuinely low. Reserve heavy process for where the cost of being wrong is genuinely high.
- **Shift your own scorecard** from output (specs shipped, tickets groomed) to judgment (problems chosen, prototypes killed early, taste applied).
- **Re-ask the founding question on your own team:** which of our rituals exist to protect a scarcity that no longer exists?

The operating model we inherited wasn't wrong. It was a rational response to a real constraint. That constraint is lifting — and the teams that win the next decade will be the ones honest enough to redesign around what's actually scarce now: **not the ability to build, but the judgment to know what's worth building.**

---

*Inspired by and indebted to Aakash Gupta's [The AI Product Operating Model](https://www.news.aakashg.com/p/ai-product-operating-model), which frames the build-then-evaluate inversion and supplies several of the examples referenced above (Cursor, OpenAI Codex, Anthropic). The arguments and commentary here build on that piece. Companion piece: [Agile in the age of AI — when the machine writes the code, what's left for the humans?](/perspectives/agile-in-the-age-of-ai).*
