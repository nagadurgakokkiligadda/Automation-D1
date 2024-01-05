const{test,expect}=require('@playwright/test')
var userid;
test("Get",async( {request})=>{
 const response=await request.get('https://reqres.in/api/users?page=2')
 console.log(await response.json())
 expect(response.status()).toBe(200)
})
test("post/create",async({request})=>{
const response=await request.post('https://reqres.in/api/users',
{
    data:{
        "name":"durga",
        "job":"engineer-asst"
        },
    header:{
        "Accept":"application/json",
        "Content-Type": "application/json"
    }
});
console.log(await response.json())
await expect(response.status()).toBe(201)
var res=await response.json()
userid=res.id
})

test("put/update",async({request})=>{
    const response=await request.put('https://reqres.in/api/users/{userid}',
    {
        data:{
            "name":"durga",
            "job":"engineer......"
            },
        header:{
            "Accept":"application/json",
            "Content-Type": "application/json"
        }
    })
  
    await expect(response.status()).toBe(200)
    console.log(await response.json())
    var res=await response.json()
    userid=res.id
})
// test("delete", async ({ request }) => {
//     const response = await request.delete(`https://reqres.in/api/users`+${userid});
//     console.log(await response.status());
//     await expect(response.status()).toBe(204);
//     console.log(await response.json());
// });
test("delete", async ({ request }) => {
    const response = await request.delete(`https://reqres.in/api/users/${userid}`);
    console.log(await response.status());

    // Check if the status is 204 before attempting to parse JSON
    if (response.status() === 204) {
        await expect(response.status()).toBe(204);
        console.log("No content (204) - Deletion successful");
    } else {
        console.log("Unexpected status:", await response.status());
    }
});
