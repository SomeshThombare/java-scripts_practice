// <!-- Writea JavaScript function that returns array elements larger than a number. -->
 let arr = [1,2,3,8,9,5,7,6];
 let  num = 5;

 function getElement(arr, num){
   for(let i = 0; i < arr.length; i++){
      if(arr[i] > num){
         console.log(arr[i])
      }
   }
 }

 getElement(arr,num);