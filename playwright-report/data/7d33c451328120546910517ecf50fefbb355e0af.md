# Test info

- Name: Performance Page - Search for Charles Carter
- Location: C:\Users\Rav\Documents\Playwright\playwright-orangehrm\tests\performance.spec.ts:16:5

# Error details

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByText('Account Assistant')

    at PerformancePage.fillSearchFormForCharlesCarter (C:\Users\Rav\Documents\Playwright\playwright-orangehrm\pages\PerformancePage.ts:42:52)
    at C:\Users\Rav\Documents\Playwright\playwright-orangehrm\tests\performance.spec.ts:24:3
```

# Page snapshot

```yaml
- complementary:
  - navigation "Sidepanel":
    - link "client brand banner":
      - /url: https://www.orangehrm.com/
      - img "client brand banner"
    - textbox "Search"
    - button ""
    - separator
    - list:
      - listitem:
        - link "Admin":
          - /url: /web/index.php/admin/viewAdminModule
      - listitem:
        - link "PIM":
          - /url: /web/index.php/pim/viewPimModule
      - listitem:
        - link "Leave":
          - /url: /web/index.php/leave/viewLeaveModule
      - listitem:
        - link "Time":
          - /url: /web/index.php/time/viewTimeModule
      - listitem:
        - link "Recruitment":
          - /url: /web/index.php/recruitment/viewRecruitmentModule
      - listitem:
        - link "My Info":
          - /url: /web/index.php/pim/viewMyDetails
      - listitem:
        - link "Performance":
          - /url: /web/index.php/performance/viewPerformanceModule
      - listitem:
        - link "Dashboard":
          - /url: /web/index.php/dashboard/index
      - listitem:
        - link "Directory":
          - /url: /web/index.php/directory/viewDirectory
      - listitem:
        - link "Maintenance":
          - /url: /web/index.php/maintenance/viewMaintenanceModule
      - listitem:
        - link "Claim":
          - /url: /web/index.php/claim/viewClaimModule
          - img
          - text: Claim
      - listitem:
        - link "Buzz":
          - /url: /web/index.php/buzz/viewBuzz
- banner:
  - heading "Performance" [level=6]
  - heading "/ Manage Reviews" [level=6]
  - link "Upgrade":
    - /url: https://orangehrm.com/open-source/upgrade-to-advanced
    - button "Upgrade"
  - list:
    - listitem:
      - img "profile picture"
      - paragraph: pasta Kumar
      - text: 
  - navigation "Topbar Menu":
    - list:
      - listitem: Configure 
      - listitem: Manage Reviews 
      - listitem:
        - link "My Trackers":
          - /url: "#"
      - listitem:
        - link "Employee Trackers":
          - /url: "#"
      - button ""
- heading "Employee Reviews" [level=5]
- button ""
- separator
- text: Employee Name
- textbox "Type for hints...": Charles Carter
- text: Invalid Job Title -- Select -- 
- listbox:
  - option "-- Select --"
  - option "AQA Engineer 20250429_124214Shera"
  - option "AQA Engineer 20250429_124215Odell3"
  - option "AQA Engineer 20250429_124215Sally"
  - option "AQA Engineer 20250429_124252Dillon4"
  - option "AQA Engineer 20250429_124252Dillon5"
  - option "AQA Engineer 20250429_124304Alverta2"
  - option "AQA Engineer 20250429_124341Delmar1"
  - option "Automation Tester"
  - option "Chief Executive Officer"
  - option "Chief Financial Officer"
  - option "Chief Technical Officer"
  - option "Content Specialist"
  - option "Customer Success Manager"
  - option "Database Administrator"
  - option "Finance Manager"
  - option "Financial Analyst"
  - option "Head of Support"
  - option "HR Associate"
  - option "HR Manager"
  - option "IT Manager"
  - option "Network Administrator"
  - option "Payroll Administrator"
  - option "Pre-Sales Coordinator"
  - option "QA Engineer"
  - option "QA Lead"
  - option "qwer"
  - option "rsjsrii"
  - option "Sales Representative"
  - option "Social Media Marketer"
  - option "Software Architect"
  - option "Software Engineer"
  - option "software engineer 1gr4wr"
  - option "Support Specialist"
  - option "Tesy"
  - option "VP - Client Services"
  - option "VP - Sales & Marketing"
