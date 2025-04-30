import { Page, expect } from '@playwright/test';

export class MyInfoPage {
  constructor(private page: Page) {}

  async gotoPersonalDetails() {
    await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/7');
  }

  async editPersonalDetails(firstName: string, lastName: string) {
    await this.page.getByRole('button', { name: 'Edit' }).click();
    await this.page.locator('input[name="firstName"]').fill(firstName);
    await this.page.locator('input[name="lastName"]').fill(lastName);
    await this.page.getByRole('button', { name: 'Save' }).click();
  }

  async verifyPersonalDetails(firstName: string, lastName: string) {
    await expect(this.page.locator('input[name="firstName"]')).toHaveValue(firstName);
    await expect(this.page.locator('input[name="lastName"]')).toHaveValue(lastName);
  }

  async gotoContactDetails() {
    await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/pim/contactDetails/empNumber/7');
  }

  async editContactDetails(street: string, mobile: string) {
    await this.page.getByRole('button', { name: 'Edit' }).click();
    await this.page.locator('input[name="street1"]').fill(street);
    await this.page.locator('input[name="mobile"]').fill(mobile);
    await this.page.getByRole('button', { name: 'Save' }).click();
  }

  async verifyContactDetails(street: string, mobile: string) {
    await expect(this.page.locator('input[name="street1"]')).toHaveValue(street);
    await expect(this.page.locator('input[name="mobile"]')).toHaveValue(mobile);
  }

  async gotoEmergencyContacts() {
    await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmergencyContacts/empNumber/7');
  }

  async addEmergencyContact(name: string, relationship: string, homePhone: string, mobile: string) {
    await this.page.getByRole('button', { name: 'Add' }).click();
    await this.page.getByPlaceholder('Name').fill(name);
    await this.page.getByPlaceholder('Relationship').fill(relationship);
    await this.page.getByPlaceholder('Home Telephone').fill(homePhone);
    await this.page.getByPlaceholder('Mobile').fill(mobile);
    await this.page.getByRole('button', { name: 'Save' }).click();
  }

  async verifyEmergencyContactExists(name: string) {
    await expect(
      this.page.locator('div.oxd-table-card')
        .filter({ hasText: name })
        .nth(0) // or use first() if you're expecting only one new entry
    ).toBeVisible();
    
      }
}
