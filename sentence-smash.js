// Sentence Smash
// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

// Example
// ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'

function smash (words) {
    return words.join(' ');
 //   let sentence ='';
 //   for(let i = 0; i < words.length; i++){
 //     sentence += words[i] + ' ';
 //   }
 //   return sentence.trim();
 //   return words.length > 0 ? words.reduce((a,c,) => a +' '+ c) : '';
 };