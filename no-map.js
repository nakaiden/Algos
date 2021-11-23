// https://www.codewars.com/kata/57f781872e3d8ca2a000007e/train/javascript
// Given an array of integers, return a new array with each value doubled.

function maps(x){
    //create a new empty array
    const newArr = [];
    //loop over the array, x
    for (let i = 0; i < x.length; i++){
      let currentVal = x[i];
      let currentTimes2 = currentVal*2;
  
      //double the current value
      //put the number in the new array
      newArr.push(currentTimes2)
    }
    //return the new array
    return newArr
  }