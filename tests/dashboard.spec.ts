import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';  
import { MainMenuPage } from '../pages/MainMenuPage'; 
import { DashboardPage } from '../pages/DashboardPage'; // 👈 import new DashboardPage

test('Dashboard Page Navigation and Verify Elements', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const menuPage = new MainMenuPage(page);
  const dashboardPage = new DashboardPage(page);

  // Navigate to login page and log in
  await loginPage.goto();
  await loginPage.login(process.env.USERNAME!, process.env.PASSWORD!);

  // Navigate to Dashboard
  await menuPage.navigateTo('Dashboard');
  await expect(menuPage.getPageHeader()).toContainText('Dashboard');

  // Verify dashboard elements
  await dashboardPage.verifyDashboardElements();
});
