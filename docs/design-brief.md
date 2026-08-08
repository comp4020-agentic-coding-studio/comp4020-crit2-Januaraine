# ACT Wildlife — Design Brief

Synthesised from `docs/analysis.md` (content analysis of the live site,
https://www.actwildlife.org.au/). No new research was performed to produce
this brief; every claim below traces back to a fact recorded in that
document. Where the analysis supports more than one reading, this brief
states the trade-off rather than picking a side — the redesign direction is
a decision for the design phase, not this brief.

## 1. Core Problems With the Current Site

- **Information architecture doesn't match the URL structure.** The nav
  implies a nested hierarchy (e.g. everything under "Get Involved" or
  "Training"), but the URLs don't follow it consistently: "Sponsor A Species
  Members" sits three levels deep while its sibling "Sponsor A Species" is
  flat; "Become A Volunteer" and "Become A Carer" are root-level despite
  appearing nested under "Get Involved"; "Orientation" is root-level while
  every other Training sub-page lives under `/training/...`.
- **A navigation defect ships live.** On the Training landing page, the
  "Possums" course link points to the Bird Courses URL instead of Possum
  Courses — a confirmed broken link, not a matter of interpretation.
- **A system link is mixed into content.** "Wildman" appears in the
  Training page's course list even though it is a login link to an external
  system, not a course.
- **A donation-adjacent page appears incomplete.** "Sponsor A Species"
  (`/sponsor-a-species`) shows only its heading on two separate retrieval
  attempts — no body copy, species list, or pricing tier, consistent with
  content that depends on client-side rendering that didn't resolve. The
  only confirmed description of the programme lives on a different page
  (Get Involved).
- **No published email address anywhere on the site.** Every contact path
  is a phone number, a login, or a form (Contact Us, Become a Volunteer
  sign-up, Donate/EOFY forms) — there is no async, non-form channel.
- **Two separate, undifferentiated login entry points.** "Members Login"
  (password-only) and "Wildman Login" (external wildlife-management system)
  exist side by side, plus a header "Login" link whose target the analysis
  could not confirm — the site gives no visible cue for which one a given
  visitor needs.
- **Heavy verbatim repetition of eligibility/requirement text** (the 18+/
  supervised-adult rule; the "must be a financial member" rule) across
  nearly every Get Involved, Training, and course page. This is a fact about
  the current site, not necessarily a defect — see the trade-off in Section
  4.

## 2. Primary Target Users

Drawn directly from the site's own navigation, forms, and CTAs (not
inferred demographics):

