// pages/BuzzPage.ts
import { Page, expect } from '@playwright/test';
import path from 'path';

export class BuzzPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async postStatusUpdate(message: string) {
    const postBox = this.page.locator('textarea[placeholder="What\'s on your mind?"]');
    await postBox.click();
    await postBox.fill(message);

    const postButton = this.page.locator('button[type="submit"].oxd-button--main');
    await postButton.click();

    await expect(this.page.locator('.orangehrm-buzz-post-body').first()).toContainText(message);
  }

  async sharePhoto(fileName: string) {
    const photoTab = this.page.getByRole('button', { name: 'Photo' });
    await photoTab.click();

    const fileInput = this.page.locator('input[type="file"]');
    const filePath = path.resolve(__dirname, '../tests/assets', fileName); // ✅ Corrected for your setup
    await fileInput.setInputFiles(filePath);

    const photoForm = fileInput.locator('xpath=ancestor::form');
    const shareButton = photoForm.locator('button:has-text("Share")');
    await expect(shareButton).toBeVisible();
    await expect(shareButton).toBeEnabled();
    await shareButton.scrollIntoViewIfNeeded();
    await shareButton.click();

    await expect(this.page.locator('.orangehrm-buzz-post-body img').first()).toBeVisible({ timeout: 10000 });
  }

  async shareVideo(videoUrl: string) {
    const videoTab = this.page.getByRole('button', { name: 'Video' });
    await videoTab.click();

    const videoInput = this.page.locator('textarea[placeholder="Paste Video URL"]');
    await expect(videoInput).toBeVisible();
    await videoInput.fill(videoUrl);

    const videoForm = videoInput.locator('xpath=ancestor::form');
    const shareButton = videoForm.locator('button:has-text("Share")');
    await expect(shareButton).toBeVisible();
    await expect(shareButton).toBeEnabled();
    await shareButton.click();

    const videoEmbed = this.page.locator('.orangehrm-buzz-post-body iframe, .orangehrm-buzz-post-body video').first();
    await expect(videoEmbed).toBeVisible({ timeout: 10000 });
  }
}
