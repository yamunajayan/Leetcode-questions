/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let result = [];

    let sortedNums = nums.sort((a,b) => a-b);

    for (let i=0; i<sortedNums.length; i++) {
        if (sortedNums[i] !== sortedNums[i-1]) {
            let left = i+1, right = sortedNums.length-1;
            while(left<right) {
                let sum = sortedNums[i] + sortedNums[left] + sortedNums[right]
                if (sum === 0) {
                    result.push([sortedNums[i], sortedNums[left], sortedNums[right]]);
                    left++;
                    right--;
                    while (left<right && sortedNums[left] === sortedNums[left-1]) left++;
                    while (left<right && sortedNums[right] === sortedNums[right+1]) right--;
                } else if(sum<0) {
                    left++
                } else {
                    right--;
                }
                
            }
          
        } 
    }

    return result;

    
};