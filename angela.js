
//////////////❗❌❓
function myFunction(str) {
    var arr = str.split(" ");
    var text = "";
    for (var i = 0; i < arr.length; i++) {
      return text += arr[i] + "<br>"; //   "\n"
    }
    }
    console.log (myFunction("Hello"))
    // ans
    // H
    // e
    // l 
    // l
    // o
    
    
    ///////////////
    //to display the first array element, after a string split.
    function myFunction() {
        var str = "a,b,c,d,e,f"; 
        var arr = str.split(","); //splitting a string turns it to an array
        //   return arr  
          return arr[0]
        }
        console.log (myFunction("abcdef"))
    
    ///////////
    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    var text = "<ul>"; //openeing tag
    for (var i = 0; i < fruits.length; i++) {
      text += "<li>" + fruits[i] + "</li>";
    }
    text += "</ul>"; //closing tag
    
    console.log(fruits)
    // console.log(text)
    
    // xxxxxx using .foreach 
    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    var text = "<ul>";
    fruits.forEach(myFunction);
    text += "</ul>";
    
    function myFunction(value) {
      text += "<li>" + value + "</li>";
    }
    console.log(fruits)
    // console.log(text)


///////
let total = 0;
let numArray = [10, 20, 30, 40, 50, 60, 70, 80, 90];
for (let i = 0; i < numArray.length; i++) {
    total += numArray[i];
}
console.log(total)


//xxx using reduce
const numbers = [1, 2, 3, 4, 5, 6];
const doubledNumbers = numbers.reduce((acc, num) => {
  acc.push(num * 2);
  return acc;}, []);
console.log('doubled numbers', doubledNumbers);
console.log('numbers', numbers);

/////////////
const numbers = [1, 2, 3, 4, 5, 6];
const greaterNumbers = numbers.reduce((acc, num) => {
  if (num > 3) {
    acc.push(num);
  }  
  return acc;}, []);
console.log(greaterNumbers);
ans:[4, 5, 6]

////////////
const monthlyExpenses = {
    food: 400,
    rent: 1700,
    insurance: 550,
    internet: 49,
    phone: 95  
  };
  
  const monthlyTotal = Object.values(monthlyExpenses).reduce(
      (acc, expense) => acc + expense, 0
  );
  console.log(monthlyTotal);
  


// 1a
// this will run in developer console in snippet
// NOTE: THIS WILL RUN IN TERMINAL USING node test.js  BECOS ITS a javascript statement   -->
// also remember it will cannot display alert in terminal -->

var guestList= ["angela", "jack" ,"pan" ,"james","lara" ,"jason"];
var guestName= prompt("what is your name?");

if(guestList.includes(guestName)){
    alert("welcome"); //u can only see this inside console snippet
    console.log("welcome");
}else{
    alert("sorry, maybe next time!!") //u can only see this inside console snippet
    console.log("sorry, maybe next time!!")
};


//1b
//xxxxx insert it inside html & a function
//  NOTE: THIS WILL RUN IN LIVE SERVER OR BROWSER BECOS ITS HTML 

/* <html>
<head>
</head>
<body>
    <label> guest name </label>
    <input type="text" value="" placeholder="enter guest name here">
    <br><br>
    <button onclick="getGuestName">verify guest name</button>
    
    <script> 
var guestList= ["angela", "jack" ,"pan" ,"james", "lara" ,"jason"];
function getGuestName() {
    var guestName= document.querySelector("[input]").text
    
    if(guestList.includes(guestName)){
    alert("welcome");
}
else{
    alert("sorry, maybe next time!!")
};
  
} 
</script>
</body>
<html> */



// 2 
var output= [];
var count= 1;

function fizzBuzz(){
    output.push(count);
    count++;
    console.log(output)
}
fizzBuzz()

ans:[1,1,1,1]


    ///3
    var output= [];

function fizzBuzz(){
    for(var count=1; count<=100; count++){

    if (count%3 ===0 & count%5 ===0){
     output.push("fizzBuzz");
    }
    else if(count%3 ===0){
        output.push("Fizz");
    }
    else if(count%5 ===0){
        output.push("Buzz");
    }
    else {
        output.push("count");
    }
}

}
       fizzBuzz()
    console.log(output);


    // 4a Random selection of who is paying ❗❌❓
    var guestList= ["angela" ,"ben", "jenny", "michal" ,"chloe"]

