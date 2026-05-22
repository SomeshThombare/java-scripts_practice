// generate random no within range(start, end)
let start = 100;
let end = 200;

function generateRandom(start,end){
    let diff = end - start;
    let number = Math.floor(Math.random() * diff) + start;
    console.log(number);
}

generateRandom(start,end);