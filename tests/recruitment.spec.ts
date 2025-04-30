// tests/recruitment.spec.ts
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { MainMenuPage } from '../pages/MainMenuPage';
import { RecruitmentPage } from '../pages/RecruitmentPage';

test('Recruitment Page Navigation', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const menuPage = new MainMenuPage(page);

  await loginPage.goto();
  await loginPage.login(process.env.USERNAME!, process.env.PASSWORD!);
  await menuPage.navigateTo('Recruitment');

  await expect(menuPage.getPageHeader()).toContainText('Recruitment');
});

test('Add a candidate', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const recruitmentPage = new RecruitmentPage(page);

  await loginPage.goto();
  await loginPage.login(process.env.USERNAME!, process.env.PASSWORD!);

  await recruitmentPage.gotoAddCandidatePage();
  await recruitmentPage.addCandidate(
    'Rav',             // First Name
    'Test',            // Middle Name
    'QA',              // Last Name
    'test@gmail.com',  // Email
    '1234567890',      // Contact Number
    'tests/email.txt'  // Resume path relative to project root
  );
});

test('Search candidate by name with delay typing', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const recruitmentPage = new RecruitmentPage(page);

  await loginPage.goto();
  await loginPage.login(process.env.USERNAME!, process.env.PASSWORD!);

  await recruitmentPage.gotoCandidateListPage();
  await recruitmentPage.searchCandidateByName('Rav Test QA');
});
