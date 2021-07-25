// Day 0: Hello, World! , Data Types
// Task 1 - Hello, World!
// A greeting function is provided for you in the editor below. It has one parameter, parameterVariable. Perform the following tasks to complete this challenge:
// Use console.log() to print Hello, World! on a new line in the console, which is also known as stdout or standard output. The code for this portion of the task is already provided in the editor.
// Use console.log() to print the contents of parameterVariable (i.e., the argument passed to main).
// ​See original HackerRank problem​

function greeting(parameterVariable) {
  console.log("Hello, World!");
  console.log(parameterVariable);
}
​

// Task 2 - Data Types
// Variables named firstInteger, firstDecimal, and firstString are declared for you in the editor below & function performOperation. 
//You must use the + operator to perform the following sequence of operations:
//1. Convert secondInteger to an integer (Number type), then sum it with firstInteger and print the result on a new line using console.log.
//2. Convert secondDecimal to a floating-point number (Number type), then sum it with firstDecimal and print the result on a new line using console.log.
//3. Print the concatenation of firstString and secondString on a new line using console.log. Note that firstString must be printed first.
// ​See original HackerRank problem​

function performOperation(secondInteger, secondDecimal, secondString) {
  const firstInteger = 4;
  const firstDecimal = 4.0;
  const firstString = "HackerRank ";
​//1.
  console.log(firstInteger + Number(secondInteger));
​//2.
  const sndDecimal= Number(secondDecimal).toFixed(2);
  const fstDecimal = Number(firstDecimal).toFixed(2);
  const result = Number(fstDecimal) + Number(sndDecimal);
  console.log(result);
//3.
  console.log(firstString + secondString);
}
performOperation(2.5, 3.25, "the best")

// Day 1: Arithmetic Operators, Functions, Let and Const
// Task 1 - Arithmetic Operators
// Complete the following functions in the editor below:
// getArea(length, width): Calculate and return the area of a rectangle having sides length and width.
// getPerimeter(length, width): Calculate and return the perimeter of a rectangle having sides length and width.
// ​See original HackerRank problem​

function getArea(length, width) {
  let area;
  area = length * width;
  return area;
}
console.log(getArea(5, 3))

///
function getPerimeter(length, width) {
  let perimeter;
  perimeter = 2 * (length + width);
  return perimeter;
}
console.log(getPerimeter(5, 3))

​

// Task 2 - Functions
// Implement a function named factorial that has one parameter: an integer, n. It must return the value of n! (i.e., n factorial).
// ​See original HackerRank problem​

function factorial(n) {
  return n ? n * factorial(n - 1) : 1;
};
​
console.log(factorial(5))

// Task 3 - Let and Const ❗❌❓
// Declare a constant variable, PI, and assign it the value Math.PI. You will not pass this challenge unless the variable is declared as a constant and named PI (uppercase).
// Read a number, r, denoting the radius of a circle from stdin.
// Use PI  and r to calculate the area and perimeter of a circle having radius r .
// Print area as the first line of output and print perimeter as the second line of output.
// ​See original HackerRank problem​

function main() {
    let r = readLine();
    const PI = Math.PI;
    console.log(PI * r * r);
    console.log(2 * PI * r);
}

// Day 2: Conditional Statements: If-Else, Switch, and Loops ❗❌❓
// Task 1 - Conditional Statements: If-Else
// Complete the getGrade(score) function in the editor. It has one parameter: an integer, score , denoting the number of points Julia earned on an exam. 
//It must return the letter corresponding to her grade according to the following rules:
// If 25 < score <= 30, then grade = A
// If 20 < score <= 25, then grade = B
// If 15 < score <= 20, then grade = C
// If 10 < score <= 15, then grade = D
// If 5 < score <= 10, then grade = E
// If 0 < score <= 5, then grade = F
// ​See original HackerRank problem​

function getGrade(score) {
  if (score > 25) {
    return "A";
  } else if (score > 20) {
    return "B";
  } else if (score > 20) {
    return "B";
  } else if (score > 15) {
    return "C";
  } else if (score > 10) {
    return "D";
  } else if (score > 5) {
    return "E";
  } else {
    return "F";
  }
}
​console.log(getGrade(55))


