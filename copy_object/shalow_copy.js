let student = {
    name : 'somnath',
    age : 23,
    marks :{
        math : 60,
        hindi : 70
    }
    // fun : function msg(){
    //     console.log('This student specically is that he is good at drawing');
    // }
};
console.log(student);

let student2 = {...student};
student2.name = 'Sam';
student2.marks.math = 80;
student2.marks.hindi = 90;

console.log(student)
console.log(student2);