function maxSubArray(nums) {
  let max = 0;
  let maxSum = nums[0];
  let n = nums.length;

  for (let i = 0; i < n; i++) {
    max += nums[i];
    if (max > maxSum) {
      maxSum = max;
    }
    if (max < 0) {
      max = 0;
    }
  }

  return maxSum;
}

let ans;
ans = maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
console.log(ans);
ans = maxSubArray([1]);
console.log(ans);
ans = maxSubArray([5, 4, -1, 7, 8]);
console.log(ans);
ans = maxSubArray([-2, -1]);
console.log(ans);
ans = maxSubArray([-1]);
console.log(ans);
