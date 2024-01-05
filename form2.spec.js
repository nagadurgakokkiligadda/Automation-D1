//dropdowns-single,multiple,hidden


const{test,expect}=require('@playwright/test')

test("Dropdowns",async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    await expect (!await page.isVisible('#country')).toBeFalsy()  //presence
    await expect (await page.isVisible('#country')).toBeTruthy()


 const isexpanded= await page.getAttribute('(//select[@id="country"])[1]','aria-expanded')
 expect(isexpanded).toBe(null)

 await page.click('#country');
    const expanded = await page.getAttribute('(//select[@id="country"])[1]', 'aria-expanded');
    console.log('Expanded:', expanded);
    await expect(expanded).toBe(null); 



    //selecting  single option 

    await page.selectOption('#country',"India")

const selectedValue=await page.$eval('#country',(select)=>select.value)
expect(selectedValue.toLowerCase()).toBe("india".toLowerCase());
 


await page.selectOption('#country',({label:'China'}))
await page.selectOption('#country',({value:'japan'}))
await page.selectOption('#country', 'France');

await page.selectOption('#country',({index:2}))

//find length
const len=await page.$$('#country option')
console.log("length is",len.length)
await expect(len).toHaveLength(10)
// await expect(len).toHaveCount(10)



//printing all elements in dropdown
const content=await page.locator('#country').textContent()
console.log(content)

expect(content.includes('russia')).toBeFalsy()




await page.waitForTimeout(5000)

})

