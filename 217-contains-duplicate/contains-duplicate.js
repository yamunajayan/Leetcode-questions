/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let hashMap = new Set();

    for (let i=0; i<nums.length; i++) {
        if (hashMap.has(nums[i])) {
            return true;
        } 
        hashMap.add(nums[i])
    }

    return false
    
};