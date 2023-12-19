import { test, expect } from "@playwright/test";

const index_page = "http://localhost:3000";


// Test #1 Check Page Title
test('Check Page Title', async ({ page }) => {
    // Replace with your Next.js application's URL
    await page.goto(index_page);
  
    // Wait for the title to be set to the expected value
    await page.waitForFunction(() => document.title === 'Elite Business Caffee - Home');
  
    // Retrieve the title and assert its value
    const title = await page.title();
    expect(title).toBe('Elite Business Caffee - Home');
  });

  // Test #2 Menu Navigation Test
  test('Homepage should load with the correct title', async ({ page }) => {
    // Navigate to the homepage
    await page.goto('https://njit-final-group-project.vercel.app');
 
 
    // Check if the title is correct
    await expect(page).toHaveTitle('Elite Business Caffee - Home');
 });
 