function whosPaying(guestList){
	var numberOfPeople= guestList.length;
	var randomPersonPosition= Math.random() * numberOfPeople; //radomposition in decimal
	 randomPersonPosition = Math.floor(Math.random() * numberOfPeople) + 1; //radomposition in whole number
    //or
     // var randomPerson= guestList[Math.floor(randomPersonPosition)]; //radomposition in decimal+whole number
     console.log(Math.floor(randomPersonPosition) + " - " + Math.ceil(randomPersonPosition) + " - " + randomPersonPosition)

	var randomPerson= guestList[randomPersonPosition] 
	// return randomPerson + " is going to buy lunch today!"
	return `${randomPerson}  is going to buy lunch today!`

} 
console.log(whosPaying(guestList))


    

    // 5 Fibonacci series
    // xxx analysis
    // n= number of item in the Array
    // number of item=0, 1, 2, 3
    // f(n)= 0, 1, 3, 5
    // xxx starting from 1
    // if n= 1 output[0]
    // if n= 2 output[0, 1]
    // if n= 3 output[add last 2 values]
    // if n= length of no output[yes] or output [No]
 
    // solutionA
    function fibonacciGenerator (n) {
        var output= [];
        if (n===1) {
            output= [0];
        }
        else if (n===2) {
            output= [0,1];
        }
    else {
        output=[0,1];
    
    for (var i = 2; i < n; i++) {
        output.push(output[output.length-2] + output[output.length-1]);
    }
        }
        return output;
    }
        output= fibonacciGenerator(5);
        console.log(output)
    
    // NOTE:to run this function, copy & paste to Repl and click run
    // ans:[0,1,1,2,3]



    // solutionB
    function  fibonacci_series (n){
	if(n===1){
      return[0,1];
    }else{ 
    var s= fibonacci_series(n-1);
	s.push(s[s.length -1]+ s[s.length-2]);
	return s;
}
};
console.log(fibonacci_series(8));


/////////////
function countDown (startingNumber, step) { //function name + parameters needed
    let countFromNum = startingNumber + step;//general formular
    return function decrease() {//to return decrease function
        countFromNum -= step;//formular for decrease function
        return countFromNum;//result for countDown function
    }
}
const countingDown = countDown(20,5);//calling countDown function and storing it.

console.log(countingDown()); //logging it to console
console.log(countingDown());

//////////////FOR LOOP & FOR OF
const names = ['Karl', 'John', 'Steve'];

// looping over names using both for & for of
for (let i = 0; i < names.length; i++) {
    // console.log(names[i]);
}
// B. FOR OR
for (const name of names) {
    // console.log(name);
}


const people = [{ name: 'Karl', location: 'UK' }, { name: 'Steve', location: 'US' }];
// looping through an array of objects using both for and for of
for (let i = 0; i < people.length; i++) {
    // console.log(people[i].name);
    // console.log(people[i].location);
}


// B. FOR OR
for (const person of people) {
    console.log(person.name);
    console.log(person.location);
}


// 1
var tweet= prompt("compose your tweet:");
var tweetCount= tweet.length;
alert ("you have written" + tweetCount + "Characters, you have" + (140 - tweetCount) + "characters remaining");

// 2
var tweet=prompt("compose your tweet");
var tweetUnder140 = tweet.slice(0,140);
alert(tweetUnder140);

// 3
function multipleOfFive (num){
    const baseNumber = 5;
    const result = baseNumber * Number(num);
    console.log(result);
}
   console.log(multipleOfFive(3))


// 4 
var dayAge =prompt("what is your dog's age")
var dogHumanAge= (dayAge-2) * 4 + 21;
alert( "your dog is" + dogHumanAge + "years old in human years");

// 5 
var name= prompt("what is your name");// create a variable that stores the name a users enters via prompt
var firstChar= name.slice(0,1);//isolate the first char/letter
var upperCaseFirstChar= firstChar.toUpperCase();//turn the first char to uppercase

var restOfName= name.slice(1, name.length);//isolate the rest of the name
restOfName= restOfName.toLowerCase();//change the rest of the name to lowercase

var capitalisedName= upperCaseFirstChar + restOfName;//concatenate the first char with the rest of name.
alert("hello, " + capitalisedName);

// 6 
function getMilk(money){ //if a boottle is 1.5
    var numberOfBottles  = Math.floor(money/1.5);
    console.log("Buy" + numberOfBottles + "bottles of milk");
    return money%1.5 //which equals the remaing change
}
    // getMilk(5)
// or 
    var change= getMilk(5);
    console.log(change);

    // 7 RemainingLifeInWeeks before age 120
    function RemainingLifeInWeeks(age){
        var yearsRemaining= 120-age;
        var months= yearsRemaining *12;
        var weeks= yearsRemaining *52;
        var days= yearsRemaining *365;

        console.log("You have" + days + "days" + weeks + "weeks" + months + "months left");
    }
   // 8
   function bmiCalculator(weight,height){
    var bmi= weight/(height*height); //or var bmi= weight/Math.power(height*2);
    return bmi;
   }
    var bmi= bmiCalculator(65, 108);
    console.log(bmi)


// 9 
prompt("what is your name");
prompt("what is the other person's name");

var LoveScore= Math.random()*100;
LoveScore= Math.floor(LoveScore)+1;
alert("Your love score" + LoveScore + "%");

// 10
function isleap (year){
    if(year%4 === 0){ 
      if(year%100 === 0){
          if(year%400 === 0){
             return "leap year";}
              else{
                return "not leap year";}
                   else{
                     return "leap year";}
                     else{
                       return "not leap year";}
        };

    };
};









    

