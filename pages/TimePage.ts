// pages/TimePage.ts
import { Page, expect } from '@playwright/test';

export class TimePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async searchEmployee(partialName: string, fullNameToSelect?: string) {
    const employeeInput = this.page.getByPlaceholder('Type for hints...');
    await employeeInput.click();
    await employeeInput.fill('');
  
    for (const char of partialName) {
      await employeeInput.type(char);
      await this.page.waitForTimeout(100); // mimic human typing
    }
  
    const nameToClick = fullNameToSelect || partialName;
  
    // 💡 Instead of just .getByText(), pick the first matching item
    const employeeOption = this.page.getByText(nameToClick).first();
    await employeeOption.click();
  
    // Scope the View button inside the form only (avoids other table buttons)
    const viewButton = this.page.locator('form').getByRole('button', { name: 'View' });
    await viewButton.click();
  
    // 🛡️ Wait for the Timesheet page to load after clicking View
    await this.page.getByRole('heading', { name: /Timesheet for/i }).waitFor({ timeout: 10000 });
  }
  
  async createTimesheet() {
    // 🔵 Wait for Timesheet heading to appear first (safe point)
    const timesheetHeading = this.page.getByRole('heading', { name: /Timesheet for/i });
    await expect(timesheetHeading).toBeVisible({ timeout: 40000 }); // ⬅️ Increased timeout to 40s
  
    // 📸 Optional: capture a screenshot for debugging (can remove later)
    await this.page.screenshot({ path: 'before-create-timesheet.png', fullPage: true });
  
    const createSubmittButton = this.page.getByRole('button', { name: 'Submit' });
    await expect(createSubmittButton).toBeVisible({ timeout: 40000 }); // ⬅️ 40s timeout
  
    await createSubmittButton.click();
  
    // ✅ After clicking, optionally re-check the Timesheet heading
    await expect(timesheetHeading).toBeVisible({ timeout: 10000 });
  }
  
    }
