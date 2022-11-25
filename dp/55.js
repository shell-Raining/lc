/**
 * @param {number[]} nums
 * @param {number} index
 * @return {boolean}
 */
function inBridge(nums, index) {
  for (let i = index - 1; i >= 0; i--) {
    if (i + nums[i] > index || i + nums[i] >= nums.length - 1) {
      return true;
    }
  }
  return false;
}

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var jump = function (nums) {
  // 1. slow method
  // let n = nums.length;
  // if (n === 1) {
  //   return true;
  // }
  // for (let i = n - 1; i >= 0; i--) {
  //   if (nums[i] === 0) {
  //     if (!inBridge(nums, i)) {
  //       return false;
  //     }
  //   }
  // }
  // return true;

  // 2. greedy method
  let n = nums.length;
  let right = 0;
  for (let i = 0; i < n; i++) {
    if (i > right) {
      return false;
    }
    if (right >= n - 1) {
      return true;
    }
    right = right > i + nums[i] ? right : i + nums[i];
  }
  return true;
};

let res = jump([2, 3, 1, 1, 4]);
console.log(res);
res = jump([3, 2, 1, 0, 4]);
console.log(res);
res = jump([2, 0, 0]);
console.log(res);
