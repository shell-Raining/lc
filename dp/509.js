/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  if (n == 0) {
    return 0;
  } else if (n == 1) {
    return 1;
  }

  let arr = new Array(n + 1).fill(0);
  arr[1] = 1;
  for (let i = 2; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr[n];
};

let res = fib(3);
console.log(res);
