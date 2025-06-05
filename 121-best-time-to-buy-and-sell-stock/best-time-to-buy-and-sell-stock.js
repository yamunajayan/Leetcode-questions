/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {

    const n= prices.length;
    let min=prices[0];
    let maxProfit = 0;
    //right=1
    //max_profit = 0

    //LOOP THROUGH prices:
    for(let i=0; i<n; i++) {

        if (prices[i]<min) min=prices[i];
        let currentProfit = prices[i]-min;
        maxProfit = Math.max(currentProfit, maxProfit);
    }

    return maxProfit;
    
};