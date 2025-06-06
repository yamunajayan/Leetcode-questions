/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {

    //left pointer = 0,
    //hashMap = {}
    let count = new Map();
    let left =0;
    let maxFreq = 0; 
    let result = 0;

    //loop right pointer:
    for(let right=0; right<s.length; right++) {
        //add the element in the count
        count.set(s[right], (count.get(s[right]) || 0)+1);
        //find the maxFreq
        maxFreq = Math.max(maxFreq, count.get(s[right]));

        while ((right-left+1)-maxFreq > k) {
            count.set(s[left], count.get(s[left])-1);
            left += 1;
        }

        result = Math.max(result, right-left+1);

    }

    return result;    
};