const{test,expect}=require('@playwright/test')
const exp = require('constants')
test('Handling Dropdowns',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    // //ways to select the option from the dropdown
    await page.locator('#country').selectOption({label:'Brazil'})
    await page.locator('#country').selectOption({value:'brazil'})
    await page.locator('#country').selectOption({index:4})
   

    await page.selectOption("#country","India")
    
    // await page.goto('https://kmv-fund-flows.netlify.app/home')
    const options=await page.locator('#country option') //capture all elements

    await expect(options).toHaveCount(10)
     await page.waitForTimeout(5000)


     const options1=await page.$$('#country option')
     console.log("no.of options" ,options1.length)
    await expect(options1.length).toBe(10)


    //check the presence of the particular value in dropdown
   const content= await page.locator('#country').textContent()
   await expect(content.includes('india')).toBeFalsy()
   await expect(content.includes('India')).toBeTruthy()

   //check presence of value in the dropdown using looping
   const options3=await page.$$('#country option')
   let status=false;
   for(const option4 of options3){
    let value=await option4.textContent()
    // console.log(await option4.textContent())
    if(value.includes('France')){
        status=true;
        break;
    }
   }
   await expect(status).toBeTruthy()
})


