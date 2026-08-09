# Crit 2 — Unsolicited redesign

**What was the breakthrough that moved the work forward?**

One of the biggest problems I encountered was that the Agent often treated a small visual or interaction issue as an opportunity to redesign the surrounding component. For example, when I asked for specific changes to the header, mobile navigation, and responsive layout, some changes unintentionally affected existing behaviour — including the mobile menu overlay, dropdown interactions, and navigation links. The breakthrough was learning to stop asking for broad visual changes and instead describe the exact behaviour that must remain unchanged, the specific element that was causing the problem, and the smallest change I wanted. When the mobile navigation toggle stopped responding, for example, I asked the Agent to inspect the actual event handlers, rendered stacking order, and CSS rather than guessing at the JavaScript. This revealed that the backdrop was sitting above the header and intercepting pointer events. The fix was therefore a small z-index and background change rather than another redesign of the navigation system.

**What did this work change about who I want to be as a software developer?**

It reinforced that "the counter is right" and "the feature works" are
different claims, and only rendering the page settles the second one. I also
noticed I was tempted to trust an earlier design note (that the notices
would be stale by ship time) instead of re-checking the live site — a small
reminder that inherited assumptions decay faster than the record admits, and
verifying them costs less than shipping around them.
