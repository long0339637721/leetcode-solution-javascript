/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function (grid) {
  const n = grid.length;
  let flag = Array(n * n + 1).fill(0);
  let res;
  let sum = 0;
  for (let r of grid) {
    for (let c of r) {
      sum += c;
      if (flag[c]++ === 1) {
        res = c;
      }
    }
  }
  return [res, res + ((n ** 4 + n ** 2) / 2 - sum)];
};
