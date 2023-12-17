import { test, expect } from "@playwright/test";

const localhost = "http://localhost:3000/index";

test('simple equality check', async ({}) => {
  test.expect(1).toBe(1);
});

test('Check Page Title', async ({ page }) => {
    // Replace with your Next.js application's URL
    await page.goto('http://localhost:3000');
  
    // Wait for the title to be set to the expected value
    await page.waitForFunction(() => document.title === 'Elite Business Caffee - Home');
  
    // Retrieve the title and assert its value
    const title = await page.title();
    expect(title).toBe('Elite Business Caffee - Home');
  });