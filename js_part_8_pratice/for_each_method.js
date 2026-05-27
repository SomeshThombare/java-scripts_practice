// array methods
let arr =[1,2,3,4,5];

arr.forEach((el) =>{ //(el)is callback function
    console.log(el);
});

let array = [
    {
        name : 'sam',
        marks: 98,
    },{
        name : 'somnath',
        marks : 94.5,
    },
    {
        name : 'somesh',
        marks: 77,
    },
];

// console.log(array);
array.forEach((student) =>{
    console.log(`Student Name: ${student.name}`);
    console.log(`Student Marks :${student.marks}`);

});

array.map((el)=>{
    let gpa = el.marks / 10;
    console.log(gpa);
})