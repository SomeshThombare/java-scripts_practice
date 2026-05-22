{
    let b = 20; 
    const c = 30;
    var d = 40; 
    
    console.log(b); // Prints 20
}

// Testing visibility outside the block:
console.log(d); // Prints 40 (var ignores block scope!)
console.log(b); // ReferenceError: b is not defined
