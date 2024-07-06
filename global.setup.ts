// import { chromium, Browser, Page } from "@playwright/test";

// async function globalSetup() {
//   //Initialization of new browser, context and page
//   const browser: Browser = await chromium.launch({ headless: false });
//   const context = await browser.newContext();
//   const page: Page = await context.newPage();

//   //Login logic
//   await page.goto("https://demoqa.com/login");
//   await page.locator("#userName").fill("Johnny8");
//   await page.locator("#password").fill("5553750@Sh");
//   await page.locator("#login").click();

//   //Save session data
//   await page.context().storageState({ path: "./userSession.json" });
//   //Close browser
//   await browser.close();
// }
// export default globalSetup;
