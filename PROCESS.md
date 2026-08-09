# Process overview

A reading-guide to how the work came together --- a map to your process, not an
essay about it. Markers read this file and follow its citations; they don't
trawl the repo for evidence you didn't point at, so if a moment mattered, cite
it.

This file is the shape; the course site's
[assessment page](https://comp.anu.edu.au/courses/comp4020-agentic-coding-studio/topics/assessment/#what-you-submit)
is the requirement, and its
[word counts](https://comp.anu.edu.au/courses/comp4020-agentic-coding-studio/topics/assessment/#word-counts)
cover every deliverable.

## What I built

An Astro/TypeScript redesign of the ACT Wildlife homepage: the old standalone
"Notices & Current Campaigns" strip and mission strip are folded into the hero
as an autoplaying two-slide carousel and a single subtitle paragraph, the
header/footer are decluttered (no hotline pill, no small footer logo, a
right-aligned nav), and a fixed 24/7 hotline button follows the reader on
every scroll position.

## The moments that mattered

1. The brief I inherited planned an empty-state placeholder for the notices
   slide, on the assumption any real notice would be stale by the time this
   shipped. Instead of building disposable placeholder copy, I fetched the
   live site and found a bird-flu notice genuinely dated 3 July 2026 and a
   netting-swap campaign with session dates still in the future (29
   Aug--10 Oct 2026) --- both current, not historical --- so I used the real
   notice content, keeping the government hotline (`1800 675 888`) labelled
   as a separate number rather than styled like our own
   ([`72a6532`](https://github.com/comp4020-agentic-coding-studio/comp4020-crit2-Januaraine/commit/72a6532)).
2. The rebuilt "From Our Rescues" gallery updated its `1/2` counter on click
   but never changed the visible photo. Rather than rewriting the slide-state
   script, I read `global.css` and found a global `img { display: block }`
   author-origin rule beating the browser's own `[hidden]` rule under normal
   CSS cascade precedence, so every slide stayed painted regardless of the
   `hidden` attribute the script was already toggling correctly. The fix was
   one CSS rule; I confirmed it by driving the rendered page with Playwright
   at both 1920x1080 and 390x844 and checking the `src` of the visible image
   actually changed on each click, not just the counter text
   ([`72a6532`](https://github.com/comp4020-agentic-coding-studio/comp4020-crit2-Januaraine/commit/72a6532)).

## Before you ship

`pnpm check:evidence` verifies your citations resolve to real commits, that the
current reflection entry is in `reflections/`, and that your `CLAUDE.md` is
there --- before a marker ever opens the file. It checks that your map is
traceable, not that it is good: the marker judges whether your small,
deliberately chosen set of moments shows real judgement and reflection. A green
check is not a substitute for that curation.

Images are deliberately not checked, because whether one renders is visible the
moment you look. Open this file on GitHub and look at it before you ship.


---
## 📝 Decision Log & Process Notes (Draft / Raw Evidence)

> **Note:** Temporary record of real-time design decisions, spec constraints, and trade-offs. To be synthesized into final process documentation.

### 1. Avian Flu Notice & Campaign Slot Strategy
* **Observation:** The live site features a 3 July 2026 Avian Flu notice.
* **Spec Constraint:** Per `docs/homepage-content-strategy.md`, historical notices are treated as time-bound.
* **Original decision:** Designed a reusable `Campaign Card` component with a clean, low-profile **Empty State** (`Check back here for current updates`) instead of hardcoding static notice copy or non-primary hotlines (`1800 675 888`). Guaranteed layout robustness when no active campaign is running.
* **Superseded:** Re-checked the live site before shipping and found the notice, and a netting-swap campaign, were both still genuinely current (see "The moments that mattered" above). Shipped the real notice content instead of the empty state, with the government hotline kept explicitly labelled as a separate, non-ACT-Wildlife number.

### 2. Sponsor Logos (IFAW) & Copyright Compliance
* **Constraint:** IFAW logo/partnership could not be independently verified in `docs/analysis.md` and was excluded from verified asset downloads.
* **Decision:** Omitted unverified sponsor logo images in Pass 2 to maintain strict intellectual property and project asset compliance, prioritizing verified organisational photography.

### 3. Navigation Hierarchy & Visual De-cluttering
* **Issue:** Flattening all four get-involved pathways on the top nav caused excessive overcrowding and logo squeezing on medium viewports.
* **Decision:** Consolidated pathways into a single `Get Involved ▾` dropdown menu and added a distinct `Login ▾` portal link, achieving a streamlined primary IA (`Home` | `About Us` | `Get Involved ▾` | `Donate` | `Contact Us` | `Login ▾`).

### 4. Photography & Hero Image Distortion Fix
* **Issue:** Multi-image hero cards experienced aspect-ratio distortion on ultra-wide desktop viewports.
* **Decision:** Preserved the authenticated photo banner for immediate brand recognition while transitioning hero animal photography into a dedicated, responsive gallery/carousel component.