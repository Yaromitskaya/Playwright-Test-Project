import test, { expect } from "@playwright/test";
import MainPage from "../support/pages/main.page";
import { FormsPage } from "../support/pages/forms.page";

test("Multiple tabs. Two tabs same time", async ({ page, context }) => {
  const mainPage = new MainPage(page);
  await mainPage.goto();
  //Navigation to the fitst tab
  //   await page.goto("/");

  //Define new tab instance
  const newTab = await context.newPage();
  const formsPageTab = new FormsPage(newTab);

  await formsPageTab.goto();
  await //Navigatiion to the new second tab
  //   await newTab.goto("/forms");

  //Interaction with the second tab element
  //   await newTab.getByText("Practice Form").click();
  await formsPageTab.practiceFormButtonClick;

  //Switch context to the first tab
  await page.bringToFront();

  //Interaction with the firt tab element
  await page.locator(".card").filter({ hasText: "Widgets" });

  //Close the first tab
  await page.close();
});

test("Multiple tabs. Two tabs Two tabs consiquently", async ({
  page,
  context,
}) => {
  //Navigation to the first tab
  await page.goto("/browser-windows");

  //Define event listener to wait for an event responsible for new tab to be opened
  const tabPromise = context.waitForEvent("page");
  await page.locator("#tabButton").click();
  const newTab = await tabPromise;

  //New tab  shoul be opened
  await expect(newTab.locator("h1")).toHaveText("This is a sample page");
});
