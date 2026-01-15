/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    k = k % nums.length;
    if (nums.length <= 1 || k===0) return nums;
    nums.splice(0, nums.length, 
        ...nums.slice(-k), 
        ...nums.slice(0, nums.length - k)
    );
    
};