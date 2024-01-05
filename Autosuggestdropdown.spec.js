const{test,expect}=require('@playwright/test')
test('Handling Auto Suggested Dropdowns',async({page})=>{
    await page.goto('https://www.redbus.in/')
    await page.locator('#src').fill('vijayawada')
    //capture all options from auto suggested dropdown
//     await page.waitForSelector('//li[contains(@class,"sc-iwsKbI")]/div/text[1]')
//    const fromcityoptions= await page.$$('//li[contains(@class,"sc-iwsKbI")]/div/text[1]')
//    for(let option of fromcityoptions){
//     const value=await option.textContent()
//     console.log("cities",value)  //--print all auto suggestions
//    }



//to check whether the particular value is present or not
await page.waitForSelector('//li[contains(@class,"sc-iwsKbI")]/div/text[1]')
   const fromcityoptions= await page.$$('//li[contains(@class,"sc-iwsKbI")]/div/text[1]')
   for(let option of fromcityoptions){
    const value=await option.textContent()
     if(value.includes('aut')){
        await option.click()
        break;
     }
   }


    // await page.goto('https://p360-masters.netlify.app/masters/product_type');
    // await page.goto('https://p360-masters.netlify.app/');

// await page.goto('http://172.16.1.209:3000')


    // Validate the URL
    // await expect(page).toHaveURL('http://localhost:3000/masters/product_type');
    // await page.locator('//*[@id="root"]/div/div/div[2]/div/div/div/div/div/div[2]/table/tbody/tr[2]/td[6]/div/div/span[1]').fill('new')
    // Validate the title
    // const title = await page.title();
    // expect(title).toMatch(/P360 Masters/i);

// await page.goto('https://p360-masters.netlify.app/masters')
// await expect(page).toHaveTitle(/p360-masters/)

    await page.waitForTimeout(5000)


})
