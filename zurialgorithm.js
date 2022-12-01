
////////////
// 2. Write a function named "checkYuGiOh" that takes a number, n, as an argument, 
// creates an array of numbers from 1 to n and replaces factors of 2, 3, and 5 with
//  "yu", "gi" and "oh", logs the resulting array to the console then returns the resulting array.

// Note:
// - for strings that have multiple factors, use hyphens as separators
// e.g 10 === "yu-oh", 30 === "yu-gi-oh"
// - perform checks on your input and return `invalid parameter: ${parameter}` 
// if an invalid parameter - i.e. a string that can't be converted to a number or another data type - is passed. 
// Use the following cases as guides:

// - checkYuGiOh(10) should return [1, "yu", "gi", "yu", "oh", "yu-gi", 7, "yu", "gi", "yu-oh"]
// - checkYuGiOh("5") should return [1, "yu", "gi", "yu", "oh"]
// - checkYuGiOh("fizzbuzz is meh") should return `invalid parameter: "fizzbuzz is meh"`
 
var output= [];

function checkYuGiOh(n){
//if its a string or a string that can't be converted to a number
     if (typeof n === 'string'){
        if(/^\d+$/.test(n)){  //if its a string with digit inside it e.g "5"
            DoCheck(n)
            return output;
        }
        return( `invalid parameter: "${n} is not valid"`)
    }
//other data types
    if (typeof n !== 'number' ){  
        return( `invalid parameter: "${n} is not valid"`)
     }
//if its a valid no
     DoCheck(n)
     return output;
}

function DoCheck(n){
    for(var count=1; count<=n; count++){
        
        if (count%2 ===0 & count%3 ===0 & count%5 ===0){
            output.push("yu-gi-oh");
            }
            else if(count%2 ===0 & count%3 ===0){
                output.push("yu-gi");
            }
            else if(count%2 ===0 & count%5 ===0){
                output.push("yu-oh");
            }
            else if(count%2 ===0){
                output.push("yu");
            }
            else if(count%3 ===0){
                output.push("gi");
            }
            else if(count%5 ===0){
                output.push("oh");
            }
            else {
                output.push(count);
            }
    
}
}
// checkYuGiOh(10)
// checkYuGiOh("5")
// checkYuGiOh("fizzbuzz is meh")

// console.log(checkYuGiOh(10)) //should return [1, "yu", "gi", "yu", "oh", "yu-gi", 7, "yu", "gi", "yu-oh"]
// console.log(checkYuGiOh("5")) //should return [1, "yu", "gi", "yu", "oh"]
console.log(checkYuGiOh("fizzbuzz is meh")) //should return `invalid parameter: "fizzbuzz is meh"`





// Task Title: Frontend Algorithms Task (Frontend Task 4)
// This task is to give you a feel of basic JavaScript algorithms.

// 1. Write a function named "convertFahrToCelsius" that takes a single parameter and converts it to celsius.

// Note:
// - Round up your answers to 4 decimal places (hint: use the toFixed method)
// - C = (F - 32) x 5/9; (e.g 0deg F = -17.7778 deg C)
// - if the parameter passed is not a number or a string that can be converted to a valid number, return a string with the format below:
//     `${parameter} is not a valid number but a/an ${parameter's type}.`
// You can use the following cases as guides:

// - convertFahrToCelsius(0) should return `-17.7778`
// - convertFahrToCelsius("0") should return `-17.7778`
// - convertFahrToCelsius([1,2,3]) should return `[1,2,3] is not a valid number but a/an array.`
// - convertFahrToCelsius({temp: 0}) should return `{"temp": 0} is not a valid number but a/an object.`


  // CONVERT FAHRENHEIT TO CELSIUS
  function convertFahrToCelsius(fahrenheit) {
    var celsius =(fahrenheit - 32) * 5/9 
     if (Array.isArray(celsius)) {
      return  `${fahrenheit} is not a valid number but a/an Array's of ${typeof fahrenheit}  type .`
    }
    else if (typeof fahrenheit === 'object'){
      return  `${fahrenheit} is not a valid number but a/an Object's of ${typeof fahrenheit}  type .`
    }
    else {
      // return celsius; 
      return celsius.toFixed(4);
  
    }
  }
  // convertFahrToCelsius(0);
  // convertFahrToCelsius("0");
  // convertFahrToCelsius([1,2,3]);
  // convertFahrToCelsius({temp: 0})
  
  console.log(convertFahrToCelsius(0))
  console.log(convertFahrToCelsius("0"))
  console.log(convertFahrToCelsius([1,2,3]))  
  console.log(convertFahrToCelsius({temp: 0}))
  
  
  
  
     
  



