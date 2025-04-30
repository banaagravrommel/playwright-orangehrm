import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';  
import { MainMenuPage } from '../pages/MainMenuPage'; 
import { LeavePage } from '../pages/LeavePage';

test('Leave Page Navigation', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const menuPage = new MainMenuPage(page);

  await loginPage.goto();
  await loginPage.login('Admin', 'admin123');

  await menuPage.navigateTo('Leave');
  await expect(menuPage.getPageHeader()).toContainText('Leave');
});

test('Search leave using all filters', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const menuPage = new MainMenuPage(page);
  const leavePage = new LeavePage(page);

  await loginPage.goto();
  await loginPage.login('Admin', 'admin123');
  await menuPage.navigateTo('Leave');

  await leavePage.fillDateRange('2024-01-01', '2025-04-01');
  await leavePage.selectStatus('Rejected');
  await leavePage.selectLeaveType('CAN - Bereavement');
  await leavePage.selectEmployee('Charles Carter');
  await leavePage.selectSubUnit('Administration');
  await leavePage.clickSearch();

  // Optional: verify some result exists or confirm via UI change
});

  // Add your own assertion for results here if needed

  test('Reset leave search filters', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const menuPage = new MainMenuPage(page);
    const leavePage = new LeavePage(page);
  
    await loginPage.goto();
    await loginPage.login('Admin', 'admin123');
    await menuPage.navigateTo('Leave');
  
    await leavePage.fillDateRange('2023-01-01', '2023-12-31');
    await leavePage.selectStatus('Scheduled');
    await leavePage.selectLeaveType('CAN - Vacation');
    await leavePage.selectEmployee('Orange Test');
    await leavePage.selectSubUnit('All');
    await leavePage.clickSearch();
  
    await leavePage.resetSearch();
    await page.waitForTimeout(1000); // TEMP: give the UI time to react
    await leavePage.expectFieldsReset();
    
  });
  