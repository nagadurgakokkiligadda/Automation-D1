const str="durga";
console.log(str.split('').reverse().join(''))


function revstring(str){
    var rev="";
    for(var i=str.length-1;i>=0;i--){
        rev+=str[i];
    }
    return rev;
}
console.log(revstring('durga'))


var num=1234;
console.log(parseInt(num.toString().split('').reverse().join('')))
console.log((num.toString().split('').reverse().join('')))
