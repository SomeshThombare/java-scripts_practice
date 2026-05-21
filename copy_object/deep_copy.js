student ={
    name : 'sam',
    age : 22,
    marks : {
        math : 90,
        hindi : 90
    }
//     fun: function fun1(){
//         console.log('some function identity');
// }
};

let student2_str = JSON.stringify(student);

console.log('This is noraml data:',student);

console.log('Thsi is json string formate conerted data: ',student2_str);

// json.parse
let studet_parse = JSON.parse(student2_str);
console.log('this is json strign to noraml js data convert:',studet_parse);