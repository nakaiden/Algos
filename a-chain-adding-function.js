// We want to create a function that will add numbers together when called in succession.

// add(1)(2); // == 3
// We also want to be able to continue to add numbers to our chain.

// add(1)(2)(3); // == 6
// add(1)(2)(3)(4); //  == 10
// add(1)(2)(3)(4)(5); // == 15
// and so on.

// A single call should be equal to the number passed in.

// add(1); // == 1

function add(n){
    // constantly adding
    //recursion
    //create a variable
    const newFunction = function(x){
      return add(n + x);
    }
    newFunction.valueOf = function(){
      return n;
    }
    return newFunction;
  }