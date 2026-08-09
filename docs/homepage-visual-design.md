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

**Open — not yet decided, no direction proposed:** visual weight relative to
other CTAs (strong button vs. de-emphasised text link); whether preset
donation amounts ($20/$50/$100) appear on the homepage itself (not required
by the content strategy). This section is left open rather than given a
first-prototype default, since no direction for it was given in this round
— it should be decided (or explicitly deferred with a plain default) before
or during the first prototype build.

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

**Open — no direction proposed this round:** whether to add a published
email address (an unresolved organisational trade-off — may need to be
flagged back to the organisation rather than decided unilaterally here);
footer column layout; the source/style of icons to use.

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

## Decision Checklist (updated)

| # | Category | Status after this revision |
|---|---|---|
| 1 | Visual direction | **Resolved:** green (#4BA55B seed, sampled from logo), trust/warmth tone, imagery limited to verified assets. **Open:** exact shade/contrast tuning, overlay treatment, typography. |
| 2 | Homepage layout | **Resolved:** section order, single-column flow, single persistent header (dual nav dropped). **Open:** spacing, breakpoints, header fixed/scroll behaviour. |
| 3 | Hero image | **Resolved (recommended):** Option A, reuse `hero-banner.jpg` with responsive art-directed crop. **Open:** confirm vs. Option B after rendering; overlay strength. |
| 4 | Hotline / emergency info | **Resolved:** green button style, tel: link, header+hero+footer placement, plain-text rule for any future external number. **Open:** button shape/icon, optional pulse motion. |
| 5 | Notices / campaign section | **Resolved:** reusable card component, empty-state-only for this prototype, lighter visual weight. **Open:** empty-state copy, exact size. |
| 6 | Get involved cards | **Resolved:** icon-panel treatment for the Member card in place of the missing photo, shared card template, 2×2 grid. **Open:** icon choice, desktop 2×2 vs. 4-across after rendering. |
| 7 | Donation CTA | **No direction proposed this round.** Position fixed (Section 2); visual weight and preset amounts still open with no default given. |
| 8 | Mission / About link | **Resolved:** short strip + link, placed directly below hero. **Open:** merged-into-hero vs. separate strip, after rendering. |
| 9 | Scroll interaction | **Resolved:** fade + rise-on-entry, staggered on cards, header/hotline exempt, reduced-motion respected. **Open:** exact timing/easing. |
| 10 | Footer / contact | **Resolved:** content set, position fixed (last). **No direction proposed this round** on email address, column layout, icon style. |
| 11 | Responsive design | **Resolved:** how each above decision resolves at both viewports. **Open:** exact breakpoint values, tablet treatment, final dual-viewport confirmation. |

Rows marked **Open** are intentionally left for the first prototype to
answer by being looked at, not by further discussion — per your instruction
not to resolve every remaining detail in prose before a prototype exists.
Rows 7 and parts of Row 10 have no first-prototype default proposed at all
(as opposed to a default awaiting visual confirmation) and should be
addressed before or during the build, since no direction was given for them
in this round.
