// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

// FUNDAMENTALSSTRINGSUTILITIES


function getCount(str) {
    let vowelsCount = 0;
    let vowelArray = ["a", "e", "i", "o", "u"];
    
  for(let i = 0; i < str.length; i++ ){
    for(let j = 0; j < vowelArray.length; j++){
      if(str[i] === vowelArray[j]){
        vowelsCount++
      }
    }
  }
    
    return vowelsCount;
  }