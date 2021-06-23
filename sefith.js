

 //////////////// 
// 1. Given a string, reverse each word in the string-sentence
function reverseString(str){
  //Using the split() function will turn our string into an array of characters
  return str.split("").reverse().join("");
}
console.log(reverseString("david is a good boy"))
console.log(reverseString("bukola"))
// or 
function reverseString(str){
  var arr = str.split("") 
  var reverseString = arr.reverse().join("");
  return reverseString
}

console.log(reverseString("bukola"))


//////////////////////
// 2. Create a for loop that iterates up to 100 while outputting "fizz" at multiples of 3, "buzz"
// at multiples of 5 and "fizzbuzz" at multiples of 3 and 5

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
        output.push(count);
    }
}
   
}
fizzBuzz()

	console.log(output);

///3.//////////////////////////factorialize
      function factorialize(num) {
        for (var factor = 1; num > 0; num--) {//initialise factor=1
          factor *= num;
        }return factor;
      }
      factorialize(5); 
  console.log( factorialize(5))


  ///4.///////////FIBONACCI SERIES 
  function fibonacci_series(n){ //count
    if(n===1){
      return [0,1]
    }else{
    var s = fibonacci_series(n-1) //s contains[0,1] + result of 2 to 8-1i.e 7(count 2 to 7)
    s.push(s[s.length-1] + s[s.length-2])
      return s
  }
}
console.log(fibonacci_series(8));

  

      // Challenge 2:
// Write a JavaScript function that accepts a string as a parameter and
// converts the first letter of each word of the string in upper case.

function capitaliseFirstLetter(str){
  var firstLetter = str.slice(0,1);
  var capitaliseFirstLetter = firstLetter.toUpperCase();
	// var firstLetter = str.slice(0,1).toUpperCase()
  var restOfStr = str.slice(1,str.length);
  restOfStr = restOfStr.toLowerCase();
  capitaliseFirstLetter = capitaliseFirstLetter + restOfStr;
  
  return capitaliseFirstLetter
}
console.log(capitaliseFirstLetter("bukola"));

    

// Challenge 3:?????
// ATM for coins
// You are designing an ATM and you want to output the coins as per the amount
// Let’s say e.g. the amount is 147, and let’s say the coins are 10, 5, 2 & 1
// then the output would be 14 of 10coins, 1 of 5coin and 1 of 2coin
// so as to minimize the amount of coins given

// the ATM as been set to:10coins=[0], 5coin[1], 2coin[2], 1coin[3]
    function amountTocoins(amount, coins) {
 if (amount === 0) {
    return [];
   } else{
     if (amount >= coins[0]) {
        left = (amount - coins[0]);
        return [coins[0]].concat(amountTocoins(left, coins) );
        } else{
         coins.shift();
         return amountTocoins(amount, coins);
        }
    }
} 
console.log(amountTocoins(147, [ 10, 5]));

  













