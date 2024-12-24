/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
        //find the max value from the candies
    let maxValue = candies[0];
    for(i=1;i<candies.length; i++){
        maxValue = Math.max(maxValue, candies[i]);
    }
    //initiate empty result array
    let result = [];
    //loop till last element:
    for (i=0; i<candies.length; i++){
        result[i] = candies[i]+extraCandies >= maxValue;
        
    }
    return result;
};