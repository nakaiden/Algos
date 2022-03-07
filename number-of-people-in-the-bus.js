// There is a bus moving in the city, and it takes and drop some people in each bus stop.

// You are provided with a list (or array) of integer pairs. Elements of each pair represent number of people get into bus (The first item) and number of people get off the bus (The second item) in a bus stop.

// Your task is to return number of people who are still in the bus after the last bus station (after the last array). Even though it is the last bus stop, the bus is not empty and some people are still in the bus, and they are probably sleeping there :D

// Take a look on the test cases.

// Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the return integer can't be negative.

// The second value in the first integer array is 0, since the bus is empty in the first bus stop.

let number = function(busStops){
    // Accumulation!!
    //output variable
    let output = 0
    //for loop through our data
    for(let i = 0; i < busStops.length; i++){
      
      let currentStop = busStops[i];
      let peopleWhoGotOn = currentStop[0]
      let peopleWhoGotOff = currentStop[1]
      output += peopleWhoGotOn -peopleWhoGotOff;
    }
    //condition?
    //return
    return output
  }
  
  // Accumulation!!
  // output variable
  // let output = 0;
  // // for loop through our data
  // for(let i = 0; i < busStops.length; i++){
  // // output += busStops[i][0] - busStops[i][1]
  // let currentStop = busStops[i];
  // let peopleWhoGotOn = currentStop[0];
  // let peopleWhoGotOff = currentStop[1];
  // // update our output
  // output += peopleWhoGotOn - peopleWhoGotOff;
  // }
  // return output;
  // }