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

function getMin(nums) {
  let res = 0;
  if (nums.length === 0) {
    return 0;
  }
  res = nums.reduce((previous, current) => {
    return Math.min(previous, current);
  }, Number.MAX_SAFE_INTEGER);

  return res;
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  // max(i) is the max product of the subarray from 0 to i, and end is v
  // min(i) is the min product of the subarray from 0 to i, and end is v
  // so max(i) = max(max(i-1) * v, min(i-1) * v)
  let n = nums.length;
  let maxdp = new Array(n).fill(0);
  let mindp = new Array(n).fill(0);
  maxdp[0] = nums[0];
  mindp[0] = nums[0];

  for (let i = 1; i < n; i++) {
    mindp[i] = getMin([
      nums[i],
      mindp[i - 1] * nums[i],
      maxdp[i - 1] * nums[i],
    ]);
    maxdp[i] = getMax([
      nums[i],
      maxdp[i - 1] * nums[i],
      mindp[i - 1] * nums[i],
    ]);
  }

  return getMax(maxdp);
};

let res;
res = maxProduct([2, 3, -2, 4]);
console.log(res);
res = maxProduct([-2,0,-1]);
console.log(res);
