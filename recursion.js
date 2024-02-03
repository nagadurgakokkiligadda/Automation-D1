function fact(n){
    if(n==0||n==1){
        return 1
    }
    else{
        return n*fact(n-1)
    }
}
console.log(fact(6))


function fib(n){
    if(n==0){
        return 0
    }
    else if(n==1){
        return 1
    }
    else{
        return fib(n-1)+fib(n-2)
    }
}
console.log(fib(4))



function sum(n){
    if(n<10){
        return n;
    }else{
        last=n%10;
        // rem=n/10;
        rem=Math.floor(n/10);
        return last+sum(rem);
    }
}
console.log(sum(1234))


function powern(base, exp) {
    if (exp === 0) {
        return 1;
    } else {
        // Recursive call to calculate the result
        return base * powern(base, exp - 1);
    }
}

console.log(powern(2, 5)); // Output: 32





