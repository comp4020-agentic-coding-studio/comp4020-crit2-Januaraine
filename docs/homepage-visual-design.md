# ACT Wildlife — Homepage Visual Design Decisions

Scope: this document enumerates the visual design decisions needed to move
from the agreed homepage content/functionality (`docs/homepage-content-strategy.md`)
to an implementable visual design for the ACT Wildlife homepage. It **does
not make any of these decisions** — it states what must be decided, what UX
problem or need each decision addresses, what the existing documents already
constrain or resolve, and what remains genuinely open. No new research was
performed and no implementation (HTML/CSS/TypeScript/Astro or otherwise) is
included here. Every fact and constraint below traces back to
`docs/analysis.md`, `docs/design-brief.md`, `docs/homepage-content-strategy.md`,
`docs/homepage-assets.md`, `CLAUDE.md`, and `spec/`.

**Note:** `CLAUDE.md` records this project's stack as Vite + TypeScript +
HTML/CSS, not Astro. Flagged here only as a factual cross-check, since it
does not affect the visual decisions below.

## 1. Visual Direction (tone, colour, typography)

**Decision needed:** overall visual tone (trustworthy vs. urgent vs.
compassionate), colour palette, typography, whether imagery style is
unified across sections, and how to build a visual system on top of the
existing brand assets.

**Addresses:** the design brief's goals require the hotline to feel
immediately actionable while the membership/volunteer/donation content
needs to feel trustworthy and warm — the visual direction must carry both
registers at once.

**Constraints from documentation:**
- Only one logo mark exists (three byte-identical files plus one
  different-but-same-dimension footer variant); no reversed/dark-background
  variant exists (`docs/homepage-assets.md` Section 1, Section 5).
- The favicon is unusually constructed (182 KB, raster embedded in SVG).
- **None of the four source documents specify any colour palette or
  typography** — this is a fully open decision with no material to draw
  from.

**Resolved:** organisation name "ACT Wildlife" and tagline "Rescue
Rehabilitate Release" must appear; the existing logo assets are usable as-is.

**Open:** colour palette, typography, overall tone, whether a
dark-background-safe logo variant needs to be derived (none currently
exists).

## 2. Homepage Layout (section order and hierarchy)

**Decision needed:** the order of sections on the page and their relative
visual weight, and whether/how that visual hierarchy matches the content
priority order.

**Addresses:** `docs/homepage-content-strategy.md` Section 2 gives a
priority order for homepage content (identity → hotline → notice → get
involved → donation → contact → standing navigation) but explicitly states
it does not address layout or visual hierarchy — that is deferred to this
stage.

**Constraints from documentation:**
- The four "get involved" pathways (Member/Volunteer/Carer/Sponsor a
  Species) are a resolved decision at **equal weight** — layout must not
  privilege one over another (`docs/homepage-content-strategy.md` Section 5).
- `spec/invariants.test.ts` requires exactly one `<h1>` and one `<nav>`
  landmark per page.

**Resolved:** the content list and its priority order; equal weighting of
the four get-involved pathways.

**Open:** concrete layout (single column vs. grid), exact section stacking
order beyond the priority list, whether to keep the live site's dual
navigation pattern (separate sticky nav + main nav).

## 3. Homepage Hero Image

**Decision needed:** whether to reuse `hero-banner.jpg` (5,208×1,250 px, the
live site's crop uses `background-position: 23% 34%`), crop it differently,
replace it, or omit a background photo entirely; how the tagline and
hotline CTA are layered over it; the text-contrast/legibility approach.

**Addresses:** the hero is the highest-priority visual real estate,
matching the design brief's #1 goal (hotline reachability) and content
strategy items (a) and (b) (identity + hotline).

**Constraints from documentation:**
- `docs/homepage-assets.md` explicitly states that whether to reuse,
  replace, or omit this image "remains a visual design decision, out of
  scope" of the asset audit — it is deliberately left open for this stage.
- The image's aspect ratio (~4.2:1) makes cropping difficult at a 390 px
  mobile width, and **no mobile-specific hero asset exists**.

**Resolved:** the asset is downloaded and rights-clear; no other
hero-specific images exist besides this one plus the four get-involved card
images.

**Open:** reuse/replace/omit decision itself, crop/positioning at both
required viewports (1920×1080 and 390×844), text-overlay treatment.

## 4. Hotline / Emergency Information

**Decision needed:** the visual treatment of the hotline CTA (button,
banner, or plain text), its prominence, icon use, placement/repetition
across the page, and — critically — how it stays visually distinct from
any other body's phone number that might appear in a future notice.

**Addresses:** the design brief's top design goal — the hotline reachable
in one or two interactions from anywhere on the site, never confusable with
the bird-flu (or any other) hotline.

**Constraints from documentation:**
- `docs/homepage-content-strategy.md` is explicit: **0432 300 033 is the
  only ACT Wildlife hotline** presented on the homepage, and must be a real
  `tel:` link (checked by `spec/crit-2.test.ts`).
- If a future notice references another body's number (as the bird-flu
  notice did with 1800 675 888), the visual design must make clear that
  number belongs to a different organisation.

