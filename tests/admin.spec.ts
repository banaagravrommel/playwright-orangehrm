import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { MainMenuPage } from '../pages/MainMenuPage';
import { AdminPage } from '../pages/AdminPage';

test.describe('Admin User Management', () => {
  let loginPage: LoginPage;
  let menuPage: MainMenuPage;
  let adminPage: AdminPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    menuPage = new MainMenuPage(page);
    adminPage = new AdminPage(page);

    // Login and navigate to the Admin page
    await loginPage.goto();
    await loginPage.login(process.env.USERNAME!, process.env.PASSWORD!);
    await menuPage.navigateTo('Admin');
    await expect(page).toHaveURL(/.*\/admin\/viewSystemUsers/);

    // Confirm that the page header indicates we're on the Admin page.
    const adminHeader = page.getByRole('heading', { name: /Admin/i });
    await expect(adminHeader).toBeVisible();
  });

  test('Page Navigation - Verify Admin page loads successfully', async ({ page }) => {
    // This test verifies that after login we are on the Admin page.
    await expect(page).toHaveURL(/.*\/admin\/viewSystemUsers/);
    const adminHeader = page.getByRole('heading', { name: /Admin/i });
    await expect(adminHeader).toBeVisible();
  });

  test('Search for an existing user', async ({ page }) => {
    // Use the searchUser method (e.g. search for "Admin")
    await adminPage.searchUser('Admin');

    // Verify that the results table is visible.
    const resultsTable = page.locator('.oxd-table-row.oxd-table-row--with-border');
    await expect(resultsTable.first()).toBeVisible();
  });

  test('Add a new user without post-save verification', async ({ page }) => {
    await adminPage.addUser({
      userRole: 'Admin',
      employeeName: 'Jason Duarte', // Employee Name is typed char-by-char.
      status: 'Enabled',             // Must exactly match the dropdown option text.
      password: 'Test0987!',
      confirmPassword: 'Test0987!',
    });

    // This test does not wait for or verify a success message.
  });
});
