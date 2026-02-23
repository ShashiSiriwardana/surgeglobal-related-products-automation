# Surge Global – Related Best Seller Products Automation

##  Overview

This project contains an automated test framework built using **Playwright (TypeScript)** to validate the "Best Seller Related Products" feature as described in the QA Skills Assessment.

The automation is aligned with the manual test strategy and assumptions defined in the assessment document.

---

##  Feature Under Test

"Best Seller Related Products" section on a product detail page.

The feature validates:

- Related products belong to the same category
- Products fall within ±20% price range of main product
- Maximum of 6 related products displayed
- Out-of-stock products excluded
- Invalid category products excluded
- Boundary price validation ($40 and $60)
- Navigation to related product page works

---

##  Business Assumptions 
- Best seller defined by highest sales volume
- Price tolerance: ±20%
- Maximum display count: 6
- Only in-stock products shown
- Same category only
- Main product excluded from related list

---

##  Project Structure

surgeglobal-related-products-automation/
│
├── demo-site/ # Controlled test environment (HTML mock)
├── pages/ # Page Object Model classes
├── tests/ # Test specifications
├── utils/ # Utility functions
├── playwright.config.ts
├── package.json
├── README.md
└── .github/workflows/ # CI pipeline


---

##  Automated Test Coverage

| Test Case | Description |
|-----------|-------------|
| TC_001 | Section visible |
| TC_002 | Maximum 6 products |
| TC_003 | Same category validation |
| TC_004 | Price range ±20% |
| TC_005 | Main product excluded |
| TC_007 | Navigation validation |
| TC_011 | Out-of-stock excluded |
| TC_013 | Price out-of-range excluded |
| TC_018 | Lower boundary validation |
| TC_021 | Upper boundary validation |

---

##  Tech Stack

- Playwright
- TypeScript
- Page Object Model (POM)
- GitHub Actions (CI/CD)
- HTML Report

---

##  How To Run Locally

### Install Dependencies
npm install

### Run Tests
npx playwright test

### Run Tests in Headed Mode
npx playwright test --headed


### View HTML Report
npx playwright show-report


---

##  CI/CD Integration

Tests automatically run on:

- Push to main branch
- Pull request

Configured using GitHub Actions.

Pipeline steps:

- Install dependencies
- Install Playwright browsers
- Execute tests
- Generate report

---

##  Reporting

- HTML test report
- Screenshot on failure
- Video recording on failure
- CI pipeline status indicator

---

##  Submission Summary

This automation framework:

- Fully aligns with the manual test strategy
- Uses structured Page Object Model
- Implements business rule validations
- Includes CI/CD pipeline
- Demonstrates scalable automation design
