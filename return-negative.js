// https://www.codewars.com/kata/55685cd7ad70877c23000102
// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

function makeNegative(num) {
    if(num > 0 )
      {return num * -1}
    else
      {return num}
  }