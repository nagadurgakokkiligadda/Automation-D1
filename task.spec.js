// checkField.spec.js

const { test, expect } = require('@playwright/test');

test('Check if the field is an input field', async ({ page }) => {
  // Navigate to the desired webpage
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  // Selectors for the field you want to check
  const fieldSelector = 'input[placeholder="Username"]'; // Change this selector accordingly

  // Wait for the field to be present
  await page.waitForSelector(fieldSelector, { state: 'attached' });

  // Debugging: Log HTML content of the page
  console.log(await page.content());

  // Check if the field is an input field
  const isInputField = await page.evaluate((selector) => {
    const field = document.querySelector(selector);
    console.log(field); // Log the field to the console for debugging
    return field.tagName.toLowerCase() === 'input';
  }, fieldSelector);

  // Expectation: The field should be an input field
  expect(isInputField).toBe(true);
});
