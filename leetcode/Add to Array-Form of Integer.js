
/////////kolade explained
function check(a,b){
    ////////A -- ternenary
    // return a + b > 100
    //return a + b > 100 ? true : false
    
    ////////////B ---if/else
    if(a+b < 100){
        return "true"
    }
    else{
        return "false"
    }
}
/////////////C  ----arrow function
const check = (a,b) => a + b > 100

//1a.call the function-this will run the function but it doesnt show it on console.
check(9, 9) 
//1b.console log call-function
console.log(check(9, 9))

//2.store the call-function in result & console.log the result
var result = check(9, 9) 
console.log(result)

//////////////////////////

function hello() {
	return "hello edabit.com"
}
// or using arrow function
const hello = () => "hello edabit.com";
//////////////////////////////////////////////////////////
function addition( a, b ) {
    return a + b
  }
//   or 
const addition = (a, b) => a + b;

xxxxxxxx
const triArea = (base, height) => (base * height) / 2;

xxxxxxx
You are counting points for a basketball game, given the amount of 2-pointers scored and 3-pointers scored, 
find the final points for the team and return that value.
function points(twoPointers, threePointers) {
	finalPoints = twoPointers*2 + threePointers*3
	
	return finalPoints
}
//  using examples with answers
points(1, 1) ➞ 5

points(7, 5) ➞ 29

points(38, 8) ➞ 100
xxxxxxxxxxx
// questions
// For a non-negative integer X, the array-form of X is an array of its digits in left to right order.  For example, if X = 1231, then the array form is [1,2,3,1].
// Given the array-form A of a non-negative integer X, return the array-form of the integer X+K.

Example 1:
Input: A = [1,2,0,0], K = 34
Output: [1,2,3,4]
Explanation: 1200 + 34 = 1234

/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
var addToArrayForm = function(A, K) {
    if (K <= 0) return A;
    let carry = 0, sum = 0, len = A.length;
    let arr = numToArr(K);
    if (arr.length > A.length) { // ensures that A.length >= arr.length always
        for (i = 0; i < arr.length - len; i++) {
            A.unshift(0);
        }
    }
    
    for (i = A.length-1; i >= 0; i--) {
        if (arr.length > 0) sum = A[i] + arr.pop() + carry;
        else sum = A[i] + carry;
        
        if (sum < 10) {
            A[i] = sum;
            carry = 0;
        }
        else {
            carry = 1;
            A[i] = sum % 10;
        }
    }    
    
    if (carry > 0) A.unshift(carry);
    return A;
};
    
var numToArr = function(num) {
    let divisor = 10, divisor2 = 1, arr = [];
    while (num > 0) {
        let x = num % divisor;
        num -= x;
        x = x / divisor2;
        arr.unshift(x);
        divisor *= 10;
        divisor2 *= 10;
    }
    return arr;
}


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