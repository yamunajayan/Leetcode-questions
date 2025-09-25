/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {

    if (s.length !== t.length) return false;

    let sHashMap = new Map();
    let tHashMap = new Map();

    for (let i=0; i< s.length; i++) {
        sHashMap.set(s[i], (sHashMap.get(s[i]) || 0) +1);
        tHashMap.set(t[i], (tHashMap.get(t[i]) || 0) +1);
    }

    for (let [key, val] of sHashMap) {
        if (tHashMap.get(key) !== val) {
            return false
        }
    }
    return true
    
};