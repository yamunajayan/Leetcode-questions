/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    //hashMap

    const hashSet = new Set(nums);
    let maxLength = 0;
    hashSet.forEach(num => {
        //check if previous number is there or not
        if (!hashSet.has(num-1)) {
            let currentNum = num;
            let currentLength = 1;

            while (hashSet.has(currentNum+1)) {
                currentLength+=1;
                currentNum += 1;
            }
            maxLength = Math.max(currentLength, maxLength)

        }
    })
    return maxLength; 
  
};