**Resolved:** which number belongs to ACT Wildlife; that it must be a real
`tel:` link; the framing language for the notice case.

**Open:** visual styling, placement/repetition strategy, the visual
template for distinguishing a future notice's external phone number.

## 5. Notices / Current Campaign Section

**Decision needed:** whether to build this section's structure now with an
empty/placeholder state, or defer it entirely until real content exists;
if built, the visual design of a reusable "Campaign/Event Card" component.

**Addresses:** `docs/homepage-content-strategy.md` already resolved to keep
this section as a standing structural area (matching the live site's
bird-flu notice + netting-swap campaign pattern), item (g).

**Constraints from documentation — important:**
- Both `docs/homepage-content-strategy.md` and `docs/homepage-assets.md`
  state plainly that **no current content exists** for this section. The
  live site's notice/campaign content is time-bound and captured at a point
  in time — it must not be reused as if current, and nothing should be
  invented to fill the gap. The netting-swap campaign image was
  deliberately excluded and not downloaded for this reason.
- This means the section's **structure** can be designed now, but its
  **content** cannot be authored in this pass.

**Resolved:** the section stays structurally present; old content must not
be reused or fabricated.

**Open:** how the empty state is presented (hidden vs. a "check back" style
message vs. responsively collapsed), the card template design for when
real content eventually arrives, the section's visual priority on the page
(content strategy places it low in priority order despite being kept
structurally).

## 6. Get Involved Section (four pathway cards)

**Decision needed:** the layout/grid treatment of the four cards (Member,
Volunteer, Carer, Sponsor a Species), and specifically how to handle the
missing image for the "Become a Member" card.

**Addresses:** `docs/homepage-content-strategy.md` functionality item 3 —
all four pathways navigable from the homepage at equal weight.

**Constraints from documentation:**
- Three cards have rights-clear images available: Volunteer (bat), Carer,
  Sponsor a Species (`docs/homepage-assets.md` 2.4–2.6).
- The "Become a Member" image was downloaded, then **removed** due to an
  unresolved third-party copyright claim (named rights holder found in
  file metadata) — no image currently exists for this card
  (`docs/homepage-assets.md` 2.3).
- This creates real tension with the "equal weight" requirement: three
  cards have imagery and one does not.

**Resolved:** all four pathways stay, at equal weight; three images are
available and rights-clear.

**Open:** how to resolve the visual asymmetry (drop imagery from all four
cards for consistency vs. three images plus a placeholder/icon/colour block
for Member), grid columns per viewport, and whether "equal weight" means
identical card design or just equal link prominence.

## 7. Donation Call to Action

**Decision needed:** the visual prominence and placement of the donation
prompt, and how it links onward to the external donation flow.

**Addresses:** `docs/homepage-content-strategy.md` item (e) and
functionality item 4 (donation flow reachable); the design brief's
fourth-priority organisational goal.

**Constraints from documentation:**
- The actual donation flow runs on the external Funraisin platform, not
  designed by this project (`docs/design-brief.md` Section 6).
- The Funraisin attribution badge was not downloaded; whether to use it is
  a hosting decision explicitly out of scope of the asset audit.

**Resolved:** a donation prompt must exist and must be reachable from the
homepage.

**Open:** visual weight relative to other CTAs (strong button vs. de-
emphasised text link), whether preset donation amounts ($20/$50/$100)
appear on the homepage itself (not required by the content strategy).

## 8. Mission / About Us Link

