# Test info

- Name: Reset leave search filters
- Location: C:\Users\Rav\Documents\Playwright\playwright-orangehrm\tests\leave.spec.ts:38:7

# Error details

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByText('Jason Duarte', { exact: true })

    at LeavePage.selectEmployee (C:\Users\Rav\Documents\Playwright\playwright-orangehrm\pages\LeavePage.ts:35:54)
    at C:\Users\Rav\Documents\Playwright\playwright-orangehrm\tests\leave.spec.ts:50:5
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
  - heading "Leave" [level=6]
  - link "Upgrade":
    - /url: https://orangehrm.com/open-source/upgrade-to-advanced
    - button "Upgrade"
  - list:
    - listitem:
      - img "profile picture"
      - paragraph: manda user
      - text: 
  - navigation "Topbar Menu":
    - list:
      - listitem:
        - link "Apply":
          - /url: "#"
      - listitem:
        - link "My Leave":
          - /url: "#"
      - listitem: Entitlements 
      - listitem: Reports 
      - listitem: Configure 
      - listitem:
        - link "Leave List":
          - /url: "#"
      - listitem:
        - link "Assign Leave":
          - /url: "#"
      - button ""
- heading "Leave List" [level=5]
- button ""
- separator
- text: From Date
- textbox "yyyy-dd-mm": 2023-01-01
- text:  To Date
- textbox "yyyy-dd-mm": 2023-31-12
- text:  Show Leave with Status* -- Select --  Pending Approval  Scheduled  Leave Type CAN - Vacation  Employee Name
- textbox "Type for hints...": Jason Duarte
- listbox:
  - option "No Records Found"
- text: Sub Unit -- Select -- 
- paragraph: Include Past Employees
- checkbox
- separator
- paragraph: "* Required"
- button "Reset"
- button "Search"
- text: No Records Found
- table:
  - rowgroup:
    - row " Date Employee Name Leave Type Leave Balance (Days) Number of Days Status Comments Actions":
      - columnheader "":
        - checkbox ""
        - text: 
      - columnheader "Date"
      - columnheader "Employee Name"
      - columnheader "Leave Type"
      - columnheader "Leave Balance (Days)"
      - columnheader "Number of Days"
      - columnheader "Status"
      - columnheader "Comments"
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
   1 | import { Page, expect } from '@playwright/test';
   2 |
   3 | export class LeavePage {
   4 |   constructor(private page: Page) {}
   5 |
   6 |   async fillDateRange(from: string, to: string) {
   7 |     const fromDate = this.page.getByRole('textbox', { name: 'yyyy-dd-mm' }).first();
   8 |     const toDate = this.page.getByRole('textbox', { name: 'yyyy-dd-mm' }).nth(1);
   9 |
  10 |     await fromDate.click();
  11 |     await fromDate.press('ControlOrMeta+a');
  12 |     await fromDate.fill(from);
  13 |     await fromDate.press('Tab');
  14 |
  15 |     await toDate.click();
  16 |     await toDate.press('ControlOrMeta+a');
  17 |     await toDate.fill(to);
  18 |     await toDate.press('Tab');
  19 |   }
  20 |
  21 |   async selectStatus(status: string) {
  22 |     await this.page.locator('.oxd-select-text--after > .oxd-icon').first().click();
  23 |     await this.page.getByText(status).click();
  24 |   }
  25 |
  26 |   async selectLeaveType(type: string) {
  27 |     await this.page.locator('.oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').first().click();
  28 |     await this.page.getByText(type).click();
  29 |   }
  30 |
  31 |   async selectEmployee(name: string) {
  32 |     const input = this.page.getByRole('textbox', { name: 'Type for hints...' });
  33 |     await input.click();
  34 |     await input.fill(name);
> 35 |     await this.page.getByText(name, { exact: true }).click();
     |                                                      ^ Error: locator.click: Test timeout of 30000ms exceeded.
  36 |   }
  37 |
  38 |   async selectSubUnit(unit: string) {
  39 |     await this.page.locator('div:nth-child(2) > .oxd-input-group > div:nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click();
  40 |     await this.page.getByText(unit).click();
  41 |   }
  42 |
  43 |   async clickSearch() {
  44 |     await this.page.getByRole('button', { name: 'Search' }).click();
  45 |   }
  46 |
  47 |   async resetSearch() {
  48 |     await this.page.getByRole('button', { name: 'Reset' }).click();
  49 |   }
  50 |
  51 |   async expectFieldsReset() {
  52 |     const fromDate = this.page.getByRole('textbox', { name: 'yyyy-dd-mm' }).first();
  53 |     const toDate = this.page.getByRole('textbox', { name: 'yyyy-dd-mm' }).nth(1);
  54 |     const employeeInput = this.page.getByRole('textbox', { name: 'Type for hints...' });
  55 |   
  56 |     const fromDateValue = await fromDate.inputValue();
  57 |     const toDateValue = await toDate.inputValue();
  58 |     const employeeValue = await employeeInput.inputValue();
  59 |   
  60 |     console.log('After Reset - From:', fromDateValue, 'To:', toDateValue, 'Employee:', employeeValue);
  61 |   
  62 |     // Only assert employee was cleared (date fields are not reset by UI)
  63 |     await expect(employeeInput).toHaveValue('');
  64 |   
  65 |     // Optional: log or soft check if needed
  66 |     // if you really want to ensure a value changed, you could:
  67 |     // expect(fromDateValue).not.toBe('2023-01-01');
  68 |   }
  69 |   
  70 |   }
  71 |
  72 |
```