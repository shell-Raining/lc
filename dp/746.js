/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  // w[i] = min(w[i-1] + cost[i-1], w[i-2] + cost[i-2])
  let n = cost.length;
  let res = new Array(n + 1).fill(0);
  // res[0] = Math.min(cost[0], cost[1]);
  // res[1] = cost[0];
  // console.log(`res ${0} is ${res[0]}`);
  // console.log(`res ${1} is ${res[1]}`);
  for (let i = 2; i <= n; i++) {
    res[i] = Math.min(res[i - 1] + cost[i - 1], res[i - 2] + cost[i - 2]);
    console.log(`res ${i} is ${res[i]}`);
  }
  return res[n];
};

let res = minCostClimbingStairs([10,15,20]);
console.log(res);
