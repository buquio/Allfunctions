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