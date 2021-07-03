// import { ppid } from "process";

// var max = 0;
// function findLargest(numbers) {
//     // Your code goes here
   
//     if(numbers == null){
//         max = 0;
//     }
//     else if(numbers.length == 1){
//         max = numbers[0];
//     }
//     else{
//         max = numbers[0];
//         for(let i = 1; i < numbers.length; i++){
            
//             if(numbers[i] > max){
//                 max = numbers[i];
//                 // console.debug(max);
//             }
            

//       }
//     }
//     // console.debug(numbers.length);
//     return max;
    
// }

// var string  =  'This is supposed to be a "string" \n \t And this is not supposed to be a string\f.'
// console.log(string);
// console.log(findLargest([11111, 88, -200, 7]));

// function oops(){
//      glo = 10;
// }

// function hid(){
//     if(typeof glo != "undefined"){
//         console.log('not undefined');
//     }
//     else{
//         console.log("undefined");
//     }
// }

// oops();
// hid();

arr = [1, 2 ,3 , 4];
// console.log(JSON.stringify(arr));
arr1 = JSON.stringify(arr);
for(let i = 0; i< arr1.length; i++){
    // console.log(arr1[i]);
  
}
console.log(arr.length);
console.log(arr1.length);