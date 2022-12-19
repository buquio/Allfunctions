            
  

    ///////Forming a subset of 5 digit from a series of digits starting with the highest number and so on.
    function solution(digits){
      let answer = 0;
      
      for (let i=0; i<digits.length; i++){
        let number = digits.substr(i, 5);  //pulls the next 5 digits into a substring, then find the highest substr
        // console.log (number)   //logs all substring
        if(Number(number) > answer){    //convert to number and compare against answer  
          answer = Number(number);
        }
      }
      return answer;
    }
    solution('67822654')
    console.log( solution('67822654543'))


////////Largest 5 digit number(subset) in a series of digit
  function solution(digits){
    let max = '';
    for (let i = 0; i < digits.length - 4; i++) { //??
      let arr = digits.slice(i, i + 5)
// console.log(arr)
      max = Math.max(arr, max)
      //or
      // max = Math.max(digits.slice(i, i + 5), max)
    }
    return max
  }
  solution('67822654')
console.log( solution('67822654543'))

  

 /////////////////
function positiveSum(arr){
  // initialise an empty variable called 'sum'
  // illetrete/go thru the arr
  // check if no is positive
  // add the number to sum
  // return sum

  let sum = 0;
for (i=0; i< arr.length; i++) {
  if (arr[i] > 0) //determine if its positive
  sum += arr[i]
}
return sum;
}
// positiveSum(arr)  
console.log(positiveSum([1,2,4,-7,9,3])) 

////////////
function sumArray(array){
  if (array == null){
    return 0;
  } else if (array.length < 2){
    return 0;
  } else {
    array = array.sort(function(a,b) {return a - b}) //standard function(MDN) sort in ascending order
    var total = 0;
    for (var i=0; i< array.length; i++) {
      total += array[i];
    }
    return total
  }
}
 
console.log(sumArray([5,4,2,7,8,9]))


//////////////////without condtions/sorting
function sumArray(array){
  var total = 0;
  for (var i=0; i< array.length; i++) {
    total += array[i];
  }
  return total
}
console.log(sumArray([5,4,2,7,8,9]))

  
  ///////////
  function even_or_odd(number) {
    if (number % 2 === 0) {
      return 'Even'
    } else {
      return 'Odd'
    };
  }

  even_or_odd(25)
console.log(even_or_odd(25))


///////////
function squareSum(numbers) {
  //initialise empty variable called 'sum'
  //go thru the array of numbers
  //square each numbers
  //add the result to sum-variable continously

  var sum = 0;
  for (var i =0; i < numbers.length; i++) {
    squaredNumber = (numbers[i] * numbers[i]);
    sum += squaredNumber;
  }
  return sum
}

squareSum([5,4,2,7,9])
console.log(squareSum([5,4,2,7,9]))


///////
function smash (words) {
  "use strict";
  return words.join(' ');
};


////////
function smash (words) {
  let results;
  
  for(let i = 0; i <= words.length; i++){
    results = words.join(" ");
  } return results;
  
      
};

///////
function smash (words) { //array of words OR string of array
  let wordsSmash; //i.e a sentence \\varaiable with no intial 0 0r []
  
  for(let i = 0; i <= words.length; i++){ 
  wordsSmash = words.join(" ") //removes all the "" & joins to form a sentence
  }
  return wordsSmash
  
  
};
console.log(smash (['hello', 'world', 'this', 'is', 'great']))




/////////////////////
function countSheeps(arrayOfSheep) {
  
  let countedNumber = 0
  
  for (let i=0; i< arrayOfSheep.length; i++)
    if(arrayOfSheep[i] === true){
      countedNumber += arrayOfSheep[i]
    }
  return countedNumber
}

console.log(countSheeps([true, true, true, false, true, true, true, true, true, false, true, false, true, false,false, true, true, true, true, true, false, false, true,true]))
 
///////////
function getVowels(str) {
  var vowelsCount = 0;

  //turn the input i.e string of word into a string
  var string = str.toString(); 

  //loop through the string
  for (var i = 0; i <= string.length - 1; i++) {
  //if char is a vowel, add to vowelcount
    if (string.charAt(i) == "a" || string.charAt(i) == "e" || string.charAt(i) == "i" || string.charAt(i) == "o" || string.charAt(i) == "u") {
      vowelsCount += 1;   //this count no of vowels
      // vowelsCount += string.charAt(i);  //this display no of vowels

    }
  }
  return vowelsCount;
}
console.log(getVowels('bukola'))


