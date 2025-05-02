import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';  
import { MainMenuPage } from '../pages/MainMenuPage'; 
import { TimePage } from '../pages/TimePage';

test('Time Page Navigation', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const menuPage = new MainMenuPage(page);

  await loginPage.goto();
  await loginPage.login(process.env.USERNAME!, process.env.PASSWORD!);
  await menuPage.navigateTo('Time');
  await expect(menuPage.getPageHeader()).toContainText('Time');
});

test('Search and view timesheet', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const menuPage = new MainMenuPage(page);
  const timePage = new TimePage(page);

  await loginPage.goto();
  await loginPage.login('Jason Duarte', 'Jason Duarte');
  await menuPage.navigateTo('Time');

  await timePage.searchEmployee('Jason Duarte', 'Jason Duarte');

});


test('Create a timesheet after viewing employee', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const menuPage = new MainMenuPage(page);
  const timePage = new TimePage(page);

  await loginPage.goto();
  await loginPage.login('Jason Duarte', 'Jason Duarte');
  await menuPage.navigateTo('Time');

  await timePage.searchEmployee('Jason Duarte', 'Jason Duarte');
  await timePage.createTimesheet();
});
