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
 
 // Test #3 Faq Navigation Test
 test('Navigation to FAQ page works correctly', async ({ page }) => {
  // Navigate to the homepage
  await page.goto('https://njit-final-group-project.vercel.app');
 
 
  // Click on the Menu link
  await page.click("a[href='/faq']"); // Using the href attribute as the selector
 
 
  // Check if the URL is correct
  await expect(page).toHaveURL('https://njit-final-group-project.vercel.app/faq');
 
 
  // Add any additional assertions if needed, like checking for a specific element on the Menu page
 });

 // Test #4 Logo Navigation Test
 test('Clicking the logo returns to the homepage', async ({ page }) => {
  // Go to the Menu page
  await page.goto('https://njit-final-group-project.vercel.app/menu');


  // Click on the logo
  await page.click('img[alt="logo"]'); // or '.h-6.w-auto' if using the class


  // Check if the URL is the homepage URL
  await expect(page).toHaveURL('https://njit-final-group-project.vercel.app/');
});

// Test #5 Testimonial Test
test('Clicking on "What Our Customers Have to Say" scrolls to Testimonials section', async ({ page }) => {
  await page.goto('https://njit-final-group-project.vercel.app');


  // Click on the "What Our Customers Have to Say" button
  await page.click('text=What our customers have to say');


  // Wait for the Testimonials section to be visible
  const testimonialsSection = page.locator('div.badge-group--message:has-text("Testimonials")');


  // Check if the Testimonials section is visible
  await expect(testimonialsSection).toBeVisible();
});

// Test #6 Mailchimp Test
test('Mailchimp subscription test from business site', async ({ page }) => {
  // Navigate to your business website
  await page.goto('https://njit-final-group-project.vercel.app');


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

// Test #7 Check Header Visibility
test('Header is visible on all pages', async ({ page }) => {
  // List of URLs to check
  const urls = [
      'https://njit-final-group-project.vercel.app/',
      'https://njit-final-group-project.vercel.app/menu',
      'https://njit-final-group-project.vercel.app/look_inside',
      'https://njit-final-group-project.vercel.app/faq'
  ];
  for (const url of urls) {
      await page.goto(url);
      const header = page.locator('#header'); // Using the id selector for the header
      await expect(header).toBeVisible();
  }
});

// Test #8 Hover Page Color Test
test('Button Changes Color on Hover', async ({ page }) => {
  await page.goto('https://njit-final-group-project.vercel.app');


  // Hover over the button
  await page.hover('.btn.btn--primary[href="/#testimonials"]');


  // Wait for some time after hover to allow color change
  await page.waitForTimeout(500); // 500 milliseconds delay

  // Check the Color Change
  const color = await page.evaluate(() => {
    return window.getComputedStyle(document.querySelector('.btn.btn--primary[href="/#testimonials"]')).backgroundColor;
});

   // Assert the color change 
   expect(color).toBe('rgb(184, 176, 148)');
});

// Test #9 Check "Our Purpose" logo
test('Check if "Our Purpose" section loads', async ({ page }) => {
  await page.goto('https://njit-final-group-project.vercel.app');

  // Optionally, wait for a specific time if there's an animation
  await page.waitForTimeout(1000); // Adjust time based on the animation duration

  // Check for the visibility of the "Our Purpose" section
  const ourPurpose = page.locator('text=Our Purpose');
  await expect(ourPurpose).toBeVisible();
});

// Test #10 Mobile Test View
test('Process Banner 1 image is correctly sized in mobile view', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('https://njit-final-group-project.vercel.app');

    // Selecting the image by its alt attribute
    const image = page.locator('img[alt="Process Banner 1"]');

    // Optionally, check for specific dimensions or aspect ratio
    const size = await image.evaluate(node => ({ width: node.offsetWidth, height: node.offsetHeight }));
    // Assert specific size or aspect ratio as per your requirements
    // Example: expect(size.width).toBeLessThanOrEqual(375);
});