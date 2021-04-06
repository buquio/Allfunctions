// Challenge 2:
// Write a JavaScript function that accepts a string as a parameter and
// converts the first letter of each word of the string in upper case.

function capitaliseFirstLetter(str){

  var firstLetter = str.slice(0,1);
  var capitaliseFirstLetter = firstLetter.toUpperCase();
  var restOfStr = str.slice(1,str.length);
  restOfStr = restOfStr.toLowerCase();
  capitaliseFirstLetter = capitaliseFirstLetter + restOfStr;
  

  return capitaliseFirstLetter
}
console.log(capitaliseFirstLetter("bukola"));

//     function capitaliseFirstLetter(name){
//     var name = prompt("what is your name");
//     var firstLetter = name.slice(0,1);
//     var capitaliseFirstLetter = firstLetter.toUpperCase;
//     var restOfName = name.slice(1,name.length);
//     restOfName = restOfName.toLowerCase;
//     capitaliseFirstLetter = capitaliseFirstLetter + restOfName;
//     alert(capitaliseFirstLetter);

//     console.log(capitaliseFirstLetter(bukola))
// }
  

// Challenge 3:
// ATM for coins
// You are designing an ATM and you want to output the coins as per the
// amount
// Let’s say e.g. the amount is 147, and let’s say the coins are 10, 5, 2 & 1
// then the output would be 14 coins of 10, 1 coin of 5 and 1 coin of 2
// We want to minimize the amount of coins given

    function amountTocoins(amount, coins) {
 if (amount === 0) 
  {
     return [];
   } 
 else
   {
     if (amount >= coins[0]) 
       {
        left = (amount - coins[0]);
        return [coins[0]].concat( amountTocoins(left, coins) );
        } 
      else
        {
         coins.shift();
         return amountTocoins(amount, coins);
        }
    }
} 
console.log(amountTocoins(147, [ 10, 5]));

  



