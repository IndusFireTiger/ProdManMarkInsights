---
title: "The core that won't sit still: student management systems and architecture in Australian higher education"
summary: "Every Australian university runs on a student management system most people never see — until it breaks. It is the hardest product in the sector to build, the riskiest to replace, and the one being quietly re-architected from a monolithic system of record into a composable student lifecycle. This is the landscape, the vendor bets, and the product lessons that travel beyond it."
date: 2025-10-20
readingTime: "10 min read"
skill: "Product Strategy & Vision"
topics: ["EdTech", "Product Strategy", "Enterprise Architecture", "Higher Education", "Composable Systems"]
featured: false
draft: false
---

Ask a vice-chancellor what their most important piece of software is and you'll
hear about the learning management system, the new CRM, maybe the AI tutor the
board keeps asking about. Almost no one names the **student management system** —
the SMS, sometimes called the student information system. Yet it is the one
piece of software that, if it stopped for a day, would stop the institution.
Enrolments freeze. Fees don't post. Government reporting lapses. Visas for
international students fall out of compliance. The SMS is the university's
system of record for the entire relationship with a student, and like all good
infrastructure it is invisible right up until the moment it isn't.

That invisibility is exactly why it's worth looking at closely. The SMS is, to
my mind, the hardest enterprise product in the sector — and right now it's in
the middle of an architectural shift that mirrors a pattern I keep seeing
everywhere: a monolithic *system of record* being pulled apart into a
*composable lifecycle*. The Australian higher-ed sector is a particularly sharp
place to watch it happen, because the constraints here are unusually severe.

## What an SMS actually has to carry

Strip away the branding and an SMS owns the full **digital student lifecycle**:
recruitment and admissions, offers and acceptance, enrolment and re-enrolment,
course and program structures, timetabling and assessment, fees and financial
aid, results and progression, completions and graduation, and the handover to
alumni. Each of those is a product in its own right. Stitched into one system of
record, they become something far harder than the sum of the parts — because the
data has to stay consistent across all of them, in real time, for a population
that turns over by a third every year.

Now layer on what makes the *Australian* version distinctive: a compliance spine
that is not optional, not configurable away, and not forgiving of error.

- **TCSI** — the *Transforming the Collection of Student Information* platform —
  replaced the long-running HEIMS reporting system from 2020, moving provider
  reporting to the Department of Education onto business-to-government (B2G) APIs.
  The SMS now has to push student, course, completion and load data to government
  *directly from the system of record*, with a minimum of manual handling. That
  changed the SMS from something that periodically *exported* a return into
  something that has to *integrate* with the Commonwealth as a live API client.
- **HELP and the loan program** — HECS-HELP, FEE-HELP and the rest — mean the SMS
  is also a financial system reconciling student debt with government, against the
  **Unique Student Identifier** that now follows every learner.
- **The ESOS regime** — CRICOS registration, PRISMS, and the confirmation-of-enrolment
  machinery for international students — means the SMS is, in effect, part of the
  border. Get an international student's enrolment status wrong and you've created
  a visa-compliance problem, not just a data-quality one.
- **TEQSA** standards sit over all of it, expecting the institution to evidence
  what its systems assert.

This is the part outsiders underestimate. A consumer product can ship an
80%-correct feature and iterate. An SMS feature that's 80% correct on
international student compliance is a regulatory incident. The cost of being
wrong is structurally asymmetric, and that asymmetry shapes every design and
buying decision the sector makes. It is why this category moves slowly, why
customisation runs deep, and why replacing the thing is the most feared program
in any university's portfolio.

## The Australian vendor landscape — and the bet each is making

What makes this a genuine product case study, rather than a procurement story, is
that the vendors serving Australian higher ed are not converging. Faced with the
same pressures, they're making distinctly different bets — and which one is
*right* depends entirely on the institution doing the buying.

- **TechnologyOne (OneEducation).** The Australian-built, SaaS-native challenger
  that has become the momentum player. Its pitch is a single, cloud-delivered ERP
  spanning student management, finance and HR — one vendor, one platform,
  evergreen updates. The company says OneEducation now underpins a majority of
  higher education across Australia, New Zealand and the UK, and recent migrations
  (Victoria University moved its VET cohort, then its higher-ed students, onto the
  SaaS platform) show the direction of travel. **The bet:** institutions are tired
  of integrating and upgrading; sell them the whole stack as a service and take
  the integration burden off the table.
