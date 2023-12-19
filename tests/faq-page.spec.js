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
test('FAQ Dropdown Answer Appears on Click', async ({ page }) => {
  await page.goto('https://njit-final-group-project.vercel.app/faq');

  // Selector for the FAQ question button
  const questionSelector = 'button:text("Does this website work in zero gravity?")';

  // Selector for the FAQ answer content
  const answerSelector = 'div.accordion-item--content:has-text("Absolutely! We\'re proud to say our website remains 100% functional in zero gravity environments. Astronauts, rejoice!")';

  // Click the question
  await page.click(questionSelector);

  // Check if the answer is now visible
  const answer = page.locator(answerSelector);
  await expect(answer).toBeVisible();
});

// Test #4 FAQ Dropdown Question #2 Test
test('FAQ Telepathic Interface Question Test', async ({ page }) => {
  await page.goto('https://njit-final-group-project.vercel.app/faq');

  // Selector for the FAQ question button
  const questionSelector = 'button:text("Can I access the website with my mind?")';

  // Selector for the FAQ answer content
  const answerSelector = 'div.accordion-item--content:has-text("We\'re still working on telepathic interfaces. For now, please use a standard computer or mobile device.")';

  // Click the question
  await page.click(questionSelector);

  // Check if the answer is now visible
  const answer = page.locator(answerSelector);
  await expect(answer).toBeVisible();
});

// Test #5 FAQ Dropdown Question #3 Test
test('FAQ Undiscovered Planet Question Test', async ({ page }) => {
  await page.goto('https://njit-final-group-project.vercel.app/faq');

  // Selector for the FAQ question button
  const questionSelector = 'button:text("Is it true that this website was once mistaken for an undiscovered planet?")';

  // Selector for the FAQ answer content
  const answerSelector = 'div.accordion-item--content:has-text("While we can\'t confirm nor deny this, we do like to think our website is out of this world!")';

  // Click the question
  await page.click(questionSelector);

  // Check if the answer is now visible
  const answer = page.locator(answerSelector);
  await expect(answer).toBeVisible();
});

// Test #6 FAQ Dropdown Question #4 Test
test('FAQ IQ Increase Question Test', async ({ page }) => {
  await page.goto('https://njit-final-group-project.vercel.app/faq');

  // Selector for the FAQ question button
  const questionSelector = 'button:text("Will using this site increase my IQ?")';

  // Selector for the FAQ answer content
  const answerSelector = 'div.accordion-item--content:has-text("We can\'t promise an IQ boost, but you\'ll definitely feel smarter!")';

  // Click the question
  await page.click(questionSelector);

  // Check if the answer is now visible
  const answer = page.locator(answerSelector);
  await expect(answer).toBeVisible();
});

// Test #7 FAQ Dropdown Question #5 Test
test('FAQ Meaning of Life Question Test', async ({ page }) => {
  await page.goto('https://njit-final-group-project.vercel.app/faq');

  // Selector for the FAQ question button
  const questionSelector = 'button:text("Can I find the meaning of life on your site?")';

  // Selector for the FAQ answer content
  const answerSelector = 'div.accordion-item--content:has-text("Our site is full of wonders, but for life\'s big questions, we recommend a good book or a long walk.")';

  // Click the question
  await page.click(questionSelector);

  // Check if the answer is now visible
  const answer = page.locator(answerSelector);
  await expect(answer).toBeVisible();
});

// Test #8 FAQ Dropdown Question #6 Test
test('FAQ Full Moon Safety Question Test', async ({ page }) => {
  await page.goto('https://njit-final-group-project.vercel.app/faq');

  // Selector for the FAQ question button
  const questionSelector = 'button:text("Is it safe to visit your website during a full moon?")';

  // Selector for the FAQ answer content
  const answerSelector = 'div.accordion-item--content:has-text("Yes, and it’s also werewolf-approved for night browsing.")';

  // Click the question
  await page.click(questionSelector);

  // Check if the answer is now visible
  const answer = page.locator(answerSelector);
  await expect(answer).toBeVisible();
});

// Test #9 FAQ Dropdown Question #7 Test
test('FAQ Time Traveler Discount Question Test', async ({ page }) => {
  await page.goto('https://njit-final-group-project.vercel.app/faq');

  // Selector for the FAQ question button
  const questionSelector = 'button:text("Do you offer a discount to time travelers?")';

  // Selector for the FAQ answer content
  const answerSelector = 'div.accordion-item--content:has-text("Yes, but only if you visited us yesterday.")';

  // Click the question
  await page.click(questionSelector);

  // Check if the answer is now visible
  const answer = page.locator(answerSelector);
  await expect(answer).toBeVisible();
});

// Test #10 FAQ Dropdown Question #8 Test
test('FAQ Pet Access Question Test', async ({ page }) => {
  await page.goto('https://njit-final-group-project.vercel.app/faq');

  // Selector for the FAQ question button
  const questionSelector = 'button:text("Can my pet access your website?")';

  // Selector for the FAQ answer content
  const answerSelector = 'div.accordion-item--content:has-text("While designed for humans, tech-savvy pets might find it intriguing!")';

  // Click the question
  await page.click(questionSelector);

  // Check if the answer is now visible
  const answer = page.locator(answerSelector);
  await expect(answer).toBeVisible();
});

// Test #11 FAQ Dropdown Question #9 Test
test('FAQ Website Baking Cookies Question Test', async ({ page }) => {
  await page.goto('https://njit-final-group-project.vercel.app/faq');

  // Selector for the FAQ question button
  const questionSelector = 'button:text("Is it true that this website can bake cookies?")';

  // Selector for the FAQ answer content
  const answerSelector = 'div.accordion-item--content:has-text("Only the digital kind, unfortunately. We\'re still perfecting our recipe for chocolate chip.")';

  // Click the question
  await page.click(questionSelector);

  // Check if the answer is now visible
  const answer = page.locator(answerSelector);
  await expect(answer).toBeVisible();
});

// Test #12 FAQ Dropdown Question #10 Test
test('FAQ GPS Navigation Question Test', async ({ page }) => {
  await page.goto('https://njit-final-group-project.vercel.app/faq');

  // Selector for the FAQ question button
  const questionSelector = 'button:text("If I get lost on your website, do you offer GPS navigation?")';

  // Selector for the FAQ answer content
  const answerSelector = 'div.accordion-item--content:has-text("Not yet, but we do provide a handy search bar to help you find your way.")';

  // Click the question
  await page.click(questionSelector);

  // Check if the answer is now visible
  const answer = page.locator(answerSelector);
  await expect(answer).toBeVisible();
});