/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let n = prices.length;
  let dp = new Array(n).fill(Number.MAX_SAFE_INTEGER);
  let res = 0;
  for (let i = 1; i < n; i++) {
    dp[i] = Math.min(dp[i - 1], prices[i - 1]);
    res = Math.max(res, prices[i] - dp[i]);
  }
  console.log(dp);
  return res;
};

let res;
res = maxProfit([7, 1, 5, 3, 6, 4]);
console.log(res);
res = maxProfit([7, 6, 4, 3, 1]);
console.log(res);
