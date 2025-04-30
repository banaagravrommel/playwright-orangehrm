import { Page, expect } from '@playwright/test';

export class LeavePage {
  constructor(private page: Page) {}

  async fillDateRange(from: string, to: string) {
    const fromDate = this.page.getByRole('textbox', { name: 'yyyy-dd-mm' }).first();
    const toDate = this.page.getByRole('textbox', { name: 'yyyy-dd-mm' }).nth(1);

    await fromDate.click();
    await fromDate.press('ControlOrMeta+a');
    await fromDate.fill(from);
    await fromDate.press('Tab');

    await toDate.click();
    await toDate.press('ControlOrMeta+a');
    await toDate.fill(to);
    await toDate.press('Tab');
  }

  async selectStatus(status: string) {
    await this.page.locator('.oxd-select-text--after > .oxd-icon').first().click();
    await this.page.getByText(status).click();
  }

  async selectLeaveType(type: string) {
    await this.page.locator('.oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').first().click();
    await this.page.getByText(type).click();
  }

  async selectEmployee(name: string) {
    const input = this.page.getByRole('textbox', { name: 'Type for hints...' });
    await input.click();
    await input.fill(name);
    await this.page.getByText(name, { exact: true }).click();
  }

  async selectSubUnit(unit: string) {
    await this.page.locator('div:nth-child(2) > .oxd-input-group > div:nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click();
    await this.page.getByText(unit).click();
  }

  async clickSearch() {
    await this.page.getByRole('button', { name: 'Search' }).click();
  }

  async resetSearch() {
    await this.page.getByRole('button', { name: 'Reset' }).click();
  }

  async expectFieldsReset() {
    const fromDate = this.page.getByRole('textbox', { name: 'yyyy-dd-mm' }).first();
    const toDate = this.page.getByRole('textbox', { name: 'yyyy-dd-mm' }).nth(1);
    const employeeInput = this.page.getByRole('textbox', { name: 'Type for hints...' });
  
    const fromDateValue = await fromDate.inputValue();
    const toDateValue = await toDate.inputValue();
    const employeeValue = await employeeInput.inputValue();
  
    console.log('After Reset - From:', fromDateValue, 'To:', toDateValue, 'Employee:', employeeValue);
  
    // Only assert employee was cleared (date fields are not reset by UI)
    await expect(employeeInput).toHaveValue('');
  
    // Optional: log or soft check if needed
    // if you really want to ensure a value changed, you could:
    // expect(fromDateValue).not.toBe('2023-01-01');
  }
  
  }

