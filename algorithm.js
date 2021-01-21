Solutions
function findLongestWordLength(str) {
  var words = str.split(' ');
  var maxLength = 0;

  for (var i = 0; i < words.length; i++) {
    if (words[i].length > maxLength) {
      maxLength = words[i].length;
    }
  }

  return maxLength;
}
Code Explanation
Take the string and convert it into an array of words. Declare a variable to keep track of the maximum length and loop from 0 to the length of the array of words.

Then check for the longest word by comparing the current word to the previous one and storing the new longest word. At the end of the loop just return the number value of the variable maxLength.

xxxxxxxx
2
function convertToF(celsius) {
  // Only change code below this line
  var fahrenheit = celsius * (9 / 5) + 32;

  // Only change code above this line
  if (typeof fahrenheit !== "undefined") {
    return fahrenheit;
  } else {
    return "fahrenheit not defined";
  }
}

// Change the inputs below to test your code
convertToF(30);
Code Explanation
Declare the fahrenheit variable.
Make sure the proper order of arithmetic operations is followed by using parenthesis (()) when needed.

xxxxxxxxxxx
Hint 1
We need to take the string and reverse it, so if it originally reads ‘hello’, it will now read ‘olleh’. You can solve this challenge by creating a new string (initializing it to a blank string “”) and then iterating the string starting from the last character through the first character and the concatenating each character to the new string. After iterating through all the characters in the string, you return the new string.

Solutions
Solution 1 (Click to Show/Hide)
function reverseString(str) {
  for (var reversedStr = "", i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}
Code Explanation
Starting at the last character of the string passed to the function, you build a new string reversedStr from str.

During each iteration of the for loop, reversedStr gets concatenated with itself and the current character.

Finally, you return the final value of reversedStr.

Solution 2 (Click to Show/Hide)
function reverseString(str) {
  return str
    .split("")
    .reverse()
    .join("");
}
Code Explanation
Our goal is to take the input, str, and return it in reverse. Our first step is to split the string by characters using split(''). Notice that we don’t leave anything in between the single quotes, this tells the function to split the string by each character.

Using the split() function will turn our string into an array of characters, keep that in mind as we move forward.

Next we chain the reverse() function, which takes our array of characters and reverses them.

Finally, we chain join('') to put our characters back together into a string. Notice once again that we left no spaces in the argument for join, this makes sure that the array of characters is joined back together by each character.

xxxxxxxx
Solutions
Solution 1 (Click to Show/Hide)
function factorialize(num) {
  for (var product = 1; num > 0; num--) {
    product *= num;
  }
  return product;
}

factorialize(5);
Code Explanation
Since the return values for the function will always be greater than or equal to 1, product is initialized at one. For the case where the number is 0, the for loop condition will be false, but since product is initialized as 1, it will have the correct value when the return statement is executed.

For all numbers passed to the function which are greater than one, the simple for loop will decrement num by one each iteration and recalculate product down to the value 1.


Solution 3 (Click to Show/Hide)
function factorialize(num, factorial = 1) {
  if (num == 0) {
    return factorial;
  } else {
    return factorialize(num - 1, factorial * num);
  }
}

factorialize(5);
Code Explanation
In this solution, we use Tail Recursion 271 to optimize the the memory use.

In traditional head recursion, the typical model is that you perform your recursive calls first, and then you take the return value of the recursive call and calculate the result. In this manner, you don’t get the result of your calculation until you have returned from every recursive call.

In tail recursion, you perform your calculations first, and then you execute the recursive call, passing the results of your current step to the next recursive step. This results in the last statement being in the form of (return (recursive-function params)).

In this solution, with each evaluation of the recursive call, the factorial is updated. This is different from the head-recursive solution where all evaluation calculations are stored on the stack until the base case is reached.

xxxxxxxxxxxx
Solutions
Solution 1 (Click to Show/Hide)
(Procedural approach)

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
Code Explanation
Create a variable to store the results as an array.
Create an outer loop to iterate through the outer array.
Create a second variable to hold the largest number and initialise it with the first number. This must be outside an inner loop so it won’t be reassigned until we find a larger number.
Create said inner loop to work with the sub-arrays.
Check if the element of the sub array is larger than the currently stored largest number. If so, then update the number in the variable.
After the inner loop, save the largest number in the corresponding position inside of the results array.
And finally return said array.

xxxxxxxx
Solutions
Solution 1 (Click to Show/Hide)
(Declarative approach)
function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor

  return str.slice(str.length - target.length) === target;
}

