---
title: "Agents don't give you hours, they give you attention: bridging from the product job you have to the craft it should be"
summary: "The third piece in a series: having named the counterfeits and the craft, this is the bridge between them. The obstacle was never that PMs don't know what good looks like — it's that the coordination chaos consumes the exact mental state the judgement work requires. Which is an argument for delegating to agents on a specific principle: the decision record is the delegation contract, agents fill every field except confidence, the call, and the name. Includes a six-agent roster, the four ways this backfires, and which drudgery to keep on purpose."
date: 2026-08-14
readingTime: "14 min read"
skill: "Applied AI in Product"
topics: ["Applied AI", "Agentic AI", "Product Craft", "Operating Model", "Decision Making"]
featured: false
draft: false
---

Two pieces ago I argued that most product careers accumulate
[the wrong experience](/perspectives/what-product-management-is-not) — backlog
craft, stakeholder translation, launch choreography — because those things are
legible and judgement isn't. The
[companion piece](/perspectives/the-decision-is-the-deliverable) argued the
positive case: four crafts, and a decision record to make judgement countable
enough to survive a performance review.

Both pieces have the same hole in them, and a fair reader would have found it
immediately. **Nobody is doing the counterfeit work because they think it's the
job.** They're doing it because it is 11 hours long and arrives whether or not
they consent to it. Telling a PM carrying four teams and an escalation queue to
"spend the marginal hour on the decision record" is advice with a missing
premise, which is the marginal hour.

So this is the bridge. Not the aspiration and not the diagnosis — the mechanism
by which someone standing in the first piece gets to the second one. The mechanism
is delegation, the delegates are agents, and the thing being bought back is not
what everyone assumes.

## What the chaos actually costs you

Reconstruct a normal Tuesday from the calendar and the Slack history. Two
ceremonies. Four "quick questions" that each cost twenty minutes and a thread. A
stakeholder who wants to know why their thing slipped. The same status,
rewritten three times for three audiences. Forty minutes reconstructing why a
decision was made in March, because the reasoning lives in a thread nobody can
find. An escalation that turns out to be a documentation gap. Ninety minutes of
meetings whose only artefact is more meetings.

Eleven hours. Genuinely busy. Not one decision made.

The standard framing is that this is a *time* problem, and it leads to time
solutions — better calendar hygiene, focus blocks, saying no to meetings. Those
help at the margin and they've been recommended for twenty years without fixing
anything, which is usually a sign that the framing is wrong.

The framing is wrong. **The scarce resource is not hours, it's a particular
mental state** — the one where you can hold an uncertain trade-off in your head
long enough to see its shape, notice the assumption underneath it, and feel which
way you'd bet. That state takes twenty minutes to enter and one Slack notification
to leave. It is the *only* state in which the four crafts happen, and it is
precisely what the interrupt load destroys.

This changes what a tool has to do to be useful, and it's the practical test I'd
apply to every agent below:

> A tool that saves forty minutes of typing gives you forty fragmented minutes.
> A tool that removes an entire *class of interruption* gives you back the state
> — and the state is worth more than the minutes it occupies.

Judge agent adoption by **how many interrupt classes it ends**, not by hours
saved. Most PM tooling optimises the wrong quantity: it makes the fragments
faster and leaves the fragmentation intact. Hours are linear. Attention isn't.

## The chaos inventory

The energy drains are not mysterious; they're the same eight in almost every
product organisation. What differs is which ones you've accepted as immovable.

| The drain | Why it's expensive | What an agent absorbs | What must never leave your hands |
| --- | --- | --- | --- |
| **Status manufacturing** | Same truth, five audiences, five formats, weekly | Generation of all five from one source of record | What you choose to say is going badly |
| **The interrupt queue** | Each ask costs the state, not just the minutes | Triage, dedup, drafting the answer, routing | The ones that are actually a disguised decision |
| **Context reassembly** | "Why did we decide X?" — hours of thread archaeology | Decision memory, instantly queryable | Deciding whether the old reasoning still holds |
| **Meeting residue** | Notes, actions, follow-ups, chasing | Capture, extraction, chase, close-out | The judgement calls made in the room |
| **Requirement intake** | Requests arrive as solutions, priced at nothing | Recovering the problem, matching duplicates and the no-list | The refusal, and the reason for it |
| **Evidence drudgery** | Rung one of the ladder is free and routinely unread | Continuous read of tickets, transcripts, losses, reviews | Which pattern is load-bearing |
| **Launch readiness** | Checklist coordination across six functions | Tracking, nagging, assembling, drafting | Whether it should ship at all |
| **Metric assembly** | Report-building crowds out noticing | Assembly, anomaly flagging, tripwire watching | What the number is a proxy for, and how it'll be gamed |