// Task 2 - Conditional Statements: Switch
// Complete the getLetter(s) function in the editor. It has one parameter: a string, s, consisting of lowercase English alphabetic letters (i.e., a through z).
// It must return A, B, C, or D depending on the following criteria:
// If the first character in string s is in the set {a, e, i, o, u}, then return A.
// If the first character in string s is in the set {b, c, d, f, g}, then return B.
// If the first character in string s is in the set {h, j, k, l, m}, then return C.
// If the first character in string s is in the set {n, p, q, r, s, t, v, w, x, y, z}, then return D.
// Hint: You can get the letter at some index i in s using the syntax s[i] or s.charAt(i).
function getLetter(s) {
  let letter;
  // Write your code here
  switch (true) {
    case "aeiou".includes(s[0]):
      letter = "A";
      break;
    case "bcdefg".includes(s[0]):
      letter = "B";
      break;
    case "hijklm".includes(s[0]):
      letter = "C";
      break;
    case "nopqrstuvwxyz".includes(s[0]):
      letter = "D";
      break;
  }
  return letter;
}
console.log(getLetter("hijk"))
​

// Task 3 - Loops
// Complete the vowelsAndConsonants function in the editor below. It has one parameter, a string, s, consisting of lowercase English alphabetic letters (i.e., a through z). The function must do the following:
// First, print each vowel in s on a new line. The English vowels are a, e, i, o, and u, and each vowel must be printed in the same order as it appeared in s.
// Second, print each consonant (i.e., non-vowel) in s on a new line in the same order as it appeared in s.
// ​See original HackerRank problem​
function vowelsAndConsonants(s) {
  const vowels = ["a", "e", "i", "o", "u"];
  const string = s.split("");
  let vowelArr = [];
  let consonantArr = [];
  for (let i = 0; i < string.length; i++) {
    vowels.includes(string[i]) //if any letter in vowels is includede in the letter of d supplied string
      ? vowelArr.push(string[i]) //u need to console log the all the result
      : consonantArr.push(string[i]);
  }
  for (let i = 0; i < vowelArr.length; i++) {
    console.log(vowelArr[i]);
  }
  for (let i = 0; i < consonantArr.length; i++) {
    console.log(consonantArr[i]);
  }
}
console.log(vowelsAndConsonants(bukola))


// Day 3: Arrays, Try, Catch, and Finally, Throw
// Task 1 - Arrays  ❗❌❓
// Complete the getSecondLargest function in the editor below. It has one parameter: an array, nums, of n numbers. The function must find and return the second largest number in nums.
// ​See original HackerRank problem​

function getSecondLargest(nums) {
  let firstLargestNum = 0;
  let secondLargestNum = 0;
​
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > firstLargestNum) {
      secondLargestNum = firstLargestNum;
      firstLargestNum = nums[i];
    }
    if (nums[i] > secondLargestNum && nums[i] < firstLargestNum) {
      secondLargestNum = nums[i];
    }
  }
  return secondLargestNum;
}
​console.log(getSecondLargest([2, 12, 34, 23, 7]))  //❗❌❓

// Task 2 - Try, Catch, and Finally
// Complete the reverseString function; it has one parameter, s. You must perform the following actions:
// Try to reverse string s using the split, reverse, and join methods.
// If an exception is thrown, catch it and print the contents of the exception's message on a new line.
// Print s on a new line. If no exception was thrown, then this should be the reversed string; if an exception was thrown, this should be the original string.
function reverseString(s) {
  if (typeof s === "string") {
    console.log(
      s
        .split("")
        .reverse()
        .join("")
    );
  } else {
    console.log("s.split is not a function" + "\n" + s);
  }
}
console.log(reverseString("bukola"))

// Task 3 - Throw
// Complete the isPositive function below. It has one integer parameter, a . If the value of a is positive, it must return the string YES. Otherwise, it must throw an Error according to the following rules:
// If a is 0, throw an Error with message = Zero Error.
// If a is negative, throw an Error with message = Negative Error.
// ​See original HackerRank problem​
function isPositive(a) {
  if (a === 0) {
    throw Error("Zero Error");
  }
  if (a < 0) {
    throw Error("Negative Error");
  }
  return "YES";
}
console.log(isPositive(a))
// Day 4: Create a Rectangle Object, Count Objects, Classes
// Task 1 - Create a Rectangle Object
// Complete the function in the editor. It has two parameters: a and b. It must return an object modeling a rectangle that has the following properties:
// length: This value is equal to a
// width: This value is equal to b
// perimeter: This value is equal to 2*(a + b) 
// area: This value is equal to a * b
// ​See original HackerRank problem​
function Rectangle(a, b) {
  this.length = a;
  this.width = b;
  this.perimeter = 2 * (a + b);
  this.area = a * b;
}
​

