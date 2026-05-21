const person = {
    name : 'Sam',
    age : 21,
    city : 'pune'
}
// console.log(person)
// console.log(person.name)

const car = {
    brand : 'Toyato',
    model : 'Innova',
    year : 2026,
    available : true,
    color : ['White','Black'],
    address : {
        state : ['MH'],
        city : 'Pune'
    }
};
let city = car.address.city;
console.log(city)
// car.address.state = ['KA','MH'] //update the addredd
// console.log(car)
// // console.log(car.brand)
// console.log(car.brand,car.model)

// how to add a new property to an objct
// const user1 = {
//     name : 'sam'
// };

// user1.age = 21;
// console.log(user1)

const product = {
    name : "samsung",
    price : 90000,
    brand : 'samsung'
}
console.log(product)
// product."delivery-time" = '2dasy'  //error cannot use dot notaion with strigs
// product['delivery-time'] = '2 days' //used bracket notation
// console.log(product)


// how to delet existing property:
delete product.brand;
console.log(product)
// console.log(product.brand)

// how to update the object
product.price = 100000;


product.brand = 'samsung'
product["code-name"] = 'sdf4345'
console.log(product)
console.log(product['code-name'])

//function
console.log('Usign normal function.....')
const user1 = {
    name : 'sam',
    greet : function(){
        console.log('Hello, hwo are you?')
    }
}
const user2 ={
    name : 'spmnaht',
    greet : function(){
        console.log('Howdy, what are you doing?')
    }
}

user1.greet()
user2.greet()
console.log('Using Short hand method...........')
//short hand method
user3 = {
    name : 'sam',
    greet(){
        console.log('Hello, how are you')
    }
}

user4 = {
    name : 'somnatth',
    greet(){
        console.log('howdy, what are u doing?')
    }
}

user3.greet()
user4.greet()

console.log('using this keyword....')
//this keyword
const sam = {
    name : 'sam',
    greet(){
        console.log(`Hello ${this.name}`)
    }
}
const somnath = {
    name : 'somnath',
    greet(){
        console.log(`Hello ${this.name}`)
    }
}
sam.greet()
somnath.greet()