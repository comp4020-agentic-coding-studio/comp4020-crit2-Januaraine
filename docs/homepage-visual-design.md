# ACT Wildlife — Homepage Visual Design Decisions

Scope: this document enumerates the visual design decisions needed to move
from the agreed homepage content/functionality (`docs/homepage-content-strategy.md`)
to an implementable visual design for the ACT Wildlife homepage. Every fact
and constraint below traces back to `docs/analysis.md`, `docs/design-brief.md`,
`docs/homepage-content-strategy.md`, `docs/homepage-assets.md`, `CLAUDE.md`,
and `spec/`. No implementation (HTML/CSS/TypeScript/Astro or otherwise) is
included here — this is direction for a first prototype, not the prototype
itself.

**Note:** `CLAUDE.md` records this project's stack as Astro + TypeScript,
building to static HTML/CSS/JS in `dist/`.

**Revision note (this pass):** the previous version of this document only
enumerated open questions. You have since made the design-direction
decisions recorded below for each section, and asked for a **first
prototype** to be built against them. Per your explicit instruction, this
revision does **not** try to resolve every remaining visual micro-decision
in prose — several items below are deliberately left as **Open — test in
prototype**, meaning: build a reasonable first default, look at it rendered
at both 1920×1080 and 390×844, then revise. Nothing in this document is
final; it is the direction for iteration 1 of build → review → revise →
re-verify.

**Revision note (round 2 — this pass):** you reviewed the rendered first
prototype and asked for a second iteration, not a full redesign. The
decisions below amend specific sections (2, 3, 5, 6, 10) and add three new
ones (12–14) for gaps the first prototype didn't cover (photo gallery,
login, sponsor acknowledgement). Everything not explicitly amended below —
colour, tone, section order, hotline treatment, scroll-reveal pattern —
carries forward unchanged from round 1.

## 1. Visual Direction (tone, colour, typography)

**Resolved — tone:** trust, warmth, credibility, and care, not urgency or
panic. Concretely: no red, no siren/alert iconography, no countdown or
scarcity language anywhere on the page. The one place that still needs to
feel *immediately actionable* is the hotline element (Section 4) — the
direction there gets urgency from prominence, placement, and repetition
rather than from alarming colour or motion.

**Resolved — colour:** primary colour is ACT Wildlife's own green, not an
invented brand colour. Sampled directly from the verified local logo asset
(`public/images/homepage/logo-primary.png`, confirmed rights-clear in
`docs/homepage-assets.md` Section 1.1) by pixel analysis: the dominant green
cluster in that file averages to **`#4BA55B`**. This is a seed value for the
first prototype, not a locked hex — **Open — test in prototype:** exact
shade, tints/shades for hover/active states, and contrast ratios (WCAG AA
against white, and against the hotline button's own text) should be tuned
once the colour is visible on a real page next to real photography, not
decided further in the abstract.

**Resolved — imagery consistency:** all photography on the page comes from
the same verified local asset set (`docs/homepage-assets.md` Section 2) —
the volunteer (bat), carer, and sponsor-a-species card images, plus the hero
banner if Section 3's Option A is used. No stock or AI-generated imagery. A
single, consistent treatment (one crop ratio, and one light colour-grade/
overlay approach if any) should be applied uniformly across every photo
used, rather than each card inventing its own treatment. **Open — test in
prototype:** whether any overlay/duotone treatment is needed at all, or
whether the images read fine untreated once colour and type are in place.

**Resolved — brand assets:** the existing ACT Wildlife logo and the
already-verified local images are the primary/only brand assets used; no new
logo variant is created for this prototype (none exists — `docs/homepage-assets.md`
Section 5 — and none is required to ship a first pass).

**Open — typography:** not addressed by any source document. For the first
prototype, pick one legible sans-serif stack (a system font stack is a
reasonable, zero-risk default) and hold it constant; refining typography is
cheap to iterate later and doesn't need to be resolved before a first
prototype exists.

## 2. Homepage Layout (section order and hierarchy)

**Resolved — section order (first pass):**

1. **Header / navigation** (persistent — see below), including a hotline
   access point.
2. **Hero** — identity (name + tagline) and the hotline CTA together, the
   site's own top two priorities (`docs/homepage-content-strategy.md`
   Section 2, items a–b).
