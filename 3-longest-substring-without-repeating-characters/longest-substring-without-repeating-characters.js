/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    // //maxString = new Set
    // let subString = new Set();
    // let maxLength = 0;
    // //maxlength = 0
    // //loop through string
    // for (let i=0; i<s.length; i++) {
    //     //if str[i] not in maxString
    //     // if (subString.has(s[i])) {
    //     //     //start new maxString set with str[i] 
    //     //     subString = new Set(s[i]);

    //     // } else {
    //     //     // add str[i] to the set 
    //     //     //currentLength = maxString.length
    //     //     ////maxLength = max(maxLength, currentLength)
    //     //     subString.add(s[i]);
    //     //     maxLength = Math.max(maxLength, subString.size);
    //     // }
            
    // }

    let maxLength = 0;
    let start = 0;
    let subStringMap = new Map();

    for(let i=0;  i<s.length; i++) {

        if (subStringMap.has(s[i]) && subStringMap.get(s[i])>=start) {
            start = subStringMap.get(s[i]) + 1;
        } 
        subStringMap.set(s[i],i);
        maxLength = Math.max(maxLength, (i-start+1));

    }          
    return maxLength;
};