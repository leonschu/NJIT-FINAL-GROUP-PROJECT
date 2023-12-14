// @ts-check
const { test, expect } = require('@playwright/test');


// Playwright Test #1
test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

// Playwright Test #2
test('get started link', async ({ page }) => {
    await page.goto('https://playwright.dev/');
  
    // Click the get started link.
    await page.getByRole('link', { name: 'Get started' }).click();
  
    // Expects page to have a heading with the name of Installation.
    await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  });
  

  
  // Test #1: Check Page Title
test('Check Page Title', async ({ page }) => {
  const title = await page.title();
  expect(title).toBe(expectedTitle);
});
