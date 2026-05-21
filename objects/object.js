const studet = {
    name:'sam',
    age: 19,
    marks:90
}
// console.log(studet);


console.log(studet.name) //using dot notation -- sam
console.log(studet['name']) // using bracket notatiton -- sam

// how to add , update, delete teh objects

// Adding a object
const persone = {
    name : 'Somnath',
    age : 23,
    location : 'Pune'
}
console.log(persone);


// updating the object
persone.location = 'Solapur';
console.log(persone);

// deleting the objecting
delete persone.age
console.log(persone);