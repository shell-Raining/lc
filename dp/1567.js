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
var getMaxLen = function (nums) {
  let n = nums.length;
  let pos = new Array(n + 1).fill(0);
  let neg = new Array(n + 1).fill(0);

  for (let i = 1; i <= n; i++) {
    if (nums[i - 1] > 0) {
      pos[i] = pos[i - 1] + 1;
      if (neg[i - 1] == 0) {
        neg[i] = 0;
      } else {
        neg[i] = neg[i - 1] + 1;
      }
    } else if (nums[i - 1] < 0) {
      neg[i] = pos[i - 1] + 1;
      if (neg[i - 1] == 0) {
        pos[i] = 0;
      } else {
        pos[i] = neg[i - 1] + 1;
      }
    } else {
      pos[i] = 0;
      neg[i] = 0;
    }
  }

  return getMax(pos);
};

let res;
res = getMaxLen([1, -2, -3, 4]);
console.log(res);
res = getMaxLen([0, 1, -2, -3, -4]);
console.log(res);
res = getMaxLen([-1, -2, -3, 0, 1]);
console.log(res);