confirmEnding("He has to give me a new name", "name");
Code Explanation
First we use the slice method copy the string.
In order to get the last characters in str equivalent to the target's length we use the slice method.
The first parameter inside the slice method is the starting index and the second parameter would be the ending index.
For example str.slice(10, 17) would return give me.
In this case we only include one parameter which it will copy everything from the starting index.
We substract the length of str and the length of target, that way, we shall get the last remaining characters equivalent to the target's length.
Finally we compare the return result of slice to target and check if they have the same characters.

xxxxxxxxxxx
Solutions
Solution 1 (Click to Show/Hide)
function repeatStringNumTimes(str, num) {
  var accumulatedStr = "";

  while (num > 0) {
    accumulatedStr += str;
    num--;
  }

  return accumulatedStr;
}
Code Explanation
Create an empty string variable to store the repeated word.
Use a while loop or for loop to repeat code as many times as needed according to num
Then we just have to add the string to the variable created on step one, and increase or decrease num depending on how you set the loop.
At the end of the loop, return the variable for the repeated word.

xxxxxx
Solutions
Solution 1 (Click to Show/Hide)
function truncateString(str, num) {
  // Clear out that junk in your trunk
  if (str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
}
Code Explanation
We start off with a simple if statement to determine one of two outcomes…
If our string length is greater than the num we want to truncate it, we return a slice of our string starting at character 0, and ending at num. We then append our '...' to the end of the string.
However, if above situation is not true, it means our string length is less than our truncation num. Therefore, we can just return the string.

xxxxxxxx
Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined.
function findElement(arr, func) {
  let num = 0;

  for (var i = 0; i < arr.length; i++) {
    num = arr[i];
    if (func(num)) {
      return num;
    }
  }

  return undefined;
}
Code Explanation
Challenge asks us to look through array. This is done using a for loop.
The num variable is being passed into the function, so we set it to each index in our array.
The pre-defined function already checks each number for us, so if it is “true”, we return that num.
If none of the numbers in the array pass the function’s test, we return undefined.

xxxxx
Solutions
Solution 1 (Click to Show/Hide)
function booWho(bool) {
  return typeof bool === "boolean";
}

// test here
booWho(null);
Code Explanation
Uses the operator typeof to check if the variable is a boolean. If it is, it will return true. Otherwise, if it is any other type it will return false.

xxxxxxxx
Solution 2 (Click to Show/Hide)
function titleCase(str) {
  var convertToArray = str.toLowerCase().split(" ");
  var result = convertToArray.map(function(val) {
    return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
  });
  return result.join(" ");
}

titleCase("I'm a little tea pot");
Code Explanation
We are making entire string lowercase and then converting it into array. Then we are using map function to replace the lowercase character with uppercase. Finally, we are returning the string using join method.

xxxxxxx
Solutions
Solution 1 (Click to Show/Hide)
function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!
  let localArray = arr2.slice();
  for (let i = 0; i < arr1.length; i++) {
    localArray.splice(n, 0, arr1[i]);
    n++;
  }
  return localArray;
}
Code Explanation
Our goal is to take all of the elements from arr1 and insert them into arr2 starting with index position n. At the same time we must ensurethat neither arr or arr2 have been mutated.

Using the slice() function we can create an exact replica of arr2 and assign the result of the operation to a variable, localArray.

Now that we have an array that we can mutate on, we can iterate through every item in the first array. For each item in the first array we can use the splice() function to insert the item into index n of localArray.

We increment the index n by one. This will ensure that every item from the arr1 is inserted into localArray in the proper index position.

Finally, we return the localArray and end the function.

