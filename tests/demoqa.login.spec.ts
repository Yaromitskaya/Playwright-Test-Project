import { test, expect } from "@playwright/test";
// test.use({ storageState: "./userSession.json" });
test("Test 1", async ({ page }) => {
  await page.goto("/login");
  await page.locator("#userName").fill("Johnny8");
  await page.locator("#password").fill("5553750@Sh");
  await page.locator("#login").click();

  const userNameValue = await page.locator("#userName-value");
  await expect(userNameValue).toHaveText("Johnny8");
});

test("Test 2", async ({ page }) => {
  await page.goto("/login");
  await page.locator("#userName").fill("Johnny8");
  await page.locator("#password").fill("5553750@Sh");
  await page.locator("#login").click();

  const logoutButton = await page.locator("button", { hasText: "Log out" });
  //   const _logoutButton = await page.getByText("Logout");
  await expect(logoutButton).toBeVisible();
});
