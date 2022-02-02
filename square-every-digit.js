// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

function squareDigits(num){
    let nums = num.toString()
      let output = ''
      for(let i = 0; i < nums.length; i++){
        output += parseInt(nums[i]) * parseInt(nums[i])
      }
      return parseInt(output);
    }
    //converted num to a string with .toString/ converted back to a number with parseInt