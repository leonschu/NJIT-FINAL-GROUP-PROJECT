// Test #1
import { test, expect } from "@playwright/test";

const index_page = "http://localhost:3000/look_inside";

test('Check Page Title', async ({ page }) => {
    // Replace with your Next.js application's URL
    await page.goto(index_page);
  
    // Wait for the title to be set to the expected value
    await page.waitForFunction(() => document.title === 'Elite Business Caffee - Inside');
  
    // Retrieve the title and assert its value
    const title = await page.title();
    expect(title).toBe('Elite Business Caffee - Inside');
  });

  // Test #2
  test('Mobile Navbar Dropdown Visibility Test on Look Inside Page', async ({ page }) => {
    // Set viewport to mobile dimensions
    await page.setViewportSize({ width: 375, height: 667 });

    // Navigate to the Look Inside page
    await page.goto('https://njit-final-group-project.vercel.app/look_inside');

    // Click the navbar button to expand the menu
    await page.click('button[data-collapse-toggle="navbar-default"]');

    // Verify that the entire navigation menu is now visible
    const navMenu = page.locator('ul.header-nav--menu');
    await expect(navMenu).toBeVisible();
});

// Test #3
test('Check if Process Banner 1 image loads', async ({ page }) => {
  await page.goto('https://njit-final-group-project.vercel.app/look_inside'); // Adjust the URL to the specific page

  // Select the image by its alt attribute
  const image = page.locator('img[alt="Process Banner 1"]');

  // Check if the image is visible
  await expect(image).toBeVisible();

  // Optionally, check if the image is fully loaded
  const isLoaded = await image.evaluate(node => node.complete && node.naturalHeight !== 0);
  expect(isLoaded).toBeTruthy();
});

// Test #4
test('Navigation to FAQ page works correctly', async ({ page }) => {
  // Navigate to the homepage
  await page.goto('https://njit-final-group-project.vercel.app/look_inside');
 
 
  // Click on the Menu link
  await page.click("a[href='/faq']"); // Using the href attribute as the selector
 
 
  // Check if the URL is correct
  await expect(page).toHaveURL('https://njit-final-group-project.vercel.app/faq');
});

// Test #5
test('Clicking the logo returns to the homepage', async ({ page }) => {
  // Go to the Menu page
  await page.goto('https://njit-final-group-project.vercel.app/look_inside');


  // Click on the logo
  await page.click('img[alt="logo"]'); // or '.h-6.w-auto' if using the class


  // Check if the URL is the homepage URL
  await expect(page).toHaveURL('https://njit-final-group-project.vercel.app/');
});

// Test #6
test('Mailchimp subscription test from business site', async ({ page }) => {
  // Navigate to your business website
  await page.goto('https://njit-final-group-project.vercel.app/look_inside');


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