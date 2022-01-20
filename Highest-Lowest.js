// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

function highAndLow(numbers){
  // numbers is a string
   //numbers is a string of numbers seperated by spaces
   let split = numbers.split(' ');
   let lowest = +split[0]
   let highest = +split[0]     
  // looping over numbers
   for(let i = 0; i < split.length; i++){
  // if currentNumber is a space dont process it
     let currentNumber = +split[i];
     //compare highest to lowest
       // we need to compare our currentNumber to the highest and lowest numbers
       // use if statement or Math.min/Math.max
       lowest = lowest > currentNumber ? currentNumber : lowest;
       highest = highest < currentNumber ? currentNumber : highest;
     }
     return `${highest} ${lowest}`;
   // return a string containing a highest and lowest   
 }
 