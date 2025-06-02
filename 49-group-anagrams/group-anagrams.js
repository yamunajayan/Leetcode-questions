/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    //hashMap
    const hashMap = new Map();

    strs.forEach(str => {
        const sortedStr = str.split('').sort().join('');
        if(hashMap.has(sortedStr)) {
            hashMap.get(sortedStr).push(str)
        } else {
            hashMap.set(sortedStr, [str])
        }
    })
    
    return Array.from(hashMap.values())  
};