/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {

    const n = prices.length;
    if(n===0 || n===1) return 0;

    //left=0
    let min=prices[0];
    let maxProfit = 0;
    //right=1
    //max_profit = 0

    //LOOP THROUGH prices:
    for(let i=0; i<n; i++) {

        if (prices[i]<min) min=prices[i];
        let currentProfit = prices[i]-min;
        maxProfit = Math.max(currentProfit, maxProfit);
        // //check if number[left]<num[right]:
        // if(prices[i] < prices[right]) {
        //     let currentProfit = prices[right]-prices[left];
        //     // is less min and max_profit < current 
        //maxProfit = Math.max(currentProfit, maxProfit);
            
        // } else {
        //     //if not:
        //     //left = right
        //     left = right;
        // }
        // right += 1
    }

    return maxProfit;
    
};