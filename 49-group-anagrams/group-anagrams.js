/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    //hashMap
    let map = new Map();
    for (let str of strs) {
        let chars = Array.from(str);
        chars.sort();
        let key = chars.join("");
        if(!map.has(key)) {
            map.set(key, []);
        }
        map.get(key).push(str);
    }
    return Array.from(map.values()); 
};