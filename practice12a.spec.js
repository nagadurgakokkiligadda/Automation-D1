const{test,expect}=require('@playwright/test')
test("selecting source and destinations ",async({page})=>{
    await page.goto('https://www.redbus.in/')
    await page.fill('#src','vijayawada')
    await page.waitForSelector('//li[contains(@class,"sc-iwsKbI")]/div/text[1]')
    const alloptions=await page.$$('//li[contains(@class,"sc-iwsKbI")]/div/text[1]')
    for(let option of alloptions){
        const value=await option.textContent()
        // console.log(value)  
        if(value=="Varadhi"){
            await option.click()
            break;
        }  
    }
    await page.fill('#dest','hyderabad')
    await page.waitForSelector('//ul[contains(@class,"sc-dnqmqq")]/li/div/text[1]')
    const destoptions=await page.$$('//ul[contains(@class,"sc-dnqmqq")]/li/div/text[1]')
    for(const dest of destoptions ){
        const value=await dest.textContent()
        // console.log(value)
            if(value=="Miyapur"){
                await dest.click()
                break;
            }   
    }

//await page.click(`//div[contains(@class,'labelCalenda')]/div/text[1]`);
await page.waitForTimeout(3000);
await page.locator("div[class*='sc-kAzzGY'] text[class='dateText']");

await page.click('#search_button')
await page.waitForTimeout(5000);

})