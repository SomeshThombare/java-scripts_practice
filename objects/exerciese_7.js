
// function greet(name) {
//     console.log(`Hello ${name}`)
// }

// greet('Sam')
// greet('somnath')
// greet('somesh')

//7c
function greet(name) {
    if(!name){
        console.log('Hi there!');
    }else{
    
        console.log(`Hello ${name}`)
}
}
greet()
greet('Sam')
greet('somnath')
greet('somesh')

//7d convertToFahrenheit
function convertToFahrenheit(celsius){
    return (celsius * 9 / 5) + 32;
}
console.log(convertToFahrenheit(25));

//7e
function convertTocelsius(fahrenheit){
    return (fahrenheit - 32)* 5 / 9
}

console.log(convertTocelsius(86))

//7f
function convertTemperature(degree, unit){
    if (unit === 'C'){
        const result = convertToFahrenheit(degree);
        return `${result}F`;
    }
    else if (unit === 'F'){
        const result = convertTocelsius(degree);
        return `${result.toFixed(2)}C`
    }
}

console.log(convertTemperature(25,'C'));
console.log(convertTemperature(89,'F'))

//7g
function convertLenght(length, from , to){
    if (from === 'km' && to === 'miles'){
        const result = length / 1.6;
        return `${result.toFixed(2)} miles`;
    }else if (from === 'miles' && to === 'km'){
        const result = length * 1.6;
        return `${result.toFixed(2)} km`
    }else if(from === to){
        return `${length} ${to}`;
    }else{
        return 'Invalid unit';
    }
}
console.log(convertLenght(50, 'miles', 'km'));
console.log(convertLenght(32, 'km','miles'));
console.log(convertLenght(50, 'km','km'));