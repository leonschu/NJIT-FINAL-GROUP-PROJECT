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

  // Test #2 Check Nav Bar in Mobile View
  test('Mobile Navbar Dropdown Test on Look Inside Page', async ({ page }) => {
    // Set viewport to mobile dimensions
    await page.setViewportSize({ width: 375, height: 667 });

    // Navigate to the Look Inside page
    await page.goto('https://njit-final-group-project.vercel.app/look_inside');

    // Click the navbar button to expand the menu
    await page.click('button[data-collapse-toggle="navbar-default"]');

    // Verify that the navigation menu items are now visible
    const navMenuItems = page.locator('ul.header-nav--menu li.header-nav--menu-item');
    await expect(navMenuItems).toBeVisible();

    // Optionally, check for specific menu items
    // Example: await expect(navMenuItems).toContainText('Look inside');
});