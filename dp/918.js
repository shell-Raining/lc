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

function getSum(nums) {
  let res = 0;
  if (nums.length === 0) {
    return 0;
  }
  res = nums.reduce((previous, current) => {
    return previous + current;
  }, 0);

  return res;
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function (nums) {
  let n = nums.length;
  let dpmin = new Array(n).fill(0);
  let dpmax = new Array(n).fill(0);
  dpmin[0] = nums[0];
  dpmax[0] = nums[0];
  for (let i = 1; i < n; i++) {
    dpmax[i] = Math.max(dpmax[i - 1] + nums[i], nums[i]);
    dpmin[i] = Math.min(dpmin[i - 1] + nums[i], nums[i]);
  }
  let res1 = getMax(dpmax);
  let res2 = getMin(dpmin.slice(1, n - 1));
  let arrSum = getSum(nums);
  console.log(dpmax);
  console.log(dpmin);
  return Math.max(res1, arrSum - res2);
};

let res;
res = maxSubarraySumCircular([1, -2, 3, -2]);
console.log(res);
res = maxSubarraySumCircular([5, -3, 5]);
console.log(res);
res = maxSubarraySumCircular([3, -2, 2, -3]);
console.log(res);
res = maxSubarraySumCircular([-3, -2, -3]);
console.log(res);
