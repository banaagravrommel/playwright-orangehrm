import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { MainMenuPage } from '../pages/MainMenuPage';
import { DirectoryPage } from '../pages/DirectoryPage';

test('Directory Page Navigation', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const menuPage = new MainMenuPage(page);

  await loginPage.goto();
  await loginPage.login(process.env.USERNAME!, process.env.PASSWORD!);

  await menuPage.navigateTo('Directory');
  await expect(menuPage.getPageHeader()).toContainText('Directory');
});

test('Search for a user', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const menuPage = new MainMenuPage(page);
  const directoryPage = new DirectoryPage(page);

  await loginPage.goto();
  await loginPage.login(process.env.USERNAME!, process.env.PASSWORD!);

  await menuPage.navigateTo('Directory');
  await directoryPage.searchEmployee('Jason Duarte');

});

test('Open A Profile', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const menuPage = new MainMenuPage(page);
  const directoryPage = new DirectoryPage(page);

  await loginPage.goto();
  await loginPage.login(process.env.USERNAME!, process.env.PASSWORD!);

  await menuPage.navigateTo('Directory');
  await directoryPage.searchEmployee('Jason Duarte');

  // Open profile without checking employee details
  await directoryPage.openEmployeeProfile('Jason Duarte');
});

test('Reset Search Field', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const menuPage = new MainMenuPage(page);
  const directoryPage = new DirectoryPage(page);

  await loginPage.goto();
  await loginPage.login(process.env.USERNAME!, process.env.PASSWORD!);

  await menuPage.navigateTo('Directory');
  await directoryPage.searchEmployee('Jason Duarte');

  await directoryPage.resetSearchField();

  const searchValue = await directoryPage.getSearchFieldValue();
  expect(searchValue).toBe('');
});