- **Callista, now with Tribal Group.** Callista began as a consortium-owned SMS
  built by and for a group of Australian universities — deeply fit to local
  compliance and processes, and deeply customised at each site. It now sits under
  Tribal Group, which has signed multi-year services agreements to keep supporting
  Callista while offering its member universities a path toward Tribal's modular,
  cloud-based next-generation SMS. **The bet:** protect a large installed base of
  hard-won, locally-tuned deployments and migrate them gradually rather than rip
  and replace.
- **Oracle PeopleSoft Campus Solutions.** The incumbent of the previous
  generation — powerful, endlessly configurable, and as a result endlessly
  customised. Many large institutions still run it, and many of the sector's
  most expensive transformation programs are, at heart, attempts to get *off* a
  heavily-modified PeopleSoft instance. **The bet (by default):** stability and
  sunk investment, with the risk that customisation has quietly become a cage.
- **Ellucian (Banner / Colleague)** and **Tribal (SITS:Vision).** The global
  players, strong elsewhere and present here, increasingly positioning around the
  TCSI ecosystem and cloud delivery. **The bet:** global scale and a compliance
  story tuned to local reporting.

Notice that these are *genuinely different value propositions for genuinely
different customers*: SaaS-native simplicity, protected-incumbency continuity,
configurable depth, and global-scale breadth. A research-intensive Group of
Eight university with twenty years of PeopleSoft customisation is not buying the
same thing as a teaching-focused university that wants to be out of the
data-centre business entirely. There is no single correct SMS. There is only the
one a given institution's constraints will actually validate.

## The architectural shift: from monolith of record to composable lifecycle

Here is the deeper movement underneath the vendor noise. The classic SMS was a
**monolith** — one large application that tried to own the entire lifecycle, run
on-premises, and was customised so heavily that the customisation became the real
product and the upgrade became a multi-year ordeal. That model is unwinding, and
in its place a more **composable** architecture is emerging:

| From (monolithic SMS) | To (composable student lifecycle) |
| --- | --- |
| One on-prem system owns everything | **SaaS core** holds the system of record, kept evergreen by the vendor |
| Students transact inside the SMS | **Experience layer** (CRM — Salesforce Education Cloud, Microsoft Dynamics) owns recruitment, engagement and service |
| Learning bolted to the SMS | **LMS** (Canvas is now dominant in Australia) integrated as a peer, not a module |
| Point-to-point custom interfaces | **Integration layer / iPaaS** (MuleSoft and similar) as API-led plumbing between systems |
| Reporting exported in batches | **Student data hub / warehouse** feeding analytics, and **B2G APIs** feeding TCSI live |
| Identity baked in | **Federated identity and SSO** (Azure AD / Okta) across the whole estate |

The strategic move is the same one I keep returning to in enterprise software:
stop asking one product to *be* everything, and instead define clean seams so the
*system of record* can stay boring and stable while the *experience* and
*intelligence* layers around it move fast. The SMS becomes the trustworthy core —
the source of truth for who is enrolled in what — and the differentiated,
fast-changing student experience is built in front of it, not inside it.

This is why so many Australian universities now run a recognisable stack: a
SaaS or soon-to-be-SaaS SMS at the centre, a CRM owning the relationship before
and around enrolment, Canvas owning learning, an integration platform holding it
together, and a data hub making the whole thing reportable and analysable. The
SMS didn't shrink in importance. It got *more* important — but it got narrower,
deliberately, so the rest of the estate could evolve without destabilising the
core.

## Why replacing the core is the hardest program in the sector

None of this makes core replacement easy. It remains, reliably, the riskiest
program a university will run — and the sector is littered with implementations
that ran years late and tens of millions over. The reasons are instructive
because they're not really technical:

