
function pow(x, n) {
    let result = 1; //initialise result with 1
  
    // multiply result by x n times in the loop
    for (let i = 0; i < n; i++) { 
      result *= x;  //return x
                    //return result*=x 
                    //return result=result*x i.e new result
                    //return result    
    }
    return result;
  }
  alert( pow(2, 3) ); // ans 8
  //////////////////////////////////////
  question
  Given a signed 32-bit integer x, return x with its digits reversed. 
  If reversing x causes the value to go outside the signed 32-bit 
  integer range [-231, 231 - 1],then return 0.
  var reverse = function(x) {
      const number = Math.abs(x).toString().split('').reverse().join('');
  
      if (number > Math.pow(2, 31) - 1) {
          return 0
      }
  
      return x < 0 ? -number : number;
  };
  console.log(reverse(3459))
  