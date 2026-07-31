import { describe, expect, it } from "vitest";
import { otherLocalePath, pathFor } from "../../src/lib/i18n";

describe("localized paths", () => {
  it("keeps English canonical at the root", () => {
    expect(pathFor("en", "/journey")).toBe("/journey");
    expect(pathFor("en", "/")).toBe("/");
  });

  it("prefixes Vietnamese routes", () => {
    expect(pathFor("vi", "/journey")).toBe("/vi/journey");
    expect(pathFor("vi", "/")).toBe("/vi");
  });

  it("switches locale without losing the current route", () => {
    expect(otherLocalePath("en", "/work")).toBe("/vi/work");
    expect(otherLocalePath("vi", "/vi/work")).toBe("/work");
  });
});
