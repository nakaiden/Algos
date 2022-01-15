//Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

function reverseWords(str) {
    // create a variable?
    // can split on spaces
    let output = ''
    let words = str.split(' ');
    console.log(words);
    // convert string into an array then use .reverse()
    for(let i = 0; i < words.length; i++){
      words[i] = words[i].split('').reverse().join('');
    }
    console.log(words);
    return words.join(' ')
    //.join to turn array into a string
    //accumaltor?