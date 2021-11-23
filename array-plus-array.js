https://www.codewars.com/kata/5a2be17aee1aaefe2a000151
// I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.
// P.S. Each array includes only integer numbers. Output is a number too.


function arrayPlusArray(arr1, arr2) {
    //Create a new number starting at zero, for each array
     // loop over each array
      // sum the values within the array
      let arr1Sum = 0;
      let arr2Sum = 0;
      for(let i = 0; i < arr1.length; i++){
        arr1Sum += arr1[i]
      }
      
      for(let i = 0; i < arr1.length; i++){
        arr2Sum += arr2[i];
      }
      return arr1Sum + arr2Sum; 
    }