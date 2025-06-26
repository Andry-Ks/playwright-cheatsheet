//Keyboard and mouse interactions in Playwright

import { test } from '@playwright/test';

test('keyboard and mouse usage', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc');

  const input = page.locator('.new-todo');

  // ==== KEYBOARD ====

  await input.focus();
  await page.keyboard.type('Learn Playwright');
  await page.keyboard.press('Enter');

  // Holding Shift while typing
  await page.keyboard.down('Shift');
  await page.keyboard.type('shifted text');
  await page.keyboard.up('Shift');
  await page.keyboard.press('Enter');

  // Arrow keys, modifiers, etc.
  await page.keyboard.press('ArrowUp');
  await page.keyboard.press('Control+A'); // select all (Ctrl+A)

  // ==== MOUSE ====

  const todoItem = page.locator('.todo-list li').first();
  const box = await todoItem.boundingBox();

  if (box) {
    // Move and click manually by coordinates
    await page.mouse.move(box.x + 5, box.y + 5);
    await page.mouse.click(box.x + 5, box.y + 5);

    // Double-click
    await page.mouse.dblclick(box.x + 5, box.y + 5);
  }

  // Scroll by wheel
  await page.mouse.wheel(0, 300);
});