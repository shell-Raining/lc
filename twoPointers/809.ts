function expressiveWords(s: string, words: string[]): number {
  let i = 0;
  let j = 0;
  let strLen = s.length;
  let strNum = words.length;
  let res = 0;
  let count = 0;

  for (let k = 0; k < strNum; k++) {
    let tempStr = words[k];
    while (i < strLen && j < tempStr.length) {
      if (s[i] === tempStr[j]) {
        count++;
        i++;
      } else {
        if (true) {
        }
      }
    }
  }

  return res;
}

let res = expressiveWords("heeellooo", ["hello", "hi", "helo"]);
console.log(res);
