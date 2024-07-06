import { expect } from "@playwright/test";
import { test } from "../../support/fixtures/page.fixtures";

test("Main page default visual test", async ({ mainPage, page }) => {
  await mainPage.goto();
  await expect(page).toHaveScreenshot();
});

test("Main page full page screenshot visual test", async ({
  mainPage,
  page,
}) => {
  await mainPage.goto();
  await expect(page).toHaveScreenshot({ fullPage: true });
});

test("Main page Widgets screenshot visual test", async ({ mainPage, page }) => {
  await mainPage.goto();
  const element = mainPage.cardWidgets;
  await expect(element).toHaveScreenshot("card-widgets.png");
});

test.only("Main page with untracked element", async ({ mainPage, page }) => {
  await mainPage.goto();
  const element = mainPage.mainBanner;
  await expect(page).toHaveScreenshot({ mask: [element] });
});
