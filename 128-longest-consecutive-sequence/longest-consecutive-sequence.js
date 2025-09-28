/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    //hashMap

    let hashSet = new Set();

    nums.forEach(num => {
        if(!hashSet.has(num)) {
            hashSet.add(num)
        }
    })

    let maxCount = 0;
    
    hashSet.forEach((value) => {
        if( !hashSet.has(value-1)) {
            let count = 0;
            let num = value
            while(hashSet.has(num)) {
                count++;
                num++;
            }

            maxCount = Math.max(count, maxCount);
        }
    })

    return maxCount;

  
};