xxxxxxxxxxxxxxxxxx
Solution 1 (Click to Show/Hide)
function bouncer(arr) {
  let newArray = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) newArray.push(arr[i]);
  }
  return newArray;
}
Code Explanation
We create a new empty array.
We use a for cycle to iterate over all elements of the provided array (arr).
We use the if statement to check if the current element is truthy 1.3k or falsy 1.5k.
If the element is truthy, we push it to the new array (newArray). This result in the new array (newArray) containing only truthy elements.
We return the new array (newArray).
Relevant Links
Boolean
Truthy value
Falsey values
Array.prototype.push
Solution 2 (Click to Show/Hide)
function bouncer(arr) {
  return arr.filter(Boolean);
}
Code Explanation
The Array.prototype.filter method expects a function that returns a Boolean value which takes a single argument and returns true for truthy 1.3k value or false for falsy 1.5k value. Hence we pass the built-in Boolean function.


xxxxxxxx
Solutions
Solution 1 (Click to Show/Hide)
function getIndexToIns(arr, num) {
  arr.sort(function(a, b) {
    return a - b;
  });

  for (var a = 0; a < arr.length; a++) {
    if (arr[a] >= num) return a;
  }

  return arr.length;
}
Code Explanation
First I sort the array using .sort(callbackFunction) to sort it by lowest to highest, from left to right.
Then I use a for loop to compare the items in the array starting from the smallest one. When an item on the array is greater than the number we are comparing against, then we return the index as an integer.
Relevant Links
parseInt() 366
Solution 2 (Click to Show/Hide)
function getIndexToIns(arr, num) {
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

getIndexToIns([40, 60], 50);
Code Explanation
I do not sort the arr input array
I run a for loop counting whenever the num input is bigger than an arr input number.
This number is equivalent to what num’s position would be in a sorted array.

xxxxxxxxx
Solutions
Solution 1 (Click to Show/Hide)
Procedural

function mutation(arr) {
  var test = arr[1].toLowerCase();
  var target = arr[0].toLowerCase();
  for (var i = 0; i < test.length; i++) {
    if (target.indexOf(test[i]) < 0) return false;
  }
  return true;
}
Code Explanation
First we make the two strings in the array lowercase. test will hold what we are looking for in target.
Then we loop through our test characters and if any of them is not found we return false.

If they are all found, the loop will finish without returning anything and we get to return true.

Relevant Links
String.toLowerCase() 118
For loops 148
Solution 2 (Click to Show/Hide)
Declarative

function mutation(arr) {
  return arr[1]
    .toLowerCase()
    .split("")
    .every(function(letter) {
      return arr[0].toLowerCase().indexOf(letter) != -1;
    });
}
Code Explanation
Grab the second string, lowercase and turn it into an array; then make sure every one of its letters is a part of the lowercased first string.

Every will basically give you letter by letter to compare, which we do by using indexOf on the first string. indexOf will give you -1 if the current letter is missing. We check that not to be the case, for if this happens even once every will be false.

xxxxxxxxxxx
Solutions
Solution 1 (Click to Show/Hide)
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
Code Explanation
Firstly, we create two empty arrays called temp and result, which we will eventually return.
Our for loop loops until a is equal to or more than the length of the array in our test.
Inside our loop, we push to temp using temp.push(arr[a]); if the remainder of a / size is not equal to size - 1.
Otherwise, we push to temp, push temp to the result variable and reset temp to an empty array.
Next, if temp isn’t an empty array, we push it to result.
Finally, we return the value of result.
Relevant Links
Array.push() 962
For Loops 142
Solution 2 (Click to Show/Hide)
function chunkArrayInGroups(arr, size) {
  // Break it up.
  var arr2 = [];
  for (var i = 0; i < arr.length; i += size) {
    arr2.push(arr.slice(i, i + size));
  }
  return arr2;
}
Code Explanation
First, we create an empty array arr2 where we will store our ‘chunks’.
The for loop starts at zero, increments by size each time through the loop, and stops when it reaches arr.length.
Note that this for loop does not loop through arr. Instead, we are using the loop to generate numbers we can use as indices to slice the array in the right locations.
Inside our loop, we create each chunk using arr.slice(i, i+size), and add this value to arr2 with arr2.push().
Finally, we return the value of arr2.
