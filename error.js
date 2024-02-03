function div(n1,n2){
    try{
        if(n2===0){
            throw new Error('can not be a zero')
        }
     const res=n1/n2;
    return res;
    }
    catch(error){
        console.log(error.message)
        return null
    }
    
}
console.log(div(2,3))
console.log(div(2,0))



