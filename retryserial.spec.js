import { test, expect } from '@playwright/test';

test.describe.configure({ mode: 'serial' });

test.beforeAll(async ({}) => {
  // Code to run before any test in this describe block
});

test('first good', async ({ page }) => {
  // Your test code for the first test
  await page.goto('https://example.com');
  await expect(page.title()).resolves.toMatch('Example Domain');
});

test('second flaky', async ({ page }) => {
  // Your test code for the second test
  await page.goto('https://example.com');
  // This test may fail occasionally, hence "flaky"
  await expect(page.title()).resolves.toMatch('Incorrect Title');
});

test('third good', async ({ page }) => {
  // Your test code for the third test
  await page.goto('https://example.com');
  await expect(page.title()).resolves.toMatch('Example Domain');
});

test.afterAll(async ({}) => {
  // Code to run after all tests in this describe block
});
