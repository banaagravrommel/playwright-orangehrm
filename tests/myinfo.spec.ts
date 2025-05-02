import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { MainMenuPage } from '../pages/MainMenuPage';
import { MyInfoPage } from '../pages/MyInfoPage';

const credentials = { username: 'Admin', password: 'admin123' };

test.beforeEach(async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login(credentials.username, credentials.password);
});

test('My Info Page Navigation', async ({ page }) => {
  const menuPage = new MainMenuPage(page);
  await menuPage.navigateTo('My Info');
  await expect(menuPage.getPageHeader()).toContainText('PIM');
});

test('Edit Personal Details', async ({ page }) => {
  const myInfoPage = new MyInfoPage(page);
  await myInfoPage.gotoPersonalDetails();

  const firstName = page.getByRole('textbox', { name: 'First Name' });
  const middleName = page.getByRole('textbox', { name: 'Middle Name' });
  const lastName = page.getByRole('textbox', { name: 'Last Name' });
  await firstName.fill('first');
  await middleName.fill('lastname');
  await lastName.fill('user1');

  const employeeId = page.locator('div').filter({ hasText: /^Employee IdOther Id$/ }).getByRole('textbox').first();
  const otherId = page.locator('div').filter({ hasText: /^Employee IdOther Id$/ }).getByRole('textbox').nth(1);
  await employeeId.fill('10001');
  await otherId.fill('10002');

  const licenseNumber = page.locator('div').filter({ hasText: /^Driver's License NumberLicense Expiry Date$/ }).getByRole('textbox').first();
  const licenseExpiry = page.locator('div').filter({ hasText: /^Driver's License NumberLicense Expiry Date$/ }).getByPlaceholder('yyyy-dd-mm');
  await licenseNumber.fill('20001');
  await licenseExpiry.fill('2027-01-01');

  // Replace fragile icon click with label-based dropdown for Nationality
  const nationalityDropdown = page.locator('label:has-text("Nationality")').locator('..').locator('i');
  await expect(nationalityDropdown).toBeVisible({ timeout: 10000 });
  await nationalityDropdown.click();
  await page.locator('.oxd-select-dropdown > div').nth(1).click(); // Pick second option

  // Replace fragile icon click with label-based dropdown for Marital Status
  const maritalStatusDropdown = page.locator('label:has-text("Marital Status")').locator('..').locator('i');
  await expect(maritalStatusDropdown).toBeVisible({ timeout: 10000 });
  await maritalStatusDropdown.click();
  await page.getByRole('option', { name: 'Single' }).locator('span').click();

  // Date of Birth
  const dob = page.getByRole('textbox', { name: 'yyyy-dd-mm' }).nth(1);
  await dob.fill('2000-01-01');

  // Gender selection
  await page.locator('label').filter({ hasText: /^Male$/ }).locator('span').click();

  // Save
  await page.locator('form').filter({ hasText: 'Employee Full NameEmployee' }).getByRole('button').click();
});


test('Edit Contact Details', async ({ page }) => {
  const myInfoPage = new MyInfoPage(page);
  await myInfoPage.gotoContactDetails();

  const fillField = async (selector: string, value: string) => {
    const field = page.locator(selector).first();
    await field.click();
    await field.fill(value);
  };

  await fillField('div:nth-child(2) > .oxd-input', 'street1');
  await fillField('div:nth-child(2) > .oxd-input-group > div:nth-child(2) > .oxd-input', 'street2');
  await fillField('div:nth-child(3) > .oxd-input-group > div:nth-child(2) > .oxd-input', 'city');
  await fillField('div:nth-child(4) > .oxd-input-group > div:nth-child(2) > .oxd-input', 'state');
  await fillField('div:nth-child(5) > .oxd-input-group > div:nth-child(2) > .oxd-input', '4008');

  await page.locator('form i').click();
  await page.locator('.oxd-select-text-input').type('Afgh');
  await page.getByRole('option', { name: 'Afghanistan' }).click();

  await fillField('div:nth-child(6) > .oxd-grid-3 > div > .oxd-input-group > div:nth-child(2) > .oxd-input', '10001');
  await fillField('div:nth-child(6) > .oxd-grid-3 > div:nth-child(2) > .oxd-input-group > div:nth-child(2) > .oxd-input', '20002');
  await fillField('div:nth-child(6) > .oxd-grid-3 > div:nth-child(3) > .oxd-input-group > div:nth-child(2) > .oxd-input', '3003');
  await fillField('div:nth-child(9) > .oxd-grid-3 > div > .oxd-input-group > div:nth-child(2) > .oxd-input', 'test@gmail.com');
  await fillField('div:nth-child(9) > .oxd-grid-3 > div:nth-child(2) > .oxd-input-group > div:nth-child(2) > .oxd-input', 'test1@gmail.com');

  await page.getByRole('button', { name: 'Save' }).click();
});

test('Add Emergency Contact', async ({ page }) => {
  const myInfoPage = new MyInfoPage(page);
  await myInfoPage.gotoEmergencyContacts();

  await page.getByRole('button', { name: ' Add' }).first().click();

  const inputs = page.locator('form').getByRole('textbox');
  await inputs.nth(0).fill('John Doe');
  await inputs.nth(1).fill('Brother');
  await inputs.nth(2).fill('21321123');
  await inputs.nth(3).fill('321321321');
  await inputs.nth(4).fill('123456789');

  await page.getByRole('button', { name: 'Save' }).click();

  await myInfoPage.verifyEmergencyContactExists('John Doe');
});
