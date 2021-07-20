var output= [];
var multipeOfTwo = [];
var multipeOfThree = [];
var multipeOfFour = [];


function checkYuGiOh(n){
    // for(var count=1; count<=100; count++){
      if (typeof n !== 'number') {
    // if( typeof n !== "number" || typeof n !== /^\d+$/.test(n)  ) {
         return( `invalid parameter: "${n} is not valid"`)
      }

    for(var count=1; count<=n; count++){
        if(count%2 ===0){
            // output.push(count);
            multipeOfTwo.push(count);
        }
           if (count%3 ===0 ){
                // output.push(count);
                multipeOfThree.push(count);
            }     
           if (count%4 ===0){
            //   output.push(count);
              multipeOfFour.push(count)
            }
    }
    let result = `multipeOfTwo: ${multipeOfTwo}
                  multipeOfThree: ${multipeOfThree}
                  multipeOfFour: ${multipeOfFour}`
    return result;

   
}
// checkYuGiOh(10)
// checkYuGiOh("5")
// checkYuGiOh("fizzbuzz is meh")

console.log(checkYuGiOh(10))
// console.log(checkYuGiOh("0"));
// console.log(checkYuGiOh("5"));
// console.log(checkYuGiOh("kolade kehinde"))

// console.log(output);