// Task 2 - Count Objects /❗❌❓
// Complete the function in the editor. It has one parameter: an array, a, of objects. Each object in the array has two integer properties denoted by x and y. 
//The function must return a count of all such objects o in array a that satisfy o.x == o.y .
// ​See original HackerRank problem​
function getCount(objects) {
  let pairCount = 0;
  for (let i = 0; i < objects.length; i++) {
    if (objects[i].x === objects[i].y) {
      pairCount++;
    }
  }
  return pairCount;
}
​
console.log(getCount([{one:first},{two:second}])) ///❗❌❓

// Task 3 - Classes❗❌❓
// Create a Polygon class that has the following properties:
// A constructor that takes an array of integer values describing the lengths of the polygon's sides.
// A perimeter() method that returns the polygon's perimeter.
// Locked code in the editor tests the Polygon constructor and the perimeter method.
function Polygon(shape) { //an array [2,3,5]
  this.type = shape;
  this.perimeter = getPerimeter;
}
​
function getPerimeter() {
  return this.type.reduce((a, b) => a + b);
}
console.log(Polygon([2,3,5]))❗❌❓
// console.log(Polygon(5))

// Day 5: Inheritance, Template Literals, Arrow Functions
// Task 1 - Inheritance
// We provide the implementation for a Rectangle class in the editor. Perform the following tasks:
// Add an area method to Rectangle's prototype.
// Create a Square class that satisfies the following:
// It is a subclass of Rectangle.
// It contains a constructor and no other methods.
// It can use the Rectangle class' area method to print the area of a Square object.
// ​See original HackerRank problem​
Rectangle.prototype.area = function() {
  return this.w * this.h;
};
​
class Square extends Rectangle {
  constructor(s) {
    super(s);
    this.h = s;
    this.w = s;
  }
}
​

// Task 2 - Template Literals❗❌❓
// The code in the editor has a tagged template literal that passes the area and perimeter of a rectangle to a tag function named sides. Recall that the first argument of a tag function is an array of string literals from the template, and the subsequent values are the template's respective expression values.
// Complete the function in the editor so that it does the following:
// Finds the initial values of s1 and s2 by plugging the area and perimeter values into the formula: 
// where A is the rectangle's area and P is its perimeter.
// 2. Creates an array consisting of s1 and s2 and sorts it in ascending order.
// 3. Returns the sorted array.
function sides(literals, ...expressions) {
  const [area, perimeter] = expressions; // ES6 destructuring
  const s1 = (perimeter + Math.sqrt(Math.pow(perimeter, 2) - 16 * area)) / 4;
  const s2 = (perimeter - Math.sqrt(Math.pow(perimeter, 2) - 16 * area)) / 4;
  return [s1, s2].sort();
}
​console.log(sides(literals, ...expressions)) ❗❌❓

// Task 3 - Arrow Functions
// Complete the function in the editor. It has one parameter: an array, nums. It must iterate through the array performing one of the following actions on each element:
// If the element is even, multiply the element by 2.
// If the element is odd, multiply the element by 3.
// The function must then return the modified array.
function modifyArray(nums) {
  let newArr = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      newArr.push(nums[i] * 2);
    } else {
      newArr.push(nums[i] * 3);
    }
  }
  return newArr;
}
console.log(modifyArray([2, 3, 4]))


// Day 6: Bitwise Operators, JavaScript Dates  ❗❌❓
// Task 1 - Bitwise Operators
// We define S to be a sequence of distinct sequential integers from 1  to n; in other words, S = {1, 2, 3, ..., n}. We want to know the maximum bitwise AND value of any two integers, a and b (where a < b), in sequence S that is also less than a given integer, k.
// Complete the function in the editor so that given n and k, it returns the maximum a & b < k.
// Note: The & symbol represents the bitwise AND operator.
function getMaxLessThanK(n, k) {
  let max = 0;
  for (let i = 1; i <= n; i++) {
    for (let j = i + 1; j <= n; j++) {
      (i & j) > max && (i & j) < k ? (max = i & j) : max;
    }
  }
  return max;
}
​

