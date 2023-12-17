import { test, expect } from "@playwright/test";

const localhost = "http://localhost:3000/index";

test('simple equality check', async ({}) => {
  test.expect(1).toBe(1);
});

test('Check Page Title', async ({ page }) => {
    const title = await page.title();
    expect(title).toBe('Elite Business Caffee - Home');
  });