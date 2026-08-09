---
term: "The plausible-versus-correct gap"
roles: ["Applied AI", "Design & Learning"]
kind: "Coined"
short: "The distance between an answer that reads as right and one that is right — and the fact that fluency, the signal humans use to judge, no longer tracks accuracy."
example: "Every heuristic people use to assess trustworthiness — confidence, coherence, correct register — is now cheap to produce and independent of whether the content is true."
related: ["human-in-the-loop", "trust-calibration", "collapsed-complexity"]
appearsIn: ["/perspectives/evolving-ux-after-ai", "/perspectives/agile-in-the-age-of-ai"]
portfolio: true
learning:
  audience: ["AI Product Manager", "UX / Product Designer", "Data & AI Governance"]
  level: advanced
  source: harvested
  module: "Applied AI & responsibility"
  status: taught
---

For most of computing, a wrong answer looked wrong. Errors surfaced as crashes,
empty results or obvious nonsense, and the interface could stay quiet about
confidence because incorrectness announced itself.

Generative systems break that. The output is fluent whether or not it's correct,
and fluency was the cue people had been using all along. Worse, the failures
cluster exactly where verification is hardest — plausible citations, plausible
code, plausible reasoning about a domain the reader doesn't know well enough to
check.

The design consequence: interfaces now have to carry the uncertainty the content
no longer signals. That means showing provenance, marking confidence honestly,
and making the checking path cheaper than the accepting path — because whichever
is cheaper is what people will actually do.

The organisational consequence is that review becomes both the bottleneck and the
safeguard, and pretending otherwise just moves the failure downstream.
