// RETURN FALSE IF AT LEAST ONE IS FALSE, ELSE RETURN TRUE
function allOscarWinners(films) {
  const result =  films.every(film => film.wonOscar === true); //ans: true
  return result
       }
      
  
  console.log(allOscarWinners([ 
  {
    title: 'Forecast Gump',
    wonOscar: true,
  },
  {
    title: "Moonlight",
    wonOscar: true,
  },
  {
    title: 'No Country for Old Men',
    wonOscar: true,
  }
  ]) 
  )
  
  
  // OR/////////////////
  function allOscarWinners(films) {
  const result =  films.every(film => film.wonOscar !== true); //ans: true
  if(result.length == 0) {
    return true
  }else{
    return false
  } 
}
console.log(allOscarWinners([ 
  {
    title: 'Forecast Gump',
    wonOscar: true,
  },
  {
    title: "Moonlight",
    wonOscar: true,
  },
  {
    title: 'No Country for Old Men',
    wonOscar: true,
  }
  ])
  )
  
  //////??????THEFUNCTION SHOULD RETURN AN ARRAY OF ALL PETS

  function gatherPets(people){
    const result = people.filter(person => person.pets = true)
  }
  return result

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



    ///////////////////////????????????
    function countChars(str, char) {
      let count = (str.split(char)).length - 1;
    return count
    } 
    
    console.log(countChars("This is a string.", 's')); // 2
      
    OR ////////////////////
    var temp = "This is a string.";
var count = (temp.match(/This/g) || []).length;
console.log(count);


/////////return word with exclamation mark
function exclaimWord(word) {
  let newWord = word.toUpperCase()
  return newWord + '!'
}

console.log(exclaimWord('word'))


//////////
function createSentence(person) {
  return `Hello my name is ${person.name}, I am ${person.age} years old and I am a ${person.job}`
}

console.log(createSentence([
  {
  name: 'sam',
  age: 30,
  job: 'tutor'
},
]))

////////////////
function getFirstAndLast(array) {
  let newArray =[];

    const first = array[0]
    const last = array[array.length-1]
newArray.push(first)
newArray.push(last)
}
    return newArray
  
    console.log(getFirstAndLast([34, 56,8]))


    ///////////////////// 
    const numbers = [{number:1}, {number:2}, {number:3}]
    let total = 9

    for(let i=0; i< number.length; i++) {
      total += numbers[i].number //array of object
    }

    //numbers.foreach(number) => {
    // console.log("Tthe number is" + number)
    // }
    console.log(total)


///////////////////////XXXXXXXXXXXX
function findTotalAge(people) { 
  let totalAge = 0;
  let personAge;
  for ( let i=0; i< people.length; i++) {
    personAge = person[i].age
    totalAge += personAge
    people.length ++
  }
  return totalAge
}
console.log(findTotalAge([
  {
  name: 'sam',
  age: 30,
},
{
  name: 'anat',
  age: 22,
},

]))

///////////////////////
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
  
