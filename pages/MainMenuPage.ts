import { Page, Locator } from '@playwright/test';

export class MainMenuPage {
  constructor(private page: Page) {}

  async navigateTo(menu: string) {
    await this.page.getByRole('link', { name: menu }).click();
  }

  getPageHeader(): Locator {
    // Returns the first <h6> on the page — commonly used in OrangeHRM
    return this.page.locator('h6').first();
  }
}
