
/////////kolade 

 ///A -- ternenary
function check(a,b){
    return a + b > 100

check(9, 9)   //1a.call the function-this will run the function but it doesnt show it on console.

///B
function check(a,b){
    return a + b > 100 ? true : false
console.log(check(9, 9))   //1b.console log call-function
   
    ///C ---if/else
function check(a,b){

    if(a+b < 100){
        return "true"
    }
    else{
        return "false"
    }
}
var result = check(9, 9) //2.store the call-function in result & console.log the result
console.log(result)

///D  ----arrow function
function check(a,b){
const check = (a,b) => a + b > 100
return check

//////////////////////////
function hello() {
	return "hello edabit.com"
}
// or using arrow function
const hello = () => "hello edabit.com";


////////////////////////
function addition( a, b ) {
    return a + b
  }
//   or 
const addition = (a, b) => a + b;

///////////////////
const triArea = (base, height) => (base * height) / 2;

///////////////////////
// You are counting points for a basketball game, given the amount of 2-pointers scored and 3-pointers scored, 
// find the final points for the team and return that value.
function points(twoPointers, threePointers) {
	finalPoints = twoPointers*2 + threePointers*3
	
	return finalPoints
}
//  using examples with answers
points(38, 8) ➞ 100


//////////////////////
// For a non-negative integer X, the array-form of X is an array of its digits in left to right order.  
// For example, if X = 1231, then the array form is [1,2,3,1].
// Given the array-form A of a non-negative integer X, return the array-form of the integer X+K.

Example 1:
Input: A = [1,2,0,0], K = 34
Output: [1,2,3,4]
Explanation: 1200 + 34 = 1234

// solution2
var addToArrayForm = function(arr, K) {
    let res = [];
    for(let i = arr.length - 1; i >= 0; i--){
         res.push((arr[i] + K) % 10);
        K = ~~((arr[i] + K) / 10);
    }
    while(K > 0){
        res.push(K % 10);
        K = ~~(K / 10);
    }
    // reverse the array
    res.reverse();
    return res;
};