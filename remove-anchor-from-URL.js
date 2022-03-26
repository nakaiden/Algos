// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"

function removeUrlAnchor(url){
    //create a variable
    const newStr = url.split('#')
    return newStr[0];
     
    //return url.split('#', '');
      //how to replace # and whatever is after 
      //with an empty string
    }
    
