const{test,expect}=require('@playwright/test')
test("Test1@sanity",async({page})=>{
    console.log("test1....")
})
test("Test2@sanity",async({page})=>{
    console.log("test2....")
})
test("Test3@reg",async({page})=>{
    console.log("test3....")
})
test("Test4@reg",async({page})=>{
    console.log("test4....")
})
test("Test5@sanity@reg",async({page})=>{
    console.log("test5....")
})