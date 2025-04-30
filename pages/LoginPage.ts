import { Page, expect } from '@playwright/test';
import 'dotenv/config'; // Ensure dotenv is loaded first

export class LoginPage {
  constructor(private page: Page) {}

  // Function to add a delay (sleep)
  private async sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async goto() {
    await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  }

  async login(username: string, password: string) {
    // Wait for the username input to be visible
    await this.page.waitForSelector('input[name="username"]', { state: 'visible' });

    // Add a sleep/delay before interacting with the inputs
    await this.sleep(1000);  // sleep for 1 second (1000ms)

    // Fill in the username and password after the delay
    await this.page.fill('input[name="username"]', 'Admin');
    await this.page.fill('input[name="password"]', 'admin123');
    

    // Add a small delay before clicking the submit button
    await this.sleep(500);  // sleep for 0.5 seconds

    // Click the login button
    await this.page.click('button[type="submit"]');

    // Wait for the dashboard header to confirm successful login
    //await this.page.waitForSelector('h6:has-text("Dashboard")', { timeout: 5000 });

    // Assert that the dashboard header is visible
    //await this.page.waitForSelector('h6:has-text("Dashboard")'); // wait for dashboard header
  }
}
