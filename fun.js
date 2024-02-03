function reverse(n){
    if(n==0){
        return 0;
    }
    let rev=0;
    while(n>0){
        num=n%10;
        rev=rev * 10 +num;
        n=Math.floor(n/10);
    }
    return rev;
}
console.log(reverse(123))


function combinations(str){
    result=[]
    for(let i=0;i<str.length;i++){
        for(let j=i+1;j<=str.length;j++){
            result.push(str.slice(i,j));
        }
    }
    return result;
}
console.log(combinations('durga'))
console.log(combinations('dog'))



function alphabeticalorder(str){
    return str.split('').sort().join('')
}
console.log(alphabeticalorder('draygdkuytrewkjhgfdswertyuwyga'))




function capitalizeWords(str) {
    return str.replace(/\b\w/g, char => char.toUpperCase());
}
console.log(capitalizeWords('naga durga kokkiligadda'))



function vowels(str){
    const vowelmatches=str.match(/[aeiou]/gi)
    return vowelmatches? vowelmatches.length:0;
}
console.log(vowels('durga'))



function prime(n){
    if(n===0){
        return false;
    }
    else if(n===1){
        return false;
    }else{
       for(i=2;i<n;i++){
        if(n%i===0){
            return false;
        }
        else{
            return true;
        }
       }
    }
}
console.log(prime(10))


function getType(value) {
    var type = typeof value;
    
    if (type === 'object') {
      if (value === null) {
        return 'null';
      } else if (Array.isArray(value)) {
        return 'array';
      }
    }
  
    return type;
  }
  console.log(getType(42));          
  console.log(getType("Hello, World!"));
  console.log(getType(true));           
  console.log(getType(undefined));      
  console.log(getType({}));             
  console.log(getType(null));           
  console.log(getType([1, 2, 3]));       
  console.log(getType(function(){}));  
  

function identity(n){
    for(i=0;i<n;i++){
        for(j=0;j<n;j++){
            if(i==j){
                console.log('1')
            }
            else{
                console.log('0')
            }
        }
    }
}
console.log(identity(2))

let b=20;
console.log(b+10)