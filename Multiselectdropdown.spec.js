const{test,expect}=require('@playwright/test')
test('Handling multi select dropdown',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    //select multiple options from multi select dropdown

//     await page.selectOption('#colors',['Red','Yellow','Green'])


//     //assertions-check number of options in  dropdown

    const option=await page.locator('#colors option')
    await expect(option).toHaveCount(5)


//     //no.of options in dropdown using array
    
//     const options1=await page.$$('#colors option')
//     console.log("no.of options" ,options1.length)
//    await expect(options1.length).toBe(5)
    
const options1=await page.$$('#colors')
const content= await page.locator('#colors').textContent()
await expect(content.includes('india')).toBeFalsy()
await expect(content.includes('White')).toBeTruthy()
// await expect(content.includes('Orange')).toBeTruthy()

    await page.waitForTimeout(5000)  //-- pausing code
})