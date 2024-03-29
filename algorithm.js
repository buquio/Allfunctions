
function findLongestWordLength(sentence) { //find longest word in a sentence
  var words = sentence.split(' '); // Take the sentence and convert it into an array of words. 
  // console.log (words)
  var maxLength = " ";  // Declare a variable to keep track of the maximum

  for (var i = 0; i < words.length; i++) {  // loop from 0 to the length of the array of words.
    if (words[i].length > maxLength) {
      maxLength = words[i].length; //return the number value of the word with the maxLength.
    }
  }

  return maxLength;
}

findLongestWordLength("my name is bukola") 
console.log(findLongestWordLength("my name is bukola")); //ans-6


////?????????find longest word in a string of sentence.(SCA)
///this only returns the number of the longest word not the word
///not a good answer or not the required answer 
function findLongestWordLength(str) {
  let arr = str.split(" ");
  // console.log(arr)
  let num = [];
  let max;
  for (let i=0; i<arr.length; i++) {
    let numberLength = arr[i].length; //u check the length of each of the no i.e numberlength
    num.push(numberLength);  // into the lenght of each word into an array of num
    max = Math.max(...num); ////put the num inside here them Math.max will pick out the shortest word
    // max = Math.min(...num); //put the num inside here them Math.max will pick out the shortest word

  }
  // console.log(max);
  return max;
}

// findLongestWordLength("my name is bukola")
console.log(findLongestWordLength("my name is bukola"))


///////////?????????
function convertToF(celsius) {
  var fahrenheit = celsius * (9 / 5) + 32;

  if (typeof celsius !== Number) {
    return "celsius is not a number";
  } else {
      return fahrenheit;
    
  }
}

// convertToF("42");
// console.log(convertToF("42"))
convertToF(42);
console.log(convertToF(42))



////////////////////////
//take the string and reverse it, so if it originally reads ‘hello’, it will now read ‘olleh’. 
function reverseString(str) {
  //first split it into an array
  return str.split("").reverse().join(""); //split() function turn string into an array of characters
}
reverseString("bukola")
console.log(reverseString("bukola"))

//////////////////////////////📌💯✔
function factorialize(num) {
  //5! = 5x4x3x2x1 = 120
  //starting point is product which s equal to 1 always
  for (var product = 1; num > 0; num--) { //product is constant,while num is changing
    product *= num; // 1*5=5, 1*4 =4etc
  }
  return product;
}

factorialize(5); //5x4x3x2x1
console.log(factorialize(5))



/////////////////////////////❗❌❓
function largestOfFour(arr) {
  var results = [];
  for (var n = 0; n < arr.length; n++) {
    var largestNumber = arr[n][0];
    for (var sb = 1; sb < arr[n].length; sb++) {
      if (arr[n][sb] > largestNumber) {
        largestNumber = arr[n][sb];
      }
    }

    results[n] = largestNumber;
  }

  return results;
}
largestOfFour(arr) //?? example of array
console.log(largestOfFour(arr))
// Code Explanation
// Create a variable to store the results as an array.
// Create an outer loop to iterate through the outer array.
// Create a 2nd variable 2 hold d largest number & initialise it with d first number. This must be outside an inner loop so it won’t be reassigned until we find a larger number.
// Create said inner loop to work with the sub-arrays.
// Check if the element of the sub array is larger than the currently stored largest number. If so, then update the number in the variable.
// After the inner loop, save the largest number in the corresponding position inside of the results array.
// And finally return said array.



////////////////////////////
function confirmEnding(str, target) { //to confirm true or false

  return str.slice(str.length - target.length) === target;
}

confirmEnding("He has to give me a new name", "name");
console.log(confirmEnding("He has to give me a new name", "name"))

// Code Explanation
// First we use the slice method copy the string.
// In order to get the last characters in str slice to target and check if they have the same characters.


