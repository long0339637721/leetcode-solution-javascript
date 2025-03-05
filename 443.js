/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
  let i = 0;
  let res = 0;
  let n = chars.length;
  while (i < n) {
    let j = i + 1;
    while (chars[j] === chars[i] && j < n) {
      j++;
    }
    chars[res++] = chars[i];
    if (j - i > 1) {
      str = (j - i).toString().split("");
      for (let i of str) {
        chars[res++] = i;
      }
    }
    i = j;
  }
  return res;
};
