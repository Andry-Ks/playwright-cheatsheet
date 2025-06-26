//Locator Cheatsheet for Playwright

import { test, expect } from '@playwright/test';

test('selectors overview', async ({ page }) => {
  await page.goto('https://example.com');

  // 1. Basic Selectors

  await page.locator('h1');                      // CSS selector
  await page.locator('//h1');                    // XPath selector
  await page.getByText('More information');      // Text-based search
  await page.getByRole('link');                  // Role-based (e.g., button, link)
  await page.getByLabel('Email');                // Form label
  await page.getByPlaceholder('Search');         // Placeholder in input
  await page.getByTestId('login-form');          // data-testid="login-form"

  // 2. Complex Selectors

  await page.locator('.card .title');            // nested CSS
  await page.locator('.btn >> nth=1');           // second matching element
  await page.locator('.parent').locator('.child'); // nested locator chaining
  await page.locator('li:has-text("Item 1")');   // text within element
  await page.locator('table').locator('td', { hasText: 'Data' }); // table cell with text

  // 3. Working with Tables (<td>)

  const rows = await page.locator('table tr').all();                    // all rows
  const firstColumn = await page.locator('table tr td:nth-child(1)').all(); // column cells

  const row = page.locator('table tr').filter({ hasText: 'Value' });   // row containing cell with text

  // 4. Element Actions

  const titleText = await page.locator('h1').textContent();            // read text
  await page.locator('.submit').click();                               // click
  await page.locator('#username').fill('alice');                       // type
  await page.locator('.loader').waitFor();                             // wait for element to appear
});