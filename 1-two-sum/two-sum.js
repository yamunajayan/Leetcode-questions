/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

    let numMap = new Map()

    nums.forEach((num) => {

    })

    for(let i=0; i<nums.length; i++) {
        let compliment = target-nums[i]
        if (numMap.has(compliment)) {
            return [numMap.get(compliment), i]
        } else {
            numMap.set(nums[i], i)
        }
    }

    return 0   
};