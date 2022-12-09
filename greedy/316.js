/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function (s) {
  let arr = new Array(26).fill(0);
  let begin = "a".charCodeAt(0);
  let res = "";
  for (let i = 0; i < s.length; i++) {
    arr[s.charCodeAt(i) - begin] = 1;
  }
  for (let i = 0; i < 26; i++) {
    if (arr[i] === 1) {
      res += String.fromCharCode(i + begin);
    }
  }
  return res;
};

let res = removeDuplicateLetters("bcabc");
console.log(res);
