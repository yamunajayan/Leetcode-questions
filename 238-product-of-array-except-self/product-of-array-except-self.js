/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let result = [];

    for(let i=0; i<nums.length; i++) {
        if (i === 0) {
            result[i]=1;
        } else {
            result[i] = result[i-1]*nums[i-1]
        }
    }

    let right = 1

    for(let i=nums.length-1; i>=0; i--){

        result[i] = result[i]*right;
        right = right*nums[i];
    }

    return result
};