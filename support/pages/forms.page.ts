import { Locator, Page } from "@playwright/test";
import { BasePage } from "./base.page";

export class FormsPage extends BasePage {
  readonly page: Page;
  readonly practceFormButton: Locator;

  constructor(page: Page) {
    super(page);
    this.page = page;
    //Locators
    this.practceFormButton = page.getByText("Practice Form");
  }
  //Methods
  async goto() {
    await this.page.goto("/forms", { waitUntil: "domcontentloaded" });
  }
  async practiceFormButtonClick() {
    await this.practceFormButton.click();
  }
}
