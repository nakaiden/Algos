//Simple, given a string of words, return the length of the shortest word(s).

//String will never be empty and you do not need to account for different data types.

function findShort(s){
    const words = s.split (' ');
    let shortLength = words[0].length;
    for (let i = 0; i < words.length; i++){
      if (shortLength > words[i].length){
      shortLength = words[i].length
      }
    }
      return shortLength;
    }