Read the right-hand column downward and you have the job. Read the third column
downward and you have roughly 60–70% of a PM's week, all of it real work, none of
it requiring a person with accountability to do it.

## The delegation contract is the decision record

Here's the part that makes this concrete rather than another "let AI handle the
busywork" post. The hard question in delegation is never *what can it do* — it's
**where the line goes**, and most teams draw it by vibes, which means it moves
whenever someone is tired.

The line is already drawn. It's the decision record from the previous piece. Take
its eight fields and mark each one:

| Field | Who fills it | Why the line falls there |
| --- | --- | --- |
| The question, dated | **Agent drafts** | Surfacing that a decision is pending is retrieval, not judgement |
| Options, including "do nothing" | **Agent drafts** | Option *generation* is where models are genuinely strong |
| The load-bearing belief | **Agent proposes, human picks** | Which assumption carries the weight is a taste call |
| Confidence | **Human only** | A model's stated confidence is about its text, not your market |
| What would change my mind | **Human only** | Pre-commitment is worthless if delegated — it exists to bind *you* |
| The call, and whose it is | **Human only** | This is the deliverable; delegating it deletes the role |
| Reversal cost | **Agent estimates, human confirms** | Mostly knowable; occasionally political in ways a model can't see |
| Expires / early trigger | **Agent drafts and then monitors** | The perfect agent job: nobody has ever done it reliably |

Three fields are human-only, and they're the same three in every case:
**confidence, the call, and the name against it.** That's the contract, and it
generalises past this template — agents draft, gather, correlate and monitor;
humans decide, approve, price and defend. Every artefact carries an agent's
byline and a human's signature, which is what makes the loop a real
[human in the loop](/marginalia/human-in-the-loop) rather than a rubber stamp: the
person has to be able to realistically say no, which means they need the time and
the standing to.

The bonus is that this contract solves the legibility problem from a second
direction. Agents are *artefact machines*, and the artefact they're best placed to
produce is the one that makes your judgement visible. The thing you never had time
to write is the thing they can draft eight-tenths of.

## A roster for the PM side

The [Agentic PMM](/perspectives/agentic-pmm) piece laid out five upstream agents
for the product *marketing* seat — market intelligence, positioning, pricing,
enablement, PMF health. That was an argument about a missing seat in discovery
and the staffing arithmetic that keeps it empty. This is the adjacent problem: not
a missing seat, but an occupied one whose attention is being consumed.

Six agents, ordered by how much attention they return per unit of setup. Each one
should be judged on the interrupt class it ends.

**1. The Context Keeper.** Maintains the decision log; answers "why did we decide
X, and what did we believe at the time" from the record rather than from memory or
thread archaeology. *Ends:* context reassembly, and the recurring re-litigation of
settled calls. *Introduces:* a single point of failure if the log is thin — it can
only remember what was written down, so it works exactly as well as your discipline
in the first month.

**2. The Signal Reader.** Continuously reads support tickets, call transcripts,
churn interviews, loss reasons, reviews and forum threads; clusters them into
candidate problems with frequency, segment and revenue attached. *Ends:* the
periodic "let's do a research sprint" scramble, by keeping rung one of the
evidence ladder permanently warm. *Introduces:* the temptation to accept its
clustering as the problem definition — see the drudgery dividend below.

**3. The Intake Agent.** Converts inbound requests into problem statements:
recovers the problem underneath the proposed solution, checks it against the
no-list and existing records, attaches who else has asked and what it's worth.
*Ends:* the interrupt queue as an interrupt — it becomes a triage list you read
twice a day. *Introduces:* distance from the requester, which is a real loss;
some of those conversations are how you learn what's actually happening.

