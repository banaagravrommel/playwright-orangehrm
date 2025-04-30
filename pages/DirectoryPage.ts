// DirectoryPage.ts
import { Page, Locator } from '@playwright/test';

export class DirectoryPage {
  private page: Page;
  private searchField = 'input[placeholder="Type for hints..."]';
  private searchButton = 'button[type="submit"]';
  private resetButton = 'button[type="reset"]';
  private searchResult = '.oxd-table-card';
  private profileLink = '.oxd-directory-header';
  private employeeDetails = '.employee-details';

  constructor(page: Page) {
    this.page = page;
  }

  async searchEmployee(employeeName: string = 'Amelia Brown') {
    // Wait for the search input to be ready
    await this.page.waitForSelector(this.searchField, { state: 'visible' });

    // Clear the input field
    await this.page.fill(this.searchField, '');

    // Type each character one by one, checking for the dropdown after each keystroke
    for (const char of employeeName) {
      await this.page.type(this.searchField, char, { delay: 1000 });

      // Check if the dropdown option is visible after each keystroke
      const dropdownOption = this.page.locator(`div[role="listbox"] div[role="option"] >> text=${employeeName}`);
      if (await dropdownOption.isVisible()) {
        await dropdownOption.click();
        break;
      }
    }

    // Click the search button after selection
    await this.page.click(this.searchButton);
  }

  async getSearchResult(): Promise<Locator> {
    return this.page.locator(this.searchResult);
  }

  async getProfileLink(employeeName: string): Promise<Locator> {
    return this.page.locator(`${this.profileLink} >> text=${employeeName}`);
  }

  async openEmployeeProfile(employeeName: string) {
    const profileLink = this.page.locator('.orangehrm-directory-card-header', { hasText: employeeName });
    await profileLink.click();
  }

  async getEmployeeDetails(): Promise<string> {
    const detailsLocator = this.page.locator('.orangehrm-directory-card-header'); // Updated locator
    return detailsLocator.innerText();
  }
    
  async resetSearchField() {
    await this.page.click(this.resetButton);
  }

  async getSearchFieldValue(): Promise<string> {
    return this.page.inputValue(this.searchField);
  }
}