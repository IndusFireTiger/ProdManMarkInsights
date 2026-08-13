---
term: "Human in the loop"
aka: ["HITL", "keep an adult in the loop"]
roles: ["Applied AI", "Data & Governance", "Design & Learning"]
kind: "Deep"
short: "A design where a person retains the decision while the system does the work — and the loop is real only if the person can realistically say no."
example: "Agents draft, gather, correlate and monitor. Humans decide, approve, price and defend. Every artifact carries an agent's byline and a human's signature."
related: ["agentic-pmm", "plausible-versus-correct-gap", "protect-the-struggle"]
appearsIn: ["/perspectives/agentic-pmm", "/perspectives/evolving-ux-after-ai", "/work/ai-companion", "/work/fitpulse-pricing-agent", "/perspectives/agents-dont-give-you-hours", "/perspectives/fluency-is-free-now"]
portfolio: true
learning:
  audience: ["AI Product Manager", "Data & AI Governance", "UX / Product Designer", "Product Manager"]
  level: advanced
  source: harvested
  module: "Applied AI & responsibility"
  status: taught
---

## What it is

An accountability structure more than a UI pattern. The system generates; a named
human approves; that human is answerable for the outcome. It exists because
generation can be delegated and responsibility can't.

## Where people get it wrong

**Rubber-stamping.** The most common failure. When the system is right most of
the time and the reviewer is busy, approval degenerates into a click. The loop is
formally intact and functionally absent — arguably worse than no review, because
it manufactures the appearance of oversight.

**Putting the human at the wrong point.** Review placed after the expensive
commitment is theatre. The loop has to sit where refusal is still cheap; that's
the whole argument for a positioning gate *before* budget rather than a sign-off
before launch.

**Reviewing output without provenance.** A reviewer shown a polished draft and no
sources is being asked to judge fluency. Confident and wrong is precisely the
failure mode of these systems — see [the plausible-versus-correct
gap](/marginalia/plausible-versus-correct-gap).

**Assuming a loop for experts works for novices.** In learning contexts the
reviewer may be a child or a parent. Oversight designed for a professional
collapses when the person in the loop can't evaluate what they're approving.

## How to check

Count the refusals. If the reviewer has never sent anything back, the loop isn't
working — either the system is flawless, which it isn't, or nobody is really
reading.

Then check the incentive: does the reviewer have time budgeted, and does anything
bad happen to them if they approve something wrong? If not, you have a signature,
not a safeguard.
