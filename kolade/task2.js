//  A.  CONVERT CELSIUS TO FAHRENHEIT
function convertCelsiusToFahr(celsius) {
  
    if (Array.isArray(celsius)) {
      return  `${celsius} is not a valid number but a/an Array's type.`
    }
    else if (typeof celsius === 'object'){
      return  `${celsius} is not a valid number but a/an Object's type.`
    }
    
    else {
      var fahrenheit = celsius * (9 / 5) + 32;
      return fahrenheit;
    }
    
   }
  
  // convertCelsiusToFahr(0);
  // convertCelsiusToFahr("0");
  // convertCelsiusToFahr([1,2,3]);
  // convertCelsiusToFahr({temp: 0});
  
  console.log(convertCelsiusToFahr(0)) //should return `32`
  // console.log(convertCelsiusToFahr("0")) //should return `32`
  // console.log(convertCelsiusToFahr([1,2,3])) //should return `[1,2,3] is not a valid number but a/an array.`
  // console.log(convertCelsiusToFahr({temp: 0})) //should return `{temp: 0} is not a valid number but a/an object.`
  
  
  /////////////////
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


  //B CONVERT FAHRENHEIT TO CELSIUS
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




   
