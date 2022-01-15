// You will be given an array of objects (hashes in ruby) representing data about developers who have signed up to attend the coding meetup that you are organising for the first time.
// Your task is to return the number of JavaScript developers coming from Europe.

function countDevelopers(list) {
    //   let count = 0;
    //   for(let i = 0; i < list.length; i++){
    //     let person = list[i] // if variable was not created you would use just list[i]
    //     console.log(person, person.firstName)
    //     if(person.continent === 'Europe' && person.language === 'JavaScript'){
    //       count ++;
    //     }
    //   }
    //   return count;
      return list.reduce((count,person) => person.language === 'JavaScript' && person.continent === 'Europe' ? count + 1 : count, 0)
    }
    //Declare a numeric value called count
    //loop over the list of students
    // check if each persons language is javascript and continent Europe
    //return count after the loop