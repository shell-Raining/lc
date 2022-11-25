/**
 * @param {number[]} arr
 * @return {number}
 */
function arrayMax(arr) {
  let init = 0;
  let res = arr.reduce((previous, current) => {
    return Math.max(previous, current);
  }, init);
  return res;
}

/**
 * @param {number[]} arr
 * @return {number[]}
 */
function arrayWithoutDuplicates(arr) {
  let res = arr.reduce((previous, current) => {
    if (previous.indexOf(current) == -1) {
      previous.push(current);
    }
    return previous;
  }, []);
  return res;
}

/**
 * @param {number[]} arr
 * @return {number[]}
 */
function arrayCounted(arr) {
  let countDict = arr.reduce(function (allNames, name) {
    if (name in allNames) {
      allNames[name]++;
    } else {
      allNames[name] = 1;
    }
    return allNames;
  }, {});

  arr = Array.from(new Set(arr));
  let res = arr.map((x) => {
    return countDict[x];
  });
  return res;
}

var rob = function (nums) {
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

/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function (nums) {
  let nums1 = arrayWithoutDuplicates(nums);
  let nums2 = arrayCounted(nums);
  let max = arrayMax(nums1);
  let newNums = new Array(max + 1).fill(0);
  for (let i = 0; i < nums2.length; i++) {
    newNums[nums1[i]] = nums1[i] * nums2[i];
  }
  console.log(nums1);
  console.log(nums2);
  console.log(newNums);
  return rob(newNums);
};

let res = deleteAndEarn([3, 3, 3, 4, 2]);
console.log(res);
