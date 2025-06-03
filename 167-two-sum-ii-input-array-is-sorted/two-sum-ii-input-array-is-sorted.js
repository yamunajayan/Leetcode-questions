/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {

    let left=0, right=numbers.length-1;
    
    // console.log(left, right)

    while(left<right) {
        let currentSum = numbers[left] + numbers[right];
        // console.log(currentSum);
        if (currentSum > target ) {
            right --;
            // console.log("right"+ right);
        } else if (currentSum < target ){
            left ++;
            // console.log("left", left);
        } else {
            return [left+1, right+1]
        }
    }
    
};