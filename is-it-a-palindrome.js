//Write a function that checks if a given string (case insensitive) is a palindrome.

function isPalindrome(x) {
    x = x.toLowerCase();
    let reversed = x.split('').reverse().join('');
    if(x.length <= 1) return true;
    return x === reversed;
  }
  
  
  //any way you write the string it should be the same
    //the word forwards should be the same as the word backwords
    //to reverse a string we can split it in to an array then reverse then join
  
  //incursion vs recursion
  //-loops       //function calling itself over and over
      //loop ends on conditions
  //            -base case simplest way the problem can be expressed
  //            - recursive writing a 
  
  // function isPalindrome(x) { 
  //   x = x.toLowerCase()
  // recursive solution
    // condition / base cases
      // is the length of the input 1 character or less?
  //    if(x.length <= 1) return true;
    // return recursive case
      // is the first char the same as the last
      // and all the inner characters are also a palindrome
  //   return x.slice(0, 1) === x.slice(-1) && isPalindrome(x.slice(1, -1))
  // }