/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  let n = nums.length;
  let arr1 = nums.slice(0, n - 1);
  let arr2 = nums.slice(1);
  if (n == 1) {
    return nums[0];
  }
  return Math.max(rob2(arr1), rob2(arr2));
};

var rob2 = function (nums) {
  let n = nums.length;
  let a = nums[0];
  let b = Math.max(nums[0], nums[1]);
  let c = Math.max(b, a + nums[2]);

  if (n == 0) {
    return 0;
  } else if (n == 1) {
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

let res = rob([1, 2, 3, 1]);
console.log(res);