// Task 2 - JavaScript Dates  ❗❌❓ day not correct thursday instead of sunday
// Given a date string, dateString , in the format MM/DD/YYYY, find and return the day name for that date. Each day name must be one of the following strings: Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, or Saturday. For example, the day name for the date 12/07/2016 is Wednesday.
// getUTCDay() method returns the day of the week in the specified date according to universal time, where 0 represents Sunday.
function getDayName(dateString) {
  let dayName;
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  dayName = days[new Date(dateString).getUTCDay()];
  return dayName;
}
console.log(getDayName(07/25/2021))

// Day 7: Regular Expressions I, II, III ❗❌❓
// Task 1 - Regular Expressions I
// Complete the function in the editor below by returning a RegExp object, re, that matches any string s that begins and ends with the same vowel. 
//Recall that the English vowels are a, e, i, o, and u.
function regexVar() {
  // Declare a RegExp object variable named 're'
  // It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
  let re = /^([aeiou]).+\1$/;
  return re;
}
​console.log(regexVar("adeBukola"))
​

// Task 2 - Regular Expressions II ❗❌❓
// Complete the function in the editor below by returning a RegExp object, re, that matches any string s satisfying both of the following conditions:
// String s starts with the prefix Mr., Mrs., Ms., Dr., or Er.
// The remainder of string s (i.e., the rest of the string after the prefix) consists of one or more upper and/or lowercase English alphabetic letters (i.e., [a-z] and [A-Z]).
function regexVar() {
  // Declare a RegExp object variable named 're'
  // It must match a string that starts with 'Mr.', 'Mrs.', 'Ms.', 'Dr.', or 'Er.',
  // followed by one or more letters.
  let re = /^(Mr|Mrs|Ms|Dr|Er)(\.)([a-zA-Z])+$/;
  return re;
}
​console.log(regexVar("Mrs.Bukola"))

// Task 3 - Regular Expressions III ❗❌❓
// Complete the function in the editor below by returning a RegExp object, re, that matches every integer in some string s.
function regexVar() {
  // Declare a RegExp object variable named 're'
  // It must match ALL occurrences of numbers in a string.
  let re = /\d+/g;
  return re;
}

// Day 8: Create a Button and Buttons Container
// Task 1 - Create a Button
// Complete the code in the editor so that it creates a clickable button satisfying the following properties:
// The button's id is btn.
// The button's initial text label is 0. After each click, the button must increment by 1. Recall that the button's text label is the JS object's innerHTML property.
// <!-- HTML -->
<button id="btn" onclick="increment()">0</button>
/* CSS */
#btn {
  width: 96px;
  height: 48px;
  font-size: 24px;
}
// JS
function increment() {
  btn.innerHTML++;
}
// ​...........
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
//     <style>
//         #btn {
//             width: 96px;
//             height: 48px;
//             font-size: 24px;
//             }
//     </style>
// </head>
// <body>
// {/* <button id="btn" onclick="increment()">0</button> */}
// <button id="btn">0</button>

// <script>
//     const button= document.querySelector("#btn");
//                 button.addEventListener('click', function(){ 
//                     increment()
//                 });
//     function increment() {
//   console.log(btn.innerHTML)
//   btn.innerHTML++;
// }
// ​
// </script>
    
// </body>
// </html>


// Task 2 - Buttons Container
// We want to create nine buttons enclosed in a div, laid out so they form a 3 x 3 grid. 
//Each button has a distinct label from 1 to 9, and the labels on the outer buttons must rotate in the clockwise direction each time we click the middle button.
{/* <!-- HTML --> */}
<div id="btns">
    <button id="btn1">1</button>
    <button id="btn2">2</button>
    <button id="btn3">3</button>
    <button id="btn4">4</button>
    <button id="btn5">5</button>
    <button id="btn6">6</button>
    <button id="btn7">7</button>
    <button id="btn8">8</button>
    <button id="btn9">9</button>
</div>
{/* /* CSS */ */}
#btns {
  width: 75%;
}
​
button {
  width: 30%;
  height: 48px;
  font-size: 24px;
}
{/* // JS */}
const ids = [1, 2, 3, 6, 9, 8, 7, 4]; // start positions ids in clockwise order
let nums = [1, 2, 3, 6, 9, 8, 7, 4]; // rotating in clockwise order
let btn5 = document.getElementById("btn5");
​
btn5.onclick = function() {
  nums.unshift(nums.pop());
  for (i = 0; i <= 7; i++) {
    document.getElementById("btn" + ids[i]).innerHTML = nums[i];
  }
};


// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
//     <style>
//         #btns {
//            width: 75%;
//         } 
//         button {
//             width: 30%;
//             height: 48px;
//             font-size: 24px;
//         } ​
//     </style>
// </head>
// <body>
//     <div id="btns">
//         <button id="btn1">1</button>
//         <button id="btn2">2</button>
//         <button id="btn3">3</button>
//         <button id="btn4">4</button>
//         <button id="btn5">5</button>
//         <button id="btn6">6</button>
//         <button id="btn7">7</button>
//         <button id="btn8">8</button>
//         <button id="btn9">9</button>
//     </div>
//     <script>
//         const ids = [1, 2, 3, 6, 9, 8, 7, 4]; // start positions ids in clockwise order
// let nums = [1, 2, 3, 6, 9, 8, 7, 4]; // rotating in clockwise order
// let btn5 = document.getElementById("btn5");
// ​
// btn5.onclick = function() {
//   nums.unshift(nums.pop());
//   for (i = 0; i <= 7; i++) {
//     document.getElementById("btn" + ids[i]).innerHTML = nums[i];
//   }
// };

//         </script>
// </body>
// </html>


// Day 9: Binary Calculator
// Task - Binary Calculator
// Implement a simple calculator that performs the following operations on binary numbers: addition, subtraction, multiplication, and division. Note that division operation must be integer division only; for example, 1001 / 100 = 10, 1110 / 101 = 10, and 101 / 1 = 101.
// <!-- HTML -->
<input id="res"></input>
<div id="btns">
    <button id="btn0">0</button>
    <button id="btn1">1</button>
    <button id="btnClr">C</button>
    <button id="btnEql">=</button>
    <button id="btnSum">+</button>
    <button id="btnSub">-</button>
    <button id="btnMul">*</button>
    <button id="btnDiv">/</button>
</div>
/* CSS */
body {
    width: 33%;
}
​
#res {
    background-color: light-gray;
    border: solid;
    height: 48px;
    font-size: 20px;
}
​
button {
    width: 25%;
    height: 36px;
    font-size: 18px;
    margin: 0px;
    float: left;
}
​
#btn0, #btn1 {
    background-color: lightgreen;
    color: brown;
}
​
#btnClr, #btnEql {
    background-color: darkgreen;
    color: white;
}
​
#btnSum, #btnSub, #btnMul, #btnDiv {
    background-color: black;
    color: red;
}
// Work in progress! 
​
// JS
const ids = [1, 2, 3, 6, 9, 8, 7, 4]; // start position ids in clockwise order
let nums = [1, 2, 3, 6, 9, 8, 7, 4]; // rotate in clockwise order
let btn5 = document.getElementById("btn5");
​
btn5.onclick = function() {
    nums.unshift(nums.pop());
    for (i = 0; i <= 7; i++) {
        document.getElementById("btn" + ids[i]).innerHTML = nums[i];
    }
};

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
//     <style>
//         body {
//     width: 33%;
// }
// ​
// #res {
//     background-color: light-gray;
//     border: solid;
//     height: 48px;
//     font-size: 20px;
// }
// ​
// button {
//     width: 25%;
//     height: 36px;
//     font-size: 18px;
//     margin: 0px;
//     float: left;
// }
// ​
// #btn0, #btn1 {
//     background-color: lightgreen;
//     color: brown;
// }
// ​
// #btnClr, #btnEql {
//     background-color: darkgreen;
//     color: white;
// }
// ​
// #btnSum, #btnSub, #btnMul, #btnDiv {
//     background-color: black;
//     color: red;
// }
//     </style>
// </head>
// <body>
//     <input id="res"></input>
// <div id="btns">
//     <button id="btn0">0</button>
//     <button id="btn1">1</button>
//     <button id="btnClr">C</button>
//     <button id="btnEql">=</button>
//     <button id="btnSum">+</button>
//     <button id="btnSub">-</button>
//     <button id="btnMul">*</button>
//     <button id="btnDiv">/</button>
// </div>
// <script>
//     const ids = [1, 2, 3, 6, 9, 8, 7, 4]; // start position ids in clockwise order
// let nums = [1, 2, 3, 6, 9, 8, 7, 4]; // rotate in clockwise order
// let btn5 = document.getElementById("btn5");
// ​
// btn5.onclick = function() {
//     nums.unshift(nums.pop());
//     for (i = 0; i <= 7; i++) {
//         document.getElementById("btn" + ids[i]).innerHTML = nums[i];
//     }
// };
// </script>
// </body>
// </html>
