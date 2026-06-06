---
title: "Designing for a machine that can finally understand you: evolving UI/UX"
summary: "Almost every interface convention we know — menus, forms, buttons, navigation — exists to compensate for one limitation: the computer couldn't understand what you meant. AI removes that limitation, and that quietly invalidates a lot of design that was solving the old problem. But the answer isn't 'put a chat box on everything.' The real shift is from UI as the place you operate the software to UI as the place you steer, verify and trust a system that operates it for you. A look at what changes, what's a trap, and what endures."
date: 2026-06-07
readingTime: "9 min read"
topics: ["Product Strategy", "UX/UI", "Applied AI", "Design"]
featured: false
draft: false
---

For thirty years, almost every interface convention we take for granted has been
solving the same hidden problem: **the computer could not understand what you
meant.** Menus, toolbars, forms, dropdowns, wizards, navigation hierarchies — they
exist because the machine couldn't take "book me the cheapest flight that gets me
home before my daughter's recital" and act on it. So we built a vast translation
layer. The user learns to decompose their intent into clicks the software can
parse, and the software learns to expose its capabilities as things you can point
at. The graphical user interface is, at heart, a workaround for a machine that
couldn't comprehend a sentence.

AI just removed that limitation. And when you remove the constraint a design was
built to compensate for, the design doesn't get *better* — it gets partly
*obsolete*. That's the uncomfortable thing most product teams are dancing around:
a lot of our hard-won UX craft was solving a problem that is quietly going away.

## What the old UI was actually for

It's worth being precise about what we built and why, because it tells you what to
keep and what to retire.

- **Discoverability** — you can't ask for what you don't know exists, so we laid
  capabilities out visually: menus, toolbars, settings pages. The UI was a *map of
  what's possible.*
- **Constraint** — dropdowns, date pickers and validated fields stopped you
  entering things the system couldn't handle. The UI was a *fence around the
  machine's narrowness.*
- **Translation** — every multi-step flow took a human intention and chopped it
  into machine-sized pieces. The UI was an *interpreter.*

Notice that two of those three jobs — constraint and translation — exist *only*
because the computer was rigid and literal. An AI layer that understands intent,
tolerates ambiguity, and asks a clarifying question when it's unsure makes large
parts of that scaffolding unnecessary. The fence and the interpreter were never
the point; they were the tax we paid for talking to something that couldn't
listen.

## The obvious answer is a trap

So the instinct across the industry is: rip out the interface, drop in a chat box,
let people *just say what they want.* Every product now has a sparkle icon and a
text field bolted to the corner.

This is mostly wrong, and it's wrong in instructive ways.

- **Natural language is high-effort.** Typing a precise paragraph is more work than
  clicking a button you can see. For frequent, well-defined tasks, a blank prompt
  is a *downgrade* — you've replaced one recognised gesture with an essay.
- **Discoverability collapses.** A chat box is a map of nothing. New users stare at
  a blinking cursor with no idea what the system can do. We spent decades making
  software's capabilities *visible*, and "just ask it" makes them invisible again.
- **Ambiguity and non-determinism.** The same request can produce different results
  twice. Direct manipulation had a quiet virtue we never named: it was
  *predictable.* You knew exactly what the button did.

The lesson isn't "natural language is bad." It's that **the chat box solves the
translation problem while reintroducing the discoverability problem we'd already
solved.** Swapping one limitation for another isn't evolution. It's a lateral move
dressed up as a revolution.

## The actual shift: from operating to steering

Here's the reframing I find most useful. The old interface was the place you
*operated* the software — every outcome was the direct sum of your clicks. The new
interface is increasingly the place you *steer, verify and trust* a system that
does the operating for you.

That changes the job of UX/UI at a fundamental level. The hardest design problems
are no longer "how does the user perform this action?" They become:

1. **Intent capture.** How does someone express what they want with the least
   effort and the least ambiguity — sometimes in words, sometimes by pointing,
   usually both? The winning interfaces are *hybrid*: language for expressing
   novel intent, direct controls for the common, the precise and the
   irreversible.
2. **Legibility.** When the system acts on your behalf, you need to see *what it
   understood* and *what it's about to do* — before it does it. The new equivalent
   of a well-labelled button is a clearly previewed action you can confirm or
   correct.