**Decision needed:** the visual and placement treatment of the short
identity description plus the single link to About Us (e.g. "Learn about
our mission →").

**Addresses:** `docs/homepage-content-strategy.md` item (a), already
resolved — the full vision/mission/values statement stays on About Us only;
the homepage carries only a short description and one link.

**Constraints from documentation:** the content scope here is fully
resolved — no mission/vision text may be duplicated onto the homepage
beyond the short description and single link.

**Resolved:** content scope (short description + one link, nothing more).

**Open:** purely visual — placement (inside the hero vs. a separate small
section vs. part of a header/intro area), typographic emphasis.

## 9. Footer / Contact Information

**Decision needed:** footer content and visual organisation — logo
placement (the footer logo asset is missing alt text, a fix to make at
implementation time, not a design decision here), how contact information
is repeated, social links, and how the spec's independent findability
requirement is satisfied separate from the hero hotline.

**Addresses:** `docs/homepage-content-strategy.md` item (f) / functionality
item 5 — contact/location information must be findable independent of the
emergency hotline path (e.g. for a general, non-emergency enquiry).

**Constraints from documentation:**
- `docs/analysis.md` and `docs/design-brief.md` both note the live site
  publishes **no email address anywhere** — recorded as an unresolved
  open trade-off ("treat as a gap to fill" vs. "treat as intentional,
  form-only triage"), not decided by either document.
- Confirmed real information available for the footer: address
  (Jerrabomberra Wetlands, Dairy Rd, Fyshwick ACT 2609), office hours, ABN,
  the hotline, and Facebook/Instagram links.
- The live site's icons are Font Awesome icon-font classes, not brand
  asset files — there is no custom icon set to draw from.

**Resolved:** address, office hours, ABN, hotline, and social links are all
real and available for use.

**Open:** whether to add a published email address (an unresolved
organisational trade-off — may need to be flagged back to the organisation
rather than decided unilaterally here), footer column layout, the source/
style of icons to use.

## 10. Desktop and Mobile Responsive Design

**Decision needed:** how each section reflows between 1920×1080 and
390×844 — navigation pattern (the live site uses three identical logo
files at three sizes across separate desktop/sticky/mobile navs), the hero
image's crop/position strategy at narrow widths, how the four cards
reflow, and whether section stacking order/priority holds across both
viewports.

**Addresses:** `CLAUDE.md`'s mandatory guardrail that any UI/layout/CSS
change must be verified at both 1920×1080 and 390×844 before shipping —
this is a hard process requirement, not an optional UX nicety.

**Constraints from documentation:**
- The hero image's ~4.2:1 aspect ratio will crop awkwardly at 390 px width,
  and no mobile-specific hero asset exists, so a cropping or alternate
  treatment must be decided.
- No breakpoint strategy, navigation-collapse pattern, or grid-column count
  is specified anywhere in the source documents.

**Resolved:** both viewports must be verified before shipping; the hotline
`tel:` link must remain reachable at both sizes.

**Open:** concrete breakpoint strategy, mobile hero treatment, navigation
collapse pattern (hamburger vs. persistent), card grid columns per
viewport.

## Decision Checklist

| # | Category | Core open question |
|---|---|---|
| 1 | Visual direction | Colour palette, typography, overall tone; whether a dark-background logo variant is needed |
| 2 | Homepage layout | Section order and visual hierarchy; whether to keep dual navigation |
| 3 | Hero image | Reuse / replace / omit `hero-banner.jpg`; desktop and mobile crop strategy; text-overlay treatment |
| 4 | Hotline / emergency info | CTA visual style, placement/repetition, distinction template for a future external number |
| 5 | Notices / campaign section | Build empty state now vs. defer entirely; empty-state presentation; card template |
| 6 | Get involved cards | How to resolve the missing "Become a Member" image; grid columns per viewport |
| 7 | Donation CTA | Visual strength (button vs. link); whether to show preset amounts |
| 8 | Mission / About link | Placement and typographic emphasis of the short description + link |
| 9 | Footer / contact | Whether to add an email address; footer column layout; icon source/style |
| 10 | Responsive design | Breakpoint strategy; mobile hero treatment; nav collapse pattern; card grid columns |

None of the above is decided by this document. Each row should be resolved
by you before implementation begins.
