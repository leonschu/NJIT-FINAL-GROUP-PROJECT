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