- text: Sub Unit -- Select --  Include Current Employees Only  Review Status -- Select --  From Date
- textbox "yyyy-dd-mm": 2025-01-01
- text:  To Date
- textbox "yyyy-dd-mm": 2025-31-12
- text: 
- separator
- button "Reset"
- button "Search"
- separator
- text: No Records Found
- table:
  - rowgroup:
    - row "Employee  Job Title Sub Unit Review Period  Due Date  Review Status  Actions":
      - columnheader "Employee "
      - columnheader "Job Title"
      - columnheader "Sub Unit"
      - columnheader "Review Period "
      - columnheader "Due Date "
      - columnheader "Review Status "
      - columnheader "Actions"
  - rowgroup
- paragraph: OrangeHRM OS 5.7
- paragraph:
  - text: © 2005 - 2025
  - link "OrangeHRM, Inc":
    - /url: http://www.orangehrm.com
  - text: . All rights reserved.
```

# Test source

```ts
   1 | import { expect, Locator, Page } from '@playwright/test';
   2 |
   3 | export class PerformancePage {
   4 |   readonly page: Page;
   5 |   readonly employeeNameInput: Locator;
   6 |   readonly searchButton: Locator;
   7 |   readonly resetButton: Locator;
   8 |
   9 |   constructor(page: Page) {
  10 |     this.page = page;
  11 |     this.employeeNameInput = page.getByPlaceholder('Type for hints...');
  12 |     this.searchButton = page.getByRole('button', { name: 'Search' });
  13 |     this.resetButton = page.getByRole('button', { name: 'Reset' });
  14 |   }
  15 |
  16 |   async goto() {
  17 |     await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/performance/searchEvaluatePerformanceReview');
  18 |   }
  19 |
  20 |   getHeader(): Locator {
  21 |     return this.page.locator('h6.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module');
  22 |   }
  23 |
  24 |   async fillSearchFormForCharlesCarter() {
  25 |     const targetName = 'Charles Carter';
  26 |     const characters = 'Charles Carter';
  27 |     await this.employeeNameInput.click();
  28 |     await this.employeeNameInput.fill('');
  29 |
  30 |     for (let i = 0; i < characters.length; i++) {
  31 |       await this.employeeNameInput.type(characters[i]);
  32 |       await this.page.waitForTimeout(500); // simulate slower typing
  33 |
  34 |       const suggestion = this.page.getByText(targetName, { exact: true });
  35 |       if (await suggestion.isVisible()) {
  36 |         await suggestion.click();
  37 |         break;
  38 |       }
  39 |     }
  40 |
  41 |     await this.page.locator('.oxd-select-text--after > .oxd-icon').first().click();
> 42 |     await this.page.getByText('Account Assistant').click();
     |                                                    ^ Error: locator.click: Test timeout of 30000ms exceeded.
  43 |
  44 |     await this.page.locator('div:nth-child(3) > .oxd-input-group > div:nth-child(2) .oxd-select-text--after > .oxd-icon').click();
  45 |     await this.page.getByText('OrangeHRM', { exact: true }).click();
  46 |
  47 |     await this.page.locator('div:nth-child(4) > .oxd-input-group > div:nth-child(2) .oxd-select-text--after > .oxd-icon').click();
  48 |     await this.page.getByText('Current and Past Employees').click();
  49 |
  50 |     await this.page.locator('div:nth-child(5) > .oxd-input-group > div:nth-child(2) .oxd-select-text--after > .oxd-icon').click();
  51 |     await this.page.getByRole('option', { name: 'Activated' }).click();
  52 |
  53 |     const fromDateInput = this.page.getByRole('textbox', { name: 'yyyy-dd-mm' }).first();
  54 |     const toDateInput = this.page.getByRole('textbox', { name: 'yyyy-dd-mm' }).nth(1);
  55 |
  56 |     await fromDateInput.click();
  57 |     await fromDateInput.press('ControlOrMeta+a');
  58 |     await fromDateInput.fill('2024-01-01');
  59 |
  60 |     await toDateInput.click();
  61 |     await toDateInput.press('ControlOrMeta+a');
  62 |     await toDateInput.fill('2025-04-01');
  63 |   }
  64 |
  65 |   async clickSearch() {
  66 |     await this.searchButton.click();
  67 |   }
  68 |
  69 |   async clickReset() {
  70 |     await this.resetButton.click();
  71 |   }
  72 | }
  73 |
```