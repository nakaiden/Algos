// A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward as forward. Examples of numerical palindromes are:

// 2332
// 110011
// 54322345

// For this kata, single digit numbers will not be considered numerical palindromes.

// For a given number num, write a function to test if the number contains a numerical palindrome or not and return a boolean (true if it does and false if does not). Return "Not valid" if the input is not an integer or is less than 0.

// Note: Palindromes should be found without permutating num.

// palindrome(5) => false
// palindrome(1221) => true
// palindrome(141221001) => true
// palindrome(1215) => true 
// palindrome(1294) => false 
// palindrome("109982") => "Not valid"

function palindrome(num) {
    if(!Number.isInteger(num)){
      return 'Not valid';
    }
    if(num < 0 || num % 1 != 0){
      return 'Not valid'; 
      }
    if(num < 10){
      return false; 
    }
    num += '';
    for(let i = 1; i < num.length - 1; i++){
      if(num[i] == num[i-1] || num[i] == num[i + 1]) return true;
      if(num[i-1] == num[i+1]) return true;
    }
    return false;
  }