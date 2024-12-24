/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    if (str1 + str2 !== str2 + str1) {
        return "";
    }
    
    function gcd(a, b) {
        while (b) {
            [a, b] = [b, a % b];
        }
        return a;
    }
    
    // The length of the largest common divisor will be the GCD of the lengths
    const gcdLength = gcd(str1.length, str2.length);
    
    // Return the prefix of length gcdLength
    return str1.slice(0, gcdLength);
};