/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    //left and right pointer 
    //subtract nums * right-left
    //store max value

    let maxArea = 0;

    let left=0, right = height.length-1;
    
    while (left<right) {
        let currentArea = Math.min(height[right], height[left])*(right-left);
        maxArea = Math.max(currentArea, maxArea);
        if (height[left]<=height[right]) {
            left++;
        } else {
            right--
        }
    }

    return maxArea;
    
};