1. **Customisation is lock-in wearing a helpful face.** Every local
   modification that once made the old system fit perfectly is now a migration
   liability. The deeper the fit, the harder the exit. This is the central
   paradox of the category: the customisation that delivered yesterday's value is
   the thing that traps you in it.
2. **The compliance spine cannot be switched off during the move.** You're
   changing the engine of a plane that is not allowed to land. TCSI reporting,
   HELP reconciliation and CRICOS obligations continue throughout the
   transition, so dual-running and reconciliation are unavoidable cost.
3. **The real system isn't the software — it's the process around it.** Decades
   of academic policy, faculty exceptions and "the way we've always done
   admissions" are encoded in workflows and people, not just code. A
   SaaS platform that asks the institution to adopt standardised processes is
   really asking it to change its operating model, and that is an organisational
   program, not an IT one.
4. **The cost of being wrong is asymmetric.** As above — a defect here isn't a
   bug ticket, it's a student who can't enrol, a debt that's misreported, or a
   visa that's out of compliance. That asymmetry justifies the caution, and
   explains why these programs are governed like infrastructure megaprojects.

> The hard part of replacing a student management system was never the
> technology. It's that you're asking an institution to migrate its system of
> record, re-found its operating processes, and stay continuously compliant —
> all at once, on a live population, with no acceptable downtime.

## The build-versus-buy line, and where it's settling

Universities are not software companies, and the sector has mostly — correctly —
concluded that the *core* SMS is a **buy**, not a build. The compliance surface
is too large, too dynamic, and too undifferentiating to maintain in-house: no
institution wins students by having a bespoke TCSI integration. The smart money
buys the boring core.

But the line is settling in an interesting place. Institutions increasingly
**buy the system of record and build (or assemble) the experience**. The
differentiated parts of the student journey — the way a prospective student is
guided to the right course, the way support reaches a struggling learner, the way
data drives an early-intervention nudge — are where institutions actually want to
compete, and those increasingly live in the composable layers *around* the SMS,
where a product team can iterate without touching the regulated core. That
division of labour — buy the compliance, compose the experience — is, I think,
the single most useful architectural principle in the sector right now.

## What this case study teaches beyond the campus

Step back from higher education and the SMS is a near-perfect specimen of a much
broader product truth: **the system of record and the system of engagement want
different things, and conflating them is what creates the painful monolith.** The
record wants to be stable, correct, slow-moving, auditable. The engagement layer
wants to be fast, experimental, personalised, occasionally wrong-and-fixed. Build
them as one and you get a system that's too risky to change and too rigid to
delight. Separate them cleanly and each can be excellent at its own job.

Three lessons travel from the Australian SMS to almost any enterprise product:

1. **Make the regulated core boring on purpose.** Where the cost of error is
   asymmetric, stability *is* the feature. Push the innovation to a layer where
   being wrong is cheap and reversible.
2. **Customisation is a loan against your future agility.** Every deep
   modification that fits you perfectly today is a migration cost tomorrow.
   Configure where you can; reserve true customisation for genuine differentiation
   and account honestly for the interest you're taking on.
3. **Architecture is a strategy choice, not an IT choice.** Whether you buy a
   suite or compose best-of-breed, whether the SMS owns the experience or just the
   record — these decide how fast the whole institution can move for the next
   decade. They belong in the strategy conversation, not the procurement one.

The student management system will keep being the most important software nobody
talks about. But the institutions getting it right have stopped treating it as
one immovable monolith to be endured, and started treating it as a deliberate
core to be kept stable, narrow and trustworthy — so that everything students
actually notice can finally move at the speed the sector now demands.

---

*Sources and further reading:
[TechnologyOne — Student Management](https://www.technology1.com/products/student-management);
[Tribal Group wins five-year, $55M Callista contract](https://itbrief.com.au/story/tribal-group-wins-five-year-55m-contract-with-callista-senior-executive-group);
[Atturra — Victoria University's migration to TechnologyOne](https://atturra.com/au-en/client-stories/migrating-victoria-universitys-data-and-custom-apps-technologyone/);
[About TCSI](https://www.tcsisupport.gov.au/about);
[Legacy HEIMS data — TCSI Support](https://heimshelp.education.gov.au/resources/TCSI).*