**4. The Broadcaster.** One source of truth, audience-shaped outputs: the exec
version, the engineering version, the customer-facing version. *Ends:* status
manufacturing, the purest waste on the list. *Introduces:* smoothness — a model
will phrase bad news more diplomatically than it deserves, so the "what's going
badly" line stays yours to write.

**5. The Watchman.** Holds the expiry dates and early-trigger conditions from
every decision record, monitors the metrics attached to them, and tells you when
one fires. *Ends:* nothing, actually — it *creates* a capability that has never
existed. This is the highest-leverage agent on the list, because the craft of
[re-deciding](/marginalia/pmf-decay) is the one no organisation has a mechanism
for. Decisions currently expire silently, and the review happens only when someone
is brave. Automate the trigger and the bravery is no longer required.

**6. The Red Team.** Runs a pre-mortem against a decision record: the strongest
case for the opposite call, what would have to be true, who gets hurt, what the
competitor does next. *Ends:* nothing — it adds friction on purpose, which is the
point. *Introduces:* the sharpest risk in the set, because a model can generate
fluent objections indefinitely, and fluency is not seriousness. Cap it at three
objections and make it rank them.

Start with the Context Keeper and the Broadcaster. They're the least glamorous,
they need the least trust, and between them they end two interrupt classes in
week one. The Watchman is where the actual role change happens; get there by
month three.

## Four ways this backfires

The honest version of this argument has to include the failure modes, because
three of the four are more likely than the success case if nothing else changes.

**1. You automate the counterfeits and keep doing them.** This is the default
outcome and it deserves the bluntest possible statement: **a
[feature factory](/marginalia/feature-factory) with agents is a faster feature
factory, not a learning organisation.** Automating ticket-writing when
ticket-writing was never the job means you now produce the wrong artefact at four
times the rate, with better formatting, and the operating metrics look even
healthier. The same trap is documented one function over — automating launch
production makes the [launch factory](/marginalia/launch-factory) cheaper to
sustain and removes the pain that would have forced the upstream fix. Automation
doesn't correct a misallocation. It funds it.

**2. The reclaimed capacity gets reabsorbed.** Suppose it works and you recover
ten hours. The organisation has an unbounded appetite for coordination, and an
empty PM calendar is read as spare capacity, not as thinking time. Without a
pre-commitment, those hours refill with a fifth team, three more stakeholders, or
a "can you also own" conversation, and you end up doing exactly the same job at
higher throughput. **Decide what the recovered time is for, in writing, before you
recover it** — two decision records a month, five customer conversations a week,
one cancellation a quarter — and defend it as you'd defend a delivery commitment.
This is the whole ballgame and it's a political act, not a productivity one.

**3. You act on plausible synthesis.** Everything these agents produce is
fluent, well-structured and confident, including the parts that are wrong. The
[plausible-versus-correct gap](/marginalia/plausible-versus-correct-gap) is the
governing risk of the whole arrangement, and the discipline it demands is
[trust calibration](/marginalia/trust-calibration): knowing, per agent, what
you're allowed to act on directly and what needs verification. My working rule —
anything that will appear in a decision record's *evidence* section gets spot-checked
against source at least until an agent has earned a track record, and anything a
customer or an executive sees gets read in full by a human who will be blamed for
it.

**4. You automate away your own apprenticeship.** The subtlest one. Some of the
drudgery *is* the learning. Reading fifty support tickets yourself is tedious and
it is also how you develop the pattern recognition that lets you smell a bad
roadmap item in ten seconds. Hand the reading to the Signal Reader in year one and
you get the summary without the intuition — you have
[collapsed the complexity](/marginalia/collapsed-complexity), and the steps that
used to teach you what was happening have disappeared along with the effort.

Learning-product designers have a rule for exactly this:
[protect the struggle](/marginalia/protect-the-struggle) — adapt the difficulty,
but never remove the effort that produces the understanding. It was written about
learners and it applies without modification to your own expertise. So keep some
work on purpose, and keep it deliberately rather than by accident:

- **Customer conversations.** Never delegate. The transcript is not the
  conversation; the hesitation before the answer is where the information is.
