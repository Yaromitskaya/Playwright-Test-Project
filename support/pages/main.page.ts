import { Page, Locator, expect } from "@playwright/test";
import { BasePage } from "./base.page";

export default class MainPage extends BasePage {
  readonly page: Page;
  readonly cardForms: Locator;
  readonly cardWidgets: Locator;
  readonly mainBanner: Locator;

  constructor(page: Page) {
    super(page);
    this.page = page;
    //Locators
    this.cardForms = page.getByText("Forms");
    this.cardWidgets = page.locator(".card").filter({ hasText: "Widgets" });
    this.mainBanner = page.locator(".banner-image");
  }
  //Methods
  async goto() {
    await this.page.goto("/");
  }
  async cardFormsClick() {
    await this.cardForms.click();
  }
}
