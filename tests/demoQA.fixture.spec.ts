import { chromium, test } from "@playwright/test";

test("Without fixtires", async () => {
  //create browser chrome instance
  const browser = await chromium.launch();
  //creare isolatws browser context
  const context = await browser.newContext();
  //create page
  const page = await context.newPage();
  await page.goto("/automation-practice-form");

  //use context to remove cookies
  const pageCookies = await context.cookies();
  console.log(pageCookies);
  console.log("After clear cookies");
  await context.clearCookies();
  const cookiesCleared = await context.cookies();
  console.log(cookiesCleared);

  //create another isolated browser
  //create another isolated brobser context
  const context2 = await browser.newContext();
  //create another isilated page
  const page2 = await context2.newPage();
  await page2.goto("https://www.kvitki.by/");
  //make request
  const req = await page.request.get("https://reqres.in/api/users/3");
  const resp = await req.json();
  console.log(resp);
});

test("With fixtires", async ({
  page,
  browser,
  context,
  request,
  browserName,
}) => {
  await page.goto("/automation-practice-form");

  //use context to remove cookies
  const pageCookies = await context.cookies();
  console.log(pageCookies);
  console.log("After clear cookies");
  await context.clearCookies();
  const cookiesCleared = await context.cookies();
  console.log(cookiesCleared);

  //create another isolated browser
  //create another isolated brobser context
  const context2 = await browser.newContext();
  //create another isilated page
  const page2 = await context2.newPage();
  await page2.goto("https://www.kvitki.by/");
  //make request
  const req = await request.get("https://reqres.in/api/users/3");
  const resp = await req.json();
  console.log(resp);
  console.log(await browserName);
});

//browser
//browserName
//context
//page
//request
