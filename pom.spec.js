const{test,expect}=require('@playwright/test')
const { Loginpage } = require('../pageobjectclass/Loginpage')
const{ Homepage }=require('../pageobjectclass/Homepage');
const { Cartpage } = require('../pageobjectclass/Cartpage');
test("POM",async({page})=>{
    //without using pom
    // await page.goto('https://www.demoblaze.com/index.html')
    // await page.click('#login2')
    // await page.fill('#loginusername','durga')
    // await page.fill('#loginpassword','d123')
    // await page.click('button[onclick="logIn()"]')




    //using POM

    const login=new Loginpage(page);
    await login.launchLoginPage()
    await login.login('d','0323')
    await page.waitForTimeout(3000)


//Homepage

const home = new Homepage(page);
await home.addTocart("Samsung galaxy s7");
await page.waitForTimeout(5000)
await home.goTocart();


//cartpage

const cart=new Cartpage(page);
await page.waitForTimeout(3000)
const status=await cart.checkProductInCart("Samsung galaxy s7")
expect(await status).toBe(true)
});