//Create a script to fill out and submit a form on a webpage. 
//Include handling various form elements such as text fields, checkboxes, radio buttons, and dropdowns.


const{test,expect}=require('@playwright/test')
test("Verifying text fields",async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/login')
    await page.fill('//input[@id="username"]','tomsmith')
    await page.fill('//input[@id="password"]','SuperSecretPassword!')
    const username=await page.$eval('//input[@id="username"]',(input)=>input.value)
    const password=await page.$eval('//input[@id="password"]',(input)=>input.value)
    expect(username).toBe("tomsmith");
    expect(password).toBe("SuperSecretPassword!")
    expect(password).not.toBe('123')
    await page.click('//button[@type="submit"]')  
    const afterlogin=await page.url()
    expect(afterlogin).toBe('https://the-internet.herokuapp.com/secure')
    // await page.waitForTimeout(5000)
    await page.click('//a[@class="button secondary radius"]')
    const buttonsCount = await page.$$eval('button', buttons => buttons.length);
  console.log("buttons", buttonsCount);

    
    await page.waitForTimeout(2000)
})
test("verifying checkboxes",async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
  await page.check('//input[@id="sunday"]')
  const ischeckbox=await page.$eval('//input[@id="sunday"]',checkbox=>checkbox.checked)
  expect(ischeckbox).toBe(true)
    const sunday= await page.isChecked(('//input[@id="sunday"]'))
    expect(sunday).toBe(true)
    // expect(sunday).toBe(false)
    expect(sunday).not.toBe(false)
await page.check('//input[@id="monday"]')
    const monday=await page.isChecked('//input[@id="monday"]')
    expect(monday).toBe(true)
    const totalcheckboxes=await page.$$eval('input[type="checkbox"]:checked',checkbox=>checkbox.length)
    console.log("checkboxes to be checked",totalcheckboxes)
    await page.uncheck('//input[@id="sunday"]')
    // expect(sunday).toBe(false)
    expect(sunday).toBe(true)
    const totalcheckboxes1=await page.$$eval('input[type="checkbox"]:checked',checkbox=>checkbox.length)
    console.log("checkboxes to be checked",totalcheckboxes1)

    const headerText = await page.$eval('h2', header => header.textContent);
  expect(headerText).toContain('Web Table'); 
expect(totalcheckboxes).toBe(2)
     
})
