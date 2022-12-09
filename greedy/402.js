/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function (num, k) {
  let stk = [];
  let n = num.length;
  let remain = n - k;

  for (const c of num) {
    while (k && stk.length !== 0 && stk[stk.length - 1] > c) {
      stk.pop();
      k--;
    }
    stk.push(c);
  }
  let res = stk.join("").slice(0, remain);
  let index = 0;
  for(index; index < res.length; index++){
    if(res[index] !== '0'){
      break;
    }
  }

  return res.slice(index) || "0";
};

let res;
res = removeKdigits("1432219", 3);
console.log(res);
res = removeKdigits("10", 1);
console.log(res);
res = removeKdigits("10", 2);
console.log(res);
res = removeKdigits("10200", 1);
console.log(res);
