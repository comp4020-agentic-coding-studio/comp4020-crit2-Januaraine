# ACT Wildlife — Homepage Content Strategy

Scope: this document answers two questions only — what information the
homepage must convey, and what functionality it must give users. It does
not touch colour, typography, layout, visual hierarchy, or code; those are
later decisions. Every fact cited below comes from `docs/analysis.md`
(content research on the live site); every priority and issue cited comes
from `docs/design-brief.md` (UX audit / design brief); baseline
requirements come from `spec/crit-2.test.ts` and `spec/invariants.test.ts`.
Nothing here introduces a new fact, statistic, service, or feature that
those sources don't already contain.

**Revision note:** Section 5's open questions have since been resolved by
you in conversation. Sections 2, 3, and 5 below reflect those decisions;
each resolved point says so explicitly and states the decision you made.

## 1. Baseline Requirements (mechanically checked, non-negotiable)

From `spec/crit-2.test.ts` (this week's spec) and `spec/invariants.test.ts`
(always-on, any page):

- Real page title and a real `<h1>` — no placeholder/template text.
- At least one way to find the real organisation: a `tel:` link, a
  `mailto:` link, an `<address>` element, or a link whose text signals
  contact/location (e.g. "Contact", "Find us", "Visit").
- Exactly one top-level heading, a navigation landmark, a declared document
  language, a mobile viewport, and alt text on every image.

## 2. Information the Homepage Must Convey

Grounded in `docs/analysis.md` Section 6 (current Home page content) and
Section 3 (primary goals, in priority order), and in the design brief's
design goals ([[design-brief]] Section 5). Listed by priority, matching the
order the design brief derives from the live site's own hero placement and
repetition:

**a. What the organisation is and does.**
Name (ACT Wildlife), its tagline ("Rescue Rehabilitate Release"), and that
it is the ACT's wildlife rescue, rehabilitation, and release organisation.
This is the minimum identity content — enough to satisfy the "real title
and H1" requirement with real, sourced content rather than filler.
**Resolved:** the fuller vision/mission/values statement stays on About Us
only; the homepage's identity content is this short description plus a
single link (e.g. "Learn about our mission →") to About Us. No mission/
vision text is duplicated onto the homepage.

**b. What to do if you've found an injured, sick, or orphaned animal.**
The 24/7 Animal Rescue Hotline number (0432 300 033), stated as the
immediate action for this situation, and presented as **the organisation's
one and only hotline**. This is the site's own top-priority message (hero
placement on the live site) and the design brief's top priority goal.

**c. The bird-flu / sick-or-dead-bird notice, if the notices section (item
g) is carried forward.**
**Resolved:** 1800 675 888 is not an ACT Wildlife hotline — it is the
government's Emergency Animal Disease Hotline, mentioned only inside the
bird-flu safety notice on the current live site. It is content that lives
*inside* a time-bound notice (see item g), not a second, standing hotline
of the organisation. Treating it as parallel/equivalent to 0432 300 033
(as this document previously did, listing it as item c on its own) was a
misreading of `docs/analysis.md` — corrected here. If a bird-flu-style
notice is carried onto the new homepage, its content must be clear that
0432 300 033 remains the organisation's only hotline, and that 1800 675
888 is a different body's number for a different, specific situation.

