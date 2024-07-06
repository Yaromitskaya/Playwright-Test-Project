import { expect } from "@playwright/test";
import MainPage from "../support/pages/main.page";
import { FormsPage } from "../support/pages/forms.page";
import { AutomationPracticeFormPage } from "../support/pages/automation.practice-form.page";
import { userData } from "../support/data/user.data";
import { test } from "../support/fixtures/page.fixtures";

test("Natigating to Practice Form page", async ({
  mainPage,
  formsPage,
  automationPracticeFormPage,
}) => {
  // const mainPage = new MainPage(page);
  // const formsPage = new FormsPage(page);
  // const automationPracticeFormPage = new AutomationPracticeFormPage(page);
  // await page.goto("/");
  // await mainPage.goto();
  // await page.getByText("Forms").click();
  // await page.getByText("Practice Form").click();
  await mainPage.goto();
  await mainPage.cardFormsClick();
  await formsPage.practiceFormButtonClick();
  //   await expect(page.url()).toContain(
  //     "https://demoqa.com/automation-practice-form"
  //   );

  // await expect(page).toHaveURL("https://demoqa.com/automation-practice-form");
  await automationPracticeFormPage.assertPageURL(
    "https://demoqa.com/automation-practice-form"
  );
});

test("Check submition form", async ({ automationPracticeFormPage }) => {
  // const userData = {
  //   firtsName: "John",
  //   lastName: "Smith",
  //   email: "my.emai@mail.ru",
  //   mobile: "5553750777",
  // };
  // const automationPracticeFormPage = new AutomationPracticeFormPage(page);
  // const hobbies = ["Sports", "Reading", "Music"];
  const hobbies = [
    automationPracticeFormPage.sportsCkeckbox,
    automationPracticeFormPage.musicCheckbox,
    automationPracticeFormPage.readingCheckbox,
  ];

  //Go to page https://demoqa.com/automation-practice-form
  automationPracticeFormPage.goto();
  // await page.goto("/automation-practice-form");
  // Input first name
  await automationPracticeFormPage.fillFirstName(
    userData.validStudent.firtsName
  );
  // await page.getByPlaceholder("First Name").fill(userData.firtsName);
  // Input last name
  await automationPracticeFormPage.fillLastName(userData.validStudent.lastName);
  // await page.getByPlaceholder("Last Name").fill(userData.lastName);
  // Input email
  await automationPracticeFormPage.fillEmailInput(userData.validStudent.email);
  // Input phone number
  await automationPracticeFormPage.fillPhomeNumberInput(
    userData.validStudent.mobile
  );
  // await page.locator("#userNumber").fill(userData.mobile);
  // Choose gender
  await automationPracticeFormPage.checkMaleRudiobutton();
  // await page.locator('[type="radio"]').first().click({ force: true });
  // Choose hobbies
  for (const hobbi of hobbies) {
    await hobbi.check({ force: true });
  }
  // await page.locator('[type="checkbox"]').first().click({ force: true });
  //   for (const hobbi of hobbies) {
  //     await page.getByLabel(hobbi).click();
  //   }
  // Click submit button
  await automationPracticeFormPage.clickSubmitButton();
  // await page.locator("#submit").click();

  // Check form is displayed

  await automationPracticeFormPage.assertIsVisible(
    automationPracticeFormPage.studentDataForm
  );
  // await expect(page.locator(".modal-content")).toBeVisible();
  // await expect(page.locator(".modal-body")).toContainText('Student Name')

  // const allTableRows = page.locator('.modal-content tbody tr');

  // const trFirst = page.locator('.modal-content tbody tr').nth(0).locator('td');

  // function getTableRowCellsByIndex(index) {
  //   return page.locator('.modal-content tbody tr').nth(index).locator('td');
  // }

  // await page.pause();
  await automationPracticeFormPage.assertElementContainText(
    automationPracticeFormPage.studentNameValueField,
    userData.validStudent.firtsName + "" + userData.validStudent.lastName
  );

  await automationPracticeFormPage.assertElementContainText(
    automationPracticeFormPage.studentMobileValueField,
    userData.validStudent.mobile
  );

  //   await expect(
  //     page.locator(".modal-content tbody tr").nth(0).locator("td")
  //   ).toContainText([
  //     "Student Name",
  //     userData.validStudent.firtsName + " " + userData.validStudent.lastName,
  //   ]);
  //   await expect(
  //     page.locator(".modal-content tbody tr").nth(1).locator("td")
  //   ).toContainText(["Student Email", ""]);

  //   await expect(
  //     page.locator(".modal-content tbody tr").nth(2).locator("td")
  //   ).toContainText(["Gender", "Male"]);
  //   await expect(
  //     page.locator(".modal-content tbody tr").nth(3).locator("td")
  //   ).toContainText(["Mobile", userData.validStudent.mobile]);
});
