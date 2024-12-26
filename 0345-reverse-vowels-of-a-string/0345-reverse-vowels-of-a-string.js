/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
        let left = 0, right = s.length-1;
    
    let sArray = s.split('');
    
    while(left<right){
        while (left<right) {
        //while for left
            if (["a", "e", "i", "o", "u"].includes(sArray[left].toLowerCase())) {
//             console.log(sArray[left]); // Log the first vowel
            break; // Exit the loop
            }
            left += 1;
        }
        
        while (left<right) {
        //while for left
            if (["a", "e", "i", "o", "u"].includes(sArray[right].toLowerCase())) {
//             console.log(sArray[right]); // Log the first vowel
            break; // Exit the loop
            }
            right -= 1;
        }

        let temp = sArray[left];
        sArray[left] = sArray[right];
        sArray[right] = temp;
        left += 1;
        right -= 1;
    }
    
    return sArray.join('');
};