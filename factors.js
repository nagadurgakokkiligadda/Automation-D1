function findfactors(n){
    const factors=[];
    for(let i=1;i<n;i++){
        if(n%i===0){
            factors.push(i)
        }
    }
    return factors; 
}
console.log(findfactors(39))



function filterNumbers(n){
    return n.filter(n=>n%2==0)
}
num=[12,4,65,777];
console.log(filterNumbers(num))




function prime(n){
    if(n===0 || n===1){
        return false;
    }
    for(let i=2;i<=n/2;i++){
        if(n%i===0){
            return false;
        }
     
    }
    return true;
}
console.log(prime(7))



function fib(n){
    if(n<=1){
        return 1;
    }else{
        return fib(n-1)+fib(n-2)
    }
}
console.log(fib(5))