- **The first read of anything surprising.** Summaries are fine for the tenth
  churn interview and dangerous for the first one that contradicts you.
- **Writing your own position.** The draft is the thinking. Editing an agent's
  position gives you a position you can defend socially but not under pressure.
- **The no.** Refusal is a skill that only develops by being practised with the
  person in front of you.

Rough heuristic: **delegate the volume, keep the frontier.** Where the work is
representative and repetitive, hand it over. Where it's novel, contradictory, or
where you'd be embarrassed not to have first-hand knowledge, do it yourself even
though a machine could.

## The bridge, in three stages

None of this requires an AI strategy, a platform team, or permission. It requires
sequencing, because trust is earned per agent and the failure modes above compound
if you move too fast.

**Stage 0 — personal, weeks 1–6. No permission needed.** Context Keeper and
Broadcaster only. Everything runs on your own material: your decision records,
your notes, your status. Nothing an agent produces reaches another human without
you reading it in full. What you're proving: that the interrupt classes actually
end, and that you can tell when the output is wrong. What you're building: the
decision log the later agents depend on. Most people quit here because the first
month is setup with no dividend, which is also why the people who don't quit end
up two years ahead.

**Stage 1 — team, months 2–4.** Add the Intake Agent and the Signal Reader, and
make the decision log the team's shared artefact rather than your private one. The
Watchman comes online once there are enough records to monitor. What you're
proving: that decisions get made faster and revisited on schedule, and that the
team can see why things were decided without asking you. This is the stage where
the role visibly changes — you stop being the routing layer, which is also the
stage where you find out how much of your standing came from being the routing
layer.

**Stage 2 — operating model, months 4+.** Now the argument becomes structural, and
it connects to the [synthetic quad](/marginalia/synthetic-product-quad): if
discovery can be staffed with agent-held seats for market context and
commercialisation, and the PM's coordination load is largely absorbed, the
constraint on the whole system moves to problem selection and refusal — the two
things that were always scarce and are now the *only* things that are. That's a
different operating model, not a more efficient version of the current one, which
is the argument the
[scarcity piece](/perspectives/ai-product-operating-model) makes at length.

## What the role becomes

Be honest about the destination, including the uncomfortable parts.

The coordination-heavy PM role is going to compress. When one person plus a
delegated agent staff can carry the surface area that took three, organisations
will notice, and they will not respond by giving everyone more thinking time. The
number of seats where the job is *routing* falls. That's the bad news and there's
no version of this essay where it isn't true.

What expands is the scope per remaining seat, and the nature of what those seats
are for. A PM who has genuinely made this transition looks less like a delivery
coordinator and more like a **general manager of a decision function**: fewer
things owned, each much larger; a portfolio of open bets with expiry dates; a
visible record of calls made, calls killed and calibration over time; an agent
staff producing the evidence and the artefacts; and personal, unmediated contact
with customers, protected on purpose.

The title survives. The job description inverts. And the thing that determines
which side of the compression you land on is not tool fluency — the tools are
three months of learning, and everyone will have them. It's whether you spent the
recovered attention on the judgement work or let it be reabsorbed. That decision
is being made right now, mostly by default, by people who think they're just
trying out some tooling.

Agents don't give you hours. Hours were never the constraint — a decade of
full calendars produced the careers the first piece described. What they can give
back, if you claim it deliberately and defend it politically, is the state of
mind in which the actual job is possible.

Then it's on you to do the job.

---

*Third in a series:
[Ten years of the wrong experience](/perspectives/what-product-management-is-not)
(the counterfeits) →
[The decision is the deliverable](/perspectives/the-decision-is-the-deliverable)
(the craft) → this piece (the bridge) →
[Fluency is free now](/perspectives/fluency-is-free-now) (the faculty: what you
spend the reclaimed attention on, and why discernment is what an AI-native
company erodes first). The product-marketing counterpart, with a
five-agent upstream roster and the drafts-versus-signs boundary worked through in
detail, is [Agentic PMM](/perspectives/agentic-pmm); the operating-model argument
underneath all of it is
[AI product management: the legacy model was built around scarcity](/perspectives/ai-product-operating-model).*
