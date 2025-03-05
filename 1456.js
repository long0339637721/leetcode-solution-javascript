/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
  let i = 0,
    j = 0,
    count = 0;
  const n = s.length;
  while (j < k) {
    if (
      s[j] === "a" ||
      s[j] === "u" ||
      s[j] === "o" ||
      s[j] === "i" ||
      s[j] === "e"
    ) {
      count++;
    }
    j++;
  }
  let res = count;
  while (j < n) {
    if (
      s[j] === "a" ||
      s[j] === "u" ||
      s[j] === "o" ||
      s[j] === "i" ||
      s[j] === "e"
    ) {
      count++;
    }
    if (
      s[i] === "a" ||
      s[i] === "u" ||
      s[i] === "o" ||
      s[i] === "i" ||
      s[i] === "e"
    ) {
      count--;
    }
    if (count > res) {
      res = count;
    }
    j++;
    i++;
  }
  return res;
};
