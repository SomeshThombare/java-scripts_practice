// find the avg of arr
let arr = [1,2,3,4,5,6];
const arrayAverage = (arr) => {
    let total= 0;
    for (let number of arr){
        total += number;
    }//console.log(total / arr.lenght);
    return total / arr.length;
};

console.log(arrayAverage(arr));