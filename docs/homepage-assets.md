# ACT Wildlife — Homepage Asset Audit

Scope: this document inventories assets from the live ACT Wildlife site
(https://www.actwildlife.org.au/) that are potentially reusable in the
homepage redesign. It makes no visual design decisions. Content facts
(organisation description, goals, CTAs) are already covered by
`docs/analysis.md`; this document is about **files** (images, icons, brand
graphics), not page copy.

**Revision note:** the initial audit pass (below, "Method — initial audit")
recorded every asset via `HTTP HEAD` only, with nothing downloaded. Following
your explicit asset-handling rules, a second pass downloaded the assets
confirmed to be ACT Wildlife's own verified branding/homepage content into
this repository, and permanently excluded assets whose relationship to ACT
Wildlife is unverified (the partner/sponsor logo strip) rather than
placeholdering them. One downloaded asset was subsequently removed after its
metadata revealed an unresolved third-party copyright claim. This revision
updates each affected entry in place; it introduces no new facts beyond what
the initial audit and the subsequent local verification (checksums, pixel
dimensions, EXIF/XMP inspection) established.

## Method

**Initial audit (HEAD-only):**
- Source: the live homepage HTML at `https://www.actwildlife.org.au/`,
  retrieved 2026-08-08.
- Every asset was located by parsing that HTML for `<img>` tags, `<link
  rel="icon">`, `<meta property="og:image">`/`twitter:image`, and CSS
  `background-image` declarations — not guessed or invented.
- Each asset's existence, HTTP status, MIME type, and byte size were
  confirmed with an `HTTP HEAD` request only (all returned `200 OK`). Where
  pixel width/height is stated as coming from markup, it comes from an
  explicit `width`/`height` HTML attribute, not from opening the file.

**Second pass (local download + verification, this revision):**
- Per your asset-handling rules, the assets below marked "Downloaded" were
  fetched into `public/images/homepage/` in this repository. Their original
  CDN source URLs are retained below for provenance.
- Byte size of every downloaded file was confirmed to exactly match the
  `Content-Length` recorded during the initial HEAD-only audit (integrity
  check).
- SHA-256 checksums were computed to test the initial audit's "possible
  duplicate" observation about the three nav logos: `logo-primary.png`,
  `logo-sticky.png`, and `logo-mobile.png` are **byte-identical** (confirmed,
  not just same-size). `logo-footer.png` is the same pixel dimensions but a
  **different file** (different checksum).
- Pixel dimensions were read directly from the downloaded files (Pillow
  `Image.open().size`), and EXIF/XMP metadata was inspected for each JPEG to
  check for a named copyright/rights holder, distinct from generic
  ICC-profile boilerplate strings (e.g. "Copyright 1999 Adobe Systems
  Incorporated" or similar HP/Adobe profile text), which do not indicate
  image-content ownership.
- Assets whose relationship to ACT Wildlife could not be verified (the
  partner/sponsor logo strip, Section 3) were **not downloaded** and are
  excluded from the redesign entirely, per your instruction — no
  placeholder stands in for them.
- The Netting Swap campaign image and the `og:image` social-preview image
  were also **not downloaded**: the former because it is tied to a
  time-bound campaign already established as excluded content (see
  `docs/homepage-content-strategy.md` Section 2g), the latter because it is
  not visible page content and wasn't needed for the current scope.

---

## 1. Organisational Branding

### 1.1 Primary logo (desktop navigation + footer)
- **Type:** Raster logo, PNG
- **Source page:** Home
- **Source URL:** `https://d1phevgksja0dv.cloudfront.net/ea31sysllq0ws4ogkko8g80ko.png`
- **Local file/path:** `public/images/homepage/logo-primary.png` — **Downloaded**
- **Dimensions:** 177×123 px; 25,443 bytes
- **Description:** `alt="ACT Wildlife"`. Used in the primary desktop
  navigation bar and again in the footer's `footer-content-right` block.
- **Current usage:** Primary desktop nav logo; footer logo (right-hand block)
- **Reuse suitability:** Suitable — this is the organisation's own primary
  logo mark, downloaded and verified.

### 1.2 Sticky-nav logo
- **Type:** Raster logo, PNG
- **Source page:** Home
- **Source URL:** `https://d1phevgksja0dv.cloudfront.net/8spftwsperk0skcwco48w8ss4.png`
- **Local file/path:** `public/images/homepage/logo-sticky.png` — **Downloaded**
- **Dimensions:** 177×123 px; 25,443 bytes; **SHA-256 identical to 1.1** (confirmed same underlying file, re-served under a different generated filename)
- **Description:** `alt="Logo"`. Appears in a slim "sticky" navigation bar
  above the main header.
- **Current usage:** Sticky/secondary navigation bar logo
- **Reuse suitability:** Same asset as 1.1; only one file needs to be kept.

### 1.3 Mobile nav logo
- **Type:** Raster logo, PNG
- **Source page:** Home
- **Source URL:** `https://d1phevgksja0dv.cloudfront.net/cn75q3k8fs8ocg88c4kkcs080.png`
- **Local file/path:** `public/images/homepage/logo-mobile.png` — **Downloaded**
- **Dimensions:** 177×123 px; 25,443 bytes; **SHA-256 identical to 1.1/1.2**
- **Description:** `alt="ACT Wildlife"`. Rendered in the mobile header layout.
- **Current usage:** Mobile-viewport header logo
- **Reuse suitability:** Same asset as 1.1/1.2; no distinct logo variant
  (reversed/white-on-dark, stacked lockup, monogram) exists — only this one
  mark, re-served three times.

### 1.4 Footer logo (left column)
- **Type:** Raster logo, PNG
- **Source page:** Home
- **Source URL:** `https://d1phevgksja0dv.cloudfront.net/78c6c4ef61adee2e5b76dc4763beb2a6.png`
- **Local file/path:** `public/images/homepage/logo-footer.png` — **Downloaded**
- **Dimensions:** 177×123 px; 22,980 bytes; confirmed **different file
  content** from 1.1–1.3 despite matching pixel dimensions (different
  checksum)
- **Description:** No `alt` text in the source markup.
- **Current usage:** Footer, left-hand column, wrapped in a link to `/`
- **Reuse suitability:** Suitable; flag the missing `alt` text as a gap to
  fix if this exact file is reused (the spec's invariant test requires alt
  text on every image).

### 1.5 Favicon
- **Type:** Vector icon, SVG, declared as `rel="shortcut icon"`
- **Source page:** Home (`<link>` in `<head>`, site-wide)
- **Source URL:** `https://d1phevgksja0dv.cloudfront.net/734cnpr20a88c4s8co80gc8ks.svg`
- **Local file/path:** `public/images/homepage/favicon.svg` — **Downloaded**
- **Dimensions:** Outer `<svg width="153" height="153" viewBox="0 0 153 153">`, wrapping an embedded raster pattern of 529×369; 182,230 bytes
- **Description:** Declared `type="image/png"` in the source `<link>` tag
  despite being an `.svg` file served as `image/svg+xml` — a mismatch
  between declared and actual MIME type, confirmed now the file is local.
  At 182 KB it is large for a favicon; it embeds a raster pattern rather
  than being pure vector artwork.
- **Current usage:** Browser tab / bookmark icon, site-wide
- **Reuse suitability:** Usable as the source for a favicon set, but its
  unusual construction (raster embedded in SVG, oversized) is worth keeping
  in mind if a cleaner favicon is derived from it later.

### 1.6 Social-share preview image (Open Graph / Twitter Card)
- **Type:** Raster image, JPEG
- **Source page:** Home (`<meta property="og:image">` / `twitter:image`)
- **Source URL:** `https://d1phevgksja0dv.cloudfront.net/7fx0sne240sgg0oss4ko848cg.jpg`
- **Local file/path:** Not downloaded — not needed for current homepage
  visual-asset scope (it renders only in social link previews, not on the
  page itself)
- **Dimensions:** Not determined; file size 619,884 bytes (from initial HEAD audit)
- **Description:** Not rendered anywhere visible on the page — only used by
  social platforms when the homepage URL is shared. Content not inspected.
- **Current usage:** Social link-preview image only
- **Reuse suitability:** Undetermined; left out of scope for now. Revisit if
  the redesign needs its own `og:image`.

### 1.7 Icons in general
- Social-media and utility icons (Facebook, Instagram, home, search,
  chevrons) are rendered via **Font Awesome icon-font classes** — not image
  files, no source URL to record.
- One inline `<svg id="tick">` element exists on the page: a generic
  checkmark/success animation, not an ACT Wildlife brand graphic.
- No other custom icon or brand-graphic files (beyond the logo and favicon
  above) were found on the homepage.

---

## 2. Homepage Images

### 2.1 Hero background image
- **Type:** Raster image, JPEG (CSS `background-image`, not an `<img>`)
- **Source page:** Home
- **Source URL:** `https://d1phevgksja0dv.cloudfront.net/76d9ef1a9adc37fbc123bcf52e475cd7.jpg`
- **Local file/path:** `public/images/homepage/hero-banner.jpg` — **Downloaded**
- **Dimensions:** 5,208×1,250 px; 251,740 bytes
- **Description:** Set via `background-image: url(...)` with
  `background-size: cover; background-position: 23% 34%` on the page's top
  row, behind the "Rescue Rehabilitate Release" headline and the 24/7
  Hotline CTA. Only a generic HP ICC-profile boilerplate copyright string
  was found in its metadata — no named third-party rights holder.
- **Current usage:** Hero/banner section background
- **Reuse suitability:** Suitable — no unresolved rights concern found.
  Whether to reuse it, replace it, or use a background photo at all in the
  redesigned hero remains a visual design decision, out of scope here.

### 2.2 "Wildlife Friendly Netting Swap" campaign image
- **Type:** Raster image, JPEG
- **Source page:** Home
- **Source URL:** `https://d1phevgksja0dv.cloudfront.net/a11e52ea84640960b079b085d3abc38e.jpg`
- **Local file/path:** Not downloaded — excluded (see below)
- **Dimensions:** Not determined; file size 209,528 bytes (from initial HEAD audit)
- **Description:** Sits under the "Wildlife Friendly Netting Swap" heading.
  `alt=""` (empty) in the source markup.
- **Current usage:** Notices/campaign section of the homepage
- **Reuse suitability:** **No.** Per `docs/homepage-content-strategy.md`
  Section 2(g), this campaign is a time-bound, current-as-of-capture fact
  and must not be copied onto the new homepage as current content. It is
  intentionally not downloaded and stays excluded; the redesign's
  notices/campaign area is to be built as a reusable Campaign/Event Card
  component that can later be filled with genuinely current content, not
  with this image.

### 2.3 "Become a Member" card image (wombat) — REMOVED
- **Type:** Raster image, JPEG
- **Source page:** Home
- **Source URL:** `https://d1phevgksja0dv.cloudfront.net/57d058b5eaa3715061f5cdd2f9ccce55.jpg`
- **Local file/path:** ~~`public/images/homepage/card-become-a-member.jpg`~~ —
  **downloaded, then removed** (commit `8710b71`)
- **Dimensions:** Displayed 300×310 in markup; original file 2,000×1,334 px; 105,794 bytes
- **Description:** `alt`/`title="ACT Wildlife wombat for Member"`.
  Positioned above the "Become a Member" heading in "How you can get
  involved."
- **Current usage (live site):** "Get involved" card illustration for the
  Become a Member pathway
- **Reuse suitability: Excluded — unresolved third-party copyright.** XMP
  metadata on the downloaded file carried an explicit named rights claim
  (`dc:creator` / `dc:rights`: "Jonathan Steinbeck"; `dc:description`: "ACT
  WIldlife Sharon and wombats, Canberra, ACT, November 2025") — distinct
  from the generic ICC-profile boilerplate found in the other images, and
  not something this audit can verify as licensed for reuse. Per your rule
  that unresolvable reuse status must be excluded rather than guessed at,
  the file was removed from the repository. This content slot (the Become a
  Member card) still exists in the redesign per
  `docs/homepage-content-strategy.md` Section 3, but needs a different image
  — or none — until this rights question is resolved.

### 2.4 "Become a Volunteer" card image (bat)
- **Type:** Raster image, JPEG
- **Source page:** Home
- **Source URL:** `https://d1phevgksja0dv.cloudfront.net/ff9b5211133d48b05ca9cc899f2fec90.jpg`
- **Local file/path:** `public/images/homepage/card-become-a-volunteer.jpg` — **Downloaded**
- **Dimensions:** Displayed 300×256 in markup; original file 2,048×1,152 px; 79,203 bytes
- **Description:** `alt`/`title="ACT Wildlife Bat for volunteer"`. No named
  third-party copyright holder found in metadata.
- **Current usage:** "Get involved" card illustration for the Become a
  Volunteer pathway
- **Reuse suitability:** Suitable — no unresolved rights concern found.

### 2.5 "Become a Carer" card image
- **Type:** Raster image, JPEG
- **Source page:** Home
- **Source URL:** `https://d1phevgksja0dv.cloudfront.net/3c74a68f5116ddfd47afe83ac11369c9.jpg`
- **Local file/path:** `public/images/homepage/card-become-a-carer.jpg` — **Downloaded**
- **Dimensions:** Displayed 300×282 in markup; original file 3,648×5,472 px; 114,390 bytes
- **Description:** `alt`/`title="ACT Wildlife eBecome a Carer small"` (typo
  "eBecome" present in the source site's own markup, reproduced verbatim,
  not corrected). Shot on a Canon EOS 70D, dated 2019:11:04 per EXIF. Only
  generic Adobe ICC-profile boilerplate found in metadata — no named
  third-party rights holder.
- **Current usage:** "Get involved" card illustration for the Become a
  Carer pathway
- **Reuse suitability:** Suitable — no unresolved rights concern found.

### 2.6 "Sponsor a Species" card image
- **Type:** Raster image, JPEG
- **Source page:** Home
- **Source URL:** `https://d1phevgksja0dv.cloudfront.net/62316d461fbb9da661e7014b790810ba.jpg`
- **Local file/path:** `public/images/homepage/card-sponsor-a-species.jpg` — **Downloaded**
- **Dimensions:** 600×503 px; 57,892 bytes
- **Description:** `alt`/`title="ACT Wildlife Sponsor A Species ad"` — labelled
  "ad" in the source site's own markup, suggesting the organisation treats
  it as promotional/campaign artwork rather than documentary photography.
  No named third-party copyright holder found in metadata.
- **Current usage:** "Get involved" card illustration for the Sponsor a
  Species pathway
- **Reuse suitability:** Suitable — no unresolved rights concern found.

---

## 3. Partner/Sponsor Logos — Excluded

These appeared in a partner/sponsor logo strip near the "Your donation can go
a long way" section on the live site, below the four "get involved" cards.
Per your explicit instruction, **logos whose relationship with ACT Wildlife
is not independently verified are removed from the redesign entirely** —
not downloaded, not replaced with a placeholder, not carried forward in any
form. They are listed here only for audit provenance (what was found, and
why it was excluded), not as candidates awaiting a decision.

| Logo | Source URL | Link target | Status |
|---|---|---|---|
| ACT Herpetological Association | `https://d1phevgksja0dv.cloudfront.net/1kgdk7nhl5a80ocs8wo0wsgs8.jpg` | `http://www.actha.org.au/` | Excluded — relationship not independently verified |
| Bunnings | `https://d1phevgksja0dv.cloudfront.net/9sirorzhs6ck88swgockcoogw.png` | `https://www.bunnings.com.au/` | Excluded — relationship not independently verified |
| Capital Chemist (Curtin) | `https://d1phevgksja0dv.cloudfront.net/77y9v0rfkj8ccwgo4og0w0ksc.png` | `https://www.capitalchemist.com.au/curtin` | Excluded — relationship not independently verified |
| "cgfb.com.au" (identity not confirmed from page markup) | `https://d1phevgksja0dv.cloudfront.net/b5ft05wytb4ggs484o4kwcsoc.png` | `https://cgfb.com.au/` | Excluded — relationship AND entity identity not independently verified |
| IFAW | `https://d1phevgksja0dv.cloudfront.net/cevw0o4q1xs8o4gcsk40w0008.png` | `https://www.ifaw.org/` | Excluded — relationship not independently verified |

`docs/analysis.md` (Section 1) records the ACT Herpetological Association
and IFAW as historical early funding sources for the organisation, which is
consistent with — but does not itself confirm as current — the presence of
these two logos on the live site. No re-verification of current partnership
status was performed for any of the five, so all five are excluded on the
same basis.

### "Funraisin" platform attribution badge
- **Source URL:** `https://d1phevgksja0dv.cloudfront.net/dgh89lchoiokwccs8osks8kcc.svg`
- **Not downloaded.** This is not a partner logo but a third-party fundraising
  platform's own attribution mark (the platform the current site's donation
  flow runs on, per `docs/analysis.md` Section 6). Whether it has any place
  in the redesign depends entirely on whether the redesign integrates with
  Funraisin at all — a technical/hosting decision out of scope for this
  document.

---

## 4. Summary Table

| # | Asset | File type | Local path | Status |
|---|---|---|---|---|
| 1.1 | Primary logo (desktop) | PNG | `public/images/homepage/logo-primary.png` | Downloaded |
| 1.2 | Sticky-nav logo | PNG | `public/images/homepage/logo-sticky.png` | Downloaded (identical to 1.1) |
| 1.3 | Mobile nav logo | PNG | `public/images/homepage/logo-mobile.png` | Downloaded (identical to 1.1) |
| 1.4 | Footer logo (left) | PNG | `public/images/homepage/logo-footer.png` | Downloaded |
| 1.5 | Favicon | SVG | `public/images/homepage/favicon.svg` | Downloaded |
| 1.6 | Social preview image | JPEG | — | Not downloaded — out of scope |
| 2.1 | Hero background | JPEG | `public/images/homepage/hero-banner.jpg` | Downloaded |
| 2.2 | Netting-swap campaign image | JPEG | — | Not downloaded — excluded, time-bound content |
| 2.3 | Become a Member card image | JPEG | — | Downloaded, then **removed** — unresolved copyright (Jonathan Steinbeck) |
| 2.4 | Become a Volunteer card image | JPEG | `public/images/homepage/card-become-a-volunteer.jpg` | Downloaded |
| 2.5 | Become a Carer card image | JPEG | `public/images/homepage/card-become-a-carer.jpg` | Downloaded |
| 2.6 | Sponsor a Species card image | JPEG | `public/images/homepage/card-sponsor-a-species.jpg` | Downloaded |
| 3.1–3.5 | Partner/sponsor logos (5) | JPEG/PNG | — | Excluded — relationship unverified |
| 3.6 | Funraisin platform badge | SVG | — | Not downloaded — hosting decision out of scope |

**9 files** are currently present in `public/images/homepage/`.

## 5. Explicitly Not Found

- No distinct logo **variant** (reversed/white-on-dark, monogram, stacked
  lockup) beyond the single mark rendered at three sizes (1.1–1.3) and once
  more in the footer (1.4).
- No custom icon graphics beyond the favicon — social/utility icons use the
  Font Awesome icon font, and the one inline SVG on the page is a generic
  success-checkmark animation, not a brand graphic.
- No additional homepage-specific promotional/announcement image beyond the
  netting-swap campaign image (2.2) — the bird-flu notice is text-only, with
  no accompanying image on the homepage.

## 6. What's Left / Next Steps

- **Resolved this revision:** local paths and provenance URLs recorded for
  all 9 downloaded assets; the partner/sponsor logo strip and Funraisin
  badge are recorded as excluded (not pending); the Become a Member card
  image's copyright exclusion is recorded with its rationale.
- **Still open:** the Become a Member get-involved card (2.3) has no image
  until a rights-cleared replacement is sourced or the card ships without
  one — this is a content gap, not a design decision to make now.
- **Still open:** the notices/campaign section has no current content (see
  `docs/homepage-content-strategy.md` Section 2g) — the plan is a reusable
  Campaign/Event Card component, to be filled with genuinely current content
  later, not with the excluded netting-swap image.
- **Next action:** proceed to implementation (Astro setup, homepage build)
  using the 9 verified local assets above; `pnpm check` currently fails for
  reasons unrelated to assets (the starter template has not yet been
  replaced) — that is expected to resolve once implementation begins, not
  before.
