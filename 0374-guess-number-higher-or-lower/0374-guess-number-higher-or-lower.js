/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    let left = 1;
    let right = n;

    if (left === right) {
        return right;
    }

    while (left<=right) {
        let mid = parseInt((left+right)/2);
        let guessCheck = guess(mid);
        if (guessCheck === 0) return mid;
        if (guessCheck === -1) {
            right = mid -1;
        } else {
            left = mid +1;
            
        }
    }    
};