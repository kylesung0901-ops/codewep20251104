import { test, expect } from '@playwright/test';

test('homepage loads correctly', async ({ page }) => {
  await page.goto('/');
  
  // Wait for the page to load
  await expect(page).toHaveTitle(/My v0 Project/i);
  
  // Check if the page is visible
  await expect(page.locator('body')).toBeVisible();
});

