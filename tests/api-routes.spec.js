import { test, expect } from "@playwright/test";

const localhost = "http://localhost:3000";

test('simple equality check', async ({}) => {
  test.expect(1).toBe(1);
});