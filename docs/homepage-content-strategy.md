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

**b. What to do if you've found an injured, sick, or orphaned animal.**
The 24/7 Animal Rescue Hotline number (0432 300 033), stated as the
immediate action for this situation. This is the site's own top-priority
message (hero placement on the live site) and the design brief's top
priority goal.

**c. What to do if you've found a sick or dead bird (possible bird flu).**
The separate Emergency Animal Disease Hotline (1800 675 888), presented as
distinct from the rescue hotline. The design brief flags hotline confusion
as a UX risk ([[design-brief]] Section 1, Section 4) — the homepage content
needs to state clearly that this is a *different* number for a *different*
situation, not merely list both numbers side by side.

**d. The ways someone can get involved.**
The four pathways the current homepage already surfaces: Become a Member,
Become a Volunteer, Become a Carer, Sponsor a Species — each needs enough
description for a visitor to tell which applies to them (this matches the
site's second-priority goal: recruiting members/volunteers/carers).

**e. That the organisation accepts donations.**
A donation prompt, consistent with the current homepage and the site's
fourth-priority goal (raising donations).

**f. Contact/location information**, satisfying the spec's findability
requirement — this can be the same hotline/contact content as (b)/(c), or
a link to the Contact Us page content (address, office hours, contact
form), or both.

**g. Current public-notice content, if the redesign chooses to carry it
forward.**
The live homepage carries a dated safety notice (bird flu, dated 3 July
2026) and a named campaign (Wildlife Friendly Netting Swap). These are
**time-bound, current-as-of-capture facts** — they should not be copied
onto the new homepage as if evergreen, and no new notice or campaign should
be invented to replace them. Whether the redesigned homepage carries a
"current notices" section at all, and what goes in it, is an editorial
decision left open in Section 5.

Content the analysis confirms exists on the site, but **not** confirmed as
part of the homepage specifically, is intentionally excluded from this
list even though it may seem homepage-appropriate — for example, the full
vision/mission/values statement (confirmed on About Us) and the Fact Sheets
library (confirmed on its own page). Including or excluding these from the
homepage is an open decision (Section 5), not a research finding.

## 3. Functionality the Homepage Must Give Users

Derived from the same sources — each item ties back to a need in
`docs/design-brief.md` Section 3 or a spec requirement in Section 1 above:

1. **Reach the rescue hotline with a real `tel:` link** — not just printed
   digits — so it is one action away on any device, and so it satisfies the
   spec's findability check.
2. **Distinguish and reach the bird-flu hotline separately** from the
   rescue hotline, so a visitor with a sick/dead bird doesn't call the
   wrong number (design brief Section 4, issue 4... see Section 1 issue on
   hotline confusion).
3. **Navigate to each "get involved" pathway** (Become a Member / Volunteer
   / Carer / Sponsor a Species) from the homepage, matching the site's
   existing "Learn more" pattern of one link per pathway.
4. **Reach the donation flow** from the homepage.
5. **Find contact/location information** — via a `tel:`/`mailto:` link, an
   `<address>`, or a link to a Contact page — independent of items 1–2, in
   case a visitor's need isn't an emergency (e.g. a general enquiry).
6. **Navigate to the rest of the site** via a navigation landmark exposing
   the site's main sections, satisfying the invariant test and the basic
   need of any visitor whose need isn't covered by items 1–5.

Nothing beyond these six is established as a homepage requirement by the
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

## 5. Open Decisions Left to You

These are questions the research and audit surface but don't answer —
they need a person to decide, not an agent:

- **Time-bound notices:** should the homepage keep a "current notice /
  campaign" section at all? If yes, it needs a real, current notice
  supplied by you (not the dated bird-flu/netting content captured during
  research, and not an invented one) — or a placeholder pattern that's
  honest about being empty until real content is supplied.
- **Mission/vision on the homepage:** summarise it there (duplicating
  About Us) or leave it solely on About Us and link to it?
- **Breadth of the "get involved" section:** show all four pathways
  (Member/Volunteer/Carer/Sponsor) with equal weight, as the current site
  does, or lead with fewer and defer the rest to a landing page — this is
  the same trade-off the design brief leaves open around information
  density vs. simplicity.
- **How to differentiate the two hotlines** in content terms (e.g. distinct
  headings, an explicit "this is NOT the bird-flu number" style cue) — a
  wording/content decision, independent of visual styling.
- **Whether to surface Fact Sheets / education content** on the homepage or
  keep it one click away — the design brief lists this as the site's
  lowest-priority stated goal (Section 3, goal 6), which is a reason to
  default toward *not* front-loading it, but not a decision made here.
