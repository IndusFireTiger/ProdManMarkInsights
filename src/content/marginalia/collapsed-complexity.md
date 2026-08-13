---
term: "Collapsed complexity"
roles: ["Design & Learning", "Applied AI"]
kind: "Coined"
short: "When a multi-step expert workflow becomes a single sentence — and the steps that used to teach the user what was happening disappear along with the effort."
example: "The old flow was tedious and it was also a curriculum: each step showed a bit of the model underneath. Compress it and the task gets easier while the user's grasp of it gets thinner."
related: ["discoverability-debt", "intent-over-mechanics", "protect-the-struggle"]
appearsIn: ["/perspectives/evolving-ux-after-ai", "/perspectives/agents-dont-give-you-hours"]
portfolio: true
learning:
  audience: ["UX / Product Designer", "AI Product Manager", "Learning Designer"]
  level: advanced
  source: harvested
  module: "Interface after AI"
  status: taught
---

Compressing a fifteen-step workflow into one instruction is a genuine win, and it
has a cost that shows up later. Those steps carried incidental instruction: doing
them repeatedly taught users the structure of the system — what the objects were,
how they related, why an operation sometimes failed.

Remove the steps and you remove the teaching. Users become fluent at *asking* and
progressively less able to evaluate what comes back, which matters precisely when
the system is wrong and the interface looks equally confident either way.

This isn't an argument for artificial friction. It's an argument for deciding
*which* complexity was load-bearing. Some steps were pure tax and should go.
Others were the user's model of the domain, and removing them creates a
dependency that feels like ease right up until judgement is required.

The related question in learning products is sharper still, where the struggle
being removed is the entire mechanism of the product — see [protect the
struggle](/marginalia/protect-the-struggle).