- Members of the public who have found injured, sick, or orphaned wildlife
  (the site's top-priority audience, per hero placement).
- People reporting sick or dead birds / possible bird flu, who need routing
  to a *different* hotline than the rescue line.
- Prospective members (pay the annual fee to support the org and become
  eligible to volunteer or care).
- Prospective volunteers in non-carer roles (phone/transport duty,
  pouch-knitting, sewing, aviary building).
- Prospective wildlife carers, segmented by species licence (bats, birds,
  possums/gliders, reptiles, wombats).
- Donors and sponsors (one-off, EOFY appeal, recurring species sponsorship).
- Existing members and carers (Members/Wildman login, AGM, newsletters).
- Community groups looking for lower-commitment ways to help (e.g. the
  monthly Sewing Group).

## 3. Most Important User Needs

In the priority order the current site itself expresses (hero placement,
repetition, and depth of content):

1. Find the 24/7 rescue hotline immediately when an animal has been found —
   and, separately, find the correct government hotline for a sick/dead
   bird report without confusing the two.
2. Understand and start the member → volunteer → carer pathway: what each
   role requires (fee, age, Orientation), and which form to fill in.
3. Find and register for the right training course — cost, prerequisites,
   and dates (via the Training Calendar / Humanitix) — for a specific
   species or role.
4. Donate or sponsor a species with a clear, working, trustworthy flow.
5. As an existing member or carer, get into the right portal (Members vs.
   Wildman) to do operational tasks (rosters, coordinator reports, case
   management).
6. Access practical safety/coexistence information (the 14 Fact Sheets, the
   bird-flu notice, the netting-safety campaign) without needing to
   register or call anyone.

## 4. Most Important UX Issues to Address in the Redesign

1. **Inconsistent information architecture.** URL nesting doesn't reflect
   the nav hierarchy in several places (Section 1). This affects
   predictability of the URL space and, potentially, how easy the site is
   to maintain.
2. **A confirmed broken/mislabeled link and a misplaced system link** in the
   Training course list — a direct, unambiguous usability defect that
   sends users to the wrong course page.
3. **An apparently non-functional donation-adjacent page** (Sponsor A
   Species) — if confirmed broken in the live redesign target, this blocks
   one of the six stated organisational goals (raising donations) at the
   point of conversion.
4. **Undifferentiated login pathways** (Members Login, Wildman Login, and an
   unconfirmed generic "Login" link) with no visible guidance on which one
   applies to a given visitor.
5. **No async/written contact channel** apart from forms — a gap for any
   user segment (e.g. partner organisations, media, or people who prefer
   not to phone) that the current CTAs don't serve.

## 5. Design Goals

- Make the 24/7 rescue hotline reachable in as few steps as possible from
  anywhere on the site, while keeping the separate bird-flu hotline clearly
  distinguished so the two are never confused.
- Make the member → volunteer → carer pathway legible as a single journey:
  a visitor should be able to tell, at each step, what they're eligible for
  and what to do next.
- Bring the URL structure and the visible navigation hierarchy into
  agreement, so the two tell the same story.
- Ensure every page that supports an organisational goal (in particular
  Sponsor A Species, Donate, EOFY Appeal) actually delivers its content and
  completes its flow.
- Make it obvious, at the point a user clicks "Login," which system they're
  entering and why.

## 6. Constraints the Redesign Must Respect

**Technical (from this repo's `CLAUDE.md`):**
- Must remain a static Vite + TypeScript site; `pnpm build` must emit into
  `dist/`, and `dist/` must keep passing `spec/`.
- Any UI/layout/CSS change must be verified at both 1920×1080 and 390×844
  before it ships.
- `pnpm check` (typecheck, build, lint, tests) must stay green.
- No invented pages or URLs — only pages confirmed to exist on the live
  site's own navigation/sitemap may be treated as in-scope content
  (`docs/analysis.md` Section 5 lists exactly which pages were confirmed vs.
  partially confirmed).
- No changes to existing function/module signatures unless explicitly
  requested.

**Organisational / content facts (from `docs/analysis.md`) that the
redesign must preserve accurately, not rewrite freely:**
- Regulatory and eligibility facts: the ACT 48-hour wildlife-holding law,
  the 18+/supervised-adult requirement, the "must be a financial member to
  volunteer or care" rule.
- Fixed figures: the $40 annual membership fee and its 1 Jan–31 Dec cycle
  with the post–1 October free-year incentive; course pricing (Members
  $35/Non-members $45/Juniors $15, or the half-day $25/$35 tier); the ABN
  (84 737 023 161).
- Contact facts: the 24/7 rescue hotline (0432 300 033) and the separate
  bird-flu hotline (1800 675 888); the physical address (Jerrabomberra
  Wetlands, Dairy Rd, Fyshwick) and office hours.
- External systems the site depends on and does not control the design of:
  Humanitix (course/event registration), Funraisin (donation processing),
  Wildman (wildlife case-management login), and the embedded Google Map.
- The organisation's stated vision, mission, and values text, as the
  authoritative source for About Us content.

## 7. Success Criteria for the Redesign

- Every navigation link resolves to the page its label describes — no
  mislabeled links (e.g. the current Possums → Bird Courses defect) and no
  system/login links presented as content items.
- URL paths consistently reflect the navigation hierarchy shown to users.
- Sponsor A Species (and any equivalent page) renders its full content
  (description, species list, pricing) without depending on unconfirmed
  client-side behaviour.
- A first-time visitor who has found an injured animal can reach the
  correct hotline number in one or two interactions from any page, and
  cannot mistake it for the bird-flu hotline.
- A visitor can tell, before clicking "Login," whether they want Members
  Login or Wildman Login.
- The redesign passes `pnpm check` and is verified at both required
  viewports (1920×1080 and 390×844) before shipping, per `CLAUDE.md`.

## Open Trade-offs (not resolved by this brief)

- **Repeated eligibility text:** consolidate into one canonical
  page/component referenced from each course/role page (less duplication,
  one more click to the detail) vs. keep it repeated in place on every page
  (more duplication, zero extra clicks at the moment of decision).
- **Members Login vs. Wildman Login:** present them as two clearly labelled
  but separate entry points (matches the two distinct backend systems) vs.
  unify into a single "Login" experience that routes internally (simpler
  first click, but hides that they are genuinely different systems with
  different audiences).
- **URL restructuring approach:** fully nest all sub-pages under their
  parent section for consistency (larger change, clean result) vs. flatten
  everything to root-level paths to match the pattern already used by
  Become A Volunteer/Become A Carer (smaller change, less "correct"
  hierarchically).
- **Missing email address:** treat as a gap to fill (add a published
  contact email for async/written contact) vs. treat as intentional design
  (all contact funnelled through forms for triage) — the analysis cannot
  determine which, since no rationale for the omission is stated anywhere
  on the site.
