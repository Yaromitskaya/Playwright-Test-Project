import { test, expect } from "@playwright/test";
import TextBoxPage from "../support/pages/test-box.page";

test.describe("Tests", () => {
  //before each hook
  // test.beforeEach(async ({ page }) => {
  //     // await page.goto("./text-box");
  //   // await page.waitForLoadState("domcontentloaded");
  // });

  test("Test demoQA positive", async ({ page }) => {
    const userData = {
      fullName: "John Smith",
      email: "my.emai@mail.ru",
      currentAddress: "Minsk, ul. Lenina",
    };
    const textBoxPage = new TextBoxPage(page);
    await textBoxPage.goto();

    // await page.getByPlaceholder("Full Name").fill(userData.fullName);
    await textBoxPage.fillFullName(userData.fullName);
    // await page.locator('[type="email"]').fill(userData.email);
    await textBoxPage.fillEmail(userData.email);
    // await page.locator(".form-control").nth(2).fill(userData.currentAddress);
    await textBoxPage.fillCurrentAddress(userData.currentAddress);
    // await page.locator('[type="button"]', { hasText: "Submit" }).click();
    await textBoxPage.clickSubmitButton();

    // await expect(page.locator("#email")).toContainText(userData.email);
    await expect(textBoxPage.emailOutput).toContainText(userData.email);
    // await expect(page.locator("#name")).toContainText(userData.fullName);
    await expect(textBoxPage.NameOutput).toContainText(userData.fullName);
    // await expect(page.locator("#output #currentAddress")).toContainText(userData.currentAddress)
    await expect(textBoxPage.currentAddressOutput).toContainText(
      userData.currentAddress
    );
    textBoxPage.assertElementContainText(
      textBoxPage.NameOutput,
      userData.fullName
    );
  });

  test("Negative test with eamil", async ({ page }) => {
    const userData = {
      fullName: "John Smith",
      email: "my.email",
      currentAddress: "Minsk, ul. Lenina",
    };
    const textBoxPage = new TextBoxPage(page);
    await textBoxPage.goto();

    await page.getByPlaceholder("Full Name").fill(userData.fullName);
    await page.locator('[type="email"]').fill(userData.email);
    await page.locator(".form-control").nth(2).fill(userData.currentAddress);
    await page.locator('[type="button"]', { hasText: "Submit" }).click();

    // await expect(
    //   page.locator('[type="email"]'),
    //   "Frame has color different from 1px solid rgb(255,0,0)"
    // ).toHaveCSS("border", "1px solid rgb(255, 0, 0)");

    await textBoxPage.checkBorderColor(
      textBoxPage.emailInput,
      "1px solid rgb(255, 0, 0)"
    );
  });
});
