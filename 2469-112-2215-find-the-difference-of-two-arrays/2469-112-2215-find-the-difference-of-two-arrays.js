/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    const uniqueSet1 = new Set(nums1);
    const uniqueSet2 = new Set(nums2);
    
    const diff1 = [...uniqueSet1].filter((num) => !uniqueSet2.has(num));
    const diff2 = [...uniqueSet2].filter((num) => !uniqueSet1.has(num));
         
    
    return[diff1, diff2];
};