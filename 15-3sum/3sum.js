/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let result = []

    nums.sort((a,b) => a-b);
    
//     console.log(nums);
    
    for(let i=0; i<nums.length; i++) {
        if(nums[i] === nums[i-1]) continue;
        
//         console.log("num", nums[i]);
        
        let left=i+1, right=nums.length-1;
        
        while(left<right){
            let currentSum = nums[i] + nums[left] + nums[right];
//             console.log("sum", currentSum, "right", nums[right], "left", nums[left]);
            if (currentSum>0) {
                right--;
            } else if (currentSum<0) {
                left ++;
            } else {
                result.push([nums[i],nums[left],nums[right]]);
                while (left < right && nums[left] === nums[left + 1]) left++;
                // Skip duplicate right values
                while (left < right && nums[right] === nums[right - 1]) right--;
                left++;
                right--;
            }
        }
    }
    
    return result;
    
};