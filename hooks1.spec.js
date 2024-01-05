const{test,expect}=require('@playwright/test')
let page;
test.beforeEach(async({browser})=>{
//creating our own page fixture
 page=await browser.newPage();
await page.goto('https://www.demoblaze.com/index.html')
await page.locator('#login2').click()
await page.locator('#loginusername').fill('durga')
await page.locator('#loginpassword').fill('durga3')
await page.locator('//button[normalize-space()="Log in"]').click()

});

test.afterEach(async()=>{
await page.locator('#logout2').click()
});

test("home page test",async()=>{
const products=await page.$$('.hrefch')
expect(products).toHaveLength(9)
});