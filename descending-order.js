// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

function descendingOrder(n){
    //accumilator
    let stringNum = n.toString();
    let newOrder = '';
    for(let i = 0; i < stringNum.length; i ++){
      //build a sorted output
      //we need the biggest number in the front =Math.max()
      //and the smallest number in the back = Math.min()
      //take the smallest and largest out of stringNum//
      
      }
    //.sort() needs to be an array and will mutate that array
    //turn num into a string then turn into an array
    let arr = n.toString().split('');
    //sort it Descending Order
    arr.sort((a,b) => b - a);
    //arr.reverse();
    return parseInt(arr.join(''));
  }