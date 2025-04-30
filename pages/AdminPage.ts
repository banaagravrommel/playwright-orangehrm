import { Page } from '@playwright/test';

export class AdminPage {
  constructor(public page: Page) {}

  // Locators for the main Admin page search (these are used when not in the add‑user modal)
  readonly searchUsernameInput = this.page.locator('input[placeholder="Type for hints..."]').first();
  readonly searchButton = this.page.locator('button[type="submit"]');

  // "Add" button to open the Add User form (modal)
  readonly addButton = this.page.locator('button:has-text(" Add ")');

  // User Role selection (used in add‑user modal)
  readonly userRoleDropdownArrow = this.page.locator(
    '.oxd-icon.bi-caret-down-fill.oxd-select-text--arrow'
  ).first();
  readonly userRoleOption = (role: string) =>
    this.page.locator(`//div[@role="listbox"]//span[text()="${role}"]`);

  /**
   * Searches for a user by username on the Admin page.
   */
  async searchUser(username: string) {
    await this.searchUsernameInput.fill(username);
    await this.searchButton.click();
    const resultsTable = this.page.locator('.oxd-table-row.oxd-table-row--with-border');
    await resultsTable.first().waitFor({ state: 'visible', timeout: 10000 });
  }

  /**
   * Adds a new user using the following steps:
   *
   * 1. Open the Add User form.
   * 2. Select the User Role.
   * 3. Select status by clicking the status dropdown arrow (the second <i> in the form)
   *    and then the status text.
   * 4. Within the add-user form:
   *    - Type the Employee Name ("Amelia Brown") one character at a time until its dropdown suggestion appears; then select it.
   *    - Generate a unique username and fill that field.
   *    - Fill in the Password and Confirm Password fields.
   * 5. Click "Save" to submit.
   */
  async addUser(userDetails: {
    userRole: string;
    employeeName: string;
    status: string;
    password: string;
    confirmPassword: string;
  }) {
    // Open the "Add User" form
    await this.addButton.click();

    // ----- User Role Selection -----
    await this.userRoleDropdownArrow.waitFor({ state: 'visible', timeout: 10000 });
    await this.userRoleDropdownArrow.click();
    const roleOption = this.userRoleOption(userDetails.userRole);
    await roleOption.waitFor({ state: 'visible', timeout: 10000 });
    await roleOption.click();

    // ----- Status Selection (codegen style) -----
    // Click the second <i> element in the form (status dropdown arrow) and then select status text.
    await this.page.locator('form i').nth(1).click();
    await this.page.getByText(userDetails.status).click();

    // ----- Scope all add-user fields to the open form -----
    const form = this.page.locator('form');

    // ----- Employee Name: type one character at a time -----
    // Assume the Employee Name input is the first input with placeholder "Type for hints..." in the form.
    const employeeInput = form.locator('input[placeholder="Type for hints..."]').first();
    await employeeInput.click();
    for (const char of userDetails.employeeName) {
      await employeeInput.type(char, { delay: 100 });
      try {
        // Check if the dropdown suggestion for the full employee name appears.
        await form
          .locator(`//div[@role="listbox"]//span[normalize-space()="${userDetails.employeeName}"]`)
          .waitFor({ timeout: 300 });
        break; // Suggestion appeared; stop typing.
      } catch (e) {
        // Continue typing if not yet visible.
      }
    }
    // Select the suggestion for "Amelia Brown"
    await form
      .locator(`//div[@role="listbox"]//span[normalize-space()="${userDetails.employeeName}"]`)
      .click();

    // ----- Username: generate and fill a unique username -----
    const uniqueUsername = `playwright_user_${Date.now()}`;
    const usernameInput = form.locator('input.oxd-input[autocomplete="off"]');
    await usernameInput.first().click();
    await usernameInput.first().fill(uniqueUsername);

    // ----- Password and Confirm Password fields -----
    const passwordInput = form.locator('input.oxd-input[type="password"]');
    await passwordInput.first().click();
    await passwordInput.first().fill(userDetails.password);
    await passwordInput.nth(1).click();
    await passwordInput.nth(1).fill(userDetails.confirmPassword);

    // ----- Save the new user -----
    await form.getByRole('button', { name: 'Save' }).click();
  }
}
