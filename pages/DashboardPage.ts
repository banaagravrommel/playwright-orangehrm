// pages/DashboardPage.ts
import { expect, Page } from '@playwright/test';

export class DashboardPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async verifyDashboardElements() {
    // Verifying the "Dashboard" Header
    await expect(this.page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();

    // Verifying "Time at Work" widget
    await expect(this.page.getByText('Time at Work')).toBeVisible();

    // Verifying "My Actions" widget
    await expect(this.page.getByText('My Actions')).toBeVisible();

    // Verifying "Quick Launch" widget
    await expect(this.page.getByText('Quick Launch')).toBeVisible();

    // Verifying "Buzz Latest Posts" widget
    await expect(this.page.getByText('Buzz Latest Posts')).toBeVisible();
  }
}
