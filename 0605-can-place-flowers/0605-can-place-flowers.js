/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    for(let i=0; i<flowerbed.length; i++) {
        // check if the current value is 0 and (previous value is 0 or if the i ==0) and (next value is 0 or i=length-1)
        if (flowerbed[i]===0 &&
            (i===0 || flowerbed[i-1]===0) &&
           (flowerbed[i+1]===0 || i === flowerbed.length-1)) {
            flowerbed[i] = 1;
            n -= 1;
        }
        
    }
    
    return n<=0;  
};