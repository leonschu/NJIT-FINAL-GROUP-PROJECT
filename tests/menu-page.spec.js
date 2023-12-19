// Test #1
import { test, expect } from "@playwright/test";

const index_page = "http://localhost:3000/menu";

test('Check Page Title', async ({ page }) => {
    // Replace with your Next.js application's URL
    await page.goto(index_page);
  
    // Wait for the title to be set to the expected value
    await page.waitForFunction(() => document.title === 'Elite Business Caffee - Menu');
  
    // Retrieve the title and assert its value
    const title = await page.title();
    expect(title).toBe('Elite Business Caffee - Menu');
  });

  // Test #2
test('Navigation to FAQ page works correctly', async ({ page }) => {
  // Navigate to the homepage
  await page.goto('https://njit-final-group-project.vercel.app/menu');
 
 
  // Click on the Menu link
  await page.click("a[href='/faq']"); // Using the href attribute as the selector
 
 
  // Check if the URL is correct
  await expect(page).toHaveURL('https://njit-final-group-project.vercel.app/faq');
});

// Test #3
test('Clicking the logo returns to the homepage', async ({ page }) => {
  // Go to the Menu page
  await page.goto('https://njit-final-group-project.vercel.app/menu');


  // Click on the logo
  await page.click('img[alt="logo"]'); // or '.h-6.w-auto' if using the class


  // Check if the URL is the homepage URL
  await expect(page).toHaveURL('https://njit-final-group-project.vercel.app/');
});

// Test #4
test('Mailchimp subscription test from business site', async ({ page }) => {
  // Navigate to your business website
  await page.goto('https://njit-final-group-project.vercel.app/menu');


  // Click the 'Join Today' button
  await page.click('a.btn--secondary[href="http://eepurl.com/iFjGxI"]');


  // Wait for the new page to load (Mailchimp subscription form)
  await page.waitForLoadState('networkidle');


  // Fill out the subscription form on Mailchimp page
// Fill out the subscription form on Mailchimp page with fake data
await page.fill('input[name="MERGE0"]', 'test@example.com'); // Corrected selector for the Email field
await page.fill('input[name="MERGE1"]', 'TestFirstName'); // First Name
await page.fill('input[name="MERGE2"]', 'TestLastName'); // Last Name




  // Click the 'Subscribe' button on Mailchimp page
  await page.click('input.formEmailButton[name="submit"]');


  // Check for confirmation - adjust based on Mailchimp's confirmation behavior
  // Example: await expect(page).toHaveURL('https://app.us12.list-manage.com/subscribe/post');
});
