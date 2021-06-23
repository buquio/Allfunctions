const abc = 'abcdefghijklmnopqrstuvwxyz'

const isPangram = (string) => {
    //1
    // const processedString = [...new Set(string.toLowerCase().split(' ').join(''))].sort().join('')
    // return abc===processedString

    
//2
    const regexMatch = new Set(string.toLowerCase().match(/[a-z]/gi))
    return regexMatch.size===26
}

console.log(isPangram('The quick Brown fox jumps over the lazy DOG'))
console.log(isPangram('abcdefghijklmnopqrstuvwxyz'))
console.log(isPangram('abcdefghpqrstuvwxyz'))


///////////////
const getUsers = async () => {
    const api = 'https://jsonplaceholder.typicode.com/users'
    const response = await fetch(api)
    const json = await response.json()
    
    const result = json.filter(v=>v.name.toLowerCase().includes('k')).map(({name,email})=>({name,email}))
    
    return result
    
}

(async function() {
    try{
     console.log(await getUsers())   
        
    }catch(err){
        console.log(err)
    }
})();


///////////////7
const toRainLanguage = (number)=>{
    let result = ''
    if(number%3===0) result += "Pling"
    if(number%5===0) result += "Plang"
    if(number%7===0) result += "Plong"
    
    return result ? result : number
}

console.log(toRainLanguage(3))
console.log(toRainLanguage(21))
console.log(toRainLanguage(35))
console.log(toRainLanguage(1))

//////////////8
const isIsogram = (string) => {
    
    const lowerCased = string.toLowerCase()
    
    const result = lowerCased.split('').every((v,i)=>console.log(v,i) || lowerCased.indexOf(v)===i)
    
    return result

}

console.log(isIsogram('ambidExtRously')) // true
console.log(isIsogram('patteRN')) // false

//////////9
const isLeapYear = (year) => {
    const numberYear = Number(year)
    return numberYear % 100 === 0 ? numberYear % 400 === 0 : numberYear % 4 === 0
}

console.log(isLeapYear("2020")); // true
console.log(isLeapYear("2018")); // false
console.log(isLeapYear("1700")); // false
console.log(isLeapYear("1600")); // true

///////10
const encode = (string)=>{
    return string.replace(/(\w)\1+/g, (m,v) => `${m.length}${v}`)
}

const decode = (string)=>{
    return string.replace(/(\d+)(\w)/g, (x,y,z) => z.repeat(y))
}


console.log(encode('wwwwwwwwiiuuuu')) // 3w2i4u
console.log(decode('2u3a4o')) // uuaaaoooo 

///////////11
const encode = (string)=>{
    return string.replace(/(\w)\1+/g, (m,v) => `${m.length}${v}`)
  }
  
  const decode = (string)=>{
    return string.replace(/(\d+)(\w)/g, (x,y,z) => z.repeat(y))
  }
  
  
  console.log(encode('wwwwwwwwiiuuuu')) // 3w2i4u
  console.log(decode('2u3a4o')) // uuaaaoooo 

  /////////13
  const map = (array, callback) => {
    return array.reduce((accumulator,value)=>{
      return [...accumulator, callback(value)]
    },[])
 }
 
 
 console.log(map([1, 2, 3], (v) => v + 1)); // [2,3,4]


 //////////14
 const map = (array, callback) => {
    return array.reduce((accumulator,value)=>{
      return [...accumulator, callback(value)]
    },[])
 }
 
 
 console.log(map([1, 2, 3], (v) => v * v)); // [2,3,4]

 //////////15
 const makeFlat = (array) => {
    return array.reduce((accumulator,value)=>{
        return Array.isArray(value) ? [...accumulator, ...makeFlat(value)] : [...accumulator,value]
    },[])
  }
  
  
  console.log(makeFlat(["one", ["two", "three"], ["four", ["five"]]])); // ['one','two','three','four','five']


  ////////////16
  const transposeMatrix = (array) => {
    return array[0].map((_,i)=>array.map(v=>v[i]))
}


console.log(transposeMatrix([
    [1,2,3],
    [1,2,3],
    [1,2,3],
]))
 // [[1,1,1],[2,2,2],[3,3,3]]



/////////////////////
//For Loops with arrays
const europe = ['Sweden', 'Norway', 'Bulgaria', 'France', 'Germany', 'Poland']
// OR Using For Loop 
for (let i = 0; i < europe.length; i++) {
    console.log(europe[i])
}


/////////////////////////
//For Loops with if statements
//We are trying to find a table for my speed dating group to sit at, that is the most economical for the restaurant.
//  How many options do I have?
const tableNumbers = [5, 14, 7, 10, 20, 11, 12, 15, 3]
for (let i = 0; i < tableNumbers.length; i++) {
    if (tableNumbers[i] % 2 === 0) { 
        console.log(tableNumbers[i])
    }
}


/////////////////////////
//Mini Challenge: We have decided to play a game between all of us. 
// If the person has even number, print out the word 'blue team'. 
// If it is odd, print out the word 'red team'.
const people = 56

