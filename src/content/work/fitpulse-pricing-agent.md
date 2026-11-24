---
title: "FitPulse — a pricing agent's first draft, and what a human still owns"
summary: "A worked example of the Pricing & Value Architecture agent from the Agentic PMM blueprint: given a feature list and usage telemetry, it produces a gating strategy, a category reframe and a risk register. Useful for showing exactly where the agent's judgement runs out."
focus: "Applied AI • Pricing & Packaging • Agentic PMM"
role: "Independent learning project"
kind: "Learning Lab"
order: 5
draft: false
---

> **What this is.** One of the five agents in
> [Agentic PMM](/perspectives/agentic-pmm) is a **Pricing & Value Architecture
> agent** — it correlates feature usage with willingness-to-pay signals and
> proposes where the paywall should sit. This is that agent run end-to-end on a
> synthetic brief (`/pricing`, on a fictional fitness app called FitPulse), kept
> intact so the output can be judged rather than described. The interesting part
> isn't that it produced something coherent. It's where the coherence stops.

<figure>
  <img src="/work/fitpulse-pricing.png" alt="FitPulse Monetization Architecture — a six-panel pricing strategy: value driver mapping against willingness-to-pay, a market category reframe from fitness app to AI coach, a free-versus-Pro gating strategy, the tier architecture at $9.99/month, a cannibalisation risk assessment, and six post-launch metrics." />
  <figcaption>The full artifact the agent produced from a feature list and usage telemetry — value mapping, category frame, gating, tiers, risk and metrics.</figcaption>
</figure>

## The brief

FitPulse is a free fitness app that wants to launch a paid tier. The agent was
given four features, their usage rates, and one qualitative signal — nothing
else:

| Feature | Usage | Qualitative signal |
| --- | --- | --- |
| Basic workout logging | 95% daily | — |
| Custom exercise video library | 40% weekly | — |
| AI personalised training plan generator | 15% (heavy users) | Drives 80% of positive reviews |
| Apple Watch HR sync | 60% | — |

The naive move — and the one an engagement-led team makes by reflex — is to gate
the most-used feature, because usage looks like value.

## What the agent produced

**1. It separated behaviour from willingness-to-pay.** The core finding is that
usage frequency and monetisable value are *inversely* correlated here. Logging is
used by 95% of people and is worth almost nothing, because the competitive
alternative is a notes app. The AI plan generator is used by 15% and is the only
feature whose alternative is a personal trainer at $50–150 a session.

**2. It reframed the category.** Not "a fitness app with more features" but *an
AI coach that replaces the guesswork a personal trainer would otherwise charge
$50–150/session for.* That single move re-prices $9.99/month from an expensive
app upgrade into a ~90% discount on the real alternative — which is a positioning
decision doing pricing work, exactly the Dunford argument.

**3. It set a guardrail before a paywall.** *Never gate the daily habit loop.*
Logging stays free because it's the retention engine and the word-of-mouth
surface; gating it would suppress the top of funnel to win a few conversions.

| Tier | What's in it | Why |
| --- | --- | --- |
| **Free** | Unlimited workout logging, 10 videos/month, manual HR entry | Protects the habit loop and organic growth |
| **Pro — $9.99/mo** | AI training plan generator | Primary paywall anchor — highest WTP, lowest cannibalisation |
| | Apple Watch HR sync | Bundles on product logic: the AI needs HR data to personalise |
| | Unlimited video library | Perceived-value sweetener, not the reason to convert |

**4. It found the one genuine risk.** HR sync is already used free by 60% of
users, so gating it is a withdrawal, not an upsell — the "bait and switch" that
shows up in app-store reviews. The agent's mitigation was to grandfather existing
users for 60–90 days behind an in-app *"upgrade to keep this"* notice, converting
by warning rather than hard cutoff.

**5. It instrumented its own assumptions.** Free→Pro conversion segmented by
prior HR-sync users (tests the grandfathering call), DAU/MAU on the free tier as
the canary for growth cannibalisation, time-to-first-value for new Pro
subscribers, and NRR contribution to check whether $9.99 was underpriced against
the trainer-replacement story it had just argued for.

## What a human still owns

This is the reason the case study exists. The draft above is a good three days of
analysis delivered in minutes — and every load-bearing decision in it is still
unmade:

- **The price is asserted, not derived.** $9.99 arrived in the brief and the
  agent rationalised it beautifully. It never asked whether the trainer-
  replacement framing it invented actually supports $19.99. An agent optimises
  within the frame it's given; noticing that the frame is too small is the
  human's job.
- **"80% of positive reviews" is a sample of the already-converted.** It's
  evidence about the 15% who found the feature, and silent about the 85% who
  didn't. The agent treats it as demand; it may be selection bias.
- **It has no read on the trust cost.** Grandfathering HR sync is sound
  reasoning, but whether this particular community reacts to a takeaway with a
  shrug or a review-bombing is a judgement about people, and nothing in the
  telemetry contains it.
- **It cannot decide who to disappoint.** Positioning as an AI coach quietly
  concedes the casual-logger segment to free competitors. That's probably right.
  It's also a commitment someone has to be accountable for, and the agent has no
  stake in the outcome.

Which is the whole thesis in miniature: the agent got the analysis to the point
where the argument could start. It drafted; it doesn't get to sign.

*The blueprint this belongs to —
[Agentic PMM: everyone agrees product marketing belongs upstream](/perspectives/agentic-pmm).
On the discipline of tiering the work before automating it, see
[The GTM Factory](/perspectives/the-gtm-factory).*
