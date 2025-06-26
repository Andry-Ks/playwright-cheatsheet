import { test, expect } from '@playwright/test';

test('intercept and mock API response', async ({ page }) => {
  await page.route('**/api/user', route =>
    route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({ name: 'Mocked User', id: 123 }),
    })
  );

  await page.goto('https://example.com/profile');
  const name = await page.locator('#username').textContent();

  expect(name).toContain('Mocked User');
});