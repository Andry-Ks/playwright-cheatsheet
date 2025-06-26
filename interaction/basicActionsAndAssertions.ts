//Basic Actions and Assertions in Playwright

import { test, expect } from '@playwright/test';

test('basic actions and checks', async ({ page }) => {
  await page.goto('https://example.com');

  // === 1. ACTIONS ===

  // Click element
  await page.click('button#submit'); //await page.locator('.button').click();

  // Type into input (simulates keystrokes)
  await page.type('input[name="username"]', 'testuser');

  // Fill input (clears and sets value)
  await page.fill('input[name="password"]', 'securepassword');

  // Hover over element
  await page.hover('button#menu');

  // Select option in <select>
  await page.selectOption('select#country', 'Ukraine');

  // === 2. ASSERTIONS ===

  // Check if element is visible
  await expect(page.locator('button#submit')).toBeVisible();

  // Check if element is hidden
  await expect(page.locator('div#popup')).toBeHidden();

  // Check if checkbox or radio is selected
  await expect(page.locator('input[type="checkbox"]')).toBeChecked();

  // Check exact text content
  await expect(page.locator('h1')).toHaveText('Welcome');

  // Check input value
  await expect(page.locator('input[name="username"]')).toHaveValue('testuser');

  // === 3. OTHER USEFUL METHODS ===

  // Wait for element to appear in DOM
  await page.waitForSelector('button#submit');

  // Wait fixed time (not recommended for production)
  await page.waitForTimeout(2000); // 2 seconds

  // Navigate to another page
  await page.goto('https://playwright.dev');
});