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
  
  
  