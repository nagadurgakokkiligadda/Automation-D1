const{test,expect}=require('@playwright/test')
test("Handling web table",async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    //1.printing table information 
   const table= await page.locator('#productTable')
//   console.log(await table.textContent())

//   //count the no.of columns in a table
  const cols=await table.locator('thead tr th')
  console.log(await cols.count())
expect(await cols.count()).toBe(4)

  //count the no.of rows in a table
  const rows=await table.locator('tbody tr')
  console.log(await rows.count())
  expect(await rows.count()).toBe(5)
await page.waitForTimeout(5000)
})

test.only("handling pagination",async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')

  const table=  await page.locator('//table[@id="productTable"]')

     const col=await table.locator('thead tr th')
     console.log(await col.count())
    expect(await col.count()).toBe(4)


     const row=await table.locator('tbody tr')
     console.log(await row.count())
     expect(await row.count()).toBe(5)

     //to count the no.of pages in a webpage for table   - pagination
     const totalpages= await page.locator('.pagination li a')
     console.log("no.of pages present in a table",await totalpages.count())
     expect(await totalpages.count()).toBe(4)


     //select the particular row based on product name
     const matchedrow=await row.filter({
        has:page.locator('td'),
        hasText:'$10.99'
     })
     await matchedrow.locator('input').check()
  await expect(matchedrow.locator('input')).toBeChecked()

 //to check multipleoptions
 await mulcheck(page,row,'Product 2')
 await mulcheck(page,row,'Product 1')
 await mulcheck(page,row,'Product 3')
 await mulcheck(page,row,'Product 5')



 //reading table data from all pages

 for(let p=0;p< await totalpages.count();p++){
    if(p>0){
        //to click on the particular page number
        await totalpages.nth(p).click()
    }
    for(let i=0;i< await row.count();i++){
        const rows=row.nth(i)    //capturing or extracting particular row from multiple rows
       const tds= rows.locator('td')   //capture all table data from that particular row
    
       for(let j=0;j< await tds.count()-1;j++){
           console.log(await tds.nth(j).textContent())
       }
    }
 }
    await page.waitForTimeout(3000)
  
     await page.waitForTimeout(5000)
})
//to check multipleoptions

async function mulcheck(page,row,name){
    const matchedrow=await row.filter({
        has:page.locator('td'),
        hasText:name
     })
     await matchedrow.locator('input').check()

}