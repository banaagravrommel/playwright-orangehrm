import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { PerformancePage } from '../pages/PerformancePage';

test('Performance Page Navigation', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const performancePage = new PerformancePage(page);

  await loginPage.goto();
  await loginPage.login('Admin', 'admin123');

  await performancePage.goto();
  await expect(performancePage.getHeader()).toContainText('Performance');
});

test('Performance Page - Search for Charles Carter', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const performancePage = new PerformancePage(page);

  await loginPage.goto();
  await loginPage.login('Admin', 'admin123');

  await performancePage.goto();
  await performancePage.fillSearchFormForCharlesCarter();
  await performancePage.clickSearch();

  const resultContainer = page.locator('div.orangehrm-container');
  const noRecordsText = page.getByText('No Records Found');
  const resultText = 'Charles Carter';

  await expect(resultContainer).toBeVisible();

  if (await noRecordsText.isVisible()) {
    console.log('No records found — this is expected.');
  } else {
    await expect(resultContainer).toContainText(resultText);
  }
});

test('Performance Page - Reset search', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const performancePage = new PerformancePage(page);

  await loginPage.goto();
  await loginPage.login('Admin', 'admin123');

  await performancePage.goto();
  await performancePage.fillSearchFormForCharlesCarter();
  await performancePage.clickReset();

  await expect(performancePage.employeeNameInput).toHaveValue('');
});
