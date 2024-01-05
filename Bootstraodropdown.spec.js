const{test,expect}=require('@playwright/test')
test('Handling Bootstrap Dropdown',async({page})=>{
    await page.goto('https://jquery-az.com/boots/demo.php?ex=63.0_2')

    await page.locator('.multiselect').click()

    //capture all options
    // const options=await page.locator('ul>li label input')
    // await expect(options).toHaveCount(11)//-checking number of options present in dropdown
//array form

// const options=await page.$$('ul>li label input')
// await expect((options).length).toBe(11)


//selecting multiple options from dropdown

//1.printing values
// const options=await page.$$('ul>li label')
// for(let option of options){
//     const value=await option.textContent()
//     console.log('value is',value)
// }
// 2.selecting values
// const options=await page.$$('ul>li label')
// for(let option of options){
//     const value=await option.textContent()
//     if(value.includes('Java')||value.includes('C#')){
//         await option.click()
//     }
// }


// 3.selecting one particular value
// const options=await page.$$('ul>li label')
// for(let option of options){
//     const value=await option.textContent()
//     if(value.includes('Java')){
//         await option.click()
//     }
// }

//4.deselect options html and css


const options=await page.$$('ul>li label')
for(let option of options){
    const value=await option.textContent()
    if(value.includes('HTML')||value.includes('CSS')){
        await option.click()
    }
}
    await page.waitForTimeout(5000)
})