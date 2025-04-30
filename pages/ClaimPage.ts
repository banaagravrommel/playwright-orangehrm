import { Page, Locator } from '@playwright/test';

export class ClaimPage {
  readonly page: Page;
  readonly searchInput: Locator;
  readonly searchButton: Locator;
  readonly assignButtons: Locator;
  readonly createButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchInput = page.locator('input[placeholder="Search"]');
    this.searchButton = page.locator('button:has-text("Search")');
    this.assignButtons = page.locator('button:has-text("Assign")');
    this.createButton = page.locator('button[type="submit"].oxd-button--secondary.orangehrm-left-space:has-text("Create")');
  }

  async searchClaim(claimId: string) {
    await this.searchInput.fill(claimId);
    await this.searchButton.click();
  }

  async assignFirstClaimTo(employeeName: string) {
    if (await this.assignButtons.count() > 0) {
      await this.assignButtons.first().click();

      // 🔤 Fill Employee Name
      const input = this.page.locator('.oxd-autocomplete-text-input input');
      await input.fill(employeeName);

      const suggestion = this.page.locator(`.oxd-autocomplete-option:has-text("${employeeName}")`);
      await suggestion.first().waitFor({ state: 'visible', timeout: 10000 });
      await suggestion.first().click();

      // 🗓️ Select Event: "Accommodation"
      const eventDropdown = this.page.locator('.oxd-select-wrapper').nth(0);
      await eventDropdown.click();

      const eventOption = this.page.locator('.oxd-select-dropdown .oxd-select-option:has-text("Accommodation")');
      await eventOption.waitFor({ state: 'visible', timeout: 5000 });
      await eventOption.click();

      // 💱 Select Currency: "United States Dollar"
      const currencyDropdown = this.page.locator('.oxd-select-wrapper').nth(1);
      await currencyDropdown.click();

      const currencyOption = this.page.locator('.oxd-select-dropdown .oxd-select-option:has-text("United States Dollar")');
      await currencyOption.waitFor({ state: 'visible', timeout: 5000 });
      await currencyOption.click();

      // 🛡️ Ensure the Create button is visible
      const form = this.page.locator('form');
      await form.waitFor({ state: 'visible', timeout: 10000 });

      // Wait for the Create button to be visible
      await this.createButton.waitFor({ state: 'visible', timeout: 15000 });

      // Check if it's enabled before clicking
      if (await this.createButton.isEnabled()) {
        await this.createButton.click();
        console.log('✅ Create button clicked successfully');
      } else {
        throw new Error('Create button is disabled');
      }
    } else {
      console.error('❌ No assign buttons found');
      throw new Error('No assign buttons available');
    }
  }
}
