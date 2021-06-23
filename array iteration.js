// Array.forEach()
// The forEach() method calls a function (a callback function) once for each array element.

var txt = "";
var numbers = [45, 4, 9, 16, 25];
numbers.forEach(myFunction);

function myFunction(value, index, array) {
  txt = txt + value + "<br>";
}

///////////////////
// Array.map()
// The map() method creates a new array by performing a function on each array element.
// The map() method does not execute the function for array elements without values.
// The map() method does not change the original array.

// This example multiplies each array value by 2:
var numbers1 = [45, 4, 9, 16, 25];
var numbers2 = numbers1.map(myFunction);

function myFunction(value, index, array) {
  return value * 2;
}

//////////////////
// Array.filter()
// The filter() method creates a new array with array elements that passes a test.

// This example creates a new array from elements with a value larger than 18:

Example
var numbers = [45, 4, 9, 16, 25];
var over18 = numbers.filter(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}

///////////////
// Array.reduce()
// The reduce() method runs a function on each array element to produce (reduce it to) a single value.
// The reduce() method works from left-to-right in the array. See also reduceRight().
// The reduce() method does not reduce the original array.

// This example finds the sum of all numbers in an array:
// Example
var numbers1 = [45, 4, 9, 16, 25];
var sum = numbers1.reduce(myFunction);

function myFunction(total, value, index, array) {
  return total + value;//The total (the initial value / previously returned value)

}  

///b
// The reduce() method can accept an initial value:
var numbers1 = [45, 4, 9, 16, 25];
var sum = numbers1.reduce(myFunction, 100);// The reduce() method can accept an initial value:

function myFunction(total, value) {
  return total + value;//The total (the initial value / previously returned value)

}

// ans The sum is 199

///////////////
// Array.every()
// The every() method check if all array values pass a test.

// This example check if all array values are larger than 18:
var numbers = [45, 4, 9, 16, 25];
var allOver18 = numbers.every(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}

//////////////
// Array.some()
// The some() method check if some array values pass a test.

// This example check if some array values are larger than 18:

// Example
var numbers = [45, 4, 9, 16, 25];
var someOver18 = numbers.some(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}

/////////////
// Array.indexOf()
// The indexOf() method searches an array for an element value and returns its position.
// Note: The first item has position 0, the second item has position 1, and so on.

// Search an array for the item "Apple":
var fruits = ["Apple", "Orange", "Apple", "Mango"];
var a = fruits.indexOf("Apple");
//or 
// array.indexOf(item, start)
// item	Required-The item to search for.
// start -Optional. Where to start the search. Negative values will start at the given position counting from the end, and search to the end.
// Array.indexOf() returns -1 if the item is not found.

// If the item is present more than once, it returns the position of the first occurrence.


//////////////
// Array.lastIndexOf()
// Array.lastIndexOf() is the same as Array.indexOf(), but returns the position of the last occurrence of the specified element.

Search an array for the item "Apple":

var fruits = ["Apple", "Orange", "Apple", "Mango"];
var a = fruits.lastIndexOf("Apple");


/////////////
// Array.find()
// The find() method returns the value of the first array element that passes a test function.

// This example finds (returns the value of) the first element that is larger than 18:

Example
var numbers = [4, 9, 16, 25, 29];
var first = numbers.find(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}

//////////////
// Array.findIndex()
// The findIndex() method returns the index of the first array element that passes a test function.

// This example finds the index of the first element that is larger than 18:

Example
var numbers = [4, 9, 16, 25, 29];
var first = numbers.findIndex(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}