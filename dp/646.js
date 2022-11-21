/**
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function (pairs) {
  const n = pairs.length;
  pairs.sort((a, b) => {
    return a[0] - b[0];
  });
  let dp = new Array(n).fill(1);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (pairs[j][1] < pairs[i][0]) {
        dp[i] = Math.max(dp[j] + 1, dp[i]);
      }
    }
  }
  return dp[n - 1];
};
