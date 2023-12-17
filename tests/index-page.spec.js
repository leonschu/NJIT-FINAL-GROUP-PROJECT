import { test, expect } from "@playwright/test";

const index_page = "http://localhost:3000/index";

test('Check Page Title', async ({ page }) => {
    // Replace with your Next.js application's URL
    await page.goto(index_page);
  
    // Wait for the title to be set to the expected value
    await page.waitForFunction(() => document.title === 'Elite Business Caffee - Home');
  
    // Retrieve the title and assert its value
    const title = await page.title();
    expect(title).toBe('Elite Business Caffee - Home');
  });