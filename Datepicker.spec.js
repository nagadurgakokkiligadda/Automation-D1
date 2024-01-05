const{test,expect}=require('@playwright/test')
test("Handling Date Picker",async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    
// await page.fill('#datepicker','03/06/2001')


//datepicker

const year='2020'
const month='June'
const date='30'


await page.click('#datepicker')  // -- byclicking the field calender will be opening

//matching with expected date 

while(true){
    const currentyear=await page.locator('.ui-datepicker-year').textContent()

   const currentmonth=await page.locator('.ui-datepicker-month').textContent()

    if(currentyear==year && currentmonth==month){

    break;
}
// await page.locator("[title='Next']").click()

await page.locator("[title='Prev']").click()

}

const dates=await page.$$('//a[@class="ui-state-default"]')

//date selection using loop

// for(const dt of dates){
//     if(await dt.textContent()==date){
//         await dt.click()
//         break;
//     }
// }



//selecting date without using loops
await page.click(`//a[@class='ui-state-default'][text()='${date}']`)

await page.waitForTimeout(5000)

})