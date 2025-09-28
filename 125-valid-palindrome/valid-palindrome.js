/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {

    let left=0, right=s.length-1;

    while(left<right) {
        while(left<right && !isAlphaNumeric(s[left])) {
                left += 1;          
        }

        while (right>left && !isAlphaNumeric(s[right])) {
                right -= 1;
        }

        if (s[left].toLowerCase() !== s[right].toLowerCase()) return false;

        left += 1;
        right -= 1;
    }
    return true;
};

var isAlphaNumeric = function(char) {
    let asciValueChar = char.charCodeAt(0);
    return ((asciValueChar>=48 && asciValueChar<=57) ||
        (asciValueChar>=65 && asciValueChar<=90) ||
        (asciValueChar>=97 && asciValueChar<=122) );
}