for (let i = 0; i < people; i++) {   //i should not be 0
    //or better
    for (let i = 1; i <= people; i++) { 
        if (i % 2 === 0) {
            console.log('Person ' + i + ' is on the blue team')
        } else {
            console.log('Person ' + i + ' is on the red team')
        }
    }

/////////////////loops and arrays part 1
    //Challenge: you are at your shift at the shop and the owner has left you with a long list of things in the inventory. 
    // He has asked you to find out how many 'mustard' bottles you have in stock. 
    // Use a for loop to count the amount of 'mustard' you have.
    const shopInventory = ['milk', 'cheddar', 'mustard', 'ketchup', 'olive oil', 'cheddar', 'milk', 'garlic', 'mayo', 'carrots', 'cheddar', 'mustard', 'mayo', 'orange juice']

    let count = 0
    for (let i = 0; i < shopInventory.length; i++) {
        if (shopInventory[i] === 'mustard') { // if any item in the shopinventory is mustard
            count += 1   //add to the count
        }
    }
    console.log(count)
    
    ///////////////////////////
    //loops and arrays part 2
    //Challenge: you are working at a very fancy new nightclub and in charge of letting people in, based on their age. 
    // If they are not 21 years of age, you cannot let them in. Please send them a nice personalised message letting them know.
    const nightClubRegister = [
        {
            name: 'Ahmed',
            lastname: 'Abdool',
            age: 25,
            gender: 'male'
        },
        {
            name: 'Sally',
            lastname: 'Morgan',
            age: 18,
            gender: 'female'
        },
        {
            name: 'Dionne',
            lastname: 'Brown',
            age: 29,
            gender: 'female'
        },
        {
            name: 'Max',
            lastname: 'Forrester',
            age: 20,
            gender: 'male'
        }
    ]

    for (let i = 0; i < nightClubRegister.length; i++) {
        if (nightClubRegister[i].age < 21) {
            if (nightClubRegister[i].gender === 'male') {
                console.log('Sorry Mr ' + nightClubRegister[i].lastname + ', you are not old enough to attend')
            }
            if (nightClubRegister[i].gender === 'female') {
                console.log('Sorry Mrs/Miss ' + nightClubRegister[i].lastname + ', you are not old enough to attend')
            }
        }
        if (nightClubRegister[i].age >= 21) {
            if (nightClubRegister[i].gender === 'male') {
                console.log('Welcome Mr ' + nightClubRegister[i].lastname + ', you are on the list!')
            }
            if (nightClubRegister[i].gender === 'female') {
                console.log('Welcome Mrs/Miss ' + nightClubRegister[i].lastname + ', you are on the list!')
            }
        }
    }
    

    ////////////////////////////
    const items = 10 // no of items
    let randomNumber = Math.random() * items
    console.log(randomNumber)
    let newNumber = Math.floor(randomNumber)
    console.log(newNumber)
   

    //////////shift()
    //removes the first item 
    //returns that removed item 
    //change the length 

    let cars = [
        {
            name: 'ford',
            colour: 'black'
        },
        {
            name: 'volkswagen',
            colour: 'blue'
        },
        {
            name: 'aston martin',
            colour: 'red'
        }
    ]
    let car = cars.shift()   
    console.log(car) // this returns the car that was removed

console.log(cars) // removed [0] & returns remaining carslist 
console.log(cars.shift())  // returns particular car that was removed after 2nd console.log

   
  ////// 1. Loop through the myEmojis array and log each of them out to the console
            const myEmojis = ["👨‍💻", "⛷", "🍲"]
            for (let i = 0; i < myEmojis.length; i++) {
                console.log(i)
                console.log(myEmojis[i])
            }


// Complex Data Types - Objects Part 1 
// -describe a peice of data in depth
//- key: value pairs -->
var dog = {
    name: "spot",
    age: 4,
    isHungry: true,
    favToys: ["bone", "ball", "squeeky thing"]
}
// dot notation
console.log(dog.age)
document.body.prepend(dog.age)
// bracket notation
console.log(dog["age"])
document.body.prepend(dog["age"])


/////////////////////////////
var larry = {
    name: "larry",
    age: 20,
    friends: ["john", "lisa", "al"],
    isPetOwner: true,
    greeting: "Hello Friend!",
    sayGreeting: function () {
        console.log(this.greeting)
    }
}
larry.sayGreeting()   
console.log(larry.sayGreeting()) 

console.log(larry.name) 
document.body.prepend(larry.greeting)
// dot notation
larry.age
document.body.prepend(larry.age)

// bracket notation
larry["age"]
document.body.prepend(larry["age"])


//////////////////////
// Functions & Methods
// Function: allows us to execute specific code when/as needed
// Method: A function that is a property of an object
//NOTE: this- keyword inside of an object refers to itself
var user = {
    name: "DAVE",
    email: null,
    friends: ["rick", "sarah"],
    address: {  
        street: "123 street",
        city: "gotham"
    },
    id: 0,
    nickname: undefined
}
if (user.name) {  //testing truthy or falsy
    console.log("It is true!")
} else {
    console.log("It is false!")
}
console.log(user.name === true) //compares if user.name is true with true


////////////////
var username = "joe"
var password = "joe123"

// And
// &&
if (username === "joe" && password === "joe123") {
    console.log("Access granted")
    console.log(`${username} Access granted`)
document.body.prepend(`${username} "Access granted"`)
} else {
    console.log("Username or password are incorrect")
}


// Or
// ||
if (username === "" || password === "") {
    // or   
    //if(!username || !password){
    console.log("Please provide username and password")
} else {
    console.log("Both were provided")
}

// xxxxx nested if
if (!username || !password) {
    console.log("Please provide username and password")
} else {
    if (username === "joe" && password === "joe123") {
        console.log("Access granted")
    } else {
        console.log("Username or password are incorrect")
    }
}


//////////////
//For Loops
//Challenge: Print out in your console 0 mississippi to 100 mississippi.
for (let i = 0; i <= 100; i++) {
    console.log(i + ' mississippi')
}



