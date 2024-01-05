const{test,expect}=require('@playwright/test')
test("Handling Table Pagination",async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')

const table= await page.locator('#productTable')

//return total no.of columns and  rows
 
const cols=await table.locator('thead tr th')
console.log("no of columns in product table",await cols.count())

const rows=await table.locator('tbody tr')
console.log("no of rows in product table ",await rows.count() )


expect(await rows.count()).toBe(5)
expect(await cols.count()).toBe(4)
 


//based on the name of the product i want to select the checkbox

const matchedrow=rows.filter({
    has:page.locator('td'),
    hasText:'Product 4'
})
await matchedrow.locator('input').check()

//multiple products 
await multipleoptions(rows,page,'Product 1')
await multipleoptions(rows,page,'Product 5')


//printing or reading data from the table  using loop   from first page nothing but static page
// for(let i=0;i< await rows.count();i++){
//     const row=rows.nth(i)    //capturing or extracting particular row from multiple rows
//    const tds= row.locator('td')   //capture all table data from that particular row

//    for(let j=0;j< await tds.count()-1;j++){
//        console.log(await tds.nth(j).textContent())
//    }
// }


// handling pagination -- to read data from all the pages


const pages=await page.locator('.pagination li a')
console.log("no of pages",await pages.count())


//repetition of pages
for(let p=0;p< await pages.count();p++){
    if(p>0){
        //to click on the particular page number
        await pages.nth(p).click()
    }
    for(let i=0;i< await rows.count();i++){
        const row=rows.nth(i)    //capturing or extracting particular row from multiple rows
       const tds= row.locator('td')   //capture all table data from that particular row
    
       for(let j=0;j< await tds.count()-1;j++){
           console.log(await tds.nth(j).textContent())
       }
    }

    await page.waitForTimeout(3000)

}

await page.waitForTimeout(5000)

})

async function multipleoptions(rows,page,name){
    const matchedrow=rows.filter({
        has:page.locator('td'),
        hasText:name
    })
    await matchedrow.locator('input').check()
}