**d. The ways someone can get involved.**
The four pathways the current homepage already surfaces: Become a Member,
Become a Volunteer, Become a Carer, Sponsor a Species — each needs enough
description for a visitor to tell which applies to them (this matches the
site's second-priority goal: recruiting members/volunteers/carers).

**e. That the organisation accepts donations.**
A donation prompt, consistent with the current homepage and the site's
fourth-priority goal (raising donations).

**f. Contact/location information**, satisfying the spec's findability
requirement — this can be the same hotline content as (b), or a link to the
Contact Us page content (address, office hours, contact form), or both.

**g. A current notice/campaign area.**
**Resolved:** yes, the homepage keeps this section (as the live site does).
The live site's own examples — the bird-flu notice (item c) and the
Wildlife Friendly Netting Swap campaign — are **time-bound,
current-as-of-capture facts**, not evergreen content. They must not be
copied onto the new homepage as if still current, and no new notice or
campaign should be invented to fill the section. This section's structure
is decided; its actual current content still needs to be supplied by you
when the redesign is built (see the note at the end of this document).

**Resolved — content confirmed not fabricated, but excluded from the
homepage by choice:** the full vision/mission/values statement (About Us
only, linked per item a) and the Fact Sheets library (`/fact-sheets`, 14
PDFs, confirmed real in `docs/analysis.md` lines 119/165/351–358 — it is
simply not being surfaced on the homepage, by your decision, not because
it doesn't exist).

## 3. Functionality the Homepage Must Give Users

Derived from the same sources — each item ties back to a need in
`docs/design-brief.md` Section 3 or a spec requirement in Section 1 above:

1. **Reach the rescue hotline with a real `tel:` link** — not just printed
   digits — so it is one action away on any device, and so it satisfies the
   spec's findability check. This is the only hotline the homepage presents
   as ACT Wildlife's own.
2. **Read the current notice/campaign content** without mistaking any
   phone number inside it for a second ACT Wildlife hotline — if the notice
   references an external body's number (as the bird-flu notice does with
   the government's 1800 675 888), the content must make clear it belongs
   to that other body, not to ACT Wildlife.
3. **Navigate to each "get involved" pathway** (Become a Member / Volunteer
   / Carer / Sponsor a Species) from the homepage, matching the site's
   existing "Learn more" pattern of one link per pathway — all four, kept
   at equal weight, per your decision to keep this section as-is.
4. **Reach the donation flow** from the homepage.
5. **Find contact/location information** — via a `tel:`/`mailto:` link, an
   `<address>`, or a link to a Contact page — independent of item 1, in
   case a visitor's need isn't an emergency (e.g. a general enquiry).
6. **Follow a link to About Us** for the organisation's mission/vision,
   rather than reading a summary of it on the homepage itself.
7. **Navigate to the rest of the site** via a navigation landmark exposing
   the site's main sections, satisfying the invariant test and the basic
   need of any visitor whose need isn't covered by items 1–6.

Nothing beyond these seven is established as a homepage requirement by the
research, audit, or spec. Any additional functionality (search, live chat,
a language switcher, account creation on the homepage itself, etc.) would
be a new feature not evidenced anywhere in `docs/analysis.md` or
`docs/design-brief.md`, and is deliberately not proposed here.

## 4. Explicitly Out of Scope for This Document

- Colour palette, typography, layout, spacing, imagery style, or any other
  visual design decision.
- Implementation (HTML/CSS/TS) of any of the above.
- Deciding which open question in Section 5 to resolve which way.
- Any content, statistic, campaign, or feature not already confirmed in
  `docs/analysis.md`.

## 5. Decisions Made (this conversation) and What's Still Outstanding

All four open questions from the previous version of this document have
been resolved by you:

1. **Notices/campaign section:** kept, as a standing area on the homepage.
2. **Mission/vision:** stays on About Us only; homepage gets a link to it,
   not a summary.
3. **"Get involved" breadth:** all four pathways (Member/Volunteer/Carer/
   Sponsor) stay, at equal weight.
4. **Fact Sheets:** confirmed real (see Section 2, item g), but not
   surfaced on the homepage by your choice.

**Still outstanding — not a design decision, a content gap:** the notices
section (item g) has a structure now but no current content. The bird-flu
notice and netting-swap campaign captured in `docs/analysis.md` are
time-stamped facts from the research pass and cannot be reused as if
current, and nothing should be invented to fill the gap. Before this
section can be built, you (or the organisation) need to supply whatever
notice/campaign is actually current at build time — or the homepage ships
with this section structurally present but empty/omitted until that
content exists.
