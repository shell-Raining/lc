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
 * @param {number[]} nums
 * @return {number}
 */
function lengthOfLIS(nums) {
  // f(i) = max(f(k)) + 1
  // where k < i and v[k] < v[i]
  let n = nums.length;
  let dp = new Array(n).fill(0);
  dp[0] = 1;

  for (let i = 1; i < n; i++) {
    let temp = [];
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        temp.push(dp[j]);
      }
    }
    dp[i] = getMax(temp) + 1;
  }

  return getMax(dp);
}

let res = lengthOfLIS([1, 3, 6, 7, 9, 4, 10, 5, 6]);
console.log(res);
