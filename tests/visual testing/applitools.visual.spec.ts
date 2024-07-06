// import {
//   BatchInfo,
//   BrowserType,
//   Configuration,
//   DeviceName,
//   Eyes,
//   EyesRunner,
//   ScreenOrientation,
//   Target,
//   VisualGridRunner,
// } from "@applitools/eyes-playwright";
// import { test } from "@playwright/test";

// let Batch: BatchInfo;
// let Config: Configuration;
// let Runner: EyesRunner;
// let eyes: Eyes;

// test.describe("Visual testing with applitools", () => {
//   test.beforeAll("Applitools configuraion", async () => {
//     Runner = new VisualGridRunner();
//     Batch = new BatchInfo("Visual test starter");
//     Config = new Configuration();

//     Config.setBatch(Batch);
//     Config.addBrowsers(
//       {
//         name: BrowserType.CHROME,
//         width: 800,
//         height: 600,
//       },
//       {
//         chromeEmulationInfo: {
//           deviceName: DeviceName.iPhone_11,
//           screenOrientation: ScreenOrientation.PORTRAIT,
//         },
//       }
//     );
//   });
//   //Eyes will be opened before every test
//   test.afterEach(async ({ page }) => {
//     //start visual twsting with applitools with eyes
//     eyes = new Eyes(Runner, Config);

//     //Arguments: page instance,  "Your application name", viewport resolution
//     await eyes.open(page, "Applitools sandbox", "Initial applitools test", {
//       width: 1920,
//       height: 980,
//     });
//   });
//   test("Visual test with applitools", async ({ page }) => {
//     //navigation to the page

//     await page.goto("sandbox.applitools.com/bank?layoutAlgo=true");
//     //taking screenshot of gullsize dimention
//     eyes.check("Login Pge", Target.window().fully());
//     //login to the app
//     await page.locator("#username").fill("user");
//     await page.locator("#password").fill("password");
//     await page.locator("#log-in").click();
//     await page
//       .locator("div .dashboard_dashboardContent__BUrjL")
//       .waitFor({ state: "attached" });
//     //take creenshot of login

//     //take creenshot of main page
//     await eyes.check("Main page", Target.window().fully());
//     await eyes.close();
//   });
// });
