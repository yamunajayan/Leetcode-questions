/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    //left and right pointer 
    //subtract nums * right-left
    //store max value

    let maxValue = 0;

    let left=0, right=height.length-1;

    while(left<right) {
        let containerSize = (right-left)* Math.min(height[right],height[left]);
        maxValue = Math.max(containerSize, maxValue);
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxValue;
};