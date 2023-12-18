import { test, expect } from "@playwright/test";

const index_page = "http://localhost:3000/faq";

test('Check Page Title', async ({ page }) => {
    // Replace with your Next.js application's URL
    await page.goto(index_page);
  
    // Wait for the title to be set to the expected value
    await page.waitForFunction(() => document.title === 'Elite Business Caffee - FAQ');
  
    // Retrieve the title and assert its value
    const title = await page.title();
    expect(title).toBe('Elite Business Caffee - FAQ');
  });

    // Test #2 Menu Navigation Test
 test('Navigation to Menu page works correctly', async ({ page }) => {
  // Navigate to the homepage
  await page.goto('https://njit-final-group-project.vercel.app/faq');
 
 
  // Click on the Menu link
  await page.click("a[href='/menu']"); // Using the href attribute as the selector
 
 
  // Check if the URL is correct
  await expect(page).toHaveURL('https://njit-final-group-project.vercel.app/menu');
 
 
  // Add any additional assertions if needed, like checking for a specific element on the Menu page
 });