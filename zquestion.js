//////??????THEFUNCTION SHOULD RETURN AN ARRAY OF ALL PETS

function gatherPets(people){
    const result = people.filter(person => person.pets)
  }
//   return result

    console.log(gatherPets(
      [
        {
          name: 'Macloln',
          pets:['Bear', 'Minu'],
        },
        {
          name: 'Caroline',
          pets:['Basil', 'Hamish'],
        },
      ]
    ))


    /////////////////////////
    //////////////////Coding Meetup #2 - Higher-Order Functions Series - Greet developers
function greetDevelopers(list) {
    // const result = list.foreach(developer => developer.greeting = `Hi ${developer.firstName}, what do you like the most about ${developer.language}?`)
    // return result
     list.forEach(function(developer) {
       developer.greeting = `Hi ${developer.firstName}, what do you like the most about ${developer.language}?`;
     });
  
    return list;
    }
    
    console.log(greetDevelopers([
      { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
      { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
      { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
      { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
    ]))
    
  