import { expect, test } from "@playwright/test";

test("English homepage has accessible primary structure", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/Nam V\. Tran/);
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "SOFTWARE",
  );
  await expect(
    page.getByRole("navigation", { name: "Primary navigation" }),
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Explore my journey" }),
  ).toHaveAttribute("href", "/journey");
});

test("language switch preserves the section", async ({ page }) => {
  await page.goto("/work");
  await page.getByRole("link", { name: "Đổi sang Tiếng Việt" }).click();
  await expect(page).toHaveURL(/\/vi\/work\/?$/);
  await expect(page.locator("html")).toHaveAttribute("lang", "vi");
});

test("mobile navigation remains available", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/vi");
  await expect(
    page.getByRole("navigation", { name: "Primary navigation" }),
  ).toBeVisible();
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "LẬP TRÌNH VIÊN",
  );
});
