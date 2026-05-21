let person = {
    name : 'sam',
    city : 'pune',
    skills :{
        skill1 : 'pyton',
        skill2 : 'java',
        skill3 : 'ruby'
    }
};

// const jsonData = JSON.stringify(person); //convert into strin using json
// console.log(jsonData)

// localStorage.setItem('person',jsonData)

// const lsPerson = localStorage.getItem('person');
// const personobj = JSON.parse(lsPerson)

// console.log(personobj)
// const personCopy = JSON.parse(jsonData); // convert json strign  into js object
// console.log(personCopy)

const user = {
    name : 'sam',
    age : 21,
    city : 'pune',
    skils : ['java','python','C++']
};
// console.log(user)


// let name = user.name; // sam
// let age = user.age; // 21

let {name, age} = user;

console.log(name) //sam
console.log(age) // 21