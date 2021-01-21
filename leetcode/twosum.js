// question 
Write three functions to calculate the bitwise AND, bitwise OR and bitwise XOR of two numbers.
From the bitwise representation of numbers, we can calculate the bitwise AND, bitwise OR and bitwise XOR. Using the example above:
bitwiseAND(6, 23) ➞ 00000110
bitwiseOR(6, 23) ➞ 00010111
bitwiseXOR(6, 23) ➞ 00010001
///////pls teste not sure

function bitwiseAND(num1, num2)
return num1 & num2

function bitwiseOR(num1, num2)
return num1 | num2

function bitwiseXOR(num1, num2)
return num1 ^ num2

function bitwiseOperator(num1, num2, operator)
return operator (num1, num2)

CALLING THE FUNCTION 
bitwiseOperator(6,23, bitwiseOR) // 00000110
bitwiseOperator(6,23, bitwiseOR) //00010111
bitwiseOperator(6,23, bitwiseOR) //00010001

/////////////////////////////////////
Question
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.
Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].


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


// solution2
// var twoSum = function(nums, target) {
//     let res = [];
//     let map = new Map();
//     for (let i=0; i<nums.length; i++) {
//         if (map.has(target-nums[i])) {
//             res.push(map.get(target-nums[i]));
//             res.push(i);
//             return res;
//         } 
//         map.set(nums[i], i); 
//     } 
// };


// solution3
// time O(n) space O(n)
// var twoSum = function(nums, target) {
//     const map = new Map()
    
//     for(let i=0; i<nums.length; i++) {
//         const number = nums[i]
//         const complement = target - number
        
//         if(map.has(complement)) {
//             return [i, map.get(complement)]
//         }
        
//         map.set(number, i)
//     }
// };