//////////////////////////////
function repeatStringNumTimes(str, num) {
  var accumulatedStr = "";

  while (num > 0) {
    accumulatedStr += str;
    num--;
  }

  return accumulatedStr;
}
repeatStringNumTimes('bukola', 4)
console.log(repeatStringNumTimes('bukola', 4))
// Code Explanation
// Create an empty string variable to store the repeated word.
// Use a while loop or for loop to repeat code as many times as needed according to num
// Then we just have to add the string to the variable created on step one, and increase or decrease num depending on how you set the loop.
// At the end of the loop, return the variable for the repeated word.

//b
function repeatStringNumTimes(str, num) {
  var accumulatedStr = "";

  for (var i= num; num > 0; num--) {
    accumulatedStr += str;
  }

  return accumulatedStr;
}
//   repeatStringNumTimes('bukola', 4)
console.log(repeatStringNumTimes('bukola', 7))


/////////////////////////
function truncateString(str, num) {
  // Clear out that junk in your trunk
  if (str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
}
console.log(truncateString('bukola', 3))


///////////////////❗❌❓


///////////
function booWho(bool) {
  return typeof bool === "boolean";
}

booWho(null);
console.log(booWho(null))
// Code Explanation
// Uses the operator typeof to check if the variable is a boolean. If it is, it will return true. Otherwise, if it is any other type it will return false.


////to make the every first letter word in a sentence an upppercase
function titleCase(sentence) {
  var convertToArray = sentence.toLowerCase().split(" ");
  console.log(convertToArray)
  var result = convertToArray.map(function(arr) { //arr=each array
    return arr.replace(arr.charAt(0), arr.charAt(0).toUpperCase());
  });
  return result.join(" "); //joins it and gives it an appropriate space
}
titleCase("I'm a little tea pot");
console.log(titleCase("I'm a little tea pot"))
// Code Explanation
// first we make entire string lowercase and then converting it into array. 
// Then use map function to replace the lowercase character with uppercase. Finally, we are returning the string using join method.


////////////////PAGE2////////////////////////////////////////////////////////////❗❌❓
// Our goal is to take all of the elements from arr1 and insert them into arr2 starting with index position n. 
//At the same time we must ensure that neither arr1 or arr2 have been mutated.
function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!
  let localArray = arr2.slice();
  for (let i = 0; i < arr1.length; i++) {
    localArray.splice(n, 0, arr1[i]);
    n++;
  }
  return localArray;
}

frankenSplice([1,2], ['its', 'alive'], 3) //??
console.log(frankenSplice([1,2], ['its', 'alive'], 3))

// Code Explanation
// Our goal is to take all of the elements from arr1 and insert them into arr2 starting with index position n. At the same time we must ensurethat neither arr or arr2 have been mutated.
// Using the slice() function we can create an exact replica of arr2 and assign the result of the operation to a variable, localArray.
// Now that we have an array that we can mutate on, we can iterate through every item in the first array. For each item in the first array we can use the splice() function to insert the item into index n of localArray.
// We increment the index n by one. This will ensure that every item from the arr1 is inserted into localArray in the proper index position.
// Finally, we return the localArray and end the function.


////////////////////❗❌❓
function bouncer(arr) {
  let newArray = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === true){ 
      return newArray.push(arr[i]); //??
  }
  return newArray;
}
bouncer([1,2,4]) //?
console.log(bouncer([1,2,4]))//?
// Code Explanation
// We create a new empty array.
// for loop to iterate over all elements of the provided array (arr).
// We use the if statement to check if the current element is truthy 1.3k or falsy 1.5k.
// If the element is truthy, we push it to the new array (newArray). 
// This result in the new array (newArray) containing only truthy elements.
// We return the new array (newArray).


//////////2
function bouncer(arr) {
  return arr.filter(Boolean);
}
// Code Explanation
// The Array.prototype.filter method expects a function that returns a Boolean value which takes a single argument 
// and returns true for truthy 1.3k value or false for falsy 1.5k value. Hence we pass the built-in Boolean function.

