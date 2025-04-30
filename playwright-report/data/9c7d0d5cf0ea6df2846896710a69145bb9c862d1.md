# Test info

- Name: Search candidate by name with delay typing
- Location: C:\Users\Rav\Documents\Playwright\playwright-orangehrm\tests\recruitment.spec.ts:36:5

# Error details

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByText('Account Assistant', { exact: true })

    at RecruitmentPage.searchCandidateByName (C:\Users\Rav\Documents\Playwright\playwright-orangehrm\pages\RecruitmentPage.ts:74:69)
    at C:\Users\Rav\Documents\Playwright\playwright-orangehrm\tests\recruitment.spec.ts:44:3
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
  - heading "Recruitment" [level=6]
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
      - listitem:
        - link "Candidates":
          - /url: "#"
      - listitem:
        - link "Vacancies":
          - /url: "#"
      - button ""
- heading "Candidates" [level=5]
- button ""
- separator
- text: Job Title -- Select -- 
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
- text: Vacancy -- Select --  Hiring Manager -- Select --  Status -- Select --  Candidate Name
- textbox "Type for hints..."
- text: Keywords
- textbox "Enter comma seperated words..."
- text: Date of Application
- textbox "From"
- text: 
- textbox "To"
- text:  Method of Application -- Select -- 
- separator
- button "Reset"
- button "Search"
- button " Add"
- separator
- text: (64) Records Found
- table:
  - rowgroup:
    - row " Vacancy  Candidate  Hiring Manager  Date of Application  Status  Actions":
      - columnheader "":
        - checkbox ""
        - text: 
      - columnheader "Vacancy "
      - columnheader "Candidate "
      - columnheader "Hiring Manager "
      - columnheader "Date of Application "
      - columnheader "Status "
      - columnheader "Actions"
  - rowgroup:
    - row " Senior QA Lead yamini pakalapati (Deleted) 2025-29-04 Application Initiated  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Senior QA Lead"
      - cell "yamini pakalapati"
      - cell "(Deleted)"
      - cell "2025-29-04"
      - cell "Application Initiated"
      - cell " ":
        - button ""
        - button ""
    - row " Junior Account Assistant Rav Test QA (Deleted) 2025-29-04 Application Initiated   ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Junior Account Assistant"
      - cell "Rav Test QA"
      - cell "(Deleted)"
      - cell "2025-29-04"
      - cell "Application Initiated"
      - cell "  ":
        - button ""
        - button ""
        - button ""
    - row " Senior QA Lead Viswanath s (Deleted) 2025-29-04 Application Initiated  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Senior QA Lead"
      - cell "Viswanath s"
      - cell "(Deleted)"
      - cell "2025-29-04"
      - cell "Application Initiated"
      - cell " ":
        - button ""
        - button ""
    - row " When A Woman Ascends the Stairs (Deleted) 2025-29-04  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell
      - cell "When A Woman Ascends the Stairs"
      - cell "(Deleted)"
      - cell "2025-29-04"
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " Tanmay Anderson O'Keefe (Deleted) 2024-29-03  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell
      - cell "Tanmay Anderson O'Keefe"
      - cell "(Deleted)"
      - cell "2024-29-03"
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " Tanmay sree Dachu (Deleted) 2024-06-02   ":
      - cell "":
        - checkbox ""
        - text: 
      - cell
      - cell "Tanmay sree Dachu"
      - cell "(Deleted)"
      - cell "2024-06-02"
      - cell
      - cell "  ":
        - button ""
        - button ""
        - button ""
    - row " Senior QA Lead John Doe (Deleted) 2024-06-02 Shortlisted   ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Senior QA Lead"
      - cell "John Doe"
      - cell "(Deleted)"
      - cell "2024-06-02"
      - cell "Shortlisted"
      - cell "  ":
        - button ""
        - button ""
        - button ""
    - row " Senior QA Lead John Doe (Deleted) 2024-06-02 Shortlisted   ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Senior QA Lead"
      - cell "John Doe"
      - cell "(Deleted)"
      - cell "2024-06-02"
      - cell "Shortlisted"
      - cell "  ":
        - button ""
        - button ""
        - button ""
    - row " Senior QA Lead John Doe (Deleted) 2024-06-02 Shortlisted   ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Senior QA Lead"
      - cell "John Doe"
      - cell "(Deleted)"
      - cell "2024-06-02"
      - cell "Shortlisted"
      - cell "  ":
        - button ""
        - button ""
        - button ""
    - row " Senior QA Lead John Doe (Deleted) 2024-06-02 Shortlisted   ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Senior QA Lead"
      - cell "John Doe"
      - cell "(Deleted)"
      - cell "2024-06-02"
      - cell "Shortlisted"
      - cell "  ":
        - button ""
        - button ""
        - button ""
    - row " Senior QA Lead John Doe (Deleted) 2024-06-02 Shortlisted   ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Senior QA Lead"
      - cell "John Doe"
      - cell "(Deleted)"
      - cell "2024-06-02"
      - cell "Shortlisted"
      - cell "  ":
        - button ""
        - button ""
        - button ""
    - row " Senior QA Lead John Doe (Deleted) 2024-06-02 Shortlisted   ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Senior QA Lead"
      - cell "John Doe"
      - cell "(Deleted)"
      - cell "2024-06-02"
      - cell "Shortlisted"
      - cell "  ":
        - button ""
        - button ""
        - button ""
    - row " Senior QA Lead John Doe (Deleted) 2024-06-02 Rejected   ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Senior QA Lead"
      - cell "John Doe"
      - cell "(Deleted)"
      - cell "2024-06-02"
      - cell "Rejected"
      - cell "  ":
        - button ""
        - button ""
        - button ""
    - row " Senior QA Lead John Doe (Deleted) 2024-06-02 Shortlisted   ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Senior QA Lead"
      - cell "John Doe"
      - cell "(Deleted)"
      - cell "2024-06-02"
      - cell "Shortlisted"
      - cell "  ":
        - button ""
        - button ""
        - button ""
    - row " Manu K M (Deleted) 2024-06-02  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell
      - cell "Manu K M"
      - cell "(Deleted)"
      - cell "2024-06-02"
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " Manu K M (Deleted) 2024-06-02  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell
      - cell "Manu K M"
      - cell "(Deleted)"
      - cell "2024-06-02"
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " Manu K M (Deleted) 2024-06-02  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell
      - cell "Manu K M"
      - cell "(Deleted)"
      - cell "2024-06-02"
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " madhav m (Deleted) 2024-06-02  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell
      - cell "madhav m"
      - cell "(Deleted)"
      - cell "2024-06-02"
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " madhav m (Deleted) 2024-06-02  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell
      - cell "madhav m"
      - cell "(Deleted)"
      - cell "2024-06-02"
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " madhav m (Deleted) 2024-06-02  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell
      - cell "madhav m"
      - cell "(Deleted)"
      - cell "2024-06-02"
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " madhav m (Deleted) 2024-06-02  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell
      - cell "madhav m"
      - cell "(Deleted)"
      - cell "2024-06-02"
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " madhav m (Deleted) 2024-06-02  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell
      - cell "madhav m"
      - cell "(Deleted)"
      - cell "2024-06-02"
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " madhav m (Deleted) 2024-06-02  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell
      - cell "madhav m"
      - cell "(Deleted)"
      - cell "2024-06-02"
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " Senior QA Lead Gautham Raj R (Deleted) 2024-06-02 Rejected   ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Senior QA Lead"
      - cell "Gautham Raj R"
      - cell "(Deleted)"
      - cell "2024-06-02"
      - cell "Rejected"
      - cell "  ":
        - button ""
        - button ""
        - button ""
    - row " Senior QA Lead Gautham Raj R (Deleted) 2024-06-02 Shortlisted   ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Senior QA Lead"
      - cell "Gautham Raj R"
      - cell "(Deleted)"
      - cell "2024-06-02"
      - cell "Shortlisted"
      - cell "  ":
        - button ""
        - button ""
        - button ""
    - row " Senior QA Lead Gautham Raj R (Deleted) 2024-06-02 Shortlisted   ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Senior QA Lead"
      - cell "Gautham Raj R"
      - cell "(Deleted)"
      - cell "2024-06-02"
      - cell "Shortlisted"
      - cell "  ":
        - button ""
        - button ""
        - button ""
    - row " Senior QA Lead Gautham Raj R (Deleted) 2024-06-02 Shortlisted   ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Senior QA Lead"
      - cell "Gautham Raj R"
      - cell "(Deleted)"
      - cell "2024-06-02"
      - cell "Shortlisted"
      - cell "  ":
        - button ""
        - button ""
        - button ""
    - row " Senior QA Lead Gautham Raj R (Deleted) 2024-06-02 Application Initiated   ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Senior QA Lead"
      - cell "Gautham Raj R"
      - cell "(Deleted)"
      - cell "2024-06-02"
      - cell "Application Initiated"
      - cell "  ":
        - button ""
        - button ""
        - button ""
    - row " Senior QA Lead Gautham Raj R (Deleted) 2024-06-02 Application Initiated   ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Senior QA Lead"
      - cell "Gautham Raj R"
      - cell "(Deleted)"
      - cell "2024-06-02"
      - cell "Application Initiated"
      - cell "  ":
        - button ""
        - button ""
        - button ""
    - row " Senior QA Lead Gautham Raj R (Deleted) 2024-06-02 Shortlisted   ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Senior QA Lead"
      - cell "Gautham Raj R"
      - cell "(Deleted)"
      - cell "2024-06-02"
      - cell "Shortlisted"
      - cell "  ":
        - button ""
        - button ""
        - button ""
    - row " Senior QA Lead Gautham Raj R (Deleted) 2024-06-02 Rejected   ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Senior QA Lead"
      - cell "Gautham Raj R"
      - cell "(Deleted)"
      - cell "2024-06-02"
      - cell "Rejected"
      - cell "  ":
        - button ""
        - button ""
        - button ""
    - row " Senior QA Lead Gautham Raj R (Deleted) 2024-06-02 Shortlisted   ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Senior QA Lead"
      - cell "Gautham Raj R"
      - cell "(Deleted)"
      - cell "2024-06-02"
      - cell "Shortlisted"
      - cell "  ":
        - button ""
        - button ""
        - button ""
    - row " Senior QA Lead Gautham Raj R (Deleted) 2024-06-02 Shortlisted   ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Senior QA Lead"
      - cell "Gautham Raj R"
      - cell "(Deleted)"
      - cell "2024-06-02"
      - cell "Shortlisted"
      - cell "  ":
        - button ""
        - button ""
        - button ""
    - row " Senior QA Lead Gautham Raj R (Deleted) 2024-06-02 Shortlisted   ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Senior QA Lead"
      - cell "Gautham Raj R"
      - cell "(Deleted)"
      - cell "2024-06-02"
      - cell "Shortlisted"
      - cell "  ":
        - button ""
        - button ""
        - button ""
    - row " Senior QA Lead Gautham Raj R (Deleted) 2024-06-02 Shortlisted   ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Senior QA Lead"
      - cell "Gautham Raj R"
      - cell "(Deleted)"
      - cell "2024-06-02"
      - cell "Shortlisted"
      - cell "  ":
        - button ""
        - button ""
        - button ""
    - row " Senior QA Lead Gautham Raj R (Deleted) 2024-06-02 Shortlisted   ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Senior QA Lead"
      - cell "Gautham Raj R"
      - cell "(Deleted)"
      - cell "2024-06-02"
      - cell "Shortlisted"
      - cell "  ":
        - button ""
        - button ""
        - button ""
    - row " Senior QA Lead Cedric C Ross. (Deleted) 2024-06-02 Shortlisted   ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Senior QA Lead"
      - cell "Cedric C Ross."
      - cell "(Deleted)"
      - cell "2024-06-02"
      - cell "Shortlisted"
      - cell "  ":
        - button ""
        - button ""
        - button ""
    - row " Senior QA Lead Cedric C Ross. (Deleted) 2024-06-02 Shortlisted   ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Senior QA Lead"
      - cell "Cedric C Ross."
      - cell "(Deleted)"
      - cell "2024-06-02"
      - cell "Shortlisted"
      - cell "  ":
        - button ""
        - button ""
        - button ""
    - row " Payroll Administrator TestFN TestMN TestLN pasta Pavan Kumar 2024-06-02 Application Initiated  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Payroll Administrator"
      - cell "TestFN TestMN TestLN"
      - cell "pasta Pavan Kumar"
      - cell "2024-06-02"
      - cell "Application Initiated"
      - cell " ":
        - button ""
        - button ""
    - row " Payroll Administrator TestFN TestMN TestLN pasta Pavan Kumar 2024-06-02 Application Initiated  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Payroll Administrator"
      - cell "TestFN TestMN TestLN"
      - cell "pasta Pavan Kumar"
      - cell "2024-06-02"
      - cell "Application Initiated"
      - cell " ":
        - button ""
        - button ""
    - row " Payroll Administrator TestFN TestMN TestLN pasta Pavan Kumar 2024-06-02 Application Initiated   ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Payroll Administrator"
      - cell "TestFN TestMN TestLN"
      - cell "pasta Pavan Kumar"
      - cell "2024-06-02"
      - cell "Application Initiated"
      - cell "  ":
        - button ""
        - button ""
        - button ""
    - row " Payroll Administrator TestFN TestMN TestLN pasta Pavan Kumar 2024-06-02 Application Initiated   ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Payroll Administrator"
      - cell "TestFN TestMN TestLN"
      - cell "pasta Pavan Kumar"
      - cell "2024-06-02"
      - cell "Application Initiated"
      - cell "  ":
        - button ""
        - button ""
        - button ""
    - row " Payroll Administrator TestFN TestMN TestLN pasta Pavan Kumar 2024-06-02 Application Initiated   ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Payroll Administrator"
      - cell "TestFN TestMN TestLN"
      - cell "pasta Pavan Kumar"
      - cell "2024-06-02"
      - cell "Application Initiated"
      - cell "  ":
        - button ""
        - button ""
        - button ""
    - row " Payroll Administrator TestFN TestMN TestLN pasta Pavan Kumar 2024-06-02 Hired   ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Payroll Administrator"
      - cell "TestFN TestMN TestLN"
      - cell "pasta Pavan Kumar"
      - cell "2024-06-02"
      - cell "Hired"
      - cell "  ":
        - button ""
        - button ""
        - button ""
    - row " Payroll Administrator TestFN TestMN TestLN pasta Pavan Kumar 2024-06-02 Application Initiated   ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Payroll Administrator"
      - cell "TestFN TestMN TestLN"
      - cell "pasta Pavan Kumar"
      - cell "2024-06-02"
      - cell "Application Initiated"
      - cell "  ":
        - button ""
        - button ""
        - button ""
    - row " AntoAnto 09:58 AM M Varghese (Deleted) 2024-06-02  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell
      - cell "AntoAnto 09:58 AM M Varghese"
      - cell "(Deleted)"
      - cell "2024-06-02"
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " Anto 10:15 AM M Varghese (Deleted) 2024-06-02  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell
      - cell "Anto 10:15 AM M Varghese"
      - cell "(Deleted)"
      - cell "2024-06-02"
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " Anto 10:20 AM M Varghese (Deleted) 2024-06-02  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell
      - cell "Anto 10:20 AM M Varghese"
      - cell "(Deleted)"
      - cell "2024-06-02"
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " Anto 10:26 AM M Varghese (Deleted) 2024-06-02  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell
      - cell "Anto 10:26 AM M Varghese"
      - cell "(Deleted)"
      - cell "2024-06-02"
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " Anto 10:28 AM M Varghese (Deleted) 2024-06-02  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell
      - cell "Anto 10:28 AM M Varghese"
      - cell "(Deleted)"
      - cell "2024-06-02"
      - cell
      - cell " ":
        - button ""
        - button ""