////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Function that converts Fahrenheit to Celsius
 * @formula     C = (F - 32) x 5/9
 * @precision   4 decimal places
 */
 const convertFahrToCelsius = (param) => {
    let result, calc, error;
  
    // check if parameter is valid. if not then show error message
    if (
      isNaN(param) ||
      JSON.stringify(param) == '[]' ||
      param == null ||
      JSON.stringify(param) == '""' ||
      param === true ||
      param === false
    ) {
      if (Array.isArray(param)) {
        error = `${JSON.stringify(param)} is not a valid number but a/an array.`;
      } else if (typeof param === 'object') {
        error = `${JSON.stringify(param)} is not a valid number but a/an object.`;
      } else if (typeof param === 'string') {
        param == '' ? (param = '""') : param;
        error = `${param} is not a valid number but a/an string.`;
      } else if (param === true || param === false) {
        error = `${param} is not a valid number but a/an boolean.`;
      }
  
      return error;
    } else {
      // carry out conversion once parameter is valid
      calc = (param - 32) * (5 / 9);
      result = Number(calc.toFixed(4));
      return result;
    }
  };
  
  /**
   *  checkYuGiOh
   *  takes a number n, as an argument
   *  creates an array of numbers from 1 to n
   *  replace multiples of 2, 3, and 5 with "yu", "gi" and "oh"
   *  then return the resulting array.
   *  numbers that have multiple factors, use hyphens as separators
   */
  const checkYuGiOh = (n) => {
    let i = 1;
    let nums = [];
  
    // check if parameter is valid
    if (
      isNaN(n) ||
      JSON.stringify(n) == '[]' ||
      n == null ||
      JSON.stringify(n) == '""' ||
      n === true ||
      n === false
    ) {
      return `invalid parameter: ${JSON.stringify(n)}`;
    } else {
      // if parameter is valid then create an array of numbers from 1 to n
      while (i <= n) {
        nums.push(i);
        i++;
      }
    }
  
    // loop through the numbers and replace multiples of 2, 3, and 5 with "yu", "gi" and "oh"
    nums.forEach((num, index) => {
      if (num % 2 == 0) {
        nums[index] = 'yu';
      }
      if (num % 3 == 0) {
        nums[index] = 'gi';
      }
      if (num % 5 == 0) {
        nums[index] = 'oh';
      }
      if (num % 2 == 0 && num % 3 == 0) {
        nums[index] = 'yu-gi';
      }
      if (num % 2 == 0 && num % 5 == 0) {
        nums[index] = 'yu-oh';
      }
      if (num % 2 == 0 && num % 3 == 0 && num % 5 == 0) {
        nums[index] = 'yu-gi-oh';
      }
    });
  
    return nums;
  };



  ///////
  const convertFahrToCelsius = (val) => {
    let value = Number(val);
    let vale = val;
    let para = typeof value;
    let parameter = typeof val;
    if (parameter === "number" && !isNaN(value)) {
      const f = ((value - 32) * 5) / 9;
      return f.toFixed(4);
    } else if (isNaN(value)) {
      if (Array.isArray(val) || Array.length == 0) {
        vale = `[${val}]`;
        Array.isArray(vale);
        if (true) parameter = "array";
      } else if (parameter === "object") {
        vale = JSON.stringify(val);
      }
      return `${vale} is not a valid number but a/an ${parameter}.`;
    } else {
      return `"${val}" is not a valid number but a/an ${parameter}.`;
    }
  };
  
  console.log(convertFahrToCelsius(0));
  console.log(convertFahrToCelsius("0"));
  console.log(convertFahrToCelsius(""));
  console.log(convertFahrToCelsius([1, 2, 3]));
  console.log(convertFahrToCelsius({ twmo: 0 }));
  console.log(convertFahrToCelsius(false));
  
  // checkYuGiOh
  const checkYuGiOh = (n) => {
    let no = Number(n);
    if (isNaN(no)) {
      no = n;
      parameter = typeof no;
      if (Array.isArray(no)) {
        no = `[${n}]`;
        Array.isArray(no);
      } else if (parameter === "object") {
        no = JSON.stringify(no);
      }
      return `invalid parameter: "${no}"`;
    } else {
      let arr = new Array();
      for (let i = 1; i <= n; i++) {
        if (i % 2 === 0 && i % 3 === 0 && i % 5 === 0) {
          arr.push("yu-gi-oh");
        } else if (i % 2 === 0 && i % 3 === 0) {
          arr.push("yu-gi");
        } else if (i % 2 === 0 && i % 5 === 0) {
          arr.push("yu-oh");
        } else if (i % 3 === 0 && i % 5 === 0) {
          arr.push("gi-oh");
        } else if (i % 2 === 0) {
          arr.push("yu");
        } else if (i % 3 === 0) {
          arr.push("gi");
        } else if (i % 5 === 0) {
          arr.push("oh");
        } else {
          arr.push(String(i));
        }
      }
      return arr;
    }
  };
  
  console.log(checkYuGiOh(10));