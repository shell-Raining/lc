function getMax(nums) {
  let res = 0;
  if (nums.length === 0) {
    return 0;
  }
  res = nums.reduce((previous, current) => {
    return Math.max(previous, current);
  }, Number.MIN_SAFE_INTEGER);

  return res;
}

/**
 * @param {number[]} values
 * @return {number}
 */
var maxScoreSightseeingPair = function (values) {
  let n = values.length;
  let dp = new Array(n).fill(0);
  let res = 0;
  for (let i = 1; i < n; i++) {
    dp[i] = Math.max(dp[i - 1], values[i - 1] + i - 1);
    res = Math.max(res, dp[i] + values[i] - i);
  }
  return res;
};

let res = maxScoreSightseeingPair([8, 1, 5, 2, 6]);
console.log(res);
res = maxScoreSightseeingPair([1, 2]);
console.log(res);
