import { test, expect } from '@playwright/test';

let sharedResource: string;

// beforeAll - runs once before all tests in this file (Example: fetch auth token, prepare DB, or load test data)
test.beforeAll(async () => {
  console.log('beforeAll: initializing shared resources');
  sharedResource = 'some shared resource';
});

// beforeEach - runs before every single test (Navigate to page, clean up state)
test.beforeEach(async ({ page }) => {
  console.log('beforeEach: setting up test environment');
  await page.goto('https://example.com');
});

// afterEach - runs after every single test (Logging, screenshots on failure, cleanup)
test.afterEach(async ({ page }, testInfo) => {
  console.log('afterEach: cleaning up after test');

  // Save screenshot if the test failed
  if (testInfo.status !== testInfo.expectedStatus) {
    await page.screenshot({ path: `screenshots/${testInfo.title}.png` });
  }
});

// afterAll - runs once after all tests in this file (Close DB, delete files, cleanup global state)
test.afterAll(async () => {
  console.log('afterAll: cleaning up shared resources');
  sharedResource = '';
});