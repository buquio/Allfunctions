
/////////////////////////////////////
Question
// Given an array of integers nums &an integer target, return indices of the two numbers such that they add up to target.
//e.g Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].

var twoSum = function(nums, target) {
    //object for storing value and their index
    const obj = {};
    const len = nums.length;
    for( let i=0; i< len; i++ ){
        //if target - current value in array exist in obj then that's what we need
        if(target - nums[i] in obj ){
            return [ obj[ target - nums[i] ], i ];
        }
        //if target - current value doesn't exist in obj then push the value in obj
        obj[ nums[i] ] = i;
    }
};
console.log(twoSum([2,7,11,15], 9))

//////////
// REVERSE AN INTERGER NOT MORE THEN 31 INDEX
//   Given a signed 32-bit integer x, return x with its digits reversed. 
function reverse (x) {
    const number = Math.abs(x).toString().split('').reverse().join('');

    if (number > Math.pow(2, 31) - 1) {
        return 0
    }
    return x < 0 ? -number : number;
};

var result = reverse(4532)
console.log(result)


//////////////Given an integer x, return true if x is palindrome integer.

// An integer is a palindrome when it reads the same backward as forward. 
// For example, 121 is palindrome while 123 is not.
var isPalindrome = function(x) {
    let str1 = x.toString();
    let str2 = x.toString().split("").reverse().join("");
    
    if(str1 === str2) return true;
    
    return false;
};
console.log(isPalindrome(2332))


// Roman to Integer
// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
 //A  ❗❌❓
let dict = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000};
    let ans = 0;
    for(let i = 0; i < s.length; i++) {
        if(dict[s[i]] < dict[s[i+1]]) {
            ans = ans + (dict[s[i+1]] -dict[s[i]]);
            i++;
        }
        else{
            ans += dict[s[i]];    
        }
    }
    return ans;

    // or B ❗❌❓
    const roman = {'I':1,'V':5,'X':10,'L':50,'C':100,'D':500,'M':1000}
var romanToInt = function(S) {
    let ans = 0
    for (let i = S.length-1; ~i; i--) {
        let num = roman[S.charAt(i)]
        if (4 * num < ans) ans -= num
        else ans += num
    }
    return ans
};
console.log(romanToInt(XL))

  /////////////////////////////
  function pow(x, n) {
    let result = 1; //initialise result with 1
  
    // multiply result n times in the loop
    for (let i = 0; i < n; i++) { 
      result *= x; //return result=result*x i.e new result
    }
    return result;
  }
//   alert( pow(2, 3) ); 
  console.log( pow(2, 3) ); 


  ////or
  function powOf(a, b) {
	return Math.pow(a,b);
}
console.log(powOf(4, 2))

  
