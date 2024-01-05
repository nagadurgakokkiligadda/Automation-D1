import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByPlaceholder('Username').click();
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'My Info' }).click();
  await page.getByText('Employee Full Name').click();
  await page.getByPlaceholder('First Name').click();
  await page.getByPlaceholder('First Name').fill('dddd');
  await page.getByText('American').click();
  await page.getByRole('link', { name: 'Qualifications' }).click();
  await page.getByRole('link', { name: 'Dashboard' }).click();
  await page.getByRole('link', { name: 'Admin' }).click();
  await page.locator('div:nth-child(41) > .oxd-table-row > div:nth-child(3) > div').click();
  await page.getByRole('row', { name: ' Sania.Shaheen ESS Sania Shaheen Enabled  ' }).locator('span i').click();
  await page.locator('span').filter({ hasText: 'sachin Narale' }).locator('i').click();
  await page.getByRole('menuitem', { name: 'Logout' }).click();
});