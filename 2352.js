/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function (grid) {
  const n = grid.length;
  let res = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < n; k++) {
        if (grid[i][k] !== grid[k][j]) {
          res--;
          break;
        }
      }
      res++;
    }
  }
  return res;
};
