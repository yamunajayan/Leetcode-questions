/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {

    const n = prices.length;
    if(n===0 || n===1) return 0;

    //left=0
    let left=0, right =1;
    let maxProfit = 0
    //right=1
    //max_profit = 0

    //LOOP THROUGH prices:
    while (right<n) {
        //check if number[left]<num[right]:
        if(prices[left] < prices[right]) {
            let currentProfit = prices[right]-prices[left];
            // is less min and max_profit < current profiti //update maxprofit
            maxProfit = Math.max(currentProfit, maxProfit);
            
        } else {
            //if not:
            //left = right
            left = right;
        }
        right += 1
    }

    return maxProfit;
    
};