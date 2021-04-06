// 1. Given a string, reverse each word in the sentence
// For example: Welcome to this Javascript Guide!
// should be become: emocleW ot siht tpircsavaJ !ediuG


function reverseString(str){
  return str.split("").reverse().join("");
}

console.log(reverseString("bukola"))
// 2. Create a for loop that iterates up to 100 while outputting "fizz" at multiples of 3, "buzz"
// at multiples of 5 and "fizzbuzz" at multiples of 3 and 5

var output= [];

function fizzBuzz(){
    for(var count=1;count<=100;count++){

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
    console.log(output);
    // or 
   document.body.prepend(output)

}
// or 
    fizzBuzz()



    ////////////////
    function reverseString(str) {
        return str.split("").reverse().join(""); //Using the split() function will turn our string into an array of characters
      }
      
      
      //////////////////////////////
      function factorialize(num) {
        for (var product = 1; num > 0; num--) {
          product *= num;
        }
        return product;
      }
      
      factorialize(5);
      
      
      