3. **Short mission strip** — one or two sentences plus "Learn about our
   mission →" to About Us (content strategy item a; deliberately small — a
   link, not a restatement).
4. **Notices / current campaign** — kept structurally, per your resolved
   decision, but visually lighter-weight than the hero and the get-involved
   grid (see Section 5).
5. **Get involved** — the four pathway cards, equal weight (see Section 6).
6. **Donation prompt** — a single clear CTA, not a full form (the form
   itself lives externally on Funraisin).
7. **Footer** — contact/address/hours/ABN/social, repeating the hotline once
   more for independent findability (content strategy item f).

This order mirrors the priority sequence the content strategy document
derives from the live site's own hero placement and repetition (identity →
hotline → notice → get-involved → donation → contact) — it adds visual
weighting on top of an order already decided, rather than reordering
content priorities.

**Resolved — layout style:** a single-column flow of full-width sections (no
overall page-level grid/sidebar), with an internal grid only inside the
get-involved section (Section 6). This is the simplest structure that
supports the priority order above and is consistent with "flowing scroll
with soft motion" (Section 9).

**Resolved — navigation pattern:** one persistent header, not the live
site's dual sticky+main-nav pattern. The asset audit confirms the live
site's three "different" nav logos (desktop/sticky/mobile) are
byte-identical (`docs/homepage-assets.md` Section 1.1–1.3) — there is no
visual reason to run two separate nav bars for one logo mark. A single
header that gains a background/shadow once the user scrolls past the hero
achieves the same "always accessible" effect with less duplication. The
header carries: logo, primary nav links reflecting the site's own confirmed
top-level IA (Home, Get Involved, Training, Members, About Us, Donate — from
`docs/analysis.md` Section 4; no new IA proposed here), and the hotline
(Section 4) placed directly in the header, not only in the hero — so it
stays reachable from any scroll position. On mobile, nav links collapse
behind a hamburger; the hotline element does **not** collapse into the
hamburger — it stays visible, since it is the single highest-priority action
on the page.

**Still resolved from before:** the four get-involved pathways stay at equal
visual weight; `spec/invariants.test.ts`'s one-`<h1>`/one-`<nav>` requirement
is satisfied by this single-header structure.

**Open — test in prototype:** exact spacing/height between sections; whether
the mission strip sits inside the hero band or as its own strip immediately
below it; whether the header is always-fixed vs. scrolls away and reappears
on scroll-up; exact collapse breakpoint for the hamburger.

