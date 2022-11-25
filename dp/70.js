/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  // the num of choices of n was denoted as f(n), so f(n) = f(n-1) + f(n-2)
  // f(n) = f(n-1) + f(n-2) + 2
  if (n <= 2) {
    return n;
  }

  let a = 1;
  let b = 2;
  let c = 3;
  for (let i = 3; i <= n; i++) {
    c = a + b;
    a = b;
    b = c;
  }
  return c;
};

let res = climbStairs(3);
console.log(res);
