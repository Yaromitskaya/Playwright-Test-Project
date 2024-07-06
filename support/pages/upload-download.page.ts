import { BasePage } from "./base.page";
import { Locator, Page, expect } from "@playwright/test";

export class UploadPage extends BasePage {
  readonly page: Page;
  readonly uploadFileButton: Locator;
  readonly uploadedFilePath: Locator;
  readonly downloadButton: Locator;

  constructor(page: Page) {
    super(page);
    this.page = page;
    this.uploadFileButton = page.locator("#uploadedFile");
    this.uploadedFilePath = page.locator("#uploadedFilePath");
    this.downloadButton = page.locator("#downloadedButton");
  }

  async goto() {
    await this.page.goto("/upload-download");
  }

  async uploadFile(path: string) {
    const element = this.page.locator("input");

    await element.setInputFiles(path);

    //add evet listenrer dialog window
    this.page.once("dialog", (dialog) => {
      dialog.accept();
    });
  }

  async downloadfile(path: string) {
    //add event listener
    const downloadPromise = this.page.waitForEvent("download");
    await this.downloadButton.click();
    const download = await downloadPromise;
    await download.saveAs(path + download.suggestedFilename);
  }

  async checkIfUploadedd() {
    await expect(
      this.uploadedFilePath,
      "Oops! Looks like your file was not uploaded"
    ).not.toBeEmpty();
  }
}
