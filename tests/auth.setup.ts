import { test as setup } from "@playwright/test";

setup("authenticate", async ({ page }) => {
  // Perform authentication steps. Replace these actions with your own.
  await page.goto("https://demoqa.com/login");
  await page.locator("#userName").fill("Johnny8");
  await page.locator("#password").fill("5553750@Sh");
  await page.locator("#login").click();

  //Save session data
  // await page.context().storageState({ path: "./userSession.json" });

  
});
