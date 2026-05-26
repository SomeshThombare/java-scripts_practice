// this is for loop way and easy way
// let arr = [1,2,3,4,5,6,7];
// let max = -1;
// for(let i = 0; i < arr.length; i++){
//     if(max < arr[i]){

//         max = arr[i];
//     }
// }
// console.log(max);

// now usign reduce through do this
let arr = [1,2,3,4,5,6,7];

let max = arr.reduce((max,el)=>{
    if(max < el){
        return el;
        // console.log(el); //Note u want to proper outpot then connect html file 
    }else {
        return max;
        // console.log(max);
    }
});