---
term: "Trust calibration"
roles: ["Applied AI", "Design & Learning", "Data & Governance"]
kind: "Deep"
short: "Designing so a user's confidence in a system matches its actual reliability — neither over-trusting fluent output nor dismissing a system that is usually right."
example: "Over-trust and under-trust are both failures, and they cost differently. One ships a wrong answer into a decision; the other wastes a capability the organisation paid for."
related: ["plausible-versus-correct-gap", "human-in-the-loop", "intent-over-mechanics"]
appearsIn: ["/perspectives/evolving-ux-after-ai", "/work/ai-companion", "/perspectives/the-decision-is-the-deliverable", "/perspectives/agents-dont-give-you-hours", "/perspectives/fluency-is-free-now"]
portfolio: true
learning:
  audience: ["UX / Product Designer", "AI Product Manager", "Data & AI Governance"]
  level: advanced
  source: harvested
  module: "Applied AI & responsibility"
  status: confident
---

## What it is

The alignment between how much a user trusts a system and how much it deserves.
Calibration is the goal — not maximising trust, which is what most product
interfaces are unconsciously optimised to do.

## Where people get it wrong

**Treating trust as something to maximise.** Onboarding, marketing copy and
confident phrasing all push trust upward. In a system that is right 85% of the
time, driving trust toward 100% is actively harmful; the product's job is to make
the remaining 15% visible.

**Signalling confidence uniformly.** A system that responds in the same assured
register whether it is certain or guessing teaches users that its tone carries no
information. Once that lesson is learned, honest uncertainty signals get ignored
too.

**Confusing a disclaimer with calibration.** A blanket "AI can make mistakes"
notice is legally tidy and behaviourally inert. It applies equally to every
output, so it distinguishes nothing, and users filter it within a day.

**Ignoring the recovery path.** Calibrated trust depends on what happens when the
system is wrong. If errors are cheap to spot and cheap to undo, users can afford
appropriate trust. If errors are silent and expensive, no amount of interface
honesty helps.

## How to check

Ask users to predict, before seeing the answer, how likely the system is to be
right. The gap between their estimate and measured accuracy is the calibration
error — and its *direction* tells you whether to build guardrails or build
confidence.

Then check whether your confidence signals actually vary. If they don't, you
aren't communicating uncertainty; you're decorating it.
