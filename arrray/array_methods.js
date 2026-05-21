// Array methods?

let car_brans = ['audi','bmw','xuv','maruthi']
console.log(car_brans);

// 1.Push methods(insert) at the end of list
car_brans.push('toyota');
console.log(car_brans);

//2.pop methods (delete)end of the list element delte
car_brans.pop();
console.log(car_brans);

// 3. unshift() add element at the stat of array(index 0)
let fruts = ['mango','banana']
fruts.unshift('grpes');
fruts.unshift('papaya');
console.log(fruts); 

// 4. shift for delet index[0] value
fruts.shift();
console.log(fruts);

//5. indexof() // search in the index
console.log('Indexof method');
let priamary = ['red','yello','blue']
// priamary.indexOf('blue');
console.log(priamary.indexOf('blue'));
console.log(priamary.indexOf('Red'));
// console.log(fruts);

//6 aray concatation
let secondary = ['sam','somesh','samarth'];
console.log(secondary);

let merged = priamary.concat(secondary);
console.log(merged);

//6 revers rhe array
let reverse = secondary.reverse();
console.log(reverse);

// 7 slice:
let colors = ['red','blue','oreange','white'];
console.log(colors);
console.log(colors.slice());
console.log(colors.slice(2)); //[2:]
console.log(colors.slice(2,3)); //oreange
console.log(colors.slice(-2)); //[-2:]

//8 Splice: remove / replaces/ add element in place
//splice(start, deleteCount, item()....itemN)
console.log('Splice method');
let cls = ['red','blue','oreange','white'];
console.log(cls.splice(3));// [3:]
console.log(cls.splice(0,1)); // red

console.log('-----------------------')
console.log(cls);
console.log(cls.splice(1,2)); //
cls.push('violet');
cls.push('black');
console.log(cls);
console.log('-------------------')
cls.splice(0,0, 'toyota','xuv','ferrai');
console.log(cls);
console.log(cls.splice(1,2));
console.log(cls);

//9. sort
let nums = [2,4,5,1,3];
console.log(nums.sort());

let alphabhets = ['d','r','s','a','b'];
console.log(alphabhets.sort());


//practice que
//1
let months = ['january','july','march','augest'];
console.log(months.splice(0,2,'july','june'));
console.log(months);

//2 find the index of js after converting reverse
tech = ['c++','c','C#','java','js','python','.net'];
console.log(tech.reverse().indexOf('js'));

// 10. constat array
const arr = [1,2,3];
console.log(arr);

arr.push(4);
console.log(arr);
// arr = ['sam','somesh']; //TypeError: Assignment to constant variable
// console.log(arr);

//11.  neseted array
let nos = [[2,4],[6,8],[10,12]];
console.log(nos);
//how to acces the nested array
console.log(nos[0][1]);
console.log(nos[1][1]);
console.log(nos[2][1]);


//12. reference array
console.log([1] == [1]);
console.log([1] === [1]);

let ref_arr = [1,2,3];
let new_ref_arr = ref_arr;
console.log(ref_arr === new_ref_arr); 

// practice nested array :
// x   null  O
//null   X  null
//O    null  X   --> create nested array
let game = [['X',null,'O'], [null,'X',null], ['O',null,'X']];
console.log(game);
//update oth array index 1

game[0][1] = 'O';
game[1][2] = 'O';
console.log(game);

//PRactice questions
// 1. WAP to get first n ele of an array arr =[7,9,0,-2] and n=3
ARR = [7,9,0,-2] //7,9,0
console.log(ARR.slice(0,-1));

//2 WAP last n ele nad n=3 
console.log(ARR.slice(-3));

//3.check the sting is blank or not;
let blank = '';
if(blank.length == 0){
    console.log('Strign is empty');
}else{
    console.log('strig is not empty');
}
//4 test whethr the char at the given index is lower case
let str = 'Sam';
let idx = 2;
if(str[idx] == str[idx].toLowerCase()){
    console.log('Char is lowercase');
}else{
    console.log('char is nto lowercase');
}

// 5 strip leading and trailing space from a stirng
let info = ['helo','a',23,44];
let item = 44;
if(info.indexOf(item) != -1){
    console.log('elememt exist in array')
}else{
    console.log('element dosenlt exist in array');
}

//6. check if na ele exist in an array or not
console.log(ARR.indexOf(2)); // not preser(-1)
// console.log()