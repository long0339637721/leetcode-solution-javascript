/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  if (s.length === 0) {
    return true;
  }
  let i = 0;
  let n = s.length;
  for (let j of t) {
    if (s[i] === j) {
      i++;
      if (i === n) {
        return true;
      }
    }
  }
  return false;
};
