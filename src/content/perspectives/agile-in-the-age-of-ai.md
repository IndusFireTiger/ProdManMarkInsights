---
title: "Agile in the age of AI: when the machine writes the code, what's left for the humans?"
summary: "AI has collapsed the cost of producing software, and that breaks the old assumptions underneath Agile. But it doesn't retire Agile — it sharpens the question Agile was always really asking: with iteration nearly free, what is the scarce, human work that actually decides whether the product is worth building? A look at how AI is reshaping the SDLC and PDLC, with the pros, the cons, and what still belongs to people."
date: 2025-10-06
readingTime: "10 min read"
skill: "Applied AI in Product"
topics: ["Product Strategy", "Agile", "Applied AI", "Engineering"]
featured: false
draft: false
---

I've spent a good part of my career arguing against Waterfall — running a "Say
NO! to Waterfall" campaign, dragging teams toward shorter loops, smaller bets and
faster feedback. Agile won that argument years ago. So it's a little
disorienting to realise that the thing Agile was invented to fight — the high
cost of being wrong — has just been transformed again, this time by AI.

Agile made sense because building software was *expensive and uncertain*. If you
couldn't predict the right answer up front, you iterated toward it in small,
cheap steps. But AI has changed one of those variables dramatically: building a
working version of something is no longer expensive. A prototype that took a
sprint now takes an afternoon. Code that took a senior engineer a day, an
assistant drafts in minutes.

So the honest question isn't "is Agile dead?" — the cargo-cult ceremonies maybe,
but not the idea. The real question is sharper: **when the machine can produce the
software almost for free, what is the scarce human work that actually decides
whether the product is any good?** That's the question worth answering, because
it tells you where people should spend their attention — and where they
shouldn't.

## What AI actually changed in the SDLC

Start with the software development life cycle, because that's where the change
is most visible. AI now reaches into nearly every stage:

- **Coding** — assistants like GitHub Copilot, Cursor and Claude Code draft, refactor
  and explain code inline. GitHub's own research famously claimed developers
  completed a set task ~55% faster with Copilot. Agentic tools (Devin and its
  successors) go further, attempting whole tickets end to end.
- **Testing** — AI generates unit tests, proposes edge cases, and triages failures.
- **Review & docs** — pull-request summaries, automated review comments, and
  documentation drafted from the diff.
- **Ops** — incident summarisation, log analysis, and suggested remediations.

The pattern underneath all of it: **the cost of *producing* a candidate solution
has collapsed, while the cost of *deciding whether it's the right one* has not.**
The bottleneck moved. It used to sit at "can we build it?" Now it sits at "should
we have built it, is it correct, and do we understand what we shipped?"

That's a profound shift for a methodology whose entire premise was that building
is the expensive part.

## What it changed in the PDLC

The product development life cycle feels it just as hard, and arguably the change
is more strategic there:

- **Discovery** — AI synthesises user research, clusters feedback, and drafts
  hypotheses in hours instead of weeks.
- **Prototyping** — a product manager can now stand up a clickable, even
  functional, prototype without waiting for engineering capacity. Validation moves
  earlier and cheaper.
- **Market sensing** — AI accelerates the loop between shipping and hearing how the
  market responded, including across AEO/SEO/GEO surfaces where buyers increasingly
  discover products through AI answers, not blue links.

When discovery and prototyping get this cheap, the centre of gravity in product
work shifts away from *execution* and toward *judgement*: which problem, for whom,
and why this one over the ten others we could now build just as easily. Cheap
building makes the *choosing* the hard part.

## So does Agile still matter? Yes — but read it correctly

Here's where people get it wrong in both directions. One camp says AI makes Agile
obsolete; the other clings to two-week sprints and stand-ups as if nothing
changed. Both miss it.

Go back to the Agile Manifesto's actual values — *individuals and interactions,
working software, customer collaboration, responding to change.* Every one of
those gets **more** important when AI enters the room, not less:

- *Working software over documentation* — when AI can generate plausible-looking
  code that doesn't actually work, "does it run and solve the real problem?"
  becomes the only honest measure.
