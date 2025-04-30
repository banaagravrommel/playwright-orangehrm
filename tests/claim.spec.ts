import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { MainMenuPage } from '../pages/MainMenuPage';
import { ClaimPage } from '../pages/ClaimPage';

test.describe('Claims Page Tests', () => {
  
  test('Navigate to Claim Page', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const menuPage = new MainMenuPage(page);

    // 🔐 Login
    await loginPage.goto();
    await loginPage.login(process.env.USERNAME!, process.env.PASSWORD!);

    // 🧭 Navigate to Claim page
    await menuPage.navigateTo('Claim');
  });

  test('Search a Claim Only', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const menuPage = new MainMenuPage(page);
    const claimPage = new ClaimPage(page);

    // 🔐 Login and navigate
    await loginPage.goto();
    await loginPage.login(process.env.USERNAME!, process.env.PASSWORD!);
    await menuPage.navigateTo('Claim');

    // 🔎 Search for a claim (empty search, or you can pass ID)
    await claimPage.searchClaim('');
  });

  test('Search and Assign a Claim to Admin Admin123', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const menuPage = new MainMenuPage(page);
    const claimPage = new ClaimPage(page);

    // 🔐 Login and navigate
    await loginPage.goto();
    await loginPage.login(process.env.USERNAME!, process.env.PASSWORD!);
    await menuPage.navigateTo('Claim');

    // 🔎 Search and assign
    await claimPage.searchClaim('');
    await claimPage.assignFirstClaimTo('Admin Admin123');
  });

});
