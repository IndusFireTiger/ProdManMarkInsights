---
term: "Selection bias"
aka: ["sampling bias"]
roles: ["Evidence & Metrics", "Go-to-Market", "Product"]
kind: "Deep"
short: "When the group you measured isn't representative of the group you're drawing conclusions about — because of how they ended up in your sample."
example: "\"The AI plan generator drives 80% of positive reviews.\" That 80% can only contain people who found the feature, tried it, liked it, and felt strongly enough to write a review. It was close to guaranteed regardless of how good the feature is."
related: ["survivorship-bias", "willingness-to-pay", "product-market-fit"]
appearsIn: ["/work/fitpulse-pricing-agent", "/perspectives/agentic-pmm"]
portfolio: true
learning:
  audience: ["Growth & Analytics", "Product Manager", "AI Product Manager", "Product Marketer"]
  level: advanced
  source: harvested
  module: "Evidence & inference"
  status: taught
---

## What it is

Any finding describes the group you actually measured. Selection bias is what
happens when that group was assembled by a process that filtered for the very
thing you're trying to measure — so the number looks like it's about everyone,
and is really about a self-selected few.

## Where people get it wrong

Not in the definition. Almost every product person can state it. The failure is
in *recognition*, because in practice the biased signal rarely arrives labelled
as a sample — it arrives as a **positive business metric**, in a deck,
supporting a decision someone already wants to make.

Review data is the classic disguise. So are NPS responses, survey returns,
community feedback, sales-call anecdotes, and anything sourced from your most
engaged users. Each is filtered twice: once by who encountered the thing, again
by who cared enough to respond.

The commercial cost is that the metric can't distinguish between explanations
that imply opposite decisions. If 85% of users don't use a feature, either they
never found it (a discovery problem — don't gate it, surface it) or they tried
it and it didn't help (don't anchor your pricing on it). The enthusiastic 80%
looks identical in both worlds.

## How to check

Ask one question of any flattering number: *who could not possibly be in this
sample?* If the answer is "anyone who didn't like it" or "anyone who already
left," you have a description of your fans, not your market.

The fix is usually cheap and rarely done — go ask the non-users. A prompt to the
silent majority separates the rival explanations in about a week.
