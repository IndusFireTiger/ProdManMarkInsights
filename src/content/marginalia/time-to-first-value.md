---
term: "Time to first value"
aka: ["TTFV", "time to value"]
roles: ["Evidence & Metrics", "Product", "Go-to-Market"]
kind: "Deep"
short: "How long from signup until a user gets the thing they came for — the single best early predictor of whether they'll still be there in ninety days."
example: "For a new Pro subscriber it isn't when they open the app; it's when they receive an AI-generated plan and act on it. Everything before that is setup, not value."
related: ["net-revenue-retention", "pmf-decay", "product-market-fit"]
appearsIn: ["/perspectives/agentic-pmm", "/work/fitpulse-pricing-agent"]
portfolio: true
learning:
  audience: ["Growth & Analytics", "Product Manager", "Customer Success", "Product Marketer"]
  level: practitioner
  source: harvested
  module: "Metrics that matter"
  status: taught
---

## What it is

The interval between a user arriving and a user receiving the outcome they
signed up for. It's a leading indicator in a field crowded with lagging ones —
it moves months before retention does, which makes it one of the few metrics you
can still act on when it worsens.

## Where people get it wrong

**Defining "value" as an action inside the product.** Activation events get
chosen for measurability — account created, integration connected, first login.
Those measure *setup*. Value is the moment the user gets the result they wanted,
which is usually further downstream and harder to instrument. Measuring the easy
proxy produces a healthy chart and an unhealthy funnel.

**Averaging it.** The mean hides the shape. A product where most users reach
value in a day and a third never do has the same average as one where everyone
takes a week, and the two demand completely different responses. Look at the
distribution and the never-reached tail.

**Measuring only survivors.** TTFV computed over users who eventually reached
value excludes everyone who gave up — [survivorship
bias](/marginalia/survivorship-bias) built directly into the metric. The people
who never arrive are the population you most need to see.

## How to check

Write down the sentence a user would say when they got what they came for. If it
sounds like a product event rather than an outcome, you're measuring setup.

Then track it by cohort, not in aggregate. Rising TTFV for recent cohorts against
a stable overall average is one of the earliest visible signals of
[PMF decay](/marginalia/pmf-decay).
