import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';  
import { MainMenuPage } from '../pages/MainMenuPage'; 

test('Maintenance Page Navigation', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const menuPage = new MainMenuPage(page);
  
    await loginPage.goto();
    await loginPage.login(process.env.USERNAME!, process.env.PASSWORD!);
  
    await menuPage.navigateTo('Maintenance');
    await expect(menuPage.getPageHeader()).toContainText('Administrator Access');
  });
  