function countSheeps(arrayOfSheep) {
    // input = array of sheeps - values are boolean
    //output =  number of sheeps present in the array
    //need a var that counts
     let count = 0;
     //loop to count what is in the array 
    //if true count and continue
    for(let i = 0; i < arrayOfSheep.length; i++){
      if (arrayOfSheep[i] === true){
        count += 1; //count = count + 1;
      }
    }
    return count;  
  }