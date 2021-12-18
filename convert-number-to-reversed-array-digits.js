//Convert number to reversed array of digits
//Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

//Example:
//348597 => [7,9,5,8,4,3]
//0 => [0]

function digitize(n) {
    //code here
    // how can i change the digits in a number
    // convert the number to a string
    let digitArray = n.toString().split('');
    //console.log(digitArray.reverse());
    let output = [];
    for(let i = 0; i < digitArray.length; i++){
      output.unshift(parseInt(digitArray[i]));
    }
    return output;
  }