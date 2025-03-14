/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
  const n = isConnected.length;
  const visited = Array(n).fill(false);
  let res = 0;
  const dfs = (i) => {
    visited[i] = true;
    for (let j = 0; j < n; j++) {
      if (!visited[j] && isConnected[i][j]) {
        dfs(j);
      }
    }
  };
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      res++;
      dfs(i);
    }
  }
  return res;
};
