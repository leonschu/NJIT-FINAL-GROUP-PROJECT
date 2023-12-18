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

// Test #3 FAQ Dropdown Question #1 Test
test('FAQ Dropdown Question and Answer Test', async ({ page }) => {
  await page.goto('https://njit-final-group-project.vercel.app/faq');

  // Click on the FAQ question
  const questionSelector = 'button:has-text("Does this website work in zero gravity?")';
  await page.click(questionSelector);

  // Verify that the answer is visible after clicking
  const answerText = "Absolutely! We're proud to say our website remains 100% functional in zero gravity environments. Astronauts, rejoice!";
  const answerSelector = `div:has-text("${answerText}")`;
  const answer = page.locator(answerSelector);
  await expect(answer).toBeVisible();
});