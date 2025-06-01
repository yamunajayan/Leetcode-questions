/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let hashMap = new Map();

    nums.forEach((num) => {
        hashMap.set(num, (hashMap.get(num) || 0)+1)
    })

    const sortedArray = [...hashMap.entries()].sort((a,b) => b[1]-a[1])
    let result = []

    for (let i=0; i<k; i++) {
        result.push(sortedArray[i][0])
    }

    return result    
};