**Round 2 — resolved (navigation restructure):** the first prototype
flattened all four "get involved" pathways as separate top-level nav items
alongside Home / About Us / Donate / Contact Us, which is the crowding you
flagged. Round 2 groups them under one **"Get Involved ▾"** nav item; all
four destinations (Become a Member, Become a Volunteer, Become a Carer,
Sponsor a Species) stay reachable, just nested one level under a labelled
parent instead of flattened as separate top-level links. Per your decision,
the top-level nav is not expanded to also add "Training" or "Members" (both
exist on the live site per `docs/analysis.md` Section 4, but are out of this
round's scope) — it stays: Home / Get Involved ▾ / About Us / Donate /
Contact Us, plus the new **Login ▾** item (Section 13).

**Round 2 — resolved (logo sizing):** the header logo must never be
compressed by the header's flex layout at any viewport width — the first
prototype's `.logo` had no `flex-shrink: 0`, so it could be squeezed
narrower than its own intrinsic proportions once the row ran short on
space, the same class of bug already fixed once for the header hotline
pill in round 1. Fix: give `.logo` (the anchor, not just the `<img>`)
`flex-shrink: 0`, and keep sizing it purely by intrinsic aspect ratio —
fixed height, `width: auto`, sourced from the confirmed 177×123 px asset
(`docs/homepage-assets.md` Section 1.1) — never stretched, never
compressed. Verify at both required viewports once implemented.

## 3. Homepage Hero Image

**Decision needed:** whether to reuse `hero-banner.jpg` (5,208×1,250 px, the
live site's crop uses `background-position: 23% 34%`), crop it differently,
replace it, or omit a background photo entirely.

**The tension:** the image is verified rights-clear and is the
organisation's own real photography — reusing it is the lowest-risk, most
authentic option. But it is an extreme ~4.2:1 panorama with a fixed live-site
crop, and no mobile-specific version exists, so a single fixed crop will not
survive a 390px-wide viewport unchanged.

**Option A — reuse with responsive art-direction.** Keep `hero-banner.jpg`,
but let the crop position differ per breakpoint (art-directed crop, not one
fixed position at every size), with a gradient overlay behind the text for
legibility.
- *Pros:* zero new asset risk; authentic organisational photography;
  fastest to get into a first prototype.
- *Cons:* at 390px width the same very wide image necessarily shows a much
  narrower vertical slice — whether the subject/framing survives that crop
  can only really be judged by looking at the rendered result.

**Option B — flexible composition using existing card imagery.** Replace the
ultra-wide banner with a shorter, more standard hero aspect ratio: a solid
brand-green panel carrying the headline + hotline CTA on one side, paired
with one of the other verified, better-proportioned images (e.g. the carer
or volunteer photo) on the other side at desktop width, stacking to
image-below-text on mobile.
- *Pros:* full control over text legibility and cropping at both required
  viewports; avoids the ultra-wide-to-narrow crop problem entirely.
- *Cons:* loses the one photo that is specifically "the hero" on the live
  site; reuses a get-involved card image for a second purpose on the same
  page.

**Resolved — recommendation for the first prototype: Option A.** It carries
the least risk (no new image role invented, no replacement content) and is
fastest to put in front of real eyes at both viewports, which is what this
stage needs. If the mobile crop looks bad once rendered, switching to Option
B (or a hybrid) is a same-effort revision at that point, not a rebuild.

**Open — test in prototype:** Option A vs. B itself, once both are visible
at 1920×1080 and 390×844; exact overlay/gradient strength for text contrast;
whether the mission strip sits inside the hero band or just below it.

**Round 2 — resolved:** Option A is confirmed, not switched to Option B —
you reviewed the rendered result and chose to keep the photographic hero
with its responsive art-directed crop. The wish for "more visually
impactful storytelling" with the wildlife photography is addressed
separately, by a new dedicated photo gallery (Section 12), not by changing
the hero itself.

## 4. Hotline / Emergency Information

**Resolved — which number, and how it's linked:** 0432 300 033 is the only
ACT Wildlife hotline presented on the homepage, always as a real
`tel:0432300033` link (checked by `spec/crit-2.test.ts`).

**Resolved — visual treatment:** a solid-fill button in the primary green
(Section 1), white text, a phone icon, the label "24/7 Animal Rescue
Hotline," and the number itself. Urgency comes from size, placement, and
repetition — not from alarm colour — keeping it inside the "trust, not
panic" register set in Section 1.

**Resolved — placement/repetition:** the button appears in three places —
header (small/persistent, reachable from anywhere per Section 2), hero
(large/primary), and footer (repeated, satisfying independent findability,
content strategy item f). This directly serves the design brief's top goal:
reachable in one or two interactions from anywhere on the page
(`docs/design-brief.md` Section 5).

**Resolved — distinguishing a future external number:** if a future notice
references another body's number (as the bird-flu notice did with
1800 675 888), that number must **never** use the hotline button style. It
renders as plain inline text inside the notice card, explicitly labelled
(e.g. "This is a separate government hotline for [situation] — not an ACT
Wildlife number"), so the two are structurally and visually impossible to
confuse. This rule is fixed by your decision, not a visual option to revisit.

**Open — test in prototype:** exact button shape (pill vs. rounded
rectangle); icon style; whether a subtle, non-alarming motion (e.g. a slow,
soft opacity pulse) helps or feels gimmicky once seen live — test with and
without, keep whichever reads calmer and more credible, and respect
`prefers-reduced-motion` either way.

## 5. Notices / Current Campaign Section

**Resolved — structure:** built as a reusable card component with two
states:
- **Filled state:** title, short body text, optional image, optional
  link/CTA — the template a real, current notice will use once the
  organisation supplies one.
- **Empty state (what the first prototype actually ships with):** a plain,
  low-key placeholder inside the same structural slot — e.g. "No current
  notices" or "Check back here for current updates" — rather than hiding the
  section entirely. Keeping the slot visible (not collapsed) means the page
  layout doesn't shift the day real content arrives, and avoids fabricating
  any notice to fill space, per the resolved rule in
  `docs/homepage-content-strategy.md` Section 5 that old content (bird-flu
  notice, netting-swap campaign) must not be reused or invented content
  substituted.

**Resolved — visual weight:** noticeably lighter than the hero and the
get-involved grid (smaller type, less colour, less vertical space) — this
matches the content strategy's own ranking of this section below
get-involved/donation despite being kept structurally present.

**Open — test in prototype:** exact empty-state copy/tone; whether it sits
as a thin strip or a full card-shaped placeholder; precise vertical space
allocated.

**Round 2 — resolved:** keep the structure and the existing empty-state
copy ("Check back here for current updates") exactly as-is — no time-bound
content is being created or reused, per the resolved rule in
`docs/homepage-content-strategy.md` Section 5 and your own explicit
instruction this round. The only change is visual: reduce the placeholder's
padding/height further so the empty state reads as a slim strip rather than
a large blank card, since it's deliberately doing very little content-wise
right now.

## 6. Get Involved Section (four pathway cards)

**Resolved — how to handle the missing "Become a Member" image:** rather
than three photo cards plus one visually empty/placeholder card, give the
Member card an intentional, same-footprint visual treatment that isn't a
photo — e.g. a solid brand-green (or light neutral) panel carrying a simple
line-icon appropriate to membership, sized and positioned identically to
where a photo sits on the other three cards. All four cards otherwise share
one identical card shell (same heading/copy/link placement); the only
difference is photo vs. icon-panel in the same visual slot. This makes equal
weight a property of the shared template rather than something asserted
per-card, addressing the tension flagged in the previous revision of this
document (three cards with imagery, one without).

**Resolved — grid:** 2×2 at desktop width, reflowing to a single column at
mobile width.

**Still resolved from before:** all four pathways stay, at equal weight;
three images are available and rights-clear (Volunteer, Carer, Sponsor a
Species — `docs/homepage-assets.md` 2.4–2.6).

**Open — test in prototype:** 2×2 vs. a single row of 4 at desktop (4-across
may feel cramped once real copy length sits in each card — worth checking
once rendered); single-column vs. any horizontal-scroll treatment at mobile;
the specific icon chosen for the Member card's panel.

**Round 2 — resolved (supersedes the photo/icon split above):** the first
prototype's three-photos-plus-one-icon-panel mix reads unequal in weight,
and at large viewports the photos' fixed-height/fluid-width crop
(`object-fit: cover`) changes the effective crop framing as viewport width
changes — which reads as distortion even though the images are never
literally stretched. Rather than tune the crop further, all four cards move
to **one shared treatment**: a solid brand-green icon panel with a simple
inline-SVG line-icon, in the same footprint/position the photos used to
occupy — Member, Volunteer, Carer, and Sponsor a Species each get their own
icon, built the same way as the existing Member icon (stroke-only SVG, no
new image assets). This makes equal visual weight structural rather than
incidental, and removes the aspect-ratio/crop problem entirely rather than
trying to fix it. The three photos this frees up (Volunteer/bat, Carer,
Sponsor a Species — `docs/homepage-assets.md` 2.4–2.6) are reused in the new
photo gallery (Section 12) instead of being dropped.

## 7. Donation Call to Action

**Decision needed:** the visual prominence and placement of the donation
prompt, and how it links onward to the external donation flow.

**Addresses:** `docs/homepage-content-strategy.md` item (e) and
functionality item 4 (donation flow reachable); the design brief's
fourth-priority organisational goal.

**Constraints from documentation:**
- The actual donation flow runs on the external Funraisin platform, not
  designed by this project (`docs/design-brief.md` Section 6).
- The Funraisin attribution badge was not downloaded; whether to use it is a
  hosting decision explicitly out of scope of the asset audit.

**Resolved:** a donation prompt must exist and must be reachable from the
homepage; its position in the section order is fixed (Section 2, position 6
— after get-involved, before the footer).

**Resolved — first-prototype default:** a single, minimal CTA button — solid
green fill / white text, or white fill / green outline (either is acceptable;
pick whichever pairs better with the section background once rendered) —
labelled **"Donate to Support Our Work"**, linking out to the external
Funraisin platform. No preset donation amounts ($20/$50/$100) on the
homepage; the amount selection stays on Funraisin's own flow.

**Open — test in prototype:** exact fill vs. outline choice, button size
relative to the get-involved cards' own CTAs.

## 8. Mission / About Us Link

**Resolved — content and placement pattern:** a short identity description
plus a single link to About Us (e.g. "Learn about our mission →"), placed as
its own small strip directly below the hero (Section 2, position 3) — not
inside a card, not a restatement of vision/mission/values (which stays on
About Us only, per `docs/homepage-content-strategy.md` item a, already
resolved).

**Open — test in prototype:** whether this strip reads better merged into
the bottom of the hero band itself vs. as a fully separate strip immediately
below it; typographic emphasis.

## 9. Scroll Interaction Pattern

**Resolved — a single, restrained pattern, applied consistently rather than
a different effect per section:**
- Each section/card fades in and translates up a small distance (roughly
  16–24px) as it crosses into the viewport, once, on first entry — not a
  parallax or repeating effect.
- The get-involved cards stagger slightly (e.g. ~80–120ms between cards) so
  the four don't all snap in simultaneously, without feeling like a
  slideshow.
- The header and hotline element never participate in this animation — they
  are simply present, not animated in, since they must never feel delayed or
  uncertain.
- `prefers-reduced-motion: reduce` disables the transform/fade and shows
  content immediately.

This directly implements your stated interaction direction ("smooth
scrolling experience with soft motion; text/information gently rising or
fading as the user scrolls").

**Open — test in prototype:** exact durations, distances, and easing curves;
whether the pulse considered for the hotline button (Section 4) is used at
all.

## 10. Footer / Contact Information

**Decision needed:** footer content and visual organisation — logo
placement (the footer logo asset is missing alt text, a fix to make at
implementation time, not a design decision here), how contact information
is repeated, social links, and how the spec's independent findability
requirement is satisfied separate from the hero hotline.

**Constraints from documentation:**
- `docs/analysis.md` and `docs/design-brief.md` both note the live site
  publishes **no email address anywhere** — recorded as an unresolved open
  trade-off ("treat as a gap to fill" vs. "treat as intentional, form-only
  triage"), not decided by either document, and not resolved in this round
  either.
- Confirmed real information available for the footer: address
  (Jerrabomberra Wetlands, Dairy Rd, Fyshwick ACT 2609), office hours, ABN,
  the hotline, and Facebook/Instagram links.
- The live site's icons are Font Awesome icon-font classes, not brand asset
  files — there is no custom icon set to draw from.

**Resolved:** address, office hours, ABN, hotline (repeated per Section 4),
and social links are all real and available for use; the footer's position
is fixed (Section 2, position 7, last).

**Resolved — email address:** do not add one. The live site has never
published a public email address, and no direction was given to fill that
gap — treat its absence as intentional rather than a defect to fix
unilaterally. The footer shows only the confirmed real information: hotline,
address, office hours, and social links.

**Open — test in prototype:** footer column layout; the source/style of
icons to use.

**Round 2 — resolved (additions, not replacements):** checking the rendered
first prototype's footer against `docs/analysis.md` Section 9, and against
the live site directly (fetched to get exact, real values rather than
guessing — no invented URLs), confirmed two pieces of real, sitewide
live-site footer content were never added — they are genuinely missing, not
already present under a different label:
- A **copyright line**: "© Copyright 2026" (the live site's own text).
- A **Privacy Policy link**, confirmed real at `/privacy`.
- A **Funraisin attribution link**, confirmed real at the live site's own
  attribution URL
  (`http://www.funraisin.co?utm_medium=customer&utm_source=ACT+Wildlife`),
  added for the same reason as the other two: it's real, sitewide, and
  currently missing — not a new feature.

Still no email address — confirmed absent on the live site
(`docs/analysis.md` Section 8), and this round doesn't change that; no fake
address is created. The address/hotline/ABN already shown in the footer's
own dedicated columns are **not** duplicated a second time inside the
copyright line — the live site's own copyright text is one long run-on line
combining copyright + address + hotline + ABN, but reproducing all of that a
second time next to columns that already show it would be redundant, so
only the "© Copyright 2026" portion is added as its own short line.

## 11. Desktop and Mobile Responsive Design

**Resolved — how the decisions above resolve responsively:**
- **Navigation:** single header collapses to a hamburger for nav links only;
  the hotline element stays visible, uncollapsed, at every width (Section
  2).
- **Hero:** Option A's responsive art-directed crop (Section 3) is the
  first-prototype approach to the ~4.2:1 image's mobile problem.
- **Get involved cards:** 2×2 grid at desktop, single column at mobile
  (Section 6).
- **Scroll motion:** identical pattern at both viewports, governed by
  `prefers-reduced-motion` rather than by breakpoint (Section 9).

**Still resolved from before:** both viewports (1920×1080 and 390×844) must
be verified before shipping, per `CLAUDE.md`; the hotline `tel:` link must
remain reachable at both sizes.

**Open — test in prototype:** concrete breakpoint value(s) beyond "desktop"
and "mobile"; whether any section needs an intermediate/tablet treatment;
final confirmation that the hero crop and card grid actually hold up once
rendered at both required viewports — this is the core check the next
iteration step exists to perform.

## 12. Photo Gallery / Visual Storytelling (new this round)

**Why this exists:** round 2 moves the three wildlife photos out of the
get-involved cards (Section 6) and confirms the hero keeps its own photo
(Section 3) — this section is where those photos get a second, more
prominent showcase, per your request for "more visually impactful
storytelling."

**Resolved — assets used:** only the already-verified local images —
`card-become-a-volunteer.jpg` (bat), `card-become-a-carer.jpg`, and
`card-sponsor-a-species.jpg` (`docs/homepage-assets.md` Sections 2.4–2.6),
optionally alongside `hero-banner.jpg` a second time (Section 2.1). No new
images are downloaded or generated.

**Resolved — placement:** near the mission strip/intro area (Section 2,
between positions 3 and 4), as its own section — a simple image
showcase/carousel, not a new page.

**Resolved — interaction:** manual **previous/next** controls only, no
autoplay. Autoplaying motion doesn't fit the "trust, warmth, calm" register
(Section 1) and isn't something you asked for; a visitor who wants the next
photo clicks for it. The section still participates in the standard
scroll-reveal fade/rise-in on first entry (Section 9), exactly like every
other content section — no new animation pattern is introduced.

**Resolved — no stretching, ever:** every image keeps its own native aspect
ratio. Cropping (via `object-fit: cover` inside a fixed-aspect frame that is
the same for every slide) is acceptable per your own instruction ("use
appropriate object-fit/crop strategy"); stretching or squashing an image to
fill a frame is not used anywhere on the page.

**Open — test in prototype:** exact frame aspect ratio/size; whether
`hero-banner.jpg` is included a second time here or the gallery stays
limited to the three card photos; caption text (if any) per image; exact
prev/next control styling.

## 13. Login (new this round)

**Why this exists:** the live site has two distinct backend systems behind
a single point of entry — already flagged as an unresolved UX trade-off in
`docs/design-brief.md` ("a visitor can tell, before clicking 'Login,' which
system they want"). The first prototype had no login entry point at all.

**Resolved — two distinct, clearly labelled destinations**, confirmed real
in `docs/analysis.md` Section 4:
- **Members Login** → `${SITE_ROOT}/members-login`
- **Wildman Login** → `${SITE_ROOT}/wildman-login`

**Resolved — presentation:** a single **"Login ▾"** nav item that opens a
small labelled menu naming both destinations plainly (not "Login 1/2"), so
the choice is legible before clicking — matching the design brief's own
recommendation. This is a new nav-level menu only; no login form is built
by this project — both destinations are the live site's own existing pages.

**Resolved — responsive behaviour:** the Login menu collapses into the
mobile hamburger along with the other nav links. Unlike the hotline
element, it is not the page's single highest-priority action, so it doesn't
need the hotline's "never collapses" exemption (Section 2).

**Open — test in prototype:** exact menu trigger style (text + caret vs. a
small icon); dropdown vs. a simple two-line disclosure on mobile.

## 14. Sponsor / Funder Acknowledgement (new this round)

**Why this exists:** you expected a "thank our sponsors" element that the
first prototype didn't include.

**Constraint confirmed before proposing anything:** the only sponsor/
partner logos found on the live site — including IFAW — were already
investigated in `docs/homepage-assets.md` Section 3 and explicitly
excluded; none were downloaded, because their current relationship with ACT
Wildlife could not be independently verified. No new external image is
downloaded to fill this gap, per your instruction — the resource genuinely
doesn't exist in this project yet, reported here rather than assumed.

**Resolved — text-only acknowledgement:** a short, plain-text line (no
logos, no images) naming the two funders `docs/analysis.md` Section 1
confirms as real, worded to reflect only **historical/founding** support —
e.g. "ACT Wildlife's early work was supported by grants from IFAW and the
ACT Herpetological Association" (exact phrasing finalised at implementation,
staying in the past/founding tense the source material actually supports,
not implying a current, ongoing partnership that hasn't been verified).

**Resolved — placement:** a small, low-emphasis line near the donation CTA
(Section 7) or inside the footer — acknowledgement copy, not a dedicated
visual section or a call to action.

**Open — test in prototype:** exact placement (donation section vs.
footer) and exact wording, once seen next to the surrounding copy.

## Decision Checklist (updated)

| # | Category | Status after this revision |
|---|---|---|
| 1 | Visual direction | **Resolved:** green (#4BA55B seed, sampled from logo), trust/warmth tone, imagery limited to verified assets. **Open:** exact shade/contrast tuning, overlay treatment, typography. |
| 2 | Homepage layout | **Resolved:** section order, single-column flow, single persistent header (dual nav dropped); **round 2:** "Get Involved ▾" groups the four pathways instead of flattening them, "Login ▾" added, logo gets `flex-shrink: 0` so it's never compressed. **Open:** spacing, breakpoints, header fixed/scroll behaviour, exact dropdown styling. |
| 3 | Hero image | **Resolved:** Option A confirmed after rendering — reuse `hero-banner.jpg` with responsive art-directed crop; storytelling need addressed by the new gallery (row 12) instead. **Open:** overlay strength. |
| 4 | Hotline / emergency info | **Resolved:** green button style, tel: link, header+hero+footer placement, plain-text rule for any future external number. **Open:** button shape/icon, optional pulse motion. |
| 5 | Notices / campaign section | **Resolved:** reusable card component, empty-state-only for this prototype, lighter visual weight. **Open:** empty-state copy, exact size. |
| 6 | Get involved cards | **Round 2 — resolved (supersedes round 1):** all four cards move to a shared icon-panel treatment (no photos), removing the photo-crop distortion and the 3-photo/1-icon weight mismatch; freed photos move to the new gallery (row 12). **Open:** icon choice for Volunteer/Carer/Sponsor a Species, desktop 2×2 vs. 4-across after rendering. |
| 7 | Donation CTA | **Resolved:** minimal button ("Donate to Support Our Work"), green fill/white text or white fill/green outline, linking out to Funraisin; no preset amounts. **Open:** fill vs. outline, size vs. other CTAs. |
| 8 | Mission / About link | **Resolved:** short strip + link, placed directly below hero. **Open:** merged-into-hero vs. separate strip, after rendering. |
| 9 | Scroll interaction | **Resolved:** fade + rise-on-entry, staggered on cards, header/hotline exempt, reduced-motion respected. **Open:** exact timing/easing. |
| 10 | Footer / contact | **Resolved:** content set (hotline, address, hours, social links — no email address, by decision), position fixed (last); **round 2:** adds a "© Copyright 2026" line, a real Privacy Policy link (`/privacy`), and a real Funraisin attribution link — all confirmed present on the live site and genuinely missing from the first prototype, not duplicates. **Open:** column layout, icon style. |
| 11 | Responsive design | **Resolved:** how each above decision resolves at both viewports. **Open:** exact breakpoint values, tablet treatment, final dual-viewport confirmation. |
| 12 | Photo gallery (new, round 2) | **Resolved:** placement near the mission strip, reuses the three freed get-involved photos (+ optionally the hero image again), manual prev/next only, no autoplay, same scroll-reveal pattern, no stretching. **Open:** frame ratio/size, whether the hero image is reused here, captions, control styling. |
| 13 | Login (new, round 2) | **Resolved:** "Login ▾" nav item with two clearly labelled destinations — Members Login (`/members-login`) and Wildman Login (`/wildman-login`) — collapses into the mobile hamburger like other nav links. **Open:** trigger style, dropdown vs. disclosure on mobile. |
| 14 | Sponsor / funder acknowledgement (new, round 2) | **Resolved:** text-only line naming IFAW and the ACT Herpetological Association as historical/founding funders — no logos, since none are verified/available (confirmed absent, not guessed). **Open:** exact placement (near donation CTA vs. footer), exact wording. |

Rows marked **Open** are intentionally left for the next prototype render to
answer by being looked at, not by further discussion — per your instruction
not to resolve every remaining detail in prose before a prototype exists.
As of this revision, every row (including the three new ones) has at least
a plain round-2 default; no row is left with zero direction.
