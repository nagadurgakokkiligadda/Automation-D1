const {test,expect}=require('@playwright/test')

test('logout',async ({page})=>{

    await page.goto('https://localhost:3000/masters ');

    // await page.waitForLoadState('load');

    const pageTitle= await page.title();
    console.log('title is',pageTitle);
    //verifying title is correct or not
    await expect(page).toHaveTitle(/masters/i);

    const pageURL= page.url();
    console.log('pageURL is',pageURL);
    await expect(page).toHaveURL('https://localhost:3000/masters');
     await page.close();
})
// const {test,expect}=require('@playwright/test')

test('geeks',async ({page})=>{

    await page.goto('https://www.geeksforgeeks.org/');

    // await page.waitForLoadState('load');

    const pageTitle= await page.title();
    console.log('title is',pageTitle);
    //verifying title is correct or not
    await expect(page).toHaveTitle(/GeeksforGeeks | A computer science portal for geeks/i);

    const pageURL= page.url();
    console.log('pageURL is',pageURL);
    await expect(page).toHaveURL('https://www.geeksforgeeks.org/');
     await page.close();
})