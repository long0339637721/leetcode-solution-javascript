/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function (s) {
  let arr = [-1, -1, -1];
  let res = 0;
  for (let i = 0; i < s.length; i++) {
    arr[s[i].charCodeAt(0) - "a".charCodeAt(0)] = i;
    res += Math.min(arr[0], arr[1], arr[2]) + 1;
  }
  return res;
};
