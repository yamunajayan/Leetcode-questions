/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let n=nums.length;
    
    k = k % n;
    
    reverse(0, n-1, nums);
    reverse(0,k-1, nums);
    reverse(k, n-1, nums);
    return nums;
    
};

var reverse = function(i, j, arr) {
    while(i<j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;
        j--
    }
}