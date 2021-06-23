
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
        if( target - nums[i] in obj ){
            return [ obj[ target - nums[i] ], i ];
        }
        //if target - current value doesn't exist in obj then push the value in obj
        obj[ nums[i] ] = i;
    }
};

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
    // or 
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

// or 
/**
 * Hardcoding paired values might be considered bad or anything, 
 * but it might be easier to read and understand.
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    /**
    * A map of all possible roman number combinations. 
    * Note there's no need to put keys inside quotes.
    */
    const map = {
        I: 1,
        IV: 4,
        IX: 9,
        V: 5,
        X: 10,
        XL: 40,
        XC: 90,
        L: 50,
        C: 100,
        CD: 400,
        CM: 900,
        D: 500,
        M: 1000
    }
    
    /**
    * We'll parse string from left to right, so the starting value is 0.
    */
    let num = 0; 
    for (let i = 0; i < s.length; i++) {       
        /**
        * Current roman symbol.
        * You can be fine without this variable using s[i] instead of it, 
        * but such code is tough to read for others or even you after a while.
        */
        const current = s[i];
        
        /**
        * Current roman symbol pair if it's possible to get one from the remaining string. 
        * If the roman number string has only one symbol or we're at the end of it, set it to
        * an empty string, so the following if statement fails because there's no number with 
        * the empty key inside the map
        */
        const pair = s[i + 1] ? current + s[i + 1] : "";   
        
        /**
        * If the map contains a number linked to the current pair, we add its value to the num.
        * Note how we also increment the i because we processed a pair, 
        * so we should skip the next symbol
        */        
        if (map[pair]) {
            num += map[pair];
            i++;
        } else {
            /**
            * If there's no paired value in the map, we look for value 
            * linked to the current symbol as standalone.
            */
            num += map[current]
        }
    }
    
    return num;
};
  /////////////////////////////
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
