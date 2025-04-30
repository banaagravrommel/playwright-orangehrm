import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { MainMenuPage } from '../pages/MainMenuPage';
import { BuzzPage } from '../pages/BuzzPage';

test.describe('Buzz Page Tests', () => {
  let loginPage: LoginPage;
  let menuPage: MainMenuPage;
  let buzzPage: BuzzPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    menuPage = new MainMenuPage(page);
    buzzPage = new BuzzPage(page);

    await loginPage.goto();
    await loginPage.login(process.env.USERNAME!, process.env.PASSWORD!);

    await menuPage.navigateTo('Buzz');
    await expect(menuPage.getPageHeader()).toContainText('Buzz');
  });

  test('Post a Status Update', async () => {
    await buzzPage.postStatusUpdate('This is an automated status update from Playwright!');
  });

  test('Share a Photo', async () => {
    await buzzPage.sharePhoto('photo.jpg'); // ✅ Only provide filename here
  });

  test('Share a Video', async () => {
    await buzzPage.shareVideo('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
  });
});
