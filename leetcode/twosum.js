
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



