/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function(spells, potions, success) {
    potions = potions.sort((a,b)=>a-b);
    let pairsArray = [];

    for (let i=0; i<spells.length;i++) {
        let left = 0;
        let right = potions.length-1;
        let target = success/spells[i];

        while (left<=right) {
            let mid = Math.floor((left+right)/2);
            if(potions[mid]>=target) {
                right = mid-1;
            } else {
                left = mid+1;
            }
        }
        pairsArray.push(potions.length-left)
    }
    return pairsArray;
  
};