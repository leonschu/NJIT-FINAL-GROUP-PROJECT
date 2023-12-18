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

// Test #5 Button Hover Color Change
test('Button changes color on hover to rgb(255, 197, 110)', async ({ page }) => {
  await page.goto('https://njit-final-group-project.vercel.app');


  // Hover over the button
  await page.hover('.btn.btn--primary[href="/#testimonials"]');


  // Wait for some time after hover to allow color change
  await page.waitForTimeout(500); // 500 milliseconds delay


  // Check the color change
  const color = await page.evaluate(() => {
      return window.getComputedStyle(document.querySelector('.btn.btn--primary[href="/#testimonials"]')).backgroundColor;
  });

// Test #6
test('Clicking on "What Our Customers Have to Say" scrolls to Testimonials section', async ({ page }) => {
  await page.goto('https://njit-final-group-project.vercel.app');


  // Click on the "What Our Customers Have to Say" button
  await page.click('text=What our customers have to say');


  // Wait for the Testimonials section to be visible
  const testimonialsSection = page.locator('div.badge-group--message:has-text("Testimonials")');


  // Check if the Testimonials section is visible
  await expect(testimonialsSection).toBeVisible();
});
