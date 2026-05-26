//1 check if all numbers in our array are multiples of 10 or not

arr = [1,2,3,4,5,6];
let result =  arr.every((el) => el % 10 == 0);
console.log(result);

//2 check the min no form array
let min = arr.min((min, el) =>{
    if(min < el){
        return min;
    }else{
        return el;
    }
});

console.log(min);