3. **Correction.** Because the system will sometimes be wrong, the interface's most
   important surface is the one that lets you say "no, not that" cheaply — undo,
   refine, constrain, take the wheel back. A design that makes correction expensive
   makes the whole product untrustworthy.
4. **Trust calibration.** The UI has to help the user know *when to trust the
   output and when to check it* — surfacing confidence, sources, and the line
   between "this is fact" and "this is the model's plausible guess."

None of these were central design problems five years ago. All of them are now the
whole game.

## Generative and adaptive interfaces

There's a further move that follows directly. If the system understands intent,
the interface no longer has to be a single static layout designed for the average
user. It can be *assembled* — the right controls, for this person, for this task,
right now. A novice and an expert looking at the same feature might see genuinely
different surfaces; a complex tool might compose the three controls you actually
need instead of the two hundred it *could* show.

This is genuinely exciting and genuinely dangerous. The upside is interfaces that
finally fit the person instead of the average. The danger is that a UI which
rearranges itself destroys the thing direct manipulation gave us for free:
**spatial memory and predictability.** Users build muscle memory; "the button is
always there" is a feature, not a limitation. An interface that reshuffles itself
every session is exhausting, no matter how clever the personalisation. The craft
will be in knowing what must stay *stable and learnable* and what can safely
*adapt* — and most teams will get that boundary wrong before they get it right.

## The honest pros and cons

It would be dishonest to sell this as pure progress, so let me be even-handed.

**The pros**
- **Intent over mechanics.** Users can finally express goals instead of decomposing
  them into steps. The translation tax — the single biggest source of friction in
  software — drops dramatically.
- **Accessibility leaps forward.** Language and multimodal input open software to
  people whom rigid GUIs excluded — different abilities, different literacy levels,
  different languages. Done well, this is the most democratising shift in
  interfaces since the mouse.
- **Collapsed complexity.** Deep, capable tools no longer have to overwhelm
  newcomers with everything at once.

**The cons**
- **Loss of predictability.** Non-deterministic systems behind the UI mean the same
  action can yield different results. For anything high-stakes, that's a serious
  regression from direct manipulation.
- **Over-trust.** A confident, fluent interface invites people to accept output they
  shouldn't. The better the UI *feels*, the more dangerous an unverified wrong
  answer becomes. Good design used to mean reducing friction; here, the right
  amount of friction — a confirmation, a visible source — is a safety feature, not
  a flaw.
- **Discoverability debt.** Lean too hard on "just ask" and users never learn what
  the product can do. Capability becomes folklore.
- **The plausible-versus-correct gap.** AI produces output that *looks* right with
  the same polish as output that *is* right. The interface now carries the burden of
  helping users tell the two apart — a burden buttons never had to bear.

The throughline is the same one I keep coming back to with AI generally: **it's an
amplifier, not a substitute for judgement.** A better-understood interface
amplifies good intent and bad intent, correct action and wrong action, with equal
fluency. The design job is to make the good path easy and the wrong path *visible
and reversible.*

## What endures

For all the upheaval, the foundations don't move, and it's worth saying so plainly
because it's where the discipline stays sane. **Clarity, feedback, user control and
trust** were the pillars of good interaction design before AI and they are the
pillars after — AI just raises the stakes on every one of them. Feedback matters
*more* when a system acts autonomously. Control matters *more* when the system can
be wrong. Clarity matters *more* when the output is fluent enough to fool you.

What dies is the *theatre* — the assumption that a good interface is necessarily a
dense grid of buttons, that more visible controls means more power, that the user's
job is to learn the software's internal model. What survives is the actual point:
helping a human accomplish their intent with confidence and as little friction as
the task safely allows.

> AI didn't make interface design less important. It moved the work up a level —
> from *teaching people to operate machines* to *helping people direct systems that
> operate themselves.* The product that wins won't be the one with the cleverest
> chat box or the most buttons. It'll be the one where the user always knows what
> the system understood, what it's about to do, and how to stop it.

The first era of UX was about compensating for a computer that couldn't understand
us. That era is ending. The next one is about something harder and more human:
designing the trust, the legibility and the control that let people confidently
hand work to a system that finally can. The screen stops being a control panel and
becomes a conversation with a capable, fallible collaborator — and the whole craft
of design is learning to make that conversation honest.
