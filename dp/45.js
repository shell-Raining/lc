/**
 * @param {number[]} nums
 * @return {number}
 */
function getMin(nums) {
  if (nums.length === 0) {
    return 0;
  }
  let res = nums.reduce((previous, current) => {
    return Math.min(previous, current);
  }, Number.MAX_SAFE_INTEGER);
  return res;
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  // f(i) = min(f(i-k))+1, and vk >= k
  let n = nums.length;
  let dp = new Array(n).fill(0);
  for (let i = 1; i < n; i++) {
    let temp = [];
    for (let j = 1; j <= i; j++) {
      if (nums[i - j] >= j) {
        temp.push(dp[i - j]);
      }
    }
    dp[i] = getMin(temp) + 1;
    console.log(`dp[${i}] is ${dp[i]}`);
  }
  return dp[n - 1];
};

console.log(getMin([]));

let res = jump([2, 3, 1, 1, 4]);
console.log(res);
res = jump([2, 3, 0, 1, 4]);
console.log(res);