//////////////////
function getIndexToIns(arr, num) {
  arr.sort(function(a, b) { //numerical order
    return a - b;
  });

  for (var a = 0; a < arr.length; a++) {
    if (arr[a] >= num) 
    return a;
  }
  return arr.length; //index of the number
}
console.log(getIndexToIns([3, 2, 7, 9], 7))
// Code Explanation
// First I sort the array using .sort(callbackFunction) to sort it by lowest to highest, from left to right.
// Then I use a for loop to compare the items in the array starting from the smallest one. 
//When an item on the array is greater than the number we are comparing against,then we return the index as an integer.


//////////////////????
function countSmaller(arr, num) {
  // Find my place in this sorted array.
  var times = arr.length; // runs the for loop once for each thing in the array
  var count = 0;
  for (var i = 0; i < times; i++) {
    if (num > arr[i]) {
      count++;
    }
  } // counts how many array numbers are smaller than num
  return count; // the above equals num's position in a sorted array
}

console.log(countSmaller([40, 60], 50))
// Code Explanation
// I do not sort the arr input array
// I run a for loop counting whenever the num input is bigger than an arr input number.
// This number is equivalent to what num’s position would be in a sorted array.


//////////////////////?????
function mutation(arr) {
  var test = arr[1].toLowerCase();
  var target = arr[0].toLowerCase();
  for (var i = 0; i < test.length; i++) {
    if (target.indexOf(test[i]) < 0) 
    return false;
  }
  return true;
}
console.log(mutation(['john', 'victor', 'jane', 'sade']))

// Code Explanation
// First we make the two strings in the array lowercase. test will hold what we are looking for in target.
// Then we loop through our test characters and if any of them is not found we return false.
// If they are all found, the loop will finish without returning anything and we get to return true.


/////////////////////?????????????
function mutation(arr) {
  return arr[1]
    .toLowerCase()
    .split("")
    .every(function(letter) {
      return arr[0].toLowerCase().indexOf(letter) != -1;
    });
}
// Code Explanation
// Grab the second string, lowercase and turn it into an array; then make sure every one of its letters is a part of the lowercased first string.
// Every will basically give you letter by letter to compare, which we do by using indexOf on the first string. indexOf will give you -1 if the current letter is missing. We check that not to be the case, for if this happens even once every will be false.


//////////////////??????????????
function chunkArrayInGroups(arr, size) {
  var temp = [];
  var result = [];

  for (var a = 0; a < arr.length; a++) {
    if (a % size !== size - 1) temp.push(arr[a]);
    else {
      temp.push(arr[a]);
      result.push(temp);
      temp = [];
    }
  }

  if (temp.length !== 0) result.push(temp);
  return result;
}
// Code Explanation
// Firstly, we create two empty arrays called temp and result, which we will eventually return.
// Our for loop loops until a is equal to or more than the length of the array in our test.
// Inside our loop, we push to temp using temp.push(arr[a]); if the remainder of a / size is not equal to size - 1.
// Otherwise, we push to temp, push temp to the result variable and reset temp to an empty array.
// Next, if temp isn’t an empty array, we push it to result.
// Finally, we return the value of result.


//////////////////////////??????????????????/
function chunkArrayInGroups(arr, size) {
  // Break it up.
  var arr2 = [];
  for (var i = 0; i < arr.length; i += size) {
    arr2.push(arr.slice(i, i + size));
  }
  return arr2;
}
// Code Explanation
// First, we create an empty array arr2 where we will store our ‘chunks’.
// The for loop starts at zero, increments by size each time through the loop, and stops when it reaches arr.length.
// Note that this for loop does not loop through arr. Instead, we are using the loop to generate numbers we can use as indices to slice the array in the right locations.
// Inside our loop, we create each chunk using arr.slice(i, i+size), and add this value to arr2 with arr2.push().
// Finally, we return the value of arr2.
