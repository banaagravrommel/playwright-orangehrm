// pages/RecruitmentPage.ts
import { Page, expect } from '@playwright/test';

export class RecruitmentPage {
  constructor(private page: Page) {}

  async gotoAddCandidatePage() {
    await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/addCandidate');
  }

  async addCandidate(firstName: string, middleName: string, lastName: string, email: string, phone: string, resumePath: string) {
    await this.page.getByRole('textbox', { name: 'First Name' }).click();
    await this.page.getByRole('textbox', { name: 'First Name' }).fill(firstName);

    await this.page.getByRole('textbox', { name: 'Middle Name' }).click();
    await this.page.getByRole('textbox', { name: 'Middle Name' }).fill(middleName);
    await this.page.getByRole('textbox', { name: 'Middle Name' }).press('Tab');

    await this.page.getByRole('textbox', { name: 'Last Name' }).fill(lastName);

    // Select Vacancy
    await this.page.locator('form i').first().click();
    await this.page.getByText('Junior Account Assistant').click();

    // Email
    await this.page.getByRole('textbox', { name: 'Type here' }).first().click();
    await this.page.getByRole('textbox', { name: 'Type here' }).first().fill(email);
    await this.page.getByRole('textbox', { name: 'Type here' }).first().press('Tab');

    // Contact Number
    await this.page.getByRole('textbox', { name: 'Type here' }).nth(1).fill(phone);

    // Upload Resume
    await this.page.locator('div').filter({ hasText: /^ResumeBrowseNo file selected$/ }).locator('i').click();
    await this.page.getByRole('button', { name: 'Choose File' }).setInputFiles(resumePath);

    // Keywords
    await this.page.getByRole('textbox', { name: 'Enter comma seperated words...' }).click();
    await this.page.getByRole('textbox', { name: 'Enter comma seperated words...' }).fill('playwright automation');
    await this.page.getByRole('textbox', { name: 'Enter comma seperated words...' }).press('Tab');

    // Date of Application (Ensure visibility before filling)
    const dateInput = this.page.getByRole('textbox', { name: 'mm-dd-yyyy' });
    if (await dateInput.isVisible()) {
      await dateInput.fill('01-01-2025');
    } else {
      console.warn('Date input field not found. Skipping...');
    }

    // Notes
    await this.page.locator('textarea').click();
    await this.page.locator('textarea').fill('playwright automation by Rav');

    // Consent Checkbox
    await this.page.locator('form span i').click();

    // Save Candidate
    await this.page.getByRole('button', { name: 'Save' }).click();

    // Capture Screenshot for Debugging
    await this.page.screenshot({ path: 'debug-candidate.png' });

    // Assert success message
    await expect(this.page.locator('.oxd-toast')).toContainText('Successfully Saved');
  }

  async gotoCandidateListPage() {
    await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/viewCandidates');
  }

  async searchCandidateByName(name: string) {
    // Select Job Title
    await this.page.locator('.oxd-select-text--after > .oxd-icon').first().click();
    await this.page.getByText('Account Assistant', { exact: true }).click();

    // Select Vacancy
    await this.page.locator('div:nth-child(2) > .oxd-input-group > div:nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click();
    await this.page.getByRole('option', { name: 'Junior Account Assistant' }).locator('span').click();

    // Type Candidate Name with delay typing
    const nameInput = this.page.getByRole('textbox', { name: 'Type for hints...' });
    await nameInput.click();
    
    let typedName = '';
    for (const char of name) {
      typedName += char;
      await nameInput.type(char, { delay: 200 });

      const suggestion = this.page.getByText(name, { exact: true });

      // Wait until the full name appears in suggestions
      if (typedName.length >= 3) {
        const isVisible = await suggestion.isVisible().catch(() => false);
        if (isVisible) {
          await suggestion.click();
          break;
        }
      }
    }

    // Click Search
    await this.page.getByRole('button', { name: 'Search' }).click();

    // Verify the result contains the candidate
    await expect(this.page.locator('.orangehrm-container')).toContainText(name);
  }
}