- navigation "Pagination Navigation":
  - list:
    - listitem:
      - button "1"
    - listitem:
      - button "2"
    - listitem:
      - button ""
- paragraph: OrangeHRM OS 5.7
- paragraph:
  - text: © 2005 - 2025
  - link "OrangeHRM, Inc":
    - /url: http://www.orangehrm.com
  - text: . All rights reserved.
```

# Test source

```ts
   1 | // pages/RecruitmentPage.ts
   2 | import { Page, expect } from '@playwright/test';
   3 |
   4 | export class RecruitmentPage {
   5 |   constructor(private page: Page) {}
   6 |
   7 |   async gotoAddCandidatePage() {
   8 |     await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/addCandidate');
   9 |   }
   10 |
   11 |   async addCandidate(firstName: string, middleName: string, lastName: string, email: string, phone: string, resumePath: string) {
   12 |     await this.page.getByRole('textbox', { name: 'First Name' }).click();
   13 |     await this.page.getByRole('textbox', { name: 'First Name' }).fill(firstName);
   14 |
   15 |     await this.page.getByRole('textbox', { name: 'Middle Name' }).click();
   16 |     await this.page.getByRole('textbox', { name: 'Middle Name' }).fill(middleName);
   17 |     await this.page.getByRole('textbox', { name: 'Middle Name' }).press('Tab');
   18 |
   19 |     await this.page.getByRole('textbox', { name: 'Last Name' }).fill(lastName);
   20 |
   21 |     // Select Vacancy
   22 |     await this.page.locator('form i').first().click();
   23 |     await this.page.getByText('Junior Account Assistant').click();
   24 |
   25 |     // Email
   26 |     await this.page.getByRole('textbox', { name: 'Type here' }).first().click();
   27 |     await this.page.getByRole('textbox', { name: 'Type here' }).first().fill(email);
   28 |     await this.page.getByRole('textbox', { name: 'Type here' }).first().press('Tab');
   29 |
   30 |     // Contact Number
   31 |     await this.page.getByRole('textbox', { name: 'Type here' }).nth(1).fill(phone);
   32 |
   33 |     // Upload Resume
   34 |     await this.page.locator('div').filter({ hasText: /^ResumeBrowseNo file selected$/ }).locator('i').click();
   35 |     await this.page.getByRole('button', { name: 'Choose File' }).setInputFiles(resumePath);
   36 |
   37 |     // Keywords
   38 |     await this.page.getByRole('textbox', { name: 'Enter comma seperated words...' }).click();
   39 |     await this.page.getByRole('textbox', { name: 'Enter comma seperated words...' }).fill('playwright automation');
   40 |     await this.page.getByRole('textbox', { name: 'Enter comma seperated words...' }).press('Tab');
   41 |
   42 |     // Date of Application (Ensure visibility before filling)
   43 |     const dateInput = this.page.getByRole('textbox', { name: 'mm-dd-yyyy' });
   44 |     if (await dateInput.isVisible()) {
   45 |       await dateInput.fill('01-01-2025');
   46 |     } else {
   47 |       console.warn('Date input field not found. Skipping...');
   48 |     }
   49 |
   50 |     // Notes
   51 |     await this.page.locator('textarea').click();
   52 |     await this.page.locator('textarea').fill('playwright automation by Rav');
   53 |
   54 |     // Consent Checkbox
   55 |     await this.page.locator('form span i').click();
   56 |
   57 |     // Save Candidate
   58 |     await this.page.getByRole('button', { name: 'Save' }).click();
   59 |
   60 |     // Capture Screenshot for Debugging
   61 |     await this.page.screenshot({ path: 'debug-candidate.png' });
   62 |
   63 |     // Assert success message
   64 |     await expect(this.page.locator('.oxd-toast')).toContainText('Successfully Saved');
   65 |   }
   66 |
   67 |   async gotoCandidateListPage() {
   68 |     await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/viewCandidates');
   69 |   }
   70 |
   71 |   async searchCandidateByName(name: string) {
   72 |     // Select Job Title
   73 |     await this.page.locator('.oxd-select-text--after > .oxd-icon').first().click();
>  74 |     await this.page.getByText('Account Assistant', { exact: true }).click();
      |                                                                     ^ Error: locator.click: Test timeout of 30000ms exceeded.
   75 |
   76 |     // Select Vacancy
   77 |     await this.page.locator('div:nth-child(2) > .oxd-input-group > div:nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click();
   78 |     await this.page.getByRole('option', { name: 'Junior Account Assistant' }).locator('span').click();
   79 |
   80 |     // Type Candidate Name with delay typing
   81 |     const nameInput = this.page.getByRole('textbox', { name: 'Type for hints...' });
   82 |     await nameInput.click();
   83 |     
   84 |     let typedName = '';
   85 |     for (const char of name) {
   86 |       typedName += char;
   87 |       await nameInput.type(char, { delay: 200 });
   88 |
   89 |       const suggestion = this.page.getByText(name, { exact: true });
   90 |
   91 |       // Wait until the full name appears in suggestions
   92 |       if (typedName.length >= 3) {
   93 |         const isVisible = await suggestion.isVisible().catch(() => false);
   94 |         if (isVisible) {
   95 |           await suggestion.click();
   96 |           break;
   97 |         }
   98 |       }
   99 |     }
  100 |
  101 |     // Click Search
  102 |     await this.page.getByRole('button', { name: 'Search' }).click();
  103 |
  104 |     // Verify the result contains the candidate
  105 |     await expect(this.page.locator('.orangehrm-container')).toContainText(name);
  106 |   }
  107 | }
  108 |
```