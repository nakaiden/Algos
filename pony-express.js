// Kata Task
// stations is a list/array of distances (miles) from one station to the next along the Pony Express route.

// Implement the riders method/function, to return how many riders are necessary to get the mail from one end to the other.

// NOTE: Each rider travels as far as he can, but never more than 100 miles.

function riders(stations) {
    let output = 0;
    let rider = 1;
    for(let i = 0; i < stations.length; i++){
      output += stations[i];
      if(output > 100){
        output = stations[i];
        rider++;
      }
    }
    return rider;
  }