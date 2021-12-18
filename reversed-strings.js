//Complete the solution so that it reverses the string passed into it.

//'world'  =>  'dlrow'
//'word'   =>  'drow'

function solution(str){
    let word = '';
    for(let i = 0; i < str.length; i++){
        word = str[i] + word;
    }
    return word;
  }