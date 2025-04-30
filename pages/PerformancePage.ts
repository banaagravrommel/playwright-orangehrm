import { expect, Locator, Page } from '@playwright/test';

export class PerformancePage {
  readonly page: Page;
  readonly employeeNameInput: Locator;
  readonly searchButton: Locator;
  readonly resetButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.employeeNameInput = page.getByPlaceholder('Type for hints...');
    this.searchButton = page.getByRole('button', { name: 'Search' });
    this.resetButton = page.getByRole('button', { name: 'Reset' });
  }

  async goto() {
    await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/performance/searchEvaluatePerformanceReview');
  }

  getHeader(): Locator {
    return this.page.locator('h6.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module');
  }

  async fillSearchFormForCharlesCarter() {
    const targetName = 'Charles Carter';
    const characters = 'Charles Carter';
    await this.employeeNameInput.click();
    await this.employeeNameInput.fill('');

    for (let i = 0; i < characters.length; i++) {
      await this.employeeNameInput.type(characters[i]);
      await this.page.waitForTimeout(500); // simulate slower typing

      const suggestion = this.page.getByText(targetName, { exact: true });
      if (await suggestion.isVisible()) {
        await suggestion.click();
        break;
      }
    }

    await this.page.locator('.oxd-select-text--after > .oxd-icon').first().click();
    await this.page.getByText('Account Assistant').click();

    await this.page.locator('div:nth-child(3) > .oxd-input-group > div:nth-child(2) .oxd-select-text--after > .oxd-icon').click();
    await this.page.getByText('OrangeHRM', { exact: true }).click();

    await this.page.locator('div:nth-child(4) > .oxd-input-group > div:nth-child(2) .oxd-select-text--after > .oxd-icon').click();
    await this.page.getByText('Current and Past Employees').click();

    await this.page.locator('div:nth-child(5) > .oxd-input-group > div:nth-child(2) .oxd-select-text--after > .oxd-icon').click();
    await this.page.getByRole('option', { name: 'Activated' }).click();

    const fromDateInput = this.page.getByRole('textbox', { name: 'yyyy-dd-mm' }).first();
    const toDateInput = this.page.getByRole('textbox', { name: 'yyyy-dd-mm' }).nth(1);

    await fromDateInput.click();
    await fromDateInput.press('ControlOrMeta+a');
    await fromDateInput.fill('2024-01-01');

    await toDateInput.click();
    await toDateInput.press('ControlOrMeta+a');
    await toDateInput.fill('2025-04-01');
  }

  async clickSearch() {
    await this.searchButton.click();
  }

  async clickReset() {
    await this.resetButton.click();
  }
}