/////////// Coding Meetup #1 - Higher-Order Functions Series - Count the number of JavaScript developers coming from Europe
function countDevelopers(list) {
let results = list.find(list => list.continent.includes('Europe') && list.language.includes('JavaScript'))
return results
}

console.log(countDevelopers([
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
  { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
  { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
  { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
]))



////////////// Coding Meetup #1 - Higher-Order Functions Series - Count the number of JavaScript developers coming from Europe
function countDevelopers(list) {
  
let results = list.filter(list => list.continent =='Europe' && list.language =='JavaScript').length
return results //you can store in results becos you are counting

  // return list.filter(x=>x.continent=='Europe'&&x.language=='JavaScript').length

}
console.log(countDevelopers([
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
  { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
  { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
  { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
]))



//////////////////Coding Meetup #2 - Higher-Order Functions Series - Greet developers
function greetDevelopers(list) {
  //**you cannot store in result becos you are only updating to list and you need to return updated list
  // const result = list.foreach(developer => 
  // developer.greeting = `Hi ${developer.firstName}, what do you like the most about ${developer.language}?`) 
  //return result
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
  
  
  
/////////////////////////
  function isRubyComing(list) {
    const results= list.some(developer => developer.language === "Ruby");
  return results
  }
  
  console.log(isRubyComing([
    { firstName: 'Emma', lastName: 'Z.', country: 'Netherlands', continent: 'Europe', age: 29, language: 'Ruby' },
    { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'Javascript' },
    { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 42, language: 'JavaScript' }
  ]))


  ////////////////
    function isPython(list) {

    const dev = list.find(x => x.language === "Python")
    return dev ? `${dev.firstName}, ${dev.country}` : "There will be no Python developers"
  }


  ///////////xxxxxxxxxxxxxxxxxxxxx
  function opposite(number) {
    return -number
    //your code here
  }
  
  console.log(opposite(56))


  ////////////////////
  function boolToWord( bool ){
    //...
    if (bool === true){
        return "Yes"
        }else if (bool === false){
      return "No"
    }
    
  }
  console.log(boolToWord(false))
  
  /////////////////OR
  function boolToWord( bool ){
    if(bool === true){
      return "Yes"
    }else
      return "No"
    //...
  }
  console.log(boolToWord(false))

  
  ////////////////////
  function createArray(number){ //an array of (number)5 items counted by icrement of 2
    var newArray = [];
    //Note: counter starts from 1 to 100 and so on
    for(var counter = 1; counter <= number; counter++){
      // for(var counter = 1; counter <= number; counter +=2){ //increment by 2
      // for(var counter = -4; counter <= number; counter +=2){

      newArray.push(counter);
    }
    
    return newArray;
  }
  
  console.log(createArray(5))

  
  //////////////////////
  // var obj = {name:"dog",legs:4,color:"white"}

function animal(obj) {
  return `This  ${obj.color}  ${obj.name}  has  ${obj.legs}  legs.`

}
console.log(animal( {name:"dog", legs:4, color:"white"}) )


///////////////////////
function repeatStr(s, n){
  //initialise empty array called 'result' to store the str
  //set a condition to continue to run if array-lenght is still less than n
  //add str into array continously
  //convert aaray to str of repeated str

  var result = [];
  while(result.length < n){ 
      result.push(s);
  }
 // return result.join(''); //this returs one single string e.g bukkybukkybukkybukkybukkybukky
 return result // e.g [ 'bukky', 'bukky', 'bukky', 'bukky', 'bukky', 'bukky' ]
}
console.log(repeatStr ("bukky", 6))


//////////////////////
function squareSum(numbers){ //number is always anarray
  //array of numbers
  //initialise empty variable called 'sum'
  //go thru & square each numbers in the array
  //add the result to sum each time

  var sum = 0;
  for (var i =0; i < numbers.length; i++) {
    // squaredNumber = (numbers[i] * numbers[i])
    // sum += squaredNumber
    sum += (numbers[i] * numbers[i])

  }
  return sum

}
console.log(squareSum([2,3]))

//////////////////
function doubleChar(str) {
  // Your code here
  //create a empty variable to store the doublechar
  let store = "";
  for (var i = 0; i < str.length; i++){
    store += str[i] + str[i]
  }
  return store
}
console.log(doubleChar('bola'))


/////////////////////////
function countSheeps(arrayOfSheep) { // array of boolean values
  let countedNumber = 0
  
  for (i=0; i< arrayOfSheep.length; i++)
    if(arrayOfSheep[i] === true){
      countedNumber += arrayOfSheep[i]
    }
  return countedNumber
}

console.log(countSheeps([true, true, true, false, true, true, true, true, true, false, true, false, true, false,false, true, true, true, true, true, false, false, true,true]))

//////////////
function countSheeps(arrayOfSheep) { // array of boolean values
  let countedNumber = 0
  let sheep ="";
  let cow;

  for (i=0; i< arrayOfSheep.length; i++)
  


    if(arrayOfSheep[i] === 'sheep'){
      countedNumber += arrayOfSheep[i]
    }
  return countedNumber
}

console.log(countSheeps(['sheep', 'sheep', 'sheep', 'cow', 'sheep', 'sheep', 'sheep', 'sheep', 'sheep', 'cow', 'sheep', 'cow', 'sheep', 'cow','cow', 'sheep', 'sheep', 'sheep', 'sheep', 'sheep', 'cow', 'cow', 'sheep','sheep']))


////////////////////////////

function noSpace(x){
  return x.replace(/\s/g, "");
 }
 console.log(noSpace('s u c ce s s'))


 ////////////////////
 function findNeedle(haystack) {
  // your code here
  for (let i=0; i< haystack.length; i++){
    const currentNeedle = haystack[i]
    if (currentNeedle === 'needle'){
      
          return `found the needle at position ${i}`

    }
  }

}

//////////////////////////
function monkeyCount(n) {
  // your code here
    var count=[]
    for (let i=1; i <= n; i++){
      count.push(i)
    } 
    return count

    }
  
  console.log(monkeyCount(10))

//////////////////////////////
function countBy(x, n) {
  let z = [];
  let index= 1
  for(let i=0; i < n; i++){
    z.push(x * index) //x multiple is constant,2x1,2x2,2x3,2x4 -index is changing
    index ++
  }
  return z;
}
console.log(countBy(2, 5))


///////////////////////
function getAverage(marks){
  //TODO : calculate the downward rounded average of the marks array
  var total = 0;
  var count = 0;
  for(let i=0; i< marks.length; i++){
    total += marks[i]
      count ++
  }
  return Math.floor(total/marks.length) //rounds down
//or
  // return Math.floor(total/count) //rounds down

         //  Math.round      //rounds up to nearest whole number
  // return (total/marks.length).toFixed() //fix to whole no or decimal places 
}
console.log(getAverage([3,89,55,89]))


//////////////////////
function replace(s){
  //coding and coding....
  return s.replace(/[aeiouAEIOU]/g,'!');
}


///////////////////find average passed
function passed (list) { 
  var passed= 0;
    var answer= 0;
    for(var i=0; i < list.length; i++){
          if (list[i] < 19){ //if demerit is less,add list[i]to answer
            answer += list[i]; 
            passed ++
          };
    }
      if (passed === 0){
        return 'No pass scores registered.'
      };
  
    return Math.round(answer / passed);
  
  } 
console.log([????])

//////////////////
function getSum( a,b ){
  if(a !== b){
  return a+b
    }else{
      return a||b
    }
   //Good luck!
}
console.log(getSum( 2,6 ))

////////////////
//  //////////////////????????????????????
// function splitTheBill(x) {
//   let average =Object.values(x).reduce((a,b)=>a+b,0)/Object.values(x).length;
// let arr =Object.keys(x);
// let arr2 =Object.values(x).map((a,b)=>(a-average));
// return Object.assign(...arr.map((n, i) => ({ [n]: parseFloat((arr2[i]).toFixed(2)) })));
// }


//////////////////////////?????????????????????xxxxxxxxxx
 
// function cost (mins) { 
//   var price = 0;

// if ( min > 0 && min <= 65 ) { 
//   return price += 30;
//   } else { 
//   let numberOfHalf = Math.trunc((min -60)/30) ;
//   price = 30 + (numberOfHalf*10)
//   if ((min-60)%30 === 0 || (min-60)%30 <= 5 ) { 
//     return price;} else { 
//       return price+10;
//     }
//   }
// }

// priceCalc(78)
//   return;
// } 



// EXTRA BONUSES
//////////////////////////
function findShortNo(s){
  let wordsArr= s.split(' ')
  
  let shortestWord = Infinity; //start counting shortest word from infinity

  for(let i=0; i< wordsArr.length; i++){
  let wordLength = wordsArr[i].length; 
  if (wordLength < shortestWord) {
    shortestWord = wordLength
  }
  }
  return shortestWord
}  
console.log(findShortNo("my name is bukola"))


/////////////////////////////
function findShort(s){
  let arrayOfWords= s.split(" ")
  
  let shortestWord = Infinity;
  let num = []

  for(let i=0; i< arrayOfWords.length; i++){
  let numberLength = arrayOfWords[i].length; //identify the length of each of the no i.e numberlength===arr[i].length
    num.push(numberLength);
    shortestWord = Math.min(...num); //put the num inside here them Math.max will sort out the shortest word

  }
  // console.log(max);
  return shortestWord
}  
console.log(findShort("myd name isdh bukola"))

/////////////////////
function makeNegative(num) {
  if (num < 0){
    return num
  } else {
      return -num
  
  }
  }
console.log(makeNegative(7))

  ///////////////////
  function removeChar(str){
    //You got this!
     return str.slice(1, -1)
   
   };
   console.log(removeChar('bolade'))

   ///////////////
   function invert(array) { //negative inverse
    let newArray = [];
      for(let i=0; i< array.length; i++){
        if (array[i] === 0){ 
          newArray.push(-0) //as 0x-1=0 but we want -0
        } else {
          let others = array[i] * -1;
          newArray.push(others)
  }
        }
     return newArray;
  }
   console.log(invert(['5', '3', '7']))
   
   //////////////////////////////////////
//////////NO EXAMPLE TO CONSOLE LOG////////
function positiveSum(arr) {
  let sum = 0;
for (i=0; i < arr.length; i++) {
 if (arr[i] > 0){
   sum += arr[i]
}
 }
return sum;
 
}
console.log(positiveSum([-2,2,3,4]))


//////////////??????
const reverseSeq = n => {
  let reversedArr = [];
 
 for (let i = n; i >= 1; i--) { // i=n becos it start from last
   reversedArr.push(i)
 }
 return reversedArr
};
console.log(reverseSeq([3,4,5]))


//////////////////////
function isDivisible(n, x, y) {
  if(n % x === 0 && n % y ===0){
    return true
    
  }else {
    return false
  }
}
console.log(isDivisible(15, 5,3))


////////////////////
function feast(beast, dish) {
  //your function here
    let allowed = beast[0] === dish[0] && beast[beast.length-1] === dish[dish.length- 1]
       return allowed                                                                  
  }
  console.log()

  /////////////////
  function bonusTime(salary, bonus) {
    // your code here
      if (bonus === true){
        return '£' + salary * 10;
        } else {
        return '£' + salary;
      }
    }
    console.log()


    //////////////////////
    function check(a,x){
      let output = a.includes(x)
      return output
     };
     console.log()

     /////////////
     function typeValidation(variable, type) {
      // (Your code should be here ;) 
      if (typeof variable === type){
        return true
      }else{
        return false
      }
    }
    console.log()

    
    
   /// ENTRY CHALLENGE
////////////////////RRRRRRRRRRRRRRRRRRRRRRRRR
//////////////1
function exclaimWord(word) {
  let newWord = word.toUpperCase()
  return newWord + '!'
}
console.log()



////////////////////2
// please complete this function...
function getFirstAndLast(array) {
  let newArray = [];
  for (let i=0; i< array.length; i++){
    if (array[i].length == array[0] ) {
      newArray.push(array[0])
    } if ( array[i].length == array.length-1){
            newArray.push(array.length-1)

    }
    return newArray
  }
}
console.log()


//////////////////////3
// please complete this function...
function createSentence(person) {
  return `Hello my name is ${person.name}, I am ${person.age} years old and I am a ${person.job}`
 }
 console.log()

 
 /////////////////////////4
 // please complete this function ...
function findTotalAge(people) {
  let totalAge = 0;
  let personAge;
  for (let i=0; i< people.length; i++){
    personAge = person[i].age
    totalAge += personAge
    people.length ++
  }
 return totalAge 
}
console.log()


///////////////////////5
function countChars (str, char) {
  // Write your code here
  let string = str.toString(); 

  let charCount = 0;
    for (let i=0; i< str.length; i++){
      if (string.charAt(i) == chart(i)
}
console.log()



/////////////////////6
// please complete this function ...
function allOscarWinners(films) {
  let results = films.filter(films => films.wonOscar == 'true')
  if(results == true){
return 'true'
}else {
  return 'false'}
}
console.log()
  
///////////////7
// please complete this function...
function gatherPets(people) {
  let results = []
  
 return results 
 }
 console.log()
 


