

import { test, expect } from '@playwright/test';

test('basic test', async ({ page }) => {
  await page.goto('');

  console.log(page.frames());

  const firstName = page.locator('[src="img/logos/Browsers.png"]');
  await expect(firstName).toBeVisible();
});




