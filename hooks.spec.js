const{test,expect}=require('@playwright/test')
test("Homepage test",async({page})=>{
    await page.goto('https://www.demoblaze.com/index.html')

//1.login

await page.locator('#login2').click()
await page.locator('#loginusername').fill('durga')
await page.locator('#loginpassword').fill('durga3')
await page.locator('//button[normalize-space()="Log in"]').click()




//2.testing the homepage   -- finding how many products are present in homepage


const totalProducts = await page.waitForSelector('.hrefch', { state: 'visible' });
    const productsCount = await page.$$eval('.hrefch', elements => elements.length);
    
    // Assertion
    await expect(productsCount).toBe(9);
// console.log("total number of products ",await totalproducts)


//3.logout
const logoutButton = await page.waitForSelector('#logout2', { state: 'visible',timeout:10000 });
    // Click the logout button
    await logoutButton.click();
    // Wait for navigation after logout
    await page.waitForNavigation();
})
