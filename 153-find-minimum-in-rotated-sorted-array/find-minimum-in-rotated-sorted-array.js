/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {

    let left=0, right=nums.length-1;
    let minElement = nums[left]

    while (left<right) {
        let mid = Math.floor((left+right)/2)
        if (nums[mid]>nums[right]) {
            left = mid+1;
        } else {
            right = mid
        }

    }
    return nums[left];
    
};