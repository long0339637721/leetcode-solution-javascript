/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  let res = "";
  let i = 0;
  let j = 0;
  const n = word1.length + word2.length;
  while (res.length < n) {
    if (i == j) {
      res += word1[i] ?? "";
      i++;
    } else {
      res += word2[j] ?? "";
      j++;
    }
  }
  return res;
};
