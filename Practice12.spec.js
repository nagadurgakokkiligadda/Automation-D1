const{test,expect}=require('@playwright/test')
test("Selecting values from autosuggested dropdown",async({page})=>{
    await page.goto('https://www.redbus.in/')
    await page.fill('//label[@class="sc-bZQynM efkIz"]','hyderabad')
    await page.waitForSelector('//li[contains(@class,"sc-iwsKbI")]/div/text[1]')
    const alloptions=await page.$$('//li[contains(@class,"sc-iwsKbI")]/div/text[1]')
    console.log("Cities in Hyderabad:",await alloptions.length)
    for(let option of alloptions){
        const value=await option.textContent()
        console.log(value)    
    }
})
test("selecting cities of vijayawada",async({page})=>{
    await page.goto('https://www.redbus.in/')
    await page.fill('#src','vijayawada')
    await page.waitForSelector('//div[contains(@class,"sc-gqjmRU giWxzf")]/div/ul/li/div/text[1]')
    const vijoptions=await page.$$('//div[contains(@class,"sc-gqjmRU giWxzf")]/div/ul/li/div/text[1]')
    console.log(vijoptions.length)
    for(let options of vijoptions){
        const value=await options.textContent()
        console.log(value)
    }
    await page.waitForTimeout(5000)
})
