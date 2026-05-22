// first case
function calSum(a,b){
    let sum = a + b ;
    console.log(sum);
}
calSum(5,5);
console.log(sum); //ReferenceError: sum is not defined

// second case:
let sum = 25;
function calSum(a,b){
    let sum = a + b ;
    console.log(sum);
}
calSum(5,5); // 10 --> sum to a and b
console.log(sum); // 25 --> sum varibale value form gloval variable