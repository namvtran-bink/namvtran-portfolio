import { readFileSync, existsSync } from "node:fs";
import { describe, expect, it } from "vitest";

const routes = [
  "dist/index.html",
  "dist/vi/index.html",
  "dist/journey/index.html",
  "dist/vi/journey/index.html",
  "dist/work/index.html",
  "dist/vi/work/index.html",
  "dist/writing/index.html",
  "dist/vi/writing/index.html",
  "dist/about/index.html",
  "dist/vi/about/index.html",
];

describe("production output", () => {
  it.each(routes)("generates %s", (route) =>
    expect(existsSync(route)).toBe(true),
  );

  it("includes locale alternates", () => {
    const html = readFileSync("dist/index.html", "utf8");
    expect(html).toContain('hreflang="vi"');
    expect(html).toContain('hreflang="en"');
  });
});
