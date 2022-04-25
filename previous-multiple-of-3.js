// Given a positive integer n: 0 < n < 1e6, remove the last digit until you're left with a number that is a multiple of three.

// Return n if the input is already a multiple of three, and if no such number exists, return null, a similar empty value, or -1.

// Examples
// 1      => null
// 25     => null
// 36     => 36
// 1244   => 12
// 952406 => 9

//convert a number to a string

const prevMultOfThree = n => {
    let str = n.toString();
     for(let i = 0; i < str.length;){
       if(str % 3 === 0){
         return str * 1;
       }else{
         str = str.slice(0,-1)
       }
     }
     return null;
   }