const{test,expect}=require('@playwright/test')
test("Practicing Date Pickers",async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    //fill the date 
    // await page.fill('#datepicker','12/12/2043')

    //to open the calender
    await page.click('#datepicker')
    //selecting current date
//    await page.click('.ui-datepicker-today')   // const today=
    // console.log("today date is",await today)


    //selecting particular date

    const year='2023'
    const month='Dec'
    const date='30'


    while(true){
        const currentyear=await page.locator('.ui-datepicker-year').textContent()

    const currentmonth=await page.locator('.ui-datepicker-month').textContent()

        if(currentyear==year && currentmonth==month){

        break;
        }
        
    }
    await page.click(`//a[@class='ui-state-default'][text()='${date}']`)
  
    await page.waitForTimeout(5000)
})