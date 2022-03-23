// Write a function that flattens an Array of Array objects into a flat Array. Your function must only do one level of flattening.

// flatten([1,2,3]) // => [1,2,3]
// flatten([[1,2,3],["a","b","c"],[1,2,3]])  // => [1,2,3,"a","b","c",1,2,3]
// flatten([[[1,2,3]]]) // => [[1,2,3]]

let flatten = function (array){
    let result = [];
    for(let i = 0; i < array.length; i++){
      if(Array.isArray(array[i]))
        for(let j =0; j < array[i].length; j++){
          result.push(array[i][j]);
        }
      else
        result.push(array[i])
    }
    return result
  }
  // HOF below...
  //return array.reduce(function(a,b){return a.concat(b) }, []);