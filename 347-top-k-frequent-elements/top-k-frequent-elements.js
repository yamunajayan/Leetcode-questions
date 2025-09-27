/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {

    let hashMap = new Map();

    nums.forEach((num) => {
        hashMap.set(num, (hashMap.get(num) || 0) +1)
    })

    let sorted = [...hashMap.entries()].sort((a, b) => b[1] - a[1])

    return sorted.slice(0, k).map(([num]) => num);

};