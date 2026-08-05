import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { JSDOM } from "jsdom";
import { describe, expect, it } from "vitest";

// Mechanically checkable lines from this week's published spec
// (crits/02-unsolicited-redesign). The rest of the spec — is the
// organisation real, is yours actually better, can you account for how you
// directed the agent — only a person can judge at the crit.
const home = new JSDOM(
  readFileSync(resolve("dist/index.html"), "utf8"),
).window.document;

describe("week 2 spec: unsolicited redesign", () => {
  it("replaces the starter placeholder — real content, not the template's", () => {
    expect(home.title.trim()).not.toBe("COMP4020 prototype");
    expect(home.querySelector("h1")?.textContent?.trim()).not.toBe(
      "COMP4020 prototype",
    );
    expect(home.body.textContent).not.toContain(
      "Replace this with your prototype",
    );
  });

  it("gives a way to find the real organisation — contact info, not just prose about them", () => {
    const findable = [
      ...home.querySelectorAll('a[href^="mailto:"]'),
      ...home.querySelectorAll('a[href^="tel:"]'),
      ...home.querySelectorAll("address"),
      ...[...home.querySelectorAll("a")].filter((a) =>
        /contact|find us|visit|location/i.test(a.textContent ?? ""),
      ),
    ];
    expect(
      findable.length,
      "no mailto/tel link, <address>, or contact/location link found",
    ).toBeGreaterThan(0);
  });
});
