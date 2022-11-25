/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  // dp[i] = max(dp[i-1] + dp[i-2] + g[i])

  // 1. not use scroll array
  // let n = nums.length;
  // let dp = new Array(n).fill(0);
  // dp[0] = nums[0];
  // dp[1] = Math.max(nums[0], nums[1]);
  // for (let i = 2; i < n; i++) {
  //   dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
  // }
  //
  // return dp[n - 1];

  // 2. use scroll array

  let n = nums.length;
  let a = nums[0];
  let b = Math.max(nums[0], nums[1]);
  let c = Math.max(b, a + nums[2]);

  if (n == 1) {
    return a;
  } else if (n == 2) {
    return b;
  }
  for (let i = 2; i < n; i++) {
    c = Math.max(b, a + nums[i]);
    a = b;
    b = c;
  }
  return c;
};

let res = rob([2, 7, 9, 3, 1]);
console.log(res);
