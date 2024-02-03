var containsDuplicate = function(nums) {
    var uniqueele= new Set();
    for(let num of nums){
        if(uniqueele.has(num)){
            return true;
        }else{
             uniqueele.add(num);
        }
    }
    return false;
};
var num1=[1,2,3,4,5]
console.log(containsDuplicate(num1))