# Crit 2 — Unsolicited redesign

**What was the breakthrough that moved the work forward?**

The gallery bug looked like a JavaScript problem — the "From Our Rescues"
photo counter advanced but the picture never changed. I nearly rewrote the
slide-state script before checking the CSS. Reading `global.css` showed a
global `img { display: block }` rule beating the browser's own `[hidden]`
rule under normal cascade precedence (author origin beats user-agent origin
regardless of specificity), so every slide stayed painted no matter what the
script set `hidden` to. The breakthrough was realising the JS state was
already correct and the fix belonged in CSS, one line, not in the script.
The same instinct — check the rendered page before touching the code — also
caught two things `pnpm check` couldn't: a source-formatting quirk that
silently ate a space before an inline link, and a mobile-only layout overlap
between the carousel arrows and the slide text.

**What did this work change about who I want to be as a software developer?**

It reinforced that "the counter is right" and "the feature works" are
different claims, and only rendering the page settles the second one. I also
noticed I was tempted to trust an earlier design note (that the notices
would be stale by ship time) instead of re-checking the live site — a small
reminder that inherited assumptions decay faster than the record admits, and
verifying them costs less than shipping around them.
