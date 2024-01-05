const{test,expect}=require('@playwright/test')
test("Radio buttons",async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
//    console.log([] == [])

//bydefault
// await expect(await page.isChecked('//input[@id="male"]')).toBeTruthy(); -failed
await expect(await page.isChecked('//input[@id="female"]')).toBeFalsy();

await expect(await page.isVisible(('//input[@id="male"]'))).toBeTruthy()
await expect(await page.isVisible(('//input[@id="female"]'))).not.toBeFalsy()
await expect(await page.isEditable(('//input[@id="male"]'))).toBeTruthy()
// await expect(await page.isEditable(('//input[@id="male"]'))).toBeFalsy(false)
await expect(await page.isEditable(('//input[@id="male"]'))).toBeTruthy()
await expect(await page.isDisabled(('//input[@id="male"]'))).not.toBeTruthy()
await expect(await page.isHidden('//input[@id="female"]')).toBeFalsy()
await page.check('//input[@id="male"]')
await expect(await page.isChecked('//input[@id="male"]')).toBeTruthy(); 
await expect(await page.isChecked('//input[@id="female"]')).toBeFalsy()
await page.check('//input[@id="female"]')
// await expect(!await page.isChecked('//input[@id="female"]')).toBeTruthy()
 await expect(await page.isChecked('//input[@id="female"]')).toBeTruthy()
await page.waitForTimeout(5000)
})