- *Responding to change* — when iteration is nearly free, the team that can absorb
  feedback fastest wins by an even wider margin.
- *Customer collaboration* — when anyone can build anything, the constraint is
  knowing what's worth building, which only the customer can tell you.

What *doesn't* survive is mechanical, cargo-cult Agile — the rituals performed
for their own sake. If a prototype takes an afternoon, a two-week sprint
boundary is an arbitrary speed limit. The principles endure; the ceremonies need
re-thinking around a faster loop. Saying NO to Waterfall was never about
worshipping Scrum — it was about shortening the distance between an idea and an
honest answer. AI just shortened it again.

## What really matters for humans to do

This is the part I care about most. If AI does the producing, the human role
doesn't disappear — it moves up the value chain to the things AI genuinely can't
own:

1. **Problem framing.** Deciding *what* to build and *why* — the judgement AI can
   inform but not make accountable for.
2. **Taste and quality judgement.** Knowing the difference between code (or a
   feature) that works in the demo and one that's actually right, maintainable
   and safe.
3. **Customer empathy.** Sitting with a real user's frustration and understanding
   what they couldn't articulate. AI summarises feedback; it doesn't *care* about
   the person behind it.
4. **Prioritisation under constraint.** When you *could* build everything, choosing
   the one thing that matters is harder, not easier — and it's a values call.
5. **Accountability.** When something ships and harms someone, "the AI wrote it"
   is not an answer. A human owns the outcome.

Notice these are exactly the things Agile's "individuals and interactions" value
was always pointing at. The methodology was right; AI just stripped away the
busywork that used to disguise where the real work lived.

## The pros and cons, honestly

It would be dishonest to sell this as pure upside. The evidence is genuinely
mixed, and the cons are real.

**The pros**
- **Speed of iteration** — prototypes and fixes that took days take hours; the
  feedback loop Agile prizes gets dramatically tighter.
- **Lower barrier to building** — domain experts and PMs can prototype directly,
  reducing the translation loss between idea and implementation.
- **Engineers freed from boilerplate** — less time on plumbing, more on
  architecture, edge cases and design.

**The cons**
- **Productivity gains are not guaranteed.** A 2025 randomised study by METR found
  experienced open-source developers were actually *slower* on familiar codebases
  with AI tools — while *believing* they were faster. The felt speed-up and the
  real one diverged. That gap is dangerous precisely because it's invisible.
- **Quality and security debt.** AI happily generates plausible code with subtle
  bugs and vulnerabilities. "Vibe coding" — Andrej Karpathy's half-joking term for
  accepting AI output without fully reading it — scales the production of code you
  don't understand, which is exactly the code that hurts you later. Google's DORA
  research has flagged that faster AI-assisted throughput can come with reduced
  delivery stability if review discipline slips.
- **Erosion of deep understanding.** A team that no longer writes its own
  foundations may lose the ability to debug them under pressure.
- **Review becomes the bottleneck — and the safeguard.** The work doesn't vanish;
  it concentrates in human review, testing and judgement. Skimp there and the speed
  is borrowed against future failure.

The throughline: **AI multiplies output, but it multiplies bad decisions just as
fast as good ones.** It's an amplifier, not a substitute for judgement.

## What I'd actually tell a team

Keep the Agile *principles* and retire the *theatre*. Shorten loops to match the
new cost of building — if validating an idea is now an afternoon, don't make it
wait for a sprint ceremony. Let AI produce; make humans *decide*. Invest the time
you save on building into the things that were always the real work: framing the
problem, judging quality, and staying close to the customer.

> AI didn't make engineering judgement less valuable. It made it the *only* scarce
> thing left. When anyone can build anything, the people who know what's worth
> building — and can tell good from merely plausible — are the whole game.

Saying NO to Waterfall was about refusing to bet big on being right up front.
That instinct matters more than ever now — because AI makes it trivially easy to
build the wrong thing faster than you've ever built anything. The discipline was
never about the speed of the build. It was always about the quality of the
choosing. That part still belongs to us.
