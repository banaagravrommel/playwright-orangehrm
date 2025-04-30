import { defineConfig } from '@playwright/test';
import * as dotenv from 'dotenv';
import 'dotenv/config';

dotenv.config();

export default defineConfig({
  use: {
//    baseURL: process.env.BASE_URL,
    baseURL: 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login/', // Set base URL here  
    browserName: 'chromium', //  browserName is not a property of 'use', but of the project.
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  testDir: './tests',
  reporter: [['html']],
  projects: [ // Add this projects array
    {
      name: 'chromium',
      use: {
        ...({}),  // You can spread an empty object here if you don't have other project specific settings
      },
    },
  ],
});
