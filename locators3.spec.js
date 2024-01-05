const { test, expect } = require('@playwright/test');

test('Masters', async ({ page }) => {
    await page.goto('https://p360-masters.netlify.app/masters');
    await page.click('div[title="Area"]');
    await page.waitForTimeout(60000);
});
